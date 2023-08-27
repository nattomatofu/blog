import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

const title = "Dockerイメージファイルの書き方";
const updateDate = "2023/8/27";
const thumbnailImagePath = "/images/thumbnail/docker-thumbnail.png";
const metaDescription = "どうも、納豆大好きnattoです。Dockerイメージファイルについてまとめます。";
const metaOgUrl = "https://www.nattomatofu.com/posts/docker-imagefile";
const metaOgType = "article";

const DockerImage = () => {
    return (
        <Layout>
            <Head>
                <meta content={metaDescription} name="description"></meta>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
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
                            <h1 className="container mx-auto p-4 text-lg font-bold md:p-12 md:text-xl">{title}</h1>
                        </div>
                        <div className="mt-4 text-right">
                            <p className="font-thin">更新日 : {updateDate}</p>
                        </div>
                    </section>

                    <section>
                        <div className="mt-4">
                            <p className="mb-8 md:p-8">
                                前に<Link href="./docker-memo" className="cursor-pointer text-blue-500 underline decoration-blue">Dockerのコマンド一覧ページ</Link>を簡単でしたがまとめました。<br/>
                                今度はDockerイメージの作り方をまとめようと思います。
                            </p>
                            <div className="flex justify-center">
                                <div className="mb-8 border border-dashed border-neutral-900 p-4 align-middle md:w-1/2">
                                    <p className="mb-4 text-center text-xl">目次</p>
                                    <ul className="list-disc pl-6">
                                        <li className="pb-2">
                                            <a href="#id1">Dockerイメージを作るステップ</a>
                                        </li>
                                        <li className="pb-2">
                                            <a href="#id2">その他メモ</a>
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
                                        「git status」コマンドでコンフリクトが起きているファイルを特定する。（「both modified」と表示されているファイルがコンフリクトが起きているファイル）
                                    </li>
                                    <li className="my-4">任意のテキストエディタで、コンフリクトが起きているファイルを開く。</li>
                                    <li className="my-4">不要な行は削除して、最終的にしたい形にファイルを変更する。</li>
                                    <li className="my-4">以下の行を削除する。</li>
                                    <li className="my-4">ファイルを保存し、「git add」、「git commit」を実行する。</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
                            <h2 className="ml-2 text-xl" id="id2">
                                その他メモ
                            </h2>
                        </div>
                        <div className="mt-8">
                            <ul className="list-inside list-disc md:p-8">
                                <li className="my-4">WindowsやMacOSでDockerを動かす場合、Windows/MacOS上でLinuxの仮想マシンが立ち上がり、その上で各プロセスが実行される</li>
                                <li className="my-4">「docker run イメージ名 コマンド」で実行する場合、指定したイメージに含まれていないコマンドは実行することができない。（例：指定したイメージが「HelloWorld」と表示するプログラム1つしか含んでいないイメージの場合、そのDocker上で「ls」や「echo」コマンドは実行できない）</li>
                            </ul>
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
                                以上、Dockerのコマンドについて簡単でしたがまとめてみました。
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
