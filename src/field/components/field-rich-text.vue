<template>

  <form-item :label="label" :prop="prop" :width="10" class="field-rich-text">
    <quill-editor v-model="copyVal"
                  ref="myTextEditor"
                  :options="editorOption"
    >
      <div id="toolbar" slot="toolbar">
        <span class="ql-formats"><button type="button" class="ql-bold"></button></span>
        <span class="ql-formats"><button type="button" class="ql-italic"></button></span>
        <span class="ql-formats"><button type="button" class="ql-underline"></button></span>
        <span class="ql-formats"><button type="button" class="ql-strike"></button></span>
        <span class="ql-formats"><button type="button" class="ql-blockquote"></button></span>
        <span class="ql-formats"><button type="button" class="ql-code-block"></button></span>
        <span class="ql-formats"><button type="button" class="ql-header" value="1"></button></span>
        <span class="ql-formats"><button type="button" class="ql-header" value="2"></button></span>
        <span class="ql-formats"><button type="button" class="ql-list" value="ordered"></button></span>
        <span class="ql-formats"><button type="button" class="ql-list" value="bullet"></button></span>
        <span class="ql-formats"><button type="button" class="ql-script" value="sub"></button></span>
        <span class="ql-formats"><button type="button" class="ql-script" value="super"></button></span>
        <span class="ql-formats"><button type="button" class="ql-indent" value="-1"></button></span>
        <span class="ql-formats"><button type="button" class="ql-indent" value="+1"></button></span>
        <span class="ql-formats"> <button type="button" class="ql-direction" value="rtl"></button></span>

        <span class="ql-formats"><select class="ql-size">
        <option value="small"></option>
        <option selected></option>
        <option value="large"></option>
        <option value="huge"></option>
      </select></span>
        <span class="ql-formats"><select class="ql-header">
        <option value="1"></option>
        <option value="2"></option>
        <option value="3"></option>
        <option value="4"></option>
        <option value="5"></option>
        <option value="6"></option>
        <option selected="selected"></option>
      </select></span>
        <span class="ql-formats"><select class="ql-color">
        <option selected="selected"></option>
        <option value="#e60000"></option>
        <option value="#ff9900"></option>
        <option value="#ffff00"></option>
        <option value="#008a00"></option>
        <option value="#0066cc"></option>
        <option value="#9933ff"></option>
        <option value="#ffffff"></option>
        <option value="#facccc"></option>
        <option value="#ffebcc"></option>
        <option value="#ffffcc"></option>
        <option value="#cce8cc"></option>
        <option value="#cce0f5"></option>
        <option value="#ebd6ff"></option>
        <option value="#bbbbbb"></option>
        <option value="#f06666"></option>
        <option value="#ffc266"></option>
        <option value="#ffff66"></option>
        <option value="#66b966"></option>
        <option value="#66a3e0"></option>
        <option value="#c285ff"></option>
        <option value="#888888"></option>
        <option value="#a10000"></option>
        <option value="#b26b00"></option>
        <option value="#b2b200"></option>
        <option value="#006100"></option>
        <option value="#0047b2"></option>
        <option value="#6b24b2"></option>
        <option value="#444444"></option>
        <option value="#5c0000"></option>
        <option value="#663d00"></option>
        <option value="#666600"></option>
        <option value="#003700"></option>
        <option value="#002966"></option>
        <option value="#3d1466"></option>
      </select></span>
        <span class="ql-formats"> <select class="ql-background">
        <option value="#000000"></option>
        <option value="#e60000"></option>
        <option value="#ff9900"></option>
        <option value="#ffff00"></option>
        <option value="#008a00"></option>
        <option value="#0066cc"></option>
        <option value="#9933ff"></option>
        <option selected="selected"></option>
        <option value="#facccc"></option>
        <option value="#ffebcc"></option>
        <option value="#ffffcc"></option>
        <option value="#cce8cc"></option>
        <option value="#cce0f5"></option>
        <option value="#ebd6ff"></option>
        <option value="#bbbbbb"></option>
        <option value="#f06666"></option>
        <option value="#ffc266"></option>
        <option value="#ffff66"></option>
        <option value="#66b966"></option>
        <option value="#66a3e0"></option>
        <option value="#c285ff"></option>
        <option value="#888888"></option>
        <option value="#a10000"></option>
        <option value="#b26b00"></option>
        <option value="#b2b200"></option>
        <option value="#006100"></option>
        <option value="#0047b2"></option>
        <option value="#6b24b2"></option>
        <option value="#444444"></option>
        <option value="#5c0000"></option>
        <option value="#663d00"></option>
        <option value="#666600"></option>
        <option value="#003700"></option>
        <option value="#002966"></option>
        <option value="#3d1466"></option>
      </select></span>
        <span class="ql-formats"><select class="ql-font">
        <option selected="selected"></option>
        <option value="serif"></option>
        <option value="monospace"></option>
      </select></span>
        <span class="ql-formats">
        <select class="ql-align">
        <option selected="selected"></option>
        <option value="center"></option>
        <option value="right"></option>
        <option value="justify"></option>
      </select>
      </span>
        <span class="ql-formats"><button type="button" class="ql-clean"></button></span>
        <span class="ql-formats"><button type="button" class="ql-link"></button></span>
        <span class="ql-formats">
        <button type="button" @click="imgClick" style="outline:none">
        <svg viewBox="0 0 18 18"> <rect class="ql-stroke" height="10" width="12" x="3" y="4"></rect> <circle
          class="ql-fill" cx="6" cy="7" r="1"></circle> <polyline class="ql-even ql-fill"
                                                                  points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>
      	</button>
      </span>
        <span class="ql-formats"><button type="button" class="ql-video"></button></span>
      </div>
    </quill-editor>
  </form-item>

