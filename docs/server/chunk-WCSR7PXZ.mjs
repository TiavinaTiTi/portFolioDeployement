import './polyfills.server.mjs';
import{Ca as m,Da as we,Ea as Ae,Ia as X,J as De,K as ge,M as b,N as pe,Q as L,R as B,S as I,U as me,W as Fe,X as P,Xa as F,Y,Ya as h,Za as ye,_a as Se,cb as q,la as Ce,ua as Z,wa as W,xa as K,ya as Ee,yb as ve}from"./chunk-OTUGFJMP.mjs";var ie=null;function J(){return ie}function rn(e){ie||(ie=e)}var be=class{},de=new L("DocumentToken"),Te=(()=>{let t=class t{historyGo(n){throw new Error("Not implemented")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=b({token:t,factory:()=>I(Ue),providedIn:"platform"});let e=t;return e})();var Ue=(()=>{let t=class t extends Te{constructor(){super(),this._doc=I(de),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return J().getBaseHref(this._doc)}onPopState(n){let i=J().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",n,!1),()=>i.removeEventListener("popstate",n)}onHashChange(n){let i=J().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",n,!1),()=>i.removeEventListener("hashchange",n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,i,s){this._history.pushState(n,i,s)}replaceState(n,i,s){this._history.replaceState(n,i,s)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=b({token:t,factory:()=>new t,providedIn:"platform"});let e=t;return e})();function Pe(e,t){if(e.length==0)return t;if(t.length==0)return e;let r=0;return e.endsWith("/")&&r++,t.startsWith("/")&&r++,r==2?e+t.substring(1):r==1?e+t:e+"/"+t}function _e(e){let t=e.match(/#|\?|$/),r=t&&t.index||e.length,n=r-(e[r-1]==="/"?1:0);return e.slice(0,n)+e.slice(r)}function M(e){return e&&e[0]!=="?"?"?"+e:e}var le=(()=>{let t=class t{historyGo(n){throw new Error("Not implemented")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=b({token:t,factory:()=>I(je),providedIn:"root"});let e=t;return e})(),ze=new L("appBaseHref"),je=(()=>{let t=class t extends le{constructor(n,i){super(),this._platformLocation=n,this._removeListenerFns=[],this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??I(de).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return Pe(this._baseHref,n)}path(n=!1){let i=this._platformLocation.pathname+M(this._platformLocation.search),s=this._platformLocation.hash;return s&&n?`${i}${s}`:i}pushState(n,i,s,u){let o=this.prepareExternalUrl(s+M(u));this._platformLocation.pushState(n,i,o)}replaceState(n,i,s,u){let o=this.prepareExternalUrl(s+M(u));this._platformLocation.replaceState(n,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}};t.\u0275fac=function(i){return new(i||t)(B(Te),B(ze,8))},t.\u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var Ge=(()=>{let t=class t{constructor(n){this._subject=new Ae,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=n;let i=this._locationStrategy.getBaseHref();this._basePath=Ye(_e(Ie(i))),this._locationStrategy.onPopState(s=>{this._subject.emit({url:this.path(!0),pop:!0,state:s.state,type:s.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,i=""){return this.path()==this.normalize(n+M(i))}normalize(n){return t.stripTrailingSlash(He(this._basePath,Ie(n)))}prepareExternalUrl(n){return n&&n[0]!=="/"&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,i="",s=null){this._locationStrategy.pushState(s,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+M(i)),s)}replaceState(n,i="",s=null){this._locationStrategy.replaceState(s,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+M(i)),s)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){this._locationStrategy.historyGo?.(n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)})),()=>{let i=this._urlChangeListeners.indexOf(n);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",i){this._urlChangeListeners.forEach(s=>s(n,i))}subscribe(n,i,s){return this._subject.subscribe({next:n,error:i,complete:s})}};t.normalizeQueryParams=M,t.joinWithSlash=Pe,t.stripTrailingSlash=_e,t.\u0275fac=function(i){return new(i||t)(B(le))},t.\u0275prov=b({token:t,factory:()=>Ve(),providedIn:"root"});let e=t;return e})();function Ve(){return new Ge(B(le))}function He(e,t){if(!e||!t.startsWith(e))return t;let r=t.substring(e.length);return r===""||["/",";","?","#"].includes(r[0])?r:t}function Ie(e){return e.replace(/\/index.html$/,"")}function Ye(e){if(new RegExp("^(https?:)?//").test(e)){let[,r]=e.split(/\/\/[^\/]+/);return r}return e}var g=function(e){return e[e.Format=0]="Format",e[e.Standalone=1]="Standalone",e}(g||{}),d=function(e){return e[e.Narrow=0]="Narrow",e[e.Abbreviated=1]="Abbreviated",e[e.Wide=2]="Wide",e[e.Short=3]="Short",e}(d||{}),p=function(e){return e[e.Short=0]="Short",e[e.Medium=1]="Medium",e[e.Long=2]="Long",e[e.Full=3]="Full",e}(p||{}),y=function(e){return e[e.Decimal=0]="Decimal",e[e.Group=1]="Group",e[e.List=2]="List",e[e.PercentSign=3]="PercentSign",e[e.PlusSign=4]="PlusSign",e[e.MinusSign=5]="MinusSign",e[e.Exponential=6]="Exponential",e[e.SuperscriptingExponent=7]="SuperscriptingExponent",e[e.PerMille=8]="PerMille",e[e.Infinity=9]="Infinity",e[e.NaN=10]="NaN",e[e.TimeSeparator=11]="TimeSeparator",e[e.CurrencyDecimal=12]="CurrencyDecimal",e[e.CurrencyGroup=13]="CurrencyGroup",e}(y||{});function Ze(e){return F(e)[h.LocaleId]}function We(e,t,r){let n=F(e),i=[n[h.DayPeriodsFormat],n[h.DayPeriodsStandalone]],s=C(i,t);return C(s,r)}function Ke(e,t,r){let n=F(e),i=[n[h.DaysFormat],n[h.DaysStandalone]],s=C(i,t);return C(s,r)}function Xe(e,t,r){let n=F(e),i=[n[h.MonthsFormat],n[h.MonthsStandalone]],s=C(i,t);return C(s,r)}function qe(e,t){let n=F(e)[h.Eras];return C(n,t)}function k(e,t){let r=F(e);return C(r[h.DateFormat],t)}function x(e,t){let r=F(e);return C(r[h.TimeFormat],t)}function N(e,t){let n=F(e)[h.DateTimeFormat];return C(n,t)}function V(e,t){let r=F(e),n=r[h.NumberSymbols][t];if(typeof n>"u"){if(t===y.CurrencyDecimal)return r[h.NumberSymbols][y.Decimal];if(t===y.CurrencyGroup)return r[h.NumberSymbols][y.Group]}return n}function ke(e){if(!e[h.ExtraData])throw new Error(`Missing extra locale data for the locale "${e[h.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function Je(e){let t=F(e);return ke(t),(t[h.ExtraData][2]||[]).map(n=>typeof n=="string"?Q(n):[Q(n[0]),Q(n[1])])}function Qe(e,t,r){let n=F(e);ke(n);let i=[n[h.ExtraData][0],n[h.ExtraData][1]],s=C(i,t)||[];return C(s,r)||[]}function C(e,t){for(let r=t;r>-1;r--)if(typeof e[r]<"u")return e[r];throw new Error("Locale data API: locale data undefined")}function Q(e){let[t,r]=e.split(":");return{hours:+t,minutes:+r}}var et=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,O={},tt=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,S=function(e){return e[e.Short=0]="Short",e[e.ShortGMT=1]="ShortGMT",e[e.Long=2]="Long",e[e.Extended=3]="Extended",e}(S||{}),c=function(e){return e[e.FullYear=0]="FullYear",e[e.Month=1]="Month",e[e.Date=2]="Date",e[e.Hours=3]="Hours",e[e.Minutes=4]="Minutes",e[e.Seconds=5]="Seconds",e[e.FractionalSeconds=6]="FractionalSeconds",e[e.Day=7]="Day",e}(c||{}),a=function(e){return e[e.DayPeriods=0]="DayPeriods",e[e.Days=1]="Days",e[e.Months=2]="Months",e[e.Eras=3]="Eras",e}(a||{});function nt(e,t,r,n){let i=lt(e);t=A(r,t)||t;let u=[],o;for(;t;)if(o=tt.exec(t),o){u=u.concat(o.slice(1));let w=u.pop();if(!w)break;t=w}else{u.push(t);break}let f=i.getTimezoneOffset();n&&(f=Ne(n,f),i=dt(i,n,!0));let v="";return u.forEach(w=>{let _=at(w);v+=_?_(i,r,f):w==="''"?"'":w.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),v}function G(e,t,r){let n=new Date(0);return n.setFullYear(e,t,r),n.setHours(0,0,0),n}function A(e,t){let r=Ze(e);if(O[r]=O[r]||{},O[r][t])return O[r][t];let n="";switch(t){case"shortDate":n=k(e,p.Short);break;case"mediumDate":n=k(e,p.Medium);break;case"longDate":n=k(e,p.Long);break;case"fullDate":n=k(e,p.Full);break;case"shortTime":n=x(e,p.Short);break;case"mediumTime":n=x(e,p.Medium);break;case"longTime":n=x(e,p.Long);break;case"fullTime":n=x(e,p.Full);break;case"short":let i=A(e,"shortTime"),s=A(e,"shortDate");n=$(N(e,p.Short),[i,s]);break;case"medium":let u=A(e,"mediumTime"),o=A(e,"mediumDate");n=$(N(e,p.Medium),[u,o]);break;case"long":let f=A(e,"longTime"),v=A(e,"longDate");n=$(N(e,p.Long),[f,v]);break;case"full":let w=A(e,"fullTime"),_=A(e,"fullDate");n=$(N(e,p.Full),[w,_]);break}return n&&(O[r][t]=n),n}function $(e,t){return t&&(e=e.replace(/\{([^}]+)}/g,function(r,n){return t!=null&&n in t?t[n]:r})),e}function E(e,t,r="-",n,i){let s="";(e<0||i&&e<=0)&&(i?e=-e+1:(e=-e,s=r));let u=String(e);for(;u.length<t;)u="0"+u;return n&&(u=u.slice(u.length-t)),s+u}function it(e,t){return E(e,3).substring(0,t)}function D(e,t,r=0,n=!1,i=!1){return function(s,u){let o=rt(e,s);if((r>0||o>-r)&&(o+=r),e===c.Hours)o===0&&r===-12&&(o=12);else if(e===c.FractionalSeconds)return it(o,t);let f=V(u,y.MinusSign);return E(o,t,f,n,i)}}function rt(e,t){switch(e){case c.FullYear:return t.getFullYear();case c.Month:return t.getMonth();case c.Date:return t.getDate();case c.Hours:return t.getHours();case c.Minutes:return t.getMinutes();case c.Seconds:return t.getSeconds();case c.FractionalSeconds:return t.getMilliseconds();case c.Day:return t.getDay();default:throw new Error(`Unknown DateType value "${e}".`)}}function l(e,t,r=g.Format,n=!1){return function(i,s){return st(i,s,e,t,r,n)}}function st(e,t,r,n,i,s){switch(r){case a.Months:return Xe(t,i,n)[e.getMonth()];case a.Days:return Ke(t,i,n)[e.getDay()];case a.DayPeriods:let u=e.getHours(),o=e.getMinutes();if(s){let v=Je(t),w=Qe(t,i,n),_=v.findIndex(R=>{if(Array.isArray(R)){let[H,T]=R,fe=u>=H.hours&&o>=H.minutes,he=u<T.hours||u===T.hours&&o<T.minutes;if(H.hours<T.hours){if(fe&&he)return!0}else if(fe||he)return!0}else if(R.hours===u&&R.minutes===o)return!0;return!1});if(_!==-1)return w[_]}return We(t,i,n)[u<12?0:1];case a.Eras:return qe(t,n)[e.getFullYear()<=0?0:1];default:let f=r;throw new Error(`unexpected translation type ${f}`)}}function U(e){return function(t,r,n){let i=-1*n,s=V(r,y.MinusSign),u=i>0?Math.floor(i/60):Math.ceil(i/60);switch(e){case S.Short:return(i>=0?"+":"")+E(u,2,s)+E(Math.abs(i%60),2,s);case S.ShortGMT:return"GMT"+(i>=0?"+":"")+E(u,1,s);case S.Long:return"GMT"+(i>=0?"+":"")+E(u,2,s)+":"+E(Math.abs(i%60),2,s);case S.Extended:return n===0?"Z":(i>=0?"+":"")+E(u,2,s)+":"+E(Math.abs(i%60),2,s);default:throw new Error(`Unknown zone width "${e}"`)}}}var ut=0,j=4;function ot(e){let t=G(e,ut,1).getDay();return G(e,0,1+(t<=j?j:j+7)-t)}function xe(e){return G(e.getFullYear(),e.getMonth(),e.getDate()+(j-e.getDay()))}function ee(e,t=!1){return function(r,n){let i;if(t){let s=new Date(r.getFullYear(),r.getMonth(),1).getDay()-1,u=r.getDate();i=1+Math.floor((u+s)/7)}else{let s=xe(r),u=ot(s.getFullYear()),o=s.getTime()-u.getTime();i=1+Math.round(o/6048e5)}return E(i,e,V(n,y.MinusSign))}}function z(e,t=!1){return function(r,n){let s=xe(r).getFullYear();return E(s,e,V(n,y.MinusSign),t)}}var te={};function at(e){if(te[e])return te[e];let t;switch(e){case"G":case"GG":case"GGG":t=l(a.Eras,d.Abbreviated);break;case"GGGG":t=l(a.Eras,d.Wide);break;case"GGGGG":t=l(a.Eras,d.Narrow);break;case"y":t=D(c.FullYear,1,0,!1,!0);break;case"yy":t=D(c.FullYear,2,0,!0,!0);break;case"yyy":t=D(c.FullYear,3,0,!1,!0);break;case"yyyy":t=D(c.FullYear,4,0,!1,!0);break;case"Y":t=z(1);break;case"YY":t=z(2,!0);break;case"YYY":t=z(3);break;case"YYYY":t=z(4);break;case"M":case"L":t=D(c.Month,1,1);break;case"MM":case"LL":t=D(c.Month,2,1);break;case"MMM":t=l(a.Months,d.Abbreviated);break;case"MMMM":t=l(a.Months,d.Wide);break;case"MMMMM":t=l(a.Months,d.Narrow);break;case"LLL":t=l(a.Months,d.Abbreviated,g.Standalone);break;case"LLLL":t=l(a.Months,d.Wide,g.Standalone);break;case"LLLLL":t=l(a.Months,d.Narrow,g.Standalone);break;case"w":t=ee(1);break;case"ww":t=ee(2);break;case"W":t=ee(1,!0);break;case"d":t=D(c.Date,1);break;case"dd":t=D(c.Date,2);break;case"c":case"cc":t=D(c.Day,1);break;case"ccc":t=l(a.Days,d.Abbreviated,g.Standalone);break;case"cccc":t=l(a.Days,d.Wide,g.Standalone);break;case"ccccc":t=l(a.Days,d.Narrow,g.Standalone);break;case"cccccc":t=l(a.Days,d.Short,g.Standalone);break;case"E":case"EE":case"EEE":t=l(a.Days,d.Abbreviated);break;case"EEEE":t=l(a.Days,d.Wide);break;case"EEEEE":t=l(a.Days,d.Narrow);break;case"EEEEEE":t=l(a.Days,d.Short);break;case"a":case"aa":case"aaa":t=l(a.DayPeriods,d.Abbreviated);break;case"aaaa":t=l(a.DayPeriods,d.Wide);break;case"aaaaa":t=l(a.DayPeriods,d.Narrow);break;case"b":case"bb":case"bbb":t=l(a.DayPeriods,d.Abbreviated,g.Standalone,!0);break;case"bbbb":t=l(a.DayPeriods,d.Wide,g.Standalone,!0);break;case"bbbbb":t=l(a.DayPeriods,d.Narrow,g.Standalone,!0);break;case"B":case"BB":case"BBB":t=l(a.DayPeriods,d.Abbreviated,g.Format,!0);break;case"BBBB":t=l(a.DayPeriods,d.Wide,g.Format,!0);break;case"BBBBB":t=l(a.DayPeriods,d.Narrow,g.Format,!0);break;case"h":t=D(c.Hours,1,-12);break;case"hh":t=D(c.Hours,2,-12);break;case"H":t=D(c.Hours,1);break;case"HH":t=D(c.Hours,2);break;case"m":t=D(c.Minutes,1);break;case"mm":t=D(c.Minutes,2);break;case"s":t=D(c.Seconds,1);break;case"ss":t=D(c.Seconds,2);break;case"S":t=D(c.FractionalSeconds,1);break;case"SS":t=D(c.FractionalSeconds,2);break;case"SSS":t=D(c.FractionalSeconds,3);break;case"Z":case"ZZ":case"ZZZ":t=U(S.Short);break;case"ZZZZZ":t=U(S.Extended);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":t=U(S.ShortGMT);break;case"OOOO":case"ZZZZ":case"zzzz":t=U(S.Long);break;default:return null}return te[e]=t,t}function Ne(e,t){e=e.replace(/:/g,"");let r=Date.parse("Jan 01, 1970 00:00:00 "+e)/6e4;return isNaN(r)?t:r}function ct(e,t){return e=new Date(e.getTime()),e.setMinutes(e.getMinutes()+t),e}function dt(e,t,r){let n=r?-1:1,i=e.getTimezoneOffset(),s=Ne(t,i);return ct(e,n*(s-i))}function lt(e){if(Me(e))return e;if(typeof e=="number"&&!isNaN(e))return new Date(e);if(typeof e=="string"){if(e=e.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(e)){let[i,s=1,u=1]=e.split("-").map(o=>+o);return G(i,s-1,u)}let r=parseFloat(e);if(!isNaN(e-r))return new Date(r);let n;if(n=e.match(et))return ft(n)}let t=new Date(e);if(!Me(t))throw new Error(`Unable to convert "${e}" into a date`);return t}function ft(e){let t=new Date(0),r=0,n=0,i=e[8]?t.setUTCFullYear:t.setFullYear,s=e[8]?t.setUTCHours:t.setHours;e[9]&&(r=Number(e[9]+e[10]),n=Number(e[9]+e[11])),i.call(t,Number(e[1]),Number(e[2])-1,Number(e[3]));let u=Number(e[4]||0)-r,o=Number(e[5]||0)-n,f=Number(e[6]||0),v=Math.floor(parseFloat("0."+(e[7]||0))*1e3);return s.call(t,u,o,f,v),t}function Me(e){return e instanceof Date&&!isNaN(e.valueOf())}function sn(e,t){t=encodeURIComponent(t);for(let r of e.split(";")){let n=r.indexOf("="),[i,s]=n==-1?[r,""]:[r.slice(0,n),r.slice(n+1)];if(i.trim()===t)return decodeURIComponent(s)}return null}var ne=/\s+/,Be=[],un=(()=>{let t=class t{constructor(n,i){this._ngEl=n,this._renderer=i,this.initialClasses=Be,this.stateMap=new Map}set klass(n){this.initialClasses=n!=null?n.trim().split(ne):Be}set ngClass(n){this.rawClass=typeof n=="string"?n.trim().split(ne):n}ngDoCheck(){for(let i of this.initialClasses)this._updateState(i,!0);let n=this.rawClass;if(Array.isArray(n)||n instanceof Set)for(let i of n)this._updateState(i,!0);else if(n!=null)for(let i of Object.keys(n))this._updateState(i,!!n[i]);this._applyStateDiff()}_updateState(n,i){let s=this.stateMap.get(n);s!==void 0?(s.enabled!==i&&(s.changed=!0,s.enabled=i),s.touched=!0):this.stateMap.set(n,{enabled:i,changed:!0,touched:!0})}_applyStateDiff(){for(let n of this.stateMap){let i=n[0],s=n[1];s.changed?(this._toggleClass(i,s.enabled),s.changed=!1):s.touched||(s.enabled&&this._toggleClass(i,!1),this.stateMap.delete(i)),s.touched=!1}}_toggleClass(n,i){n=n.trim(),n.length>0&&n.split(ne).forEach(s=>{i?this._renderer.addClass(this._ngEl.nativeElement,s):this._renderer.removeClass(this._ngEl.nativeElement,s)})}};t.\u0275fac=function(i){return new(i||t)(m(Z),m(W))},t.\u0275dir=P({type:t,selectors:[["","ngClass",""]],inputs:{klass:[me.None,"class","klass"],ngClass:"ngClass"},standalone:!0});let e=t;return e})();var re=class{constructor(t,r,n,i){this.$implicit=t,this.ngForOf=r,this.index=n,this.count=i}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},on=(()=>{let t=class t{set ngForOf(n){this._ngForOf=n,this._ngForOfDirty=!0}set ngForTrackBy(n){this._trackByFn=n}get ngForTrackBy(){return this._trackByFn}constructor(n,i,s){this._viewContainer=n,this._template=i,this._differs=s,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(n){n&&(this._template=n)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let n=this._ngForOf;if(!this._differ&&n)if(0)try{}catch{}else this._differ=this._differs.find(n).create(this.ngForTrackBy)}if(this._differ){let n=this._differ.diff(this._ngForOf);n&&this._applyChanges(n)}}_applyChanges(n){let i=this._viewContainer;n.forEachOperation((s,u,o)=>{if(s.previousIndex==null)i.createEmbeddedView(this._template,new re(s.item,this._ngForOf,-1,-1),o===null?void 0:o);else if(o==null)i.remove(u===null?void 0:u);else if(u!==null){let f=i.get(u);i.move(f,o),Le(f,s)}});for(let s=0,u=i.length;s<u;s++){let f=i.get(s).context;f.index=s,f.count=u,f.ngForOf=this._ngForOf}n.forEachIdentityChange(s=>{let u=i.get(s.currentIndex);Le(u,s)})}static ngTemplateContextGuard(n,i){return!0}};t.\u0275fac=function(i){return new(i||t)(m(X),m(q),m(Ee))},t.\u0275dir=P({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0});let e=t;return e})();function Le(e,t){e.context.$implicit=t.item}var an=(()=>{let t=class t{constructor(n,i){this._viewContainer=n,this._context=new se,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=i}set ngIf(n){this._context.$implicit=this._context.ngIf=n,this._updateView()}set ngIfThen(n){Oe("ngIfThen",n),this._thenTemplateRef=n,this._thenViewRef=null,this._updateView()}set ngIfElse(n){Oe("ngIfElse",n),this._elseTemplateRef=n,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(n,i){return!0}};t.\u0275fac=function(i){return new(i||t)(m(X),m(q))},t.\u0275dir=P({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0});let e=t;return e})(),se=class{constructor(){this.$implicit=null,this.ngIf=null}};function Oe(e,t){if(!!!(!t||t.createEmbeddedView))throw new Error(`${e} must be a TemplateRef, but received '${ge(t)}'.`)}function $e(e,t){return new De(2100,!1)}var ue=class{createSubscription(t,r){return K(()=>t.subscribe({next:r,error:n=>{throw n}}))}dispose(t){K(()=>t.unsubscribe())}},oe=class{createSubscription(t,r){return t.then(r,n=>{throw n})}dispose(t){}},ht=new oe,Dt=new ue,cn=(()=>{let t=class t{constructor(n){this._latestValue=null,this._subscription=null,this._obj=null,this._strategy=null,this._ref=n}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(n){return this._obj?n!==this._obj?(this._dispose(),this.transform(n)):this._latestValue:(n&&this._subscribe(n),this._latestValue)}_subscribe(n){this._obj=n,this._strategy=this._selectStrategy(n),this._subscription=this._strategy.createSubscription(n,i=>this._updateLatestValue(n,i))}_selectStrategy(n){if(ye(n))return ht;if(Se(n))return Dt;throw $e(t,n)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(n,i){n===this._obj&&(this._latestValue=i,this._ref.markForCheck())}};t.\u0275fac=function(i){return new(i||t)(m(we,16))},t.\u0275pipe=Y({name:"async",type:t,pure:!1,standalone:!0});let e=t;return e})();var gt="mediumDate",pt=new L("DATE_PIPE_DEFAULT_TIMEZONE"),mt=new L("DATE_PIPE_DEFAULT_OPTIONS"),dn=(()=>{let t=class t{constructor(n,i,s){this.locale=n,this.defaultTimezone=i,this.defaultOptions=s}transform(n,i,s,u){if(n==null||n===""||n!==n)return null;try{let o=i??this.defaultOptions?.dateFormat??gt,f=s??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return nt(n,o,u||this.locale,f)}catch(o){throw $e(t,o.message)}}};t.\u0275fac=function(i){return new(i||t)(m(ve,16),m(pt,24),m(mt,24))},t.\u0275pipe=Y({name:"date",type:t,pure:!0,standalone:!0});let e=t;return e})();var ln=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=Fe({type:t}),t.\u0275inj=pe({});let e=t;return e})(),Ft="browser",Ct="server";function Et(e){return e===Ft}function fn(e){return e===Ct}var hn=(()=>{let t=class t{};t.\u0275prov=b({token:t,providedIn:"root",factory:()=>Et(I(Ce))?new ae(I(de),window):new ce});let e=t;return e})(),ae=class{constructor(t,r){this.document=t,this.window=r,this.offset=()=>[0,0]}setOffset(t){Array.isArray(t)?this.offset=()=>t:this.offset=t}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(t){this.window.scrollTo(t[0],t[1])}scrollToAnchor(t){let r=wt(this.document,t);r&&(this.scrollToElement(r),r.focus())}setHistoryScrollRestoration(t){this.window.history.scrollRestoration=t}scrollToElement(t){let r=t.getBoundingClientRect(),n=r.left+this.window.pageXOffset,i=r.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(n-s[0],i-s[1])}};function wt(e,t){let r=e.getElementById(t)||e.getElementsByName(t)[0];if(r)return r;if(typeof e.createTreeWalker=="function"&&e.body&&typeof e.body.attachShadow=="function"){let n=e.createTreeWalker(e.body,NodeFilter.SHOW_ELEMENT),i=n.currentNode;for(;i;){let s=i.shadowRoot;if(s){let u=s.getElementById(t)||s.querySelector(`[name="${t}"]`);if(u)return u}i=n.nextNode()}}return null}var ce=class{setOffset(t){}getScrollPosition(){return[0,0]}scrollToPosition(t){}scrollToAnchor(t){}setHistoryScrollRestoration(t){}},Re=class{};export{J as a,rn as b,be as c,de as d,Te as e,le as f,ze as g,Ge as h,sn as i,un as j,on as k,an as l,cn as m,dn as n,ln as o,Ft as p,Ct as q,fn as r,hn as s,ce as t,Re as u};