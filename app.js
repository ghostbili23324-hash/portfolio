(function () {
  var lb = document.getElementById("lightbox");
  var lbImg = document.getElementById("lbImg");
  var lastTrigger = null;
  function openLb(btn) {
    lastTrigger = btn;
    lbImg.src = btn.getAttribute("data-full");
    lbImg.alt = btn.getAttribute("data-alt") || "";
    lb.hidden = false;
    document.getElementById("lbClose").focus();
  }
  function closeLb() {
    lb.hidden = true;
    lbImg.removeAttribute("src");
    if (lastTrigger) lastTrigger.focus();
  }
  Array.prototype.forEach.call(document.querySelectorAll(".poster button"), function (b) {
    b.addEventListener("click", function () { openLb(b); });
  });
  lb.addEventListener("click", closeLb);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !lb.hidden) closeLb(); });
})();
(function () {
  var form = document.getElementById("briefForm");
  var preview = document.getElementById("preview");
  var statusEl = document.getElementById("status");
  var ids = ["service", "company", "goal", "date"];
  var els = {};
  ids.forEach(function (id) { els[id] = document.getElementById(id); });

  function build() {
    var company = els.company.value.trim() || "(à préciser)";
    var goal = els.goal.value.trim() || "(à préciser)";
    var date = els.date.value.trim() || "(à préciser)";
    return "Bonjour Ghost,\n\n" +
      "Je suis intéressé(e) par : " + els.service.value + "\n" +
      "Entreprise / événement : " + company + "\n" +
      "Objectif : " + goal + "\n" +
      "Délai : " + date + "\n\n" +
      "Peux-tu me dire ce que tu proposes ?";
  }
  function refresh() {
    var t = build();
    preview.textContent = t;
    document.getElementById("waBrief").href = "https://wa.me/22870745806?text=" + encodeURIComponent(t);
  }
  ids.forEach(function (id) {
    els[id].addEventListener("input", refresh);
    els[id].addEventListener("change", refresh);
  });
  refresh();

  function selectPreview() {
    var range = document.createRange();
    range.selectNodeContents(preview);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var text = build();
    var ok = function () { statusEl.textContent = "Brief copié. Colle-le dans WhatsApp."; };
    var fail = function () { selectPreview(); statusEl.textContent = "Le texte est sélectionné, copie-le à la main."; };
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(ok, fail);
      } else { fail(); }
    } catch (err) { fail(); }
  });
})();
