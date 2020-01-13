<template>
  <div id="tax">
    <el-form :inline="true" :model="formData" class="toolbar">
      <el-form-item >
        <el-date-picker
          v-model="formData.datarange"
          type="month"
          width="120px;"
          style="width: 120px;"
          placeholder="请选择结算年月">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-select v-model="formData.status" placeholder="请选择申报状态">
          <el-option label="未申报" value="0"></el-option>
          <el-option label="已申报" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-input v-model="formData.bname" placeholder="请输入企业名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="formData.bname" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="formData.bname" placeholder="请输入身份证号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table
      height="100%"
      :data="tableData"
      >
      <el-table-column v-for="col in columns"
                       :prop="col.key"
                       :label="col.text"
                       :width="col.width || 120">
      </el-table-column>
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
      var me=this,data=me.$data;
    me.$sql(data.tableData).query('select')
     // .where(['zip','=',200333])
            .exec().then(function(rows){
        console.log(rows);
      });
   },
  methods:{
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
      formData:{},
      columns: [
        {key: 'bname', text: '企业名称',width:180},
        {key: 'name', text: '姓名'},
        {key: 'mobile', text: '手机号'},
        {key: 'idcard', text: '身份证号码',width:180},
        {key: 'taxtype', text: '征收税种'},
        {key: 'taxstartdate', text: '税款所属期始'},
        {key: 'taxenddate', text: '税款所属期止'},
        {key: 'total', text: '计税依据'},
        {key: 'taxrate', text: '税率'},
        {key: 'fee', text: '应纳税额'},
        {key: 'status', text: '申报状态'}
      ],
      tableData: [{
        date: '2016-05-03',
        bname: '凌通信息科技公司',
        name:'丁尤影',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        mobile:'15113131363',
        idcard:'340402198101019544',
        taxtype:'增值税',
        taxstartdate:'2019-11-01',
        taxenddate:'2019-11-30',
        total:9102.36,
        taxrate:'6%',
        fee:546.14,
        status:'已申报'
      },{
        date: '2016-05-03',
        bname: '凌通信息科技公司',
        name:'丁尤影',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        mobile:'15113131363',
        idcard:'340402198101019544',
        taxtype:'附加税',
        taxstartdate:'2019-11-01',
        taxenddate:'2019-11-30',
        total:9102.36,
        taxrate:'7.2%',
        fee:47.18,
        status:'已申报'
      },{
        date: '2016-05-03',
        bname: '万特信息科技公司',
        name:'程墨良',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        mobile:'13105713236',
        idcard:'340402198101013521',
        taxtype:'增值税',
        taxstartdate:'2019-11-01',
        taxenddate:'2019-11-30',
        total:26791.25,
        taxrate:'6%',
        fee:1607.47,
        status:'已申报'
      },{
        date: '2016-05-03',
        bname: '万特信息科技公司',
        name:'程墨良',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        mobile:'13105713236',
        idcard:'340402198101013521',
        taxtype:'附加税',
        taxstartdate:'2019-11-01',
        taxenddate:'2019-11-30',
        total:26791.25,
        taxrate:'7.2%',
        fee:115.73,
        status:'已申报'
      },{
        date: '2016-05-03',
        bname: '兴通信息科技公司',
        name:'黄海环',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        mobile:'13105713236',
        idcard:'340402198101014620',
        taxtype:'增值税',
        taxstartdate:'2019-11-01',
        taxenddate:'2019-11-30',
        total:791.61,
        taxrate:'6%',
        fee:47.49,
        status:'已申报'
      },{
        date: '2016-05-03',
        bname: '兴通信息科技公司',
        name:'黄海环',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        mobile:'13105713236',
        idcard:'340402198101014620',
        taxtype:'附加税',
        taxstartdate:'2019-11-01',
        taxenddate:'2019-11-30',
        total:791.61,
        taxrate:'7.2%',
        fee:3.41,
        status:'已申报'
      },{
        date: '2016-05-03',
        bname: '卓普科技有限公司',
        name:'张润岩',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        mobile:'13623315211',
        idcard:'340402198101012721',
        taxtype:'增值税',
        taxstartdate:'2019-11-01',
        taxenddate:'2019-11-30',
        total:791.62,
        taxrate:'6%',
        fee:47.49,
        status:'已申报'
      },{
        date: '2016-05-03',
        bname: '卓普科技有限公司',
        name:'张润岩',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        mobile:'13623315211',
        idcard:'340402198101012721',
        taxtype:'附加税',
        taxstartdate:'2019-11-01',
        taxenddate:'2019-11-30',
        total:791.62,
        taxrate:'7.2%',
        fee:3.41,
        status:'已申报'
      }]
    }
  }
  }
</script>
<style>
  .el-main {
    line-height: 0px;
  }
  .toolbar{text-align: left;}
  #order {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
