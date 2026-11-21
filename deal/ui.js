(function(){
var P={
home:'<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
compass:'<circle cx="12" cy="12" r="10"/><path d="m16.2 7.8-2.1 6.3-6.3 2.1 2.1-6.3z"/>',
plus:'<path d="M12 5v14M5 12h14"/>',
heart:'<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z"/>',
user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
sliders:'<path d="M4 6h10M18 6h2M4 12h2M10 12h10M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="8" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',
pin:'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
check:'<path d="m5 12 5 5L20 7"/>',
x:'<path d="M18 6 6 18M6 6l12 12"/>',
left:'<path d="M19 12H5M12 19l-7-7 7-7"/>',
right:'<path d="M5 12h14M12 5l7 7-7 7"/>',
shirt:'<path d="M8 3 3 6l2 4 3-1.5V21h8V8.5L19 10l2-4-5-3a4 4 0 0 1-8 0z"/>',
shoe:'<path d="M2 17v-4c0-1 .6-1.800 1.600-2.100L8 10l2 2.500h2.500c2 0 3.800.800 5.300 2l3 1.500c.800.400 1.200 1 1.200 1.800V19H2z"/><path d="M2 19h20"/>',
phone:'<rect x="6" y="2" width="12" height="20" rx="2.500"/><path d="M11 18h2"/>',
laptop:'<rect x="4" y="5" width="16" height="11" rx="1.500"/><path d="M2 20h20"/>',
sofa:'<path d="M5 11V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3"/><path d="M3 12a2 2 0 0 1 4 0v2h10v-2a2 2 0 0 1 4 0v5H3z"/><path d="M5 20v-3M19 20v-3"/>',
gift:'<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7M7.500 8a2.500 2.500 0 0 1 0-5C11 3 12 8 12 8s1-5 4.500-5a2.500 2.500 0 0 1 0 5"/>',
book:'<path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2zM22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/>',
  ball:'<circle cx="12" cy="12" r="10"/><path d="m12 7 4 3-1.500 5h-5L8 10zM12 7V2M16 10l5-1.500M14.500 15l3 4.500M9.500 15l-3 4.500M8 10 3 8.500"/>',
bag:'<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
spark:'<path d="m12 3 1.900 5.100L19 10l-5.100 1.900L12 17l-1.900-5.100L5 10l5.100-1.900zM19 16l.8 2.200L22 19l-2.200.8L19 22l-.8-2.200L16 19l2.200-.8z"/>',
cam:'<path d="M14.500 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z"/><circle cx="12" cy="13" r="3.500"/>',
smile:'<circle cx="12" cy="12" r="10"/><path d="M8 14s1.500 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>',
ok:'<circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-6"/>',
trash:'<path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6M10 11v6M14 11v6"/>'
};
var M={"🏠":"home","🧭":"compass","＋":"plus","♡":"heart","♥":"heartf","👤":"user","🔍":"search","⚙":"sliders","📍":"pin","🛡":"shield","✓":"check","✕":"x","←":"left","→":"right","👕":"shirt","👟":"shoe","📱":"phone","💻":"laptop","🛋":"sofa","🎌":"gift","📚":"book","⚽":"ball","🛍":"bag","✨":"spark","📷":"cam","👋":"smile","✅":"ok","🗑":"trash"};
var keys=Object.keys(M),RE=new RegExp("("+keys.join("|")+")"+String.fromCharCode(65039)+"?","g");
function svg(n){var f=n==="heartf",p=P[f?"heart":n];
return '<svg class="ic'+(f?" f":"")+'" viewBox="0 0 24 24" fill="'+(f?"currentColor":"none")+'" stroke="currentColor" stroke-width="'+(n==="plus"?2.600:2)+'" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+p+'</svg>'}
function rep(n){var s=n.nodeValue,f=document.createDocumentFragment(),i=0,m,t=document.createElement("span");
RE.lastIndex=0;
while((m=RE.exec(s))){if(m.index>i)f.appendChild(document.createTextNode(s.slice(i,m.index)));
                      t.innerHTML=svg(M[m[1]]);f.appendChild(t.firstChild);i=m.index+m[0].length}
if(i<s.length)f.appendChild(document.createTextNode(s.slice(i)));
n.parentNode.replaceChild(f,n)}
function walk(){var w=document.createTreeWalker(document.body,4,{acceptNode:function(n){var p=n.parentNode;
if(!p||/^(SCRIPT|STYLE|TEXTAREA|OPTION|TITLE)$/.test(p.nodeName))return 2;RE.lastIndex=0;return RE.test(n.nodeValue)?1:2}}),a=[],n;
while((n=w.nextNode()))a.push(n);a.forEach(rep)}
var mo=new MutationObserver(run);
function run(){mo.disconnect();walk();mo.observe(document.body,{childList:true,subtree:true,characterData:true})}
var st=document.createElement("style");
st.textContent=".ic{width:1.15em;height:1.15em;vertical-align:-.2em;flex:none}.cat span .ic{width:28px;height:28px;color:#262262}.cat:nth-child(3n+2) span .ic{color:#f16623}.cat:nth-child(3n+3) span .ic{color:#1e8449}.cat.on span .ic{color:#fff}.tabs i .ic{width:24px;height:24px}.heart .ic{width:19px;height:19px;vertical-align:middle}.trust .ic{width:24px;height:24px;color:#262262}.big>.ic,.ph>.ic{width:44%;height:44%;color:#262262;opacity:.35}"+
"@keyframes up{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}@keyframes sl{from{transform:translateY(100%)}to{transform:none}}@keyframes fi{from{opacity:0}to{opacity:1}}@keyframes pop{0%{transform:scale(.6)}60%{transform:scale(1.3)}100%{transform:scale(1)}}@keyframes fa{0%,100%{transform:rotate(-8deg) translateY(0)}50%{transform:rotate(-8deg) translateY(-8px)}}@keyframes fb{0%,100%{transform:rotate(7deg) translateY(0)}50%{transform:rotate(7deg) translateY(8px)}}@keyframes pu{0%{box-shadow:0 0 0 0 #f1662266}100%{box-shadow:0 0 0 14px #f1662200}}@keyframes sh{to{background-position:-200% 0}}"+
  ".card{animation:up .45s cubic-bezier(.2,.8,.2,1) both;transition:transform .15s}.card:nth-child(2){animation-delay:.06s}.card:nth-child(3){animation-delay:.12s}.card:nth-child(4){animation-delay:.18s}.card:nth-child(n+5){animation-delay:.24s}.card:active,button:active,.wa:active{transform:scale(.96)}"+
".sheet:not([hidden]){animation:fi .25s}.sheet:not([hidden]) .panel{animation:sl .38s cubic-bezier(.2,.8,.2,1)}.heart .ic.f{animation:pop .4s}.tabs .on i .ic{animation:pop .45s}"+
".pics img:first-child{animation:fa 5s ease-in-out infinite}.pics img:last-child{animation:fb 6s ease-in-out infinite}.cta{animation:pu 2s infinite}.tabs .plus i{animation:pu 2.4s infinite}.cat span{transition:transform .2s}.cat:active span{transform:scale(.9)}"+
".rv{opacity:0;transform:translateY(20px);transition:opacity .6s,transform .6s}.rv.in{opacity:1;transform:none}"+
"@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}";
document.head.appendChild(st);
run();
if(window.IntersectionObserver){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.15});
Array.prototype.forEach.call(document.querySelectorAll(".sec,.trust,footer"),function(e){e.classList.add("rv");io.observe(e)})}
})();
