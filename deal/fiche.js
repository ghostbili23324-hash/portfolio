(function(){
var D=window.DT;if(!D)return;
var ADMIN="22870745806";
var AT={"Mode":["Taille","Marque","Couleur"],"Chaussures":["Pointure","Marque","Couleur"],"Téléphones":["Marque et modèle","Stockage","Batterie"],"Électronique":["Marque et modèle","Garantie"],"Maison":["Dimensions","Matière","Couleur"],"Anime & goodies":["Univers / personnage","Édition"],"Livres & cours":["Matière / niveau","Auteur"],"Sport":["Marque","Taille"]};
var $=function(i){return document.getElementById(i)};
function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function money(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g," ")+" FCFA"}
function imgs(a){return a.photos&&a.photos.length?a.photos:(a.photo?[a.photo]:[])}
function ago(d){if(!d)return"";var n=Math.floor((Date.now()-new Date(d).getTime())/864e5);return n<1?"aujourd'hui":n===1?"hier":n<30?"il y a "+n+" jours":"il y a plus d'un mois"}
var SH='<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/></svg>';
function zoom(list,i){
var o=document.createElement("div");o.className="fs";
o.innerHTML='<button class="fsx">✕</button><span class="fsc"></span><div class="fsg">'+list.map(function(u){return '<div class="fss"><img alt="" src="'+esc(u)+'"></div>'}).join("")+'</div>';
document.body.appendChild(o);
var g=o.querySelector(".fsg"),c=o.querySelector(".fsc");
function upd(){c.textContent=(Math.round(g.scrollLeft/g.clientWidth)+1)+" / "+list.length}
g.scrollLeft=i*g.clientWidth;upd();g.addEventListener("scroll",upd);
o.querySelector(".fsx").onclick=function(){o.remove()};
var last=0;
  g.addEventListener("click",function(e){var im=e.target.closest("img");if(!im)return;
var t=Date.now();if(t-last<320){var r=im.getBoundingClientRect();im.style.transformOrigin=(e.clientX-r.left)+"px "+(e.clientY-r.top)+"px";im.classList.toggle("z")}last=t})}
function open(a){
var L=imgs(a),ic=a.icone||"🛍",at=a.attrs&&typeof a.attrs==="object"?Object.keys(a.attrs).filter(function(k){return a.attrs[k]}):[];
var sim=D.all().filter(function(x){return x!==a&&x.cat===a.cat}).slice(0,6);
var msg="Bonjour, je suis intéressé(e) par ton article sur DealTo : "+a.titre+" ("+money(a.prix)+"). Est-ce encore disponible ?";
var h='<div class="gw"><div class="gal" id="g_s">'+(L.length?L.map(function(u){return '<div class="sl"><img alt="" src="'+esc(u)+'" data-i="'+esc(ic)+'" onerror="this.outerHTML=this.getAttribute(\'data-i\')"></div>'}).join(""):'<div class="sl">'+esc(ic)+'</div>')+'</div>'+
'<button class="back" data-close>←</button><button class="heart'+(D.fav(a)?" on":"")+'" id="g_h" style="top:12px;right:58px;position:absolute">'+(D.fav(a)?"♥":"♡")+'</button><button class="heart" id="g_sh" style="top:12px;right:12px;position:absolute">'+SH+'</button>'+
(L.length>1?'<div class="dots" id="g_d">'+L.map(function(_,i){return "<i"+(i?"":' class="on"')+"></i>"}).join("")+'</div>':'')+
'<div class="glass"><div class="av">'+esc((a.vendeur||"D").charAt(0).toUpperCase())+'</div><div><b>'+esc(a.vendeur||"Vendeur DealTo")+(a.verifie?" ✓":"")+'</b><small>📍 '+esc(a.ville)+(a.quartier?", "+esc(a.quartier):"")+'</small></div></div></div>'+
'<div class="info fx"><div class="p">'+money(a.prix)+'</div><h3>'+esc(a.titre)+'</h3><span class="chip">'+esc(a.etat)+'</span><span class="chip">'+esc(a.cat)+'</span>'+(ago(a.created_at)?'<span class="chip">'+ago(a.created_at)+'</span>':'')+
  (at.length?'<h4>Caractéristiques</h4><div class="ops">'+at.map(function(k){return '<div class="op"><small>'+esc(k)+'</small><b>'+esc(a.attrs[k])+'</b></div>'}).join("")+'</div>':'')+
(a.description?'<h4>Description</h4><div class="d">'+esc(a.description)+'</div>':'')+
(sim.length?'<h4>Dans la même catégorie</h4><div class="sims">'+sim.map(function(x,i){return '<div class="sim" data-s="'+i+'"><div class="sp">'+(x.photo?'<img alt="" src="'+esc(x.photo)+'">':esc(x.icone||"🛍"))+'</div><b>'+money(x.prix)+'</b><small>'+esc(x.titre)+'</small></div>'}).join("")+'</div>':'')+
'<div class="safe">🛡 Rencontre-toi dans un lieu public et vérifie l\'article avant de payer.</div></div>'+
'<div class="buy"><div class="p">'+money(a.prix)+'</div><a class="wa" target="_blank" rel="noopener" href="https://wa.me/'+esc(a.tel)+'?text='+encodeURIComponent(msg)+'">Contacter sur WhatsApp</a></div>';
var p=$("panel");p.innerHTML=h;$("sheet").hidden=false;p.scrollTop=0;
var g=$("g_s");
g.addEventListener("scroll",function(){var d=$("g_d");if(!d)return;var k=Math.round(g.scrollLeft/g.clientWidth);Array.prototype.forEach.call(d.children,function(e,i){e.className=i===k?"on":""})});
Array.prototype.forEach.call(g.querySelectorAll("img"),function(im,i){im.onclick=function(){zoom(L,i)}});
$("g_h").onclick=function(){D.tog(a);D.render();var f=D.fav(a);this.className="heart"+(f?" on":"");this.textContent=f?"♥":"♡"};
$("g_sh").onclick=function(){var t="DealTo : "+a.titre+" à "+money(a.prix);if(navigator.share)navigator.share({title:"DealTo",text:t,url:location.href.split("#")[0]}).catch(function(){});else window.open("https://wa.me/?text="+encodeURIComponent(t+" "+location.href.split("#")[0]),"_blank")};
Array.prototype.forEach.call(p.querySelectorAll("[data-s]"),function(e){e.onclick=function(){open(sim[+e.getAttribute("data-s")])}})}
document.addEventListener("click",function(e){
  if(e.target.closest("[data-h]"))return;
var c=e.target.closest(".card");if(!c||$("sheet").contains(c))return;
var a=D.view()[+c.getAttribute("data-i")];if(!a)return;
e.stopPropagation();open(a)},true);
document.addEventListener("keydown",function(e){if(e.key==="Escape"){var f=document.querySelector(".fs");if(f)f.remove()}});
function draw(){var c=$("f_c"),d=$("f_at");if(!c||!d)return;
d.innerHTML=(AT[c.value]||[]).map(function(l){return '<label>'+esc(l)+' (facultatif)<input data-at="'+esc(l)+'" maxlength="40"></label>'}).join("")}
window.DTA=function(){var r={};Array.prototype.forEach.call(document.querySelectorAll("[data-at]"),function(i){var v=i.value.trim();if(v)r[i.getAttribute("data-at")]=v});return r};
new MutationObserver(function(){var c=$("f_c");if(c&&!$("f_at")){var d=document.createElement("div");d.id="f_at";c.closest("label").insertAdjacentElement("afterend",d);c.addEventListener("change",draw);draw()}}).observe($("panel"),{childList:true});
var of=window.fetch;
window.fetch=function(u,o){try{if(o&&o.method==="POST"&&/\/rest\/v1\/articles$/.test(String(u))){var b=JSON.parse(o.body);b.attrs=window.DTA();o=Object.assign({},o,{body:JSON.stringify(b)})}}catch(x){}return of.call(this,u,o)};
var st=document.createElement("style");
st.textContent=".gw{position:relative}.gal{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;aspect-ratio:1/1;background:#f3f1ff}.gal::-webkit-scrollbar{display:none}.sl{flex:none;width:100%;height:100%;scroll-snap-align:center;position:relative;display:grid;place-items:center;font-size:90px}.sl img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}"+
".dots{position:absolute;left:0;right:0;bottom:78px;display:flex;justify-content:center;gap:6px}.dots i{width:7px;height:7px;border-radius:99px;background:#fff9;transition:all .3s}.dots i.on{width:20px;background:#fff}"+
  ".glass{position:absolute;left:12px;right:12px;bottom:12px;display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:18px;background:#ffffff99;-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);border:1px solid #fff9;box-shadow:0 8px 24px #26226233}.glass b{display:block;font-size:14px}.glass small{font-size:12px;color:#33325a}"+
".fx h4{margin:16px 0 8px;font-size:14px;font-weight:700;color:#262262}.ops{display:flex;flex-wrap:wrap;gap:8px}.op{border:1.5px solid #262262;border-radius:14px;padding:7px 12px}.op small{display:block;font-size:11px;color:#55546b}.op b{font-size:14px}"+
".sims{display:flex;gap:10px;overflow-x:auto;padding-bottom:6px;scrollbar-width:none}.sim{flex:none;width:112px}.sp{aspect-ratio:1/1;border-radius:14px;overflow:hidden;background:#f3f1ff;display:grid;place-items:center;font-size:32px;position:relative}.sp img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.sim b{display:block;font-size:13px;margin-top:5px}.sim small{font-size:12px;color:#55546b;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"+
".fs{position:fixed;inset:0;z-index:60;background:#000;animation:fi .25s}.fsg{display:flex;height:100%;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none}.fss{flex:none;width:100%;height:100%;scroll-snap-align:center;display:grid;place-items:center;overflow:hidden}.fss img{max-width:100%;max-height:100%;transition:transform .3s}.fss img.z{transform:scale(2.4)}.fsx{position:absolute;top:14px;right:14px;z-index:2;width:42px;height:42px;border:0;border-radius:50%;background:#fff3;color:#fff;font-size:20px}.fsc{position:absolute;top:24px;left:16px;z-index:2;color:#fff;font-size:14px;font-weight:600}"+
".fx>*{animation:up .5s both}.fx>:nth-child(2){animation-delay:.05s}.fx>:nth-child(n+3){animation-delay:.1s}";
document.head.appendChild(st);
})();
