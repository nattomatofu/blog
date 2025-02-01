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

const title = "Pythonの内包表記について";
const updateDate = "2024/2/13";
const thumbnailImagePath = "/images/thumbnail/python_logo.webp";
const metaDescription =
    "どうも、納豆大好きnattoです。仕事でよくPythonを使うので、最近は改めてPythonを勉強し直しています。Pythonの内包表記が便利だったので備忘録としてまとめます。";
const metaOgUrl = "https://www.nattomatofu.com/posts/python-list-comprehension";
const metaOgType = "article";

const PythonListComprehension = () => {
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
                                最近Pythonについて勉強していて、リスト内容表記が便利だったので備忘としてまとめます。
                            </PrefaceText>
                            <TableOfContents />
                        </Preface>
                    </section>
                    <section>
                        <MainHeading>基本形</MainHeading>
                        <MainParagraph>
                            リスト内包型表記の基本形は以下です。
                            <CodeBlock language={"python"} isLineNum={true}>
                                {`new_list = [new_item for item in list]`}
                            </CodeBlock>
                            一言で簡単に説明すると、
                            <br />
                            「listの1つ1つの要素をitemとして取り出し、新要素new_itemとしてnew_listに追加する。」
                            <br />
                            という感じです。
                            <br />
                            例としては、リスト内包表記を使わず以下のように書いていたプログラムを
                            <CodeBlock language={"python"} isLineNum={true}>
                                {`list = [1, 2, 3]
new_list = []
for item in list:
    new_item *= 2
    new_list.append(new_item)
    # new_list = [2, 4, 6]`}
                            </CodeBlock>
                            以下のように簡潔に書くことができます。
                            <CodeBlock language={"python"} isLineNum={true}>
                                {`list = [1, 2, 3]
new_list = [item * 2 for item in list]
# new_list = [2, 4, 6]`}
                            </CodeBlock>
                            ちなみにリストだけでなく文字列でも使うことができ、
                            <br />
                            文字列の場合は先頭から1文字1文字取り出して処理することができます。
                        </MainParagraph>
                    </section>
                    <section>
                        <MainHeading>ifとの組み合わせ</MainHeading>
                        <MainParagraph>
                            リスト内包表記はifと組み合わせることができます。
                            <br />
                            ifと組み合わせることで、元となるリストから取得する要素をフィルタできます。
                            <br />
                            書き方は以下です。
                            <br />
                            <CodeBlock language={"python"} isLineNum={true}>
                                {`new_list = [new_item for item in list if condition]`}
                            </CodeBlock>
                            例として、リスト内包表記を使わず以下のように書いていたプログラムを
                            <CodeBlock language={"python"} isLineNum={true}>
                                {`list = [1, 2, 3, 4]
new_list = []
for item in list:
    if item % 2 == 0:
        new_item *= 2
        new_list.append(new_item)
        # new_list = [4, 8]`}
                            </CodeBlock>
                            以下のように書くことができます。
                            <CodeBlock language={"python"} isLineNum={true}>
                                {`list = [1, 2, 3, 4]
new_list = [item * 2 for item in list if item % 2 == 0]
# new_list = [4, ８]`}
                            </CodeBlock>
                        </MainParagraph>
                    </section>
                    <section>
                        <MainHeading>最後に</MainHeading>
                        <MainParagraph>
                            一旦以上ですが、 if elseのあわせ技や、
                            <br />
                            タプルで使えたりもするようなので
                            それら今後追記したいと思ったことがあれば追記します。
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

export default PythonListComprehension;
