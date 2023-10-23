import Layout from "@/pages/layout/Layout";
import TitleText from "@/components/TitleText";
import UpdateDate from "@/components/UpdateDate";
import TableOfContents from "@/components/TableOfContents";
import Preface from "@/components/Preface";
import PrefaceText from "@/components/PrefaceText";
import MainHeading from "@/components/MainHeading";
import MainParagraph from "@/components/MainParagraph";
import MediumHeading from "@/components/MediumHeading";
import MediumParagraph from "@/components/MediumParagraph";
import CodeText from "@/components/CodeText";
import CodeBlock from "@/components/CodeBlock";
import Head from "next/head";

const title = "アトミックデザインについてのメモ";
const updateDate = "2023/9/18";
const thumbnailImagePath = "/images/thumbnail/atomic_design.png";
const metaDescription =
    "どうも、納豆大好きnattoです。実務で使ったことは一度もありませんが、アトミックデザインについて整理します。";
const metaOgUrl = "https://www.nattomatofu.com/posts/atomic-design";
const metaOgType = "article";

const AtomicDesign = () => {
    return (
        <Layout>
            <Head>
                <meta content={metaDescription} name="description"></meta>
                <meta charset="utf-8"></meta>
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                ></meta>
                <meta property="og:url" content={metaOgUrl} />
                <meta property="og:type" content={metaOgType} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:site_name" content={title} />
                <meta property="og:image" content={thumbnailImagePath} />
                <title>{title}</title>
            </Head>
            <main>
                <div className="container mx-auto px-5 xl:pl-52">
                    <section>
                        <TitleText>{title}</TitleText>
                        <UpdateDate>{updateDate}</UpdateDate>
                    </section>

                    <section>
                        <Preface>
                            <PrefaceText>
                                最近Reactについて少し勉強していたのですが、その際にアトミックデザインというものを知り、React以外でも使い道がありそうだと思ったので簡単に整理します。
                            </PrefaceText>
                            <TableOfContents />
                        </Preface>
                    </section>
                    <section>
                        <MainHeading>アトミックデザインとは</MainHeading>
                        <MainParagraph>
                            そもそもアトミックデザインとは何かということですが、システムのデザイン設計手法のことのようです。
                            <br />
                            ReactやVueなどでよく使われる手法ですが、それらのフレームワークに限った手法ではありません。
                            <br />
                            ただ、画面上の要素をコンポーネントとして管理するフレームワークとの相性が良いので、それらのサービスとよく一緒に使われるんですね。
                            <br />
                            アトミックデザインでは、画面上の部品を大きく以下の5つに分類します。
                            <ul className="list-inside list-disc md:p-8">
                                <li className="my-4">Atom</li>
                                <li className="my-4">Molecule</li>
                                <li className="my-4">Organism</li>
                                <li className="my-4">Template</li>
                                <li className="my-4">Page</li>
                            </ul>
                            上から順に要素の枠としての大きさが大きくなっていきます。
                            <br />
                            次のセクションから1つ1つが何を表しているのか簡単に整理します。
                        </MainParagraph>
                    </section>
                    <section>
                        <MainHeading>
                            アトミックデザインの各要素について
                        </MainHeading>
                        <MainParagraph>
                            先程のセクションで5つの要素があると書きましたが、それぞれについて簡単にまとめます。
                            <MediumHeading>Atom</MediumHeading>
                            <MediumParagraph>
                                まずはAtomです。
                                <br />
                                日本語だと「原子」という意味で、アトミックデザインの中で一番小さな要素となります。
                                <br />
                                具体的な画面上の要素としては、「ボタン」や「入力ボックス」、「アイコン」、「単行テキスト」などが該当するのですが、この単位が最小のコンポートとなります。
                                <br />
                                Reactのコードで、ボタンと入力ボックスを書くと以下のような感じです。
                                <CodeBlock
                                    language="javascript"
                                    filename="Atombutton.js"
                                    isLineNum="true"
                                >
                                    {`export const AtomButton = (children) => {
    return <button>{children}</button>;
};`}
                                </CodeBlock>
                                <CodeBlock
                                    language="javascript"
                                    filename="AtomInput.js"
                                    isLineNum="true"
                                >
                                    {`export const AtomInput = ({ placeholderText }) => {
    return <input type="text" placeholder={placeholderText} />;
};`}
                                </CodeBlock>
                                そしてこのAtomの集まりで、次のmoleculeを構成します。
                            </MediumParagraph>
                            <MediumHeading>Moleculeとは</MediumHeading>
                            <MediumParagraph>
                                続いてMoleculeです。
                                <br />
                                日本語だと「分子」という意味で、
                                先程のAtomの集まった物がこのMoleculeです。
                                <br />
                                具体的な画面上の要素としては、「アイコン＋メニュー名」や「検索テキスト入力欄＋検索ボタン」、「サムネイル画像＋題名」などが該当します。
                                <br />
                                さっき上で作成したAtomを使って、Reactのコードで書くと以下のような感じです。
                                <CodeBlock
                                    language="javascript"
                                    filename="MoleculeSearchComponent.js"
                                    isLineNum="true"
                                >
                                    {`import { AtomButton } from "./atoms/button/AtomButton";
import { AtomInput } from "./atoms/input/AtomInput";

export const MoleculeSearchComponent = () => {
    return (
        <div>
            <AtomInput placeholderText="検索文字を入力してください" />
            <AtomButton>検索</AtomButton>
        </div>
    );
};`}
                                </CodeBlock>
                            </MediumParagraph>
                            <MediumHeading>Organismとは</MediumHeading>
                            <MediumParagraph>
                                続いてOrganismです。
                                <br />
                                同じパーツが繰り返し使われている要素を指すそうです。
                                <br />
                                具体的には、「記事一覧」や「商品一覧メニュー」、「サイドメニュー」などが該当するのですが、中にAtomやMoleculeを含むこともあります。
                                <br />
                                以下がReactを使って、記事のカードを作成した例です。（前のAtomとMoleculeで作成したパーツは使っていません。。）
                                <br />
                                <CodeBlock
                                    language={"javascript"}
                                    isLineNum={"true"}
                                    filename={"OrganismCard.js"}
                                >
                                    {`export const PostCard = ( { thumbnailPath,  altText, title, postDate, updateDate, } ) => {
    return (
        <div>
            <img
                height={320}
                width={320}
                src={thumbnailPath}
                alt={altText}
            />
            <dl>
                <dt>記事タイトル</dt>
                <dd>{title}</dd>
                <dt>投稿日</dt>
                <dd>{postDate}</dd>
                <dt>更新日</dt>
                <dd>{updateDate}</dd>
            </dl>
        </div>
    );
};`}
                                </CodeBlock>
                                当然このままだとデザイン性がなさすぎて使い物にならないのですが、このように
                                <CodeText>props</CodeText>
                                で受け取った値をループすることで同じコンポートネントを複製していくようなイメージですね。
                                <br />
                                また、サンプルなので全くAtomに細分化していないのですが、
                                <CodeText>div</CodeText>
                                タグ内の要素は別コンポーネントに分けたほうが良いのかもしれません。
                            </MediumParagraph>
                            <MediumHeading>Templateとは</MediumHeading>
                            <MediumParagraph>
                                続いてTemplateです。
                                <br />
                                このTemplateは、ページを構成する要素のうち、全てもしくはいくつかのページで共通するコンポーネントとなります。
                                <br />
                                具体的な例としては、ヘッダーやフッターなどですね。
                                <br />
                                一応Reactのコードで書こうとすると以下のようなものです。
                                <CodeBlock
                                    language={"javascript"}
                                    isLineNum={true}
                                    filename={"TemplateLayout.js"}
                                >
                                    {`import { Header } from "./atoms/layout/Header";
import { Footer } from "./atoms/layout/Footer";

export const TemplateLayout = ({children}) => {
    return (
        <>
            <Header />
            { children }
            <Footer />
        </>
    )
}`}
                                </CodeBlock>
                            </MediumParagraph>
                            <MediumHeading>Pageとは</MediumHeading>
                            <MediumParagraph>
                                最後はPageです。
                                <br />
                                ここまで出てきたAtom, Molecule, Organism,
                                Templateを元に作成された、ユーザーから見える一つ一つのページとなります。
                                <br />
                                当たり前ですがページの内容はページによってまちまちなので、特にこれといったコードはありませんが、今書いているこのアトミックデザインの記事のような物が具体的な例になるかと思います。
                            </MediumParagraph>
                        </MainParagraph>
                    </section>
                    <section>
                        <MainHeading>最後に</MainHeading>
                        <MainParagraph>
                            以上、アトミックデザインについて簡単ですが整理しました。
                            <br />
                            <br />
                            実務のプロジェクトでは
                            <br />
                            「この考え方と完全に一致するように必ずコンポーネントを分割しましょう！」
                            <br />
                            という訳にはいかず、プロジェクト毎で分割の仕方は異なるかと思いますが、１つの参考として使えそうですね。
                            <br />
                            <br />
                            それでは！
                        </MainParagraph>
                    </section>
                </div>
            </main>
        </Layout>
    );
};

export default AtomicDesign;
