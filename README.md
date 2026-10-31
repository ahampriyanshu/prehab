# Prehab

A personal series about discovering fitness in your twenties. A contents index on the left and the selected lesson on the right.

## Development

```bash
npm ci
npm run dev
npm run typecheck
npm run build
```

The app uses Next.js App Router and exports a static site to `out/`. If local sandbox restrictions prevent Turbopack from starting its CSS worker, use `npm run build -- --webpack`.

## Lessons

Edit `src/data/journal.ts` to update the series. The eight chapters follow the author's outline:

1. Prologue
2. My relationship with food
3. 12% Fat
4. Fasting
5. Protein vs Carbs
6. Becoming a gymcel
7. Cardio
8. Epilogue

Each lesson has an introduction, titled sections, a closing takeaway, and optional lists, comparison tables, short notes, and source links. The header contains only the title and introduction, without lesson metadata or reading times.

The copy uses the author's [Equity Markets for Dummies](https://ahampriyanshu.com/blog/expermenting-with-personal-finance/equity-markets-for-dummies-introduction) as its voice reference: direct explanations, defined terms, worked examples, dry humour, parenthetical asides, and a retrospective ending. The fitness text is original; specific measurements and transformation stories are not invented. The chapter “12% Fat” does not claim that the author reached that number. Nutrition and exercise facts link to the underlying sources, and numerical examples are labelled as hypothetical.

The home page opens the first lesson. Each lesson also has a `/journal/[slug]/` URL, an active item in the contents, and previous/next links. On mobile, the contents collapse above the lesson. `/journal/` remains an alias for the beginning of the series.

## Design

White background, black text, grey accents and hover states. System typography, a narrow reading column, and a sticky contents index. No photos, cards, display fonts, or promotional sections. Includes keyboard navigation, a skip link, and print styles.

## GitHub Pages

The site is built for `/prehab/` at [ahampriyanshu.com/prehab](https://ahampriyanshu.com/prehab/) (also available through `ahampriyanshu.github.io/prehab/`). GitHub Actions checks types, exports every lesson and deploys `out/` on pushes to `main`. Pull requests run the checks without publishing. The workflow uses GitHub’s automatic token; no deployment secrets are needed.

Use Node.js 22 (`nvm use`) and install with `npm ci`. To check the exact Pages build:

```sh
npm run typecheck
npm run build:pages
npm run check:pages
npm run preview:pages
```

The preview is at `http://127.0.0.1:4174/prehab/` (`PORT=4176 npm run preview:pages` selects another port). Development stays at the root URL with `npm run dev`. This is a static export, so `next start` is not used.

In **Settings → Pages**, choose **GitHub Actions** as the publishing source. Push a commit to `main` to deploy, or run `npm run deploy` with an authenticated [GitHub CLI](https://cli.github.com/) to redeploy the latest remote `main`. The command does not upload uncommitted changes.

`PAGES_BASE_PATH=/prehab` is set by `build:pages`; Next.js applies it to links and generated assets at build time. `scripts/check-pages.mjs` checks exported pages and local asset paths, and `scripts/preview-pages.mjs` serves the static output without additional packages. Generated builds, dependencies, secrets and local caches are ignored by Git.
