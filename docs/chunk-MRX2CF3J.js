import{a as S,b as x,c as f,d as E,e as y,f as q,g as _,h as C,i as A}from"./chunk-6RENTGQF.js";import{a as g,c as b,e as h}from"./chunk-BJSVZRFN.js";import{Ga as p,Oa as e,Pa as t,Qa as n,Ta as c,X as l,Za as i,db as v,wa as u,xa as m}from"./chunk-XJY5DNQ3.js";var P=(()=>{let s=class s{onSubmit(){this.m.parts[0].text=this.msgForm.value.msg,this._str_contents.contents.length>1?this._str_contents.contents.push(this.m):this._str_contents.contents=[this.m],this.postMsg(this._str_contents).subscribe(r=>{console.log("Response: ",r);let o={role:"model",parts:[{text:r.candidates[0].content.parts[0].text}]};this._str_contents.contents.push(o),console.log("STRUC:",this._str_contents)},r=>{console.error("Error: ",r)})}constructor(r,o){this.fb=r,this.http=o,this.MAPPING_URL="https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=",this._str_contents={contents:[{role:"",parts:[{text:""}]}]},this.m={role:"user",parts:[{text:""}]},this.keyApi="AIzaSyBkupIhOuNFYbJJMh1mzDPO95ewDi5r7Qw"}ngOnInit(){this.msgForm=this.fb.group({msg:[null,x.required]})}structs(r,o){return{role:r,parts:[{text:o}]}}postMsg(r){let o={headers:new g().set("Content-Type","application/json")};return console.log(JSON.stringify(r)),this.http.post(this.MAPPING_URL+this.keyApi,r,o).pipe()}};s.\u0275fac=function(o){return new(o||s)(m(C),m(b))},s.\u0275cmp=l({type:s,selectors:[["app-bard-page"]],standalone:!0,features:[v],decls:127,vars:1,consts:[[1,""],[1,"d-grid","gap-2","h-content-msg","overflow-y-scroll"],[1,"d-flex","justify-content-center"],["href","",1,"btn","rounded-pill","border","text-muted"],[1,"col"],[1,"d-flex"],["src","assets/images/avatar.png","alt","avatar","width","25px","height","25px",1,"rounded-circle","bg-white","bg-opacity-50","border","border-2","border-white","p-1"],[1,"py-2","px-3","bg-white","rounded","ms-2"],[1,"fw-semibold"],[1,"fs-7"],["src","assets/images/avatar.png","alt","avatar","width","25px","height","25px",1,"rounded-circle","bg-white","bg-opacity-50","border","border-2","border-primary","p-1"],[1,"py-2","px-3","bg-primary","text-white","rounded","ms-2"],[1,"card-body"],["href","",1,"btn","rounded-pill","border","fs-7"],[1,"mt-4","card","rounded-0","position-fixed","bottom-0","mb-2","container","border-0",3,"formGroup","ngSubmit"],[1,"card-body","d-flex","gap-2"],[1,"btn","text-primary"],[1,"bi","bi-camera-fill"],[1,"btn","text-secondary"],[1,"bi","bi-mic"],[1,"position-relative","d-flex","w-100"],[1,"bi","bi-emoji-smile-fill","cursor-pointer","text-primary","position-absolute","end-0","me-2","fs-4"],["type","text","formControlName","msg","placeholder","Votre message...",1,"form-control","rounded-pill","pe-5"],[1,"btn","btn-light","text-primary"],[1,"bi","bi-send-fill"]],template:function(o,d){o&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"a",3),i(4,"Message precedent"),t()(),e(5,"div",4)(6,"div",5),n(7,"img",6),e(8,"div",7)(9,"div",0)(10,"div",8),i(11,"You"),t(),e(12,"p",9),i(13," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, itaque. "),t()()()()(),e(14,"div",4)(15,"div",5),n(16,"img",10),e(17,"div",11)(18,"div",12)(19,"div",8),i(20,"Gemini"),t(),e(21,"p",9),i(22," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cupiditate, libero natus perferendis placeat voluptatibus! Alias amet assumenda at doloribus eligendi error quasi quod ratione sed, sequi tempore ut veritatis. "),t()()()()(),e(23,"div",4)(24,"div",5),n(25,"img",6),e(26,"div",7)(27,"div",0)(28,"div",8),i(29,"You"),t(),e(30,"p",9),i(31," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, itaque. "),t()()()()(),e(32,"div",4)(33,"div",5),n(34,"img",10),e(35,"div",11)(36,"div",12)(37,"div",8),i(38,"Gemini"),t(),e(39,"p",9),i(40," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cupiditate, libero natus perferendis placeat voluptatibus! Alias amet assumenda at doloribus eligendi error quasi quod ratione sed, sequi tempore ut veritatis. "),t()()()()(),e(41,"div",4)(42,"div",5),n(43,"img",6),e(44,"div",7)(45,"div",0)(46,"div",8),i(47,"You"),t(),e(48,"p",9),i(49," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, itaque. "),t()()()()(),e(50,"div",4)(51,"div",5),n(52,"img",10),e(53,"div",11)(54,"div",12)(55,"div",8),i(56,"Gemini"),t(),e(57,"p",9),i(58," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cupiditate, libero natus perferendis placeat voluptatibus! Alias amet assumenda at doloribus eligendi error quasi quod ratione sed, sequi tempore ut veritatis. "),t()()()()(),e(59,"div",4)(60,"div",5),n(61,"img",6),e(62,"div",7)(63,"div",0)(64,"div",8),i(65,"You"),t(),e(66,"p",9),i(67," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, itaque. "),t()()()()(),e(68,"div",4)(69,"div",5),n(70,"img",10),e(71,"div",11)(72,"div",12)(73,"div",8),i(74,"Gemini"),t(),e(75,"p",9),i(76," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cupiditate, libero natus perferendis placeat voluptatibus! Alias amet assumenda at doloribus eligendi error quasi quod ratione sed, sequi tempore ut veritatis. "),t()()()()(),e(77,"div",4)(78,"div",5),n(79,"img",6),e(80,"div",7)(81,"div",0)(82,"div",8),i(83,"You"),t(),e(84,"p",9),i(85," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, itaque. "),t()()()()(),e(86,"div",4)(87,"div",5),n(88,"img",10),e(89,"div",11)(90,"div",12)(91,"div",8),i(92,"Gemini"),t(),e(93,"p",9),i(94," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cupiditate, libero natus perferendis placeat voluptatibus! Alias amet assumenda at doloribus eligendi error quasi quod ratione sed, sequi tempore ut veritatis. "),t()()()()(),e(95,"div",4)(96,"div",5),n(97,"img",6),e(98,"div",7)(99,"div",0)(100,"div",8),i(101,"You"),t(),e(102,"p",9),i(103," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, itaque. "),t()()()()(),e(104,"div",4)(105,"div",5),n(106,"img",10),e(107,"div",11)(108,"div",12)(109,"div",8),i(110,"Gemini"),t(),e(111,"p",9),i(112," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cupiditate, libero natus perferendis placeat voluptatibus! Alias amet assumenda at doloribus eligendi error quasi quod ratione sed, sequi tempore ut veritatis. "),t()()()()(),e(113,"div",2)(114,"a",13),i(115,"Message suivante"),t()()(),e(116,"form",14),c("ngSubmit",function(){return d.onSubmit()}),e(117,"div",15)(118,"button",16),n(119,"i",17),t(),e(120,"button",18),n(121,"i",19),t(),e(122,"div",20),n(123,"i",21)(124,"input",22),t(),e(125,"button",23),n(126,"i",24),t()()()()),o&2&&(u(116),p("formGroup",d.msgForm))},dependencies:[A,y,S,f,E,q,_,h],styles:[".vh-content[_ngcontent-%COMP%]{height:calc(100vh - 68px)}.h-content-msg[_ngcontent-%COMP%]{height:calc(100vh - 148px)}"]});let a=s;return a})();export{P as BardPageComponent};
