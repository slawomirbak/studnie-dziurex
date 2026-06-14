# studnie-dziurex

Strona "under construction" dla studnie-dziurex.pl — przekierowuje odwiedzających do nowej strony sgbb.pl.

## Stack

- React 19 + TypeScript
- Vite 8
- SCSS Modules
- Node 22+ / npm 10+

## Lokalne uruchomienie

```bash
npm install
npm run dev
```

Strona dostępna na `http://localhost:5173`.

## Budowanie

```bash
npm run build
```

Wynik w katalogu `dist/`.

## Wdrożenie

Strona hostowana na **GitHub Pages**. Deploy uruchamia się automatycznie po każdym push do gałęzi `main`:

```bash
git push origin main
```

GitHub Actions (`.github/workflows/deploy.yml`) buduje projekt i publikuje katalog `dist/` na GitHub Pages.
