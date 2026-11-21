(function(){
var D=window.DT||{all:function(){return[]},view:function(){return[]}};
var ADMIN="22870745806",$=function(i){return document.getElementById(i)};
function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function money(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g," ")+" FCFA"}
function I(p){return '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+p+'</svg>'}
var nav=document.querySelector(".tabs"),plus=nav.querySelector(".plus"),pill=document.createElement("div"),bub=document.createElement("span");
pill.className="pill";bub.className="bub";pill.appendChild(bub);
Array.prototype.slice.call(nav.children).forEach(function(b){if(b!==plus)pill.appendChild(b)});
nav.insertBefore(pill,nav.firstChild);nav.appendChild(plus);plus.removeAttribute("data-t");
var held=null,last=null;
function place(b,st){if(!b)return;bub.style.left=b.offsetLeft+"px";bub.style.width=b.offsetWidth+"px";if(st){bub.classList.add("mv");setTimeout(function(){bub.classList.remove("mv")},230)}}
function sync(st){var b=held||pill.querySelector("button.on")||pill.querySelector("button");if(b!==last){place(b,st&&last);last=b}}
new MutationObserver(function(){sync(1)}).observe(pill,{attributes:true,subtree:true,attributeFilter:["class"]});
pill.addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;var t=b.getAttribute("data-t");held=(t==="cats"||t==="me")?b:null;setTimeout(function(){sync(1)},0)});
new MutationObserver(function(){if($("sheet").hidden&&held&&held.getAttribute("data-t")==="me"){held=null;sync(1)}}).observe($("sheet"),{attributes:true,attributeFilter:["hidden"]});
function init(){last=null;sync(0)}
  window.addEventListener("load",init);window.addEventListener("resize",init);setTimeout(init,50);
var T=[["sell","＋","Vendre un article"],["me","👤","Mes annonces"],["fav","♡","Mes favoris"],["share",I('<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>'),"Partager DealTo"],["help",I('<path d="M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-6.2A8 8 0 1 1 21 12z"/>'),"Aide WhatsApp"],["rep",I('<path d="M5 22V4M5 4h12l-2 4 2 4H5"/>'),"Signaler un problème"]];
var qm=document.createElement("div");qm.className="qm";
qm.innerHTML='<div class="qb"></div><div class="qp">'+T.map(function(t){return '<button class="qt" '+(/^(sell|me|fav)$/.test(t[0])?'data-t="'+t[0]+'"':'data-q="'+t[0]+'"')+'><span class="qi">'+t[1]+'</span><small>'+t[2]+'</small></button>'}).join("")+'</div>';
document.body.appendChild(qm);
function cm(){if(!qm.classList.contains("open"))return;qm.classList.add("closing");plus.classList.remove("open");document.body.classList.remove("qo");setTimeout(function(){qm.classList.remove("open","closing")},230)}
plus.addEventListener("click",function(){if(qm.classList.contains("open"))return cm();qm.classList.add("open");plus.classList.add("open");document.body.classList.add("qo")});
qm.addEventListener("click",function(e){
var q=e.target.closest("[data-q]");
if(q){var k=q.getAttribute("data-q"),u=location.href.split("#")[0];
if(k==="share"){var t="Découvre DealTo, le marché d'occasion du Togo.";if(navigator.share)navigator.share({title:"DealTo",text:t,url:u}).catch(function(){});else window.open("https://wa.me/?text="+encodeURIComponent(t+" "+u),"_blank")}
if(k==="help")window.open("https://wa.me/"+ADMIN+"?text="+encodeURIComponent("Bonjour, j'ai besoin d'aide sur DealTo."),"_blank");
      if(k==="rep")window.open("https://wa.me/"+ADMIN+"?text="+encodeURIComponent("Signalement DealTo : annonce ou comportement à signaler.\nLien de l'annonce ou nom du vendeur : "),"_blank")}
cm()});
document.addEventListener("keydown",function(e){if(e.key==="Escape")cm()});
var top=document.querySelector(".top"),av=document.createElement("button"),wk="";
av.className="avt";av.setAttribute("data-t","me");av.setAttribute("aria-label","Profil");top.appendChild(av);
function who(){var s,n="";try{s=JSON.parse(localStorage.getItem("dt_s"))}catch(e){}
if(s&&s.user&&s.user.user_metadata&&s.user.user_metadata.nom)n=s.user.user_metadata.nom.charAt(0).toUpperCase();
if(n!==wk||!av.firstChild){wk=n;av.textContent=n||"👤"}}
who();setInterval(who,2000);
var bn=document.createElement("div"),bi=0,bk="x";bn.className="bn";
document.querySelector(".sec").parentNode.insertBefore(bn,document.querySelector(".sec"));
function ban(){var a=D.all()[0],k=a?String(a.id):"";if(k===bk&&bn.firstChild)return;bk=k;bi=0;
var s=[];
if(a)s.push('<div class="bs"><small>À LA UNE</small><b>'+esc(a.titre)+'</b><em>'+money(a.prix)+'</em><button data-v="1">Voir l\'article</button>'+(a.photo?'<img alt="" src="'+esc(a.photo)+'">':'')+'</div>');
s.push('<div class="bs nf"><small>VENDRE EST GRATUIT</small><b>Publie ton article en 2 minutes</b><button data-t="sell">Vendre maintenant</button><span class="bi">🛍</span></div>');
s.push('<div class="bs nf"><small>TA BOUTIQUE ICI</small><b>Mets tes produits en avant sur DealTo</b><a target="_blank" rel="noopener" href="https://wa.me/'+ADMIN+'?text='+encodeURIComponent("Bonjour, je veux faire de la publicité sur DealTo.")+'">Nous écrire</a><span class="bi">✨</span></div>');
bn.innerHTML=s.join("")+'<div class="bd">'+s.map(function(){return "<i></i>"}).join("")+'</div>';go(0)}
  function go(i){var a=bn.querySelectorAll(".bs"),d=bn.querySelectorAll(".bd i");bi=i%a.length;Array.prototype.forEach.call(a,function(e,j){e.classList.toggle("on",j===bi)});Array.prototype.forEach.call(d,function(e,j){e.classList.toggle("on",j===bi)})}
