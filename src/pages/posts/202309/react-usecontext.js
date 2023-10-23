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

const title = "ReactのuseContextについて";
const updateDate = "2023/9/22";
const thumbnailImagePath = "/images/thumbnail/react_icon.webp";
const metaDescription =
    "どうも、納豆大好きnattoです。完全に思いつきですが、ReactのuseContextについてまとめます。";
const metaOgUrl = "https://www.nattomatofu.com/posts/react-usecontext";
const metaOgType = "article";

const ReactUseContext = () => {
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
                                完全に思いつきで今後私が使うタイミングがあるかどうか不明ですが、Reactの
                                <CodeText>useContext</CodeText>
                                についてまとめます。
                            </PrefaceText>
                            <TableOfContents />
                        </Preface>
                    </section>
                    <section>
                        <MainHeading>useContextとは</MainHeading>
                        <MainParagraph>
                            まずはReactの<CodeText>useContex</CodeText>
                            とは何かを簡単に説明します。
                            <br />
                            <br />
                            簡単にざっくりいうと、WEBアプリケーション内の変数をコンポーネント間でグローバルに共有できる機能です。
                            <br />
                            <br />
                            Reactでは複数のコンポーネントを作成し、そのコンポーネントを組み合わせることで1つのアプリケーションを作ります。
                            <br />
                            その際、コンポーネント間で変数の受け渡しが発生するかと思いますが、親コンポーネントから孫やひ孫コンポーネントへ変数を渡したい場合、
                            <br />
                            子コンポーネントには必要のない変数だったとしても、子コンポーネントを経由して孫へバケツリレーする必要があります。
                            <br />
                            その面倒くささを解決してくれるのが
                            <CodeText>useContext</CodeText>なんですね。
                        </MainParagraph>
                    </section>
                    <section>
                        <MainHeading>useContexの使い方</MainHeading>
                        <MainParagraph>
                            <CodeText>useContext</CodeText>
                            の使い方の順序を大きく分けると、以下のような感じになります。
                            <ul className="list-inside list-decimal md:p-8">
                                <li className="my-4">
                                    新しくコンポーネントを作成して、グローバル管理する変数を定義する
                                </li>
                                <li className="my-4">
                                    変数を参照したい範囲を、１で作成したコンポーネントで囲む
                                </li>
                                <li className="my-4">
                                    コンポーネントからグローバル管理している変数を参照する
                                </li>
                            </ul>
                            ここから、それぞれについて少し詳しくまとめます。
                            <MediumHeading>
                                １．新しくコンポーネントを作成して、グローバル管理する変数を定義する
                            </MediumHeading>
                            <MediumParagraph>
                                いきなりですが、Reactのコードで書くと以下のような感じです。
                                <CodeBlock
                                    language={"javascript"}
                                    isLineNum={true}
                                    filename={"ContextProvider.js"}
                                >
                                    {`import React, { createContext } from "react";

export const StrContext = createContext({});

export const ContextProvider = (children) => {
    const contextStr = "グローバルで使える文字列です";
    return (
        <StrContext.Provider value={{ contextStr }}>
            {children}
        </StrContext.Provider>
    );
};
`}
                                </CodeBlock>
                                ざっくり説明すると、
                                <br />
                                <CodeText>createContext(&#123;&#125;)</CodeText>
                                で作成した<CodeText>変数.Provider</CodeText>
                                でChildrenを囲み、
                                <br />
                                グローバルで使いたい変数を、そのタグの
                                <CodeText>value</CodeText>に設定します。
                            </MediumParagraph>
                            <MediumHeading>
                                ２．変数を参照したい範囲を、１で作成したコンポーネントで囲む
                            </MediumHeading>
                            <MediumParagraph>
                                またいきなりですが、Reactのコードで書くと以下のような感じになります。
                                <CodeBlock
                                    language={"javascript"}
                                    isLineNum={"true"}
                                    filename={"App.js"}
                                >
                                    {`import { ContextProvider } from "./provider/ContextProvider";
import React from "react";

export default function App() {
    return (
        <ContextProvider>
            <MainContents />
        </ContextProvider>
    );
}`}
                                </CodeBlock>
                                グローバルな変数を使用したいコンポーネントを先程作成したコンポーネントで囲みます。
                                <br />
                                これで変数をグローバルな変数を使用する準備は完了です。
                                <br />
                                また、上記は<CodeText>App.js</CodeText>
                                でアプリケーションの大元から囲んでいますが、より下の階層で囲んでも全く問題ありません。
                            </MediumParagraph>
                            <MediumHeading>
                                ３．コンポーネントからグローバル管理している変数を参照する
                            </MediumHeading>
                            <MediumParagraph>
                                またまたいきなりですが、Reactのコードで書くと以下のようになります。
                                <CodeBlock
                                    language={"javascript"}
                                    isLineNum={"true"}
                                    filename={"UseDataComponent.js"}
                                >{`import React, { useContext } from "react";
import { StrContext } from "./providers/ContextProvider";
                                
export const UseDataComponent = () => {
    const context = useContext(StrContext);
    return (
        <div>
            {context.contextStr}
        </div>
    );
};`}</CodeBlock>
                                <br />
                                まずは、
                                <CodeText>useContex</CodeText>と
                                <CodeText>createContext(&#123;&#125;)</CodeText>
                                で作成した変数をインポートします。
                                <br />
                                そして、
                                <CodeText>createContext(&#123;&#125;)</CodeText>
                                で作成した変数を<CodeText>useContex()</CodeText>
                                の引数に渡します。
                                <br />
                                あとは、１で<CodeText>value</CodeText>
                                に渡した変数（グローバルな変数）を好きな箇所で参照するのみです。
                                <br />
                                私はこの部分でどのコンポーネントから何をインポート、参照すればよいかごちゃごちゃしていて混乱しました笑。
                            </MediumParagraph>
                        </MainParagraph>
                    </section>
                    <section>
                        <MainHeading>最後に</MainHeading>
                        <MainParagraph>
                            以上、useContextの使い方でした。
                            <br />
                            <br />
                            便利ですが、若干ごちゃっているので慣れるまでは少し苦戦しそうな気がします（私だけ。。？）
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

export default ReactUseContext;
