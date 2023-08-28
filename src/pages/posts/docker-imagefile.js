import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

const title = "Dockerイメージファイルの書き方";
const updateDate = "2023/8/27";
const thumbnailImagePath = "/images/thumbnail/docker-thumbnail.png";
const metaDescription =
    "どうも、納豆大好きnattoです。Dockerイメージファイルについてまとめます。";
const metaOgUrl = "https://www.nattomatofu.com/posts/docker-imagefile";
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
                        <div className="mt-8 border-b-2 border-t-2 border-neutral-700">
                            <h1 className="container mx-auto p-4 text-lg font-bold md:p-12 md:text-xl">
                                {title}
                            </h1>
                        </div>
                        <div className="mt-4 text-right">
                            <p className="font-thin">更新日 : {updateDate}</p>
                        </div>
                    </section>

                    <section>
                        <div className="mt-4">
                            <p className="mb-8 md:p-8">
                                前に
                                <Link
                                    href="./docker-memo"
                                    className="decoration-blue cursor-pointer text-blue-500 underline"
                                >
                                    Dockerのコマンド一覧ページ
                                </Link>
                                を簡単でしたがまとめました。
                                <br />
                                今度はDockerイメージの作り方をまとめようと思います。
                            </p>
                            <div className="flex justify-center">
                                <div className="mb-8 border border-dashed border-neutral-900 p-4 align-middle md:w-1/2">
                                    <p className="mb-4 text-center text-xl">
                                        目次
                                    </p>
                                    <ul className="list-disc pl-6">
                                        <li className="pb-2">
                                            <a href="#id1">
                                                Dockerイメージファイルを作るステップ
                                            </a>
                                        </li>
                                        <li className="pb-2">
                                            <a href="#id2">
                                                Dockerイメージファイルの書き方
                                            </a>
                                        </li>
                                        <li className="pb-2">
                                            <a href="#id3">最後に</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
                            <h2 className="ml-2 text-xl" id="id1">
                                Dockerイメージファイルを作るステップ
                            </h2>
                        </div>
                        <div className="mt-8">
                            <div className="md:p-8">
                                Dockerファイルを作成する時は、大まかに以下の流れとなります。
                                <ul className="list-inside list-decimal md:p-8">
                                    <li className="my-4">
                                        任意のディレクトリに「Dockerfile」のファイル名でファイル作成する。
                                    </li>
                                    <li className="my-4">
                                        作成したDockerfileに内容を記載する。
                                    </li>
                                    <li className="my-4">
                                        作成したDockerfileのあるディレクトリまで移動して、以下のコマンドを実行する。
                                    </li>
                                    <SyntaxHighlighter
                                        language="shell"
                                        style={vscDarkPlus}
                                        showLineNumbers={false}
                                    >
                                        {`$ docker build .`}
                                    </SyntaxHighlighter>
                                </ul>
                                2の「作成したDockerfileに内容を記載する。」の部分について、書き方をこの後からまとめます。
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
                            <h2 className="ml-2 text-xl" id="id2">
                                Dockerイメージファイルの書き方
                            </h2>
                        </div>
                        <div className="mt-8 md:p-8">
                            Dockerイメージファイルには、コンテナに必要なライブラリをインストールするためのコマンドや、コンテナ実行時に実行されるコマンドを定義します。
                            <br />
                            サンプルとしては以下のような感じです。
                            <SyntaxHighlighter
                                language="shell"
                                style={vscDarkPlus}
                                showLineNumbers={false}
                            >
                                {`FROM alpine

RUN apk add -update redis

CMD ["redis-server"]`}
                            </SyntaxHighlighter>
                            こんな感じで定義したファイルに対して「docker build
                            .」
                            コマンドを実行することでその設定に沿ったイメージファイルが作成され、「docker
                            run」コマンドで全て勝手に準備・実行してくれるような感じです。
                            <br />
                            <br />
                            イメージファイルの書き方にはいくつか決まった句があり、上記のサンプルをベースにそれらをまとめようと思います。
                            <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-16">
                                FROM
                            </h3>
                            <div className="pl-4">
                                まずは「FROM」です。
                                <br />
                                ファイルシステムなどコンテナのベースとなる部分を定義するもので、何のためにコンテナを使用するかに合わせて決めましょう。
                                <br />
                                使えるイメージはいくつかありますが、何が使えるかは
                                <Link
                                    href="https://hub.docker.com/search?image_filter=official&type=image&q="
                                    className="decoration-blue cursor-pointer text-blue-500 underline"
                                >
                                    公式サイト
                                </Link>
                                を確認しましょう。
                                <br />
                                書き方としては以下のような感じになります。
                                <SyntaxHighlighter
                                    language="shell"
                                    style={vscDarkPlus}
                                    showLineNumbers={false}
                                >
                                    {`FROM alpine`}
                                </SyntaxHighlighter>
                            </div>
                            <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-16">
                                RUN
                            </h3>
                            <div className="pl-4">
                                続いて「RUN」です。
                                <br />
                                RUN
                                は、Dockerfile内で実行するコマンドまたはスクリプトを指定するために使用します。
                                <br />
                                以下のように、「RUN」の後に続けて実行したいコマンドを記載することで、そのコマンドが実行された状態のファイルシステムを備えたイメージを作成できます。
                                <SyntaxHighlighter
                                    language="shell"
                                    style={vscDarkPlus}
                                    showLineNumbers={false}
                                >
                                    {`RUN apk add -update redis`}
                                </SyntaxHighlighter>
                                「FROM」で指定したベースイメージとは別途用意が必要なライブラリをインストールしなければならない場合などに使用しましょう。
                            </div>
                            <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-16">
                                CMD
                            </h3>
                            <div className="pl-4">
                                続いて「CMD」です。
                                <br />
                                CMD
                                は、コンテナの起動時コマンドを指定するために使用します。
                                <br />
                                「CMD」の後に続けて実行したいコマンドを記載することで、そのコマンドがコンテナ実行時にコンテナ内で勝手に実行されます。
                                <br />
                                例えば、コンテナ実行と同時にredisサーバーを立ち上げたい場合は、以下のように記載します。（「redis-server」はredisを立ち上げるためのコマンドです。）
                                <SyntaxHighlighter
                                    language="shell"
                                    style={vscDarkPlus}
                                    showLineNumbers={false}
                                >
                                    {`CMD ["redis-server"]`}
                                </SyntaxHighlighter>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
                            <h2 className="ml-2 text-xl" id="id3">
                                最後に
                            </h2>
                        </div>
                        <div className="mt-8">
                            <p className="md:p-8">
                                以上、Dockerのイメージファイル作成方法について簡単でしたがまとめてみました。
                                <br />
                                <br />
                                それでは！
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </Layout>
    );
};

export default DockerImage;
