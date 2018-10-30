<template>
  <el-form ref="form" :model="model" :rules="rules" :show-message="showMessage">
    <slot></slot>
  </el-form>
</template>


<script>
  export default {
    computed:{
      showMessage(){
          return !this._readonly
      },
      validate(){
        return new Promise((resolve,reject)=>{
          this.$refs.form.validate((valid) => {
            if (valid) {
              resolve(true);
            } else {
              reject(false);
              return false;
            }
          });
        });
      }
    },
    methods:{
      Validate(func){
        this.$refs.form.Validate(func);
      },
      validateField(func){
        this.$refs.form.validateField(func);
      },
      resetFields(){
        this.$refs.form.resetFields();
      },
      clearValidate(func){
        this.$refs.form.clearValidate(func);
      },
      gqlValidate(graphql, variables, sCallback){
        this.validate.then(()=>{
         try{
           this.gqlMutate(graphql, variables, sCallback);
         }
         catch(error){
             console.error(error);   //语法问题检测
           this.$message.error(`${error}`);
         }
        }).catch((error)=>{
          console.log('未通过检验');   //未通过客户端的表单验证
          this.$message.error('未通过检验');
        });
      },
      axiosData(a){
        this.validate.then(()=>{
          a
        }).catch((error)=>{
          console.log('未通过检验');   //未通过客户端的表单验证
          this.$message.error('未通过检验');
        });
      }

    },
    props: {
      _readonly:{
        type:Boolean,
        default: false
      },
      model: {
        type: Object,
        default: {}
      },
      rules:null
    }
  }
</script>
