webpackJsonp([10,17],{20:function(e,s){"use strict"},38:function(e,s,d){s=e.exports=d(1)(),s.push([e.id,"#myAddresses .content{background-color:#fdfefe}#myAddresses .content-block{margin:0;padding:0}#myAddresses .ready-address{margin:.6rem 1.2rem;height:2.4rem}#myAddresses .ready-address p{font-size:.65rem}#myAddresses .ready-address .label{width:20%!important}#myAddresses .ready-address .icon{font-size:.7rem}#myAddresses .input{font-size:.8rem!important;line-height:2.15rem!important}#myAddresses .badge{margin:.2rem}#myAddresses .ready-address h4,#myAddresses .ready-address p{margin:0;font-weight:400}#myAddresses .add,#myAddresses .add:active{display:block;width:100%;height:2.2rem;line-height:2.2rem;text-align:center;background-color:#1975c8;color:#000;font-size:.8rem;margin-top:.4rem}.address-detail{width:64%}",""])},56:function(e,s,d){var r=d(38);"string"==typeof r&&(r=[[e.id,r,""]]);d(2)(r,{});r.locals&&(e.exports=r.locals)},75:function(e,s){e.exports='<div class=view id=myAddresses><header class="bar bar-nav"><a class="icon icon-left pull-left" v-link="{ path: \'/person\' }"></a><h1 class=title>收货地址</h1></header><div class=content><div class=content-inner><ul><li class="clearfix ready-address" v-on:click=defaultAddress v-for="address in user.addresses" data-address-id={{$index}} transition=fade><span class="pull-left address-detail"><h4>{{address.phone}}（{{address.receiver}}）</h4><p>{{address.site}}</p></span><div class="pull-right address-operation"><span class="address-edit icon icon-edit" v-on:click=editAddress>编辑</span><span class="address-delete icon icon-remove" v-on:click=deleteAddress>删除</span></div><span class="badge pull-right" v-if="address.state==1">默认</span></li></ul><a class=add href=#newAddress>新增</a></div></div></div>'},93:function(e,s,d){var r,a;d(56),r=d(20),a=d(75),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),a&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=a)}});