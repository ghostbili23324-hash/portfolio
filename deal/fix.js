(function(){
var S="display:flex!important;align-items:center;justify-content:center;gap:6px;width:100%!important;height:auto!important;min-height:46px;margin:8px 0 0!important;padding:11px!important;border:0!important;border-radius:14px!important;background:linear-gradient(135deg,#f16623,#ff9a62)!important;color:#fff!important;-webkit-text-fill-color:#fff!important;font:700 14px Poppins,sans-serif!important;box-shadow:0 8px 18px #f1662355!important;opacity:1!important";
function f(){var a=document.querySelectorAll("button");for(var i=0;i<a.length;i++){var b=a[i];if(!b.dataset.fx&&b.textContent.indexOf("Booster cette")>-1){b.dataset.fx="1";b.style.cssText=S;if(b.parentNode&&b.parentNode.classList.contains("my"))b.parentNode.style.flexWrap="wrap"}}}
new MutationObserver(function(){setTimeout(f,30)}).observe(document.body,{childList:true,subtree:true});f();
})();
