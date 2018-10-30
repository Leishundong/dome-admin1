<template>
  <div>
    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">{{all}}
    </el-checkbox>
    <div style="margin: 15px 0;"></div>
    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
      <el-checkbox v-for="city in cities" :label="city" :key="city.id">{{city.name}}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>
<script>
  export default {
    props: {
      all: {
        type: String
      },
      list: {
        type: Array
      },
      chosen: {
        type: Array
      }
    },
    data() {
      return {
        checkAll: false,
        checkedCities: this.chosen,
        cities: this.list,
        isIndeterminate: true
      };
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? this.cities : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
        this.$emit('dataList', this.checkedCities);
      }
    }
  };
</script>
