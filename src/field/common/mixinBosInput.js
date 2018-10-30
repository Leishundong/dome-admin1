export let initmixinBosInput = {

  data() {
    return {
      //默认处理器，必须包含strip和wrap二属性。
      // 即通过v-model绑定的value先通过strip方法处理成计算属性copyVal,
      // 一旦用户完成输入后在发出的双向绑定input事件发出之前，用wrap将copyVal的新值先处理好
      //可以想像查询条件面板的输入字符串需要被当作like输入给后端，需要前后都加上%.
      defaultHandler: {
        strip: function (value) {
          return value;
        },
        wrap: function (value) {
          return value;
        }
      }
    }
  },
  props: {
    value:null,
    // 特意去掉此项，以便减少使用者的工作量，直接下使用下面的rules来代替 暂时不删是因为怕其他组件报错 TODO 删除这个属性，但依照element的实现，怕是没那么容易去掉，除非能从v-model属性中拿到绑定字符串。
    prop: {
      type: String,
      default: '',
    },
    /*综合考虑以下3点原因，抛弃form-item的required属性,我们自己处理并与常规rule放到一起进行验证。
    1.element-ui的formitem中的required值为true/false，其实是削弱了asyn-validator的required的能力（本来可以明确类型的{type:number,required},
    2.但另一方面asyn-validator的requreid的错误提示中没法插入我们字段中文别名，
    3.required应该放在其他rule前面执行，如果不满足则直接返回。这个在element-ui中如果存在多个rules，似乎智能手写到data中去？没法启用required属性？
    */
    /*  required: {
        type: Boolean,
        default: false,
      },
  */

    /*验证规则，尽可能与element-ui的格式相同，如常见的:
{required: true, message: '请输入手机号', trigger: 'blur'},
{max: 11, message: '长度不超过11位', trigger: 'blur'},
{validator: validateTel, trigger: 'blur'}
  let validateTel = (rule, value, callback) => {
    let reg = /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
    if (!reg.test(value)) {
      callback(new Error('手机号格式不正确'));
    } else {
      callback();
    }
  };
  在element-form表单介绍中提到："Form 组件提供了表单验证的功能，只需要通过 rules 属性传入约定的验证规则，并将 Form-Item 的 prop 属性设置为需校验的字段名即可。校验规则参见 async-validator"
  地址：https://github.com/yiminghe/async-validator
  有更多的规则可以参考，如：

  {type: "string", required: true},


  可以看到element仅仅是对他的rule做了一个扩展，添加了trigger和message两项内容
  而从源代码得知，trigger主要有三类:'blur','change',''.

*/
    handler: {
      type: Object, default: null
    },

    rules: null,

    width: {
      type: [Number, String],
      default: 3.3,
    },
    label: {
      type: String,
      default: ''
    },

    //过滤器，显示的内容格式字符串，各种组件对格式的使用不同，另外组件可编辑时
    // 如何处理好输入显示和普通显示？似乎可以用获得焦点时显示临时输入内容（或原有内容copy过来的临时内容），失去焦点后显示过滤器处理后的内容。 TODO

    inputValue: null,

    helper: null,


  },

  computed: {

    copyVal: {
      get: function () {
        var finalHandler = !!this.handler ? this.handler : this.defaultHandler;
        return finalHandler.strip.call(this,this.value);
      },
      set: function (newVal) {
        var finalHandler = !!this.handler ? this.handler : this.defaultHandler;
        this.$emit('input', finalHandler.wrap.call(this,newVal));
      }
    },

    cRules() {
      //如果是必填，必须第一个验证必填。
      var rules = [];
      rules.push(...((this.rules || {rules: []}).rules));
      //将label传进去，以便验证规则的错误提示可以引用他而不是prop名。
      var fieldalias = this.label;
      return rules.map(function (rule) {
        var result = {};
        Object.assign(result, rule);
        if (rule.checker) {
          result.validator = function (rule2, value, callback, source, options) {
            var result = rule.checker.call(rule.context, value);//绑定this到vm.data
            //如果有定制的错误提示则采用定制的,否则采用验证器提供的错误信息
            callback((result !== true) ? new Error((rule.errormsg ? rule.errormsg : result).replace(/%s/, fieldalias)) : []);
          }
        }
        return result;
      });
    }
  },

  methods: {
    change(val) {
      this.$emit('change', val);
    },
    blur(event) {
      this.$emit('blur', event);
    },
    focus(event) {
      this.$emit('focus', event);
    },
    transformNumber(flag) {
      return +flag;
    },
    transformBoolean(flag, set) {
      if (set === true && this.$parent.$parent._readonly) return true;
      //获取 form-container的_readonly，只有使用slot，$parent才能拿到
      //this.$parent为 el-form
      //this.$parent.$parent为 form-container
      if (typeof flag === 'string') {
        flag = (flag === 'true') ? true : false;
      }
      return flag;
    },


    validate() {
      //this.$refs.formitem.clearValidate(); 验证前是否需要清除？
      return this.$refs.formitem.validate.apply(this.$refs.formitem, arguments);
    }

  }
};
