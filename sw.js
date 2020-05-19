var CACHE_NAME = 'mauriciojun-dcard-offline-01';
var urlsToCache = [
	'/dcard/',
	'/dcard/index.html',
	'/dcard/offline.html',
	'/dcard/404.html',
	'/dcard/css/',
	'/dcard/css/all.css',
	'/dcard/webfonts/',
	'/dcard/webfonts/fa-brands-400.eot',
	'/dcard/webfonts/fa-brands-400.svg',
	'/dcard/webfonts/fa-brands-400.ttf',
	'/dcard/webfonts/fa-brands-400.woff',
	'/dcard/webfonts/fa-brands-400.woff2',
	'/dcard/webfonts/fa-regular-400.eot',
	'/dcard/webfonts/fa-regular-400.svg',
	'/dcard/webfonts/fa-regular-400.ttf',
	'/dcard/webfonts/fa-regular-400.woff',
	'/dcard/webfonts/fa-regular-400.woff2',
	//'/dcard/webfonts/fa-solid-900.eot',
	//'/dcard/webfonts/fa-solid-900.svg',
	//'/dcard/webfonts/fa-solid-900.ttf',
	//'/dcard/webfonts/fa-solid-900.woff',
	//'/dcard/webfonts/fa-solid-900.woff2',
	'https://4.bp.blogspot.com/-iGmwG2cWl0Q/XkwIzmN7KEI/AAAAAAAAAH0/vqpB9wKlYQgq_K4LdNXgYr12po6U9UAiQCK4BGAYYCw/s0/mauricio-jun-information-technology-consulting-04-D.png',
	'https://4.bp.blogspot.com/-tg4TLTPRzO0/XktzCvrIaxI/AAAAAAAAAGg/IrzX1YGZego5ABpR5gC5S8pz7tp6c1newCK4BGAYYCw/s1600/mauricio-jun-logo-horizontal-projetos-web-vinho-02.png',
	'https://1.bp.blogspot.com/-cQ4pBpW8i-8/Xo4SwsHxkkI/AAAAAAAAAM0/APT76D6Kiu8uGbQ1QXdHuapgQA_5wNqdQCPcBGAYYCw/s1600/mauricio-jun-sobre-01.png'
];
self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(CACHE_NAME)
		.then(function(cache) {
			return cache.addAll(urlsToCache);
		})
	);
});
self.addEventListener('activate', function(event) {
	event.waitUntil(
		caches.keys().then(function(cacheNames) {
			return Promise.all(
				cacheNames.filter(function(cacheName) {
					// Return true if you want to remove this cache,
					// but remember that caches are shared across
					// the whole origin
				}).map(function(cacheName) {
					return caches.delete(cacheName);
				})
			);
		})
	);
});
/* FETCH */
self.addEventListener('fetch', function(event) {
	event.respondWith(
	// Try the cache
		caches.match(event.request).then(function(response) {
			if (response) {
				return response;
			}
			return fetch(event.request).then(function(response) {
				if (response.status === 404) {
					return caches.match('/dcard/404.html');
				}
				return response
			});
		}).catch(function() {
		// If both fail, show a generic fallback:
		return caches.match('/dcard/offline.html');
		})
	);
});
