import{c as m}from"./chunk-NC65UT2Y.js";import{P as n,U as u,m as o,n as a}from"./chunk-SZSGA2LC.js";var f=(()=>{let t=class t{constructor(e){this.http=e,this.users=[],this.users.push({id:1,userName:"admin",email:"admin@gmail.com",password:"admin",role:["ADMIN"]}),this.users.push({id:2,userName:"user",email:"user@gmail.com",password:"user",role:["ADMIN"]})}login(e,i){let s=this.users.find(l=>l.email==e);return s?s.password!=i?a(()=>new Error("Mot de passe incorrect")):o(s):a(()=>new Error("User not Found"))}authenticateUser(e){return this.authenticatedUser=e,localStorage.setItem("authUser",JSON.stringify({userName:e.userName,email:e.email,role:e.role,jwt:"JWT_TOKKEN"})),o(!0)}hasRole(e){return this.authenticatedUser.role.includes(e)}isAuthenticed(){return this.authenticatedUser!=null}logOut(){this.authenticatedUser=void 0,localStorage.removeItem("authUser")}};t.\u0275fac=function(i){return new(i||t)(u(m))},t.\u0275prov=n({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();export{f as a};
