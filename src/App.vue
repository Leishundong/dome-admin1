<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  apollo:{

  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "common/css/index";// global css
  .el-table thead {
    color: rgb(89, 89, 89);
  }
  .el-table th {
    background: rgba(242, 242, 242, 0.8) !important;
  }

</style>
