# Portfolyo Sitesi

React + Vite ile hazırlanmış kişisel portfolyo sitesi.

## İçeriği düzenlemek

Neredeyse tüm metinler tek dosyada: **`src/data.js`**
Adını, unvanını, bio'nu, becerilerini, projelerini, deneyim/eğitim
bilgilerini ve iletişim bilgilerini orada değiştir.

CV'ni indirilebilir yapmak için PDF dosyanı `public/cv.pdf` olarak ekle
(zaten "CV'yi İndir" butonu bu dosyaya bağlı).

## Yerelde çalıştırma

```bash
npm install
npm run dev
```

## Canlıya alma (deploy)

En kolay seçenekler:

- **Vercel**: [vercel.com](https://vercel.com) → "New Project" → bu klasörü/repoyu seç → otomatik algılar, deploy et.
- **Netlify**: [netlify.com](https://netlify.com) → "Add new site" → repoyu bağla ya da `npm run build` sonrası oluşan `dist` klasörünü sürükle-bırak yükle.
- **GitHub Pages**: `npm run build`, ardından `dist` klasörünü `gh-pages` dalına yayınla (`gh-pages` paketiyle otomatikleştirilebilir).

Production build'i elle almak için:

```bash
npm run build
```

Çıktı `dist/` klasörüne yazılır — bu klasörü herhangi bir statik hosting'e
yükleyebilirsin.
