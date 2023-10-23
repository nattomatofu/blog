import Layout from "@/components/layout/Layout";
import Head from "next/head";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

const title = "GitLabのエディションやインストール手順についてまとめてみた";
const updateDate = "2023/6/4";
const thumbnailImagePath = "/images/thumbnail/gitlab_thumbnail.jpg";
const metaDescription =
    "どうも、納豆大好きnattoです。仕事でGitLabのインストールや設定の仕方を勉強する機会があったので学んだことをまとめてみました。GitLabのエディションやUbuntuへのインストール手順をまとめています。";
const metaOgUrl = "https://www.nattomatofu.com/posts/gitlab-memo";
const metaOgType = "article";

const GitlabMemo = () => {
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
                            <p className="md:p-8">
                                最近お仕事でGitLabを使う機会があり、Gitlabについて少し調査したので一旦まとめようと思います。
                                <br />
                                <br />
                                今回、私はブラウザ上でGitLabを使うユーザーというより、サーバを管理する立場だったこともあり、GitLabのエディションやサーバ管理についての内容がメインです。
                                <br />
                                <br />
                            </p>
                            <div className="flex justify-center">
                                <div className="mb-8 border border-dashed border-neutral-900 p-4 align-middle md:w-1/2">
                                    <p className="mb-4 text-center text-xl">
                                        目次
                                    </p>
                                    <ul className="list-disc pl-6">
                                        <li className="pb-2">
                                            <a href="#id1">
                                                提供のされ方（セルフマネージド版
                                                / SaaS版）
                                            </a>
                                        </li>
                                        <li className="pb-2">
                                            <a href="#id2">料金体系</a>
                                        </li>
                                        <li className="pb-2">
                                            <a href="#id3">ハードウェア要件</a>
                                        </li>
                                        <li className="pb-2">
                                            <a href="#id4">
                                                インストール手順（Ubuntu向け）
                                            </a>
                                        </li>
                                        <li className="pb-2">
                                            <a href="#id5">管理用コマンド</a>
                                        </li>
                                        <li className="pb-2">
                                            <a href="#id6">最後に</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <p className="md:p-8">
                                まずはGitLabセルフマネージド版とSaaS版についてです。
                            </p>
                        </div>
                    </section>
                    <section>
                        <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
                            <h2 className="ml-2 text-xl" id="id1">
                                提供のされ方（セルフマネージド版 / SaaS版）
                            </h2>
                        </div>
                        <div className="mt-8">
                            <div className="md:p-8">
                                GitLabには
                                <span className="font-bold underline decoration-red-400 decoration-2">
                                    自分でサーバを用意する「セルフマネージド版」
                                </span>
                                と、
                                <span className="font-bold underline decoration-red-400 decoration-2">
                                    サーバを用意しなくてもいい「SaaS版」
                                </span>
                                があります。
                                <br />
                                <br />
                                それぞれの特徴は以下です。
                                <br />
                                <br />
                                <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-6">
                                    セルフマネージド版
                                </h3>
                                <ul className=" list-disc space-y-2 px-6">
                                    <li>
                                        サーバを利用者側で用意して（オンプレ、AWSなど）、その上にGitLabをインストールして利用する
                                    </li>
                                    <li>料金体系は以下の3つがある</li>
                                    <li className="ml-6">free($0/月)</li>
                                    <li className="ml-6">premium($29/月)</li>
                                    <li className="ml-6">Ultimate($99/月) </li>
                                    <li>
                                        ディストリビューションは以下の2種類がある
                                    </li>
                                    <li className="ml-6">
                                        GitLab CE(Community Edition)
                                    </li>
                                    <li className="ml-12">オープンソース</li>
                                    <li className="ml-12">
                                        無料で利用可能(有償版はなし)
                                    </li>
                                    <li className="ml-12">
                                        ライセンス購入していないEEと同等の機能
                                    </li>
                                    <li className="ml-6">
                                        GitLab EE(Enterprise Edition)
                                    </li>
                                    <li className="ml-12">
                                        エンタープライズ向けの商用製品
                                    </li>
                                    <li className="ml-12">
                                        ライセンス購入せず無償でも利用可能だが、有償だと機能が増える（増える機能や料金は下記の「料金体系」を参照）
                                    </li>
                                    <li className="ml-12">
                                        <a
                                            href="https://about.gitlab.com/install/"
                                            className="cursor-pointer text-blue-500 underline decoration-blue-500 hover:scale-105"
                                        >
                                            公式の推奨インストール手順
                                        </a>
                                        でもEEのインストール手順が記載されていたり、
                                        <a
                                            href="https://www.gitlab.jp/install/ce-or-ee/"
                                            className="cursor-pointer text-blue-500 underline decoration-blue-500 hover:scale-105"
                                        >
                                            CEとEEの違いについての説明ページ
                                        </a>
                                        からもEEの仕様が推奨されているため公式の推奨版といえる
                                    </li>
                                </ul>
                                <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-6">
                                    SaaS版
                                </h3>
                                <ul className=" list-disc space-y-2 px-6">
                                    <li>
                                        GitLabの公式サイトにてサインアップ（アカウント登録）するのみで利用でき、サーバを準備する必要がない
                                    </li>
                                    <li>実体はGoogleCloudで稼働している</li>
                                </ul>
                                <br />
                                <br />
                                SaaS版については使う予定が元からなかったこともあり、あっさりです笑。
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
                            <h2 className="ml-2 text-xl" id="id2">
                                料金体系
                            </h2>
                        </div>
                        <div className="mt-8 md:p-8">
                            <p>
                                セルフマネージメント版、SaaS版共に以下の料金体系となっています。
                                <br />
                                <br />
                                何円払うことでどの機能が利用できるようになるかの詳細は
                                <a
                                    href="https://www.gitlab.jp/pricing/gitlab-com/feature-comparison/"
                                    className="cursor-pointer text-blue-500 underline decoration-blue-500 hover:scale-105"
                                >
                                    公式サイト
                                </a>
                                に記載されていますが、超独断で超簡単に要約してみます。
                                <br />
                                <span className="font-bold underline decoration-red-400 decoration-2">
                                    正確に違いを把握したい方は公式をご確認ください。
                                </span>
                            </p>
                            <div>
                                <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-16">
                                    Free($0/月)
                                </h3>
                                <div className="pl-4">
                                    以下の基本的なサービスが利用可能です。
                                    <ul className="my-4 list-disc space-y-2 px-6">
                                        <li>ソースコード管理</li>
                                        <li>WikiやIssueの管理</li>
                                        <li>CI/CD機能</li>
                                    </ul>
                                </div>
                                <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-16">
                                    Premium($29/月)
                                </h3>
                                <div className="pl-4">
                                    以下のサービスが利用可能です。
                                    <ul className=" mt-4 list-disc space-y-2 px-6">
                                        <li>
                                            GitLab外のリポジトリからGitLabリポジトリへの自動ミラーリング
                                        </li>
                                        <li>
                                            GitLab外の他のリポジトリと接続したCI/CD実行
                                        </li>
                                        <li>24時間365日のサポート</li>
                                    </ul>
                                </div>
                                <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-16">
                                    Ultimate($99/月)
                                </h3>
                                <p className="pl-4">
                                    セキュリティや脆弱性情報についての高度な機能が利用可能なようです。
                                </p>
                                <p className="pt-8 md:mt-4">
                                    今回の利用目的ではFreeで問題ない程度だったので、PremiumやUltimateの機能についてはそんなに詳しく確認していません。
                                    <br />
                                    <span className="font-bold underline decoration-red-400 decoration-2">
                                        繰り返しとなりますが、詳細を知りたい方は上記公式サイトをご確認ください。
                                    </span>
                                </p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
                            <h2 className="ml-2 text-xl" id="id3">
                                ハードウェア要件
                            </h2>
                        </div>
                        <div className="mt-8">
                            <div className="md:p-8">
                                GitLabは色々な機能がてんこ盛りなこともあって、貧弱なサーバで稼働させようとするとレスポンスがとても遅くなってしまいます。
                                <br />
                                公式からは最低限のハードウェア要件として、以下のように提言されています。
                                <br />
                                ちなみに言わずもがなですが、SaaS版はサーバを自分で用意する必要はないので、セルフマネージド版のみ対象です。
                                <ul className="my-6 list-disc space-y-2 px-6">
                                    <li>ストレージ</li>
                                    <li className="ml-6">
                                        オムニバス（セルフマネージメント版）GitLabパッケージのインストールには、{" "}
                                        <span className="font-bold underline decoration-red-400 decoration-2">
                                            約2.5GB
                                        </span>
                                        のストレージスペースが必要
                                    </li>
                                    <li>CPU</li>
                                    <li className="ml-6">
                                        推奨の最低数は{" "}
                                        <span className="font-bold underline decoration-red-400 decoration-2">
                                            4コア
                                        </span>{" "}
                                        （4コアだと最大500ユーザー管理可能で、8コアだと約1000ユーザー）
                                    </li>
                                    <li>メモリ</li>
                                    <li className="ml-6">
                                        推奨の最低サイズは{" "}
                                        <span className="font-bold underline decoration-red-400 decoration-2">
                                            4GB RAM
                                        </span>{" "}
                                        （4GBRAMだと最大500ユーザー管理可能で、8GB
                                        RAMだと約1000ユーザー）
                                    </li>
                                </ul>
                                以上、最近であればそこまでクリアは難しくないスペックかなという感じです。
                                <br />
                                <br />
                                インストール前の説明はここまでで、次はインストールの方法を説明してきます。
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
                            <h2 className="ml-2 text-xl" id="id4">
                                インストール手順（Ubuntu向け）
                            </h2>
                        </div>
                        <div className="mt-8">
                            <div className="md:p-8">
                                今回はUbuntu上にGitLabをダウンロード＆インストールしてみたので、ほぼ公式の手順そのままですが、行った手順を書いていきます。
                                <br />
                                所要時間は大体20分程度でした。
                                <ul className="my-6 list-decimal space-y-2 px-6">
                                    <li>
                                        GitLabをインストールするサーバへSSH等で接続する
                                    </li>
                                    <li>以下のコマンドを実行する</li>
                                    <SyntaxHighlighter
                                        language="shell"
                                        style={vscDarkPlus}
                                        showLineNumbers={false}
                                    >
                                        {`// aptをアップデート
$ sudo apt-get update
// 依存パッケージをインストール
$ sudo apt-get install -y curl openssh-server ca-certificates tzdata perl
// 依存パッケージをインストール　※GitLabからのメールの送信機能を利用しないのであれば不要
$ sudo apt-get install -y postfix
// GitLabパッケージリポジトリをダウンロード
$ curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | sudo bash
// GitLabをインストール。「EXTERNAL_URL」はGitLabへのアクセスする際のURLを入力する部分で、後で変更可
$ sudo EXTERNAL_URL="https://gitlab.example.com" apt-get install gitlab-ee`}
                                    </SyntaxHighlighter>
                                </ul>
                                こんな簡単にインストールできるのか！って感じですがこれでインストール完了です。
                                <br />
                                ちなみに最後のインストールコマンドの実行で10～15分程かかりました。
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
                            <h2 className="ml-2 text-xl" id="id5">
                                管理用コマンド
                            </h2>
                        </div>
                        <div className="mt-8">
                            <div className="md:p-8">
                                インストールを終えて運用に入ると、GitLabのサービスを起動したり停止したりすることがあるかと思います。
                                <br />
                                <br />
                                GitLabの起動や停止などなは、`gitlab-ctl`から始まるコマンドを利用することで可能です。
                                <br />
                                GitLabを構成しているnginxなどの起動や停止もこのコマンドでできます。
                                <br />
                                <br />
                                <p className="font-bold">▼サーバの起動</p>
                                <SyntaxHighlighter
                                    language="shell"
                                    style={vscDarkPlus}
                                    showLineNumbers={false}
                                >
                                    {`$ gitlab-ctl start`}
                                </SyntaxHighlighter>
                                <p className="mt-4 font-bold">▼サーバの停止</p>
                                <SyntaxHighlighter
                                    language="shell"
                                    style={vscDarkPlus}
                                    showLineNumbers={false}
                                >
                                    {`$ gitlab-ctl stop`}
                                </SyntaxHighlighter>
                                <p className="mt-4 font-bold">
                                    ▼サーバの再起動
                                </p>
                                <SyntaxHighlighter
                                    language="shell"
                                    style={vscDarkPlus}
                                    showLineNumbers={false}
                                >
                                    {`$ gitlab-ctl restart`}
                                </SyntaxHighlighter>
                                <p className="mt-4 font-bold">
                                    ▼サーバのステータス確認
                                </p>
                                <SyntaxHighlighter
                                    language="shell"
                                    style={vscDarkPlus}
                                    showLineNumbers={false}
                                >
                                    {`$ gitlab-ctl status`}
                                </SyntaxHighlighter>
                                <p className="mt-4 font-bold">▼設定の再構成</p>
                                <SyntaxHighlighter
                                    language="shell"
                                    style={vscDarkPlus}
                                    showLineNumbers={false}
                                >
                                    {`$ gitlab-ctl reconfigure`}
                                </SyntaxHighlighter>
                                <p className="mt-4 font-bold">▼nginxの停止</p>
                                <SyntaxHighlighter
                                    language="shell"
                                    style={vscDarkPlus}
                                    showLineNumbers={false}
                                >
                                    {`$ gitlab-ctl stop nginx`}
                                </SyntaxHighlighter>
                                <p className="mt-4 font-bold">
                                    ▼GitLabサーバのログの確認
                                </p>
                                <SyntaxHighlighter
                                    language="shell"
                                    style={vscDarkPlus}
                                    showLineNumbers={false}
                                >
                                    {`$ gitlab-ctl tail`}
                                </SyntaxHighlighter>
                                <br />
                                <br />
                                コマンドは他にも沢山ありますが、基本的なコマンドは以上です。
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
                            <h2 className="ml-2 text-xl" id="id6">
                                最後に
                            </h2>
                        </div>
                        <div className="mt-8">
                            <p className="md:p-8">
                                以上、GitLabについて簡単でしたがまとめてみました。
                                <br />
                                <br />
                                冒頭でも書きましたが、今回GitLabを管理する側の立場だったこともあり、インストールや管理コマンド中心の内容となりましたが、少しでもどなたかの参考になればと思います！
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

export default GitlabMemo;
