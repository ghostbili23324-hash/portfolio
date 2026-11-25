(function(){
var SB="https://tpstmxxkjcttrldxecxs.supabase.co",KEY="sb_publishable_E3wy3JgeLqrXf65eRuZYIw_B4ZKfK2z",$=function(i){return document.getElementById(i)};
var st=document.createElement("style");
st.textContent=".rl{display:flex;gap:8px;margin:4px 0 12px}.rl label{flex:1;display:block;margin:0;cursor:pointer}.rl input{position:absolute;opacity:0;pointer-events:none}.rl span{display:block;text-align:center;padding:11px 6px;border:1.5px solid #e6e4f2;border-radius:14px;font:600 13px Poppins,sans-serif;color:#262262;background:#fff}.rl small{display:block;font-weight:500;font-size:11px;color:#55546b;margin-top:2px}.rl input:checked+span{border-color:#f16623;background:#fff3ec;box-shadow:0 4px 12px #f1662333}.rl-t{font:600 13px Poppins,sans-serif;color:#262262;margin:8px 0 2px}.vd{display:block;width:100%;margin-top:12px;border:0;border-radius:14px;padding:13px;background:linear-gradient(135deg,#f16623,#ff9a62);color:#fff;font:700 14px Poppins,sans-serif}.vb{text-align:center;padding:24px 8px}.vb h2{color:#262262;margin:0 0 8px}.vb p{color:#55546b;font-size:14px;margin:0 0 6px}";
document.head.appendChild(st);
function ses(){try{return JSON.parse(localStorage.getItem("dt_s")||"null")}catch(e){return null}}
function role(){var s=ses();return s&&s.user&&s.user.user_metadata&&s.user.user_metadata.role}
var of=window.fetch;
window.fetch=function(u,o){
try{if(typeof u==="string"&&u.indexOf("/auth/v1/signup")>-1&&o&&o.body){var b=JSON.parse(o.body),c=document.querySelector('input[name="rl"]:checked');b.data=b.data||{};b.data.role=c?c.value:"client";o=Object.assign({},o,{body:JSON.stringify(b)})}}catch(e){}
return of.call(this,u,o)};
function become(btn){
btn.disabled=true;btn.textContent="Un instant…";
var s=ses();if(!s)return;
fetch(SB+"/auth/v1/user",{method:"PUT",headers:{apikey:KEY,Authorization:"Bearer "+s.access_token,"Content-Type":"application/json"},body:JSON.stringify({data:{role:"vendeur"}})})
.then(function(r){if(!r.ok)throw 1;return r.json()})
.then(function(u){s.user=u;s.exp=0;;try{localStorage.setItem("dt_s",JSON.stringify(s))}catch(e){}location.reload()})
.catch(function(){btn.disabled=false;btn.textContent="Réessayer"})}
var tm=0;
function scan(){
if($("a_nom")&&$("a_tel")&&!$("rl")){
var l=$("a_tel").closest("label"),d=document.createElement("div");d.id="rl";
d.innerHTML='<div class="rl-t">Je m\'inscris comme</div><div class="rl"><label><input type="radio" name="rl" value="client" checked><span>Utilisateur<small>Je veux acheter</small></span></label><label><input type="radio" name="rl" value="vendeur"><span>Vendeur<small>Acheter et vendre</small></span></label></div>';
l.insertAdjacentElement("afterend",d)}
var f=$("f_go");
if(f&&role()==="client"){
var fm=f.closest(".form");
fm.innerHTML='<button class="x" data-close>\u2715</button><div class="vb"><h2>Compte vendeur requis</h2><p>Ton compte est un compte Utilisateur.</p><p>Passe en compte Vendeur pour publier des annonces. C\'est gratuit.</p><button class="vd">Devenir vendeur</button></div>';
fm.querySelector(".vd").onclick=function(){become(this)}}
var o=$("m_out");
if(o&&role()==="client"&&!o.parentNode.querySelector(".vd")){
var b=document.createElement("button");b.className="vd";b.textContent="\uD83D\uDECD\uFE0F Devenir vendeur";b.onclick=function(){become(this)};
o.insertAdjacentElement("beforebegin",b)}}
new MutationObserver(function(){clearTimeout(tm);tm=setTimeout(scan,30)}).observe(document.body,{childList:true,subtree:true});
})();
