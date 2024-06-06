(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[268],{1498:function(e,s,d){Promise.resolve().then(d.bind(d,9706))},9706:function(e,s,d){"use strict";d.r(s),d.d(s,{default:function(){return n}});var t=d(7437),a=d(8059),c=d.n(a),l=d(2265);function n(){let[e,s]=(0,l.useState)([]),[d,a]=(0,l.useState)(""),[n,i]=(0,l.useState)(""),[x,r]=(0,l.useState)({name:"",stock:""}),[o,b]=(0,l.useState)({id:"",name:"",stock:""}),[m,j]=(0,l.useState)(!1),[u,p]=(0,l.useState)(null),[h,f]=(0,l.useState)(1);(0,l.useEffect)(()=>{let e=localStorage.getItem("items");e?s(JSON.parse(e)):g()},[]);let g=async()=>{let e=await fetch("/data.json"),d=await e.json();s(d.items),localStorage.setItem("items",JSON.stringify(d.items))},N=()=>{let s=e;return"inStock"===d?s=s.filter(e=>Number(e.stock)>0):"outOfStock"===d&&(s=s.filter(e=>0===Number(e.stock))),n&&(s=s.filter(e=>e.name.toLowerCase().includes(n.toLowerCase()))),s},y=e=>{s(e),localStorage.setItem("items",JSON.stringify(e))},k=e=>{p(e),j(!0)},v=()=>{j(!1),p(null)},w=e=>{let{name:s,value:d}=e.target;r({...x,[s]:d})},S=e=>{let{name:s,value:d}=e.target;b({...o,[s]:d})},C=3*h,I=N().slice(C-3,C),O=Math.ceil(N().length/3),z=e=>f(e);return(0,t.jsxs)("div",{className:"jsx-2cd70232e0b7105d p-20 max-xl:p-5",children:[(0,t.jsx)("h1",{className:"jsx-2cd70232e0b7105d text-center text-5xl font-bold mb-10",children:(0,t.jsx)("u",{className:"jsx-2cd70232e0b7105d",children:"Items List"})}),(0,t.jsxs)("div",{className:"jsx-2cd70232e0b7105d filters mb-5 flex gap-4",children:[(0,t.jsxs)("label",{className:"jsx-2cd70232e0b7105d",children:[(0,t.jsx)("span",{className:"jsx-2cd70232e0b7105d text-xl font-bold",children:"Filter by stock availability:"}),(0,t.jsxs)("select",{onChange:e=>{a(e.target.value)},value:d,className:"jsx-2cd70232e0b7105d border border-gray-400 ml-3",children:[(0,t.jsx)("option",{value:"",className:"jsx-2cd70232e0b7105d text-center",children:"All"}),(0,t.jsx)("option",{value:"inStock",className:"jsx-2cd70232e0b7105d text-center",children:"In Stock"}),(0,t.jsx)("option",{value:"outOfStock",className:"jsx-2cd70232e0b7105d text-center",children:"Out of Stock"})]})]}),(0,t.jsxs)("label",{className:"jsx-2cd70232e0b7105d",children:[(0,t.jsx)("span",{className:"jsx-2cd70232e0b7105d text-xl font-bold",children:"Search by name:"}),(0,t.jsx)("input",{type:"text",value:n,onChange:e=>{i(e.target.value)},placeholder:"Search items",className:"jsx-2cd70232e0b7105d border border-gray-400 ml-3"})]})]}),(0,t.jsxs)("table",{className:"jsx-2cd70232e0b7105d inventory-table",children:[(0,t.jsx)("thead",{className:"jsx-2cd70232e0b7105d",children:(0,t.jsxs)("tr",{className:"jsx-2cd70232e0b7105d",children:[(0,t.jsx)("th",{className:"jsx-2cd70232e0b7105d",children:"Item ID"}),(0,t.jsx)("th",{className:"jsx-2cd70232e0b7105d",children:"Name"}),(0,t.jsx)("th",{className:"jsx-2cd70232e0b7105d",children:"Stock"}),(0,t.jsx)("th",{className:"jsx-2cd70232e0b7105d",children:"Actions"})]})}),(0,t.jsx)("tbody",{className:"jsx-2cd70232e0b7105d",children:I.map(e=>(0,t.jsxs)("tr",{className:"jsx-2cd70232e0b7105d",children:[(0,t.jsx)("td",{className:"jsx-2cd70232e0b7105d",children:e.id}),(0,t.jsx)("td",{className:"jsx-2cd70232e0b7105d",children:e.name}),(0,t.jsx)("td",{className:"jsx-2cd70232e0b7105d",children:e.stock}),(0,t.jsx)("td",{className:"jsx-2cd70232e0b7105d",children:(0,t.jsxs)("div",{className:"jsx-2cd70232e0b7105d flex gap-3 max-md:flex-col",children:[(0,t.jsx)("button",{onClick:()=>b(e),className:"jsx-2cd70232e0b7105d bg-green-400 py-1 px-3 rounded-full",children:"Edit"}),(0,t.jsx)("button",{onClick:()=>k(e.id),className:"jsx-2cd70232e0b7105d bg-red-500 text-white py-1 px-3 rounded-full",children:"Delete"})]})})]},e.id))})]}),(0,t.jsx)("div",{className:"jsx-2cd70232e0b7105d pagination",children:Array.from({length:O},(e,s)=>(0,t.jsx)("button",{onClick:()=>z(s+1),className:"jsx-2cd70232e0b7105d "+"py-2 px-4 ".concat(h===s+1?"bg-blue-500 text-white":"bg-gray-300"," rounded"),children:s+1},s+1))}),(0,t.jsxs)("div",{className:"jsx-2cd70232e0b7105d flex justify-between px-40 max-xl:px-0 max-md:flex-col",children:[(0,t.jsxs)("div",{className:"jsx-2cd70232e0b7105d add-form",children:[(0,t.jsx)("h2",{className:"jsx-2cd70232e0b7105d text-2xl text-center font-semibold",children:"Add New Item"}),(0,t.jsxs)("form",{onSubmit:s=>{s.preventDefault(),y([...e,{...x,id:e.length+1}]),r({name:"",stock:""})},className:"jsx-2cd70232e0b7105d flex flex-col gap-4 mt-3",children:[(0,t.jsxs)("label",{className:"jsx-2cd70232e0b7105d",children:["Name:",(0,t.jsx)("input",{type:"text",name:"name",value:x.name,onChange:w,required:!0,className:"jsx-2cd70232e0b7105d border border-gray-400 ml-3"})]}),(0,t.jsxs)("label",{className:"jsx-2cd70232e0b7105d",children:["Stock:",(0,t.jsx)("input",{type:"number",name:"stock",value:x.stock,onChange:w,required:!0,className:"jsx-2cd70232e0b7105d border border-gray-400 ml-3"})]}),(0,t.jsx)("button",{type:"submit",className:"jsx-2cd70232e0b7105d bg-blue-700 py-2 rounded-full text-white w-[50%] mx-auto hover:bg-black transition-all duration-500 ease-in-out",children:"Add Item"})]})]}),(0,t.jsxs)("div",{className:"jsx-2cd70232e0b7105d edit-form",children:[(0,t.jsx)("h2",{className:"jsx-2cd70232e0b7105d text-2xl text-center font-semibold",children:"Edit Item"}),(0,t.jsxs)("form",{onSubmit:s=>{s.preventDefault(),y(e.map(e=>e.id===o.id?o:e)),b({id:"",name:"",stock:""})},className:"jsx-2cd70232e0b7105d flex flex-col gap-4 mt-3",children:[(0,t.jsxs)("label",{className:"jsx-2cd70232e0b7105d",children:["Name:",(0,t.jsx)("input",{type:"text",name:"name",value:o.name,onChange:S,required:!0,className:"jsx-2cd70232e0b7105d border border-gray-400 ml-3"})]}),(0,t.jsxs)("label",{className:"jsx-2cd70232e0b7105d",children:["Stock:",(0,t.jsx)("input",{type:"number",name:"stock",value:o.stock,onChange:S,required:!0,className:"jsx-2cd70232e0b7105d border border-gray-400 ml-3"})]}),(0,t.jsx)("button",{type:"submit",className:"jsx-2cd70232e0b7105d bg-blue-700 py-2 rounded-full text-white w-[50%] mx-auto hover:bg-black transition-all duration-500 ease-in-out",children:"Update Item"})]})]})]}),m&&(0,t.jsx)("div",{className:"jsx-2cd70232e0b7105d modal-overlay",children:(0,t.jsxs)("div",{className:"jsx-2cd70232e0b7105d modal",children:[(0,t.jsx)("h2",{className:"jsx-2cd70232e0b7105d",children:"Confirm Deletion"}),(0,t.jsx)("p",{className:"jsx-2cd70232e0b7105d",children:"Are you sure you want to delete this item?"}),(0,t.jsxs)("div",{className:"jsx-2cd70232e0b7105d flex gap-3 justify-center",children:[(0,t.jsx)("button",{onClick:()=>{y(e.filter(e=>e.id!==u)),v()},className:"jsx-2cd70232e0b7105d bg-red-500 text-white py-2 px-4 rounded",children:"Yes"}),(0,t.jsx)("button",{onClick:v,className:"jsx-2cd70232e0b7105d bg-gray-300 py-2 px-4 rounded",children:"No"})]})]})}),(0,t.jsx)(c(),{id:"2cd70232e0b7105d",children:".filters.jsx-2cd70232e0b7105d{margin-bottom:20px}.filters.jsx-2cd70232e0b7105d label.jsx-2cd70232e0b7105d{margin-right:20px}.add-form.jsx-2cd70232e0b7105d,.edit-form.jsx-2cd70232e0b7105d{margin-top:20px}.add-form.jsx-2cd70232e0b7105d input.jsx-2cd70232e0b7105d,.edit-form.jsx-2cd70232e0b7105d input.jsx-2cd70232e0b7105d{margin-right:10px}.inventory-table.jsx-2cd70232e0b7105d{width:100%;border-collapse:collapse}.inventory-table.jsx-2cd70232e0b7105d th.jsx-2cd70232e0b7105d,.inventory-table.jsx-2cd70232e0b7105d td.jsx-2cd70232e0b7105d{border:1px solid#ddd;padding:8px}.inventory-table.jsx-2cd70232e0b7105d th.jsx-2cd70232e0b7105d{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#f2f2f2}.pagination.jsx-2cd70232e0b7105d{margin-top:20px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;gap:5px}.modal-overlay.jsx-2cd70232e0b7105d{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.5);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.modal.jsx-2cd70232e0b7105d{background:white;padding:20px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;text-align:center}.modal.jsx-2cd70232e0b7105d h2.jsx-2cd70232e0b7105d{margin-bottom:10px}.modal.jsx-2cd70232e0b7105d p.jsx-2cd70232e0b7105d{margin-bottom:20px}"})]})}}},function(e){e.O(0,[59,971,23,744],function(){return e(e.s=1498)}),_N_E=e.O()}]);