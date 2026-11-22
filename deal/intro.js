(function(){
if(matchMedia("(prefers-reduced-motion:reduce)").matches)return;
var sb=document.querySelector("header .search");
if(sb&&sb.animate){sb.animate([
{transform:"translateY(-190px)",opacity:0,offset:0,easing:"cubic-bezier(.55,0,1,.45)"},
{transform:"translateY(0)",opacity:1,offset:.32,easing:"cubic-bezier(0,0,.4,1)"},
{transform:"translateY(-26px)",offset:.5,easing:"cubic-bezier(.6,0,1,.5)"},
{transform:"translateY(0)",offset:.66,easing:"cubic-bezier(0,0,.4,1)"},
{transform:"translateY(-9px)",offset:.8,easing:"cubic-bezier(.6,0,1,.5)"},
{transform:"translateY(0)",offset:1}],{duration:3600})}
var h=document.querySelector(".hero h1");if(!h||!h.animate)return;
var n=0;
function wrap(nd){Array.prototype.slice.call(nd.childNodes).forEach(function(c){
if(c.nodeType===3){var f=document.createDocumentFragment();
c.textContent.split(/(\s+)/).forEach(function(w){if(!w)return;
if(/^\s+$/.test(w)){f.appendChild(document.createTextNode(" "));return}
var s=document.createElement("span");s.textContent=w;s.style.display="inline-block";s.className="hw";
s.style.opacity=0;s.setAttribute("data-k",n++);f.appendChild(s)});
c.parentNode.replaceChild(f,c)}else if(c.nodeType===1&&c.tagName!=="BR")wrap(c)})}
wrap(h);
Array.prototype.forEach.call(h.querySelectorAll(".hw"),function(s){
var k=+s.getAttribute("data-k"),dir=k%2?1:-1;
var a=s.animate([{transform:"translateX("+dir*320+"px) scale(.8)",opacity:0},{transform:"translateX(0) scale(1)",opacity:1}],
{duration:1400,delay:1300+k*500,easing:"cubic-bezier(.2,1.25,.4,1)",fill:"backwards"});
s.style.opacity=1});
})();
