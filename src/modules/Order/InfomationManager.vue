<template>
  <div id="tax">
    <el-form :inline="true" :model="formData" class="toolbar">
      <el-form-item>
        <el-input v-model="formData.bname" placeholder="请输入用户姓名" required></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table
      style="width:100%"
      height="100%"
      :data="handlesearch(tableData)"
      fixed
      >
      <el-table-column v-for="col in columns"
                       :prop="col.key"
                       :label="col.text"
                       :width="col.width || 150">
            <template slot-scope="scope">
              <span v-if="col.key!=='status'">{{ scope.row[col.key] }}</span>
              <span style="font-weight: 700" v-else :class="scope.row.status==='启用'?'green':'red'">{{ scope.row[col.key] }}</span>
            </template>
      </el-table-column>
      <el-table-column label="操作" width="auto">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            @click="handleDelete(scope.$index, scope.row)">重置密码</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 20, 40]"
    :page-size="5"
    layout="total, sizes, prev, pager, next, jumper"
    :total="tableData.length">
      </el-pagination>
  </div>
</template>

<script>
  export default {
    name: 'OrderManager',
    created(){
   },
  methods:{
    handlesearch(){
      return this.tableData.filter(item => {
        // filter()对象遍历,true 返回对象参数值,如果多条数据,自动使用数组拼接
        if (item.name.includes(this.search)) {
          ////字符串索引有关键字值,返回true
          return item
        }
      })
    },
    onSubmit(){
      var me=this,name=me.$data.formData.bname;

      var loading =me.$loading({text:'加载中'})
      setTimeout(function(){loading.close();},500);
      me.search=name;

    }
  },
  data()
  {
    return {
      search:'',
      formData:{},
      columns: [
        {key: 'name', text: '用户姓名'},
        {key: 'mobile', text: '手机号'},
        {key: 'jobtitle', text: '岗位',width:120},
        {key: 'status', text: '状态',width:120},
        {key: 'date', text: '最后操作时间',width:180}
      ],
      tableData: [{
        mobile: '13804019953',
        name: '王乐乐',
        province: '上海',
        city: '普陀区',
        jobtitle: '经理',
        zip: 200333,
        date:'2019-11-12 13:40:58',
        status:'启用'
      }, {
        mobile: '13241181000',
        name: '李然',
        province: '上海',
        city: '普陀区',
        jobtitle: '经理',
        zip: 200333,
        date:'2019-11-12 13:40:58',
        status:'启用'
      }, {
        mobile: '15737758675',
        name: '李东梅',
        province: '上海',
        city: '普陀区',
        jobtitle: '职员',
        zip: 200333,
        date:'2019-11-12 13:40:58',
        status:'启用'
      }, {
        mobile: '13260324111',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        jobtitle: '职员',
        status:'启用',
        zip: 200333,
        date:'2019-11-12 13:40:58'
      }, {
        mobile: '13656632279',
        name: '周成',
        province: '上海',
        city: '普陀区',
        jobtitle: '职员',
        status:'停用',
        zip: 200334,
        date:'2019-11-12 13:40:58'
      }, {
        mobile: '18111118238',
        name: '赵雷',
        province: '上海',
        city: '普陀区',
        status:'启用',
        jobtitle: '职员',
        zip: 200333,
        date:'2019-11-12 13:40:58'
      }, {
        mobile: '18852157770',
        name: '朱康',
        province: '上海',
        city: '普陀区',
        status:'停用',
        jobtitle: '职员',
        zip: 200333,
        date:'2019-11-12 13:40:58'
      }, {
        mobile: '15113131363',
        name: '王红满',
        province: '上海',
        city: '普陀区',
        jobtitle: '经理',
        status:'启用',
        zip: 200333,
        date:'2019-11-12 13:40:58'
      }]
    }
  }
  }
</script>
<style>
  .el-main {
    line-height: 0px;
  }
  .red{color:#ff0000;}
  .green{color:#52c41a;}
  .toolbar{text-align: left;}
  #order {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
