<template>
  <form-item :label="label" :prop="prop" :width="width" :rules="cRules">
    <el-checkbox-group v-model="copyVal" :disabled="cDisabled"
                       :min="cMin" :max="cMax" :size="size"
                       @change="change" >
      <el-checkbox :border="cBorder"
                   v-for="item in list"
                   :label="item.val||item" :key="item.val||item">{{item.key||item}}
      </el-checkbox>
    </el-checkbox-group>
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
      size: {
        type: String
      },
      border: {
        type: [Boolean, String],
        default: false
      },
      min: {
        type: [Number, String],
        default: 0
      },
      max: {
        type: [Number, String],
        default: 999999
      },
      list: {
        type: Array,
        default: null
      },
      disabled: {
        type: [Boolean, String],
        default: false
      }
    },
    computed: {
      cMin(){
        return this.transformNumber(this.min)
      },
      cMax(){
        return this.transformNumber(this.max)
      },
      cDisabled(){
        return this.transformBoolean(this.disabled,true);
      },
      cBorder(){
        return this.transformBoolean(this.border);
      }
    }
  }
</script>