</template>
<script>
  import axios from 'axios'
  import {quillEditor} from 'vue-quill-editor'
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'

  import FormItem from './form-item.vue';
  import {initmixinBosInput} from '../common/mixinBosInput';
  import {uploadVariables} from '../common/upload';

  export default {
    components: {
      FormItem,
      quillEditor
    },
    mixins: [initmixinBosInput],
    data() {
      return {
        editorOption: {
          modules: {
            toolbar: '#toolbar'
          },
        },
        sts:uploadVariables.sts,
        imgPrefixUrl: uploadVariables.prefix
      }
    },

    methods: {
      /*选择上传图片切换*/
      onFileChange(e) {
        let files = e.target.files;
        if(!this.sts)throw new Error('Please use ElementField.upload set STS');
        axios(this.sts).then((result) => {
          let data = result.data,
            credentials = data.assumeRoleResponse.credentials;
          const client = new OSS({
            endpoint: data.endpoint,
            bucket: data.bucketName,
            accessKeyId: credentials.accessKeyId,
            accessKeySecret: credentials.accessKeySecret,
            stsToken: credentials.securityToken,
          });
          const fileLen = files.length;
          for (let i = 0; i < fileLen; i++) {
            const storeAs = data.resourceId;
            client.multipartUpload(storeAs, files[i]).then((results) => {
              if (results.name) {
                let img = `${this.imgPrefixUrl}${results.name}`,
                  getSelection = this.editor.getSelection(),
                  index = (getSelection != null) ? getSelection.index : 0
                  ;
                this.editor.insertEmbed(index, 'image', img);
              }
            }).catch((err) => {
              console.log(err);
            });
          }
        });
      },
      /*点击上传图片按钮*/
      imgClick() {
        /*内存创建input file*/
        let input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/jpeg,image/png,image/jpg,image/gif';
        input.onchange = this.onFileChange;
        input.click();
      }
    },
    computed: {
      editor() {
        return this.$refs.myTextEditor.quill
      }
    }
  }

</script>


<style>
  .field-rich-text .ql-container.ql-snow {
    height: 200px;
  }
</style>
