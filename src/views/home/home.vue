<template>
<div class="app-container">
  <el-row :gutter="10">
    <el-col :span="12">
      <lineDemo id="echart1" width="100%" height="400px" ThemeColor="#1f75e7" :chartData="echart1Data"></lineDemo>
    </el-col>
    <el-col :span="12">
      <lineDemo id="echart2" width="100%" height="400px" ThemeColor="#99cc34" :chartData="echart2Data"></lineDemo>
    </el-col>
  </el-row>
  <el-row :gutter="10" style="margin-top: 30px;">
    <el-col :span="12" >
      <lineDemo id="echart3" width="100%" height="400px" ThemeColor="#ffab19" :chartData="echart3Data"></lineDemo>
    </el-col>
    <el-col :span="12">
      <lineDemo id="echart4" width="100%" height="400px" ThemeColor="#fd7562" :chartData="echart4Data"></lineDemo>
    </el-col>
  </el-row>
</div>
</template>

<script>
import lineDemo from '@/components/echarts/line';
import {getList} from "@/api/index.js"
export default {
  name: "Home",
  data() {
    return {
      echart1Data: {
        title: {
          text:  "支付金额"
        },
        todayArr:  ["3","5","0","11","0","0","0","0","50","0","38","928","0","0","0","0","0","340.2","0"],
        yesterdayArr: ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","38","0","0","0","0","114","0","0","0"]
      },
      echart2Data: {
        title: {
          text: '访客数'
        } ,
        todayArr:  ["1","5","0","10","30","60","0","0","8","9","7","5","5","1","2","8","4","10","0"],
        yesterdayArr: ["0","2","0","0","1","0","0","1","36","4","6","11","2","9","6","5","3","6","1","5","3","2","0","0"]
      },
      echart3Data: {
        title: {
          text: '浏览量'
        } ,
        todayArr:  ["1","5","0","10","30","60","0","0","8","9","7","5","5","1","2","8","4","10","0"],
        yesterdayArr: ["0","2","0","0","1","0","0","1","36","4","6","11","2","9","6","5","3","6","1","5","3","2","0","0"]
      },
      echart4Data: {
        title: {
          text: '付款订单数'
        } ,
        todayArr:  ["10","20","30","10","30","60","0","2","18","29","67","65","85","21","22","18","4","10","0"],
        yesterdayArr: ["0","2","0","0","1","0","0","1","36","4","6","11","2","9","6","5","3","6","1","5","3","2","0","0"]
      }
    }
  },
    components: {
      lineDemo
    },

    mounted() {
      // getList({regionCode: "AdminRegion"}).then(res => {
      //   console.log(res);
      // })
    }
}
</script>

<style>

</style>