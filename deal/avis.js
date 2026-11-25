(function(){
var SB="https://tpstmxxkjcttrldxecxs.supabase.co",KEY="sb_publishable_E3wy3JgeLqrXf65eRuZYIw_B4ZKfK2z",$=function(i){return document.getElementById(i)};
function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function ses(){try{return JSON.parse(localStorage.getItem("dt_s")||"null")}catch(e){return null}}
function tok(){var s=ses();if(!s)return Promise.resolve(null);if(Date.now()<s.exp)return Promise.resolve(s);
return fetch(SB+"/auth/v1/token?grant_type=refresh_token",{method:"POST",headers:{apikey:KEY,"Content-Type":"application/json"},body:JSON.stringify({refresh_token:s.refresh_token})}).then(function(r){return r.json()}).then(function(j){if(!j.access_token)return null;j.exp=Date.now()+j.expires_in*1000-60000;try{localStorage.setItem("dt_s",JSON.stringify(j))}catch(e){}return j}).catch(function(){return null})}
function call(m,p,b){return tok().then(function(s){return fetch(SB+"/rest/v1/"+p,{method:m,headers:{apikey:KEY,Authorization:"Bearer "+(s?s.access_token:KEY),"Content-Type":"application/json",Prefer:"return=minimal"},body:b?JSON.stringify(b):undefined})})}
var st=document.createElement("style");
st.textContent=".avb{display:flex;align-items:center;gap:8px;width:100%;margin:10px 0 4px;padding:11px 14px;border:1.5px solid #e6e4f2;border-radius:14px;background:#fff;color:#262262;font:600 14px Poppins,sans-serif;text-align:left}.avb small{margin-left:auto;color:#55546b;font-weight:500;font-size:12px}.avo{position:fixed;inset:0;z-index:99999;background:#0008;display:flex;align-items:flex-end;justify-content:center;font-family:Poppins,sans-serif}.avo>div{background:#fff;width:100%;max-width:480px;max-height:88vh;overflow-y:auto;border-radius:22px 22px 0 0;padding:18px 16px 22px;color:#262262}";
st.textContent+=".avo h3{margin:0 0 2px}.avo .avbg{font-size:30px;font-weight:800;color:#f59e0b}.avo .avs{color:#f59e0b;letter-spacing:2px}.avo .avi{border-top:1px solid #f0eef8;padding:10px 0;font-size:13px}.avo .avi b{font-size:13px}.avo .avi small{color:#55546b}.avo .avi p{margin:4px 0 0}.avo .avf{margin-top:12px;padding-top:12px;border-top:2px solid #f0eef8}.avo .avk{display:flex;gap:6px;font-size:30px;margin:6px 0}.avo .avk span{cursor:pointer;color:#d8d6e6}.avo .avk span.on{color:#f59e0b}.avo textarea{width:100%;box-sizing:border-box;border:1.5px solid #e6e4f2;border-radius:12px;padding:11px;font:14px Poppins,sans-serif}";
st.textContent+=".avo .avg{width:100%;margin-top:10px;border:0;border-radius:14px;padding:13px;background:linear-gradient(135deg,#f16623,#ff9a62);color:#fff;font:700 14px Poppins,sans-serif}.avo .avc{width:100%;border:0;background:none;padding:10px;color:#55546b;font:500 13px Poppins,sans-serif}.avo .avm{font-size:12px;color:#b42318;margin-top:8px}.avo .avy{color:#1f9d55}";
document.head.appendChild(st);
function stars(n){var s="";for(var i=1;i<=5;i++)s+=i<=Math.round(n)?"★":"☆";return s}
function get(v){return fetch(SB+"/rest/v1/avis?vendeur_id=eq."+encodeURIComponent(v)+"&order=created_at.desc&limit=50&select=*",{headers:{apikey:KEY,Authorization:"Bearer "+KEY}}).then(function(r){return r.ok?r.json():[]}).catch(function(){return[]})}
function sum(r){if(!r.length)return{n:0,m:0};var t=0;r.forEach(function(x){t+=x.note});return{n:r.length,m:t/r.length}}
function label(s){return s.n?"⭐ "+s.m.toFixed(1)+(s.n>=3&&s.m>=4.5?" · 🏅 Vendeur de confiance":""):"⭐ Pas encore d'avis"}
function open(a,r){
var s=sum(r),me=ses()&&ses().user&&ses().user.id,o=document.createElement("div"),pick=0;o.className="avo";
var h='<div><h3>Avis sur '+esc(a.vendeur||"le vendeur")+'</h3>'+(s.n?'<div><span class="avbg">'+s.m.toFixed(1)+'</span> <span class="avs">'+stars(s.m)+'</span> <small>'+s.n+' avis</small></div>':'<p>Aucun avis pour le moment.</p>');
h+=r.map(function(x){return '<div class="avi"><b>'+esc(x.auteur_nom||"Utilisateur")+'</b> <span class="avs">'+stars(x.note)+'</span> <small>'+new Date(x.created_at).toLocaleDateString("fr-FR")+'</small>'+(x.commentaire?'<p>'+esc(x.commentaire)+'</p>':"")+'</div>'}).join("");
if(!me)h+='<div class="avf"><p>Connecte-toi pour laisser un avis.</p></div>';
else if(me!==a.user_id)h+='<div class="avf"><b>Ton avis</b><div class="avk">'+[1,2,3,4,5].map(function(i){return '<span data-n="'+i+'">★</span>'}).join("")+'</div><textarea id="av_c" rows="3" maxlength="300" placeholder="Comment s\'est passée la vente ? (facultatif)"></textarea><div class="avm" id="av_m"></div><button class="avg">Publier mon avis</button></div>';
h+='<button class="avc">Fermer</button></div>';
o.innerHTML=h;document.body.appendChild(o);
o.querySelector(".avc").onclick=function(){o.remove()};
var pk=o.querySelector(".avk");
if(pk)pk.onclick=function(e){var n=e.target.dataset.n;if(!n)return;pick=+n;[].forEach.call(pk.children,function(c){c.className=+c.dataset.n<=pick?"on":""})};
var g=o.querySelector(".avg");
if(g)g.onclick=function(){var m=$("av_m");if(!pick){m.textContent="Choisis une note de 1 à 5 étoiles.";return}
g.disabled=true;m.textContent="Envoi…";
var nom=(ses().user.user_metadata||{}).nom||"Utilisateur";
call("POST","avis",{vendeur_id:a.user_id,auteur_id:me,auteur_nom:nom,note:pick,commentaire:($("av_c").value.trim()||null)}).then(function(x){
if(x.ok){m.className="avm avy";m.textContent="Merci ! Ton avis est publié.";setTimeout(function(){o.remove();refresh()},900);return}
  g.disabled=false;m.className="avm";
m.textContent=x.status===409?"Tu as déjà laissé un avis pour ce vendeur.":(x.status===403||x.status===401)?"Pour laisser un avis, discute d'abord avec ce vendeur (bouton « Discuter »).":"Échec. Vérifie ta connexion."}).catch(function(){g.disabled=false;m.textContent="Échec. Vérifie ta connexion."})}}
function findArt(p){
var h=p.querySelector(".info h3"),w=p.querySelector(".buy .wa");if(!h||!w||!window.DT)return null;
var t=h.textContent,href=w.getAttribute("href")||"",all=DT.all();
for(var i=0;i<all.length;i++){if(all[i].titre===t&&href.indexOf("wa.me/"+all[i].tel)>-1)return all[i]}return null}
function refresh(){var b=document.querySelector("#panel .avb");if(b)b.remove();scan()}
var tm=0;
function scan(){
var p=$("panel");if(!p)return;var s=p.querySelector(".safe");
if(!s||p.querySelector(".avb"))return;var a=findArt(p);if(!a||!a.user_id)return;
var b=document.createElement("button");b.className="avb";b.textContent="⭐ Avis sur le vendeur";s.insertAdjacentElement("beforebegin",b);
get(a.user_id).then(function(r){b.textContent=label(sum(r));if(sum(r).n){var k=document.createElement("small");k.textContent=sum(r).n+" avis";b.appendChild(k)}b.onclick=function(){open(a,r)}})}
new MutationObserver(function(){clearTimeout(tm);tm=setTimeout(scan,50)}).observe(document.body,{childList:true,subtree:true});
})();
