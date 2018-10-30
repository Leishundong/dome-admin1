<template>
  <div>
  <el-upload
    action="string"
    list-type="picture-card"
    :limit="max"
    :file-list="fileList"
    :disabled="disabled"
    :http-request="uploadSectionFile"
    :on-preview="handlePictureCardPreview"
    :on-remove="handleRemove"
    :before-upload="beforeAvatarUpload"
    :on-exceed="handleExceed">
    <i class="el-icon-plus"></i>
  </el-upload>
  <el-dialog :visible.sync="dialogVisible">
    <img width="100%" :src="dialogImageUrl" alt="">
  </el-dialog>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {

    props: {
      max: {
        type: Number,
        default: 0,
      },
      fileList: {
        type: Array,

      },
      sts: {
        type: String,
      },
      disabled: {
        type: [Boolean, String],
        default: false
      },
    },
    data() {
      return {
        dialogVisible: false,
        dialogImageUrl: '',
        imgUrl: 'http://mlshopimage.oss-cn-shanghai.aliyuncs.com/',
        imgList: [],
      }
    },
    methods: {
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleRemove(file, fileList) {
        console.log(file);
        this.fileList.forEach((value, index) => {
          if (value.name == file.name) {
            this.fileList.splice(index, 1);
          }
        });
        this.$emit('imgList', this.fileList);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          this.$message.error('上传图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 ${this.max} 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      uploadSectionFile(e) {
        let files = e.file;
        axios.get(this.sts).then((result) => {
          const client = new OSS({
            endpoint: result.data.endpoint,
            bucket: result.data.bucketName,
            accessKeyId: result.data.assumeRoleResponse.credentials.accessKeyId,
            accessKeySecret: result.data.assumeRoleResponse.credentials.accessKeySecret,
            stsToken: result.data.assumeRoleResponse.credentials.securityToken,
          });
          const storeAs = result.data.assumeRoleResponse.requestId;
          client.multipartUpload(storeAs, files).then((results) => {
            console.log(results);
            if (results.name) {
              let img = `${this.imgUrl}${results.name}`;
              this.fileList.push({name: results.name, url: img});
              this.$emit('imgList', this.fileList);
            }
          }).catch((err) => {
            console.log(err);
          });
        }).catch((err) => {
          console.log(err);
        });
      }
    },
  }
</script>

<style scoped>

</style>
