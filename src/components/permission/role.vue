<template>
  <div class="app-container">


    <form-container :model="param" class="_search">
      <field-input class="searchInput" label="搜索关键字" :wrapforlike="true" v-model="param.namelike"></field-input>
      <el-button type="primary" style="margin-left: 15px">查询</el-button>
      <el-button type="primary" @click="dialogShow('add')">增加账号</el-button>
    </form-container>


    <el-table :data="list" class="_list"
              v-loading.body="$apollo.queries.list.loading" element-loading-text="Loading"
              fit highlight-current-row
    >
      <bos-table-column lable="账号" field="username" width="180"></bos-table-column>
      <bos-table-column lable="拥有角色" field="roleItems" :filter="(row)=>getRole(row.roleItems)"></bos-table-column>
      <bos-table-column lable="创建时间" field="createtime" width="200"
                        :filter="(row)=>formatTime(row.createtime)"
      ></bos-table-column>
      <bos-table-column lable="状态" field="disabled"
                        :filter="(row)=>adminStatus(row.disabled)"
      ></bos-table-column>
      <el-table-column label="操作" align="center" width="200">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="dialogShow('edit',scope.row)">修改</el-button>
          <el-button type="text" size="mini" @click="deleteOne(scope.row)" class="_remote-tip">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <bos-paginator :pageInfo="paginator" @bosCurrentPageChanged="changePage"/>
    <field-dialog :title="title" ref="dialog" @confirm="dialogConfirm">
      <form-container ref="inlineForm" :model="inlineForm">
        <field-input v-model="inlineForm.username" label="账号名" width="10"
                     :rules="r(true).all(R.require)" prop="username"></field-input>
        <field-input v-model="inlineForm.password" label="密码" width="10"
                     :rules="r(true).all(R.require)" prop="password"></field-input>

        <el-form-item label="角色" label-width="120px">
          <checkbox1 all="全选" :list="checkList" :chosen="chosen" @dataList="dataList"></checkbox1>
        </el-form-item>
        <!--<el-form-item label=约束规则 label-width="120px">
          <el-input placeholder="请输入规则" v-for="(item, index) in ruleList" :key="index" v-model="ruleData[index]">
            <template slot="prepend">{{item.name}}</template>
          </el-input>
        </el-form-item>-->

      </form-container>
    </field-dialog>


  </div>
</template>

<script>


  import {filterAttr} from 'common/js'
  import {rules} from 'common/js/validate';
  import apiAd from 'graph/admin.graphql';
  import {historyPageMixin} from 'common/js/mixin';
  import checkbox1 from '@/base/checkbox'
  import {formRulesMixin} from '../../field/common/mixinComponent'
  export default {
    components: {
      checkbox1
    },
    data() {
      return {
        rules,
        dialogType: '',
        inlineForm: {},
        chosen: [],
        roleList: [],
        ruleData: [],
        checkList:[],
      }
    },
    mixins: [formRulesMixin,historyPageMixin],
    apollo: {
      rList() {//loadingKey
        //created的时候会执行一次，context代表的是vm对象，调试时可以查阅代码：vue-apollo.esm.js:  options = options.call(context)
        return this.getEntityListWithPagintor(apiAd.RoleList);
      },
      list() {//loadingKey
        //created的时候会执行一次，context代表的是vm对象，调试时可以查阅代码：vue-apollo.esm.js:  options = options.call(context)
        return this.getEntityListWithPagintor(apiAd.AdministList);
      }
    },
    computed: {
      isDialogAdd() {
        return this.dialogType === 'add' ? true : false;
      },
      title() {
        return this.dialogType === 'add' ? '添加账号' : '修改账号';
      }
    },
    methods: {
      dataList(data) {
        this.roleList = data;
      },
      getRole(data){
        let name = data.map((item)=>{
          return item.role.name
        });
        return name.join(",")
      },
      formatTime(time) {
        if (time == null) return;
        return new Date(parseInt(time)).toLocaleString().replace(/:\d{1,2}$/, ' ');
      },
      adminStatus(disabled) {
        return disabled ? '删除' : "正常";
      },
      dialogShow(type,row) {
        this.chosen = [];
        this.checkList = [];
        this.roleList = [];
        this.dialogType = type;
        this.$refs.dialog.show();
        this.checkList = this.rList.map((item)=>{
          return {id:item.id,name:item.name}
        });
        console.log('checkList',this.checkList);
        this.$nextTick(() => {    //dialog框出现以后，进行清空验证
          this.$refs.inlineForm.clearValidate();
        });
        if (type === 'add') {
          this.inlineForm = {};
          return;
        }else {
          let adminList = this.list;
          let adRole;
          this.inlineForm = JSON.parse(JSON.stringify(row));
          adminList.forEach((item)=>{
            if(item.username==this.inlineForm.username){
              adRole = item.roleItems;
              this.inlineForm['id'] = item.id
            }
          });
          adRole.forEach((item,index)=>{
            this.checkList.forEach((check,checkIndex)=>{
              if(item.role.id==check.id){
                this.chosen.push(check);
              }
            })
          });
          this.roleList = this.chosen;
        }
      },

      dialogConfirm() {
        this.inlineForm['roleItems'] = {};
        this.inlineForm['roleItems'] = this.roleList.map((item)=>{
          return {role:{id:item.id}}
        });
        if(this.dialogType === 'add'){}else {
          console.log('rList',this.roleList);
        }
        console.log(this.inlineForm);
        this.$refs.inlineForm.gqlValidate(this.dialogType === 'add' ? apiAd.addAdminist : apiAd.administUpdate, {
          administ: this.inlineForm
        }, () => {
          this.callback(`${this.title}成功`);
          this.$refs.dialog.hide();
        });
      },
      deleteOne(row) {
        let item = JSON.parse(JSON.stringify(row));
        item.disabled = true;
        this.gqlMutate(api.editAdminist, {
          administ: filterAttr(item)
        }, () => {
          this.callback('删除成功')
        })
      }
    }
  }
</script>

