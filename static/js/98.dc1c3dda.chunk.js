(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{1296:function(t,e,a){"use strict";a.r(e);var n=a(19),i=a(20),c=a(33),s=a(22),r=a(21),o=a(9),d=a(12),u=function(t){Object(s.a)(a,t);var e=Object(r.a)(a);function a(t){var i;return Object(n.a)(this,a),(i=e.call(this,t)).state={isLoading:!1},i.handleSubmit=i.handleSubmit.bind(Object(c.a)(i)),i}return Object(i.a)(a,[{key:"handleSubmit",value:function(){}},{key:"componentDidMount",value:function(){var t=this;setTimeout(function(){t.props.isEdit?document.getElementById("nama_cutgrade").focus():document.getElementById("kode_cutgrade").focus()},100)}},{key:"render",value:function(){var t=this;return d.n.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off",onKeyPress:function(t){"Enter"===t.key&&t.preventDefault()}},d.n.createElement(d.c,{id:"id",tabIndex:"1",name:"id",component:d.e,type:"hidden"}),d.n.createElement(d.c,{id:"kode_cutgrade",tabIndex:"1",name:"kode_cutgrade",component:d.p,type:"text",label:"Kode Cutgrade",readOnly:this.props.isEdit,placeholder:"Masukan Kode Cutgrade"}),d.n.createElement(d.c,{id:"nama_cutgrade",tabIndex:"2",name:"nama_cutgrade",component:d.p,type:"text",label:"Nama Cutgrade",placeholder:"Masukan Nama Cutgrade",onBlur:function(){return t.setState({aktif:!0})}}),d.n.createElement("div",{className:"row"},d.n.createElement("div",{className:"col-12 text-right"},d.n.createElement("button",{className:"btn btn-white",onClick:function(){return t.props.dispatch(Object(d.G)())},type:"button",disabled:this.props.isLoading},"Batal"),"\xa0",d.n.createElement("button",{tabIndex:"3",className:this.state.aktif?"btn btn-primary":"btn btn-white",disabled:this.props.submitting,type:"submit"},this.props.isLoading?d.n.createElement(d.n.Fragment,null,d.n.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))),this.props.isLoading?d.n.createElement(d.h,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),a}(d.n.Component);u=Object(d.Q)({form:"BatuCutgrade",enableReinitialize:!0})(u);var l=Object(d.u)(function(t){return{initialValues:{id:t.datamaster.ShowDataModal.id,kode_cutgrade:t.datamaster.ShowDataModal.kode_cutgrade,nama_cutgrade:t.datamaster.ShowDataModal.nama_cutgrade}}})(u),m=function(t){Object(s.a)(a,t);var e=Object(r.a)(a);function a(t){var i;return Object(n.a)(this,a),(i=e.call(this,t)).state={isLoading:!1,columns:[{dataField:"kode_cutgrade",text:"Kode Cutgrade"},{dataField:"nama_cutgrade",text:"Nama Cutgrade"},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:function(t,e){var a={id:e._id||1,kode_cutgrade:e.kode_cutgrade,nama_cutgrade:e.nama_cutgrade};return d.n.createElement("div",{className:"row text-center"},d.n.createElement("div",{className:"col-12"},d.n.createElement("button",{onClick:function(){return i.editData(a)},className:"btn btn-primary mr-3"},d.n.createElement("i",{className:"fa fa-edit"})),d.n.createElement("button",{onClick:function(){return i.hapusData(e)},className:"btn btn-danger"},d.n.createElement("i",{className:"fa fa-trash"}))))}}]},i.handleSubmit=i.handleSubmit.bind(Object(c.a)(i)),i}return Object(i.a)(a,[{key:"handleSubmit",value:function(t){var e=this;console.log(t),this.setState({isLoading:!0}),this.state.isEdit?Object(d.P)("batu-cutgrade/"+t.id,t).then(function(t){e.setState({isLoading:!1}),Object(d.t)("success","Data Berhasil Disimpan"),e.props.dispatch(Object(d.R)()),e.props.dispatch(Object(o.Jb)()),e.props.dispatch(Object(d.G)())}).catch(function(t){Object(d.t)("info","Data Gagal Disimpan"),e.setState({isLoading:!1})}):Object(d.O)("batu-cutgrade",t).then(function(t){e.setState({isLoading:!1}),Object(d.t)("success","Data Berhasil Disimpan"),e.props.dispatch(Object(d.R)()),e.props.dispatch(Object(o.Jb)()),e.props.dispatch(Object(d.G)())}).catch(function(t){Object(d.t)("info","Data Gagal Disimpan"),e.setState({isLoading:!1})})}},{key:"componentDidMount",value:function(){this.props.dispatch(Object(o.Jb)())}},{key:"editData",value:function(t){this.props.dispatch(Object(d.T)()),this.props.dispatch(Object(o.lb)(t)),this.setState({isEdit:!0})}},{key:"showModal",value:function(){this.props.dispatch(Object(d.T)()),this.props.dispatch(Object(o.lb)(!0)),this.setState({isEdit:!1})}},{key:"hapusData",value:function(t){var e=this;d.r.fire({html:"Apakah Anda Yakin Ingin Menghapus <h1><b>Kode Cutgrade "+t.kode_cutgrade+"</b> ?</h1>",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(function(a){a.isConfirmed&&Object(d.x)("batu-cutgrade/"+t._id).then(function(t){Object(d.t)("success",t.data.message||"Data Berhasil Disimpan"),e.props.dispatch(Object(o.Jb)())}).catch(function(t){var e,a;Object(d.t)("info",(null===(e=t.response)||void 0===e?void 0:null===(a=e.data)||void 0===a?void 0:a.message)||"Data Gagal Disimpan")})})}},{key:"render",value:function(){var t=this;return d.n.createElement("div",null,d.n.createElement("ol",{className:"breadcrumb float-xl-right"},d.n.createElement("li",{className:"breadcrumb-item"},d.n.createElement(d.g,{to:"#"},"Data Master")),d.n.createElement("li",{className:"breadcrumb-item"},d.n.createElement(d.g,{to:"#"},"Data Berlian")),d.n.createElement("li",{className:"breadcrumb-item active"},"Batu Cutgrade")),d.n.createElement("h1",{className:"page-header"},"Batu Cutgrade "),d.n.createElement(d.k,null,d.n.createElement(d.m,null,"Batu Cutgrade"),d.n.createElement(d.l,null,d.n.createElement(d.s,{keyField:"kode_cutgrade",tambahData:!0,handleClick:function(){return t.showModal()},exportCsv:!0,data:this.props.data,columns:this.state.columns,empty:this.props.data,textEmpty:"Batu Cutgrade Kosong"}))),d.n.createElement(d.i,{size:"P",title:this.state.isEdit?"Edit Data Cutgrade":"Tambah Data Cutgrade",content:d.n.createElement(l,{isLoading:this.state.isLoading,isEdit:this.state.isEdit,onSubmit:function(e){return t.handleSubmit(e)}})}))}}]),a}(d.n.Component);m=Object(d.Q)({form:"BatuCutgrade",enableReinitialize:!0})(m);e.default=Object(d.u)(function(t){return{data:t.datamaster.getDataCutgrad}})(m)}}]);
//# sourceMappingURL=98.dc1c3dda.chunk.js.map