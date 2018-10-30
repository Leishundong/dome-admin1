<template>
  <form-item :label="label" :prop="prop" :width="width" :rules="cRules">
    <el-select v-model="copyVal" :placeholder="placeholder"
               :disabled="cDisabled" :multiple="cMultiple" :collapse-tags="cCollapseTags"
               :size="size" :multiple-limit="cMultipleLimit"
               @change="change" @visible-change="visibleChange"
               @blur="blur" @focus="focus">
      <el-option
        v-for="item in list"
        :label="item.key||item"
        :key="returnVal(item)"
        :value="returnVal(item)"
        :disabled="item.disabled">
      </el-option>
    </el-select>
  </form-item>
</template>

<script>
  import FormItem from './form-item.vue';
  import {initmixinBosInput} from '../common/mixinBosInput';

  export default {
    mixins: [initmixinBosInput],
    components: {
      FormItem
    },
    props: {
      size: {
        type: String
      },
      placeholder: {
        type: String,
        default: ''
      },
      multipleLimit: {
        type: [Number, String],
        default: 0
      },
      collapseTags: {
        type: [Boolean, String],
        default: false
      },
      multiple: {
        type: [Boolean, String],
        default: false
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
      cMultipleLimit() {
        return this.transformNumber(this.multipleLimit);
      },
      cCollapseTags() {
        return this.transformBoolean(this.collapseTags);
      },
      cDisabled() {
        return this.transformBoolean(this.disabled, true);
      },
      cMultiple() {
        return this.transformBoolean(this.multiple);
      }
    },
    methods: {
      returnVal(item) {
        if (item.val === false) return false;
        return item.val || item;
      },
      visibleChange(boolean) {
        this.$emit('visible-change', boolean);
      }
    }
  }
</script>
