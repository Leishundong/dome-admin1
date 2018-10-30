<template>
  <el-form-item :class="['_form-item',inputBorderClass]"
                :label="label" :prop="prop" :rules="rules"
                :style="boxWidth" :label-width="labelWidth"
  >
    <slot></slot>
  </el-form-item>
</template>

<script>
  export default {
    data(){
      return {
        labelWidth: '120px'
      }
    },
    props: {
      rules:{
        default:null
      },
      prop: {
        type: String,
        default: '',
      },
      label: {
        type: String,
        default: ''
      },
      width: {
        type: [Number, String],
        default: 3.3,
      }
    },
    computed: {
      inputBorderClass(){
        return this.$parent.$parent.$parent._readonly?'_form-item-hidden-border':'';
        //获取 form-container的_readonly，只有使用slot，$parent才能拿到
        //this.$parent为field组件，如field-input.vue
        //this.$parent.$parent为 el-form
        //this.$parent.$parent.$parent为 form-container
      },
      boxWidth(){
          let width=+this.width;
        return `width:${(width-0.05)* 10}%`;
      }
    }

  }
</script>


<style>
  ._form-item{
    display: inline-block;
    vertical-align: top;
  }

  ._form-item._form-item-hidden-border .el-input__inner {
    border: none;
  }

  ._form-item._form-item-hidden-border .el-textarea__inner {
    border: none;

  }
</style>
