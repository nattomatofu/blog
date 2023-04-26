export const title = "Next.jsでブログを作ってみた";
export const updateDate = "2023/4/25";

const sample = () => {
    return (
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
                        まずは作ろうと思ったきっかけです。
                    </p>
                </div>
                <div className="mt-4 border-b border-l-4 border-neutral-700 border-l-neutral-700 md:mt-12">
                    <h2 className="ml-2 text-xl">作ろうと思ったきっかけ</h2>
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
                <div className="mt-4 border-b border-l-4 border-neutral-700 border-l-neutral-700 md:mt-12">
                    <h2 className="ml-2 text-xl">使った技術</h2>
                </div>
                <div className="mt-8">
                    <p className="md:p-8">このブログ作成には以下の技術やプログラミング言語を使っています。</p>
                    <div className="md:pl-8">
                        <h3 className="my-2 font-bold">HTML</h3>
                        <p className="pl-4">
                            おそらく皆さんご存じのHTML(HyperText Markup Language)です。
                            <br />
                            Webサイトを作るうえで基本中の基本の言語ということで使用しています。
                        </p>
                        <h3 className="my-2 font-bold">CSS(Tailwindcss)</h3>
                        <p className="pl-4">
                            HTMLで作成したコンテンツをデザインするための言語で「Cascading Style Sheets」の略だそうです。
                            <br />
                            今回はプレーンのCSSを使用するか、Bootstrapなどのフレームワークを使用するかで少し悩みましたが、 CSSの基本を理解したいという気持ちの上に楽もしたいという気持ちがあったので、
                            中間くらいに位置するTailwindcssを使用することにしました。
                        </p>
                        <h3 className="my-2 font-bold">JavaScript</h3>
                        <p className="pl-4">
                            HTML, CSSときたらJavaScriptですよね。フロントエンドではサイトのコンテンツに動きを付ける時などに使われます。
                            今回はブログを作成するだけなので難しいことはやっていないのですが、 以前から下記のReactというフレームワークに興味があったので使ってみました。
                        </p>
                        <h3 className="my-2 font-bold">React</h3>
                        <p className="pl-4">
                            JavaScriptのフレームワークで、コンテンツをコンポーネントという単位でまとめて管理することができます。
                            <br />
                            ブログ程度の静的なサイトだとHTMLとCSSのみでも問題なく作ることができるのですが、前述の通りReactというものに以前から興味があったので、ページ自体や良く使うHTMLタグをコンポーネント化するために使用しました。
                        </p>
                        <h3 className="my-2 font-bold">Next.js</h3>
                        <p className="pl-4">
                            JavaScriptのフレームワークであるReactのさらにフレームワークであるNext.jsです。
                            <br />
                            Next.jsを使用することで難しい設定をしなくとも高速で快適なWebサイトを作ることが出来ます。
                            <br />
                            また、ルーティングで面倒な設定が不要なことも大きなメリットだと感じています。
                            <br />
                            Next.jsはReactについて調べている間に存在を知り、Reactを使うなら便利そうだ！使ってみよう！と思ったのがきっかけです。（Next.jsのSSG, SSRの詳しい仕組みは現在勉強中です。。）
                        </p>
                        <h3 className="my-2 font-bold">Vercel</h3>
                        <p className="pl-4"></p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default sample;
