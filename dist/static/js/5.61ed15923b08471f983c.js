webpackJsonp([5],{"4dg0":function(t,e){},RLPy:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("aA9S"),i=a.n(l),d={data:function(){return{dialogVisible:!1,dialogType:"",dialogItem:{},tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄",id:1},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄",id:2},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄",id:3},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄",id:4}]}},methods:{handleClickOrEdit:function(t,e){var a=i()({},t);this.dialogType=e,this.dialogVisible=!this.dialogVisible,this.dialogItem=a},handleOK:function(){if("edit"==this.dialogType)for(var t=0;t<this.tableData.length;t++)this.tableData[t].id==this.dialogItem.id&&(this.tableData[t]=i()(this.tableData[t],this.dialogItem));this.dialogVisible=!1}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"地址"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleClickOrEdit(e.row,"see")}}},[t._v("查看")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleClickOrEdit(e.row,"edit")}}},[t._v("编辑")])]}}])})],1),t._v(" "),a("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-form",{ref:"form",attrs:{model:t.dialogItem,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"会员名称"}},[a("el-input",{attrs:{disabled:"edit"!=t.dialogType},model:{value:t.dialogItem.name,callback:function(e){t.$set(t.dialogItem,"name",e)},expression:"dialogItem.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"地址"}},[a("el-input",{attrs:{disabled:"edit"!=t.dialogType},model:{value:t.dialogItem.address,callback:function(e){t.$set(t.dialogItem,"address",e)},expression:"dialogItem.address"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"时间"}},[a("el-input",{attrs:{disabled:"edit"!=t.dialogType},model:{value:t.dialogItem.date,callback:function(e){t.$set(t.dialogItem,"date",e)},expression:"dialogItem.date"}})],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.handleOK}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var s=a("C7Lr")(d,o,!1,function(t){a("4dg0")},null,null);e.default=s.exports}});
//# sourceMappingURL=5.61ed15923b08471f983c.js.map