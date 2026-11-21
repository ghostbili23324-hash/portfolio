(function(){
  var SB="https://tpstmxxkjcttrldxecxs.supabase.co";
  var KEY="sb_publishable_E3wy3JgeLqrXf65eRuZYIw_B4ZKfK2z";
  var ADMIN="22870745806";
  var CATS=[["Mode","👕"],["Chaussures","👟"],["Téléphones","📱"],["Électronique","💻"],["Maison","🛋️"],["Anime & goodies","🎌"],["Livres & cours","📚"],["Sport","⚽"],["Autre","🛍️"]];
  var VILLES=["Lomé","Kara","Sokodé","Atakpamé","Kpalimé","Dapaong","Autre ville"];
  var cat="Tout",data=[],view=[],onlyFav=false,favs=[];
  try{favs=JSON.parse(localStorage.getItem("dt_fav")||"[]")}catch(e){}
  var $=function(i){return document.getElementById(i)};
  function nz(s){return String(s).normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}
  function money(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g," ")+" FCFA"}
  function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
  function opts(a,first){return (first?'<option value="">'+first+'</option>':'')+a.map(function(v){return '<option>'+esc(v)+'</option>'}).join("")}
  function id(a){return String(a.id||a.titre)}
  function isFav(a){return favs.indexOf(id(a))>-1}
  function toggleFav(a){
    var k=id(a),i=favs.indexOf(k);
    if(i>-1)favs.splice(i,1);else favs.push(k);
    try{localStorage.setItem("dt_fav",JSON.stringify(favs))}catch(e){}
  }
  function isNew(a){return a.created_at&&(Date.now()-new Date(a.created_at).getTime())<6048e5}
  function chips(){
    var all=[["Tout","✨"]].concat(CATS);
    $("chips").innerHTML=all.map(function(c){return '<button class="cat'+(c[0]===cat?' on':'')+'" data-c="'+esc(c[0])+'"><span>'+c[1]+'</span>'+esc(c[0])+'</button>'}).join("");    Array.prototype.forEach.call($("chips").children,function(b){b.onclick=function(){cat=b.getAttribute("data-c");onlyFav=false;tabs();chips();render()}});
  }
  function pic(a){
    var ic=esc(a.icone||"🛍️");
    return a.photo?'<img loading="lazy" src="'+esc(a.photo)+'" alt="" data-i="'+ic+'" onerror="this.outerHTML=this.getAttribute(\'data-i\')">':ic;
  }
  function render(){
    var q=nz($("q").value.trim()),v=$("ville").value,t=$("tri").value;
    view=data.filter(function(a){
      return (!onlyFav||isFav(a))&&(cat==="Tout"||a.cat===cat)&&(!v||a.ville===v)&&(!q||nz(a.titre+" "+a.cat+" "+(a.description||"")).indexOf(q)>-1);
    });
    if(t==="asc")view.sort(function(a,b){return a.prix-b.prix});
    if(t==="desc")view.sort(function(a,b){return b.prix-a.prix});
    $("locTxt").textContent=v||"Toutes les villes";
    $("stitle").textContent=onlyFav?"Mes favoris":(cat==="Tout"?"Récemment ajoutés":cat);
    $("count").textContent=view.length+" article"+(view.length>1?"s":"");
    if(!view.length){$("grid").innerHTML='<div class="empty">'+(onlyFav?"Aucun favori pour le moment.<br>Touche le ♡ sur un article.":"Aucun article pour le moment.<br>Sois le premier à vendre ＋")+'</div>';return}
    $("grid").innerHTML=view.map(function(a,i){
      return '<div class="card" data-i="'+i+'"><div class="ph">'+pic(a)+(isNew(a)?'<span class="tag">NOUVEAU</span>':'')+
        '<button class="heart'+(isFav(a)?' on':'')+'" data-h="'+i+'">'+(isFav(a)?'♥':'♡')+'</button>'+(a.verifie?'<span class="badge">✓ Vérifié</span>':'')+'</div>'+
        '<div class="p">'+money(a.prix)+'</div><div class="t">'+esc(a.titre)+'</div>'+
        '<div class="m">'+esc(a.etat)+' · '+esc(a.ville)+'</div></div>';
    }).join("");
  }  function show(h){$("panel").innerHTML=h;$("sheet").hidden=false;$("panel").scrollTop=0}
  function close(){$("sheet").hidden=true}
  function open(i){
    var a=view[i];if(!a)return;
    var msg="Bonjour, je suis intéressé(e) par ton article sur DealTo : "+a.titre+" ("+money(a.prix)+"). Est-ce encore disponible ?";
    show('<div class="big"><button class="back" data-close>←</button><button class="heart'+(isFav(a)?' on':'')+'" data-d="'+i+'">'+(isFav(a)?'♥':'♡')+'</button>'+pic(a)+'</div><div class="info">'+
      '<div class="p">'+money(a.prix)+'</div><h3>'+esc(a.titre)+'</h3>'+
      '<span class="chip">'+esc(a.etat)+'</span><span class="chip">📍 '+esc(a.ville)+(a.quartier?', '+esc(a.quartier):'')+'</span><span class="chip">'+esc(a.cat)+'</span>'+
      '<div class="seller"><div class="av">D</div><div><b>Vendeur DealTo '+(a.verifie?'✓':'')+'</b><small>'+(a.verifie?'Annonce contrôlée':'Annonce publiée')+' · '+esc(a.ville)+'</small></div></div>'+
      (a.description?'<div class="d">'+esc(a.description)+'</div>':'')+
      '<div class="safe">🛡️ Rencontre-toi dans un lieu public et vérifie l\'article avant de payer.</div></div>'+
      '<div class="buy"><div class="p">'+money(a.prix)+'</div><a class="wa" target="_blank" rel="noopener" href="https://wa.me/'+esc(a.tel)+'?text='+encodeURIComponent(msg)+'">Contacter sur WhatsApp</a></div>');
  }
  function sell(){
    var g=function(i){return $(i).value.trim()||"(à préciser)"};    var t="Bonjour, je veux publier un article sur DealTo :\nArticle : "+g("s_titre")+"\nDescription : "+g("s_desc")+"\nPrix : "+g("s_prix")+" FCFA\nCatégorie : "+$("s_cat").value+"\nÉtat : "+$("s_etat").value+"\nVille : "+$("s_ville").value+", "+g("s_quartier")+"\nMon WhatsApp : "+g("s_tel")+"\n\nJ'envoie les photos juste après.";
    $("sendSell").href="https://wa.me/"+ADMIN+"?text="+encodeURIComponent(t);
  }
  function openSell(){
    show($("sellT").innerHTML);
    $("s_cat").innerHTML=opts(CATS.map(function(c){return c[0]}));$("s_ville").innerHTML=opts(VILLES);
    ["s_titre","s_desc","s_prix","s_cat","s_etat","s_ville","s_quartier","s_tel"].forEach(function(i){$(i).addEventListener("input",sell);$(i).addEventListener("change",sell)});
    sell();
  }
  function openMe(){
    show('<div class="me"><button class="x" data-close>✕</button><h2>DealTo</h2><p class="hint">Le marché d\'occasion du Togo. Bientôt : ton compte, tes annonces et tes commandes.</p>'+
      '<a class="wa" target="_blank" rel="noopener" href="https://wa.me/'+ADMIN+'?text='+encodeURIComponent("Bonjour, j'ai une question sur DealTo.")+'">Une question ? Écris-nous</a>'+
      '<h3>Acheter et vendre en sécurité</h3><ul><li>Rencontre-toi dans un lieu public, de jour.</li><li>Vérifie l\'article avant de payer.</li><li>Ne paie jamais à l\'avance à un inconnu.</li></ul></div>');
  }
  function tabs(){
    Array.prototype.forEach.call(document.querySelectorAll(".tabs button"),function(b){
      var t=b.getAttribute("data-t");b.classList.toggle("on",(t==="fav"&&onlyFav)||(t==="home"&&!onlyFav));
    });
  }
  function go(t){
    if(t==="sell")return openSell();
    if(t==="me")return openMe();    if(t==="cats"){$("chips").scrollIntoView({behavior:"smooth",block:"center"});return}
    if(t==="fav"){onlyFav=!onlyFav}
    if(t==="home"){onlyFav=false;cat="Tout";chips();window.scrollTo({top:0,behavior:"smooth"})}
    tabs();render();
  }
  document.addEventListener("click",function(e){
    var t=e.target.closest("[data-t]");if(t){go(t.getAttribute("data-t"));return}
    if(e.target.closest("[data-close]")||e.target===$("sheet")){close();return}
    var h=e.target.closest("[data-h]");
    if(h){e.stopPropagation();toggleFav(view[+h.getAttribute("data-h")]);render();return}
    var d=e.target.closest("[data-d]");
    if(d){var a=view[+d.getAttribute("data-d")];toggleFav(a);d.classList.toggle("on",isFav(a));d.textContent=isFav(a)?"♥":"♡";render();return}
    var c=e.target.closest(".card");if(c&&!$("sheet").contains(c))open(+c.getAttribute("data-i"));
  });
  document.addEventListener("keydown",function(e){if(e.key==="Escape")close()});
  function flt(){$("filters").hidden=!$("filters").hidden}
  $("filt").onclick=flt;$("locBtn").onclick=flt;
  $("ville").innerHTML=opts(VILLES,"Toutes les villes");
  $("q").addEventListener("input",render);$("ville").addEventListener("change",render);$("tri").addEventListener("change",render);
  function load(){
    if(!window.fetch)return;
    fetch(SB+"/rest/v1/articles?select=*&publie=eq.true&order=created_at.desc",{headers:{apikey:KEY}})
      .then(function(r){if(!r.ok)throw 0;return r.json()})
      .then(function(rows){data=rows;render()})
      .catch(function(){$("count").textContent="Connexion impossible"});
    window.DT={view:function(){return view},all:function(){return data},tog:toggleFav,fav:isFav,render:render};
  }
  chips();render();load();
})();
