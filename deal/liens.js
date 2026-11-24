(function(){
var st=document.createElement("style");
st.textContent=".lg{font:12px/1.5 Poppins,sans-serif;color:#55546b;text-align:center;margin:10px 4px 0}.lg a{color:#f16623;font-weight:600}";
document.head.appendChild(st);
var L='<a href="conditions.html" target="_blank" rel="noopener">Conditions</a> · <a href="confidentialite.html" target="_blank" rel="noopener">Confidentialité</a>';
var f=document.querySelector("footer");if(f)f.insertAdjacentHTML("beforeend"," · "+L);
var tm=0;
new MutationObserver(function(){clearTimeout(tm);tm=setTimeout(function(){
var g=document.getElementById("a_go");
if(g&&document.getElementById("a_nom")&&!document.getElementById("lg")){var d=document.createElement("p");d.id="lg";d.className="lg";d.innerHTML='En créant un compte, tu acceptes les <a href="conditions.html" target="_blank" rel="noopener">Conditions d\'utilisation</a> et la <a href="confidentialite.html" target="_blank" rel="noopener">Politique de confidentialité</a>.';g.insertAdjacentElement("afterend",d)}
var o=document.getElementById("m_out");
if(o&&!o.parentNode.querySelector(".lg")){var e=document.createElement("p");e.className="lg";e.innerHTML=L;o.parentNode.appendChild(e)}
},50)}).observe(document.body,{childList:true,subtree:true});
})();
