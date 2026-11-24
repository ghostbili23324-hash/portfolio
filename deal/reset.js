(function(){
var SB="https://tpstmxxkjcttrldxecxs.supabase.co",KEY="sb_publishable_E3wy3JgeLqrXf65eRuZYIw_B4ZKfK2z",WA="22870745806",$=function(i){return document.getElementById(i)};
function esc(s){return String(s||"").replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
var st=document.createElement("style");
st.textContent=".fp{display:block;margin:12px auto 0;background:none;border:0;color:#f16623;font:600 13px Poppins,sans-serif;text-decoration:underline}.fpm{margin-top:12px;font-family:Poppins,sans-serif}.fpm input,.rs input{width:100%;box-sizing:border-box;border:1.5px solid #e6e4f2;border-radius:12px;padding:12px;font:14px Poppins,sans-serif;margin-bottom:8px;background:#fff;color:#262262}";
st.textContent+=".fpm button.g,.rs button{width:100%;border:0;border-radius:14px;padding:13px;background:linear-gradient(135deg,#f16623,#ff9a62);color:#fff;font:700 14px Poppins,sans-serif}.fpm p{font-size:12px;color:#55546b;margin:8px 0 0;line-height:1.4}.fpm a{color:#25a244;font-weight:700}";
st.textContent+=".rs{position:fixed;inset:0;z-index:99999;background:#f6f5ff;display:flex;align-items:center;justify-content:center;padding:20px;font-family:Poppins,sans-serif}.rs>div{background:#fff;border-radius:22px;padding:22px;width:100%;max-width:380px;box-shadow:0 10px 30px #0002;color:#262262}.rs h2{margin:0 0 6px;font-size:19px}.rs p{font-size:13px;color:#55546b;margin:0 0 12px}";
document.head.appendChild(st);
function wa(e){return "https://wa.me/"+WA+"?text="+encodeURIComponent("Bonjour, j'ai oublié mon mot de passe DealTo. Mon email : "+(e||""))}
function forgot(){
var g=$("a_go"),b=document.createElement("button");b.type="button";b.id="fp";b.className="fp";b.textContent="Mot de passe oublié ?";
  b.onclick=function(){var e=($("a_em")||{}).value||"",d=document.createElement("div");d.className="fpm";
d.innerHTML='<input id="fp_e" type="email" placeholder="Ton email" value="'+esc(e)+'"><button type="button" class="g" id="fp_g">Recevoir un lien par email</button><p id="fp_s"></p>';
b.replaceWith(d);$("fp_g").onclick=function(){var m=$("fp_e").value.trim(),s=$("fp_s");if(!m){s.textContent="Écris ton email.";return}
$("fp_g").disabled=true;s.textContent="Envoi…";
fetch(SB+"/auth/v1/recover?redirect_to="+encodeURIComponent(location.origin+location.pathname),{method:"POST",headers:{apikey:KEY,"Content-Type":"application/json"},body:JSON.stringify({email:m})}).then(function(r){
$("fp_g").disabled=false;
s.innerHTML=(r.ok?"Si un compte existe avec cet email, un lien vient d'être envoyé (regarde aussi les spams).":"Trop de demandes ou service occupé.")+' Pas de mail après 5 minutes ? <a href="'+wa(m)+'" target="_blank" rel="noopener">Écris-nous sur WhatsApp</a>.'
}).catch(function(){$("fp_g").disabled=false;s.innerHTML='Pas de connexion. Réessaie, ou <a href="'+wa(m)+'" target="_blank" rel="noopener">écris-nous sur WhatsApp</a>.'})}};
g.insertAdjacentElement("afterend",b)}
function ui(t){
var o=document.createElement("div");o.className="rs";
o.innerHTML='<div><h2>Nouveau mot de passe</h2><p>Choisis un mot de passe d\'au moins 8 caractères.</p><input id="rs_p" type="password" placeholder="Nouveau mot de passe" autocomplete="new-password"><button id="rs_g">Enregistrer</button><p id="rs_s"></p></div>';
document.body.appendChild(o);
$("rs_g").onclick=function(){var p=$("rs_p").value,s=$("rs_s");if(p.length<8){s.textContent="Au moins 8 caractères.";return}
$("rs_g").disabled=true;s.textContent="Un instant…"; 
fetch(SB+"/auth/v1/user",{method:"PUT",headers:{apikey:KEY,Authorization:"Bearer "+t,"Content-Type":"application/json"},body:JSON.stringify({password:p})}).then(function(r){
if(!r.ok)throw 1;history.replaceState(null,"",location.pathname);
o.querySelector("div").innerHTML='<h2>Mot de passe changé ✅</h2><p>Tu peux maintenant te connecter.</p><button id="rs_o">Se connecter</button>';
$("rs_o").onclick=function(){o.remove();try{localStorage.removeItem("dt_s")}catch(e){}location.reload()}
}).catch(function(){$("rs_g").disabled=false;s.textContent="Lien expiré ou invalide. Redemande un lien."})}}
var h=location.hash;
if(h.indexOf("type=recovery")>-1){var t=new URLSearchParams(h.slice(1)).get("access_token");if(t)ui(t)}
else if(h.indexOf("error_code")>-1){history.replaceState(null,"",location.pathname);setTimeout(function(){alert("Ce lien est expiré. Redemande un lien depuis « Mot de passe oublié ».")},600)}
var tm=0;
new MutationObserver(function(){clearTimeout(tm);tm=setTimeout(function(){if($("a_pw")&&$("a_go")&&!$("a_nom")&&!$("fp")&&!$("fp_g"))forgot()},40)}).observe(document.body,{childList:true,subtree:true});
})();
