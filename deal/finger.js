(function(){
var d=document.createElement("div");d.className="fg";
var W="";for(var i=0;i<12;i++){var a=i*30*Math.PI/180;W+='<line x1="'+(60+14*Math.cos(a))+'" y1="'+(60+14*Math.sin(a))+'" x2="'+(60+(38+i%3*9)*Math.cos(a))+'" y2="'+(60+(38+i%3*9)*Math.sin(a))+'"/>'}
d.innerHTML='<svg class="fd" viewBox="0 0 120 120"><defs><radialGradient id="fdg"><stop offset="0" stop-color="#0003"/><stop offset=".45" stop-color="#0001"/><stop offset="1" stop-color="#0000"/></radialGradient></defs><circle cx="60" cy="60" r="60" fill="url(#fdg)"/><g stroke="#00000026" stroke-width="1.6" stroke-linecap="round">'+W+'</g></svg>'+
'<svg class="ff" viewBox="0 0 60 150"><defs><linearGradient id="fsk" x1="0" x2="1"><stop offset="0" stop-color="#f4a99a"/><stop offset=".45" stop-color="#ffd9cf"/><stop offset="1" stop-color="#eb9484"/></linearGradient></defs><path d="M8 0h44v96c0 22-9 40-22 40S8 118 8 96z" fill="url(#fsk)"/><ellipse cx="30" cy="104" rx="15" ry="19" fill="#ffffff59"/><path d="M14 66q16 7 32 0" stroke="#c9705f55" stroke-width="2" fill="none" stroke-linecap="round"/></svg>';
document.body.appendChild(d);
var s=document.createElement("style");
s.textContent=".fg{position:fixed;left:38%;top:0;width:0;height:0;z-index:30;pointer-events:none;transition:opacity .3s}.fg.h{opacity:0}"+
".ff{position:absolute;left:-26px;top:-150px;width:52px;height:130px;filter:drop-shadow(0 10px 8px #0003);animation:fgm 6s cubic-bezier(.45,0,.2,1) infinite}"+
".fd{position:absolute;left:-60px;top:-10px;width:120px;height:120px;opacity:0;transform:scale(.3);animation:fgd 6s ease-out infinite}"+
"@keyframes fgm{0%,8%{transform:translateY(0)}30%{transform:translateY(72px)}38%{transform:translateY(66px) scale(.97,1.02)}56%{transform:translateY(66px) scale(.97,1.02)}78%,100%{transform:translateY(0)}}"+
  "@keyframes fgd{0%,28%{opacity:0;transform:scale(.3)}38%{opacity:1;transform:scale(1)}56%{opacity:1;transform:scale(1.02)}72%,100%{opacity:0;transform:scale(1.15)}}";
document.head.appendChild(s);
function sc(){d.classList.toggle("h",window.scrollY>60||!!document.querySelector(".au.on"))}
addEventListener("scroll",sc,{passive:true});setInterval(sc,500);
})();
