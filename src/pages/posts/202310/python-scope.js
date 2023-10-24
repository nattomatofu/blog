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

const title = "Pythonの変数スコープについてまとめ";
const updateDate = "2023/10/24";
const thumbnailImagePath = "/images/thumbnail/python_logo.webp";
const metaDescription =
    "どうも、納豆大好きnattoです。仕事でよくPythonを使うので、最近は改めてPythonを勉強し直しています。変数のスコープは無意識に考慮してプログラムを書いてはいますが、ちゃんと整理したことはなかったので簡単にまとめてみます。";
const metaOgUrl = "https://www.nattomatofu.com/posts/python-scope";
const metaOgType = "article";

const PythonScope = () => {
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
                                変数のスコープは無意識に考慮してプログラムを書いてはいますが、ちゃんと整理したことはなかったので簡単にまとめてみます。
                            </PrefaceText>
                            <TableOfContents />
                        </Preface>
                    </section>
                    <section>
                        <MainHeading>
                            グローバルで定義した変数の参照
                        </MainHeading>
                        <MainParagraph>
                            まず、基本中の基本ですが以下のようにグローバルに定義した変数はどんなに深い階層からでも参照することができます。
                            <CodeBlock language={"python"} isLineNum={true}>
                                {`a = 10

def function():
    print(a)
    
    def function2():
        print(a)

# 以下のように表示される
# 10
# 10`}
                            </CodeBlock>
                            <br />
                            一方、以下のようにグローバル変数の値を普通に書き換えようとしても書き換えることはできません。
                            <CodeBlock language={"python"} isLineNum={true}>
                                {`a = 10

def function():
    a = 20 # 変数aを書き換えようとしてみるが、、
    print(a)
    
function()
print(a)

# 以下のように表示される
# 20
# 10`}
                            </CodeBlock>
                            <br />
                            <UnderLineBoldText>
                                グローバルな変数を書き換える場合は以下のように書く必要があります。
                            </UnderLineBoldText>
                            <CodeBlock language={"python"} isLineNum={true}>
                                {`a = 10

def function():
    global a # グローバル変数aを使用することを明示
    a = 20 # グローバル変数aを書き換える
    print(a)
    
function()
print(a)

# 以下のように表示される
# 20
# 20`}
                            </CodeBlock>
                        </MainParagraph>
                    </section>
                    <section>
                        <MainHeading>ローカルで定義した変数の参照</MainHeading>
                        <MainParagraph>
                            また基本中の基本ですが、関数内で定義したローカルの変数は関数外から参照することはできません。（慣れればこのミスはあまりない気もしますね、、、）
                            <CodeBlock language={"python"} isLineNum={true}>
                                {`def function():
    a = 100

print(a) # NameErrorが起きる`}
                            </CodeBlock>
                        </MainParagraph>
                    </section>
                    <section>
                        <MainHeading>ブロックスコープについて</MainHeading>
                        <MainParagraph>
                            C++やJavaではブロックスコープと呼ばれるものがあり、ifやforなどのブロック内で定義した変数はそのブロック外から参照することはできません。
                            <br />
                            しかしPythonにはブロックスコープの概念がないため、ifやfor、whileの中で定義した変数であれば外部から参照することが可能です。
                            <CodeBlock language={"python"} isLineNum={true}>
                                {`if true:
    a = 2

print(a) # 2と表示される`}
                            </CodeBlock>
                            ただ、当たり前ですが上記の例だとifに入らなかった時は
                            <CodeText>NameError</CodeText>
                            で異常終了するので、ifに入らない場合用の何かしらの対策が必要ですね。
                        </MainParagraph>
                    </section>
                    <section>
                        <MainHeading>最後に</MainHeading>
                        <MainParagraph>
                            変数のスコープはプログラムにおいて当然のこと過ぎてあまり意識してきませんでしたが、改めて見直して勉強になりました。
                            <br />
                            それでは！
                        </MainParagraph>
                    </section>
                </div>
            </main>
        </Layout>
    );
};

export default PythonScope;
