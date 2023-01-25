# 基礎知識

## 学習のスタンス

有象無象の情報が多く、情報の新陳代謝も早いので各技術の**公式ドキュメントを最終的には信頼**しましょう。公式ドキュメントすらソフトのアップデートに対し更新が追いついておらず、実態に対し古い内容だったりするので厳密には技術のソースコードが唯一信頼できるソースになります。

とはいえ公式ドキュメントはそもそも英語だったり、和訳しても横文字だらけで意味不明かと思います。そこで多くの人はより要点を噛み砕いて解説してくれる記事を探して有象無象のブログ（このサイト然り）や動画を探す旅に出ると思います。

とっかかりとしてそのアプローチはまったく否定しませんし、むしろ硬派、潔癖を決め込むあまり心折れて学習を放棄するほうがマズいので、とにかく学習が続くことを最優先してください。その際、できるだけ日付を意識してください。1 年以上前の記事にある方法はすでに使えなかったり廃止されていることがあるので、できるだけ更新日が新しい記事、動画を参照してください。

ある程度わかってきたら最初に述べた公式ドキュメントで得た知識の裏付けを行なってください。慣れてくると「あのブログ、公式ドキュメントで非推奨って書かれてるやり方教えてやがったな！」みたいなのが見えてきます。

最初は迷宮だった公式ドキュメントも日常的に目を通すと自分の庭のようになり、大体どこに何を書いてあるか見えるようになります。公式ドキュメントへの免疫をなくすことが脱初心者の近道です。

## 本は買うべきか？

個人的にはオススメしません。たとえば JavaScript や HTML、CSS のように昔から存在する基本的な技術さえ、日々進化しているので数年前のベストセラーに書いてある内容もすでに時代遅れになっていたりします。本は発行した時点で時が止まってしまうので開発技術を扱う媒体としては不向きだと考えています。

学習時点の最終知識を手に入れるにはやはり公式ドキュメントや、それをカバーする Zenn などの記事、YouTube 動画を追うのが良いでしょう。内容が古い場合、コメントや記事の更新を通して何らかの注釈が添えられる傾向にあるので古い知識を覚えるリスクを回避できます。

## 質問する際のコツ

会社の先輩、同僚、あるいは個人的なメンターに質問する場面があるかもしれません。その際は以下を意識してください。

- 何をしたいのか
- 何をしたのか
- 何が起きたのか（エラー文を"テキストで"添える）

を簡潔にまとめましょう。とくにサポートする人は結果を詳しく知りたいので、発生したバグや表示されたエラーをしっかり共有しましょう。エラーテキストで検索するケースが多いのでエラーはスクリーンショットではなく、エラー文をコピーして貼り付ける形で共有しましょう。（初学者はエラーをスクリーンショットで送りがちなので注意）

## トラブルが起きたら

エラー文でググると大体答えが出てきます。エラー文にプロジェクト固有の文字が含まれる場合検索精度を下げるので、その前後の文脈をキーワードにしましょう。
また、エラー文は多くの場合エラーが実際に発生したファイル、行数などが付随しますがそれも検索する上でノイズになるのでキーワードには含めません。

たとえば JavaScript で以下のエラーが出たとします。

```log
Error occurred prerendering page "/". Read more: https://nextjs.org/docs/messages/prerender-error
Error: Minified React error #152; visit https://reactjs.org/docs/error-decoder.html?invariant=152&args[]=Home for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at ab (/home/bennett/code/nextjs-render-comment-bug/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:32:466)
    at d (/home/bennett/code/nextjs-render-comment-bug/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:34:55)
    at bb (/home/bennett/code/nextjs-render-comment-bug/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:36:16)
    at a.b.render (/home/bennett/code/nextjs-render-comment-bug/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:42:43)
    at a.b.read (/home/bennett/code/nextjs-render-comment-bug/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:41:83)
    at Object.exports.renderToString (/home/bennett/code/nextjs-render-comment-bug/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:52:138)
    at Object.renderPage (/home/bennett/code/nextjs-render-comment-bug/node_modules/next/dist/server/render.js:766:45)
    at Object.defaultGetInitialProps (/home/bennett/code/nextjs-render-comment-bug/node_modules/next/dist/server/render.js:376:51)
    at Function.getInitialProps (/home/bennett/code/nextjs-render-comment-bug/.next/server/pages/_document.js:563:20)
    at Object.loadGetInitialProps (/home/bennett/code/nextjs-render-comment-bug/node_modules/next/dist/shared/lib/utils.js:65:29)
info  - Generating static pages (3/3)
```

このようなエラーが表示された時に「ウッ」と思考停止して閉じず、冷静に書かれている内容と向き合う必要があります。
パターンを掴めば何ら難しくないことに気づきます。最初の行を見てみます。

```log
Error occurred prerendering page "/". Read more: https://nextjs.org/docs/messages/prerender-error
```

この中で `Read more: xxx` の部分はエラーに関する情報へのリンクになっています。URL がエラー文に添えられていたら大体ドキュメントへのリンクです。リンク先で解決する場合もたまにありますが多くの場合役に立ちません。

`Error occurred prerendering page "/".` この部分がエラーの内容になっています。今回重要なのはここだけです。それ以降のおまじない的な文はエラーに関連する箇所の詳細になっています。

たとえば車のガソリンが切れて問題が発生した場合、より詳細な説明としては「車の後ろから注入するはずのガソリンが切れたことで車のどこどこが動かなくなり、どこどこが動力を得られずどこどこが停止し・・・」という感じになると思いますが要点は「ガソリンが切れた」というエラーが発生しているわけなのでそれだけ分かればいいわけです。なのでおまじないのようなテキストは無視して OK です。

最終的に要点となるエラー文に加え、そもそも何の技術を使っていたのか？を添えて検索するとズバリな記事が見つかったりします。今回の場合 Next.js にまつわるエラーなので

`Next.js Error occurred prerendering page "/".` などのワードで検索します。

時に、エラー文にプロジェクト固有の文字が含まれていることがあります。たとえば以下のようなエラーが出たとします。

```js
ReferenceError: "ユーザー太郎" is not defined
```

これは自分のプロジェクトで "ユーザー太郎" という変数を間違った形で使おうとしたために発生するエラーなのですが、"エラー太郎" はあくまで自分のプロジェクトに限ったエラーであり、他の人が同類のエラーを出す際は当然 "ユーザー太郎" という文字は表示されません。

このような文字は検索に含めず、使われた技術と合わせてこのようにして検索します。

```js
javascript ReferenceError is not defined
```

するとそれらしい答えが検索結果に表示されます。このようにしてエラーと向き合って調べながらトラブルを解決します。

<iframe width="560" height="315" src="https://www.youtube.com/embed/300fYfLSbxI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
