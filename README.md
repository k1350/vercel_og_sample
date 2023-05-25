## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open

- [http://localhost:3000/api/og](http://localhost:3000/api/og)
- [http://localhost:3000/api/og_kanji](http://localhost:3000/api/og_kanji)

The following error occurs.

```
- error Error: Unsupported OpenType signature <htm
    at Object.parseBuffer [as parse] (webpack-internal:///(middleware)/./node_modules/@vercel/og/dist/index.edge.js:11689:11)
    at Gt.addFonts (webpack-internal:///(middleware)/./node_modules/@vercel/og/dist/index.edge.js:16259:52)
    at xl (webpack-internal:///(middleware)/./node_modules/@vercel/og/dist/index.edge.js:17150:13)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async render (webpack-internal:///(middleware)/./node_modules/@vercel/og/dist/index.edge.js:18714:15)
    at async Object.start (webpack-internal:///(middleware)/./node_modules/@vercel/og/dist/index.edge.js:18753:25) {
  digest: undefined
}
```