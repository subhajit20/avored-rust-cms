import{d as c,u as m,p as d,r as u,g as _,f as n,h as p,c as f,a as t,w as h,t as x,i as b,j as v,F as w,o as y,e as g}from"./index-b961a72b.js";const k=t("div",{class:"mx-auto max-w-screen-xl mt-3 mb-5"},[t("div",{class:"sm:flex sm:items-center sm:justify-between"},[t("div",{class:"text-center sm:text-left"},[t("h1",{class:"text-2xl font-bold text-gray-900 sm:text-3xl"}," Show Admin User ")])])],-1),S={class:"text-left border-t my-8 text-sm"},A=["onSubmit"],C={class:"flex items-center"},B=t("label",{for:"Email",class:"text-gray-700"}," Email: ",-1),j={class:"ml-5"},R={class:"mt-5 flex w-full items-center"},E=t("button",{type:"submit",class:"btn btn-primary"}," Delete Admin User ",-1),U=c({__name:"AdminUserShow",setup(N){const i=m(),r=d(),s=u({email:"",id:""});_(async()=>{const e=r.params.admin_user_id,a=localStorage.getItem("token"),o=await n.get("/api/admin-users/"+e,{headers:{Authorization:`Bearer ${a}`,"Content-Type":"application/json"}});s.value=o.data});const l=async()=>{const e=localStorage.getItem("token");(await n.delete("/api/admin-users/"+s.value.id,{headers:{Authorization:`Bearer ${e}`,"Content-Type":"application/json"}})).status===204&&i.push({name:"admin-users-list"})};return(e,a)=>{const o=p("router-link");return y(),f(w,null,[k,t("div",S,[t("form",{onSubmit:h(l,["prevent"]),action:"#",class:"mt-3 w-full"},[t("div",C,[B,t("div",j,x(s.value.email),1)]),t("div",R,[b(o,{class:"mr-auto btn btn-default",to:{name:"admin-users-list"}},{default:v(()=>[g(" Cancel ")]),_:1}),E])],40,A)])],64)}}});export{U as default};
