(function(){
var SB="https://tpstmxxkjcttrldxecxs.supabase.co";
var KEY="sb_publishable_E3wy3JgeLqrXf65eRuZYIw_B4ZKfK2z";
var ADMIN="22870745806";
var CATS=[["Mode","👕"],["Chaussures","👟"],["Téléphones","📱"],["Électronique","💻"],["Maison","🛋️"],["Anime & goodies","🎌"],["Livres & cours","📚"],["Sport","⚽"],["Autre","🛍️"]];
var VILLES=["Lomé","Kara","Sokodé","Atakpamé","Kpalimé","Dapaong","Autre ville"];
var S=null,files=[];
try{S=JSON.parse(localStorage.getItem("dt_s")||"null")}catch(e){}
var $=function(i){return document.getElementById(i)};
function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function show(h){$("panel").innerHTML=h;$("sheet").hidden=false;$("panel").scrollTop=0}
function save(s){S=s;try{s?localStorage.setItem("dt_s",JSON.stringify(s)):localStorage.removeItem("dt_s")}catch(e){}}
function sess(r){if(!r.access_token)return null;r.exp=Date.now()+r.expires_in*1000-60000;return r}
function fr(m){m=String(m||"");
if(/Invalid login/i.test(m))return "Email ou mot de passe incorrect.";
if(/already/i.test(m))return "Cet email a déjà un compte. Connecte-toi.";
if(/rate limit|too many/i.test(m))return "Trop d'essais. Réessaie dans quelques minutes.";
if(/password/i.test(m))return "Mot de passe trop faible (8 caractères min.).";
if(/valid email|invalid/i.test(m))return "Email invalide.";
return "Erreur : "+(m||"pas de réponse")}
function tel(v){v=String(v).replace(/\D/g,"");return v.length===8?"228"+v:v}
function auth(p,b){return fetch(SB+"/auth/v1/"+p,{method:"POST",headers:{apikey:KEY,"Content-Type":"application/json"},body:JSON.stringify(b)}).then(function(r){return r.json().then(function(j){if(!r.ok)throw new Error(j.msg||j.error_description||j.message||"x");return j})})}
function fresh(){
  if(!S)return Promise.reject(new Error("login"));
if(Date.now()<S.exp)return Promise.resolve();
return auth("token?grant_type=refresh_token",{refresh_token:S.refresh_token}).then(function(j){var s=sess(j);if(!s)throw 0;save(s)}).catch(function(){save(null);throw new Error("login")})}
function api(m,p,b,x){return fresh().then(function(){
var h={apikey:KEY,Authorization:"Bearer "+S.access_token,"Content-Type":"application/json"};
for(var k in x)h[k]=x[k];
return fetch(SB+"/rest/v1/"+p,{method:m,headers:h,body:b?JSON.stringify(b):undefined})}).then(function(r){
if(!r.ok)throw new Error("api");return r.status===204||r.status===201?null:r.json()})}
function msg(t,ok){var m=$("a_msg")||$("f_msg");if(m){m.textContent=t;m.className="msg"+(ok?" ok":"")}}
function nom(){return (S&&S.user&&S.user.user_metadata&&S.user.user_metadata.nom)||"toi"}
function authView(next,mode){
var up=mode==="up";
show('<div class="form"><button class="x" data-close>✕</button><h2>'+(up?"Créer un compte":"Connexion")+'</h2><p class="hint">'+(next==="sell"?"Connecte-toi pour vendre un article.":"Ton compte DealTo.")+'</p>'+
(up?'<label>Ton prénom<input id="a_nom" autocomplete="given-name"></label><label>Ton numéro WhatsApp<input id="a_tel" inputmode="tel" placeholder="+228 …"></label>':'')+
'<label>Email<input id="a_em" type="email" autocomplete="email"></label><label>Mot de passe (8 caractères min.)<input id="a_pw" type="password" autocomplete="'+(up?"new":"current")+'-password"></label>'+
'<div class="msg" id="a_msg"></div><button class="btn" id="a_go">'+(up?"Créer mon compte":"Me connecter")+'</button><button class="link" id="a_sw">'+(up?"J'ai déjà un compte":"Pas de compte ? S'inscrire")+'</button></div>');
$("a_sw").onclick=function(){authView(next,up?"in":"up")};
$("a_go").onclick=function(){
  var b=$("a_go"),em=$("a_em").value.trim(),pw=$("a_pw").value,n=up?$("a_nom").value.trim():"",t=up?tel($("a_tel").value):"";
if(!em||pw.length<8)return msg("Email et mot de passe (8 caractères min.) requis.");
if(up&&(n.length<2||t.length<10))return msg("Indique ton prénom et ton numéro WhatsApp.");
b.disabled=true;msg("");
auth(up?"signup":"token?grant_type=password",up?{email:em,password:pw,data:{nom:n,tel:t}}:{email:em,password:pw}).then(function(j){
var s=sess(j);
if(!s){msg("Compte créé. Vérifie ton email pour confirmer, puis connecte-toi.",1);b.disabled=false;return}
save(s);
if(up)api("POST","profiles",{id:s.user.id,nom:n,tel:t},{Prefer:"resolution=merge-duplicates,return=minimal"}).catch(function(){});
next==="sell"?sellView():meView()
}).catch(function(e){msg(fr(e.message));b.disabled=false})}}
function sellView(){
files=[];var md=(S.user.user_metadata||{});
show('<div class="form"><button class="x" data-close>✕</button><h2>Vendre un article</h2><p class="hint">Ajoute 1 à 3 photos. On vérifie ton annonce avant de la publier.</p>'+
'<label class="ph2">📷 Ajouter des photos<input id="f_ph" type="file" accept="image/*" multiple></label><div class="th" id="f_th"></div>'+
'<label>Titre<input id="f_t" maxlength="80" placeholder="Ex : sac à dos noir"></label>'+
'<label>Description<textarea id="f_d" rows="3" maxlength="600" placeholder="Taille, couleur, défauts…"></textarea></label>'+
'<label>Prix (FCFA)<input id="f_p" inputmode="numeric" placeholder="5000"></label>'+
'<label>Catégorie<select id="f_c">'+CATS.map(function(c){return "<option>"+esc(c[0])+"</option>"}).join("")+'</select></label>'+
'<label>État<select id="f_e"><option>Neuf</option><option>Très bon état</option><option>Bon état</option><option>Usé mais fonctionne</option></select></label>'+
     '<label>Ville<select id="f_v">'+VILLES.map(function(v){return "<option>"+esc(v)+"</option>"}).join("")+'</select></label>'+
'<label>Quartier<input id="f_q" placeholder="Ex : Adidogomé"></label>'+
'<label>Ton numéro WhatsApp<input id="f_w" inputmode="tel" value="'+esc(md.tel||"")+'" placeholder="+228 …"></label>'+
'<div class="msg" id="f_msg"></div><button class="btn" id="f_go">Publier mon annonce</button></div>');
$("f_ph").onchange=function(){files=Array.prototype.slice.call(this.files,0,3);
$("f_th").innerHTML=files.map(function(f){return '<img alt="" src="'+URL.createObjectURL(f)+'">'}).join("")};
$("f_go").onclick=publish}
function shrink(f){return new Promise(function(ok,ko){var im=new Image(),u=URL.createObjectURL(f);
im.onload=function(){var k=Math.min(1,1000/Math.max(im.width,im.height)),c=document.createElement("canvas");
c.width=Math.round(im.width*k);c.height=Math.round(im.height*k);c.getContext("2d").drawImage(im,0,0,c.width,c.height);
URL.revokeObjectURL(u);c.toBlob(function(b){b?ok(b):ko()},"image/jpeg",.8)};
im.onerror=ko;im.src=u})}
function upl(b){var p=S.user.id+"/"+Date.now()+"-"+Math.random().toString(36).slice(2,8)+".jpg";
return fetch(SB+"/storage/v1/object/photos/"+p,{method:"POST",headers:{apikey:KEY,Authorization:"Bearer "+S.access_token,"Content-Type":"image/jpeg"},body:b}).then(function(r){
if(!r.ok)throw new Error("photo");return SB+"/storage/v1/object/public/photos/"+p})}
function publish(){
var t=$("f_t").value.trim(),pr=$("f_p").value.replace(/\s/g,""),w=tel($("f_w").value),b=$("f_go");
if(!files.length)return msg("Ajoute au moins une photo.");
if(t.length<2)return msg("Donne un titre à ton article.");
if(!/^\d{1,8}$/.test(pr))return msg("Indique un prix en chiffres (ex : 5000).");
if(w.length<10)return msg("Indique ton numéro WhatsApp.");
b.disabled=true;b.textContent="Envoi en cours…";msg("");
  var ic=CATS.filter(function(c){return c[0]===$("f_c").value})[0][1],urls=[];
fresh().then(function(){return files.reduce(function(p,f){return p.then(function(){return shrink(f).then(upl).then(function(u){urls.push(u)})})},Promise.resolve())}).then(function(){
return api("POST","articles",{titre:t,description:$("f_d").value.trim(),prix:+pr,cat:$("f_c").value,etat:$("f_e").value,ville:$("f_v").value,quartier:$("f_q").value.trim(),tel:w,photo:urls[0],photos:urls,icone:ic,vendeur:nom()},{Prefer:"return=minimal"})}).then(function(){
show('<div class="me"><button class="x" data-close>✕</button><h2>Annonce envoyée ✅</h2><p class="hint">Elle apparaîtra sur DealTo dès qu\'on l\'aura vérifiée.</p>'+
'<a class="wa" target="_blank" rel="noopener" href="https://wa.me/'+ADMIN+'?text='+encodeURIComponent("Bonjour, je viens de publier « "+t+" » sur DealTo. Merci de la valider.")+'">Prévenir l\'équipe sur WhatsApp</a>'+
'<button class="btn" id="m_my">Voir mes annonces</button></div>');$("m_my").onclick=meView
}).catch(function(e){b.disabled=false;b.textContent="Publier mon annonce";
if(e.message==="login")return authView("sell","in");
msg("Échec de l'envoi. Vérifie ta connexion et réessaie.")})}
function meView(){
show('<div class="me"><button class="x" data-close>✕</button><h2>Bonjour '+esc(nom())+' 👋</h2><p class="hint">'+esc(S.user.email)+'</p>'+
'<button class="btn" id="m_sell">＋ Vendre un article</button><h3>Mes annonces</h3><div id="m_list">Chargement…</div>'+
'<a class="wa" target="_blank" rel="noopener" href="https://wa.me/'+ADMIN+'?text='+encodeURIComponent("Bonjour, j'ai une question sur DealTo.")+'">Une question ? Écris-nous</a>'+
'<button class="link" id="m_out">Se déconnecter</button></div>');
$("m_sell").onclick=sellView;
$("m_out").onclick=function(){save(null);$("sheet").hidden=true};
  api("GET","articles?select=id,titre,prix,photo,photos,publie&user_id=eq."+S.user.id+"&order=created_at.desc").then(function(r){
$("m_list").innerHTML=r.length?r.map(function(a){return '<div class="my"><img alt="" src="'+esc(a.photo)+'"><div><b>'+esc(a.titre)+'</b><small>'+esc(a.prix)+' FCFA</small></div><span class="st'+(a.publie?" on":"")+'">'+(a.publie?"En ligne":"En attente")+'</span><button data-del="'+esc(a.id)+'" aria-label="Supprimer">🗑️</button></div>'}).join(""):'<p class="hint">Aucune annonce pour le moment.</p>';
Array.prototype.forEach.call($("m_list").querySelectorAll("[data-del]"),function(x,i){x.onclick=function(){
if(!confirm("Supprimer cette annonce ?"))return;
var a=r[i],ps=(a.photos||[]).map(function(u){return u.split("/public/photos/")[1]}).filter(Boolean);
api("DELETE","articles?id=eq."+a.id).then(function(){
if(ps.length)fetch(SB+"/storage/v1/object/photos",{method:"DELETE",headers:{apikey:KEY,Authorization:"Bearer "+S.access_token,"Content-Type":"application/json"},body:JSON.stringify({prefixes:ps})}).catch(function(){});
meView()}).catch(function(){alert("Suppression impossible. Réessaie.")})}})
}).catch(function(e){if(e.message==="login")return authView("me","in");$("m_list").textContent="Chargement impossible."})}
document.addEventListener("click",function(e){
var t=e.target.closest("[data-t]");if(!t)return;
var k=t.getAttribute("data-t");if(k!=="sell"&&k!=="me")return;
e.stopPropagation();
if(!S)return authView(k,"up");
k==="sell"?sellView():meView()},true);
var st=document.createElement("style");
  st.textContent=".btn{display:block;width:100%;margin-top:16px;padding:14px;border:0;border-radius:14px;background:#f16623;color:#fff;font:700 16px Poppins,sans-serif}.btn:disabled{opacity:.6}.link{display:block;margin:12px auto 0;background:none;border:0;color:#262262;font:600 14px Poppins,sans-serif;text-decoration:underline}.msg{margin-top:10px;font-size:14px;color:#c0392b;font-weight:600}.msg.ok{color:#1e8449}.ph2{padding:16px;border:2px dashed #f16623;border-radius:14px;text-align:center;color:#f16623;font-weight:700}.ph2 input{display:none}.th{display:flex;gap:8px;margin-top:8px}.th img{width:84px;height:84px;object-fit:cover;border-radius:12px}.my{display:flex;gap:10px;align-items:center;padding:10px 0;border-bottom:1px solid #eee}.my img{width:56px;height:56px;object-fit:cover;border-radius:10px;background:#f3f1ff}.my div{flex:1;min-width:0}.my b{display:block;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.my small{font-size:12px;color:#55546b}.st{font-size:11px;font-weight:700;padding:3px 8px;border-radius:8px;background:#fff1e8;color:#f16623}.st.on{background:#e9f8ef;color:#1e8449}.my button{border:0;background:none;font-size:20px}";
document.head.appendChild(st);
})();
