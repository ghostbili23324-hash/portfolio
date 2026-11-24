(function(){
var SB="https://tpstmxxkjcttrldxecxs.supabase.co",KEY="sb_publishable_E3wy3JgeLqrXf65eRuZYIw_B4ZKfK2z",WA="22870745806",$=function(i){return document.getElementById(i)};
function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function ses(){try{return JSON.parse(localStorage.getItem("dt_s")||"null")}catch(e){return null}}
function tok(){var s=ses();if(!s)return Promise.reject(1);if(Date.now()<s.exp)return Promise.resolve(s);
return fetch(SB+"/auth/v1/token?grant_type=refresh_token",{method:"POST",headers:{apikey:KEY,"Content-Type":"application/json"},body:JSON.stringify({refresh_token:s.refresh_token})}).then(function(r){return r.json()}).then(function(j){if(!j.access_token)throw 1;j.exp=Date.now()+j.expires_in*1000-60000;try{localStorage.setItem("dt_s",JSON.stringify(j))}catch(e){}return j})}
function api(m,p,b,x){return tok().then(function(s){var h={apikey:KEY,Authorization:"Bearer "+s.access_token,"Content-Type":"application/json"};for(var k in x)h[k]=x[k];
return fetch(SB+"/rest/v1/"+p,{method:m,headers:h,body:b?JSON.stringify(b):undefined}).then(function(r){if(!r.ok)throw new Error(r.status);return r.status===204||r.status===201?null:r.json()})})}
function uid(){var s=ses();return s&&s.user&&s.user.id}
function mynom(){var s=ses();return(s&&s.user&&s.user.user_metadata&&s.user.user_metadata.nom)||"Moi"}
var st=document.createElement("style");
st.textContent="";
st.textContent+=".ct{position:fixed;inset:0;z-index:99998;background:#f6f5ff;display:flex;flex-direction:column;font-family:Poppins,sans-serif;color:#262262}.ct *{box-sizing:border-box}.ch2{display:flex;align-items:center;gap:10px;padding:12px;background:#fff;border-bottom:1px solid #eceaf7}.ch2 button{border:0;background:none;font-size:20px;color:#262262;padding:6px 10px}";
st.textContent+=".ch2 div{flex:1;min-width:0}.ch2 b{display:block;font-size:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ch2 small{display:block;font-size:11px;color:#55546b;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cl{flex:1;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:6px}";
st.textContent+=".bu{max-width:80%;padding:9px 12px;border-radius:16px;font-size:14px;line-height:1.35;word-wrap:break-word;white-space:pre-wrap}.bu small{display:block;font-size:10px;opacity:.65;margin-top:3px}.bu.me{align-self:flex-end;background:linear-gradient(135deg,#f16623,#ff9a62);color:#fff;border-bottom-right-radius:4px}";
st.textContent+=".bu.ot{align-self:flex-start;background:#fff;border-bottom-left-radius:4px;box-shadow:0 1px 4px #0001}.cf{display:flex;gap:8px;padding:10px;background:#fff;border-top:1px solid #eceaf7}.cf input{flex:1;border:1.5px solid #e6e4f2;border-radius:22px;padding:11px 14px;font:14px Poppins,sans-serif;outline:0;min-width:0}.cf input:focus{border-color:#f16623}";
st.textContent+=".cf button{border:0;border-radius:22px;padding:0 18px;background:#f16623;color:#fff;font:700 14px Poppins,sans-serif}.ce2{margin:auto;text-align:center;color:#55546b;font-size:13px;padding:20px}";
