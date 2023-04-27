export const title = "Next.jsでブログを作ってみた（※技術的な内容はありません）";
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
            </section>
            <section>
                <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
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
            </section>
            <section>
                <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
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
                            今回は静的なブログを作成するだけなのでJavaScriptはなくても作れるのですが、 以前から下記のReactというJavaScriptのフレームワークに興味があったので使ってみました。
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
                        <p className="pl-4">
                            作成したサイト（今回だとブログ）を世に配信するためのサービスです。 Next.jsを開発している会社がVercelという名前で、社名と同名のサービスとなります。
                            Next.jsの開発会社が開発したサービスということもあってNext.jsとの相性は抜群だそうで、
                            Gitの更新をトリガーにしてビルド→デプロイの流れを自動で行ってくれます。（こちらも現在勉強中です。。）
                        </p>
                    </div>
                    <p className="md:p-8">
                        本ブログで使った技術はざっと以上となります。
                        <br />
                        続いて、以上のプログラミング言語や技術をどのように勉強したかを書こうと思うのですが、その前にブログ制作を始める前の私のスキルについて簡単に触れようと思います。
                    </p>
                </div>
            </section>
            <section>
                <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
                    <h2 className="ml-2 text-xl">ブログ制作を始める前の自身のスキル</h2>
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
                    <h2 className="ml-2 text-xl">プログラミング言語などの学習方法</h2>
                </div>
                <div className="mt-8">
                    <p className="md:p-8">上記の通り、フロントエンドについてのスキルはほぼ皆無な私ですが、その状態からどんな過程で学習してこの記事を執筆するまでに至ったか、期間別でご紹介します。</p>
                </div>
                <div className="md:pl-8">
                    <h3 className="my-2 font-bold">0～1ヶ月半程度 : HTML, CSSの勉強</h3>
                    <p className="pl-4">
                        始めの1か月半の学習はほぼ全てHTMLとCSSの習得にあてていました。
                        <br />
                        やはりWebサイトを作成する上で欠かせないプログラミング言語ですし、基本中の基本ということでじっくり時間を書けて勉強しました。
                        <br />
                        その甲斐あってか、3カ月前はHTMLとCSSを使って"Hello
                        World"と表示するだけのページでもどう作れば良いか思いつかなったのが、現在ではこのようにブログ程度の簡単なサイトであればある程度自由に編集できるようになりました。
                        <br />
                        ちなみにHTML, CSSに限らず、基本的に勉強はUdemyというオンライン学習サイトを使って勉強しています。
                    </p>
                    <h3 className="my-2 font-bold">1ヶ月半～2ヶ月 : JavaScriptの勉強</h3>
                    <p className="pl-4">
                        大体1ヶ月半～2ヶ月の半月ではJavaScriptを主に学習していました。
                        <br />
                        バックエンドで良く使われるプログラミング言語はある程度使える知識は持っていたので、JavaScriptの勉強はあまり時間がかからなかった印象です。
                        <br />
                        ただ、せっかく勉強するならある程度深い部分まで知っておきたいという思いがあったので、
                        同期処理/非同期処理の違いやProxyなどの少し難しめの内容も勉強していたこともあり、少し長めに時間を取りました。（現時点の当ブログではそれら技術って本当に全く使ってないんですけどね、、）
                    </p>
                    <h3 className="my-2 font-bold">2ヶ月～2ヶ月半 : Reactの勉強</h3>
                    <p className="pl-4">
                        ここに来てやっとですが、Reactの勉強を始めます。 実をいうと、ブログを作ろうと思ってまず初めにUdemyでReactの講座を受講したのですが、HTMLやCSSが全く分からず、
                        Reactの内容が全く頭に入ってこなかったので、HTML, CSSの勉強時間をまず初めに多めに取り、このタイミングでReactの勉強を始めました。
                        <br />
                        約2カ月の地道な下積みの甲斐もあって、基本的なReactの仕組みの理解にはあまり時間はかからなかったと思っています。
                        <br />
                        ただ、コンポーネントを分ける単位や、コンポーネント間でデータを共有するuseContextやReduxをどの区切りで整理するのが良いのかは、実際にWeb制作を経験して学ぶ必要があるなーと思っています。
                    </p>
                    <h3 className="my-2 font-bold">2ヶ月半～3ヶ月 : Next.jsの勉強とブログ制作</h3>
                    <p className="pl-4">
                        ここでいきなりブログを作り始めます笑。Reactの勉強を始めた頃から早くブログを作りたい欲が高まっていたんですよね笑。
                        <br />
                        当初はプレーンのReactでブログ作成する予定だったのですが、
                        UdemyでReactの講座を見ていた時に、あわせてNext.jsというフレームワークの紹介があったので、そこでNext.jsを使うことに方向転換しました。
                        <br />
                        前に書いた通りNext.jsについては現在も勉強中であまり詳しくは理解できていないのですが、便利さ故にこの早さでブログを公開できています。 （
                        Next.jsを使ったブログの制作から公開まで一気に学ぶことが出来る講座がUdemyにあったからというのが早く作れた一番の理由です。はい。）
                    </p>
                </div>
                <p className="md:p-8">ブログを作ろう！と思い立ってからこの記事を書くまでの経緯は以上のような感じでした。 せっかくなので私が受講したUdemyの講座をご紹介させていただきます。</p>
            </section>
            <section>
                <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
                    <h2 className="ml-2 text-xl">今後の課題や実装したい機能</h2>
                </div>
                <div className="mt-8">
                    <p className="md:p-8">上記の通り、フロントエンドについてのスキルはほぼ皆無な私ですが、その状態からどんな過程で学習してこの記事を執筆するまでに至ったか、期間別でご紹介します。</p>
                </div>
                <div className="md:pl-8">
                    <h3 className="my-2 font-bold">0～1ヶ月半程度 : HTML, CSSの勉強</h3>
                    <p className="pl-4"></p>
                    <h3 className="my-2 font-bold">1ヶ月半～2ヶ月 : JavaScriptの勉強</h3>
                    <p className="pl-4"></p>
                    <h3 className="my-2 font-bold">2ヶ月～2ヶ月半 : Reactの勉強</h3>
                    <p className="pl-4"></p>
                    <h3 className="my-2 font-bold">2ヶ月半～3ヶ月 : Next.jsの勉強とブログ制作</h3>
                    <p className="pl-4"></p>
                </div>
                <p className="md:p-8">ブログを作ろう！と思い立ってからこの記事を書くまでの経緯は以上のような感じでした。 せっかくなので私が受講したUdemyの講座をご紹介させていただきます。</p>
            </section>
        </div>
    );
};

export default sample;
