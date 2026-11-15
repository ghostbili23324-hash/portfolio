(function(){
  if("serviceWorker" in navigator){navigator.serviceWorker.register("sw.js").catch(function(){})}
  var ev=null,b=document.createElement("button");
  b.textContent="📲 Installer l'app";
  b.style.cssText="display:none;position:fixed;right:14px;bottom:14px;z-index:9;background:#0D1B2A;color:#fff;border:2px solid #D4C4A8;border-radius:99px;padding:12px 18px;font:700 15px system-ui,sans-serif;box-shadow:0 6px 20px #0005";
  document.body.appendChild(b);
  window.addEventListener("beforeinstallprompt",function(e){e.preventDefault();ev=e;b.style.display="block"});
  b.onclick=function(){if(ev){ev.prompt();ev=null}b.style.display="none"};
  window.addEventListener("appinstalled",function(){b.style.display="none"});
})();
