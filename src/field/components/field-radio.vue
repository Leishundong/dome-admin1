<template>
  <form-item :label="label" :prop="prop" :width="width" :rules="cRules">
    <el-radio-group v-model="copyVal" :disabled="cDisabled" :size="size"  @change="change">
      <el-radio :border="cBorder"
                v-for="item in cList"
                :label="item.key" :key="item.key">{{item.val}}</el-radio>
    </el-radio-group>
  </form-item>
</template>

<script>
  import FormItem from './form-item.vue';
  import {initmixinBosInput} from '../common/mixinBosInput';
  export default {
    mixins:[initmixinBosInput],
    components: {
      FormItem
    },
    props: {
      size:{
        type:String
      },
      border: {
        type: [Boolean, String],
        default: false
      },
      filter: {
        type: [Object],
        default: null
      },
      disabled: {
        type: [Boolean, String],
        default: false
      },
      bool: {//是否为true/false
        type: Boolean,
        default: false
      }
    },
    computed: {
      cBorder(){
        return this.transformBoolean(this.border);
      },
      cDisabled(){
        return this.transformBoolean(this.disabled,true);
      },
      cList() {
        return Object.entries(this.filter).map(x => Object.assign({key: this.bool?(x[0] === "true"):x[0], val: x[1]}));
      }
    }
  }

</script>
