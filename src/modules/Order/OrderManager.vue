<template>
  <div id="about">
    <el-table
      height="100%"
      :data="tableData"
      >
      <el-table-column v-for="col in columns"
        fixed
        :prop="col.key"
        :label="col.text"
        width="150">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'OrderManager',
    data()
  {
    return {
      columns: [{key:'date',text:'订单号'},
        {key:'date',text:'企业名称'},
        {key:'date',text:'姓名'},
        {key:'date',text:'手机号'},
        {key:'date',text:'身份证号码'},
        {key:'date',text:'银行卡号'},
        {key:'date',text:'订单金额'},
        {key:'date',text:'支付状态'},
        {key:'date',text:'订单完成时间'},
        {key:'date',text:'平台服务费'},
        {key:'date',text:'发包时间'},
        {key:'date',text:'订单完成时间'},
        {key:'date',text:'结算时间'}
      ],
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-06',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }]
    }
  }
  }
</script>
<style>
  .el-main {line-height:0px;}
  #about {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
