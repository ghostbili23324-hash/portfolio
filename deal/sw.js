var C="deal-v2",O="offline.html";
self.addEventListener("install",function(e){self.skipWaiting();e.waitUntil(caches.open(C).then(function(c){return c.add(O)}).catch(function(){}))});
self.addEventListener("activate",function(e){e.waitUntil(self.clients.claim())});
self.addEventListener("fetch",function(e){
  if(e.request.method!=="GET"||new URL(e.request.url).origin!==location.origin)return;
  e.respondWith(fetch(e.request).then(function(r){
    var k=r.clone();caches.open(C).then(function(c){c.put(e.request,k)});return r;
  }).catch(function(){return caches.match(e.request).then(function(m){return m||(e.request.mode==="navigate"?caches.match(O):Response.error())})}));
});
