(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{1201:function(e,t,a){"use strict";a.r(t);var n=a(19),l=a(20),r=a(33),o=a(22),s=a(21),i=a(0),c=a.n(i),d=a(58),u=a(311),m=a(312),g=a(78),h=a(11),p=a(211),b=a(680),E=a(677),f=a.n(E),x=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={},l}return Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(f.a,{id:"test-table-xls-button",className:"btn btn-success btn-block",table:"table-to-xls",filename:"Laporan Service Ambil",sheet:"Laporan Service Ambil",buttonText:"Export Exel"}),c.a.createElement("table",{id:"table-to-xls",style:{display:"none"}},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{colSpan:"8",style:{textAlign:"center"}}," ","LAPORAN SERVICE AMBIL"," ")),c.a.createElement("tr",null,c.a.createElement("th",{colSpan:"8"}," Periode ")),c.a.createElement("tr",null,c.a.createElement("th",{colSpan:"8"}," ",0===Object(h.l)("tgl_laporan").length?null:JSON.parse(Object(h.l)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(h.l)("tgl_laporan")).tgl_akhir," ")),c.a.createElement("tr",null,c.a.createElement("th",{colSpan:"8"}," TOKO : ",Object(h.j)().nama_toko," ")),c.a.createElement("tr",null,c.a.createElement("th",{colSpan:"8"}," ALAMAT : ",Object(h.j)().alamat_toko," ")),c.a.createElement("tr",null),c.a.createElement("tr",null,c.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NO SERVICE"),c.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"TGL TRANSAKSI"),c.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NAMA CUSTOMER"),c.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"SALES"),c.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"DESKRIPSI"),c.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"BERAT"),c.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"QTY"),c.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"ONGKOS"))),c.a.createElement("tbody",null,this.props.data.map(function(e,t){return c.a.createElement(c.a.Fragment,null,c.a.createElement("tr",{key:t},c.a.createElement("td",null,e.no_faktur_service),c.a.createElement("td",null,e.tgl_system),c.a.createElement("td",null,e.nama_customer),c.a.createElement("td",null,e.kode_sales),c.a.createElement("td",null,e.detail_barang.deskripsi),c.a.createElement("td",{style:{textAlign:"right"}},"\xa0",e.detail_barang.berat.toFixed(2)),c.a.createElement("td",{style:{textAlign:"right"}},"\xa0",e.detail_barang.jumlah.toLocaleString("kr-KO")),c.a.createElement("td",{style:{textAlign:"right"}},"\xa0",e.detail_barang.ongkos.toLocaleString("kr-KO"))))})),c.a.createElement("tfoot",null,c.a.createElement("tr",null,c.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"center"},colSpan:"8"},"Total Transaksi ",this.props.data.length)))))}}]),a}(i.Component),k=a(678),y=(a(679),function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=(arguments.length>1&&void 0!==arguments[1]&&arguments[1],arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3&&void 0!==arguments[3]&&arguments[3],new k.default("l","mm",[297,210])),n=[],l=30;a.setFontSize(15),a.text("LAPORAN SERVICE AMBIL",14,15),a.setFontSize(20),a.text(Object(h.j)().nama_toko,200,15),a.setFontSize(8);var r=Object(h.j)().alamat_toko.length;r>20&&a.text(Object(h.j)().alamat_toko.slice(0,48),200,20),r>50&&a.text(Object(h.j)().alamat_toko.slice(48,90),200,25),a.setFontSize(10),a.setProperties({title:"LAPORAN SERVICE AMBIL"}),a.text("PERIODE : ".concat(0===Object(h.l)("tgl_laporan").length?null:JSON.parse(Object(h.l)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(h.l)("tgl_laporan")).tgl_akhir),14,25),e=[[{content:"NO SERVICE"},{content:"TGL TRANSAKSI"},{content:"NAMA CUSTOMER"},{content:"SALES"},{content:"DESKRIPSI"},{content:"BERAT",styles:{halign:"right"}},{content:"QTY",styles:{halign:"right"}},{content:"ONGKOS",styles:{halign:"right"}}]];var o=0;t.forEach(function(e,t){o+=e.detail_barang.ongkos;var a=[e.no_faktur_service,e.tgl_system,e.nama_customer,e.kode_sales,e.detail_barang.deskripsi,{content:e.detail_barang.berat.toFixed(3),styles:{halign:"right"}},{content:parseInt(e.detail_barang.jumlah),styles:{halign:"right"}},{content:parseInt(e.detail_barang.ongkos).toLocaleString("kr-KO"),styles:{halign:"right"}}];n.push(a)});var s=[{content:"Total Transaksi: ".concat(t.length),colSpan:8,styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:parseInt(o).toLocaleString("kr-KO"),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}}];n.push(s);var i=[{content:"Printed By ".concat(JSON.parse(Object(h.l)("userdata")).user_id," / ").concat(Object(h.i)()),colSpan:7,styles:{fontStyle:"italic",textColor:"#000"}}];n.push(i),a.autoTable({head:e,body:n,startY:l,theme:"plain",rowPageBreak:"avoid",margin:{top:10},footStyles:{fontSize:8},bodyStyles:{fontSize:8},headStyles:{fontSize:8,fillColor:"#E8E5E5",textColor:"#000"},tableLineColor:[255,255,255],tableLineWidth:1}),l=a.autoTableEndPosY()+3,n=[];var c=a.internal.getNumberOfPages(),d=a.internal.pageSize.width,u=a.internal.pageSize.height;a.setFontSize(10);for(var m=1;m<c+1;m++){var g=d/2,p=u-10;a.setPage(m),a.text("".concat(m," of ").concat(c),g,p,{align:"center"})}a.save("LAPORAN SERVICE AMBIL.pdf")}),S=a(210),v=a.n(S),O=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={date:new Date,columns:[{dataField:"no_faktur_service",text:"No Service",footerAttrs:{colSpan:"8"},footer:function(e,t,a,n){return c.a.createElement("div",null,"Total Transaksi : ",l.props.LaporanServices.length," ")}},{dataField:"tgl_system",text:"Tgl Transaksi"},{dataField:"nama_customer",text:"Nama Customer"},{dataField:"alamat_customer",text:"Alamat"},{dataField:"kode_sales",text:"Sales"},{dataField:"detail_barang.deskripsi",text:"Deskripsi"},{dataField:"detail_barang.berat",text:"Berat",headerClasses:"text-right",formatter:function(e){return c.a.createElement("div",{className:"text-right"},e.toFixed(2))}},{dataField:"detail_barang.ongkos",text:"Ongkos",headerClasses:"text-right",formatter:function(e){return c.a.createElement("div",{className:"text-right"},e.toLocaleString("kr-KO"))}}]},l.setStartDate=l.setStartDate.bind(Object(r.a)(l)),l.setLastDate=l.setLastDate.bind(Object(r.a)(l)),l}return Object(l.a)(a,[{key:"exportPdf",value:function(){y(this.props.LaporanServices)}},{key:"setStartDate",value:function(e){this.setState({tgl_awal:new Date(e)})}},{key:"setLastDate",value:function(e){this.setState({tgl_akhir:new Date(e)})}},{key:"render",value:function(){var e=this;return c.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-4"},c.a.createElement(u.a,{name:"tgl_awal",component:g.c,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:function(t){return e.setStartDate(t)},placeholder:"Masukan Tanggal Dari"})),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement(u.a,{name:"tgl_akhir",component:g.c,type:"text",selected:this.state.tgl_akhir,onChange:function(t){return e.setLastDate(t)},label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"})),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("div",{className:"text-right"},c.a.createElement("label",null,"\xa0"),c.a.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?c.a.createElement(c.a.Fragment,null,c.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Laporan"))),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement(p.a,{keyField:"no_hp",data:this.props.export?this.props.LaporanServices:[],columns:this.state.columns,empty:!0,textEmpty:"Data Laporan Service Ambil Kosong"})),c.a.createElement("div",{className:this.props.export?"col-lg-12":"col-lg-12 d-none"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("button",{onClick:function(){return e.exportPdf()},className:"btn btn-warning btn-block"}," ","Export PDF"," ")),c.a.createElement("div",{className:"col-lg-6"},c.a.createElement(x,{data:this.props.LaporanServices}))))),this.props.isLoading?c.a.createElement(v.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),a}(i.Component);O=Object(m.a)({form:"HeadLaporanServiceAmbil",enableReinitialize:!0,validate:b.a})(O);t.default=Object(d.b)(function(e){return{initialValues:{tgl_awal:Object(h.h)(),tgl_akhir:Object(h.h)()}}})(O)},677:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(0),r=s(l),o=s(a(1));function s(e){return e&&e.__esModule?e:{default:e}}var i={table:o.default.string.isRequired,filename:o.default.string.isRequired,sheet:o.default.string.isRequired,id:o.default.string,className:o.default.string,buttonText:o.default.string},c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleDownload=a.handleDownload.bind(a),a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),n(t,[{key:"handleDownload",value:function(){if(!document)return null;if(1!==document.getElementById(this.props.table).nodeType||"TABLE"!==document.getElementById(this.props.table).nodeName)return null;var e=document.getElementById(this.props.table).outerHTML,a=String(this.props.sheet),n=String(this.props.filename)+".xls",l={worksheet:a||"Worksheet",table:e};if(window.navigator.msSaveOrOpenBlob){var r=new Blob(['<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8">\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e</head><body>'+e+"</body></html>"]);return document.getElementById("react-html-table-to-excel").click()(function(){window.navigator.msSaveOrOpenBlob(r,n)}),!0}var o=window.document.createElement("a");return o.href="data:application/vnd.ms-excel;base64,"+t.base64(t.format('<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8">\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e</head><body>{table}</body></html>',l)),o.download=n,document.body.appendChild(o),o.click(),document.body.removeChild(o),!0}},{key:"render",value:function(){return r.default.createElement("button",{id:this.props.id,className:this.props.className,type:"button",onClick:this.handleDownload},this.props.buttonText)}}],[{key:"base64",value:function(e){return window.btoa(unescape(encodeURIComponent(e)))}},{key:"format",value:function(e,t){return e.replace(/{(\w+)}/g,function(e,a){return t[a]})}}]),t}();c.propTypes=i,c.defaultProps={id:"button-download-as-xls",className:"button-download",buttonText:"Download"},t.default=c},680:function(e,t,a){"use strict";t.a=function(e,t){var a={};return e.tgl_awal||(a.tgl_awal="Tanggal Awal Tidak Boleh Kosong"),e.tgl_akhir||(a.tgl_akhir="Tanggal Akhir Tidak Boleh Kosong"),a}}}]);
//# sourceMappingURL=47.1d507fee.chunk.js.map