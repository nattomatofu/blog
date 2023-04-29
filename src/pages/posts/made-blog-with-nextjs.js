import Head from "next/link";

const title = "Next.jsでブログを作ってみた（※技術的な内容はありません）";
const updateDate = "2023/4/29";

const sample = () => {
    return (
        <>
            <div className="container mx-auto px-5 xl:px-52">
                <section>
                    <div className="mt-8 border-b-2 border-t-2 border-neutral-700">
                        <h1 className="container mx-auto p-4 text-lg font-bold md:p-12 md:text-xl">{title}</h1>
                    </div>
                    <div className="mt-4 text-right">
                        <p className="font-thin">更新日 : {updateDate}</p>
                    </div>
                </section>

                <section>
                    <div className="mt-4">
                        <p className="md:p-8">
                            この度Next.jsでブログを作ってみました。
                            <br />
                            <br />
                            作ったのはこのブログです。
                            <br />
                            <br />
                            技術的なことはまだまだ勉強中で分からないことだらけですが、せっかくブログを作ったので、作ろうと思ったきっかけや使った技術、今後の課題などをまとめてみようと思います。
                            <br />
                            <br />
                        </p>
                        <div className="flex justify-center">
                            <div className="mb-8 border border-dashed border-neutral-900 p-4 align-middle md:w-1/2">
                                <p className="mb-4 text-center text-xl">目次</p>
                                <ul className="list-disc pl-6">
                                    <li className="pb-2">
                                        <a href="#id1">作ろうと思ったきっかけ</a>
                                    </li>
                                    <li className="pb-2">
                                        <a href="#id2">使った技術</a>
                                    </li>
                                    <li className="pb-2">
                                        <a href="#id3">ブログ制作を始める前の自身のスキル</a>
                                    </li>
                                    <li className="pb-2">
                                        <a href="#id4">プログラミング言語などの学習方法</a>
                                    </li>
                                    <li className="pb-2">
                                        <a href="#id5">今後の課題や実装したい機能</a>
                                    </li>
                                    <li className="pb-2">
                                        <a href="#id6">最後に</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <p className="md:p-8">まずは作ろうと思ったきっかけです。</p>
                    </div>
                </section>
                <section>
                    <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
                        <h2 className="ml-2 text-xl" id="id1">
                            作ろうと思ったきっかけ
                        </h2>
                    </div>
                    <div className="mt-8">
                        <p className="md:p-8">
                            結論から述べると<span className="font-bold underline decoration-red-400 decoration-2">いづれフリーランスとして活動して、その時のポートフォリオにしたい</span>
                            と思っていたからです笑。
                            <br />
                            <br />
                            大学を卒業後、現在まで約3年間社会人として働いていますが、仕事の内容と時間をなかなか自分で調節できないことや、
                            苦手な人とのコミュニケーションを避けられない点が私としてはストレスに感じ、実力が発揮できていないなーと感じている今日この頃です。（たぶん社会不適合者なんです。。）
                            <br />
                            <br />
                            ただ、ネガティブな理由だけではなく、自分の学びを発信することでそれが誰かの助けになったり、自分自身の知識定着に繋がるので、文章にまとめる（そして発信する）ってとても大切なことだと思っています。
                            <br />
                            <br />
                            ブログを作ろうと思った理由というより社会への文句になってしまいましたが、フリーランスになってみたい！という思いが年々高まってきているので、その準備第一弾としてこのブログを作ってみました。
                        </p>
                    </div>
                </section>
                <section>
                    <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
                        <h2 className="ml-2 text-xl" id="id2">
                            使った技術
                        </h2>
                    </div>
                    <div className="mt-8 md:p-8">
                        <p>このブログ作成には以下の技術やプログラミング言語を使っています。</p>
                        <div>
                            {/* <h3 className="my-2 font-bold underline decoration-dotted underline-offset-4">HTML</h3> */}
                            <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-16">HTML</h3>
                            <p className="pl-4">
                                おそらく皆さんご存じのHTML(HyperText Markup Language)です。
                                <br />
                                <br />
                                Webサイトを作るうえで基本中の基本の言語ということで使用しています。
                            </p>
                            <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-16">CSS(Tailwindcss)</h3>
                            <p className="pl-4">
                                HTMLで作成したコンテンツをデザインするための言語で「Cascading Style Sheets」の略だそうです。
                                <br />
                                <br />
                                今回はプレーンのCSSを使用するか、Bootstrapなどのフレームワークを使用するかで少し悩みましたが、
                                CSSの基本を理解したいという気持ちの上に楽もしたいという気持ちがあったので、 中間くらいに位置するTailwindcssを使用することにしました。
                            </p>
                            <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-16">JavaScript</h3>
                            <p className="pl-4">
                                HTML, CSSときたらJavaScriptですよね。フロントエンドではサイトのコンテンツに動きを付ける時などに使われます。
                                <br />
                                <br />
                                今回は静的なブログを作成するだけなのでJavaScriptはなくても作れるのですが、 以前から下記のReactというJavaScriptのフレームワークに興味があったので使ってみました。
                            </p>
                            <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-16">React</h3>
                            <p className="pl-4">
                                JavaScriptのフレームワークで、コンテンツをコンポーネントという単位でまとめて管理することができます。
                                <br />
                                <br />
                                ブログ程度の静的なサイトだとHTMLとCSSのみでも問題なく作ることができるのですが、前述の通りReactというものに以前から興味があったので、ページ自体や良く使うHTMLタグをコンポーネント化するために使用しました。
                            </p>
                            <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-16">Next.js</h3>
                            <p className="pl-4">
                                JavaScriptのフレームワークであるReactのさらにフレームワークであるNext.jsです。
                                <br />
                                <br />
                                Next.jsを使用することで難しい設定をしなくとも高速で快適なWebサイトを作ることが出来ます。
                                <br />
                                <br />
                                また、ルーティングで面倒な設定が不要なことも大きなメリットだと感じています。
                                <br />
                                <br />
                                Next.jsはReactについて調べている間に存在を知り、Reactを使うなら便利そうだ！使ってみよう！と思ったのがきっかけです。（Next.jsのSSG,
                                SSRの詳しい仕組みは現在勉強中です。。）
                            </p>
                            <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-16">Vercel</h3>
                            <p className="pl-4">
                                作成したサイト（今回だとブログ）を世に配信するためのサービスです。 Next.jsを開発している会社がVercelという名前で、社名と同名のサービスとなります。
                                <br />
                                <br />
                                Next.jsの開発会社が開発しているということもあってNext.jsとの相性は抜群だそうで、
                                Gitの更新をトリガーにしてビルド→デプロイの流れを自動で行ってくれます。（こちらも現在勉強中です。。）
                            </p>
                        </div>
                        <p className="pt-8 md:mt-4">
                            本ブログで使った技術はざっと以上となります。
                            <br />
                            続いて、以上のプログラミング言語や技術をどのように勉強したかを書こうと思うのですが、その前にブログ制作を始める前の私のスキルについて簡単に触れようと思います。
                        </p>
                    </div>
                </section>
                <section>
                    <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
                        <h2 className="ml-2 text-xl" id="id3">
                            ブログ制作を始める前の自身のスキル
                        </h2>
                    </div>
                    <div className="mt-8">
                        <p className="md:p-8">
                            大学を卒業後、システムエンジニアや社内SEの職を3年ほど経験しましたが、 ぶっちゃけ業務ではバックエンド側を担当することがほとんどで、
                            <span className="font-bold underline decoration-red-400 decoration-2">上記のプログラミング言語はほぼ触れたことはない状態でした。</span>
                            <br />
                            <br />
                            ですので、このブログ制作を始める前はHTMLはもちろんCSS、JavaScriptにも触れたことはほとんどなく、どちらかというとPythonやSQL、基盤でいうとAWS等の知識しかありませんでした。
                            <br />
                            <br />
                            ただIT業界で働いていると、業務内で嫌でもITについての話題はでてくるので、
                            このブログを作るにあたって触れたことのない技術であっても、何となく聞いたことがあるなーという技術やサービス名はいくつかあったという感じです。
                            <br />
                            <br />
                            はい、要するにフロントエンド初心者ということですね笑。
                        </p>
                    </div>
                </section>
                <section>
                    <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
                        <h2 className="ml-2 text-xl" id="id4">
                            プログラミング言語などの学習方法
                        </h2>
                    </div>
                    <div className="mt-8">
                        <p className="md:p-8">
                            上記の通り、フロントエンドについてのスキルはほぼ皆無な私ですが、その状態からどんな過程で学習してこの記事を執筆するまでに至ったか、期間別でご紹介します。
                        </p>
                    </div>
                    <div className="md:pl-8">
                        <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-8">0～1ヶ月半程度 : HTML, CSSの勉強</h3>
                        <p className="pl-4">
                            始めの1か月半の学習はほぼ全てHTMLとCSSの習得にあてていました。
                            <br />
                            <br />
                            やはりWebサイトを作成する上で欠かせないプログラミング言語ですし、基本中の基本ということでじっくり時間を書けて勉強しました。
                            <br />
                            <br />
                            その甲斐あってか、3カ月前はHTMLとCSSを使って「Hello
                            World」と表示するだけのページでもどう作れば良いか思いつかなったのが、現在ではこのようにブログ程度の簡単なサイトであればある程度自由に編集できるようになりました。
                            <br />
                            <br />
                            ちなみにHTML, CSSに限らず、基本的に勉強はUdemyというオンライン学習サイトを使って勉強しています。
                        </p>
                        <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-16">1ヶ月半～2ヶ月 : JavaScriptの勉強</h3>
                        <p className="pl-4">
                            大体1ヶ月半～2ヶ月の半月ではJavaScriptを主に学習していました。
                            <br />
                            <br />
                            バックエンドで良く使われるプログラミング言語はある程度使える知識は持っていたので、JavaScriptの勉強はあまり時間がかからなかった印象です。
                            <br />
                            <br />
                            ただ、せっかく勉強するならある程度深い部分まで知っておきたいという思いがあったので、
                            同期処理/非同期処理の違いやProxyなどの少し難しめの内容も勉強していたこともあり、少し長めに時間を取りました。（現時点の当ブログではそれら技術は本当に全く使ってないんですけどね、、）
                        </p>
                        <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-16">2ヶ月～2ヶ月半 : Reactの勉強</h3>
                        <p className="pl-4">
                            ここに来てやっとですが、Reactの勉強を始めます。 実をいうと、ブログを作ろうと思ってまず初めにUdemyでReactの講座を受講したのですが、HTMLやCSSが全く分からず、
                            Reactの内容が全く頭に入ってこなかったので、HTML, CSSの勉強時間をまず初めに多めに取り、このタイミングでReactの勉強を始めました。
                            <br />
                            <br />
                            約2カ月の地道な下積みの甲斐もあって、基本的なReactの仕組みの理解にはあまり時間はかからなかったと思っています。
                            <br />
                            <br />
                            ただ、コンポーネントを分ける単位や、コンポーネント間でデータを共有するuseContextやReduxをどの区切りで整理するのが良いのかは、実際にWeb制作を経験して学ぶ必要があるなーと思っています。
                        </p>
                        <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-16">2ヶ月半～3ヶ月 : Next.jsの勉強とブログ制作</h3>
                        <p className="pl-4">
                            ここでいきなりブログを作り始めます笑。Reactの勉強を始めた頃から早くブログを作りたい欲が高まっていたんですよね笑。
                            <br />
                            <br />
                            当初はプレーンのReactでブログ作成する予定だったのですが、
                            UdemyでReactの講座を見ていた時に、あわせてNext.jsというフレームワークの紹介があったので、そこでNext.jsを使うことに方向転換しました。
                            <br />
                            <br />
                            前に書いた通りNext.jsについては現在も勉強中であまり詳しくは理解できていないのですが、便利さ故にこの早さでブログを公開できています。 （
                            Next.jsを使ったブログの制作から公開まで一気に学ぶことが出来る講座がUdemyにあったからというのが早く作れた一番の理由です。はい。）
                        </p>
                    </div>
                    <p className="pt-8 md:mt-8 md:p-8">
                        ブログを作ろう！と思い立ってからこの記事を書くまでの経緯は以上のような感じでした。
                        <br />
                        <br />
                        せっかくなので私が受講したUdemyの講座をご紹介させていただきます。全てとても分かりやすい講座でした！
                    </p>
                    <section class="body-font text-gray-600">
                        <div class="container mx-auto flex flex-wrap px-5 py-6">
                            <div class="-m-4 flex flex-wrap">
                                <div class="p-4 md:w-full">
                                    <div class="flex flex-col rounded-lg border-2 border-gray-200 border-opacity-50 p-8 sm:flex-row">
                                        <div class="flex-grow">
                                            <h2 class="title-font mb-3 text-lg font-medium text-gray-900">HTML/CSSの講座</h2>
                                            <ul className="list-disc">
                                                <li>
                                                    <a href="https://www.udemy.com/course/html5css3-b/" className="cursor-pointer text-blue-500 underline decoration-blue-500 hover:scale-105">
                                                        【最新2022】未経験からHTML、CSS をマスターして、WEBデザイナー・エンジニアを目指す　最高の実践コース
                                                    </a>
                                                </li>
                                                <li className="pt-2">
                                                    <a href="https://www.udemy.com/course/html-css-js/" className="cursor-pointer text-blue-500 underline decoration-blue-500 hover:scale-105">
                                                        ちゃんと学ぶ、HTML/CSS + JavaScript
                                                    </a>
                                                    （JavaScriptも含まれていますが、HTML/CSSの印象が強かったのでHTML/CSSに入れさせていただきました）
                                                </li>
                                                <li className="pt-2">
                                                    <a href="https://www.udemy.com/course/tailwindcss_beginner/" className="cursor-pointer text-blue-500 underline decoration-blue-500 hover:scale-105">
                                                        【tailwindcss】初心者向け講座・CSSが苦手な人向け 【わかりやすさ重視】【次世代のCSS】にじっくり取り組む
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-4 md:w-full">
                                    <div class="flex flex-col rounded-lg border-2 border-gray-200 border-opacity-50 p-8 sm:flex-row">
                                        <div class="flex-grow">
                                            <h2 class="title-font mb-3 text-lg font-medium text-gray-900">JavaScriptの講座</h2>
                                            <ul className="list-disc">
                                                <li>
                                                    <a href="https://www.udemy.com/course/javascript-essence/" className="cursor-pointer text-blue-500 underline decoration-blue-500 hover:scale-105">
                                                        【JS】ガチで学びたい人のためのJavaScriptメカニズム
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-4 md:w-full">
                                    <div class="flex flex-col rounded-lg border-2 border-gray-200 border-opacity-50 p-8 sm:flex-row">
                                        <div class="flex-grow">
                                            <h2 class="title-font mb-3 text-lg font-medium text-gray-900">Reactの講座</h2>
                                            <ul className="list-disc">
                                                <li>
                                                    <a href="https://www.udemy.com/course/react-complete-guide/" className="cursor-pointer text-blue-500 underline decoration-blue-500 hover:scale-105">
                                                        【2023年最新】React(v18)完全入門ガイド｜Hooks、Next.js、Redux、TypeScript
                                                    </a>
                                                </li>
                                                <li className="pt-2">
                                                    <a
                                                        href="https://www.udemy.com/course/modern_javascipt_react_beginner/"
                                                        className="cursor-pointer text-blue-500 underline decoration-blue-500 hover:scale-105"
                                                    >
                                                        モダンJavaScriptの基礎から始める挫折しないためのReact入門
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-4 md:w-full">
                                    <div class="flex flex-col rounded-lg border-2 border-gray-200 border-opacity-50 p-8 sm:flex-row">
                                        <div class="flex-grow">
                                            <h2 class="title-font mb-3 text-lg font-medium text-gray-900">Next.jsの講座</h2>
                                            <ul className="list-disc">
                                                <li>
                                                    <a
                                                        href="https://www.udemy.com/course/nextjs-microblog-for-beginner/"
                                                        className="cursor-pointer text-blue-500 underline decoration-blue-500 hover:scale-105"
                                                    >
                                                        【Next.js入門】ReactフレームワークのNext.jsでマイクロブログを構築しながら基礎と本質を学ぶ講座
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section>
                    <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
                        <h2 className="ml-2 text-xl" id="id5">
                            今後の課題や実装したい機能
                        </h2>
                    </div>
                    <div className="mt-8">
                        <p className="md:p-8">
                            思っていたより早くブログを公開することはできたのですが、学習終盤で一気に作ったこともあり、現在のこのブログは見た目も中身もスッカスカです笑。
                            <br />
                            しかし今後もメンテナンスはしてきたいと思っているので、現時点で追加したと思っている機能や、課題について最後にまとめようと思います。
                        </p>
                    </div>
                    <div className="md:pl-8">
                        <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-8">ドメインの購入とサーバへの設定</h3>
                        <p className="pl-4">
                            いや、早くやれよって感じですよね笑。というかもはや、独自ドメインを設定せずにサイトを公開したと言えないのでは
                            、、という感じなのですが、一応固定のURLでサイトを公開でいているので、一旦良しとしています笑。
                            <br />
                            <br />
                            ただやはり、本格的に運用していくのであれば独自ドメインは設定した方が良いと思うので（愛着がわきますし、、）、まず初めにドメインを買って設定したいと思っています。
                        </p>
                        <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-16">良く使うもののコンポーネント化</h3>
                        <p className="pl-4">
                            良く使うHTMLタグなどその他コンポーネント化できそうな部分が現状はまだまだあります。
                            <br />
                            <br />
                            見出しのデザインや目次のデザインなど、再利用して何度も使用するものは早めにコンポーネント化して修正したいときの負荷を減らさねばっ、、
                            <br />
                            と思っているのでこちらも早めに対応したいことの1つに挙がっています。
                        </p>
                        <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-16">GA(Google Analytics)の導入</h3>
                        <p className="pl-4">
                            ブログを作ったからにはやはりどのくらい見られているのかが気になりますよね。
                            <br />
                            GAを導入することで、ホームページの訪問者数や、訪問者がサイト上で行った操作をデータで可視化することができます。
                            <br />
                            <br />
                            このブログはまだまだ作ったばかりで、そんな機能があっても宝の持ち腐れ状態になる未来が見えるので急いではいないのですが、
                            いずれGAを導入して最低でも訪問者数の把握はできたらいいなーなんて思っています。
                        </p>
                        <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-16">AWSへの移行</h3>
                        <p className="pl-4">
                            ここまであまり触れてこなかったのですが、私は仕事でAWSを使っていて割と多くのサービスに触れたことがあるので、EC2に立てたWebサーバにブログを移行して、更にCI/CDの設定も自作してみようかなーと思っています。
                            <br />
                            <br />
                            現状のVercelのサーバと比較すると運用の負荷は上がること間違いなしな気がしていますが、その分サーバ周りの勉強にもなるので、こちらもいずれチャレンジしたいです。
                        </p>
                    </div>
                    <p className="pt-8 md:mt-8  md:p-8">
                        現時点でパッと思いつく課題は以上のような感じです。
                        <br />
                        <br />
                        もっと記事やコンテンツが増えれば、ナビゲーションメニューとかも作ってみたいなーと思っているのですが、現状では作っても画面遷移させる先がないので一旦保留としてます。
                        <br />
                        それっぽいものでいうと、記事が増えてきたらジャンル（カテゴリ）別のメニューを作って、それぞれのジャンルの記事一覧にジャンプさせるとかですかね、、いつになるんだろう、、笑。
                    </p>
                </section>
                <section>
                    <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
                        <h2 className="ml-2 text-xl" id="id6">
                            最後に
                        </h2>
                    </div>
                    <div className="mt-8">
                        <p className="md:p-8">
                            以上、Next.jsでブログを作成したので、作るまでの学習や今後の課題についてまとめてみました。
                            <br />
                            <br />
                            まだまだ改善しなければならない点も沢山あるのですが、今後もメンテナンスを続けてこのブログを育てていくことができたらいいなと思っています！
                            <br />
                            また冒頭でも書いたのですが、ブログを作った一番の目的はフリーランスになった時のアピール材料にすることなので、
                            <span className="font-bold underline decoration-red-400 decoration-2">技術的な記事を沢山投稿していく予定です！</span>
                            （その前にまずドメインを購入して設定します笑。）
                            <br />
                            <br />
                            【お礼】
                            <br />
                            まともに記事を書いてみた経験がこの記事で始めてということもあり、汚い文章で申し訳ありませんが、読んでくださった方がもしいたら本当にありがとうございました！
                            <br />
                            今後は技術的な記事をメインに投稿していく予定なので、もしよかったらまた訪れてみてください！
                            <br />
                            <br />
                            それでは！
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
};

export default sample;
