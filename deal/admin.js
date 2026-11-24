(function(){
var SB="https://tpstmxxkjcttrldxecxs.supabase.co",KEY="sb_publishable_E3wy3JgeLqrXf65eRuZYIw_B4ZKfK2z",$=function(i){return document.getElementById(i)};
function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function ses(){try{return JSON.parse(localStorage.getItem("dt_s")||"null")}catch(e){return null}}
function tok(){var s=ses();if(!s)return Promise.reject(1);if(Date.now()<s.exp)return Promise.resolve(s);
return fetch(SB+"/auth/v1/token?grant_type=refresh_token",{method:"POST",headers:{apikey:KEY,"Content-Type":"application/json"},body:JSON.stringify({refresh_token:s.refresh_token})}).then(function(r){return r.json()}).then(function(j){if(!j.access_token)throw 1;j.exp=Date.now()+j.expires_in*1000-60000;try{localStorage.setItem("dt_s",JSON.stringify(j))}catch(e){}return j})}
function api(m,p,b,x){return tok().then(function(s){var h={apikey:KEY,Authorization:"Bearer "+s.access_token,"Content-Type":"application/json"};for(var k in x)h[k]=x[k];
return fetch(SB+"/rest/v1/"+p,{method:m,headers:h,body:b?JSON.stringify(b):undefined}).then(function(r){if(!r.ok)throw new Error(r.status);return r.status===204||r.status===201?null:r.json()})})}
var st=document.createElement("style");
st.textContent=".am{position:fixed;inset:0;z-index:99998;background:#f6f5ff;display:flex;flex-direction:column;font-family:Poppins,sans-serif;color:#262262}.am .xh{display:flex;align-items:center;gap:10px;padding:12px;background:#fff;border-bottom:1px solid #eceaf7}.am .xh button{border:0;background:none;font-size:20px;padding:6px 10px;color:#262262}.am .xh b{flex:1}.am .xl{flex:1;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:10px}";
