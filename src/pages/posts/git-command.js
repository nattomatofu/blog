import Layout from "@/components/Layout";
import Head from "next/head";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

const title = "Gitのコマンドをまとめてみた";
const updateDate = "2023/8/16";
const thumbnailImagePath = "/images/thumbnail/git_command_thumbnail.png";
const metaDescription =
    "どうも、納豆大好きnattoです。Gitのコマンドをよく忘れるので、忘れたときのメモ用にまとめます。";
const metaOgUrl = "https://www.nattomatofu.com/posts/git-command";
const metaOgType = "article";

const GitCommand = () => {
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
                            <p className="md:p-8">
                                今更ですが、Gitについて最近学び直しているので備忘メモとして簡単にまとめます。
                            </p>
                            <div className="flex justify-center">
                                <div className="mb-8 border border-dashed border-neutral-900 p-4 align-middle md:w-1/2">
                                    <p className="mb-4 text-center text-xl">目次</p>
                                    <ul className="list-disc pl-6">
                                        <li className="pb-2">
                                            <a href="#id1">Gitコマンドまとめ</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <p className="md:p-8">それではいきます。</p>
                        </div>
                    </section>
                    <section>
                        <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
                            <h2 className="ml-2 text-xl" id="id1">
                                Gitコマンドまとめ
                            </h2>
                        </div>
                        <div className="mt-8">
                            <div className="md:p-8">
                                <p className="font-bold">▼Gitユーザー名の登録</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git config --global user.name "任意のユーザー名"`}
                                </SyntaxHighlighter>
                                <p className="mt-4 font-bold">▼Gitユーザーのメールアドレスの登録</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git config --global user.email 任意のメールアドレス`}
                                </SyntaxHighlighter>
                                <p className="mt-4 font-bold">▼Gitの設定一覧表示</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git config --list`}
                                </SyntaxHighlighter>
                                    このコマンドで表示される内容の設定ファイルは「~/.gitconfig」に記載されていて、ファイルの中身はcatコマンドなどで確認できます。
                                <p className="mt-4 font-bold">▼ワークツリーの変更をステージングへ追加（＝ステージングにインデックスを作成）</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git add <ファイル名>`}
                                </SyntaxHighlighter>
                                <p className="mt-4 font-bold">▼現在のファイル変更状況を確認</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git status`}
                                </SyntaxHighlighter>
                                ワークツリーとステージングの差分は赤色の文字で、ステージングとローカルリポジトリの差分は緑色の文字で表示されます。
                                <p className="mt-4 font-bold">▼nginxの停止</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ gitlab-ctl stop nginx`}
                                </SyntaxHighlighter>
                                <p className="mt-4 font-bold">▼GitLabサーバのログの確認</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
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

export default GitCommand;