setInterval(function(){if(!document.hidden&&!bn.matches(":active"))go(bi+1)},4500);
bn.addEventListener("click",function(e){if(!e.target.closest("[data-v]"))return;var a=D.all()[0],i=D.view().indexOf(a),c=document.querySelector('.card[data-i="'+i+'"]');if(c)c.click()});
new MutationObserver(ban).observe($("count"),{childList:true,characterData:true,subtree:true});ban();
var SEL=".card,.sim,.qt,.cat,.cta,.wa,.btn,.bs button";
document.addEventListener("pointerdown",function(e){var t=e.target.closest(SEL);if(!t)return;
var r=t.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
t.style.setProperty("--x",x*100+"%");t.style.setProperty("--y",y*100+"%");t.style.setProperty("--rx",((x-.5)*8)+"deg");t.style.setProperty("--ry",((.5-y)*8)+"deg");t.classList.add("pr");
if(t.matches(".cta,.wa,.btn,.bs button")){var s=document.createElement("span"),m=Math.max(r.width,r.height)*2;s.className="rp";s.style.cssText="width:"+m+"px;height:"+m+"px;left:"+(e.clientX-r.left-m/2)+"px;top:"+(e.clientY-r.top-m/2)+"px";t.appendChild(s);setTimeout(function(){s.remove()},650)}
var off=function(){t.classList.remove("pr");document.removeEventListener("pointerup",off,true);document.removeEventListener("pointercancel",off,true)};
document.addEventListener("pointerup",off,true);document.addEventListener("pointercancel",off,true)},true);
var st=document.createElement("style");
st.textContent=".tabs{bottom:calc(14px + env(safe-area-inset-bottom));width:calc(100% - 28px);max-width:440px;background:none;border:0;padding:0;gap:10px;align-items:center}body{padding-bottom:104px}"+
  ".pill{position:relative;flex:1;display:flex;background:#ffffffed;border-radius:32px;padding:6px;box-shadow:0 10px 30px #2622624d,0 0 0 1px #26226214}.pill button{position:relative;z-index:1;padding:8px 0 6px}"+
