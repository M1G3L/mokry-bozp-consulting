# Statické obrázky pro web BOZP Cepárek

Tato složka slouží pro ukládání všech statických obrázků prezentace (např. fotografie Mgr. Františka Cepárka, pozadí, loga a certifikáty).

## Jak nahrát vlastní obrázky?
1. Pojmenujte své soubory přehledně, např.:
   - `autor.jpg` (pro portrétní fotografii do sekce "O mně")
   - `hero-bg.jpg` (pro pozadí v úvodní sekci)
   - `logo.svg` nebo `logo.png` (pro logo v hlavičce)
2. Vložte soubory do této složky `/public/images/` pomocí správce souborů.

## Jak obrázky použít v kódu (`src/App.tsx`)?
Všechny soubory umístěné v této složce jsou serverem Vite dostupné přímo z kořenové adresy webu. To znamená, že nemusíte zadávat cestu `/public/`.

Příklady použití:
- Pro portrétní fotku: `<img src="/images/autor.jpg" alt="Mgr. Lubomír Mokrý" />`
- Pro pozadí v Hero sekci: `backgroundImage: "url('/images/hero-bg.jpg')"`

---
*Tip: Doporučujeme obrázky před nahráním zkomprimovat (např. přes TinyPNG) pro extrémně rychlé načítání webu.*
