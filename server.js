const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
app.disable('x-powered-by');
app.use(compression());

// STATIKLER: uzun cache; AMA .html dosyalarına NO-STORE
app.use(express.static(path.join(__dirname, 'public'), {
    maxAge: '7d',
    immutable: true,
    index: false, // ÖNEMLİ: index.html'i static servis ETME
    setHeaders: (res, filePath) => {
        if (filePath.endsWith('.html')) {
            res.setHeader('Cache-Control', 'no-store');
        }
    }
}));

// KÖK SAYFA: index.html'i hep NO-STORE gönder
app.get('/', (req, res) => {
    res.set('Cache-Control', 'no-store');
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// (SPA ise) diğer yollar da index'e düşsün: yine NO-STORE
app.get('*', (req, res) => {
    res.set('Cache-Control', 'no-store');
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`YOLGEÇEN MOTORS running on ${port}`));