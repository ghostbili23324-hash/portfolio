(function(){
var $=function(i){return document.getElementById(i)},P=$("panel");
function I(p){return '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+p+'</svg>'}
var IC={a_nom:I('<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>'),a_tel:I('<rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18h2"/>'),a_em:I('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'),eye:I('<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>'),off:I('<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/><path d="M3 3l18 18"/>')};
var S=[["indigo","📍","ACHÈTE PRÈS DE TOI","Des articles d'occasion à Lomé, Kara, Sokodé…",["zoro","bouteille","cahier"]],
["orange","📷","VENDS EN 2 MINUTES","Une photo, un prix, et ton article est en ligne.",["sweat","naruto","sac"]],
["teal","🛡","RENCONTRE EN LIEU PUBLIC","Vérifie l'article avant de payer.",["cahier","sac","zoro"]],
["plum","✓","ANNONCES CONTRÔLÉES","On valide chaque annonce avant sa publication.",["naruto","bouteille","sweat"]]];
var au=document.createElement("div");au.className="au";
au.innerHTML='<div class="as">'+S.map(function(s,i){return '<div class="sl2 '+s[0]+(i?"":" on")+'"><span class="pc a" style="background-image:url(../campus/'+s[4][0]+'.jpg)"></span><span class="pc b" style="background-image:url(../campus/'+s[4][1]+'.jpg)"></span><span class="pc c" style="background-image:url(../campus/'+s[4][2]+'.jpg)"></span><div class="ac"><span class="ai">'+s[1]+'</span><small>'+s[2]+'</small><p>'+s[3]+'</p></div></div>'}).join("")+'</div><div class="alg">Deal<span>To</span></div><div class="ad">'+S.map(function(_,i){return "<i"+(i?"":' class="on"')+"></i>"}).join("")+'</div><div class="aw"><div class="gc"></div></div>';
  document.body.appendChild(au);
var gc=au.querySelector(".gc"),k=0;
function go(n){k=n%S.length;Array.prototype.forEach.call(au.querySelectorAll(".sl2"),function(e,i){e.classList.toggle("on",i===k)});Array.prototype.forEach.call(au.querySelectorAll(".ad i"),function(e,i){e.classList.toggle("on",i===k)})}
setInterval(function(){if(au.classList.contains("on")&&!document.hidden)go(k+1)},4000);
function fx(f){
Array.prototype.forEach.call(f.querySelectorAll("input"),function(inp){var l=inp.closest("label");if(!l)return;l.classList.add("gl");
if(inp.id==="a_pw"){var b=document.createElement("button");b.type="button";b.className="eye";b.innerHTML=IC.eye;b.onclick=function(){var s=inp.type==="password";inp.type=s?"text":"password";b.innerHTML=s?IC.off:IC.eye};l.appendChild(b)}
else if(IC[inp.id]){var s=document.createElement("span");s.className="eye";s.innerHTML=IC[inp.id];l.appendChild(s)}})}
new MutationObserver(function(){
if(P.querySelector("#a_go")){var f=P.querySelector(".form");gc.innerHTML="";gc.appendChild(f);fx(f);au.classList.add("on");au.scrollTop=0;$("sheet").hidden=true}
else if(au.classList.contains("on")&&P.children.length){au.classList.remove("on");gc.innerHTML=""}
}).observe(P,{childList:true});
au.addEventListener("click",function(e){if(e.target.closest("[data-close]")){au.classList.remove("on");gc.innerHTML=""}});
var st=document.createElement("style");
st.textContent=".au{position:fixed;inset:0;z-index:40;display:none;overflow-y:auto;background:#14123a}.au.on{display:block;animation:fi .35s}.as{position:fixed;inset:0}"+
  document.body.appendChild(au);
var gc=au.querySelector(".gc"),k=0;
function go(n){k=n%S.length;Array.prototype.forEach.call(au.querySelectorAll(".sl2"),function(e,i){e.classList.toggle("on",i===k)});Array.prototype.forEach.call(au.querySelectorAll(".ad i"),function(e,i){e.classList.toggle("on",i===k)})}
setInterval(function(){if(au.classList.contains("on")&&!document.hidden)go(k+1)},4000);
function fx(f){
Array.prototype.forEach.call(f.querySelectorAll("input"),function(inp){var l=inp.closest("label");if(!l)return;l.classList.add("gl");
if(inp.id==="a_pw"){var b=document.createElement("button");b.type="button";b.className="eye";b.innerHTML=IC.eye;b.onclick=function(){var s=inp.type==="password";inp.type=s?"text":"password";b.innerHTML=s?IC.off:IC.eye};l.appendChild(b)}
else if(IC[inp.id]){var s=document.createElement("span");s.className="eye";s.innerHTML=IC[inp.id];l.appendChild(s)}})}
new MutationObserver(function(){
if(P.querySelector("#a_go")){var f=P.querySelector(".form");gc.innerHTML="";gc.appendChild(f);fx(f);au.classList.add("on");au.scrollTop=0;$("sheet").hidden=true}
else if(au.classList.contains("on")&&P.children.length){au.classList.remove("on");gc.innerHTML=""}
}).observe(P,{childList:true});
au.addEventListener("click",function(e){if(e.target.closest("[data-close]")){au.classList.remove("on");gc.innerHTML=""}});
var st=document.createElement("style");
st.textContent=".au{position:fixed;inset:0;z-index:40;display:none;overflow-y:auto;background:#14123a}.au.on{display:block;animation:fi .35s}.as{position:fixed;inset:0}"+
  ".sl2{position:absolute;inset:0;opacity:0;transition:opacity 1s}.sl2.on{opacity:1}.sl2.indigo{background:linear-gradient(160deg,#262262,#4a3bb0)}.sl2.orange{background:linear-gradient(160deg,#c2410c,#f16623 60%,#ff9a62)}.sl2.teal{background:linear-gradient(160deg,#0f4c5c,#1f7a8c 60%,#262262)}.sl2.plum{background:linear-gradient(160deg,#3b0f5c,#262262 55%,#f16623)}"+
".pc{position:absolute;width:38%;aspect-ratio:3/4;border-radius:22px;background-size:cover;background-position:center;border:4px solid #fff;box-shadow:0 20px 40px #0006;animation:fl2 5s ease-in-out infinite alternate}.pc.a{left:6%;top:40%;--r:-9deg}.pc.b{right:4%;top:11%;width:32%;--r:8deg;animation-delay:-2s}.pc.c{left:42%;top:50%;--r:3deg;animation-delay:-3.5s}"+
"@keyframes fl2{from{transform:rotate(var(--r)) translateY(0)}to{transform:rotate(var(--r)) translateY(-14px)}}"+
".ac{position:absolute;left:22px;top:92px;width:54%;color:#fff}.ac small{display:block;letter-spacing:2px;font-weight:700;font-size:11px;color:#ffd2b8;margin-top:12px}.ac p{margin:6px 0 0;font-size:20px;font-weight:700;line-height:1.25}.ai{display:grid;place-items:center;width:46px;height:46px;border-radius:16px;background:#ffffff26;border:1px solid #ffffff66;font-size:22px}.ai .ic{width:24px;height:24px}"+
".alg{position:fixed;left:22px;top:26px;z-index:2;font-size:28px;font-weight:800;color:#fff;letter-spacing:-.5px}.alg span{color:#ff9a62}.ad{position:fixed;left:22px;top:60px;z-index:2;display:flex;gap:5px}.ad i{width:6px;height:6px;border-radius:9px;background:#fff6;transition:all .3s}.ad i.on{width:20px;background:#fff}"+
".aw{position:relative;z-index:3;min-height:100%;display:flex;flex-direction:column;justify-content:flex-end;padding:300px 16px 24px;max-width:480px;margin:0 auto}"+
  ".gc{position:relative;border-radius:30px;border:1.5px solid #ffffffb3;background:linear-gradient(160deg,#ffffff47,#ffffff14);-webkit-backdrop-filter:blur(16px) saturate(1.2);backdrop-filter:blur(16px) saturate(1.2);box-shadow:0 24px 60px #0a082e73,inset 0 1px 0 #fff6;animation:up .6s cubic-bezier(.2,.8,.2,1) both}@supports not (backdrop-filter:blur(1px)){.gc{background:#1c1a52e0}}"+
".gc .form{padding:24px 20px 22px;color:#fff}.gc h2{color:#fff;font-size:28px;margin:0 0 4px}.gc .hint{color:#ffffffd9;font-size:14px;margin-bottom:12px}.gc label{color:#fff;font-weight:600;position:relative;margin-top:12px}"+
".gc label input{background:#ffffff1f;border:1.5px solid #ffffff99;border-radius:18px;color:#fff;padding:14px 46px 14px 16px;margin-top:6px;box-sizing:border-box}.gc label input:focus{outline:none;border-color:#fff;background:#ffffff33;box-shadow:0 0 0 4px #ffffff22}.gc input::placeholder{color:#ffffffcc}.gc input:-webkit-autofill{-webkit-box-shadow:0 0 0 100px #34408c inset;-webkit-text-fill-color:#fff}"+
".eye{position:absolute;right:14px;bottom:13px;width:24px;height:24px;border:0;background:none;color:#fff;padding:0;display:grid;place-items:center;pointer-events:none}button.eye{pointer-events:auto}.eye .ic{width:22px;height:22px}.gc .msg{color:#ffd4d0;text-shadow:0 1px 6px #0006}.gc .msg.ok{color:#c8ffd9}.gc .link{color:#fff;opacity:.95}.gc .x{position:absolute;top:12px;right:12px;width:38px;height:38px;border:0;border-radius:50%;background:#ffffff2e;color:#fff;display:grid;place-items:center}"+
  ".btn,.cta,.wa,.bs button,.bs a{--g:241,102,35;background:#fff!important;color:#262262!important;border:1px solid #fff!important;border-radius:999px!important;font-weight:700;position:relative;overflow:hidden;box-shadow:inset 0 0 0 1px #ffffffe6,0 10px 20px #14123a2e,0 0 26px 2px rgba(var(--g),.45);animation:gl 3s ease-in-out infinite;transition:transform .2s,box-shadow .2s}.wa{--g:37,211,102}"+
"@keyframes gl{50%{box-shadow:inset 0 0 0 1px #ffffffe6,0 10px 20px #14123a2e,0 0 40px 8px rgba(var(--g),.6)}}@keyframes sh2{from{left:-60%}to{left:150%}}"+
".btn:before,.cta:before,.wa:before,.bs button:before,.bs a:before{content:'';position:absolute;top:0;left:-60%;width:40%;height:100%;background:linear-gradient(100deg,transparent,rgba(var(--g),.22),transparent);transform:skewX(-20deg);animation:sh2 4s ease-in-out infinite;pointer-events:none}.btn:disabled{opacity:.65;animation:none}.btn .rp,.cta .rp,.wa .rp,.bs button .rp{background:rgba(var(--g),.25)}"+
".search{background:#fff;border-radius:999px;padding:0 6px 0 18px;box-shadow:inset 0 0 0 1px #ffffffe6,0 8px 18px #14123a1f,0 0 24px 2px #f1662240;transition:box-shadow .3s,transform .3s}.search:focus-within{transform:scale(1.02);box-shadow:inset 0 0 0 1px #fff,0 10px 22px #14123a26,0 0 38px 8px #f1662266}.search button{border-radius:50%;background:#f3f1ff}";
document.head.appendChild(st);
})();
