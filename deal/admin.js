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
st.textContent+=".xc{background:#fff;border-radius:16px;padding:12px;box-shadow:0 1px 6px #0001}.xc img{width:100%;height:170px;object-fit:cover;border-radius:12px;background:#eee}.xc b{display:block;margin-top:8px;font-size:15px}.xc small{display:block;color:#55546b;font-size:12px;margin-top:2px}.xc p{font-size:13px;margin:6px 0 0}.xb{display:flex;gap:8px;margin-top:10px}.xb button{flex:1;border:0;border-radius:12px;padding:12px;font:700 14px Poppins,sans-serif;color:#fff}.xb .xk{background:#1f9d55}.xb .xn{background:#d93025}.xe{margin:auto;text-align:center;color:#55546b;font-size:14px}.adm{display:block;width:100%;margin-top:10px;padding:12px;border:1.5px solid #262262;border-radius:14px;background:#fff;color:#262262;font:700 14px Poppins,sans-serif;text-align:left}.adm i{font-style:normal;background:#f16623;color:#fff;border-radius:99px;font-size:11px;padding:2px 8px;margin-left:6px}";
document.head.appendChild(st);
var ov=null,isA=null;
function open(){
ov=document.createElement("div");ov.className="am";
ov.innerHTML='<div class="xh"><button id="am_x">←</button><b>Annonces à valider</b></div><div class="xl" id="am_l"><div class="xe">Chargement…</div></div>';
document.body.appendChild(ov);$("am_x").onclick=function(){ov.remove();ov=null};
load()}
function card(a){return '<div class="xc" data-id="'+esc(a.id)+'">'+(a.photos&&a.photos[0]?'<img src="'+esc(a.photos[0])+'" alt="">':"")+'<b>'+esc(a.titre)+' · '+esc(a.prix)+' FCFA</b><small>'+esc(a.cat)+' · '+esc(a.etat)+' · '+esc(a.ville)+'</small><small>Vendeur : '+esc(a.vendeur)+' · '+esc(a.tel)+'</small><p>'+esc(a.description)+'</p><div class="xb"><button class="xn" data-a="no">Refuser</button><button class="xk" data-a="ok">Valider</button></div></div>'}
function load(){
api("GET","articles?publie=eq.false&order=created_at.desc&select=*").then(function(r){
var l=$("am_l");if(!l)return;
l.innerHTML=r.length?r.map(card).join(""):'<div class="xe">Aucune annonce en attente 🎉</div>';
l.onclick=function(e){var b=e.target.closest("button[data-a]");if(!b)return;var c=b.closest(".xc"),id=c.dataset.id;
if(b.dataset.a==="no"&&!confirm("Refuser et supprimer cette annonce ?"))return;
b.disabled=true;
(b.dataset.a==="ok"?api("PATCH","articles?id=eq."+encodeURIComponent(id),{publie:true},{Prefer:"return=minimal"}):api("DELETE","articles?id=eq."+encodeURIComponent(id),null,{Prefer:"return=minimal"})).then(function(){c.remove();if(!l.querySelector(".xc"))l.innerHTML='<div class="xe">Aucune annonce en attente 🎉</div>'}).catch(function(){b.disabled=false;alert("Échec. Vérifie ta connexion.")})}
}).catch(function(){var l=$("am_l");if(l)l.innerHTML='<div class="xe">Impossible de charger.</div>'})}
function badge(b){api("GET","articles?select=id&publie=eq.false").then(function(r){if(r.length){var i=document.createElement("i");i.textContent=r.length;b.appendChild(i)}}).catch(function(){})}
function scan(){
var o=$("m_out");if(!o||o.parentNode.querySelector(".adm")||!ses())return;
if(isA===false)return;
var go=function(){if(!$("m_out")||$("m_out").parentNode.querySelector(".adm"))return;var b=document.createElement("button");b.className="adm";b.textContent="🛡️ Modération";b.onclick=open;$("m_out").insertAdjacentElement("beforebegin",b);badge(b)};
if(isA)return go();
api("POST","rpc/is_admin",{}).then(function(v){isA=v===true;if(isA)go()}).catch(function(){})}
var tm=0;
new MutationObserver(function(){clearTimeout(tm);tm=setTimeout(scan,40)}).observe(document.body,{childList:true,subtree:true});
})();
