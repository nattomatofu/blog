import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

const title = "Docker Composeファイル（docker-compose.yml）の書き方";
const updateDate = "2023/9/5";
const thumbnailImagePath = "/images/thumbnail/docker_compose_thumbnail.png";
const metaDescription =
    "どうも、納豆大好きnattoです。Docker Composeファイル（docker-compose.yml）の書き方についてまとめます。";
const metaOgUrl = "https://www.nattomatofu.com/posts/docker-compose";
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
                                    href="./docker-imagefile"
                                    className="decoration-blue cursor-pointer text-blue-500 underline"
                                >
                                    Dockerイメージファイルの書き方
                                </Link>
                                を簡単でしたがまとめました。
                                <br />
                                今回はDocker
                                Composeファイル（docker-compose.yml）の作り方をまとめようと思います。
                            </p>
                            <div className="flex justify-center">
                                <div className="mb-8 border border-dashed border-neutral-900 p-4 align-middle md:w-1/2">
                                    <p className="mb-4 text-center text-xl">
                                        目次
                                    </p>
                                    <ul className="list-disc pl-6">
                                        <li className="pb-2">
                                            <a href="#id1">
                                                Docker
                                                Composeファイルを作って実行するまでの手順
                                            </a>
                                        </li>
                                        <li className="pb-2">
                                            <a href="#id2">
                                                docker-compose.ymlの書き方
                                            </a>
                                        </li>
                                        <li className="pb-2">
                                            <a href="#id3">
                                                DockerCompose関連のコマンド一覧
                                            </a>
                                        </li>
                                        <li className="pb-2">
                                            <a href="#id3">
                                                イメージファイルを再ビルド時する時の時間短縮について
                                            </a>
                                        </li>
                                        <li className="pb-2">
                                            <a href="#id4">最後に</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
                            <h2 className="ml-2 text-xl" id="id3">
                                Docker Composeファイルを作って実行するまでの手順
                            </h2>
                        </div>
                        <div className="mt-8">
                            <div className="md:p-8">
                                DockerComposeファイルの書き方の前に、DockerComposeファイルを実行するまでの流れを簡単にまとめます。
                                <ul className="list-inside list-decimal md:p-8">
                                    <li className="my-4">
                                        独自のコンテナを使用する場合は、コンテナのイメージファイル（Dockerfile）を用意する。
                                    </li>
                                    <li className="my-4">
                                        任意のディレクトリに「docker-compose.yml」のファイル名でファイル作成する。
                                    </li>
                                    <li className="my-4">
                                        作成した「docker-compose.yml」に内容を記載する。
                                    </li>
                                    <li className="my-4">
                                        作成した「docker-compose.yml」のあるディレクトリまで移動して、以下のコマンドを実行する。
                                    </li>
                                    <SyntaxHighlighter
                                        language="shell"
                                        style={vscDarkPlus}
                                        showLineNumbers={false}
                                    >
                                        {`$ docker-compose up`}
                                    </SyntaxHighlighter>
                                </ul>
                                次のセクションから「3.作成した「docker-compose.yml」に内容を記載する」の具体的な書き方をまとめます。
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
                            <h2 className="ml-2 text-xl" id="id1">
                                docker-compose.ymlの書き方
                            </h2>
                        </div>
                        <div className="mt-8">
                            <div className="md:p-8">
                                めちゃくちゃ簡単ですがDocker
                                Composeファイルの中身は以下のように記載します。
                                <SyntaxHighlighter
                                    language="shell"
                                    style={vscDarkPlus}
                                    showLineNumbers={false}
                                >
                                    {`version: '3'
services:
  redis-server:
    image: 'redis'
  node-app:
    build: ./
    ports:
      - "4001:8081"`}
                                </SyntaxHighlighter>
                                以上の内容で、redisサーバーでデータ管理を行い、フロントエンドはNode.jsで作成されたWebサイトが作れます。（当たり前ですが、HTMLやJSのファイルなどは別途用意する必要があります。）
                                <br />
                                このファイルを参考に次から各行についてまとめます。
                                <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-16">
                                    version
                                </h3>
                                <div className="pl-4">
                                    まずは「version」です。この部分は定型文です。
                                    <br />
                                    コンテナの振る舞い自体に影響するものではないのではあまり重要ではないのですが、DockerComposeファイルの構文のバージョンを指定するものです。
                                    <br />
                                    バージョン2を使うことも可能ですが、せっかくなので最新版のバージョン3を使いましょう。（バージョン1は非推奨のようです。）
                                    <br />
                                    バージョンの細かい説明や違いは
                                    <Link
                                        href="https://docs.docker.jp/compose/compose-file/compose-versioning.html"
                                        className="decoration-blue cursor-pointer text-blue-500 underline"
                                    >
                                        こちら
                                    </Link>
                                    に書いてあるのでここを確認しましょう。
                                    <br />
                                    書き方としては以下のような感じになります。
                                    <SyntaxHighlighter
                                        language="shell"
                                        style={vscDarkPlus}
                                        showLineNumbers={false}
                                    >
                                        {`version: '3'`}
                                    </SyntaxHighlighter>
                                </div>
                                <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-16">
                                    services
                                </h3>
                                <div className="pl-4">
                                    続いて「services」です。これも定型文です。
                                    <br />
                                    この部分には、まとめて管理するコンテナの中身を記載します。
                                    <br />
                                    この「services」より下に、階層構造でコンテナの振る舞いを詳細に書くことになりますので、次からは階層別でまとめます。
                                </div>
                                <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-16">
                                    一階層目（services &gt; 一階層目）
                                </h3>
                                <div className="pl-4">
                                    一階層目はサンプルだと、「redis-server」や「node-app」の部分にあたります。
                                    <br />
                                    この部分は、まとめて管理するコンテナの名前をつける部分なのですが、任意の名前を設定できます。
                                    <br />
                                    なのでプロジェクトで決められた規則がある場合はそれに沿った名前を、個人的な用途で使う場合は自分でわかりやすい名前を適当につけましょう。
                                </div>
                                <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-16">
                                    二階層目（services &gt; 一階層目 &gt;
                                    二階層目）
                                </h3>
                                <div className="pl-4">
                                    二階層目はサンプルだと、「image:」や「build:」、「ports:」の部分にあたります。
                                    <br />
                                    この部分でコンテナの具体的な設定を定義してきます。
                                    <br />
                                    文章でまとめると分かり辛いので、表にします。
                                    <br />
                                    <br />
                                    <table class="border-collapse border border-slate-500 ">
                                        <thead>
                                            <tr>
                                                <th class="border border-slate-600 px-4 text-center">
                                                    コマンド
                                                </th>
                                                <th class="border border-slate-600">
                                                    使い方
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="border border-slate-700 px-8 text-center">
                                                    image
                                                </td>
                                                <td class="border border-slate-700 px-4">
                                                    起動するコンテナのイメージ名・IDを指定します。
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="border border-slate-700 px-8 text-center">
                                                    build
                                                </td>
                                                <td class="border border-slate-700 px-4">
                                                    実行したいDockerfileのあるディレクトリを指定します。
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="border border-slate-700 px-8 text-center">
                                                    ports
                                                </td>
                                                <td class="border border-slate-700 px-4">
                                                    コンテナを起動する端末（ローカルPCなど）とのポートの対応を定義します。
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
                            <h2 className="ml-2 text-xl" id="id3">
                                DockerCompose関連のコマンド一覧
                            </h2>
                        </div>
                        <div className="mt-8">
                            <div className="md:p-8">
                                前述の通り、ファイル（docker-compose.yml）を作成しただけで終わりではなく、コンテナを実行するためのコマンドを打つ必要があります。
                                <br />
                                実行以外にも、DockerCompose用のコマンドがいくつかあるのでまとめます。
                                <p className="mt-4 font-bold">
                                    ▼docker-compose.ymlの内容を実行
                                </p>
                                <SyntaxHighlighter
                                    language="shell"
                                    style={vscDarkPlus}
                                    showLineNumbers={false}
                                >
                                    {`$ docker-compose up`}
                                </SyntaxHighlighter>
                                docker-compose.ymlがあるディレクトリまで移動してから実行しましょう。
                                <p className="mt-4 font-bold">
                                    ▼docker-compose.ymlの内容をビルドして実行
                                </p>
                                <SyntaxHighlighter
                                    language="shell"
                                    style={vscDarkPlus}
                                    showLineNumbers={false}
                                >
                                    {`$ docker-compose up --build`}
                                </SyntaxHighlighter>
                                一度docker-compose.ymlから作成したコンテナのソースコードを書き換えた場合は、普通の「停止」→「起動」では更新されません。
                                <br />
                                ビルドをし直す必要があるんですね。そんな時に使用します。
                                <p className="mt-4 font-bold">
                                    ▼docker-compose.ymlの内容をバックグランドで実行
                                </p>
                                <SyntaxHighlighter
                                    language="shell"
                                    style={vscDarkPlus}
                                    showLineNumbers={false}
                                >
                                    {`$ docker-compose up --d`}
                                </SyntaxHighlighter>
                                普通に「docker-compose
                                up」を実行するとサーバのログが表示され、キーボードからコンソール入力はできなくなってしまいます。
                                <br />
                                ですが、このコマンドを使用するとコンテナがバックグランドで実行され、コンソールが開放されます。
                                <p className="mt-4 font-bold">
                                    ▼起動中のDockerComposeを停止
                                </p>
                                <SyntaxHighlighter
                                    language="shell"
                                    style={vscDarkPlus}
                                    showLineNumbers={false}
                                >
                                    {`$ docker-compose down`}
                                </SyntaxHighlighter>
                                停止対象のdocker-compose.ymlがあるディレクトリまで移動してから実行しましょう。
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
                            以下はnode.jsで作成されたWebサイトを公開するコンテナを作成する際のサンプルのイメージファイルです。
                            <SyntaxHighlighter
                                language="shell"
                                style={vscDarkPlus}
                                showLineNumbers={false}
                            >
                                {`FROM node:14-alpine

WORKDIR /usr/app

COPY ./ ./
RUN npm install

CMD ["npm", "start"]`}
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
                                    {`FROM node:14-alpine`}
                                </SyntaxHighlighter>
                            </div>
                            <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-16">
                                WORKDIR
                            </h3>
                            <div className="pl-4">
                                続いて「WORKDIR」です。
                                <br />
                                Dockerfile内に記載している「WORKDIR」以降の行（コマンド）を実行するディレクトリを指定します。
                                <br />
                                今回の例だと、次に紹介する「COPY」コマンド以降ということですね。
                                <br />
                                指定したディレクトリがコンテナ内にない場合は勝手に作成され、指定したディレクトリまでcdコマンドを実行したときのようにカレントディレクトリが移動します。
                                <SyntaxHighlighter
                                    language="shell"
                                    style={vscDarkPlus}
                                    showLineNumbers={false}
                                >
                                    {`WORKDIR /usr/app`}
                                </SyntaxHighlighter>
                            </div>
                            <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-16">
                                COPY
                            </h3>
                            <div className="pl-4">
                                続いて「COPY」です。
                                <br />
                                COPY
                                は、ローカルPCからコンテナのファイルシステムへファイルをコピーする際に使用します。
                                <br />
                                COPYの後の、1つ目のオプションにローカルPC上のパスを、2つ目のオプションにコンテナ上のパスを記載します。
                                <SyntaxHighlighter
                                    language="shell"
                                    style={vscDarkPlus}
                                    showLineNumbers={false}
                                >
                                    {`COPY ./ ./`}
                                </SyntaxHighlighter>
                                例えば、Node.jsで作ったWebサイトを公開するときには「npm
                                install」コマンドを実行する必要があるかと思いますが、
                                <br />
                                「npm
                                install」コマンドは「package.json」のファイルが必要です。
                                <br />
                                もちろん、できたてのコンテナの中には「package.json」はないので、ローカルPCからコピーする必要があります。
                                <br />
                                そのような時に使用するコマンドです。
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
                                    {`RUN npm install`}
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
                                    {`CMD ["npm", "start"]`}
                                </SyntaxHighlighter>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
                            <h2 className="ml-2 text-xl" id="id3">
                                イメージファイルを再ビルド時する時の時間短縮について
                            </h2>
                        </div>
                        <div className="mt-8">
                            <div className="md:p-8">
                                上記のDockerfileでは、例えばindex.jsのみに変更を加えてイメージを再ビルドする場合でも（package.jsonに変更がない場合でも）、
                                「COPY ./
                                ./」のコマンド実行時にファイル変更があったと見なされ、それに続く「RUN
                                npm
                                install」はキャッシュを参照せず実行されることとなります。
                                <br />
                                <br />
                                Dockerfileのビルドでは上から順にコマンドが実行され、もしコマンド自体や参照するファイルに変更があった場合（今回の例の場合index.jsに変更あり）、それ以降のコマンドはキャッシュは参照せずに実行されるんですね。
                                <br />
                                そのため、「npm
                                install」コマンドの実行に余分な時間がかかってしまいます。
                                <br />
                                <br />
                                このような場合、以下のようにDockerfileを書き直すことで、package.jsonに変更があった場合のみ「RUN
                                npm
                                install」がキャッシュを参照せず実行されるようにできます。
                                <SyntaxHighlighter
                                    language="shell"
                                    style={vscDarkPlus}
                                    showLineNumbers={false}
                                >
                                    {`FROM node:14-alpine

WORKDIR /usr/app

COPY ./package.json ./  #　←　まずは「package.json」だけをコピーするように変更
RUN npm install
COPY ./ ./

CMD ["npm", "start"]`}
                                </SyntaxHighlighter>
                                まずpackage.jsonを先にコピーしてから「RUN npm
                                install」を実行することでpackage.jsonに変更があった場合のみ、「RUN
                                npm install」されるようになります。
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
                            <h2 className="ml-2 text-xl" id="id4">
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
