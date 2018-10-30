<template>
  <form-item :label="label" :prop="prop" :width="width" :rules="cRules">
    <el-button @click.stop="switchToSearch"
               @keyup.enter="switchToSearch"
               @keyup.delete="removeSelected"
               v-show="!cReadonly"
               style="width: 20%"
    >改
    </el-button>
    <el-autocomplete
      ref="queryinput"
      style="width: 78%"
      v-bind:value="hintString"
      :readonly="cReadonly || !inWriteStatus"
      :fetch-suggestions="querySearch"
      placeholder="请输入关键词过滤"
      :trigger-on-focus="false"
      @select="handleSelectOrLostFocus"
      @blur="handleSelectOrLostFocus"
      @input="handleInput"
    ></el-autocomplete>

  </form-item>
</template>

<script>
  import FormItem from './form-item.vue';
  import {initmixinBosInput} from '../common/mixinBosInput';
  import {filterAttr} from 'common/js';

  export default {
    mixins: [initmixinBosInput],
    components: {
      FormItem
    },
    data() {
      return {
        inWriteStatus: false,//是否可输入
        smartQuery: null,
        searchString: ''//需要输入的提示字符串
      }
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
      rows: {
        type: [Number, String],
        default: 2
      },

      /**最终的被绑定对象**/
      filter: {
        type: Function,
        default: (val) => val ? val.id : null
      },
      /**gql查询语句，一般是引入的graphql文件中一项。*/
      query: {
        type: Object,
        default: null,
        //   required: true
      },
      /**一并需要交给gql查询的变量 **/
      variables: {
        type: Object,
        default: null
      },
      /**
       * 除了variables外，本函数将以copyVal为参数，进行处理，最终返回一个类似于variables的对象，并和variables对象合并成一个新对象，也就是最终的查询变量对象
       */
      candidateFilter: {
        type: Function,
        default: (val) => (val ? (val.number + ":" + (val.name || '')) : '===')
      },
      /**
       * 除了variables外，本函数将以copyVal为参数，进行处理，最终返回一个类似于variables的对象，并和variables对象合并成一个新对象，也就是最终的查询变量对象
       */
      variableHandler: {
        type: Function,
        default: function (val) {
          return val;
        }
      }
    },
    computed: {
      hintString() {
        if (this.inWriteStatus) {
          return this.searchString;
        } else {
          if (this.copyVal) {
            return this.filter(this.copyVal)
          } else {
            return '';
          }
        }
      },
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
      },
      cType() {
        return this.type;
      },
      variablesObject() {
        return Object.assign({}, {
          paginator: {
            page: 1,
            size: 5//默认一次5条
          }
        }, this.variables, this.variableHandler(this.searchString));
      }
    },
    methods: {

      //删除已选的并切换到输入
      removeSelected() {
        console.log("removeSelected");
        if (!this.inWriteStatus) {
          this.copyVal = null;
          this.inWriteStatus = true;
          this.$refs.queryinput.focus();
        } else {
          this.searchString = '';
          this.$refs.queryinput.focus();
        }
      },
      //选中候选项中的一项。
      handleSelectOrLostFocus(item) {
        if (item && item.key && item.value && item.key.id) {
          this.copyVal = item.key;
        } else {
        }
        this.searchString = '';
        this.inWriteStatus = false;

      },
      switchToSearch() {//切换至输入
        console.log(this.inWriteStatus);
        this.inWriteStatus = true;
        this.$refs.queryinput.focus();
      },
      //处理输入
      handleInput(val) {
        if (this.inWriteStatus) {
          this.searchString = val;
        }
      },

      querySearch(queryString, callback) {
        if (!this.smartQuery) {//是否访问
          this.smartQuery = this.createSmartQuery(this.query, (list) => {
            var covertedList = list.map((item) => Object.assign({}, {key: item, value: this.candidateFilter(item)}));
            callback(covertedList);
          });
          this.$apollo.addSmartQuery("smartQuery", this.smartQuery);
        }
      },

      createSmartQuery(queryString, callback) {
        return {
          query: queryString,
          update: function (data) {
            var deepclonedata = JSON.parse(JSON.stringify(data));
            var result = deepclonedata[Object.keys(deepclonedata)[0]];

            //处理分页问题
            if (result && result.hasOwnProperty('totalPages')) {
              this.partialPiginator.totalPages = result.totalPages;
            }
            if (result && result.hasOwnProperty('totalElements')) {
              this.partialPiginator.totalElements = result.totalElements;
            }
            var forcallbacklist = !result ? null : (result.hasOwnProperty('content') ? result.content : result);
            console.log(forcallbacklist);
            forcallbacklist.forEach((value) => {
              delete value.__typename;
            });
            return callback(forcallbacklist);
          },//如果需要使用this来代表vm，则不能使用=>函数，因为箭头函数的this与所在闭包this相同
          variables() {
            return this.variablesObject;
          },
          debounce: 500,
          skip() {//如果不是编辑界面或者啥都没输入，则忽略变化
            return !this.inWriteStatus || !this.searchString;
          },
          deep: true
        };
      },
    },
  }
</script>

