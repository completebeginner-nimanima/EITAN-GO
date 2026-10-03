// ====================
// Service Worker
// ====================


// 保存しておくファイルの名前
const CACHE_NAME = "eitan-go-v2";


// オフラインでも使えるように
// 保存しておきたいファイル
const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./manifest.json"
];


// ====================
// インストーーーーーーーール
// ====================

self.addEventListener("install", function (event) {

    // 必要なファイルをキャッシュに保存する
    event.waitUntil(

        caches.open(CACHE_NAME).then(function (cache) {

            return cache.addAll(FILES_TO_CACHE);

        })

    );

});


// ====================
// リクエスト
// ====================

self.addEventListener("fetch", function (event) {

    // キャッシュにあるファイルを優先して使う
    event.respondWith(

        caches.match(event.request).then(function (response) {

            // キャッシュがあれば、それを返す
            if (response) {

                return response;

            }

            // キャッシュになければ普通に取得する
            return fetch(event.request);

        })

    );

});
