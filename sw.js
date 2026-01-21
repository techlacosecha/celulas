const CACHE_NAME = 'celulas-v1';
const ASSETS = [
    './english.html',
    './celulas.xlsx',
    './english_header.svg',
    './manifest.json',
    './icon-512.png',
    'https://cdn.datatables.net/1.13.8/css/jquery.dataTables.min.css',
    'https://code.jquery.com/jquery-3.7.0.min.js',
    'https://cdn.datatables.net/1.13.8/js/jquery.dataTables.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request))
    );
});
