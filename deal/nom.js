(function(){
var O="DealTo",N="mìábéshop",E=encodeURIComponent(N);
function fx(s){return s&&(s.indexOf(O)>-1||s.indexOf("DEALTO")>-1)?s.split(O).join(N).split("DEALTO").join(N.toUpperCase()):s}
function txt(){
var w=document.createTreeWalker(document.documentElement,NodeFilter.SHOW_TEXT,null),n,t;
while(n=w.nextNode()){t=n.parentNode&&n.parentNode.tagName;if(t==="SCRIPT"||t==="STYLE")continue;n.nodeValue=fx(n.nodeValue)}
document.title=fx(document.title);
var a=document.querySelectorAll('[href*="DealTo"],[placeholder*="DealTo"],[aria-label*="DealTo"],[title*="DealTo"],[alt*="DealTo"],meta[content*="DealTo"]'),i,j,k,at=["href","placeholder","aria-label","title","alt","content"];
for(i=0;i<a.length;i++)for(j=0;j<at.length;j++){k=a[i].getAttribute(at[j]);if(k&&k.indexOf(O)>-1)a[i].setAttribute(at[j],at[j]==="href"?k.split(O).join(E):fx(k))}
var l=document.querySelectorAll(".logo,.l,.lg0"),x,c;
for(i=0;i<l.length;i++){x=l[i];c=x.firstElementChild;if(c&&x.textContent===O){var g=c.tagName.toLowerCase();x.innerHTML="mìábé<"+g+">shop</"+g+">"}}}
var wo=window.open;
window.open=function(u){if(typeof u==="string")arguments[0]=u.split(O).join(E);return wo.apply(this,arguments)};
if(navigator.share){var ns=navigator.share.bind(navigator);navigator.share=function(d){d=d||{};return ns({title:fx(d.title),text:fx(d.text),url:d.url})}}
var tm=0;
function run(){try{txt()}catch(e){}}
run();
new MutationObserver(function(){clearTimeout(tm);tm=setTimeout(run,30)}).observe(document.documentElement,{childList:true,subtree:true});
})();
