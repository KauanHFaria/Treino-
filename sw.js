/* Increment VERSION whenever app files change. Never touch IndexedDB here. */
const VERSION='ritmo-v1.0.0';
const ROOT=new URL('./',self.location.href).href;
const CACHE=VERSION+'-'+ROOT;
const FILES=['./','./index.html','./styles.css','./core.js','./app.js','./manifest.webmanifest','./icons/icon.svg','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES.map(f=>new URL(f,ROOT).href)))));
self.addEventListener('activate',event=>event.waitUntil((async()=>{for(const key of await caches.keys())if(key.startsWith('ritmo-')&&key.endsWith('-'+ROOT)&&key!==CACHE)await caches.delete(key);await self.clients.claim();})()));
self.addEventListener('message',event=>{if(event.data?.type==='ACTIVATE')self.skipWaiting();});
self.addEventListener('fetch',event=>{const url=new URL(event.request.url);if(event.request.method!=='GET'||url.origin!==self.location.origin||!url.href.startsWith(ROOT))return;event.respondWith((async()=>{const cache=await caches.open(CACHE),cached=await cache.match(event.request,{ignoreSearch:true});if(cached)return cached;try{return await fetch(event.request);}catch(error){if(event.request.mode==='navigate')return await cache.match(new URL('index.html',ROOT).href);throw error;}})());});
