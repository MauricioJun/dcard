var CACHE_NAME = 'mauriciojun-dcard-offline-01';
var urlsToCache = [
	'.',
	'index.html',
	'404.html',
	'offline.html',
	'https://pro.fontawesome.com/releases/v5.12.0/css/all.css',
	'https://4.bp.blogspot.com/-iGmwG2cWl0Q/XkwIzmN7KEI/AAAAAAAAAH0/vqpB9wKlYQgq_K4LdNXgYr12po6U9UAiQCK4BGAYYCw/s0/mauricio-jun-information-technology-consulting-04-D.png',
	'https://4.bp.blogspot.com/-tg4TLTPRzO0/XktzCvrIaxI/AAAAAAAAAGg/IrzX1YGZego5ABpR5gC5S8pz7tp6c1newCK4BGAYYCw/s1600/mauricio-jun-logo-horizontal-projetos-web-vinho-02.png',
	'https://1.bp.blogspot.com/-cQ4pBpW8i-8/Xo4SwsHxkkI/AAAAAAAAAM0/APT76D6Kiu8uGbQ1QXdHuapgQA_5wNqdQCPcBGAYYCw/s1600/mauricio-jun-sobre-01.png',
	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14700.820600225286!2d-43.101292533323544!3d-22.905802843593587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x998408ab897e3b%3A0x9dc61223646a474b!2sR.%20Maestro%20Jos%C3%A9%20Botelho%2C%20171%20-%20Santa%20Rosa%2C%20Niter%C3%B3i%20-%20RJ%2C%2024230-410!5e0!3m2!1spt-PT!2sbr!4v1582671075508!5m2!1spt-PT!2sbr'
];
self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(CACHE_NAME)
		.then(function(cache) {
			return cache.addAll(urlsToCache);
		})
	);
});
self.addEventListener('fetch', function(event) {
	event.respondWith(
	// Try the cache
		caches.match(event.request).then(function(response) {
			if (response) {
				return response;
			}
			return fetch(event.request).then(function(response) {
				if (response.status === 404) {
					return caches.match('/404.html');
				}
				return response
			});
		}).catch(function() {
		// If both fail, show a generic fallback:
		return caches.match('/offline.html');
		})
	);
});
