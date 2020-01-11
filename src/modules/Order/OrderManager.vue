<template>
  <div id="order">
    <el-form :inline="true" :model="formData" class="toolbar">
      <el-form-item>
        <el-select v-model="formData.status" placeholder="请选择订单状态">
          <el-option label="已同步" value="1"></el-option>
          <el-option label="待同步" value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-input v-model="formData.bname" placeholder="请输入企业名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-date-picker
          v-model="formData.datarange"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table
      height="100%"
      :data="tableData"
      >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="detail">
            <el-form-item label="商品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="发货地">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="订单图片">
              <template v-for="img in props.row.imgs">
                <img :src="'assets/'+img">
              </template>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column v-for="col in columns"
                       :prop="col.key"
                       :label="col.text"
                       :width="col.width || 140">
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
  data()
  {
    return {
      formData:{},
      columns: [{key: 'orderno', text: '订单号'},
        {key: 'bname', text: '企业名称',width:'170'},
        {key: 'name', text: '姓名'},
        {key: 'mobile', text: '手机号'},
        {key: 'idcard', text: '身份证号码',width:'180'},
        {key: 'cardno', text: '银行卡号',width:'180'},
        {key: 'price', text: '订单金额'},
        {key: 'status', text: '支付状态'},
        {key: 'date', text: '订单完成时间',width:'180'},
        {key: 'fee', text: '平台服务费'},
        {key: 'pdate', text: '发包时间',width:'180'},
        {key: 'fdate', text: '订单完成时间',width:'180'},
        {key: 'sdate', text: '结算时间',width:'180'}
      ],
      tableData: [{
        orderno: '20190503121122',
        bname: '北京创投有限公司',
        name:'王小虎',
        mobile:'13804019953',
        idcard:'331003198512120042',
        cardno:'6226098710891203',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        price:128944.31,
        status:'已完成',
        date:'2019-11-12 13:40:58',
        fee:10.1,
        pdate:'2019-11-12 13:40:58',
        fdate:'2019-11-12 14:40:58',
        sdate:'2019-11-12 17:40:58',
        imgs:['1.jpg','2.jpg','3.jpg']
      },
        {
          orderno: '20190503121176',
          bname: '浙江万象有限公司',
          name:'李东梅',
          mobile:'15737758675',
          idcard:'513436200001103827',
          cardno:'4226098710571211',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          price:8944.31,
          status:'已完成',
          date:'2019-11-12 13:40:58',
          fee:2.1,
          pdate:'2019-11-12 13:40:58',
          fdate:'2019-11-12 14:40:58',
          sdate:'2019-11-12 17:40:58'
        },
        {
          orderno: '20190503121189',
          bname: '荣致鑫信息科技公司',
          name:'李然',
          mobile:'13241181000',
          idcard:'513436200001109604',
          cardno:'6225808110841519',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          price:1128944.31,
          status:'已完成',
          date:'2019-11-12 13:40:58',
          fee:721.15,
          pdate:'2019-11-12 13:40:58',
          fdate:'2019-11-12 14:40:58',
          sdate:'2019-11-12 17:40:58'
        },
        {
          orderno: '20190603121512',
          bname: '三智电子信息技术公司',
          name:'钱道池',
          mobile:'13260324111',
          idcard:'513436200001102146',
          cardno:'6225804827473754',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          price:128944.31,
          status:'已完成',
          date:'2019-11-12 13:40:58',
          fee:10.1,
          pdate:'2019-11-12 13:40:58',
          fdate:'2019-11-12 14:40:58',
          sdate:'2019-11-12 17:40:58'
        },
        {
          orderno: '20190603131221',
          bname: '恒普有限公司',
          name:'严迎司',
          mobile:'13656632279',
          idcard:'513436200001105603',
          cardno:'6225808954357573',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          price:128944.31,
          status:'已完成',
          date:'2019-11-12 13:40:58',
          fee:10.1,
          pdate:'2019-11-12 13:40:58',
          fdate:'2019-11-12 14:40:58',
          sdate:'2019-11-12 17:40:58'
        },
        {
          orderno: '20190603146789',
          bname: '北京创投有限公司',
          name:'王小虎',
          mobile:'13804019953',
          idcard:'331003198512120042',
          cardno:'6226098710891203',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          price:28944.31,
          status:'已完成',
          date:'2019-11-12 13:40:58',
          fee:10.1,
          pdate:'2019-11-12 13:40:58',
          fdate:'2019-11-12 14:40:58',
          sdate:'2019-11-12 17:40:58'
        },
        {
          orderno: '20190703151234',
          bname: '北京创投有限公司',
          name:'王小虎',
          mobile:'13804019953',
          idcard:'331003198512120042',
          cardno:'6226098710891203',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          price:28944.31,
          status:'已完成',
          date:'2019-11-12 13:40:58',
          fee:10.1,
          pdate:'2019-11-12 13:40:58',
          fdate:'2019-11-12 14:40:58',
          sdate:'2019-11-12 17:40:58'
        },
        {
          orderno: '20190703151235',
          bname: '北京创投有限公司',
          name:'王小虎',
          mobile:'13804019953',
          idcard:'331003198512120042',
          cardno:'6226098710891203',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          price:28944.31,
          status:'已完成',
          date:'2019-11-12 13:40:58',
          fee:10.1,
          pdate:'2019-11-12 13:40:58',
          fdate:'2019-11-12 14:40:58',
          sdate:'2019-11-12 17:40:58'
        },
        {
          orderno: '20190803137722',
          bname: '天宇信息科技公司',
          name:'潘莺耀',
          mobile:'18852157770',
          idcard:'513436200001107262',
          cardno:'6225807045634973',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          price:42944.31,
          status:'已完成',
          date:'2019-11-12 13:40:58',
          fee:121.1,
          pdate:'2019-11-12 13:40:58',
          fdate:'2019-11-12 14:40:58',
          sdate:'2019-11-12 17:40:58'
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
  .detail .el-form-item {border-right:1px solid #eee;padding-right:100px;}
</style>
