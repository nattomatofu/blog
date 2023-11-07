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

const title = "Pythonのクラスについて";
const updateDate = "2023/11/6";
const thumbnailImagePath = "/images/thumbnail/python_logo.webp";
const metaDescription =
    "どうも、納豆大好きnattoです。仕事でよくPythonを使うので、最近は改めてPythonを勉強し直しています。Pythonでクラスを使用することがこれまであまりなく、ほぼ初知り状態だったので備忘録としてまとめます。";
const metaOgUrl = "https://www.nattomatofu.com/posts/python-memo";
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
                                Pythonで独自のカスタムクラスを使用することがこれまであまりなく、ほぼ初知りだったので備忘録としてまとめます。
                            </PrefaceText>
                            <TableOfContents />
                        </Preface>
                    </section>
                    <section>
                        <MainHeading>クラス定義の仕方</MainHeading>
                        <MainParagraph>
                            Pythonでクラスを定義する際は以下のように書きます。
                            <CodeBlock language={"python"} isLineNum={true}>
                                {`class MyClass:
    .
    .
    .
    クラスの定義内容`}
                            </CodeBlock>
                            簡単ですね。
                        </MainParagraph>
                    </section>
                    <section>
                        <MainHeading>コンストラクタの定義の仕方</MainHeading>
                        <MainParagraph>
                            Pythonのクラスのコンストラクタは以下のように定義します。
                            <CodeBlock language={"python"} isLineNum={true}>
                                {`class MyClass:
    def __init__(self, user_id, name):
        self.id = user_id
        self.name = name `}
                            </CodeBlock>
                            第一引数には必ず<CodeText>self</CodeText>
                            を入れる必要があり、
                            自分自身のインスタンスの変数を参照する場合は
                            <CodeText>self</CodeText>キーワードを使用します。
                            <br />
                            <br />
                            上記のサンプルでは、オブジェクトを作成する際に
                            <CodeText>id</CodeText>と<CodeText>name</CodeText>
                            に値を設定することができます。
                        </MainParagraph>
                    </section>
                    <section>
                        <MainHeading>クラス関数の定義の仕方</MainHeading>
                        <MainParagraph>
                            Pythonのクラスの関数は以下のように定義します。
                            <CodeBlock language={"python"} isLineNum={true}>
                                {`class MyClass:
    def function(self, param1, param2):
        .
        .
        .
        関数内での処理`}
                            </CodeBlock>
                            コンストラクタと同様に、第一引数には必ず
                            <CodeText>self</CodeText>
                            を入れる必要があります。
                            <br />
                            <br />
                            基本的に普通の関数を定義する場合と同じように記載すれば問題ありません。
                        </MainParagraph>
                    </section>
                    <section>
                        <MainHeading>最後に</MainHeading>
                        <MainParagraph>
                            以上、Pythonのクラスについて基本的な内容ですがまとめてみました。
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
