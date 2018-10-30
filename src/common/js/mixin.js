import {getHistoryPage, setHistoryPage, removeHistoryPage} from 'common/js/auth';

export const historyPageMixin = {
  data(){
    return {
      
    }
  },
  created(){
    this._initPage();
  },
  destroyed(){
    if(!this.savePage){
      removeHistoryPage();
    }
  },
  methods: {

    _initPage(){
      this.$watch("param", function () {
        this.refetch();
      }, {deep: true});

      let historyPage = this.getHistoryPage();

      if (historyPage) {
        this.param.paginator.page = +historyPage; //分页组件的当前页数page同步
      }
    },
    changePage(page) {
      this.param.paginator.page = page;
      this.saveHistoryPage(page);
    },
    getHistoryPage(){
      return getHistoryPage();
    },
    saveHistoryPage(page){
      setHistoryPage(page);
    },
    refetch(){
      if(this.$apollo.queries['list']) this.$apollo.queries['list'].refetch();
    },
    callback(message) {
      this.$message.success(message);
      this.refetch();
    },
  }
};
