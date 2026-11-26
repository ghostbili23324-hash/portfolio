(function(){
document.addEventListener("error",function(e){var m=e.target;if(m&&m.tagName==="IMG"&&m.hasAttribute("data-i")){var t=m.getAttribute("data-i")||"";if(t.length>8)t="🛍️";m.replaceWith(document.createTextNode(t))}},true);
function strip(r){var a=r.querySelectorAll?r.querySelectorAll("[onerror],[onload],[onclick]"):[];for(var i=0;i<a.length;i++){a[i].removeAttribute("onerror");a[i].removeAttribute("onload");a[i].removeAttribute("onclick")}}
if(window.top!==window.self){try{window.top.location=window.self.location}catch(e){document.documentElement.innerHTML=""}}
var st=document.createElement("style");
st.textContent=".rb{position:fixed;top:0;left:0;right:0;z-index:100000;background:#b42318;color:#fff;font:600 12px/1.3 Poppins,sans-serif;text-align:center;padding:7px 10px}footer{margin-bottom:120px}";
document.head.appendChild(st);
var bt=0;
function ban(t,ms){var b=document.getElementById("rb");if(!b){b=document.createElement("div");b.id="rb";b.className="rb";document.body.appendChild(b)}b.textContent=t;clearTimeout(bt);if(ms)bt=setTimeout(net,ms)}
function net(){var b=document.getElementById("rb");if(!navigator.onLine)ban("Pas de connexion internet. Certaines fonctions sont indisponibles.",0);else if(b)b.remove()}
window.addEventListener("online",net);window.addEventListener("offline",net);
var of=window.fetch;
window.fetch=function(){return of.apply(this,arguments).catch(function(e){if(navigator.onLine)ban("Connexion instable. Réessaie dans un instant.",5000);throw e})};
var RX=/Failed to fetch|NetworkError when attempting to fetch resource\.?|Load failed/,tm=0;
function fx(){
var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null),n;
while(n=w.nextNode()){if(RX.test(n.nodeValue))n.nodeValue=n.nodeValue.replace(/Erreur\s*:\s*/,"").replace(RX,"Pas de connexion internet. Vérifie ton réseau puis réessaie.")}
strip(document)}
new MutationObserver(function(){clearTimeout(tm);tm=setTimeout(fx,30)}).observe(document.documentElement,{childList:true,subtree:true});
net();fx();
})();
