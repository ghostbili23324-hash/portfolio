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
st.textContent+=".ci2{display:flex;gap:12px;align-items:center;background:#fff;border-radius:14px;padding:12px;border:0;width:100%;text-align:left;font-family:Poppins,sans-serif;color:#262262;box-shadow:0 1px 4px #0001}.ci2 .av2{width:42px;height:42px;border-radius:50%;background:#262262;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;flex:none}";
st.textContent+=".ci2 div{flex:1;min-width:0}.ci2 b{display:block;font-size:14px}.ci2 small{display:block;font-size:12px;color:#55546b;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ci2 i{font-style:normal;background:#f16623;color:#fff;border-radius:99px;font-size:11px;font-weight:700;padding:2px 8px}";
st.textContent+=".cmn{position:absolute;right:10px;top:54px;background:#fff;border-radius:12px;box-shadow:0 8px 24px #0003;overflow:hidden;z-index:2}.cmn button{display:block;width:100%;text-align:left;padding:12px 18px;font:600 14px Poppins,sans-serif;border-bottom:1px solid #f0eef8}";
st.textContent+=".dm{display:block;width:100%;margin:10px 0 4px;padding:12px;border:1.5px solid #f16623;border-radius:14px;background:#fff3ec;color:#f16623;font:700 14px Poppins,sans-serif}.mg{display:block;width:100%;margin-top:10px;padding:12px;border:1.5px solid #e6e4f2;border-radius:14px;background:#fff;color:#262262;font:600 14px Poppins,sans-serif;text-align:left}";
st.textContent+=".mg i{font-style:normal;background:#f16623;color:#fff;border-radius:99px;font-size:11px;padding:2px 8px;margin-left:6px}";
document.head.appendChild(st);
var ov=null,timer=0,cur=null;
function close(){clearInterval(timer);timer=0;cur=null;if(ov){ov.remove();ov=null}}
function mount(h){if(!ov){ov=document.createElement("div");ov.className="ct";document.body.appendChild(ov)}ov.innerHTML=h}
function hm(d){var x=new Date(d);return ("0"+x.getHours()).slice(-2)+":"+("0"+x.getMinutes()).slice(-2)}
function key(a,b,aid){return [a,b].sort().join("_")+"_"+(aid||"s")}
function thread(o){
var me=uid();if(!me)return;if(o.to===me)return inbox();
cur={to:o.to,nom:o.nom||"DealTo",aid:o.aid||"",at:o.at||"Support DealTo",conv:key(me,o.to,o.aid),blocked:false,n:-1};
mount('<div class="ch2"><button id="ct_b">←</button><div><b>'+esc(cur.nom)+'</b><small>'+esc(cur.at)+'</small></div><button id="ct_m">⋮</button></div><div class="cl" id="ct_l"><div class="ce2">Chargement…</div></div><form class="cf" id="ct_f"><input id="ct_i" maxlength="1000" placeholder="Écris ton message…" autocomplete="off"><button>Envoyer</button></form>');
$("ct_b").onclick=function(){inbox()};
$("ct_m").onclick=function(){menu()};
$("ct_f").onsubmit=function(e){e.preventDefault();send()};
load();clearInterval(timer);timer=setInterval(function(){if(!document.hidden)load()},4000)}
function menu(){
var old=ov.querySelector(".cmn");if(old){old.remove();return}
var m=document.createElement("div");m.className="cmn";
m.innerHTML='<button data-a="bl">'+(cur.blocked?"Débloquer":"Bloquer")+' cet utilisateur</button><button data-a="rp">🚩 Signaler</button>';
m.onclick=function(e){var a=e.target.dataset.a;m.remove();if(a==="bl")block();if(a==="rp")report()};
ov.appendChild(m)}
function block(){var c=cur;
(c.blocked?api("DELETE","blocages?blocker=eq."+uid()+"&blocked=eq."+c.to):api("POST","blocages",{blocker:uid(),blocked:c.to},{Prefer:"return=minimal"})).then(function(){c.blocked=!c.blocked;load()}).catch(function(){})}
