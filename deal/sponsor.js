(function(){
var D=window.DT,bn=document.querySelector(".bn"),SB="https://tpstmxxkjcttrldxecxs.supabase.co",KEY="sb_publishable_E3wy3JgeLqrXf65eRuZYIw_B4ZKfK2z",SP=[],ok=0;
if(!D||!bn)return;
function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function mo(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g," ")+" FCFA"}
function bo(a){return a&&a.boost_until&&new Date(a.boost_until)>new Date()}
function aug(){if(bn.querySelector(".sx")||!bn.querySelector(".bs"))return;
var h="",first=D.all()[0];
D.all().filter(function(a){return bo(a)&&a!==first}).slice(0,3).forEach(function(a){
h+='<div class="bs sx"><small>À LA UNE</small><b>'+esc(a.titre)+'</b><em>'+mo(a.prix)+'</em><button data-v2="'+esc(a.id)+'">Voir l\'article</button>'+(a.photo?'<img alt="" src="'+esc(a.photo)+'">':"")+"</div>"});
SP.forEach(function(p){
h+='<div class="bs nf sx spn"><small>SPONSORISÉ</small><b>'+esc(p.nom)+'</b>'+(p.texte?'<em>'+esc(p.texte)+'</em>':"")+(p.lien?'<a target="_blank" rel="noopener" href="'+esc(p.lien)+'">Découvrir</a>':"")+
(p.logo?'<img alt="" src="'+esc(p.logo)+'">':'<span class="bi">'+esc((p.nom||"?").charAt(0).toUpperCase())+"</span>")+"</div>"});
if(!h)return;
var nf=bn.querySelector(".bs.nf");nf.insertAdjacentHTML("beforebegin",h);
var n=bn.querySelectorAll(".bs").length,cur=Array.prototype.findIndex.call(bn.querySelectorAll(".bs"),function(e){return e.classList.contains("on")}),d=bn.querySelector(".bd");
if(d){d.innerHTML=new Array(n+1).join("<i></i>");var i=d.querySelectorAll("i")[Math.max(0,cur)];if(i)i.classList.add("on")}}
new MutationObserver(aug).observe(bn,{childList:true});
bn.addEventListener("click",function(e){var b=e.target.closest("[data-v2]");if(!b)return;
var i=D.view().findIndex(function(a){return String(a.id)===b.getAttribute("data-v2")}),c=document.querySelector('.card[data-i="'+i+'"]');if(c)c.click()});
fetch(SB+"/rest/v1/sponsors?select=nom,texte,logo,lien&order=created_at.desc&limit=6",{headers:{apikey:KEY,Authorization:"Bearer "+KEY}})
.then(function(r){return r.ok?r.json():[]}).then(function(r){SP=Array.isArray(r)?r:[];bn.querySelectorAll(".sx").forEach(function(e){e.remove()});aug()}).catch(function(){});
setTimeout(aug,600);
var s=document.createElement("style");
s.textContent=".bs.spn img{object-fit:contain;background:#fff;padding:12px;transform:rotate(-5deg)}.bs.spn small{color:#9be7c4}.bs.spn .bi{font-size:54px;font-weight:800;color:#fff}";
document.head.appendChild(s);
})();
