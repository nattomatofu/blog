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
                    <p>
                        この度Next.jsでブログを作ってみました。
                        <br />
                        技術的なことはまだまだ勉強中で分からないことだらけですが、作ろうと思ったきっかけや使った技術、今後の課題をまとめようと思います。
                        <br />
                        <br />
                        まずは作ろうと思ったきっかけです。
                    </p>
                </div>
                <div className="mt-4 border-b border-l-4 border-neutral-700 border-l-neutral-700 md:mt-8">
                    <h2 className="ml-2 text-xl">作ろうと思ったきっかけ</h2>
                </div>
                <div className="mt-4">
                    <p>
                        結論から述べると、<span className="font-bold">いづれフリーランスとして活動して、その時のポートフォリオにしたい</span>と思っていたからです笑。
                        <br />
                        大学を卒業後、約3年間社会人として働いていますが、仕事の内容と時間をなかなか自分で調節できないことや、
                        苦手な人とのコミュニケーションを避けられない点が私としてはストレスに感じ、実力が発揮できていないなーと感じている今日この頃です。（ただの文句ですみません。。）
                        <br />
                        ただ、ネガティブな理由だけではなく、自分の学びを発信することでそれが誰かの助けになったり、自分自身の知識定着に繋がるので、文章にまとめるってとても大切なことだと思っています。
                        <br />
                        ざっとした理由は以上の思いがあったからですが、
                    </p>
                </div>
            </section>
        </div>
    );
};

export default sample;
