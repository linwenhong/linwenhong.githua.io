webpackJsonp([75],{"+KUo":function(t,e){},"2wa8":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("BHhu"),n=a("8IWg"),o=a("TNi3"),s=a("jNku"),d=a("+0rj"),r=a("9+VK"),c=a("BXxX"),l={name:"studentAwardsTable",data:function(){return{code:n.a.StudentAwards,dataKeys:n.n,items:[],total:0,page:1,pageSize:i.c,operation:{},service:c.a,condition:{page_num:i.c},searchOptions:[{label:"获奖时间",key:"time",type:"date"},{label:"姓名",key:"name"},{label:"学号",key:"study_num"},{label:"专业",key:"specialty"},{label:"导师",key:"teacher"},{label:"获奖作品名称",key:"name_winning_work"}]}},methods:{publicSearch:function(t){for(var e in t)this.condition[e]=t[e];this.getDataTables(this.page)},search:function(){this.getDataTables()},pageChange:function(t){this.getDataTables(t)},getDataTables:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.pageSize=this.condition.page_num;var a={};for(var i in e&&(a.page=e),this.condition)this.condition[i]&&(a[i]=this.condition[i]);c.a.StudentAwards.get(a).then(function(a){200==a.code&&(t.page=e,t.items=a.data.data,t.total=a.data.total,setTimeout(function(){return s.a.iCheck()},200))})},download:function(t){this.fileExport({ids:[t.id],model:this.code})},fileExport:function(t){c.a.FileDownload(t).then(function(t){d.a.download(t)})},delConfirm:function(t){var e=this;c.a.StudentAwards.del(t.id).then(function(t){200==t.code&&e.getDataTables()})},add:function(){o.a.addDetailsTab("/views/studentAwards/new","学生获奖情况-新增")},edit:function(t){o.a.addDetailsTab("/views/studentAwards/"+t.id,"学生获奖情况-详情-"+t.id)}},created:function(){var t=this;this.operation=r.a.pageOperation("talent_development"),d.a.getTableKeys(c.a,this.code,this.dataKeys).then(function(e){t.dataKeys=e}),this.$route.query.key&&(this.condition.key=this.$route.query.key,this.condition.status=3),this.getDataTables()},mounted:function(){}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper wrapper-content"},[a("div",{staticClass:"ibox float-e-margins"},[t._m(0),t._v(" "),a("div",{staticClass:"ibox-content"},[a("format-table",{attrs:{operation:t.operation,code:t.code,condition:t.condition,searchOptions:t.searchOptions,dataKeys:t.dataKeys,items:t.items,page:t.page,total:t.total,pageSize:t.pageSize,service:t.service},on:{search:t.publicSearch,fileExport:t.fileExport,download:t.download,edit:t.edit,delConfirm:t.delConfirm,pageChange:t.pageChange,add:t.add}})],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ibox-title"},[e("h5",[this._v("学生获奖情况")])])}]};var h=a("VU/8")(l,u,!1,function(t){a("+KUo")},"data-v-243f4f66",null);e.default=h.exports}});
//# sourceMappingURL=75.efaf594ce633f186c1fe.js.map