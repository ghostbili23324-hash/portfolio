(function(){
var ADMIN="22870745806",PAY="70 74 58 06",NOM="ATSOU Kodjo";
var PLANS=[["3 jours",300],["7 jours",500],["15 jours",900]];
var $=function(i){return document.getElementById(i)};
function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function on(a){return !!(a&&a.boost_until&&new Date(a.boost_until).getTime()>Date.now())}
var f0=window.fetch;
window.fetch=function(u,o){var p=f0.apply(this,arguments);
if(typeof u==="string"&&u.indexOf("/rest/v1/articles?select=*&publie=eq.true")>-1&&(!o||!o.method||o.method==="GET"))
return p.then(function(r){return r.clone().json().then(function(rows){if(!Array.isArray(rows))return r;
rows=rows.filter(function(x){return on(x)}).concat(rows.filter(function(x){return !on(x)}));
return new Response(JSON.stringify(rows),{status:200,headers:{"Content-Type":"application/json"}})}).catch(function(){return r})});
return p};
function mark(box){var D=window.DT;if(!D)return;var v=D.view();
Array.prototype.forEach.call(box.querySelectorAll(".card"),function(c){var a=v[+c.getAttribute("data-i")],ph=c.querySelector(".ph");
if(!ph||ph.querySelector(".bst")||!on(a))return;var s=document.createElement("span");s.className="bst";s.textContent="🚀 Boosté";ph.appendChild(s)})}
["grid","cpg"].forEach(function(id){var b=$(id);if(b)new MutationObserver(function(){mark(b)}).observe(b,{childList:true})});
var m=document.createElement("div");m.className="bm";m.hidden=true;document.body.appendChild(m);
function open(id,t){var k=1;
function draw(){var pl=PLANS[k],txt="Bonjour, je veux BOOSTER mon annonce DealTo.\nAnnonce : "+t+"\nRéf : "+id+"\nOffre : "+pl[0]+" – "+pl[1]+" FCFA\nJe t'envoie la preuve de paiement Mobile Money.";
m.innerHTML='<div class="bk"></div><div class="bp"><button class="bx" aria-label="Fermer">✕</button><h3>Booster mon annonce</h3><p class="bt">« '+esc(t)+' »</p>'+
'<div class="bo3">'+PLANS.map(function(p,i){return '<button class="pl'+(i===k?' on':'')+'" data-k="'+i+'"><b>'+p[0]+'</b><span>'+p[1]+' FCFA</span></button>'}).join("")+'</div>'+
'<ul class="bl"><li>Ton annonce passe <b>À LA UNE</b> et en haut de la liste</li><li>Badge « 🚀 Boosté » bien visible</li></ul>'+
'<ol class="bs3"><li>Envoie <b>'+pl[1]+' FCFA</b> par Mobile Money au <b>'+PAY+'</b> ('+NOM+')</li><li>Appuie sur le bouton ci-dessous et envoie la capture du paiement</li><li>C\'est activé en quelques minutes</li></ol>'+
'<a class="wa bgo" target="_blank" rel="noopener" href="https://wa.me/'+ADMIN+'?text='+encodeURIComponent(txt)+'">J\'ai payé, envoyer la preuve</a></div>'}
draw();m.hidden=false;
m.onclick=function(e){if(e.target.closest(".bk,.bx")){m.hidden=true;return}var b=e.target.closest(".pl");if(b){k=+b.getAttribute("data-k");draw()}}}
var pn=$("panel");
if(pn)new MutationObserver(function(){Array.prototype.forEach.call(pn.querySelectorAll(".my"),function(r){
if(r.querySelector(".bo")||!r.querySelector(".st.on"))return;var d=r.querySelector("[data-del]");if(!d)return;
var b=document.createElement("button");b.className="bo";b.textContent="🚀 Booster cette annonce";
  b.onclick=function(e){e.stopPropagation();open(d.getAttribute("data-del"),(r.querySelector("b")||{}).textContent||"")};r.appendChild(b)})}).observe(pn,{childList:true,subtree:true});
var s=document.createElement("style");
s.textContent=".bst{position:absolute;left:8px;bottom:8px;z-index:2;background:linear-gradient(135deg,#f16623,#ff9a62);color:#fff;font-size:11px;font-weight:800;padding:4px 9px;border-radius:99px;box-shadow:0 4px 10px #f1662366}"+
".my{flex-wrap:wrap}.bo{flex:1 0 100%;order:9;margin-top:8px;border:0;border-radius:12px;padding:10px;background:linear-gradient(135deg,#f16623,#ff9a62);color:#fff;font:700 13px Poppins,sans-serif;box-shadow:0 6px 14px #f1662344}"+
".bm{position:fixed;inset:0;z-index:50;display:flex;align-items:flex-end;justify-content:center}.bm[hidden]{display:none}.bk{position:absolute;inset:0;background:#14123a88;animation:fi .25s}"+
".bp{position:relative;width:100%;max-width:480px;background:#fff;border-radius:26px 26px 0 0;padding:22px 18px calc(22px + env(safe-area-inset-bottom));animation:bup .35s cubic-bezier(.2,.9,.3,1);max-height:92vh;overflow-y:auto}@keyframes bup{from{transform:translateY(100%)}}"+
".bx{position:absolute;right:14px;top:14px;width:36px;height:36px;border:0;border-radius:50%;background:#f3f1ff;color:#262262}.bp h3{margin:0 40px 2px 0;font-size:20px;color:#262262}.bt{margin:0 0 14px;color:#6b6a7d;font-size:13px}"+
  ".bo3{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.pl{border:2px solid #e6e4ee;background:#fff;border-radius:16px;padding:12px 4px;display:flex;flex-direction:column;gap:2px;align-items:center;color:#262262;transition:all .25s}.pl b{font-size:14px}.pl span{font-size:13px;font-weight:700;color:#f16623}.pl.on{border-color:#f16623;background:#fff4ec;box-shadow:0 8px 18px #f1662340;transform:translateY(-2px)}"+
".bl,.bs3{margin:14px 0 0;padding-left:20px;font-size:13.5px;color:#333;line-height:1.5}.bs3 li{margin-bottom:4px}.bgo{display:block;text-align:center;margin-top:16px;background:#25d366!important;color:#fff!important;padding:14px;border-radius:99px;font-weight:800;text-decoration:none;box-shadow:0 8px 18px #25d36655!important}";
document.head.appendChild(s);
})();
