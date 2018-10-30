<template>
  <form-item :label="label" :prop="prop" width="10" >
    <el-upload
      action="string"
      list-type="picture-card"
      :limit="max"
      :file-list="cFileList"
      :disabled="cDisabled"
      :http-request="uploadSectionFile"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :before-upload="beforeAvatarUpload"
      :on-exceed="handleExceed">
      <i class="el-icon-plus"></i>
    </el-upload>

    <el-dialog :visible.sync="dialog.showFlag">
      <img width="100%" :src="dialog.imageUrl"/>
    </el-dialog>
  </form-item>
</template>

<script>
  import axios from 'axios'
  import FormItem from './form-item.vue';
  import {initmixinBosInput} from '../common/mixinBosInput';
  import {uploadVariables} from '../common/upload';

  export default {
    mixins: [initmixinBosInput],
    components: {FormItem},
    props: {
      max: {
        type: Number,
        default: 5,
      },
      disabled: {
        type: [Boolean, String],
        default: false
      },
    },

    computed: {
      cFileList(){
        if(!this.copyVal)return [];
        let fileArr=this.copyVal.split(/,|，/),
          arr=[];
        fileArr.map((item)=>{
          arr.push({name:item, url:uploadVariables.prefix+item})
        });
        return arr;
      },
      cDisabled() {
        return this.transformBoolean(this.disabled, true);
      }
    },
    data() {
      return {
        dialog: {
          showFlag: false,
          imageUrl: ''
        },
        sts: uploadVariables.sts,
        imgPrefixUrl: uploadVariables.prefix
      }
    },
    methods: {
      handlePictureCardPreview(file) {
        this.dialog.imageUrl = file.url;
        this.dialog.showFlag = true;
      },
      handleRemove(file) {
        let arr=this.copyVal.split(/,|，/),
          index=arr.indexOf(file.name);
        arr.splice(index,1);
        this.copyVal=arr.join(',');
        this.$emit('change',this.cFileList);
      },
      beforeAvatarUpload(file) {
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          this.$message.error('上传图片大小不能超过 2MB!');
        }
        return isLt2M;
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 ${this.max} 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      uploadSectionFile(e) {
        let files = e.file;
        if(!this.sts)throw new Error('Please use ElementField.upload set STS')
        axios.get(this.sts).then((result) => {
          let data=result.data,
              credentials=data.assumeRoleResponse.credentials;

          const client = new OSS({
            endpoint: data.endpoint,
            bucket:   data.bucketName,
            accessKeyId: credentials.accessKeyId,
            accessKeySecret:credentials.accessKeySecret,
            stsToken: credentials.securityToken,
          });

          const storeAs = data.resourceId;
          client.multipartUpload(storeAs, files).then((results) => {
            if (results.name) {
              this.copyVal=`${this.copyVal?this.copyVal+',':''}${results.name}`;
              this.$emit('change',this.cFileList);

            }
          }).catch((err) => {
            console.error(err);
          });
        }).catch((err) => {
          console.error(err);
        });
      }
    },
  }
</script>


