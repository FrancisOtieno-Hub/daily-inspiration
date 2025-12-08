      const CACHE = 'daily-inspiration-v1';
      const ASSETS = [
        '/', '/index.html', '/quotes.json', '/manifest.json', '/icon-192.png', '/icon-512.png'
      ];

      self.addEventListener('install', e => {
        self.skipWaiting();
        e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
      });

      self.addEventListener('activate', e => {
        e.waitUntil(self.clients.claim());
      });

      self.addEventListener('fetch', e => {
        if(e.request.method !== 'GET') return;
        e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => {
          return caches.open(CACHE).then(cache => { cache.put(e.request, res.clone()); return res; });
        })).catch(()=>caches.match('/index.html')));
      });

      // Listen to postMessage requests to show notifications
      self.addEventListener('message', event => {
        const msg = event.data || {};
        if(msg.type === 'show-notification'){
          self.registration.showNotification(msg.title || 'Daily Inspiration', { body: msg.body || '', icon: '/icon-192.png' });
        }
      });

      self.addEventListener('notificationclick', function(e){
        e.notification.close();
        e.waitUntil(clients.openWindow('/'));
      });