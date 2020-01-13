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
        {key: 'taxstartdate', text: '税款所属期始'},
        {key: 'taxenddate', text: '税款所属期止'},
        {key: 'total', text: '计税依据'},
        {key: 'taxrate', text: '税率'},
        {key: 'fee', text: '应纳税额'},
        {key: 'taxfee', text: '累计已缴税额'},
        {key: 'taxrefund', text: '本期补退税额'},
        {key: 'status', text: '申报状态'},
        {key: 'invoicenumber', text: '票号'}
      ],
      tableData: [{
        date: '2016-05-03',
        bname:'创码信息科技公司',
        idcard:'330106198301011368',
        name: '曹竹期',
        mobile:'15737758675',
        taxstartdate:'2019-11-01',
        taxenddate:'2019-11-30',
        total:61210.22,
        taxrate:'1.5%',
        fee:918.15,
        taxfee:918.15,
        taxrefund:'0.00',
        status:'已申报',
        invoicenumber:'NO62363129'
      },
        {
          date: '2016-05-03',
          bname:'创码信息科技公司',
          idcard:'330106198301019108',
          name: '袁婷',
          mobile:'13656632279',
          taxstartdate:'2019-11-01',
          taxenddate:'2019-11-30',
          total:10411.15,
          taxrate:'0.0%',
          fee:0,
          taxfee:0,
          taxrefund:'0.00',
          status:'已申报',
          invoicenumber:'NO62363229'
        },
        {
          date: '2016-05-03',
          bname:'凌通信息科技公司',
          idcard:'340402198101019544',
          name: '丁尤影',
          mobile:'15113131363',
          taxstartdate:'2019-11-01',
          taxenddate:'2019-11-30',
          total:82210.25,
          taxrate:'1.5%',
          fee:1233.15,
          taxfee:1233.15,
          taxrefund:'0.00',
          status:'已申报',
          invoicenumber:'NO62364110'
        },
        {
          date: '2016-05-03',
          bname:'天隆科技有限公司',
          idcard:'33010619830101266X',
          name: '方诚水',
          mobile:'13241181000',
          taxstartdate:'2019-11-01',
          taxenddate:'2019-11-30',
          total:96660.62,
          taxrate:'1.5%',
          fee:1449.91,
          taxfee:1449.91,
          taxrefund:'0.00',
          status:'已申报',
          invoicenumber:''
        },
        {
          date: '2016-05-03',
          bname:'万特信息科技公司',
          idcard:'330106198301016222',
          name: '许千',
          mobile:'13804019953',
          taxstartdate:'2019-11-01',
          taxenddate:'2019-11-30',
          total:10622.16,
          taxrate:'1.5%',
          fee:159.33,
          taxfee:159.33,
          taxrefund:'0.00',
          status:'已申报',
          invoicenumber:''
        },
        {
          date: '2016-05-03',
          bname:'新纶科技有限公司',
          idcard:'330106198301019546',
          name: '赵高凤',
          mobile:'18852157770',
          taxstartdate:'2019-11-01',
          taxenddate:'2019-11-30',
          total:13655.24,
          taxrate:'1.5%',
          fee:204.82,
          taxfee:204.82,
          taxrefund:'0.00',
          status:'已申报',
          invoicenumber:''
        },
        {
          date: '2016-05-03',
          bname:'新纶科技有限公司',
          idcard:'330106198301019546',
          name: '赵高凤',
          mobile:'18852157770',
          taxstartdate:'2019-11-01',
          taxenddate:'2019-11-30',
          total:13655.24,
          taxrate:'1.5%',
          fee:204.82,
          taxfee:204.82,
          taxrefund:'0.00',
          status:'已申报',
          invoicenumber:''
        },
        {
          date: '2016-05-03',
          bname:'新纶科技有限公司',
          idcard:'330106198301019546',
          name: '赵高凤',
          mobile:'18852157770',
          taxstartdate:'2019-11-01',
          taxenddate:'2019-11-30',
          total:13655.24,
          taxrate:'1.5%',
          fee:204.82,
          taxfee:204.82,
          taxrefund:'0.00',
          status:'已申报',
          invoicenumber:''
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
