# Tips

## Zod で文字列必須入力を定義する

```ts
name: z.string().trim().min(1, {
  message: '名前は1文字以上で入力してください。',
}),
```

## TypeScript の型エラーがおかしい時

エディターコマンドパレットで TS サーバー再起動

## GitHub Pages へのデプロイ

1. GitHub リポジトリの設定>actions>general から Workflow permissions を Read and write permissions にする。
2. nextconfig.js を修正

```js
// 追加
basePath: '/<リポジトリ名>',
output: 'export',
```

3. `.github/workflows/nextjs.yml` を作成（pnpm を使う前提）

```yml
name: Deploy Next.js site to Pages

on:
  push:
    branches: ['main']

jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [16]
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
        with:
          version: 7
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'pnpm'
      - name: Install dependencies
        run: pnpm install
      - name: Static HTML export with Next.js
        run: pnpm build
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```
