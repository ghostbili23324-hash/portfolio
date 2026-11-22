(function(){
var D=window.DT,$=function(i){return document.getElementById(i)};
var EX=[["Beauté","💄"],["Auto & moto","🚗"],["Bébé & enfants","🧸"],["Jeux vidéo","🎮"],["Musique","🎸"],["Bricolage","🔧"],["Animaux","🐾"],["Alimentation","🍎"]];
var hid=EX.map(function(e){return'.cat[data-c="'+e[0]+'"]'}).join(",");
var s=document.createElement("style");
s.textContent=hid+"{display:none!important}.cats{display:flex!important;gap:8px;overflow-x:auto!important;padding:18px 0 6px!important;scrollbar-width:none;overscroll-behavior-x:contain}.cats::-webkit-scrollbar{display:none}"+
".cat{flex:none!important;width:68px!important;font-size:11px!important;line-height:1.15;text-align:center}.cat span{width:56px!important;height:56px!important;font-size:25px!important}.cat span .ic{width:26px;height:26px}.cat.pr{transform:none!important}.cat.pr:after,.cat.pr:before{display:none!important}"+
".cr{margin:14px auto 0;border:0;background:#fff;color:#262262;font-weight:700;font-size:14px;padding:11px 20px;border-radius:99px;box-shadow:0 6px 16px #2622621f;display:flex;align-items:center;gap:8px}.cr .ic{width:18px;height:18px}"+
".cp:not(.dom) .cx{display:none}.cp.dom #cpg .ce{display:none}.dh{margin:0 0 14px;color:#6b6a7d;font-size:14px}.dg{display:grid;grid-template-columns:1fr 1fr;gap:12px}"+
  ".dt{border:0;background:#fff;border-radius:22px;padding:16px;text-align:left;display:flex;flex-direction:column;gap:4px;box-shadow:0 8px 20px #2622621a;animation:dti .45s both;transition:transform .2s}.dt:active{transform:scale(.96)}.dt span{width:48px;height:48px;border-radius:16px;background:#fff1e8;display:grid;place-items:center;font-size:26px;margin-bottom:6px}.dt b{font-size:15px;color:#262262}.dt small{font-size:12px;color:#6b6a7d;font-weight:600}@keyframes dti{from{opacity:0;transform:translateY(14px)}}";
document.head.appendChild(s);
var c=$("chips");
if(c)setTimeout(function(){if(c.scrollLeft>5||!c.scrollTo)return;c.scrollTo({left:90,behavior:"smooth"});setTimeout(function(){c.scrollTo({left:0,behavior:"smooth"})},1100)},4800);
var cp=document.querySelector(".cp"),g=$("cpg");if(!cp||!g||!D)return;
var x=document.createElement("div");x.className="cx";cp.insertBefore(x,g);
function tiles(){var a=D.all();x.innerHTML='<p class="dh">Choisis un domaine</p><div class="dg">'+EX.map(function(e,i){
var n=a.filter(function(r){return r.cat===e[0]}).length;
return'<button class="dt" data-n="'+e[0]+'" style="animation-delay:'+i*70+'ms"><span>'+e[1]+'</span><b>'+e[0]+'</b><small>'+(n?n+" article"+(n>1?"s":""):"Aucun article")+"</small></button>"}).join("")+"</div>"}
function ttl(){if(!cp.classList.contains("dom"))return;var t=$("cpt"),k=$("cpc");if(t.textContent!=="Autres domaines")t.textContent="Autres domaines";if(k.textContent!==EX.length+" domaines")k.textContent=EX.length+" domaines"}
function pick(n){var b=document.querySelector('.cat[data-c="'+n+'"]');if(!b)return;cp.classList.remove("dom");cp.setAttribute("data-sub","1");b.click()}
document.addEventListener("click",function(e){var b=e.target.closest('.cat[data-c="Autre"]');if(!b)return;
cp.classList.add("dom");cp.removeAttribute("data-sub");tiles();ttl();cp.scrollTop=0});
x.addEventListener("click",function(e){var t=e.target.closest(".dt");if(t)pick(t.getAttribute("data-n"))});
cp.addEventListener("click",function(e){if(!e.target.closest(".cb")||!cp.hasAttribute("data-sub"))return;
e.stopPropagation();cp.removeAttribute("data-sub");var b=document.querySelector('.cat[data-c="Autre"]');if(b)b.click()},true);
new MutationObserver(ttl).observe($("cpt"),{childList:true,characterData:true,subtree:true});
new MutationObserver(function(){if(cp.classList.contains("dom"))tiles()}).observe($("grid"),{childList:true});
new MutationObserver(function(){if(cp.hidden){cp.classList.remove("dom");cp.removeAttribute("data-sub")}}).observe(cp,{attributes:true,attributeFilter:["hidden"]});
new MutationObserver(function(){var e=g.querySelector(".ce");if(!e||e.querySelector(".cr"))return;
var b=e.querySelector("b");if(b)b.textContent="Aucun article publié";
var r=document.createElement("button");r.className="cr";r.textContent="← Retour";
r.onclick=function(){var z=document.querySelector(".cb");if(z)z.click()};e.appendChild(r)}).observe(g,{childList:true});
})();
