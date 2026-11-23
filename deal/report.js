(function(){
var A="22870745806",R=["Arnaque ou faux article","Article interdit","Photo ou description trompeuse","Prix abusif","Autre problème"];
var s=document.createElement("style");
s.textContent=".rp{display:block;margin:6px auto;background:none;border:0;color:#b42318;font:600 13px Poppins,sans-serif;padding:8px 14px}.rm{position:fixed;inset:0;z-index:99999;background:#0008;display:flex;align-items:flex-end;justify-content:center}.rm>div{background:#fff;width:100%;max-width:480px;border-radius:22px 22px 0 0;padding:18px 16px 22px;font-family:Poppins,sans-serif}.rm h3{margin:0 0 4px;color:#262262;font-size:17px}.rm p{margin:0 0 12px;font-size:12px;color:#55546b}.rm button{display:block;width:100%;text-align:left;margin-top:8px;padding:12px 14px;border:1.5px solid #e6e4f2;border-radius:12px;background:#fff;color:#262262;font:600 14px Poppins,sans-serif}.rm button:active{border-color:#f16623;background:#fff3ec}.rm .rc{text-align:center;border:0;color:#55546b;font-weight:500}";
document.head.appendChild(s);
function open(t){
var m=document.createElement("div");m.className="rm";
m.innerHTML='<div><h3>Signaler cette annonce</h3><p>Pourquoi veux-tu la signaler ? Nous la vérifions rapidement.</p>'+R.map(function(r,i){return '<button data-r="'+i+'">'+r+'</button>'}).join("")+'<button class="rc">Annuler</button></div>';
m.onclick=function(e){
var b=e.target.closest("button");
if(!b){if(e.target===m)m.remove();return}
if(b.classList.contains("rc")){m.remove();return}
var msg="🚩 Signalement DealTo\nAnnonce : "+t+"\nMotif : "+R[+b.dataset.r]+"\nLien : "+location.href.split("#")[0];
window.open("https://wa.me/"+A+"?text="+encodeURIComponent(msg),"_blank");m.remove()};
document.body.appendChild(m)}
function add(){
var p=document.getElementById("panel"),f=p&&p.querySelector(".safe");
if(!f||p.querySelector(".rp"))return;
var b=document.createElement("button");b.className="rp";b.textContent="🚩 Signaler cette annonce";
b.onclick=function(){var h=p.querySelector(".info h3");open(h?h.textContent:"")};
f.insertAdjacentElement("beforebegin",b)}
var p=document.getElementById("panel");
if(p)new MutationObserver(add).observe(p,{childList:true,subtree:true});
})();
