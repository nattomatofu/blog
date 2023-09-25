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
import UnderLineBoldText from "@/components/UnderLineBoldText";

const title = "Pythonについての個人的なメモ";
const updateDate = "2023/9/25";
const thumbnailImagePath = "/images/thumbnail/python_logo.webp";
const metaDescription =
    "どうも、納豆大好きnattoです。仕事でよくPythonを使うので、最近は改めてPythonを勉強し直しています。その中で個人的に勉強になったことやカンペとして残しておきたいことをまとめます。";
const metaOgUrl = "https://www.nattomatofu.com/posts/python-memo";
const metaOgType = "article";

const PythonMemo = () => {
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
                                その中で個人的に勉強になったことや、カンペとして残しておきたいことをまとめます。
                                <br />
                                めちゃくちゃ初歩的な内容も多いです笑
                            </PrefaceText>
                            <TableOfContents />
                        </Preface>
                    </section>
                    <section>
                        <MainHeading>組み込み関数</MainHeading>
                        <MainParagraph>
                            組み込み関数で初めて知ったものなど、勉強になったものを列挙します。
                            <MediumHeading>input関数</MediumHeading>
                            <MediumParagraph>
                                以下のように使用します。
                                <CodeBlock language={"python"} isLineNum={true}>
                                    {`input("何か入力してください。")`}
                                </CodeBlock>
                                このように入力することで、input()の中に記載した文字が表示された後にユーザーからの入力を受け付けます。
                                <br />
                                <UnderLineBoldText>
                                    戻り値の方はStringです。
                                </UnderLineBoldText>
                                <br />
                                ちなみに、print関数と以下のような組み合わせ方も可能です。
                                <CodeBlock language={"python"} isLineNum={true}>
                                    {`print("こんにちは、" + input("名前を入力してください"))`}
                                </CodeBlock>
                                この書き方で、まずはユーザーに名前を入力させてその後に「こんにちは、〇〇〇〇」と表示することができます。
                            </MediumParagraph>
                            <MediumHeading>len関数</MediumHeading>
                            <MediumParagraph>
                                以下のように使用することで引数に渡した文字列の長さを取得できます。
                                <CodeBlock language={"python"} isLineNum={true}>
                                    {`len(任意の文字列)`}
                                </CodeBlock>
                            </MediumParagraph>
                            <MediumHeading>type関数</MediumHeading>
                            <MediumParagraph>
                                以下のように使用することで引数に渡した変数の方を確認できます。
                                <CodeBlock language={"python"} isLineNum={true}>
                                    {`type(変数)`}
                                </CodeBlock>
                            </MediumParagraph>
                            <MediumHeading>int関数, round関数</MediumHeading>
                            <MediumParagraph>
                                引数に渡した変数をint型へ変換します。
                                <br />
                                <CodeBlock language={"python"} isLineNum={true}>
                                    {`int(変数)`}
                                </CodeBlock>
                                <UnderLineBoldText>
                                    このint関数でfloatからintへ変換した場合、小数点以下は全て切り捨てられます。
                                    <br />
                                    四捨五入したい場合は以下のようにround関数を使用しましょう。
                                </UnderLineBoldText>
                                <CodeBlock language={"python"} isLineNum={true}>
                                    {`round(変数)`}
                                </CodeBlock>
                                また、round関数では小数点何桁まで値を保持したいかを、以下のように引数で指定することができます。
                                <CodeBlock language={"python"} isLineNum={true}>
                                    {`float_num = 1.2345
int_num = round(float_num, 2) # →　二桁目まで残す
print(int_num) # →　1.23と表示される`}
                                </CodeBlock>
                            </MediumParagraph>
                        </MainParagraph>
                    </section>
                    <section>
                        <MainHeading>その他小技</MainHeading>
                        <MainParagraph>
                            上記以外でへえーと思ったものをまとめます。
                            <MediumHeading>数値の可視性向上</MediumHeading>
                            <MediumParagraph>
                                とても大きな数値を扱う時、あまりにも桁が多いと分かり辛いですよね。
                                Pythonでは3桁区切りにアンダースコアで区切ることができます。
                                <CodeBlock language={"python"} isLineNum={true}>
                                    {`a = 123456789
b = 123_456_789 # Pythonが「_」は無視してくれる`}
                                </CodeBlock>
                            </MediumParagraph>
                            <MediumHeading>
                                文字列の特定のインデックス番目の文字を取得
                            </MediumHeading>
                            <MediumParagraph>
                                以下のように書くことで、文字列の特定のインデックス番目の文字を取得することができます。
                                <CodeBlock language={"python"} isLineNum={true}>
                                    {`str = "Hello"
str[1] # 一番目の文字を取得　→　H
"Hello"[1]  # 同じく一番目の文字を取得　→　H`}
                                </CodeBlock>
                            </MediumParagraph>
                            <MediumHeading>指数の計算</MediumHeading>
                            <MediumParagraph>
                                Pythonでは以下のような書き方で指数の計算を行うことができます。
                                <CodeBlock language={"python"} isLineNum={true}>
                                    {`result = 2 ** 3
print(result) # 2の3乗で「8」が表示される`}
                                </CodeBlock>
                            </MediumParagraph>
                            <MediumHeading>
                                小数点以下を切り落として除算
                            </MediumHeading>
                            <MediumParagraph>
                                以下のように書くことで、小数点以下を切り落として除算することができます。
                                <CodeBlock language={"python"} isLineNum={true}>
                                    {`result = 8 // 3 # 普通に割ると 2.666666666....
print(result) # でも2になる`}
                                </CodeBlock>
                            </MediumParagraph>
                            <MediumHeading>変数の入れ替え</MediumHeading>
                            <MediumParagraph>
                                Pythonで変数を入れ替えたい場合、以下のように書くことで入れ替えることができます。
                                <CodeBlock language={"python"} isLineNum={true}>
                                    {`a = 1
b = 2

b, a = a, b # 変数を入れ替える

print(a) # 2と表示される
print(b) # 1と表示される`}
                                </CodeBlock>
                                便利ですね。
                            </MediumParagraph>
                        </MainParagraph>
                    </section>
                    <section>
                        <MainHeading>最後に</MainHeading>
                        <MainParagraph>
                            以上、Pythonの復習で個人的に勉強になったことをまとめました。
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

export default PythonMemo;
