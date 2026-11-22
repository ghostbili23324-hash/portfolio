(function(){
var $=function(i){return document.getElementById(i)},B=document.body;
var cp=document.createElement("div");cp.className="cp";cp.hidden=true;
cp.innerHTML='<div class="ch"><button class="cb" aria-label="Retour">←</button><div><h2 id="cpt"></h2><small id="cpc"></small></div></div><div class="grid cg" id="cpg"></div>';
B.appendChild(cp);
var skip=0,open=0;
function chip(c){var b=document.querySelector('.cat[data-c="'+c+'"]');if(b){skip=1;b.click();skip=0}}
function sync(){if(!open)return;var g=$("grid");$("cpt").textContent=$("stitle").textContent;$("cpc").textContent=$("count").textContent;
if(g.querySelector(".empty")){var ic=document.querySelector(".cat.on span");
$("cpg").innerHTML='<div class="ce"><div class="ci">'+(ic?ic.innerHTML:"")+'</div><b>Aucun article</b><p>Il n\'y a pas encore d\'annonce dans cette catégorie. Sois le premier à vendre !</p><button class="cta" data-t="sell">Publier un article</button></div>'}
else $("cpg").innerHTML=g.innerHTML}
function show(){open=1;cp.hidden=false;B.classList.add("cpo");try{history.pushState({cp:1},"")}catch(e){}sync();cp.scrollTop=0;var c=document.querySelector('.pill [data-t="cats"]');if(c)c.click();cur()}
function hide(){if(!open)return;open=0;cp.hidden=true;B.classList.remove("cpo");cur()}
document.addEventListener("click",function(e){var b=e.target.closest(".cat");if(b&&!skip&&b.getAttribute("data-c")!=="Tout")show()});
cp.querySelector(".cb").onclick=function(){back()};
function home(){var h=document.querySelector('.pill [data-t="home"]');if(h)h.click();else chip("Tout")}
function back(){if(!open)return;hide();home();try{history.back()}catch(e){}}
addEventListener("popstate",function(){if(open){hide();home()}});
  document.addEventListener("click",function(e){var t=e.target.closest("[data-t]");if(!t||!open)return;var k=t.getAttribute("data-t");
if(k==="home"||k==="fav"){hide();chip("Tout")}},true);
new MutationObserver(sync).observe($("grid"),{childList:true});
new MutationObserver(sync).observe($("count"),{childList:true,characterData:true,subtree:true});
function cur(){var p=document.querySelector(".pill");if(!p)return;var sh=$("sheet"),t=null;
if(open)t="cats";else if(!sh.hidden&&sh.querySelector(".me,#a_go,#f_go"))t="me";
var bs=p.querySelectorAll("button");Array.prototype.forEach.call(bs,function(b){
var on=t?b.getAttribute("data-t")===t:b.classList.contains("on");
if(b.classList.contains("cur")!==on)b.classList.toggle("cur",on)})}
var p=document.querySelector(".pill");if(p){new MutationObserver(cur).observe(p,{attributes:true,subtree:true,attributeFilter:["class"]});p.addEventListener("click",function(){setTimeout(cur,0);setTimeout(cur,400)})}
new MutationObserver(cur).observe($("sheet"),{attributes:true,attributeFilter:["hidden"]});
setTimeout(cur,100);
var s=document.createElement("style");
s.textContent=".cp{position:fixed;inset:0;z-index:12;background:#f7f6ff;overflow-y:auto;padding:0 16px 130px;animation:cin .32s cubic-bezier(.2,.9,.3,1)}.cp[hidden]{display:none}body.cpo{overflow:hidden}"+
"@keyframes cin{from{transform:translateX(46px);opacity:0}}"+
".ch{position:sticky;top:0;z-index:2;display:flex;align-items:center;gap:12px;margin:0 -16px 14px;padding:14px 16px;background:#f7f6ffee;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}"+
".cb{flex:none;width:42px;height:42px;border:0;border-radius:50%;background:#fff;color:#262262;display:grid;place-items:center;box-shadow:0 4px 12px #2622621f}.cb .ic{width:20px;height:20px}"+
  ".ch h2{margin:0;font-size:21px;font-weight:800;color:#262262}.ch small{color:#6b6a7d;font-weight:600}"+
".ce{grid-column:1/-1;text-align:center;padding:50px 18px}.ci{width:96px;height:96px;margin:0 auto 18px;border-radius:30px;background:#fff1e8;display:grid;place-items:center;font-size:44px;color:#f16623;box-shadow:0 14px 30px #f1662333;animation:fl2 3s ease-in-out infinite}.ci .ic{width:44px;height:44px}"+
".ce b{display:block;font-size:20px;color:#262262;margin-bottom:6px}.ce p{margin:0 auto 20px;color:#6b6a7d;font-size:14px;max-width:260px}.ce .cta{background:#f16623!important;color:#fff!important;box-shadow:0 10px 22px #f1662355!important}"+
".cat span{transition:transform .35s cubic-bezier(.34,1.56,.64,1),background .25s,box-shadow .25s}.cat.on span{background:linear-gradient(135deg,#f16623,#ff9a62)!important;color:#fff;box-shadow:0 10px 20px #f1662366!important;transform:translateY(-3px) scale(1.07)}.cat.on{color:#f16623!important}"+
".pill button i{transition:transform .35s cubic-bezier(.34,1.56,.64,1),filter .3s}.pill button.cur{color:#f16623!important;font-weight:800}.pill button.cur i{transform:translateY(-3px) scale(1.16);filter:drop-shadow(0 5px 5px #f1662373)}.pill button.cur svg{fill:#f1662333}";
document.head.appendChild(s);
})();
