# Template Fotógrafo

Site estático em HTML + CSS + JS puro, servido pelo Vite. Sem framework, sem build complicado.

## Rodar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera /dist pronto pra subir
npm run preview  # confere o build
```

Publicar: suba a pasta `dist/` na Vercel, Netlify, Cloudflare Pages ou qualquer hospedagem estática.

## Onde mexer

- `index.html` — todo o conteúdo (textos, ordem das seções, listas de fotos).
- `style.css` — cores e tipografia no topo, em `:root`.
- `main.js` — `SEGUNDOS = 5` muda o tempo da troca de imagem da capa; o lightbox está logo abaixo.
- `public/assets/` — troque os .svg de placeholder pelas fotos reais (.jpg/.webp), mantendo o nome do arquivo, ou atualize os `src` no `index.html`.

## Estrutura das fotos

- Capa: `ph-hero-01..06` (3 slides × 2 lados). Vertical, ~1200×1600.
- Ensaios: cada card tem `data-fotos` com a lista que abre no lightbox.
- Galeria: 12 imagens no mosaico (`.galeria`).
