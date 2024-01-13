import Layout from "@/components/layout/Layout";
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
import UnderLineBoldText from "@/components/UnderLineBoldText";

const title = "PythonのSliceについて";
const updateDate = "2024/1/13";
const thumbnailImagePath = "/images/thumbnail/python_logo.webp";
const metaDescription =
    "どうも、納豆大好きnattoです。仕事でよくPythonを使うので、最近は改めてPythonを勉強し直しています。PythonのSliceが便利だったので備忘録としてまとめます。";
const metaOgUrl = "https://www.nattomatofu.com/posts/python-slice";
const metaOgType = "article";

const PythonClass = () => {
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
                                仕事でよくPythonを使うので、最近改めてPythonを勉強し直しています。
                                <br />
                                <br />
                                PythonのSliceが便利だったので備忘録としてまとめます。
                                <br />
                                <br />
                                また、この記事ではリストについて書いていますが、
                                <UnderLineBoldText>
                                    タプルでも同様に扱えます。
                                </UnderLineBoldText>
                            </PrefaceText>
                            <TableOfContents />
                        </Preface>
                    </section>
                    <section>
                        <MainHeading>
                            使い方①　リストから任意の範囲の要素をすべて取得
                        </MainHeading>
                        <MainParagraph>
                            以下のように書くことで、Sliceを使うことでリストから任意の範囲の要素を取得することができます。
                            <CodeBlock language={"python"} isLineNum={true}>
                                {`list1 = ["a", "b", "c", "d", "e", "f", "g", "h"]

list2 = list1[2:7]
print(list2) # c d e f gが表示される`}
                            </CodeBlock>
                        </MainParagraph>
                    </section>
                    <section>
                        <MainHeading>
                            使い方②　リストから任意の範囲の要素を任意の間隔で取得
                        </MainHeading>
                        <MainParagraph>
                            以下のように書くことで、リストの任意の範囲の要素を
                            <UnderLineBoldText>任意の間隔で</UnderLineBoldText>
                            取得することもできます
                            <CodeBlock language={"python"} isLineNum={true}>
                                {`list1 = ["a", "b", "c", "d", "e", "f", "g", "h"]

list2 = list1[2:7:2]
print(list2) # c e g が表示される`}
                            </CodeBlock>
                        </MainParagraph>
                    </section>
                    <section>
                        <MainHeading>
                            使い方③　リストから先頭または末尾から任意の数の要素を取得
                        </MainHeading>
                        <MainParagraph>
                            リストの先頭または末尾から要素を取り出したい場合は以下のように書きます。
                            <CodeBlock language={"python"} isLineNum={true}>
                                {`list1 = ["a", "b", "c", "d", "e", "f", "g", "h"]

list2 = list1[:4]
print(list2) # a b c d が表示される

list3 = list1[5:]
print(list3) # e f g h が表示される

list4 = list1[:4:2]
print(list4) # a c が表示される

list5 = list1[5::2]
print(list5) # e g が表示される`}
                            </CodeBlock>
                            上記のように先頭や末尾からデータを取り出す際も、任意の間隔を指定することができます。
                        </MainParagraph>
                    </section>
                    <section>
                        <MainHeading>使い方④　リストを反転する</MainHeading>
                        <MainParagraph>
                            以下のように書くことでリストの順序を反転することもできます。
                            <CodeBlock language={"python"} isLineNum={true}>
                                {`list1 = ["a", "b", "c", "d", "e", "f", "g", "h"]

list2 = list1[::-1]
print(list2) # h g f e d c b a が表示される`}
                            </CodeBlock>
                            はい、便利ですね。
                        </MainParagraph>
                    </section>
                    <section>
                        <MainHeading>最後に</MainHeading>
                        <MainParagraph>
                            以上、PythonのSliceについて基本的な内容ですがまとめてみました。
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

export default PythonClass;
