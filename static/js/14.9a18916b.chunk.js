(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1248:function(a,e,t){"use strict";t.r(e);var n=t(103),r=t.n(n),o=t(216),s=t(160),i=t(19),l=t(20),c=t(22),m=t(21),p=t(0),d=t.n(p),u=t(58),b=t(28),g=t(27),h=t.n(g),_=t(55),f=t(123),k=t(910),E=t.n(k),v=t(311),O=t(312),S=t(315),N=t(214),y=t(9),j=t(78),B=t(11),I=t(36),M=t(13),x=function(a){var e={};return a.kode_dept||(e.kode_dept="Kode Jenis Harus Dipilih"),a.nama_barang||(e.nama_barang="Nama Barang Tidak Boleh Kosong"),a.berat||(e.berat="Berat Tidak Boleh Kosong"),a.harga||(e.harga="Harga Tidak Boleh Kosong"),a.harga_rata||(e.harga_rata="Harga Rata Tidak Boleh Kosong"),a.kondisi||(e.kondisi="Kondisi Harus Dipilih"),e},C=t(210),K=t.n(C),D=t(159),L=Object(N.createNumberMask)({prefix:"Rp. ",locale:"kr-KO"}),P=function(a){Object(c.a)(t,a);var e=Object(m.a)(t);function t(a){var n;return Object(i.a)(this,t),(n=e.call(this,a)).state={isLoading:!1,harga_jual:!0,hargapergram:!0,ongkos:!0,total:!0},n}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(y.Wb)()),this.props.dispatch(Object(y.Nb)()),this.props.dispatch(Object(y.bc)()),setTimeout(function(){document.getElementById("kode_barcode").focus()},100)}},{key:"getBarcode",value:function(a){var e=this;clearTimeout(this.delay),this.delay=setTimeout(function(){e.setState({searching:!0});var t=JSON.parse(localStorage.getItem("data_barang_pembelian_tmp"))||[];document.getElementById("kode_barcode").focus(),-1===t.findIndex(function(e){return e.kode_barcode===a})?Object(M.d)("pembelian/get/jual/"+a).then(function(a){0===a.data.length?(Object(I.e)("info","Data Yang Dicari Tidak Ada"),e.props.change("nama_barang",""),e.props.change("nama_atribut",""),e.props.change("berat_atribut",""),e.props.change("harga_atribut",""),e.props.change("berat",""),e.props.change("berat_nota",""),e.props.change("kode_dept",""),e.props.change("harga",""),e.props.change("harga_nota",""),e.setState({searching:!1})):(e.setState({searching:!1}),a.data.forEach(function(a,t){var n=Object(B.g)("data_customer_pembelian_tmp");if(null===n||0===n.length){var r={kode_sales:a.kode_sales,jenis_pelanggan:"NONMEMBER"===a.kode_member?"NONMEMBER":"MEMBER",kode_customer:a.kode_member,nama_customer:a.nama_customer,alamat_customer:a.alamat_customer,no_hp:a.no_hp};localStorage.setItem("data_customer_pembelian_tmp",JSON.stringify(r)),e.props.change("nama_barang",a.nama_barang),e.props.change("nama_atribut",a.nama_atribut),e.props.change("berat_atribut",a.berat_atribut),e.props.change("harga_atribut",a.harga_atribut),e.props.change("berat_nota",a.berat),e.props.change("berat",a.berat),e.props.change("kode_dept",a.kode_dept),e.props.change("harga_nota",parseInt(a.harga_jual)+parseInt(a.harga_atribut)),e.setState({harga_jual:!1,hargapergram:!1,ongkos:!1})}else{if(e.setState({searching:!1}),a.kode_member!==n.kode_customer)return Object(I.e)("info","Data Customer Berbeda"),!1;var o={kode_sales:a.kode_sales,jenis_pelanggan:"NONMEMBER"===a.kode_member?"NONMEMBER":"MEMBER",kode_customer:a.kode_member,nama_customer:a.nama_customer,alamat_customer:a.alamat_customer,no_hp:a.no_hp};localStorage.setItem("data_customer_pembelian_tmp",JSON.stringify(o)),e.props.change("kadar",a.kadar),e.props.change("nama_barang",a.nama_barang),e.props.change("nama_atribut",a.nama_atribut),e.props.change("berat_atribut",a.berat_atribut),e.props.change("harga_atribut",a.harga_atribut),e.props.change("berat_nota",a.berat),e.props.change("berat",a.berat),e.props.change("kode_dept",a.kode_dept),e.props.change("harga_nota",parseInt(a.harga_jual)+parseInt(a.harga_atribut)),e.setState({harga_jual:!1,hargapergram:!1,ongkos:!1,searching:!1})}}))}).catch(function(a){console.log(a),e.props.change("nama_barang",""),e.props.change("nama_atribut",""),e.props.change("berat_atribut",""),e.props.change("harga_atribut",""),e.props.change("berat",""),e.props.change("kadar",""),e.props.change("kode_dept",""),e.props.change("harga",""),Object(I.e)("info","Data Yang Dicari Tidak Ada"),e.setState({searching:!1})}):(e.props.change("nama_barang",""),e.props.change("nama_atribut",""),e.props.change("berat_atribut",""),e.props.change("harga_atribut",""),e.props.change("kadar",""),e.props.change("berat",""),e.props.change("kode_dept",""),e.props.change("harga",""),Object(I.e)("info","Kode Barcode Sudah Ada Dalam Table"),e.setState({searching:!1}))},1500)}},{key:"hitungTotal",value:function(){this.props.change("harga_rata",this.props.harga_rata)}},{key:"setValue",value:function(a){""===a&&this.change("berat_nota",1)}},{key:"getHarga",value:function(a){var e=this,t=a.split("~");Object(M.d)("parabeli/get/by-kode-kondisi/"+t[0]).then(function(a){e.props.change("potongan",a.data.potongan),e.props.change("harga",e.props.harga_beli)})}},{key:"render",value:function(){var a=this;return d.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:function(a){"Enter"===a.key&&a.preventDefault()},autoComplete:"off"},d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-12 col-md-4"},d.a.createElement(v.a,{id:"potongan",name:"potongan",component:j.b,type:"hidden",readOnly:!0}),d.a.createElement(v.a,{onChange:function(e){return a.getBarcode(e.target.value)},id:"kode_barcode",name:"kode_barcode",label:"Kode Barcode",type:"text",normalize:function(a){return a.replace(/[^\d]/g,"")},placeholder:"Masukan Kode Barcode",component:j.e})),d.a.createElement("div",{className:"col-12 col-md-4"},d.a.createElement(v.a,{name:"kondisi",label:"Kondisi",onChange:function(e){return a.getHarga(e)},options:this.props.datakondisi.filter(function(a){return void 0!==a.kondisi_barang}).map(function(a){return{value:a._id+"~"+a.kondisi_barang,name:a.kondisi_barang}||[]}),placeholder:"Masukan Kondisi",component:j.f})),d.a.createElement("div",{className:"col-12 col-md-4"},d.a.createElement(v.a,{label:"Kode Jenis",name:"kode_dept",options:this.props.datajenis.filter(function(a){return void 0!==a.kode_dept}).map(function(a){return{value:a.kode_dept,name:a.kode_dept+" - "+a.nama_dept}||[]}),placeholder:"Silahkan Pilih Kode Jenis",component:j.f})),d.a.createElement("div",{className:"col-12 col-md-4"},d.a.createElement(v.a,{name:"nama_barang",label:"Nama Barang",type:"text",placeholder:"Masukan Nama Barang",component:j.e})),d.a.createElement("div",{className:"col-12 col-md-2"},d.a.createElement(v.a,{name:"kadar",label:"Kadar",normalize:D.c,placeholder:"Masukan Kadar",component:j.e})),d.a.createElement("div",{className:"col-12 col-md-2"},d.a.createElement(v.a,{name:"berat_nota",label:"Berat Nota",readOnly:!0,normalize:D.a,placeholder:"Masukan Berat Nota",component:j.e})),d.a.createElement("div",{className:"col-12 col-md-4"},d.a.createElement(v.a,{id:"berat",name:"berat",label:"Berat",normalize:D.a,onChange:this.hitungTotal(),placeholder:"Masukan Berat",component:j.e})),d.a.createElement("div",{className:"col-12 col-md-4"},d.a.createElement(v.a,Object.assign({name:"harga_nota",label:"Harga Nota",type:"telp",readOnly:!0,onChange:this.hitungTotal()},L,{placeholder:"Masukan Harga Nota",component:j.e}))),d.a.createElement("div",{className:"col-12 col-md-4"},d.a.createElement(v.a,Object.assign({name:"harga",label:"Harga Beli",type:"telp"},L,{onChange:this.hitungTotal(),placeholder:"Masukan Harga Beli",component:j.e}))),d.a.createElement("div",{className:"col-12 col-md-4"},d.a.createElement(v.a,Object.assign({name:"harga_rata",label:"Harga Rata",type:"telp",readOnly:!0},L,{placeholder:"Masukan Harga Rata",component:j.e}))),d.a.createElement("div",{className:"col-12 col-md-12 text-right"},d.a.createElement("label",null,"\xa0"),d.a.createElement("button",{className:"btn btn-primary",disabled:this.props.isLoadingSimpanBarang,type:"submit"},this.props.isLoadingSimpanBarang?d.a.createElement(d.a.Fragment,null,d.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Barang"))),this.state.searching?d.a.createElement(K.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),t}(p.Component);P=Object(O.a)({form:"ModalTambahBarang",enableReinitialize:!0,validate:x})(P);var T=Object(S.a)("ModalTambahBarang"),w=Object(u.b)(function(a){var e=T(a,"harga","berat","harga_nota","potongan"),t=e.harga,n=e.berat,r=e.potongan,o=e.harga_nota,s=parseInt(r||0)*parseFloat(n||0);return{setBarangPembelian:a.penjualan.setBarangPembelian,harga_rata:parseFloat(t||0)/parseFloat(n||0)||0,harga_potong:parseInt(o||0)-parseInt(s||0),harga_beli:parseInt(o||0)-parseInt(s||0),DataSales:a.datamaster.getDataSales,datajenis:a.datamaster.getDataJenis,harga_nota:o,datakondisi:a.datamaster.getKondisiPembelian}})(P),J=t(64),F=t(711),R=[{value:"MEMBER",name:"MEMBER"},{value:"NONMEMBER",name:"NON MEMBER"}],H=function(a){Object(c.a)(t,a);var e=Object(m.a)(t);function t(a){var n;return Object(i.a)(this,t),(n=e.call(this,a)).state={showMember:!0},n}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(y.Wb)());var a=null===localStorage.getItem("data_customer_pembelian_tmp")?[]:JSON.parse(localStorage.getItem("data_customer_pembelian_tmp")||[]);a&&"MEMBER"===a.jenis_pelanggan?this.setState({showMember:!1}):this.setState({showMember:!0})}},{key:"changemember",value:function(a){"MEMBER"===a?this.setState({showMember:!1}):(this.props.change("kode_customer",""),this.props.change("nama_customer",""),this.props.change("no_hp",""),this.props.change("alamat_customer",""),this.setState({showMember:!0}))}},{key:"getMember",value:function(a){var e=this;Object(M.d)("member/get/by-kode-member/"+a).then(function(a){0===a.data.length?Object(I.e)("info","Member Yang Anda Masukan Tidak Ada !!!"):a.data.forEach(function(a,t){e.props.change("nama_customer",a.nama_customer),e.props.change("no_hp",a.no_hp),e.props.change("alamat_customer",a.alamat_customer)})}).catch(function(a){Object(I.e)("info","Terjadi Kesalahan SIlahkan Ulangi Kembali !!!")})}},{key:"render",value:function(){var a=this;return d.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:function(a){"Enter"===a.key&&a.preventDefault()},autoComplete:"off"},d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-4"},d.a.createElement(v.a,{tabIndex:"1",name:"kode_sales",label:"Pilih Kode Sales",placeholder:"Masukan Kode Sales",options:this.props.DataSales.filter(function(a){return void 0!==a.kode_sales}).map(function(a){return{value:a.kode_sales,name:a.kode_sales}}),component:j.f})),d.a.createElement("div",{className:"col-4"},d.a.createElement(v.a,{tabIndex:"2",name:"jenis_pelanggan",label:"Pilih Pelanggan",onChange:function(e){return a.changemember(e)},placeholder:"Silahkan Pilih Pelanggan",options:R,component:j.f})),d.a.createElement("div",{className:"col-4"},d.a.createElement(v.a,{tabIndex:"3",name:"kode_customer",onChange:function(e){return a.getMember(e.target.value)},component:j.e,type:"text",readOnly:this.state.showMember,label:"Kode Customer",placeholder:"Masukan Kode Customer"})),d.a.createElement("div",{className:"col-4"},d.a.createElement(v.a,{tabIndex:"4",name:"nama_customer",component:j.e,type:"text",label:"Nama Customer",placeholder:"Masukan Nama Customer"})),d.a.createElement("div",{className:"col-4"},d.a.createElement(v.a,{tabIndex:"5",name:"no_hp",component:j.e,type:"number",label:"No Hp",placeholder:"Masukan No Hp"})),d.a.createElement("div",{className:"col-4"},d.a.createElement(v.a,{tabIndex:"6",name:"alamat_customer",component:j.e,type:"textarea",label:"Alamat Customer",placeholder:"Masukan Alamat Customer"}))),d.a.createElement("br",null),d.a.createElement("br",null),d.a.createElement("br",null),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-6 text-left"},d.a.createElement("button",{onClick:function(){return a.props.back()},className:"btn btn-secondary",type:"button"},"Kembali")),d.a.createElement("div",{className:"col-6 text-right"},d.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.props.isLoading},this.props.isLoading?d.a.createElement(d.a.Fragment,null,d.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Selesai Pembelian"):"Selesai Pembelian"))))}}]),t}(p.Component);H=Object(O.a)({form:"ModalDataCustomer",enableReinitialize:!0,validate:F.a})(H);var A=Object(u.b)(function(a){var e=null===localStorage.getItem("data_customer_pembelian_tmp")?[]:JSON.parse(localStorage.getItem("data_customer_pembelian_tmp")||[]);return{initialValues:{kode_sales:e.kode_sales||"",jenis_pelanggan:e.jenis_pelanggan||"",kode_customer:e.kode_customer||"",nama_customer:e.nama_customer||"",no_hp:e.no_hp||"",alamat_customer:e.alamat_customer||""},DataSales:a.datamaster.getDataSales}},null)(H),z=t(686),U=Object(N.createNumberMask)({prefix:"Rp. ",locale:"kr-KO"}),W=[{value:"CASH",name:"CASH"}],q=function(a){Object(c.a)(t,a);var e=Object(m.a)(t);function t(){var a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=e.call.apply(e,[this].concat(r))).state={},a}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var a=this;this.props.dispatch(Object(y.Wb)());var e=JSON.parse(localStorage.getItem("data_barang_pembelian_tmp")),t=0;e.forEach(function(e,n){t+=e.harga,a.props.change("grand_total_pembayaran",t)}),this.props.change("jenis","CASH"),setTimeout(function(){document.getElementById("cash_trx_pembelian").focus()},100)}},{key:"hitungTotal",value:function(){this.props.change("kembali",this.props.kembali)}},{key:"render",value:function(){var a=this;return d.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:function(a){"Enter"===a.key&&a.preventDefault()},autoComplete:"off"},d.a.createElement("br",null),d.a.createElement("br",null),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-6"},d.a.createElement(v.a,Object.assign({name:"grand_total_pembayaran",component:j.e,type:"text",onChange:this.hitungTotal(),readOnly:!0},U,{label:"Grand Total Pembayaran",placeholder:"Masukan Grand Total"}))),d.a.createElement("div",{className:"col-6"},d.a.createElement(v.a,{name:"jenis",label:"Pilih Jenis Bayar",placeholder:"Pilih Jenis Pembayaran",options:W,component:j.f})),d.a.createElement("div",{className:"col-6"},d.a.createElement(v.a,Object.assign({tabIndex:"1",name:"cash",id:"cash_trx_pembelian",component:j.e,type:"text",label:"Cash",onChange:this.hitungTotal()},U,{normalize:D.c,placeholder:"Masukan Total Pembayaran"}))),d.a.createElement("div",{className:"col-6"},d.a.createElement(v.a,Object.assign({name:"kembali",component:j.e,type:"text",readOnly:!0,label:"Kembali"},U,{normalize:D.c,placeholder:"Kembalian"})))),d.a.createElement("br",null),d.a.createElement("br",null),d.a.createElement("br",null),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-6 text-left"},d.a.createElement("button",{onClick:function(){return a.props.back()},className:"btn btn-secondary",type:"button"},"Kembali")),d.a.createElement("div",{className:"col-6 text-right"},d.a.createElement("button",{tabIndex:"2",className:"btn btn-primary ",disabled:this.props.isLoading,type:"submit"},this.props.isLoading?d.a.createElement(d.a.Fragment,null,d.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Diproses"):"Bayar Sekarang"))))}}]),t}(p.Component);q=Object(O.a)({form:"ModalPembayaran",enableReinitialize:!0,validate:z.a})(q);var G=Object(S.a)("ModalPembayaran"),Y=Object(u.b)(function(a){var e=G(a,"grand_total_pembayaran","cash"),t=e.grand_total_pembayaran,n=e.cash;return{kembali:parseFloat(t||0)-parseFloat(n||0)}})(q),V=t(211),Q=function(a){Object(c.a)(t,a);var e=Object(m.a)(t);function t(a){var n;return Object(i.a)(this,t),(n=e.call(this,a)).state={isLoading:!1,harga_jual:!0,hargapergram:!0,ongkos:!0,total:!0},n}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(y.Wb)()),this.props.dispatch(Object(y.Nb)()),this.props.dispatch(Object(y.bc)())}},{key:"render",value:function(){return d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-12"},d.a.createElement(V.a,{keyField:"nama_barang",exportCsv:!1,data:0===this.props.setBarangPembelian.length?JSON.parse(localStorage.getItem("data_barang_pembelian_tmp")):this.props.setBarangPembelian,columns:this.props.columns,empty:!0,textEmpty:"Data Barang Kosong"})))}}]),t}(p.Component);Q=Object(O.a)({form:"LihatDataBarang",enableReinitialize:!0,validate:x})(Q);var X=Object(S.a)("LihatDataBarang"),Z=Object(u.b)(function(a){var e=X(a,"harga","berat"),t=e.harga,n=e.berat;return{setBarangPembelian:a.penjualan.setBarangPembelian,harga_rata:parseFloat(t||0)/parseFloat(n||0)||0,DataSales:a.datamaster.getDataSales,datajenis:a.datamaster.getDataJenis,datakondisi:a.datamaster.getKondisiPembelian}})(Q),$=t(733),aa=t(213),ea=function(a){Object(c.a)(t,a);var e=Object(m.a)(t);function t(a){var n;return Object(i.a)(this,t),(n=e.call(this,a)).state={isLoading:!1,step:0,isLoadingBatal:!1,isLoadingSimanBeli:!1,isLoadingDataCustomer:!1,isLoadingSimpanBarang:!1,columns:[{dataField:"kode_barcode",text:"Kode Barcode",footerAttrs:{colSpan:"3"},footer:"Total"},{dataField:"nama_barang",text:"Nama Barang"},{dataField:"kode_dept",text:"Jenis"},{dataField:"harga_nota",text:"Harga Nota",formatter:function(a){return d.a.createElement("span",null,parseInt(a).toLocaleString("kr-KO"))},footer:function(a){return parseInt(a.reduce(function(a,e){return a+e},0)).toLocaleString("kr-KO")}},{dataField:"berat_nota",text:"Berat Nota",formatter:function(a){return d.a.createElement("span",null,parseFloat(a).toFixed(3))},footer:function(a){return parseFloat(a.reduce(function(a,e){return a+e},0)).toFixed(3)}},{dataField:"berat",text:"Berat",formatter:function(a){return d.a.createElement("span",null,parseFloat(a).toFixed(3))},footer:function(a){return parseFloat(a.reduce(function(a,e){return a+e},0)).toFixed(3)}},{dataField:"harga",text:"Harga Beli",formatter:function(a){return d.a.createElement("span",null,parseInt(a).toLocaleString("kr-KO"))},footer:function(a){return parseInt(a.reduce(function(a,e){return a+e},0)).toLocaleString("kr-KO")}},{dataField:"kondisi",text:"Kondisi",footer:""},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:function(a,e,t){return d.a.createElement("div",{className:"row text-center"},d.a.createElement("div",{className:"col-12"},d.a.createElement("button",{type:"button",onClick:function(){return n.hapusdata(t)},className:"btn btn-danger mr-3"},d.a.createElement("i",{className:"fa fa-trash"}))))},footer:""}]},n}return Object(l.a)(t,[{key:"hapusdata",value:function(a){var e=this;h.a.fire({title:"Anda Yakin !!",text:"Ingin Menghapus Data Ini ?",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(function(t){if(t.isConfirmed){var n=JSON.parse(localStorage.getItem("data_barang_pembelian_tmp"));n.splice(a,1),localStorage.setItem("data_barang_pembelian_tmp",JSON.stringify(n)),0===n.length&&e.setState({step:0}),e.props.dispatch(Object(_.k)(n))}})}},{key:"simpanBarang",value:function(a){var e=a.kondisi.split("~"),t={kode_barcode:void 0===a.kode_barcode?"-":a.kode_barcode,nama_barang:a.nama_barang,kondisi:e[1],kadar:parseInt(a.kadar||0),kode_dept:a.kode_dept,harga_rata:parseInt(a.harga_rata),harga_nota:parseInt(a.harga_nota)||0,harga:parseInt(a.harga),berat_nota:parseFloat(a.berat_nota)||0,berat:parseFloat(a.berat)};if(this.setState({hasil:t}),void 0===a.kode_barcode)this.sendRequest(a);else{if(a.harga_nota<a.harga)return Object(I.e)("info","Harga Melebihi Nota"),this.props.dispatch(Object(y.nc)()),!1;this.sendRequest(a)}}},{key:"sendRequest",value:function(a){var e=this,t=a.kondisi.split("~");this.setState({isLoadingSimpanBarang:!0,step:1});var n={kode_barcode:void 0===a.kode_barcode?"-":a.kode_barcode,nama_barang:a.nama_barang,kondisi:t[1],kode_dept:a.kode_dept,kadar:parseInt(a.kadar||0),harga_rata:parseInt(a.harga_rata),harga_nota:parseInt(a.harga_nota)||0,harga:parseInt(a.harga),berat_nota:parseFloat(a.berat_nota)||0,berat:parseFloat(a.berat)};if(void 0===a.kondisi)return!1;var r=JSON.parse(localStorage.getItem("data_barang_pembelian_tmp"))||[];document.getElementById("kode_barcode").focus(),-1===r.findIndex(function(e){return e.kode_barcode===a.kode_barcode})?(r.push(n),Object(I.e)("success","Barang Berhasil Ditambahkan"),localStorage.setItem("data_barang_pembelian_tmp",JSON.stringify(r)),this.props.dispatch(Object(_.k)(r)),this.props.dispatch(Object(J.d)("ModalTambahBarang")),setTimeout(function(){e.setState({isLoadingSimpanBarang:!1})},200)):(setTimeout(function(){e.setState({isLoadingSimpanBarang:!1})},200),document.getElementById("kode_barcode").focus(),Object(I.e)("info","Barang Sudah Ada Di Tabel"))}},{key:"cekOtorisasi",value:function(a){var e=this,t={user_id:a.username,password:a.password,kategori:"PEMBELIAN",description:"PEMBELIAN DI ATAS NOTA",keterangan:a.keterangan.toUpperCase()||"-"};Object(M.k)("authorization",t).then(function(a){e.sendRequest(e.state.hasil),Object(I.e)("success",a.data.message),localStorage.setItem("otorisasi","false"),e.setState({otorisasi:!0}),e.props.dispatch(Object(y.lc)())}).catch(function(a){e.setState({otorisasi:!1}),Object(I.e)("info","Otorisasi Gagal..")})}},{key:"handleSubmit",value:function(a){var e=this;this.setState({isLoading:!0}),localStorage.setItem("data_customer_pembelian_tmp",JSON.stringify(a)),setTimeout(function(){var a=JSON.parse(localStorage.getItem("data_barang_pembelian_tmp")),t=0;a.forEach(function(a,e){t+=a.harga});var n={jenis:"CASH",jumlah_rp:t},i=JSON.parse(localStorage.getItem("data_customer_pembelian_tmp")),l=JSON.parse(localStorage.getItem("data_barang_pembelian_tmp")),c=[];l.forEach(function(a,e){var t={kode_dept:a.kode_dept,nama_barang:a.nama_barang,berat_nota:a.berat_nota,harga:a.harga,berat:a.berat,kadar:a.kadar||0,harga_nota:a.harga_nota,kondisi:a.kondisi,kode_barcode:a.kode_barcode};c.push(t)});var m={kode_sales:i.kode_sales,nama_customer:i.nama_customer,kode_member:"NONMEMBER"===i.jenis_pelanggan?i.jenis_pelanggan:i.kode_customer,alamat_customer:i.alamat_customer,no_hp:i.no_hp,detail_barang:c,pembayaran:[n]};Object(M.j)("pembelian/simpan",m).then(function(){var a=Object(s.a)(r.a.mark(function a(e){var t,n,s;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:Object(I.e)("success",e.data.message),t=Object(o.a)(c);try{for(t.s();!(n=t.n()).done;)s=n.value,Object(M.c)("foto_produk/"+s.kode_barcode).then(function(a){}).catch(function(a){console.log(a)})}catch(r){t.e(r)}finally{t.f()}case 3:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()).then(function(){e.setState({isLoading:!1})}).then(function(){e.props.dispatch(Object(J.d)("ModalPembayaran"))}).then(function(){localStorage.setItem("data_customer_pembelian_tmp",JSON.stringify([])),localStorage.setItem("data_barang_pembelian_tmp",JSON.stringify([]))}).then(function(){e.props.dispatch(Object(_.k)([])),e.setState({step:0})}).catch(function(a){return e.errorhandling(a)})},500)}},{key:"back",value:function(a){this.setState({step:a})}},{key:"simpanPembayaran",value:function(a){var e=this;if("CASH"!==a.jenis&&a.kembali.replace(/[^0-9]/g,"")-a.cash<0)return Object(I.e)("info","Pembayaran tidak boleh lebih dari sisa"),!1;this.setState({isLoading:!0});var t=JSON.parse(localStorage.getItem("data_barang_pembelian_tmp"));t.forEach(function(a,e){a.harga});var n=0;n=a.cash>a.grand_total_pembayaran?a.grand_total_pembayaran:a.cash;var i={jenis:a.jenis,jumlah_rp:n};if(parseInt(a.cash)<parseInt(a.grand_total_pembayaran)){var l=parseInt(a.grand_total_pembayaran)-parseInt(a.cash);return Object(I.e)("info","Pembayaran Masih Kurang Rp."+parseInt(l).toLocaleString("kr-KO")),this.setState({isLoading:!1}),!1}var c=JSON.parse(localStorage.getItem("data_customer_pembelian_tmp")),m=JSON.parse(localStorage.getItem("data_barang_pembelian_tmp")),p=[];m.forEach(function(a,e){var t={kode_dept:a.kode_dept,nama_barang:a.nama_barang,berat_nota:a.berat_nota,harga:a.harga,berat:a.berat,harga_nota:a.harga_nota,kondisi:a.kondisi,kode_barcode:a.kode_barcode};p.push(t)});var d={kode_sales:c.kode_sales,nama_customer:c.nama_customer,kode_member:"NONMEMBER"===c.jenis_pelanggan?c.jenis_pelanggan:c.kode_customer,alamat_customer:c.alamat_customer,no_hp:c.no_hp,detail_barang:p,pembayaran:[i]};Object(M.j)("pembelian/simpan",d).then(function(){var a=Object(s.a)(r.a.mark(function a(e){var t,n,s;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:Object(I.e)("success",e.data.message),t=Object(o.a)(p);try{for(t.s();!(n=t.n()).done;)s=n.value,console.log(s),Object(M.c)("foto_produk/"+s.kode_barcode).then(function(a){}).catch(function(a){return Object(I.e)("info","Terjadi Kesalahan Saat Hancur Barang Silahkan Ulangi Kembali"),!1})}catch(r){t.e(r)}finally{t.f()}case 3:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()).then(function(){e.setState({isLoading:!1})}).then(function(){e.props.dispatch(Object(J.d)("ModalPembayaran"))}).then(function(){localStorage.setItem("data_customer_pembelian_tmp",JSON.stringify([])),localStorage.setItem("data_barang_pembelian_tmp",JSON.stringify([]))}).then(function(){e.props.dispatch(Object(_.k)([])),e.setState({step:0})}).catch(function(a){return e.errorhandling(a)})}},{key:"componentWillUnmount",value:function(){localStorage.setItem("data_customer_pembelian_tmp",JSON.stringify([])),localStorage.setItem("data_barang_pembelian_tmp",JSON.stringify([]))}},{key:"errorhandling",value:function(a){console.log(a),this.setState({isLoading:!1}),Object(I.e)("info","Transaksi Gagal Disimpan")}},{key:"nextLihatDataBarang",value:function(){if(null==localStorage.getItem("data_barang_pembelian_tmp")||0===JSON.parse(localStorage.getItem("data_barang_pembelian_tmp")).length)return Object(I.e)("info","Data Barang Tidak Boleh Kosong"),!1;this.setState({step:1})}},{key:"btlPembelian",value:function(){var a=this;this.setState({isLoadingBatal:!0}),setTimeout(function(){localStorage.setItem("data_customer_pembelian_tmp",JSON.stringify([])),a.props.dispatch(Object(_.k)([])),localStorage.setItem("data_barang_pembelian_tmp",JSON.stringify([])),a.setState({isLoadingBatal:!1})},500)}},{key:"render",value:function(){var a=this;return d.a.createElement("div",null,d.a.createElement("ol",{className:"breadcrumb float-xl-right"},d.a.createElement("li",{className:"breadcrumb-item"},d.a.createElement(b.b,{to:"#"},"Pembelian")),d.a.createElement("li",{className:"breadcrumb-item active"},"Transaksi Pembelian")),d.a.createElement("h1",{className:"page-header"},"Transaksi Pembelian "),d.a.createElement(f.a,null,d.a.createElement(f.c,null,"Transaksi Pembelian"),d.a.createElement("br",null),d.a.createElement(E.a,{steps:[{title:"Input Barang"},{title:"Lihat Data Barang"},{title:"Data Customer"}],activeStep:this.state.step}),d.a.createElement("br",null),d.a.createElement("div",{className:"row"},0===this.state.step?d.a.createElement("div",{className:"col-12"},d.a.createElement("div",{className:"container"},d.a.createElement(w,{isLoadingSimpanBarang:this.state.isLoadingSimpanBarang,columns:this.state.columns,onSubmit:function(e){return a.simpanBarang(e)}}),d.a.createElement("br",null),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-6 text-left"},d.a.createElement("button",{onClick:function(){return a.btlPembelian()},className:"btn btn-warning",disabled:this.state.isLoadingBatal,type:"button"},this.state.isLoadingBatal?d.a.createElement(d.a.Fragment,null,d.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Reset Data"):"Reset Data")),d.a.createElement("div",{className:"col-6 text-right"},d.a.createElement("button",{className:"btn btn-primary",onClick:function(){return a.nextLihatDataBarang()}}," ","Next"," "))))):1===this.state.step?d.a.createElement("div",{className:"col-12"},d.a.createElement("div",{className:"container"},d.a.createElement(Z,{isLoadingSimpanBarang:this.state.isLoadingSimpanBarang,columns:this.state.columns,onSubmit:function(e){return a.simpanBarang(e)}}),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-6 text-left"},d.a.createElement("button",{onClick:function(){return a.back(0)},className:"btn btn-secondary",type:"button"},"Kembali")),d.a.createElement("div",{className:"col-6 text-right"},d.a.createElement("button",{className:"btn btn-primary",onClick:function(){return a.setState({step:2})}}," ","Next"," "))))):2===this.state.step?d.a.createElement("div",{className:"col-12"},d.a.createElement("div",{className:"container"},d.a.createElement("br",null),d.a.createElement("br",null),d.a.createElement(A,{isLoading:this.state.isLoading,back:function(){return a.back(1)},isLoadingDataCustomer:this.state.isLoadingDataCustomer,onSubmit:function(e){return a.handleSubmit(e)}}))):d.a.createElement("div",{className:"col-12"},d.a.createElement("div",{className:"container"},d.a.createElement(Y,{isLoading:this.state.isLoading,onSubmit:function(e){return a.simpanPembayaran(e)},back:function(){return a.back(2)}})))),d.a.createElement("br",null)),d.a.createElement(aa.a,{title:"Otorisasi Pembelian",size:"P",content:d.a.createElement($.a,{keterangan:!0,onSubmit:function(e){return a.cekOtorisasi(e)}})}))}}]),t}(d.a.Component);e.default=Object(u.b)(function(a){return{setBarangPembelian:a.penjualan.setBarangPembelian}},null)(ea)},686:function(a,e,t){"use strict";e.a=function(a){var e={};return a.jenis||(e.jenis="Jenis Tidak Boleh Kosong"),e}},711:function(a,e,t){"use strict";e.a=function(a){var e={};return a.kode_sales||(e.kode_sales="Kode Sales Harus Dipilih"),a.nama_customer||(e.nama_customer="Nama Customer Harus Diisi"),a.no_hp||(e.no_hp="No Hp Harus Diisi"),a.alamat||(e.alamat="Alamat Harus Diisi"),e}},733:function(a,e,t){"use strict";var n=t(19),r=t(20),o=t(22),s=t(21),i=t(0),l=t.n(i),c=t(58),m=t(311),p=t(312),d=t(78),u=function(a){Object(o.a)(t,a);var e=Object(s.a)(t);function t(a){var r;return Object(n.a)(this,t),(r=e.call(this,a)).state={},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){setTimeout(function(){document.getElementById("username").focus()},100)}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:function(a){"Enter"===a.key&&a.preventDefault()},autoComplete:"off"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement(m.a,{name:"no_faktur_group",component:d.b,type:"hidden"}),l.a.createElement(m.a,{name:"alasan",component:d.b,type:"hidden"}),l.a.createElement(m.a,{id:"username",name:"username",component:d.e,type:"text",nouperCase:!0,label:"Username",placeholder:"Masukan Username"})),l.a.createElement("div",{className:"col-lg-6"},l.a.createElement(m.a,{name:"password",component:d.e,type:"password",nouperCase:!0,label:"Password",placeholder:"Masukan Password"})),l.a.createElement("div",{className:this.props.keterangan?"col-lg-12":"col-lg-12 d-none"},l.a.createElement(m.a,{name:"keterangan",component:d.e,label:"Keterangan",placeholder:"Masukan Keterangan"})),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("label",null," \xa0 "),l.a.createElement("button",{type:"submit",name:"type_btn",className:"btn btn-primary btn-block",disabled:this.props.isLoadingOtorisasi},this.props.isLoadingOtorisasi?l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Otorisasi"):"Otorisasi"))))}}]),t}(i.Component);u=Object(p.a)({form:"OtorisasiHancur",enableReinitialize:!0})(u),e.a=Object(c.b)(null)(u)}}]);
//# sourceMappingURL=14.9a18916b.chunk.js.map