import Layout from "@/components/Layout";
import TitleText from "@/components/TitleText";
import UpdateDate from "@/components/UpdateDate";
import TableOfContents from "@/components/TableOfContents";
import LinkText from "@/components/LinkText";
import Preface from "@/components/Preface";
import PrefaceText from "@/components/PrefaceText";
import MainHeading from "@/components/MainHeading";
import MainParagraph from "@/components/MainParagraph";
import MediumHeading from "@/components/MediumHeading";
import MediumParagraph from "@/components/MediumParagraph";
import CodeText from "@/components/CodeText";
import CodeBlockTitle from "@/components/CodeBlockTitle";
import CodeBlock from "@/components/CodeBlock";
import Head from "next/head";

const title = "アトミックデザインについてのメモ";
const updateDate = "2023/9/17";
const thumbnailImagePath = "/images/thumbnail/atomic_design.png";
const metaDescription =
    "どうも、納豆大好きnattoです。実務で使ったことは一度もありませんが、アトミックデザインについて整理します。";
const metaOgUrl = "https://www.nattomatofu.com/posts/atomic-design";
const metaOgType = "article";

const DockerImage = () => {
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
                                そしてこのAtomの集まりで、次のmoleculeを構成します。
                            </MediumParagraph>
                            <MediumHeading>Moleculeとは</MediumHeading>
                            <MediumParagraph>
                                続いてMoleculeです。
                                <br />
                                日本語だと「分子」という意味で、
                                先程のAtomの集まった物がこのMoleculeです。
                                <br />
                                具体的な画面上の要素としては、「アイコン＋メニュー名」や「商品アイコン＋商品名」、「サムネイル画像＋題名」などが該当します。
                            </MediumParagraph>
                            <MediumHeading>Organismとは</MediumHeading>
                            <MediumParagraph>
                                続いてOrganismです。
                                <br />
                                先程のMoleculeの集まった物がこのOrganismです。
                                <br />
                                具体的な画面上の要素としては、「サイドメニュー」や「商品一覧メニュー」、「記事一覧」などが該当します。
                            </MediumParagraph>
                            <MediumHeading>Templateとは</MediumHeading>
                            <MediumParagraph>
                                続いてTemplateです。
                                <br />
                                このTemplateは、立ち位置としてはOrganismの集まりなのですが、実際のデータは持たず、レイアウトのみを定義したものになります。
                            </MediumParagraph>
                            <MediumHeading>Pageとは</MediumHeading>
                            <MediumParagraph>
                                最後はPageです。
                                <br />
                                Templateを元に作成された、最終的に表示される1画面です。
                            </MediumParagraph>
                        </MainParagraph>
                    </section>
                    <section>
                        <MainHeading>最後に</MainHeading>
                        <MainParagraph>
                            以上、アトミックデザインについて簡単に整理しました。
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

export default DockerImage;
