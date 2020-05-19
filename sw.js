self.addEventListener('install', function(e) {
	e.waitUntil(
		caches.open('mauriciojun-dcard-offline-01').then(function(cache) {
			return cache.addAll([
				'/dcard/',
				'/dcard/index.html',
				'https://pro.fontawesome.com/releases/v5.12.0/css/all.css',
				'https://4.bp.blogspot.com/-iGmwG2cWl0Q/XkwIzmN7KEI/AAAAAAAAAH0/vqpB9wKlYQgq_K4LdNXgYr12po6U9UAiQCK4BGAYYCw/s0/mauricio-jun-information-technology-consulting-04-D.png',
				'https://4.bp.blogspot.com/-tg4TLTPRzO0/XktzCvrIaxI/AAAAAAAAAGg/IrzX1YGZego5ABpR5gC5S8pz7tp6c1newCK4BGAYYCw/s1600/mauricio-jun-logo-horizontal-projetos-web-vinho-02.png',
				'https://1.bp.blogspot.com/-cQ4pBpW8i-8/Xo4SwsHxkkI/AAAAAAAAAM0/APT76D6Kiu8uGbQ1QXdHuapgQA_5wNqdQCPcBGAYYCw/s1600/mauricio-jun-sobre-01.png'
			]);
		})
	);
});

self.addEventListener('fetch', function(e) {
	e.respondWith(
		caches.match(e.request).then(function(response) {
			return response || fetch(e.request);
		})
	);
});
