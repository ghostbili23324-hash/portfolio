(function(){
  var ADMIN="22870745806";
  var CATS=["Vêtements","Chaussures","Téléphones","Livres & cours","Chambre","Anime","Autre"];
  var cat="Tout";
  var $=function(i){return document.getElementById(i)};
  var data=(window.ANNONCES||[]).slice().sort(function(a,b){return (b.date||"").localeCompare(a.date||"")});
  function money(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g," ")+" FCFA"}
  function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
  function chips(){
    var h=["Tout"].concat(CATS).map(function(c){return '<button class="chip'+(c===cat?' on':'')+'" data-c="'+esc(c)+'">'+esc(c)+'</button>'}).join("");
    $("chips").innerHTML=h;
    Array.prototype.forEach.call($("chips").children,function(b){b.onclick=function(){cat=b.getAttribute("data-c");chips();render()}});
  }
  function render(){
    var q=$("q").value.trim().toLowerCase(), e=$("ecole").value;
    var list=data.filter(function(a){
      return (cat==="Tout"||a.cat===cat)&&(!e||a.ecole===e)&&(!q||(a.titre+" "+a.cat+" "+a.ecole).toLowerCase().indexOf(q)>-1);
    });
    $("count").textContent=list.length+" annonce"+(list.length>1?"s":"");
    if(!list.length){$("grid").innerHTML='<div class="empty">Aucune annonce pour le moment.<br>Sois le premier à vendre ci-dessous 👇</div>';return}
    $("grid").innerHTML=list.map(function(a){
      var msg="Bonjour, je suis intéressé(e) par ton annonce sur Campus Shop : "+a.titre+" ("+money(a.prix)+"). Est-ce encore disponible ?";
      var ph=a.photo?'<img loading="lazy" src="'+esc(a.photo)+'" alt="'+esc(a.titre)+'">':esc(a.icone||"🛍️");
      return '<article class="card"><div class="ph">'+ph+'</div><div class="body">'+
        '<div class="price">'+money(a.prix)+'</div><div class="t">'+esc(a.titre)+'</div>'+
        '<div class="meta">'+esc(a.ecole)+' · '+esc(a.etat)+'</div>'+
        (a.verifie?'<span class="ok">✓ Étudiant vérifié</span>':'')+
        '<a class="btn" target="_blank" rel="noopener" href="https://wa.me/'+esc(a.tel)+'?text='+encodeURIComponent(msg)+'">Contacter sur WhatsApp</a></div></article>';
    }).join("");
  }
  $("q").addEventListener("input",render);
  $("ecole").addEventListener("change",render);
  $("s_cat").innerHTML=CATS.map(function(c){return "<option>"+esc(c)+"</option>"}).join("");
  function sell(){
    var t="Bonjour, je veux publier une annonce sur Campus Shop :\n"+
      "Article : "+($("s_titre").value.trim()||"(à préciser)")+"\n"+
      "Prix : "+($("s_prix").value.trim()||"(à préciser)")+" FCFA\n"+
      "Catégorie : "+$("s_cat").value+"\nÉcole : "+$("s_ecole").value+"\nÉtat : "+$("s_etat").value+"\n"+
      "Mon WhatsApp : "+($("s_tel").value.trim()||"(à préciser)")+"\n\nJ'envoie les photos juste après.";
    $("sendSell").href="https://wa.me/"+ADMIN+"?text="+encodeURIComponent(t);
  }
  ["s_titre","s_prix","s_cat","s_ecole","s_etat","s_tel"].forEach(function(i){$(i).addEventListener("input",sell);$(i).addEventListener("change",sell)});
  sell();chips();render();
})();
