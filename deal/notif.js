(function(){
var SB="https://tpstmxxkjcttrldxecxs.supabase.co",KEY="sb_publishable_E3wy3JgeLqrXf65eRuZYIw_B4ZKfK2z";
function ses(){try{return JSON.parse(localStorage.getItem("dt_s")||"null")}catch(e){return null}}
function tok(){var s=ses();if(!s)return Promise.reject(1);if(Date.now()<s.exp)return Promise.resolve(s);
return fetch(SB+"/auth/v1/token?grant_type=refresh_token",{method:"POST",headers:{apikey:KEY,"Content-Type":"application/json"},body:JSON.stringify({refresh_token:s.refresh_token})}).then(function(r){return r.json()}).then(function(j){if(!j.access_token)throw 1;j.exp=Date.now()+j.expires_in*1000-60000;try{localStorage.setItem("dt_s",JSON.stringify(j))}catch(e){}return j})}
var st=document.createElement("style");
st.textContent=".nb{position:absolute;top:2px;left:calc(50% + 6px);min-width:17px;height:17px;padding:0 4px;box-sizing:border-box;border-radius:99px;background:#e11d48;color:#fff;font:700 10px/17px Poppins,sans-serif;text-align:center;pointer-events:none}";
document.head.appendChild(st);
var base=document.title,last=-1;
function show(n){
var b=document.querySelector("nav [data-t=me]");if(!b)return;
var o=b.querySelector(".nb");
if(!n){if(o)o.remove();document.title=base;last=0;return}
if(getComputedStyle(b).position==="static")b.style.position="relative";
if(!o){o=document.createElement("span");o.className="nb";b.appendChild(o)}
o.textContent=n>9?"9+":n;document.title="("+n+") "+base;
if(n>last&&last>=0&&navigator.vibrate){try{navigator.vibrate(120)}catch(e){}}
last=n}
function poll(){
if(document.hidden||!ses())return;
tok().then(function(s){return fetch(SB+"/rest/v1/messages?select=id&lu=eq.false&to_id=eq."+s.user.id+"&limit=99",{headers:{apikey:KEY,Authorization:"Bearer "+s.access_token}})}).then(function(r){return r.ok?r.json():[]}).then(function(a){show(a.length)}).catch(function(){})}
setTimeout(poll,2500);setInterval(poll,25000);
document.addEventListener("visibilitychange",function(){if(!document.hidden)poll()});
window.DTN=poll;
})();
