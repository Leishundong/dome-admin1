<template>
  <form-item :label="label" :prop="prop" :width="width" :rules="cRules">
    <el-input :type="type" v-model="copyVal"
              :rows="cRows" :placeholder="placeholder"
              :readonly="cReadonly" :disabled="cDisabled"
              :autofocus="cAutofocus" :resize="resize"
              @change="change" @blur="blur" @focus="focus"
    ></el-input>
  </form-item>
</template>

<script>
  import FormItem from './form-item.vue';
  import {initmixinBosInput} from '../common/mixinBosInput';

  var likerHandler = {
    strip: function (value) {
      var str = (value ? value.toString() : "");
      str = str.startsWith("%") ? str.substr(1) : str;
      str = str.endsWith("%") ? str.substr(0, str.length - 1) : str;
      return str;
    },
    wrap: function (value) {
      var str = (value ? value.toString() : "");
      str = (str.startsWith("%") ? str : ("%" + str));
      str = (str.endsWith("%") ? str : (str + "%"));
      if (str === "%") {
        str = "%%";
      }
      return str;
    }
  };

  export default {

    mixins: [initmixinBosInput],
    components: {FormItem},

    data() {
      return {

        defaultHandler: {
          strip: function (value) {
            return this.wrapforlike ? likerHandler.strip(value) : value;
          },
          wrap: function (value) {
            return this.wrapforlike ? likerHandler.wrap(value) : value;
          }
        }
      };
    },
    props: {
      resize: {
        type: String,
        default: ''
      },
      autofocus: {
        type: [Boolean, String],
        default: false
      },
      placeholder: {
        type: String,
        default: ''
      },
      readonly: {
        type: [Boolean, String],
        default: false
      },
      disabled: {
        type: [Boolean, String],
        default: false
      },
      rows: {
        type: [Number, String],
        default: 2
      },
      type: {
        type: String,
        default: 'text'
      },
      //对于字符串，我们需要要一些这样的处理，比如说like前后加上%等。
      wrapforlike: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      cRows() {
        return this.transformNumber(this.rows)
      },
      cAutofocus() {
        return this.transformBoolean(this.autofocus);
      },
      cDisabled() {
        return this.transformBoolean(this.disabled);
      },
      cReadonly() {
        return this.transformBoolean(this.readonly, true);
      }
    }
  }
</script>


