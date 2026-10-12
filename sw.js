// Service worker mínimo: permite instalar la app. No guarda caché, así siempre se carga la versión más reciente.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
