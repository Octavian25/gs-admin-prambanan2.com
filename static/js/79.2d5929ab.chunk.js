(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{1258:function(e,t,a){"use strict";a.r(t);var n=a(19),l=a(20),o=a(33),r=a(22),c=a(21),i=a(0),s=a.n(i),m=a(28),u=a(11),d=a(36),h=a(123),b=a(13),E=a(58),p=a(311),f=a(312),g=a(78),x=a(211),k=a(677),y=a.n(k),O=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={},l}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(y.a,{id:"test-table-xls-button",className:"btn btn-success btn-block",table:"table-to-xls",filename:"Laporan Daftar Member",sheet:"Laporan Daftar Member",buttonText:"Export Exel"}),s.a.createElement("table",{rowkey:"kode_member",id:"table-to-xls",style:{display:"none"}},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"9"}," Laporan Daftar Member ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"9"}," Periode ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"9"}," ",0===Object(u.l)("tgl_laporan").length?null:JSON.parse(Object(u.l)("tgl_laporan")).tgl_awal+"s/d"+JSON.parse(Object(u.l)("tgl_laporan")).tgl_akhir," ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"9"}," TOKO :  ",Object(u.j)().nama_toko," ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"9"}," ALAMAT :  ",Object(u.j)().alamat_toko," ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"9"})),s.a.createElement("tr",null,s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"Kode Member"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"Nama Member"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"No Hp"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"Alamat Customer"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"Kecamatan"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"Kelurahan"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"Kota"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"Point"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"Tanggal Lahir"))),this.props.data.map(function(e,t){return s.a.createElement(s.a.Fragment,null,s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"9",style:{textAlign:"left"}}," ","Tanggal Daftar : ",e._id.tgl_daftar," ")),e.detail.map(function(e,t){return s.a.createElement(s.a.Fragment,null,s.a.createElement("tr",null,s.a.createElement("td",null," ",e.kode_member),s.a.createElement("td",null," ",e.nama_customer),s.a.createElement("td",null," ",e.no_hp),s.a.createElement("td",null," ",e.alamat_customer),s.a.createElement("td",null," ",e.kecamatan),s.a.createElement("td",null," ",e.kelurahan),s.a.createElement("td",null," ",e.kota),s.a.createElement("td",null," ",e.point),s.a.createElement("td",null," ",e.tgl_lahir)))})),s.a.createElement("tfoot",null,s.a.createElement("tr",null,s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"},colSpan:"8"}," ","Jumlah Daftar"," "),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},e.detail.length))))}),s.a.createElement("tr",null,s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"},colSpan:"8"}," ","Total Pendaftar"," "),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},this.props.data.map(function(e){return e.detail.length}).reduce(function(e,t){return e+t},0)))))}}]),a}(i.Component),v=a(678),w=(a(679),function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=(arguments.length>1&&void 0!==arguments[1]&&arguments[1],arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3&&void 0!==arguments[3]&&arguments[3],new v.default("l","mm",[297,210])),n=[],l=[],o=30,r=0;a.setFontSize(15),a.text("LAPORAN DAFTAR MEMBER",14,15),a.setFontSize(20),a.text(Object(u.j)().nama_toko,200,15),a.setFontSize(8);var c=Object(u.j)().alamat_toko.length;c>20&&a.text(Object(u.j)().alamat_toko.slice(0,48),200,20),c>50&&a.text(Object(u.j)().alamat_toko.slice(48,90),200,25),a.setFontSize(10),a.setProperties({title:"LAPORAN DAFTAR MEMBER"}),a.text("PERIODE : ".concat(0===Object(u.l)("tgl_laporan").length?null:JSON.parse(Object(u.l)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(u.l)("tgl_laporan")).tgl_akhir),14,25),e=[[{content:"KODE MEMBER"},{content:"NAMA MEMBER"},{content:"NO HP"},{content:"ALAMAT CUSTOMER"},{content:"KECMATAN"},{content:"KELURAHAN"},{content:"KOTA"},{content:"POINT"},{content:"TANGGAL LAHIR"}]],t.forEach(function(e,t){var a=[{content:"Tanggal Daftar : ".concat(e._id.tgl_daftar),colSpan:"9"}];n.push(a),e.detail.forEach(function(e,t){var a=[{content:e.kode_member},{content:e.nama_customer||""},{content:e.no_hp},{content:e.alamat_customer},{content:e.kecamatan},{content:e.kelurahan},{content:e.kota},{content:e.point},{content:e.tgl_lahir}];n.push(a)}),r+=e.detail.length,e.detail.length;var l=[{content:"Jumlah Daftar :",colSpan:"8",styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(e.detail.length),styles:{fillColor:"#E8E5E5",textColor:"#000"}}];n.push(l)});var i=[{content:"Total Pendaftar :",colSpan:8,styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(r),styles:{fillColor:"#E8E5E5",textColor:"#000"}}];l.push(i);var s=[{colSpan:3,content:"Printed By ".concat(JSON.parse(Object(u.l)("userdata")).user_id," / ").concat(Object(u.i)()),styles:{fontStyle:"italic",textColor:"#000"}}];l.push(s),a.autoTable({head:e,body:n,foot:l,startY:o,theme:"plain",rowPageBreak:"avoid",margin:{top:10},footStyles:{fontSize:8},bodyStyles:{fontSize:8},headStyles:{fontSize:8,textColor:"#000",fillColor:"#E8E5E5"}}),o=a.autoTableEndPosY()+3,n=[],r=0;var m=a.internal.getNumberOfPages(),d=a.internal.pageSize.width,h=a.internal.pageSize.height;a.setFontSize(10);for(var b=1;b<m+1;b++){var E=d/2,p=h-10;a.setPage(b),a.text("".concat(b," of ").concat(m),E,p,{align:"center"})}var f=a.output("datauristring"),g=window.open();g.document.open(),g.document.write("<html><head><title>LAPORAN DAFTAR MEMBER</title></head><body style='margin:0 !important'><embed width='100%' height='100%'  src="+f+"></embed></body></html>")}),_=a(210),S=a.n(_),j=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={date:new Date},l.handleSubmit=l.handleSubmit.bind(Object(o.a)(l)),l.setStartDate=l.setStartDate.bind(Object(o.a)(l)),l.setLastDate=l.setLastDate.bind(Object(o.a)(l)),l}return Object(l.a)(a,[{key:"handleSubmit",value:function(e){console.log(e)}},{key:"exportPdf",value:function(){w(this.props.datamember)}},{key:"setStartDate",value:function(e){this.setState({tgl_awal:new Date(e)})}},{key:"setLastDate",value:function(e){this.setState({tgl_akhir:new Date(e)})}},{key:"render",value:function(){var e=this,t=[];this.props.datamember.forEach(function(e,a){e.detail.forEach(function(e,a){t.push(e)})});var a=[{dataField:"kode_member",text:"Kode Member",footerAttrs:{colSpan:"4"},footer:function(e,a,n,l){return s.a.createElement("div",null,"Total Daftar : ",t.length," ")}},{dataField:"nama_customer",text:"Nama Member"},{dataField:"point",text:"Point",formatter:function(e,t){return e||0}},{dataField:"alamat_customer",text:"Alamat",formatter:function(e,t){return e+" "+t.kecamatan+" "+t.kelurahan+" "+t.kota}}];return s.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(p.a,{name:"tgl_awal",component:g.c,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:function(t){return e.setStartDate(t)},placeholder:"Masukan Tanggal Dari"})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(p.a,{name:"tgl_akhir",component:g.c,type:"text",selected:this.state.tgl_akhir,onChange:function(t){return e.setLastDate(t)},label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("div",{className:"text-right"},s.a.createElement("label",null,"\xa0"),s.a.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Laporan"))),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement(x.a,{keyField:"no_hp",data:this.props.export?t:[],columns:a,empty:!0,textEmpty:"Data Laporan Hutang Kosong"})),s.a.createElement("div",{className:this.props.export?"col-lg-12":"col-lg-12 d-none"},s.a.createElement("label",{htmlFor:""},"\xa0"),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("button",{onClick:function(){return e.exportPdf()},className:"btn btn-warning btn-block"}," ","Export PDF"," ")),s.a.createElement("div",{className:"col-lg-6"},s.a.createElement(O,{data:this.props.datamember}))))),this.props.isLoading?s.a.createElement(S.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),a}(i.Component);j=Object(f.a)({form:"HeadFormMember",enableReinitialize:!0})(j);var N=Object(E.b)(function(e){return{initialValues:{tgl_awal:Object(u.h)(),tgl_akhir:Object(u.h)()}}})(j),C=a(212),D=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={isLoading:!1,export:!1,datamember:[]},l.handleSubmit=l.handleSubmit.bind(Object(o.a)(l)),l}return Object(l.a)(a,[{key:"handleSubmit",value:function(e){var t=this;this.setState({isLoading:!0});var a={tgl_awal:Object(u.e)(C(new Date(e.tgl_awal)).format("YYYY-MM-DD")),tgl_akhir:Object(u.e)(C(new Date(e.tgl_akhir)).format("YYYY-MM-DD"))};Object(b.m)("member/get/by-tanggal",a).then(function(e){0===e.data.length?(Object(d.e)("info","Data Yang Anda Cari Tidak Ada"),t.setState({export:!1,datamember:[],isLoading:!1})):(Object(d.e)("success","Laporan Data Member Tersedia"),Object(u.m)("tgl_laporan",JSON.stringify(a)),t.setState({export:!0,datamember:e.data,isLoading:!1}))}).catch(function(e){Object(d.e)("info","Data Yang Anda Cari Tidak Ada"),t.setState({export:!1,datamember:[],isLoading:!1})})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("ol",{className:"breadcrumb float-xl-right"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement(m.b,{to:"#"},"Laporan")),s.a.createElement("li",{className:"breadcrumb-item active"},"Laporan Member")),s.a.createElement("h1",{className:"page-header"},"Laporan Member "),s.a.createElement(h.a,null,s.a.createElement(h.c,null,"Laporan Member"),s.a.createElement("br",null),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement(N,{isLoading:this.state.isLoading,export:this.state.export,datamember:this.state.datamember,onSubmit:function(t){return e.handleSubmit(t)}})))),s.a.createElement("br",null)))}}]),a}(s.a.Component);t.default=D},677:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(0),o=c(l),r=c(a(1));function c(e){return e&&e.__esModule?e:{default:e}}var i={table:r.default.string.isRequired,filename:r.default.string.isRequired,sheet:r.default.string.isRequired,id:r.default.string,className:r.default.string,buttonText:r.default.string},s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleDownload=a.handleDownload.bind(a),a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),n(t,[{key:"handleDownload",value:function(){if(!document)return null;if(1!==document.getElementById(this.props.table).nodeType||"TABLE"!==document.getElementById(this.props.table).nodeName)return null;var e=document.getElementById(this.props.table).outerHTML,a=String(this.props.sheet),n=String(this.props.filename)+".xls",l={worksheet:a||"Worksheet",table:e};if(window.navigator.msSaveOrOpenBlob){var o=new Blob(['<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8">\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e</head><body>'+e+"</body></html>"]);return document.getElementById("react-html-table-to-excel").click()(function(){window.navigator.msSaveOrOpenBlob(o,n)}),!0}var r=window.document.createElement("a");return r.href="data:application/vnd.ms-excel;base64,"+t.base64(t.format('<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8">\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e</head><body>{table}</body></html>',l)),r.download=n,document.body.appendChild(r),r.click(),document.body.removeChild(r),!0}},{key:"render",value:function(){return o.default.createElement("button",{id:this.props.id,className:this.props.className,type:"button",onClick:this.handleDownload},this.props.buttonText)}}],[{key:"base64",value:function(e){return window.btoa(unescape(encodeURIComponent(e)))}},{key:"format",value:function(e,t){return e.replace(/{(\w+)}/g,function(e,a){return t[a]})}}]),t}();s.propTypes=i,s.defaultProps={id:"button-download-as-xls",className:"button-download",buttonText:"Download"},t.default=s}}]);
//# sourceMappingURL=79.2d5929ab.chunk.js.map