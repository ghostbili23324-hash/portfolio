(function(){
var SB="https://tpstmxxkjcttrldxecxs.supabase.co",KEY="sb_publishable_E3wy3JgeLqrXf65eRuZYIw_B4ZKfK2z",$=function(i){return document.getElementById(i)};
function ses(){try{return JSON.parse(localStorage.getItem("dt_s")||"null")}catch(e){return null}}
function tok(){var s=ses();if(!s)return Promise.reject(1);if(Date.now()<s.exp)return Promise.resolve(s);
return fetch(SB+"/auth/v1/token?grant_type=refresh_token",{method:"POST",headers:{apikey:KEY,"Content-Type":"application/json"},body:JSON.stringify({refresh_token:s.refresh_token})}).then(function(r){return r.json()}).then(function(j){if(!j.access_token)throw 1;j.exp=Date.now()+j.expires_in*1000-60000;try{localStorage.setItem("dt_s",JSON.stringify(j))}catch(e){}return j})}
function H(s){return{apikey:KEY,Authorization:"Bearer "+s.access_token,"Content-Type":"application/json"}}
function del(){return tok().then(function(s){
return fetch(SB+"/rest/v1/articles?select=photos&user_id=eq."+s.user.id,{headers:H(s)}).then(function(r){return r.ok?r.json():[]}).then(function(rows){
var ps=[];rows.forEach(function(a){(a.photos||[]).forEach(function(u){var i=String(u).indexOf("/photos/");if(i>-1)ps.push(decodeURIComponent(String(u).slice(i+8)))})});
return ps.length?fetch(SB+"/storage/v1/object/photos",{method:"DELETE",headers:H(s),body:JSON.stringify({prefixes:ps})}).catch(function(){}):0}).then(function(){
return fetch(SB+"/rest/v1/rpc/supprimer_mon_compte",{method:"POST",headers:H(s),body:"{}"})}).then(function(r){if(!r.ok)throw 2})})}
function ask(){var m=document.createElement("div");m.className="bm";
m.innerHTML='<div class="bk"></div><div class="bp"><h3>Supprimer mon compte ?</h3><p>Ton compte, tes annonces et tes photos seront supprimés définitivement. Cette action est irréversible.</p><button class="dz" id="dz_ok">Oui, supprimer définitivement</button><button class="dn" id="dz_no">Annuler</button><div class="msg" id="dz_m"></div></div>';
document.body.appendChild(m);
m.querySelector("#dz_no").onclick=m.querySelector(".bk").onclick=function(){m.remove()};
var b=m.querySelector("#dz_ok");
b.onclick=function(){b.disabled=true;b.textContent="Suppression...";
del().then(function(){try{localStorage.removeItem("dt_s")}catch(e){}
m.querySelector(".bp").innerHTML="<h3>Compte supprimé</h3><p>Tes données ont été effacées. À bientôt !</p>";
setTimeout(function(){location.reload()},1800)}).catch(function(){b.disabled=false;b.textContent="Oui, supprimer définitivement";
m.querySelector("#dz_m").textContent="Échec. Vérifie ta connexion et réessaie."})}}
function inj(){var o=$("m_out");if(!o||$("m_del"))return;var b=document.createElement("button");
b.id="m_del";b.className="link dg2";b.textContent="Supprimer mon compte";b.onclick=ask;o.insertAdjacentElement("afterend",b)}
new MutationObserver(inj).observe($("panel"),{childList:true,subtree:true});
var s=document.createElement("style");
s.textContent=".dz{width:100%;border:0;border-radius:99px;padding:14px;background:#d92d20;color:#fff;font:700 15px Poppins,sans-serif;margin-top:6px;box-shadow:0 10px 22px #d92d2055}.dz:disabled{opacity:.6}.dn{display:block;margin:12px auto 0;border:0;background:none;color:#262262;font-weight:700;text-decoration:underline}.dg2{display:block;margin:10px auto 0;color:#d92d20!important;font-size:13px}";
document.head.appendChild(s);
})();
