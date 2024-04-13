import{$ as Y,Ba as m,Ca as me,Da as Fe,Ha as X,M as le,N as fe,P as _,Q as he,T as B,U as M,V as L,Wa as F,X as De,Xa as h,Ya as Ce,Z as ge,Za as Ee,_ as P,bb as q,ua as Z,ub as we,wa as W,xa as K,ya as pe}from"./chunk-SZSGA2LC.js";var ie=null;function J(){return ie}function Jt(e){ie||(ie=e)}var Ae=class{},Be=new B("DocumentToken"),Le=(()=>{let t=class t{historyGo(n){throw new Error("Not implemented")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=_({token:t,factory:()=>L(xe),providedIn:"platform"});let e=t;return e})();var xe=(()=>{let t=class t extends Le{constructor(){super(),this._doc=L(Be),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return J().getBaseHref(this._doc)}onPopState(n){let i=J().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",n,!1),()=>i.removeEventListener("popstate",n)}onHashChange(n){let i=J().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",n,!1),()=>i.removeEventListener("hashchange",n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,i,r){this._history.pushState(n,i,r)}replaceState(n,i,r){this._history.replaceState(n,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=_({token:t,factory:()=>new t,providedIn:"platform"});let e=t;return e})();function Oe(e,t){if(e.length==0)return t;if(t.length==0)return e;let s=0;return e.endsWith("/")&&s++,t.startsWith("/")&&s++,s==2?e+t.substring(1):s==1?e+t:e+"/"+t}function ye(e){let t=e.match(/#|\?|$/),s=t&&t.index||e.length,n=s-(e[s-1]==="/"?1:0);return e.slice(0,n)+e.slice(s)}function I(e){return e&&e[0]!=="?"?"?"+e:e}var ae=(()=>{let t=class t{historyGo(n){throw new Error("Not implemented")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=_({token:t,factory:()=>L($e),providedIn:"root"});let e=t;return e})(),Ne=new B("appBaseHref"),$e=(()=>{let t=class t extends ae{constructor(n,i){super(),this._platformLocation=n,this._removeListenerFns=[],this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??L(Be).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return Oe(this._baseHref,n)}path(n=!1){let i=this._platformLocation.pathname+I(this._platformLocation.search),r=this._platformLocation.hash;return r&&n?`${i}${r}`:i}pushState(n,i,r,u){let o=this.prepareExternalUrl(r+I(u));this._platformLocation.pushState(n,i,o)}replaceState(n,i,r,u){let o=this.prepareExternalUrl(r+I(u));this._platformLocation.replaceState(n,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}};t.\u0275fac=function(i){return new(i||t)(M(Le),M(Ne,8))},t.\u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var Ue=(()=>{let t=class t{constructor(n){this._subject=new Fe,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=n;let i=this._locationStrategy.getBaseHref();this._basePath=Ge(ye(Se(i))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,i=""){return this.path()==this.normalize(n+I(i))}normalize(n){return t.stripTrailingSlash(je(this._basePath,Se(n)))}prepareExternalUrl(n){return n&&n[0]!=="/"&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,i="",r=null){this._locationStrategy.pushState(r,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+I(i)),r)}replaceState(n,i="",r=null){this._locationStrategy.replaceState(r,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+I(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){this._locationStrategy.historyGo?.(n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)})),()=>{let i=this._urlChangeListeners.indexOf(n);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",i){this._urlChangeListeners.forEach(r=>r(n,i))}subscribe(n,i,r){return this._subject.subscribe({next:n,error:i,complete:r})}};t.normalizeQueryParams=I,t.joinWithSlash=Oe,t.stripTrailingSlash=ye,t.\u0275fac=function(i){return new(i||t)(M(ae))},t.\u0275prov=_({token:t,factory:()=>ze(),providedIn:"root"});let e=t;return e})();function ze(){return new Ue(M(ae))}function je(e,t){if(!e||!t.startsWith(e))return t;let s=t.substring(e.length);return s===""||["/",";","?","#"].includes(s[0])?s:t}function Se(e){return e.replace(/\/index.html$/,"")}function Ge(e){if(new RegExp("^(https?:)?//").test(e)){let[,s]=e.split(/\/\/[^\/]+/);return s}return e}var g=function(e){return e[e.Format=0]="Format",e[e.Standalone=1]="Standalone",e}(g||{}),d=function(e){return e[e.Narrow=0]="Narrow",e[e.Abbreviated=1]="Abbreviated",e[e.Wide=2]="Wide",e[e.Short=3]="Short",e}(d||{}),p=function(e){return e[e.Short=0]="Short",e[e.Medium=1]="Medium",e[e.Long=2]="Long",e[e.Full=3]="Full",e}(p||{}),y=function(e){return e[e.Decimal=0]="Decimal",e[e.Group=1]="Group",e[e.List=2]="List",e[e.PercentSign=3]="PercentSign",e[e.PlusSign=4]="PlusSign",e[e.MinusSign=5]="MinusSign",e[e.Exponential=6]="Exponential",e[e.SuperscriptingExponent=7]="SuperscriptingExponent",e[e.PerMille=8]="PerMille",e[e.Infinity=9]="Infinity",e[e.NaN=10]="NaN",e[e.TimeSeparator=11]="TimeSeparator",e[e.CurrencyDecimal=12]="CurrencyDecimal",e[e.CurrencyGroup=13]="CurrencyGroup",e}(y||{});function Ve(e){return F(e)[h.LocaleId]}function He(e,t,s){let n=F(e),i=[n[h.DayPeriodsFormat],n[h.DayPeriodsStandalone]],r=C(i,t);return C(r,s)}function Ye(e,t,s){let n=F(e),i=[n[h.DaysFormat],n[h.DaysStandalone]],r=C(i,t);return C(r,s)}function Ze(e,t,s){let n=F(e),i=[n[h.MonthsFormat],n[h.MonthsStandalone]],r=C(i,t);return C(r,s)}function We(e,t){let n=F(e)[h.Eras];return C(n,t)}function k(e,t){let s=F(e);return C(s[h.DateFormat],t)}function x(e,t){let s=F(e);return C(s[h.TimeFormat],t)}function N(e,t){let n=F(e)[h.DateTimeFormat];return C(n,t)}function V(e,t){let s=F(e),n=s[h.NumberSymbols][t];if(typeof n>"u"){if(t===y.CurrencyDecimal)return s[h.NumberSymbols][y.Decimal];if(t===y.CurrencyGroup)return s[h.NumberSymbols][y.Group]}return n}function Re(e){if(!e[h.ExtraData])throw new Error(`Missing extra locale data for the locale "${e[h.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function Ke(e){let t=F(e);return Re(t),(t[h.ExtraData][2]||[]).map(n=>typeof n=="string"?Q(n):[Q(n[0]),Q(n[1])])}function Xe(e,t,s){let n=F(e);Re(n);let i=[n[h.ExtraData][0],n[h.ExtraData][1]],r=C(i,t)||[];return C(r,s)||[]}function C(e,t){for(let s=t;s>-1;s--)if(typeof e[s]<"u")return e[s];throw new Error("Locale data API: locale data undefined")}function Q(e){let[t,s]=e.split(":");return{hours:+t,minutes:+s}}var qe=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,O={},Je=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,S=function(e){return e[e.Short=0]="Short",e[e.ShortGMT=1]="ShortGMT",e[e.Long=2]="Long",e[e.Extended=3]="Extended",e}(S||{}),c=function(e){return e[e.FullYear=0]="FullYear",e[e.Month=1]="Month",e[e.Date=2]="Date",e[e.Hours=3]="Hours",e[e.Minutes=4]="Minutes",e[e.Seconds=5]="Seconds",e[e.FractionalSeconds=6]="FractionalSeconds",e[e.Day=7]="Day",e}(c||{}),a=function(e){return e[e.DayPeriods=0]="DayPeriods",e[e.Days=1]="Days",e[e.Months=2]="Months",e[e.Eras=3]="Eras",e}(a||{});function Qe(e,t,s,n){let i=at(e);t=A(s,t)||t;let u=[],o;for(;t;)if(o=Je.exec(t),o){u=u.concat(o.slice(1));let w=u.pop();if(!w)break;t=w}else{u.push(t);break}let f=i.getTimezoneOffset();n&&(f=Pe(n,f),i=ot(i,n,!0));let v="";return u.forEach(w=>{let b=st(w);v+=b?b(i,s,f):w==="''"?"'":w.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),v}function G(e,t,s){let n=new Date(0);return n.setFullYear(e,t,s),n.setHours(0,0,0),n}function A(e,t){let s=Ve(e);if(O[s]=O[s]||{},O[s][t])return O[s][t];let n="";switch(t){case"shortDate":n=k(e,p.Short);break;case"mediumDate":n=k(e,p.Medium);break;case"longDate":n=k(e,p.Long);break;case"fullDate":n=k(e,p.Full);break;case"shortTime":n=x(e,p.Short);break;case"mediumTime":n=x(e,p.Medium);break;case"longTime":n=x(e,p.Long);break;case"fullTime":n=x(e,p.Full);break;case"short":let i=A(e,"shortTime"),r=A(e,"shortDate");n=$(N(e,p.Short),[i,r]);break;case"medium":let u=A(e,"mediumTime"),o=A(e,"mediumDate");n=$(N(e,p.Medium),[u,o]);break;case"long":let f=A(e,"longTime"),v=A(e,"longDate");n=$(N(e,p.Long),[f,v]);break;case"full":let w=A(e,"fullTime"),b=A(e,"fullDate");n=$(N(e,p.Full),[w,b]);break}return n&&(O[s][t]=n),n}function $(e,t){return t&&(e=e.replace(/\{([^}]+)}/g,function(s,n){return t!=null&&n in t?t[n]:s})),e}function E(e,t,s="-",n,i){let r="";(e<0||i&&e<=0)&&(i?e=-e+1:(e=-e,r=s));let u=String(e);for(;u.length<t;)u="0"+u;return n&&(u=u.slice(u.length-t)),r+u}function et(e,t){return E(e,3).substring(0,t)}function D(e,t,s=0,n=!1,i=!1){return function(r,u){let o=tt(e,r);if((s>0||o>-s)&&(o+=s),e===c.Hours)o===0&&s===-12&&(o=12);else if(e===c.FractionalSeconds)return et(o,t);let f=V(u,y.MinusSign);return E(o,t,f,n,i)}}function tt(e,t){switch(e){case c.FullYear:return t.getFullYear();case c.Month:return t.getMonth();case c.Date:return t.getDate();case c.Hours:return t.getHours();case c.Minutes:return t.getMinutes();case c.Seconds:return t.getSeconds();case c.FractionalSeconds:return t.getMilliseconds();case c.Day:return t.getDay();default:throw new Error(`Unknown DateType value "${e}".`)}}function l(e,t,s=g.Format,n=!1){return function(i,r){return nt(i,r,e,t,s,n)}}function nt(e,t,s,n,i,r){switch(s){case a.Months:return Ze(t,i,n)[e.getMonth()];case a.Days:return Ye(t,i,n)[e.getDay()];case a.DayPeriods:let u=e.getHours(),o=e.getMinutes();if(r){let v=Ke(t),w=Xe(t,i,n),b=v.findIndex(R=>{if(Array.isArray(R)){let[H,T]=R,ce=u>=H.hours&&o>=H.minutes,de=u<T.hours||u===T.hours&&o<T.minutes;if(H.hours<T.hours){if(ce&&de)return!0}else if(ce||de)return!0}else if(R.hours===u&&R.minutes===o)return!0;return!1});if(b!==-1)return w[b]}return He(t,i,n)[u<12?0:1];case a.Eras:return We(t,n)[e.getFullYear()<=0?0:1];default:let f=s;throw new Error(`unexpected translation type ${f}`)}}function U(e){return function(t,s,n){let i=-1*n,r=V(s,y.MinusSign),u=i>0?Math.floor(i/60):Math.ceil(i/60);switch(e){case S.Short:return(i>=0?"+":"")+E(u,2,r)+E(Math.abs(i%60),2,r);case S.ShortGMT:return"GMT"+(i>=0?"+":"")+E(u,1,r);case S.Long:return"GMT"+(i>=0?"+":"")+E(u,2,r)+":"+E(Math.abs(i%60),2,r);case S.Extended:return n===0?"Z":(i>=0?"+":"")+E(u,2,r)+":"+E(Math.abs(i%60),2,r);default:throw new Error(`Unknown zone width "${e}"`)}}}var it=0,j=4;function rt(e){let t=G(e,it,1).getDay();return G(e,0,1+(t<=j?j:j+7)-t)}function Te(e){return G(e.getFullYear(),e.getMonth(),e.getDate()+(j-e.getDay()))}function ee(e,t=!1){return function(s,n){let i;if(t){let r=new Date(s.getFullYear(),s.getMonth(),1).getDay()-1,u=s.getDate();i=1+Math.floor((u+r)/7)}else{let r=Te(s),u=rt(r.getFullYear()),o=r.getTime()-u.getTime();i=1+Math.round(o/6048e5)}return E(i,e,V(n,y.MinusSign))}}function z(e,t=!1){return function(s,n){let r=Te(s).getFullYear();return E(r,e,V(n,y.MinusSign),t)}}var te={};function st(e){if(te[e])return te[e];let t;switch(e){case"G":case"GG":case"GGG":t=l(a.Eras,d.Abbreviated);break;case"GGGG":t=l(a.Eras,d.Wide);break;case"GGGGG":t=l(a.Eras,d.Narrow);break;case"y":t=D(c.FullYear,1,0,!1,!0);break;case"yy":t=D(c.FullYear,2,0,!0,!0);break;case"yyy":t=D(c.FullYear,3,0,!1,!0);break;case"yyyy":t=D(c.FullYear,4,0,!1,!0);break;case"Y":t=z(1);break;case"YY":t=z(2,!0);break;case"YYY":t=z(3);break;case"YYYY":t=z(4);break;case"M":case"L":t=D(c.Month,1,1);break;case"MM":case"LL":t=D(c.Month,2,1);break;case"MMM":t=l(a.Months,d.Abbreviated);break;case"MMMM":t=l(a.Months,d.Wide);break;case"MMMMM":t=l(a.Months,d.Narrow);break;case"LLL":t=l(a.Months,d.Abbreviated,g.Standalone);break;case"LLLL":t=l(a.Months,d.Wide,g.Standalone);break;case"LLLLL":t=l(a.Months,d.Narrow,g.Standalone);break;case"w":t=ee(1);break;case"ww":t=ee(2);break;case"W":t=ee(1,!0);break;case"d":t=D(c.Date,1);break;case"dd":t=D(c.Date,2);break;case"c":case"cc":t=D(c.Day,1);break;case"ccc":t=l(a.Days,d.Abbreviated,g.Standalone);break;case"cccc":t=l(a.Days,d.Wide,g.Standalone);break;case"ccccc":t=l(a.Days,d.Narrow,g.Standalone);break;case"cccccc":t=l(a.Days,d.Short,g.Standalone);break;case"E":case"EE":case"EEE":t=l(a.Days,d.Abbreviated);break;case"EEEE":t=l(a.Days,d.Wide);break;case"EEEEE":t=l(a.Days,d.Narrow);break;case"EEEEEE":t=l(a.Days,d.Short);break;case"a":case"aa":case"aaa":t=l(a.DayPeriods,d.Abbreviated);break;case"aaaa":t=l(a.DayPeriods,d.Wide);break;case"aaaaa":t=l(a.DayPeriods,d.Narrow);break;case"b":case"bb":case"bbb":t=l(a.DayPeriods,d.Abbreviated,g.Standalone,!0);break;case"bbbb":t=l(a.DayPeriods,d.Wide,g.Standalone,!0);break;case"bbbbb":t=l(a.DayPeriods,d.Narrow,g.Standalone,!0);break;case"B":case"BB":case"BBB":t=l(a.DayPeriods,d.Abbreviated,g.Format,!0);break;case"BBBB":t=l(a.DayPeriods,d.Wide,g.Format,!0);break;case"BBBBB":t=l(a.DayPeriods,d.Narrow,g.Format,!0);break;case"h":t=D(c.Hours,1,-12);break;case"hh":t=D(c.Hours,2,-12);break;case"H":t=D(c.Hours,1);break;case"HH":t=D(c.Hours,2);break;case"m":t=D(c.Minutes,1);break;case"mm":t=D(c.Minutes,2);break;case"s":t=D(c.Seconds,1);break;case"ss":t=D(c.Seconds,2);break;case"S":t=D(c.FractionalSeconds,1);break;case"SS":t=D(c.FractionalSeconds,2);break;case"SSS":t=D(c.FractionalSeconds,3);break;case"Z":case"ZZ":case"ZZZ":t=U(S.Short);break;case"ZZZZZ":t=U(S.Extended);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":t=U(S.ShortGMT);break;case"OOOO":case"ZZZZ":case"zzzz":t=U(S.Long);break;default:return null}return te[e]=t,t}function Pe(e,t){e=e.replace(/:/g,"");let s=Date.parse("Jan 01, 1970 00:00:00 "+e)/6e4;return isNaN(s)?t:s}function ut(e,t){return e=new Date(e.getTime()),e.setMinutes(e.getMinutes()+t),e}function ot(e,t,s){let n=s?-1:1,i=e.getTimezoneOffset(),r=Pe(t,i);return ut(e,n*(r-i))}function at(e){if(ve(e))return e;if(typeof e=="number"&&!isNaN(e))return new Date(e);if(typeof e=="string"){if(e=e.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(e)){let[i,r=1,u=1]=e.split("-").map(o=>+o);return G(i,r-1,u)}let s=parseFloat(e);if(!isNaN(e-s))return new Date(s);let n;if(n=e.match(qe))return ct(n)}let t=new Date(e);if(!ve(t))throw new Error(`Unable to convert "${e}" into a date`);return t}function ct(e){let t=new Date(0),s=0,n=0,i=e[8]?t.setUTCFullYear:t.setFullYear,r=e[8]?t.setUTCHours:t.setHours;e[9]&&(s=Number(e[9]+e[10]),n=Number(e[9]+e[11])),i.call(t,Number(e[1]),Number(e[2])-1,Number(e[3]));let u=Number(e[4]||0)-s,o=Number(e[5]||0)-n,f=Number(e[6]||0),v=Math.floor(parseFloat("0."+(e[7]||0))*1e3);return r.call(t,u,o,f,v),t}function ve(e){return e instanceof Date&&!isNaN(e.valueOf())}function Qt(e,t){t=encodeURIComponent(t);for(let s of e.split(";")){let n=s.indexOf("="),[i,r]=n==-1?[s,""]:[s.slice(0,n),s.slice(n+1)];if(i.trim()===t)return decodeURIComponent(r)}return null}var ne=/\s+/,be=[],en=(()=>{let t=class t{constructor(n,i){this._ngEl=n,this._renderer=i,this.initialClasses=be,this.stateMap=new Map}set klass(n){this.initialClasses=n!=null?n.trim().split(ne):be}set ngClass(n){this.rawClass=typeof n=="string"?n.trim().split(ne):n}ngDoCheck(){for(let i of this.initialClasses)this._updateState(i,!0);let n=this.rawClass;if(Array.isArray(n)||n instanceof Set)for(let i of n)this._updateState(i,!0);else if(n!=null)for(let i of Object.keys(n))this._updateState(i,!!n[i]);this._applyStateDiff()}_updateState(n,i){let r=this.stateMap.get(n);r!==void 0?(r.enabled!==i&&(r.changed=!0,r.enabled=i),r.touched=!0):this.stateMap.set(n,{enabled:i,changed:!0,touched:!0})}_applyStateDiff(){for(let n of this.stateMap){let i=n[0],r=n[1];r.changed?(this._toggleClass(i,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(i,!1),this.stateMap.delete(i)),r.touched=!1}}_toggleClass(n,i){n=n.trim(),n.length>0&&n.split(ne).forEach(r=>{i?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}};t.\u0275fac=function(i){return new(i||t)(m(Z),m(W))},t.\u0275dir=P({type:t,selectors:[["","ngClass",""]],inputs:{klass:[De.None,"class","klass"],ngClass:"ngClass"},standalone:!0});let e=t;return e})();var re=class{constructor(t,s,n,i){this.$implicit=t,this.ngForOf=s,this.index=n,this.count=i}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},tn=(()=>{let t=class t{set ngForOf(n){this._ngForOf=n,this._ngForOfDirty=!0}set ngForTrackBy(n){this._trackByFn=n}get ngForTrackBy(){return this._trackByFn}constructor(n,i,r){this._viewContainer=n,this._template=i,this._differs=r,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(n){n&&(this._template=n)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let n=this._ngForOf;if(!this._differ&&n)if(0)try{}catch{}else this._differ=this._differs.find(n).create(this.ngForTrackBy)}if(this._differ){let n=this._differ.diff(this._ngForOf);n&&this._applyChanges(n)}}_applyChanges(n){let i=this._viewContainer;n.forEachOperation((r,u,o)=>{if(r.previousIndex==null)i.createEmbeddedView(this._template,new re(r.item,this._ngForOf,-1,-1),o===null?void 0:o);else if(o==null)i.remove(u===null?void 0:u);else if(u!==null){let f=i.get(u);i.move(f,o),_e(f,r)}});for(let r=0,u=i.length;r<u;r++){let f=i.get(r).context;f.index=r,f.count=u,f.ngForOf=this._ngForOf}n.forEachIdentityChange(r=>{let u=i.get(r.currentIndex);_e(u,r)})}static ngTemplateContextGuard(n,i){return!0}};t.\u0275fac=function(i){return new(i||t)(m(X),m(q),m(pe))},t.\u0275dir=P({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0});let e=t;return e})();function _e(e,t){e.context.$implicit=t.item}var nn=(()=>{let t=class t{constructor(n,i){this._viewContainer=n,this._context=new se,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=i}set ngIf(n){this._context.$implicit=this._context.ngIf=n,this._updateView()}set ngIfThen(n){Ie("ngIfThen",n),this._thenTemplateRef=n,this._thenViewRef=null,this._updateView()}set ngIfElse(n){Ie("ngIfElse",n),this._elseTemplateRef=n,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(n,i){return!0}};t.\u0275fac=function(i){return new(i||t)(m(X),m(q))},t.\u0275dir=P({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0});let e=t;return e})(),se=class{constructor(){this.$implicit=null,this.ngIf=null}};function Ie(e,t){if(!!!(!t||t.createEmbeddedView))throw new Error(`${e} must be a TemplateRef, but received '${fe(t)}'.`)}function ke(e,t){return new le(2100,!1)}var ue=class{createSubscription(t,s){return K(()=>t.subscribe({next:s,error:n=>{throw n}}))}dispose(t){K(()=>t.unsubscribe())}},oe=class{createSubscription(t,s){return t.then(s,n=>{throw n})}dispose(t){}},dt=new oe,lt=new ue,rn=(()=>{let t=class t{constructor(n){this._latestValue=null,this._subscription=null,this._obj=null,this._strategy=null,this._ref=n}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(n){return this._obj?n!==this._obj?(this._dispose(),this.transform(n)):this._latestValue:(n&&this._subscribe(n),this._latestValue)}_subscribe(n){this._obj=n,this._strategy=this._selectStrategy(n),this._subscription=this._strategy.createSubscription(n,i=>this._updateLatestValue(n,i))}_selectStrategy(n){if(Ce(n))return dt;if(Ee(n))return lt;throw ke(t,n)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(n,i){n===this._obj&&(this._latestValue=i,this._ref.markForCheck())}};t.\u0275fac=function(i){return new(i||t)(m(me,16))},t.\u0275pipe=Y({name:"async",type:t,pure:!1,standalone:!0});let e=t;return e})();var ft="mediumDate",ht=new B("DATE_PIPE_DEFAULT_TIMEZONE"),Dt=new B("DATE_PIPE_DEFAULT_OPTIONS"),sn=(()=>{let t=class t{constructor(n,i,r){this.locale=n,this.defaultTimezone=i,this.defaultOptions=r}transform(n,i,r,u){if(n==null||n===""||n!==n)return null;try{let o=i??this.defaultOptions?.dateFormat??ft,f=r??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return Qe(n,o,u||this.locale,f)}catch(o){throw ke(t,o.message)}}};t.\u0275fac=function(i){return new(i||t)(m(we,16),m(ht,24),m(Dt,24))},t.\u0275pipe=Y({name:"date",type:t,pure:!0,standalone:!0});let e=t;return e})();var un=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=ge({type:t}),t.\u0275inj=he({});let e=t;return e})(),on="browser",gt="server";function an(e){return e===gt}var Me=class{};export{J as a,Jt as b,Ae as c,Be as d,ae as e,Ue as f,Qt as g,en as h,tn as i,nn as j,rn as k,sn as l,un as m,on as n,an as o,Me as p};