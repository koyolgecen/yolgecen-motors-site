# YOLGEÇEN MOTORS — Tek sayfalık site (TR)

Bu depo, Heroku'ya tek komutla deploy edilebilen minimal bir Node.js + statik site yapısı içerir.

## Dosya yapısı
- `Procfile` — Heroku için süreç tanımı
- `server.js` — Express ile statik dosya sunucu
- `public/` — Tüm web varlıkları (HTML, görseller, video)
  - `index.html` — Ana sayfa (Tailwind CDN ile)
  - `assets/logo.svg` — Logo (placeholder)
  - `assets/favicon.svg` — Favicon
  - `assets/images/` — Galeri görselleri (placeholder SVG'ler)
  - `hero.mp4` — Ana video (bu dosyayı siz ekleyeceksiniz)
  - `manifest.json`, `robots.txt`

## Özelleştirme
- Logonuzu `public/assets/logo.svg` ile değiştirin (PNG/JPG de kullanabilirsiniz ama `index.html` yolunu güncelleyin).
- Videonuzu `public/assets/hero.mp4` olarak kaydedin.
- Fotoğrafları `public/assets/images/` klasörüne atın ve `index.html` içindeki yolları güncelleyin.
- WhatsApp numaranızı `index.html` içinde `wa.me` linkine yazın.
- Açıklama metinlerini ve adresi güncelleyin (SEO için `<head>` kısmındaki `meta` etiketlerini de).

## Heroku'ya deploy
```bash
heroku create yolgecen-motors --region eu
heroku stack:set heroku-22
git init && git add . && git commit -m "YOLGEÇEN MOTORS ilk sürüm"
heroku git:remote -a yolgecen-motors
git push heroku main
```

Alternatif olarak GitHub ile bağlayıp **Deploy** sekmesinden otomatik deploy açabilirsiniz.

## Özel alan adı (domain) bağlama
```bash
heroku domains:add www.senin-domainin.com
# Heroku sana bir hedef (DNS Target) verecek. Domain DNS'inde CNAME olarak ekle.
heroku domains
```

## Notlar
- Tailwind CDN kullanıldı; başlamak için hızlıdır. İsterseniz build adımıyla gerçek Tailwind konfigurasyonuna geçebiliriz.
- Basit Express sunucu prod'da gzip ve basit güvenlik başlıkları ekler.
- Her türlü geliştirme (çok dilli yapı, randevu formu, ürün listeleme, mini blog, vb.) için temel uygundur.
