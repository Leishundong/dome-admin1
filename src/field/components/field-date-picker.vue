<template>
  <form-item :label="label" :prop="prop" :width="width" :rules="cRules">
    <el-date-picker
      v-model="copyVal" :align="align"
      :type="type" :format="format" :value-format="valueFormat"
      :range-separator="rangeSeparator" :placeholder="placeholder"
      :start-placeholder="startPlaceholder" :end-placeholder="endPlaceholder"
      :readonly="cReadonly" :disabled="cDisabled" :editable="cEditable" :size="size"
      @change="change" @blur="blur" @focus="focus"
    >
    </el-date-picker>
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
      align: {
        type: String,
        default: 'left'
      },
      readonly: {
        type: [Boolean, String],
        default: false
      },
      disabled: {
        type: [Boolean, String],
        default: false
      },
      editable: {
        type: [Boolean, String],
        default: false
      },
      valueFormat: {
        type: String,
        default: 'timestamp'
      },
      format: {
        type: String,
        default: 'yyyy 年 MM 月 dd 日'
      },
      type: {
        type: String,
        default: 'date'
      },
      placeholder: {
        type: String,
        default: ''
      },
      startPlaceholder: {
        type: String,
        default: '开始日期'
      },
      endPlaceholder: {
        type: String,
        default: '结束日期'
      },
      rangeSeparator: {
        type: String,
        default: '至'
      }

    },
    computed: {
      cReadonly(){
        return this.transformBoolean(this.readonly,true);
      },
      cDisabled(){
        return this.transformBoolean(this.disabled);
      },
      cEditable(){
        return this.transformBoolean(this.editable);
      },
    }
  }
</script>
