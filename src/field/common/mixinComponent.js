function outPutInfo(flag) {
  return flag ? true : "%s格式不正确";
}

export let extendRules = function (rules = {}) {
  if (Object.prototype.toString.call(rules) !== '[object Object]') throw new Error('extendRule variable need Object');
  __RULES__ = Object.assign({}, __RULES__, rules);
};

let __RULES__ = {
  //验证对象，如果通过则返回bool型的true，否则返回验证不通过的提示字符串，其中可以带%s，以便进一步处理。
  email(value) {
    return outPutInfo(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value));
  },
  mobile(value) {  //手机号码验证
    return outPutInfo(/^[1][3578]\d{9}$/.test(value))
  },
  tel(value) {   //座机号码验证
    return outPutInfo(/^([0-9]{3,4}-)?[0-9]{7,8}$/.test(value))
  },
  cardId(value) {   //身份证验证
    return outPutInfo(/(^\d{15}$)|(^\d{17}(\d|x|X)$)/i.test(value))
  },
  integer(value) {  //整数验证
    return outPutInfo(/^-?[1-9]\d*$/.test(value))
  },
  decimal(value) {  //小数验证
    return outPutInfo(/^\d+\.*\d*$/.test(value))
  },
  require(value) {  //空字符串验证
    return outPutInfo(value && value !== '')
  }
};

export let formRulesMixin = {
  data() {
    return {
      R: __RULES__,
      //设置分页参数，和默认值
      partialPiginator: {totalPages: 10, totalElements: 10},//默认值
      param: {paginator: {size: 5, page: 1}}//分页参数
    }
  },
  computed: {
    paginator() {//获取分页信息
      return Object.assign({},
        this.partialPiginator,
        this.param.paginator
      );
    }
  },
  methods: {
    r(required) {//规则组合器
      var context = this;
      var add = function (trigger, checkerandtiparray) {
        var addItem = function (rule, errormsg, trigger) {
          this.rules.push({checker: rule, required: this.defaultRequired, context, errormsg, trigger});
        }

        var tip = null, checker = null;
        for (var i = 0; i < checkerandtiparray.length; i++) {

          if (typeof(checkerandtiparray[i]) == 'function') {
            checker = checkerandtiparray[i];
          } else {
            tip = checkerandtiparray[i];
          }

          if (checker != null) {
            addItem.call(this, checker, tip, trigger);
            tip = null, checker = null;
          }
        }
      };

      var ruler = {
        defaultRequired: false,//默认是不做必须校验要求
        rules: [],
        blur: function () {
          add.call(this, 'blur', arguments);
          return this
        },
        change: function () {
          add.call(this, 'change', arguments);
          return this
        },
        all: function () {

          add.call(this, '', arguments);
          return this
        },
        r: function (required) {
          this.defaultRequired = !!required;
          return this;
        }
      };
      return ruler.r(required);
    },
    mutate(mutation, variables) {//声明手动修改的方法
      return this.$apollo.mutate({
        mutation: mutation,
        variables: variables,
      });
    },
    query(query, variables) {
      return this.$apollo.query({//声明手动查询的方法
        query: query,
        variables: variables,
      });
    },
    //便利方法，供在apollo:配置块中使用。设置好默认值，只要给一个query对象或者gql字符串即可
    //只限于list列表等需要分页的模块使用，且同一组件只能用一个
    getEntityListWithPagintor(queryObject, skipFunction) {
      queryObject = queryObject.query ? queryObject : {query: queryObject};
      var target = {
//        loadingKey: 'loading',
        update: function (data) {
          //深拷贝
          var deepclonedata = JSON.parse(JSON.stringify(data));
          var jqlname = Object.keys(deepclonedata)[0];
          var result = deepclonedata[jqlname];
          //处理分页问题
          if (result && result.hasOwnProperty('totalPages')) {
            console.log('totalPages',result,result.hasOwnProperty);
            this.partialPiginator.totalPages = result.totalPages;
          }
          if (result && result.hasOwnProperty('totalElements')) {
            console.log('totalElements',result,result.hasOwnProperty);
            this.partialPiginator.totalElements = result.totalElements;
          }
          //判断是否存在返回的content，有则返回content
          return !result ? null : (result.hasOwnProperty('content') ? result.content : result);
        },//如果需要使用this来代表vm，则不能使用=>函数，因为箭头函数的this与所在闭包this相同
        variables() {
          //响应示写法，一旦parm改变，将调用整个getEntityListWithPagintor方法，重新拉取数据
          return this.param;
        },
        skip() {
          //判断是否忽略查询
          return skipFunction ? skipFunction.call(this) : false;
        },
        deep: true,
        fetchPolicy: 'network-only' //每次都从后台拉去数据
      };

      Object.assign(target, queryObject);//Object.assign方法用于对象的合并，将源对象（ source ）的所有可枚举属性，复制到目标对象（ target ）。
      return target;
    },
    //便利的手动gql请求
    gqlMutate(graphql, variables, sCallback) {//便利方法，用于手动修改数据的请求
      this.mutate(graphql, variables).then((data) => {
        if (data.errors) {   //未通过服务端的表单验证
          this.$message.error(`${data.errors}`);
        }
        else {//通过后返回数据，使用者可执行自定义处理数据
          sCallback.call(this, data);
        }
      }).catch((error) => {
        console.error(error);  //服务器错误或者网络状态问题
        this.$message.error(`${error}`);
      })
    },
    gqlQuery(graphql, variables, sCallback, defult) {//便利方法，用于手动修改数据的请求
      this.query(graphql, variables).then((data) => {
        if (data.errors) {   //未通过服务端的表单验证
          this.$message.error(`${data.errors}`);
        }
        else {
          let defultData = data;
          if(defult){//判断是否使用默认格式数据，否或不输defult则为使用原始数据
            //将数据处理为默认格式,即返回content里的数据
            var deepclonedata = JSON.parse(JSON.stringify(data.data));
            var jqlname = Object.keys(deepclonedata)[0];
            var result = deepclonedata[jqlname];
            defultData = !result ? null : (result.hasOwnProperty('content') ? result.content : result);
          }
          sCallback.call(this, defultData);//返回数据使用者可执行自定义处理数据
        }
      }).catch((error) => {
        console.error(error);  //服务器错误或者网络状态问题
        this.$message.error(`${error}`);
      })
    },
//路由处理信息
    routerPush(path, queryObject) {
      this.$router.push({path: path, query: queryObject});
    },
    routerBack() {
      this.$router.back();
    },
    //
    changePage(page) {
      this.param.paginator.page = page;
    },
  },
};
