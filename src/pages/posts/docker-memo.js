import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

const title = "Dockerコマンド一覧";
const updateDate = "2023/8/27";
const thumbnailImagePath = "/images/thumbnail/docker-thumbnail.png";
const metaDescription =
    "どうも、納豆大好きnattoです。Dockerコマンドについてまとめます。";
const metaOgUrl = "https://www.nattomatofu.com/posts/docker-memo";
const metaOgType = "article";

const DockerCommand = () => {
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
                                これまでコンテナやDockerを使ったプロジェクトに参加したこともあるものの、
                                <br />
                                「各々のPC環境に依存せず、ソフトが使える便利なもの」
                                <br />
                                程度にしか理解できておらず、どこかで学びたいと思っていました。
                                <br />
                                <br />
                                ちょうど時間があって勉強してみたので、メモ程度に簡単にまとめます。
                            </p>
                            <div className="flex justify-center">
                                <div className="mb-8 border border-dashed border-neutral-900 p-4 align-middle md:w-1/2">
                                    <p className="mb-4 text-center text-xl">
                                        目次
                                    </p>
                                    <ul className="list-disc pl-6">
                                        <li className="pb-2">
                                            <a href="#id1">
                                                Dockerコマンド一覧
                                            </a>
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
                                Dockerコマンド一覧
                            </h2>
                        </div>
                        <div className="mt-8">
                            <div className="md:p-8">
                                <p className="font-bold">
                                    ▼Dockerイメージからコンテナを作成
                                </p>
                                <SyntaxHighlighter
                                    language="shell"
                                    style={vscDarkPlus}
                                    showLineNumbers={false}
                                >
                                    {`$ docker create イメージ名`}
                                </SyntaxHighlighter>
                                このコマンドを実行することで、コンテナで使用するファイルシステムが作成されます。
                                また、実行後、作成されたコンテナのコンテナIDが表示されます。
                                <p className="font-bold">
                                    ▼Dockerコンテナを起動
                                </p>
                                <SyntaxHighlighter
                                    language="shell"
                                    style={vscDarkPlus}
                                    showLineNumbers={false}
                                >
                                    {`$ docker start コンテナID`}
                                </SyntaxHighlighter>
                                「docker start -a
                                コンテナID」と入力することで起動時のログが出力されるようになります。
                                また、「docker
                                run」コマンドでは起動時コマンドを指定できますが、この「docker
                                start」では指定することはできません。
                                <p className="font-bold">
                                    ▼Dockerイメージの起動
                                </p>
                                <SyntaxHighlighter
                                    language="shell"
                                    style={vscDarkPlus}
                                    showLineNumbers={false}
                                >
                                    {`$ docker run イメージ名`}
                                </SyntaxHighlighter>
                                「docker create」と「docker
                                start」コマンドをまとめて実行する挙動になります。
                                まずローカルのキャッシュ領域に該当するイメージがあるか確認し、なければDockerHubに該当する名前のイメージを探しに行きます。
                                <br />
                                該当するイメージがあった場合、実行されます。
                                <p className="mt-4 font-bold">
                                    ▼デフォルトの起動コマンドを上書きしてイメージを実行
                                </p>
                                <SyntaxHighlighter
                                    language="shell"
                                    style={vscDarkPlus}
                                    showLineNumbers={false}
                                >
                                    {`$ docker run イメージ名 コマンド`}
                                </SyntaxHighlighter>
                                Dockerイメージは「起動時コマンド」なるものをイメージの一部として保持しており、名前の通りイメージ実行時にそのコマンドを実行します。
                                <br />
                                そのコマンドを上書きしてイメージを実行するコマンドです。
                                <p className="mt-4 font-bold">
                                    ▼コンテナを実行して、実行と同時にシェルに接続
                                </p>
                                <SyntaxHighlighter
                                    language="shell"
                                    style={vscDarkPlus}
                                    showLineNumbers={false}
                                >
                                    {`$ docker run  -it イメージ名 sh`}
                                </SyntaxHighlighter>
                                コンテナを立ち上げてすぐに、コンテナ内でコマンド操作したい場合はこのコマンドを使いましょう。
                                サンプルとして、「docker run -it alpine
                                sh」のように入力すると、プレーンのaplineイメージでコンテナが作成され、同時にシェルが開かれます。
                                <p className="mt-4 font-bold">
                                    ▼実行中のコンテナ一覧を表示
                                </p>
                                <SyntaxHighlighter
                                    language="shell"
                                    style={vscDarkPlus}
                                    showLineNumbers={false}
                                >
                                    {`$ docker ps`}
                                </SyntaxHighlighter>
                                起動しているコンテナがない場合は、表示される項目の項目名しか表示されません。
                                <p className="mt-4 font-bold">
                                    ▼これまでに作成した全てのコンテナ一覧を表示
                                </p>
                                <SyntaxHighlighter
                                    language="shell"
                                    style={vscDarkPlus}
                                    showLineNumbers={false}
                                >
                                    {`$ docker ps --all`}
                                </SyntaxHighlighter>
                                <p className="mt-4 font-bold">
                                    ▼実行中以外のコンテナを削除
                                </p>
                                <SyntaxHighlighter
                                    language="shell"
                                    style={vscDarkPlus}
                                    showLineNumbers={false}
                                >
                                    {`$ docker system prune`}
                                </SyntaxHighlighter>
                                このコマンドはDockerHubからダウンロードされてきたビルドキャッシュも削除されるのでその点は注意しましょう。
                                <p className="mt-4 font-bold">
                                    ▼コンテナの実行ログを表示
                                </p>
                                <SyntaxHighlighter
                                    language="shell"
                                    style={vscDarkPlus}
                                    showLineNumbers={false}
                                >
                                    {`$ docker logs コンテナID`}
                                </SyntaxHighlighter>
                                「docker
                                run」コマンド実行時に表示されるようなログが表示されます。
                                <p className="mt-4 font-bold">
                                    ▼起動中のコンテナを停止
                                </p>
                                <SyntaxHighlighter
                                    language="shell"
                                    style={vscDarkPlus}
                                    showLineNumbers={false}
                                >
                                    {`$ docker stop コンテナID`}
                                </SyntaxHighlighter>
                                <p className="mt-4 font-bold">
                                    ▼起動中のコンテナを強制終了
                                </p>
                                <SyntaxHighlighter
                                    language="shell"
                                    style={vscDarkPlus}
                                    showLineNumbers={false}
                                >
                                    {`$ docker kill コンテナID`}
                                </SyntaxHighlighter>
                                このコマンドはコンテナを強制終了させます。
                                <br />
                                基本的には上記の「docker
                                stop」コマンドを実行するようにして、どうしても固まってしまって動かない場合などにこのコマンドを実行しましょう。
                                <p className="mt-4 font-bold">
                                    ▼起動中のコンテナ内部でコマンドを実行
                                </p>
                                <SyntaxHighlighter
                                    language="shell"
                                    style={vscDarkPlus}
                                    showLineNumbers={false}
                                >
                                    {`$ docker exec -it コンテナID 実行したいコマンド`}
                                </SyntaxHighlighter>
                                コンテナを起動した上で、そのコンテナ上で何らかのコマンドを実行したい場合に使用します。
                                <br />
                                ここで「-it」とは、「-i」と「-t」の合体バージョンであり、
                                <br />
                                「-i」は、コンテナ内のターミナルを自分で操作しているターミナルへ表示する（接続する）ためのオプションで、
                                <br />
                                「-t」は、コンテナと接続したターミナルを綺麗に見やすく表示する（コマンド入力する際の左のインデントなどを表示する）ためのオプションです。
                                <p className="mt-4 font-bold">
                                    ▼起動中のコンテナをターミナルで操作
                                </p>
                                <SyntaxHighlighter
                                    language="shell"
                                    style={vscDarkPlus}
                                    showLineNumbers={false}
                                >
                                    {`$ docker exec -it コンテナID sh`}
                                </SyntaxHighlighter>
                                指定したコンテナをターミナルで操作することができます。
                                <br />
                                接続先はLinuxになっていることをお忘れなく。
                                <p className="mt-4 font-bold">
                                    ▼Dockerイメージファイルを作成
                                </p>
                                <SyntaxHighlighter
                                    language="shell"
                                    style={vscDarkPlus}
                                    showLineNumbers={false}
                                >
                                    {`$ docker build .`}
                                </SyntaxHighlighter>
                                「Dockerfile」という名前のファイルに対して実行します。
                                <br />
                                Dockerfileの書き方については別の記事にてまとめます。（→
                                <Link
                                    href="./docker-imagefile"
                                    className="decoration-blue cursor-pointer text-blue-500 underline"
                                >
                                    こちら
                                </Link>
                                にまとめています）
                                <p className="mt-4 font-bold">
                                    ▼Dockerイメージファイルを名前付きで作成
                                </p>
                                <SyntaxHighlighter
                                    language="shell"
                                    style={vscDarkPlus}
                                    showLineNumbers={false}
                                >
                                    {`$ docker build -t イメージ名:タグ名`}
                                </SyntaxHighlighter>
                                イメージ名もタグ名の任意の文字列を設定することができます。
                                <br />
                                このコマンドで作成したイメージは「docker run
                                イメージ名:タグ名」で実行できます。
                                <p className="mt-4 font-bold">
                                    ▼起動中のコンテナからDockerイメージファイルを作成・保存
                                </p>
                                <SyntaxHighlighter
                                    language="shell"
                                    style={vscDarkPlus}
                                    showLineNumbers={false}
                                >
                                    {`$ docker commit -c 'CMD ["コマンド"]' コンテナID`}
                                </SyntaxHighlighter>
                                CMDの後のコマンドは、コンテナ実行時起動コマンドです。
                                具体的には「docker commit -c &#39;CMD
                                [&quot;redis-server &quot;]&#39;
                                abcdef」のようなコマンドになります。
                                <br />
                                <br />
                                コマンドは他にもありますが、以上です。
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
                            <div className="md:p-8">
                                以下、その他個人的なメモです。
                                <ul className="list-inside list-disc md:p-8">
                                    <li className="my-4">
                                        WindowsやMacOSでDockerを動かす場合、Windows/MacOS上でLinuxの仮想マシンが立ち上がり、その上で各プロセスが実行される
                                    </li>
                                    <li className="my-4">
                                        「docker run イメージ名
                                        コマンド」で実行する場合、指定したイメージに含まれていないコマンドは実行することができない。（例：指定したイメージが「HelloWorld」と表示するプログラム1つしか含んでいないイメージの場合、そのDocker上で「ls」や「echo」コマンドは実行できない）
                                    </li>
                                </ul>
                                Dockerは飽くまでLinux上で動いているんですねー。
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

export default DockerCommand;
