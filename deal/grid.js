(function(){
var s=document.createElement("style");
s.textContent=".cats{display:flex!important;gap:8px;overflow-x:auto!important;padding:18px 0 6px!important;scrollbar-width:none;-webkit-mask-image:linear-gradient(90deg,#000 86%,transparent);mask-image:linear-gradient(90deg,#000 86%,transparent)}.cats.end{-webkit-mask-image:none;mask-image:none}.cats::-webkit-scrollbar{display:none}"+
".cat{flex:none!important;width:68px!important;font-size:11px!important;line-height:1.15;text-align:center}.cat span{width:56px!important;height:56px!important;font-size:25px!important}.cat span .ic{width:26px;height:26px}"+
".cr{display:block;margin:14px auto 0;border:0;background:#fff;color:#262262;font-weight:700;font-size:14px;padding:11px 20px;border-radius:99px;box-shadow:0 6px 16px #2622621f;display:flex;align-items:center;gap:8px}.cr .ic{width:18px;height:18px}";
document.head.appendChild(s);
var c=document.getElementById("chips");
if(c){var ck=function(){c.classList.toggle("end",c.scrollLeft+c.clientWidth>=c.scrollWidth-6)};
c.addEventListener("scroll",ck,{passive:true});setTimeout(ck,300);
setTimeout(function(){if(c.scrollLeft>5||!c.scrollTo)return;c.scrollTo({left:90,behavior:"smooth"});setTimeout(function(){c.scrollTo({left:0,behavior:"smooth"})},1100)},4800)}
var g=document.getElementById("cpg");
if(g)new MutationObserver(function(){var e=g.querySelector(".ce");if(!e||e.querySelector(".cr"))return;
var b=e.querySelector("b");if(b)b.textContent="Aucun article publié";
var r=document.createElement("button");r.className="cr";r.textContent="← Retour";
r.onclick=function(){var x=document.querySelector(".cb");if(x)x.click()};e.appendChild(r)}).observe(g,{childList:true});
})();
