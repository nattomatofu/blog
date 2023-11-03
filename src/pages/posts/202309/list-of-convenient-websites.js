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
import UnderLineBoldText from "@/components/UnderLineBoldText";
import Head from "next/head";

const title = "個人的便利サイト一覧";
const updateDate = "2023/9/18";
const thumbnailImagePath = "/images/thumbnail/list-of-covenient-websites.jpg";
const metaDescription =
    "どうも、納豆大好きnattoです。個人的に便利だと思ったサイトを一覧としてまとめます。作成段階では特にジャンルは絞っていません。本当に個人的なメモです。";
const metaOgUrl =
    "https://www.nattomatofu.com/posts/list-of-convenient-websites";
const metaOgType = "article";

const ListOfConvenientWebsite = () => {
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
                                IT関連について日々何かしら勉強をしているのですが、その際に「こういう時に使えそうなサイトがあったけどなんだったっけなー」ということが度々あるので、すぐに確認できるように都度便利だと思ったWEBサイトの一覧をまとめようと思います。
                            </PrefaceText>
                            <TableOfContents />
                        </Preface>
                    </section>
                    <section>
                        <MainHeading>Unsplash</MainHeading>
                        <MainParagraph>
                            URL　:　
                            <LinkText href="https://unsplash.com/ja">
                                https://unsplash.com/ja
                            </LinkText>
                            <br />
                            <br />
                            フリーの画像を提供してくれるサイトです。
                            <br />
                            普通に画像をダウンロードすることもできますし、APIでダウンロードすることもできます。
                            <br />
                            APIでは以下のように書くことで取得できます。
                            <CodeBlock
                                language={"javascript"}
                                isLineNum={"true"}
                            >
                                {`<img src="https://source.unsplash.com/yetQBOG_ZWg"/>`}
                            </CodeBlock>
                            <CodeText>img</CodeText>
                            タグに設定するURLですが、以下の手順で作成します。
                            <ul className="list-inside list-decimal md:p-8">
                                <li className="my-4">
                                    使用したい画像をブラウザで開いて、URLをコピーします。
                                </li>
                                <li className="my-4">
                                    URLから
                                    <CodeText>unsplash.com</CodeText>
                                    と、末尾の画像IDとの
                                    <UnderLineBoldText>
                                        間の文字列を
                                    </UnderLineBoldText>
                                    削除します。
                                    <UnderLineBoldText>
                                        間違って他の部分を削除しないように注意しましょう。
                                    </UnderLineBoldText>
                                </li>
                                <li className="my-4">
                                    <CodeText>unsplash.com</CodeText>
                                    の前に、<CodeText>source.</CodeText>
                                    を追加します。
                                </li>
                                <li className="my-4">
                                    出来上がったURLを
                                    <CodeText>src</CodeText>に追加します。
                                </li>
                            </ul>
                            以上で画像を挿入完了です。
                        </MainParagraph>
                    </section>
                    <section>
                        <MainHeading>
                            react-syntax-highlighterのlanguage指定可能言語一覧
                        </MainHeading>
                        <MainParagraph>
                            URL　:　
                            <LinkText href="https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_LANGUAGES_HLJS.MD">
                                https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_LANGUAGES_HLJS.MD
                            </LinkText>
                            <br />
                            <br />
                            これはWEBサイトと言うより単なるGitHubのリファレンスなのですが、Reactの
                            <CodeText>react-syntax-highlighter</CodeText>
                            で指定できる言語の一覧が記載されています。
                        </MainParagraph>
                    </section>
                    <section>
                        <MainHeading>ASCII ART</MainHeading>
                        <MainParagraph>
                            URL　:　
                            <LinkText href="https://ascii.co.uk/art">
                                https://ascii.co.uk/art
                            </LinkText>
                            <br />
                            <br />
                            このサイトからコピーしてプログラムへ貼り付けるだけで、print関数などで簡単なアートを表示することができます。
                        </MainParagraph>
                    </section>
                    <section>
                        <MainHeading>ASCII ART Generator</MainHeading>
                        <MainParagraph>
                            URL　:　
                            <LinkText href="https://patorjk.com/software/taag/#p=display&f=Graffiti&t=Type%20Something%20">
                                https://patorjk.com/software/taag/#p=display&f=Graffiti&t=Type%20Something%20
                            </LinkText>
                            <br />
                            <br />
                            任意のテキストを入力すると、その文字のアート文字を作成してくれます。
                            <br />
                            面白いです。
                        </MainParagraph>
                    </section>
                    <section>
                        <MainHeading>Python Tutor</MainHeading>
                        <MainParagraph>
                            URL　:　
                            <LinkText href="https://pythontutor.com/visualize.html#mode=edit">
                                https://pythontutor.com/visualize.html#mode=edit
                            </LinkText>
                            <br />
                            <br />
                            Pythonのプログラムを入力して実行すると、プログラムの各行を1つ1つ順番に実行して、それぞれの行の実行時の各変数の値を可視化してくれます。
                            <br />
                            デバッグする際に便利ですね。
                        </MainParagraph>
                    </section>
                    <section>
                        <MainHeading>最後に</MainHeading>
                        <MainParagraph>
                            以上、個人的に便利だと思ったサイトの一覧を列挙してみました。
                            <br />
                            これは便利だ！と思ったサイトが出てき次第更新する予定です。
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

export default ListOfConvenientWebsite;
