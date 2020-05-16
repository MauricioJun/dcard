//self.addEventListener('fetch', function(event) {});
self.addEventListener('install', function(e) {
	e.waitUntil(
		caches.open('mauriciojun-dcard-01').then(function(cache) {
			return cache.addAll([
				'https://mauriciojun-dcard.blogspot.com/',
				'https://mauriciojun-dcard.blogspot.com/index.html',
				'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js',
				'https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js',
				'https://www.blogger.com/static/v1/widgets/3905868452-widgets.js',
				'https://www.blogger.com/static/v1/widgets/3597120983-css_bundle_v2.css',
				'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
				'https://pro.fontawesome.com/releases/v5.12.0/css/all.css',
				'https://www.blogger.com/static/v1/v-css/368954415-lightbox_bundle.css',
				'https://4.bp.blogspot.com/-iGmwG2cWl0Q/XkwIzmN7KEI/AAAAAAAAAH0/vqpB9wKlYQgq_K4LdNXgYr12po6U9UAiQCK4BGAYYCw/s0/mauricio-jun-information-technology-consulting-04-D.png',
				'https://4.bp.blogspot.com/-tg4TLTPRzO0/XktzCvrIaxI/AAAAAAAAAGg/IrzX1YGZego5ABpR5gC5S8pz7tp6c1newCK4BGAYYCw/s1600/mauricio-jun-logo-horizontal-projetos-web-vinho-02.png'
			]);
		})
	);
});
self.addEventListener('fetch', function(e) {
	e.respondWith(
		caches.open('mauriciojun-dcard-01').then(function(cache) {
			return cache.match(e.request).then(function (response) {
				return response || fetch(e.request).then(function(response) {
					cache.put(e.request, response.clone());
					return response;
				});
			});
		})
	);
});
