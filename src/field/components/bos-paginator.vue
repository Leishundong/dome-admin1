<template>
  <div style="margin: 3% 0">
    <el-pagination
      class="pagination"
      background
      layout="prev,pager,next"
      :page-count="pageInfo.totalPages"
      :current-page="pageInfo.page"
      @current-change="handleCurrentChangeInner">
    </el-pagination>
  </div>
</template>


<script>

  export default {
    data(){
      return {
        labelWidth: '120px'
      }
    },
    props: {
      pageInfo: {
        type: Object,
        default: null,
      }
    },
    methods:{
      handleCurrentChangeInner(newPageIndex){
        this.$emit("bosCurrentPageChanged",newPageIndex);
      }
    }

  }
</script>


<style>
  .pagination {
    text-align: center;
  }
</style>
