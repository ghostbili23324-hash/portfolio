(function(){
  var SB="https://tpstmxxkjcttrldxecxs.supabase.co";
  var KEY="sb_publishable_E3wy3JgeLqrXf65eRuZYIw_B4ZKfK2z";
  var ADMIN="22870745806";
  var CATS=["Mode","Chaussures","Téléphones","Électronique","Maison","Anime & goodies","Livres & cours","Sport","Autre"];
  var VILLES=["Lomé","Kara","Sokodé","Atakpamé","Kpalimé","Dapaong","Autre ville"];
  var cat="Tout",data=[],view=[];
  var $=function(i){return document.getElementById(i)};
  function nz(s){return String(s).normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}
  function money(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g," ")+" FCFA"}
  function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
  function opts(a,first){return (first?'<option value="">'+first+'</option>':'')+a.map(function(v){return '<option>'+esc(v)+'</option>'}).join("")}
  function chips(){
    $("chips").innerHTML=["Tout"].concat(CATS).map(function(c){return '<button class="chip'+(c===cat?' on':'')+'" data-c="'+esc(c)+'">'+esc(c)+'</button>'}).join("");
    Array.prototype.forEach.call($("chips").children,function(b){b.onclick=function(){cat=b.getAttribute("data-c");chips();render()}});
  }
  function pic(a){
    var ic=esc(a.icone||"🛍️");
    return a.photo?'<img loading="lazy" src="'+esc(a.photo)+'" alt="" data-i="'+ic+'" onerror="this.outerHTML=this.getAttribute(\'data-i\')">':ic;
  }
  function render(){
    var q=nz($("q").value.trim()),v=$("ville").value,t=$("tri").value;
    view=data.filter(function(a){
            return (cat==="Tout"||a.cat===cat)&&(!v||a.ville===v)&&(!q||nz(a.titre+" "+a.cat+" "+(a.description||"")).indexOf(q)>-1);
    });
    if(t==="asc")view.sort(function(a,b){return a.prix-b.prix});
    if(t==="desc")view.sort(function(a,b){return b.prix-a.prix});
    $("count").textContent=view.length+" article"+(view.length>1?"s":"");
    if(!view.length){$("grid").innerHTML='<div class="empty">Aucun article pour le moment.<br>Sois le premier à vendre 👇</div>';return}
    $("grid").innerHTML=view.map(function(a,i){
      return '<div class="card" data-i="'+i+'"><div class="ph">'+pic(a)+(a.verifie?'<span class="badge">✓ Vérifié</span>':'')+'</div>'+
        '<div class="p">'+money(a.prix)+'</div><div class="t">'+esc(a.titre)+'</div>'+
        '<div class="m">'+esc(a.etat)+' · '+esc(a.ville)+'</div></div>';
    }).join("");
  }
  function open(i){
    var a=view[i];if(!a)return;
    var msg="Bonjour, je suis intéressé(e) par ton article sur DealTo : "+a.titre+" ("+money(a.prix)+"). Est-ce encore disponible ?";
    $("panel").innerHTML='<div class="big"><button class="x" id="cl">✕</button>'+pic(a)+'</div><div class="info">'+
      '<div class="p">'+money(a.prix)+'</div><h3>'+esc(a.titre)+'</h3>'+
      '<div class="m">'+esc(a.etat)+' · '+esc(a.ville)+(a.quartier?', '+esc(a.quartier):'')+' · '+esc(a.cat)+'</div>'+
      (a.description?'<div class="d">'+esc(a.description)+'</div>':'')+
      '<a class="wa" target="_blank" rel="noopener" href="https://wa.me/'+esc(a.tel)+'?text='+encodeURIComponent(msg)+'">Contacter sur WhatsApp</a></div>';
    $("sheet").hidden=false;$("cl").onclick=close;
  }
  function close(){$("sheet").hidden=true}
    $("grid").addEventListener("click",function(e){var c=e.target.closest(".card");if(c)open(+c.getAttribute("data-i"))});
  $("sheet").addEventListener("click",function(e){if(e.target===$("sheet"))close()});
  document.addEventListener("keydown",function(e){if(e.key==="Escape")close()});
  $("ville").innerHTML=opts(VILLES,"Toutes les villes");
  $("s_cat").innerHTML=opts(CATS);$("s_ville").innerHTML=opts(VILLES);
  $("q").addEventListener("input",render);$("ville").addEventListener("change",render);$("tri").addEventListener("change",render);
  function sell(){
    var g=function(i){return $(i).value.trim()||"(à préciser)"};
    var t="Bonjour, je veux publier un article sur DealTo :\nArticle : "+g("s_titre")+"\nDescription : "+g("s_desc")+"\nPrix : "+g("s_prix")+" FCFA\nCatégorie : "+$("s_cat").value+"\nÉtat : "+$("s_etat").value+"\nVille : "+$("s_ville").value+", "+g("s_quartier")+"\nMon WhatsApp : "+g("s_tel")+"\n\nJ'envoie les photos juste après.";
    $("sendSell").href="https://wa.me/"+ADMIN+"?text="+encodeURIComponent(t);
  }
  ["s_titre","s_desc","s_prix","s_cat","s_etat","s_ville","s_quartier","s_tel"].forEach(function(i){$(i).addEventListener("input",sell);$(i).addEventListener("change",sell)});
  function load(){
    if(!window.fetch)return;
    fetch(SB+"/rest/v1/articles?select=*&publie=eq.true&order=created_at.desc",{headers:{apikey:KEY}})
      .then(function(r){if(!r.ok)throw 0;return r.json()})
      .then(function(rows){data=rows;render()})
      .catch(function(){$("count").textContent="Connexion impossible, réessaie plus tard."});
  }
  sell();chips();render();load();
})();