".bub{position:absolute;top:6px;bottom:6px;left:0;width:0;border-radius:26px;background:#e9e6ff;transition:left .5s cubic-bezier(.34,1.4,.5,1),width .5s,transform .23s}.bub.mv{transform:scale(1.2,.86)}"+
".tabs .plus{flex:none;width:60px;height:60px;border-radius:50%;background:#f16623;color:#fff;display:grid;place-items:center;padding:0;font-size:0;animation:pu 2.4s infinite}.tabs .plus i{margin:0;width:auto;height:auto;background:none;box-shadow:none;animation:none;color:#fff}.tabs .plus .ic{width:28px;height:28px;transition:transform .45s cubic-bezier(.34,1.56,.64,1)}.tabs .plus.open .ic{transform:rotate(135deg)}"+
".qm{position:fixed;inset:0;z-index:25;display:none}.qm.open{display:block}body.qo .tabs{z-index:26}.qb{position:absolute;inset:0;background:#14123a55;animation:fi .25s}"+
".qp{position:absolute;right:14px;bottom:calc(88px + env(safe-area-inset-bottom));width:min(330px,calc(100% - 28px));background:#ffffffef;border-radius:28px;padding:14px;display:grid;grid-template-columns:repeat(3,1fr);gap:10px;box-shadow:0 20px 50px #14123a55;transform-origin:calc(100% - 30px) 100%;animation:qin .5s cubic-bezier(.34,1.56,.64,1)}"+
"@keyframes qin{from{transform:scale(.2);opacity:0}to{transform:none;opacity:1}}@keyframes qo{to{transform:scale(.2);opacity:0}}@keyframes fo{to{opacity:0}}.qm.closing .qp{animation:qo .22s forwards}.qm.closing .qb{animation:fo .22s forwards}"+
  ".qt{border:0;background:#f3f1ff;border-radius:20px;padding:14px 4px 10px;display:flex;flex-direction:column;align-items:center;gap:6px;color:#262262;font:600 11.5px Poppins,sans-serif;animation:up .4s both;position:relative}.qt:nth-child(1){background:#f16623;color:#fff;animation-delay:.04s}.qt:nth-child(2){animation-delay:.08s}.qt:nth-child(3){animation-delay:.12s}.qt:nth-child(4){animation-delay:.16s}.qt:nth-child(5){animation-delay:.2s}.qt:nth-child(6){animation-delay:.24s}.qi .ic{width:26px;height:26px}.qt small{font-size:11.5px;line-height:1.2}"+
".avt{width:40px;height:40px;border-radius:50%;border:0;background:#262262;color:#fff;font-weight:800;font-size:16px;display:grid;place-items:center;flex:none}.avt .ic{width:20px;height:20px}.top{gap:10px}.top .loc{margin-left:auto}"+
".bn{position:relative;margin:38px 0 26px;height:132px;border-radius:24px;background:linear-gradient(120deg,#14123a,#262262 70%,#3d2fa0);color:#fff;box-shadow:0 12px 28px #26226233}.bs{position:absolute;inset:0;padding:16px 150px 14px 18px;opacity:0;transform:translateX(18px);transition:opacity .6s,transform .6s;pointer-events:none;display:flex;flex-direction:column;justify-content:center}.bs.nf{padding-right:90px}.bs.on{opacity:1;transform:none;pointer-events:auto}"+
".bs small{letter-spacing:2px;font-size:10px;font-weight:700;color:#ffb48a}.bs b{font-size:17px;line-height:1.2;margin:4px 0;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.bs em{font-style:normal;font-weight:800;color:#ffb48a}.bs button,.bs a{position:relative;overflow:hidden;align-self:flex-start;margin-top:6px;border:0;background:#f16623;color:#fff;font:700 12.5px Poppins,sans-serif;padding:8px 14px;border-radius:99px;text-decoration:none}"+
  ".bs img{position:absolute;right:14px;top:-28px;width:120px;height:152px;object-fit:cover;border-radius:18px;transform:rotate(6deg);box-shadow:0 14px 28px #0006;border:3px solid #fff}.bi{position:absolute;right:22px;top:34px;opacity:.25;font-size:64px}.bi .ic{width:64px;height:64px}"+
".bd{position:absolute;left:18px;bottom:-16px;display:flex;gap:5px}.bd i{width:6px;height:6px;border-radius:9px;background:#26226244;transition:all .3s}.bd i.on{width:18px;background:#f16623}"+
".card,.cta,.wa,.btn{position:relative}.cta,.wa,.btn{overflow:hidden}.pr{transform:perspective(700px) rotateX(var(--ry,0deg)) rotateY(var(--rx,0deg)) scale(.965)!important}.card.pr:after,.sim.pr:after,.qt.pr:after,.cat.pr:after{content:'';position:absolute;inset:0;border-radius:inherit;pointer-events:none;background:radial-gradient(circle at var(--x) var(--y),#26226244 0,#26226218 38%,transparent 65%)}"+
".rp{position:absolute;border-radius:50%;background:#ffffff66;transform:scale(0);animation:rp .6s ease-out forwards;pointer-events:none}@keyframes rp{to{transform:scale(1);opacity:0}}";
document.head.appendChild(st);
})();
