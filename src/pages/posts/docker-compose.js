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
                        <TitleText>{title}</TitleText>
                        <UpdateDate>{updateDate}</UpdateDate>
                    </section>

                    <section>
                        <Preface>
                            <PrefaceText>
                                前に
                                <LinkText href="./docker-imagefile">
                                    Dockerイメージファイルの書き方
                                </LinkText>
                                を簡単でしたがまとめました。
                                <br />
                                今回はDocker
                                Composeファイル（docker-compose.yml）の作り方をまとめようと思います。
                            </PrefaceText>
                            <TableOfContents />
                        </Preface>
                    </section>
                    <section>
                        <MainHeading>
                            Docker Composeファイルを作って実行するまでの手順
                        </MainHeading>
                        <MainParagraph>
                            DockerComposeファイルの書き方の前に、DockerComposeファイルを実行するまでの流れを簡単にまとめます。
                            <ul className="list-inside list-decimal md:p-8">
                                <li className="my-4">
                                    独自のコンテナを使用する場合は、コンテナのイメージファイル（
                                    <CodeText>Dockerfile</CodeText>
                                    ）を用意する。
                                </li>
                                <li className="my-4">
                                    任意のディレクトリに
                                    <CodeText>docker-compose.yml</CodeText>
                                    のファイル名でファイル作成する。
                                </li>
                                <li className="my-4">
                                    作成した
                                    <CodeText>docker-compose.yml</CodeText>
                                    に内容を記載する。
                                </li>
                                <li className="my-4">
                                    作成した
                                    <CodeText>docker-compose.yml</CodeText>
                                    のあるディレクトリまで移動して、以下のコマンドを実行する。
                                </li>
                                <CodeBlock
                                    language={"shell"}
                                >{`$ docker-compose up`}</CodeBlock>
                            </ul>
                            次のセクションから「3.作成した
                            <CodeText>docker-compose.yml</CodeText>
                            に内容を記載する」の具体的な書き方をまとめます。
                        </MainParagraph>
                    </section>
                    <section>
                        <MainHeading>docker-compose.ymlの書き方</MainHeading>
                        <MainParagraph>
                            めちゃくちゃ簡単ですがDocker
                            Composeファイルの中身は以下のように記載します。
                            <CodeBlock language={"yaml"} isLineNum={true}>
                                {`version: '3'
services:
    redis-server:
        image: 'redis'
    node-app:
        restart: on-failure:5
        build: ./
        ports:
            - "4001:8081"
        volumes: 
            - /app/node_modules
            - .:/app
    tests:
        build: ./
        volumes:
            - /app/nome_modules
            - .:/app
        command: ["npm", "run", "test"]`}
                            </CodeBlock>
                            以上の内容で、redisサーバーでデータ管理を行い、フロントエンドはNode.jsで作成されたWebサイトが作れます。（当たり前ですが、HTMLやJSのファイルなどは別途用意する必要があります。）
                            <br />
                            また、<CodeText>tests:</CodeText>
                            以降の記述はテストを自動実行するためのものです。（ただし、テスト用ファイルの更新に合わせて、テストの実施内容をリアルタイム更新をするためには、
                            <CodeText>docker-compose.yml</CodeText>
                            のあるディレクトリより下の何処かに
                            <CodeText>App.test.js</CodeText>
                            のようなテストに関連するファイルが必要です。）
                            <br />
                            このファイルを元に次から各行についてまとめます。
                            <MediumHeading>version</MediumHeading>
                            <MediumParagraph>
                                まずは<CodeText>version</CodeText>
                                です。この部分は定型文です。
                                <br />
                                コンテナの振る舞い自体に影響するものではないのではあまり重要ではないのですが、
                                <CodeText>docker-compose.yml</CodeText>
                                の構文のバージョンを指定するものです。
                                <br />
                                バージョン2を使うことも可能ですが、せっかくなので最新版のバージョン3を使いましょう。（バージョン1は非推奨のようです。）
                                <br />
                                バージョンの細かい説明や違いは
                                <LinkText href="https://docs.docker.jp/compose/compose-file/compose-versioning.html">
                                    こちら
                                </LinkText>
                                に書いてあるのでここを確認しましょう。
                                <br />
                                書き方としては以下のような感じになります。
                                <CodeBlock
                                    language={"yaml"}
                                >{`version: '3'`}</CodeBlock>
                            </MediumParagraph>
                            <MediumHeading>services</MediumHeading>
                            <MediumParagraph>
                                続いて<CodeText>services</CodeText>
                                です。これも定型文です。
                                <br />
                                この部分には、まとめて管理するコンテナの中身を記載します。
                                <br />
                                この<CodeText>services</CodeText>
                                より下に、階層構造でコンテナの振る舞いを詳細に書くことになりますので、次からは階層別でまとめます。
                            </MediumParagraph>
                            <MediumHeading>
                                一階層目（services &gt; 一階層目）
                            </MediumHeading>
                            <MediumParagraph>
                                一階層目はサンプルだと、
                                <CodeText>redis-server</CodeText>や
                                <CodeText>node-app</CodeText>
                                の部分にあたります。
                                <br />
                                この部分は、まとめて管理するコンテナの名前をつける部分なのですが、任意の名前を設定できます。
                                <br />
                                なのでプロジェクトで決められた規則がある場合はそれに沿った名前を、個人的な用途で使う場合は自分でわかりやすい名前を適当につけましょう。
                            </MediumParagraph>
                            <MediumHeading>
                                二階層目（services &gt; 一階層目 &gt; 二階層目）
                            </MediumHeading>
                            <MediumParagraph>
                                二階層目はサンプルだと、
                                <CodeText>image:</CodeText>や
                                <CodeText>build:</CodeText>、
                                <CodeText>ports:</CodeText>
                                の部分にあたります。
                                <br />
                                この部分でコンテナの具体的な設定を定義してきます。
                                <br />
                                文章でまとめると分かり辛いので、表にします。
                                <br />
                                <br />
                                <table class="mt-4 border-collapse border border-slate-500 ">
                                    <caption class="caption-top text-lg font-medium">
                                        【二階層目で指定できるオプション】
                                    </caption>
                                    <thead>
                                        <tr>
                                            <th class="border border-slate-600 p-2 text-center">
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
                                            <td class="border border-slate-700 p-4">
                                                起動するコンテナのイメージ名・IDを指定します。
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="border border-slate-700 px-8 text-center">
                                                build
                                            </td>
                                            <td class="border border-slate-700 p-4">
                                                実行したい
                                                <CodeText>Dockerfile</CodeText>
                                                のあるディレクトリを指定します。
                                                <br />
                                                また、
                                                <CodeText>Dockerfile</CodeText>
                                                が
                                                <CodeText>
                                                    docker-compose.yml
                                                </CodeText>
                                                と同じ階層にない場合や、ファイル名が
                                                <CodeText>Dockerfile</CodeText>
                                                以外のファイルでイメージを作成したい場合は以下のように書けば良いです。
                                                <CodeBlock language={"yaml"}>
                                                    {`build:
    context: ./ # Dockerfileのあるパスを指定
    dockerfile: Dockerfile.dev # Dockerfileのファイル名を指定`}
                                                </CodeBlock>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="border border-slate-700 px-8 text-center">
                                                ports
                                            </td>
                                            <td class="border border-slate-700 p-4">
                                                コンテナを起動する端末（ローカルPCなど）とのポートの対応を定義します。
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="border border-slate-700 px-8 text-center">
                                                restart
                                            </td>
                                            <td class="border border-slate-700 p-4">
                                                コンテナがクラッシュなどして停止した場合の再起動の設定です。こちらはいくつか選択肢があるので別で表にまとめます。
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="border border-slate-700 px-8 text-center">
                                                volumes
                                            </td>
                                            <td class="border border-slate-700 p-4">
                                                ローカルPCとコンテナのフォルダのマッピングを設定します。
                                                <br />
                                                <CodeText>
                                                    /app/node_modules
                                                </CodeText>
                                                は飽くまでサンプルなのですが、このように文の中に
                                                <CodeText>:/</CodeText>
                                                を含めない場合、コンテナ内の該当のフォルダはマウント対象から除外するという意味になります。
                                                一方、
                                                <CodeText>.:/app</CodeText>
                                                のように
                                                <CodeText>:/</CodeText>
                                                を含めた場合は、
                                                <CodeText>:/</CodeText>
                                                の左側にかかれているローカルPCのパスのフォルダが、
                                                <CodeText>:/</CodeText>
                                                の右側に書かれているコンテナ内のフォルダへマウントされます。
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="border border-slate-700 px-8 text-center">
                                                command
                                            </td>
                                            <td class="border border-slate-700 p-4">
                                                コンテナの起動時コマンドを設定します。
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table class="mt-12 border-collapse border border-slate-500">
                                    <caption class="caption-top text-lg font-medium">
                                        【restartで指定できるオプション】
                                    </caption>
                                    <thead>
                                        <tr>
                                            <th class="border border-slate-600 p-2 text-center">
                                                オプション
                                            </th>
                                            <th class="border border-slate-600">
                                                オプションの説明
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="border border-slate-700 px-8 text-center">
                                                &apos;no&apos;
                                            </td>
                                            <td class="border border-slate-700 p-4">
                                                再起動はしない設定です。デフォルトはこれになっています。
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="border border-slate-700 px-8 text-center">
                                                always
                                            </td>
                                            <td class="border border-slate-700 p-4">
                                                コンテナが停止すると常に再起動する設定です。
                                                <CodeText>Docker stop</CodeText>
                                                コマンドで停止できますが、Dockerデーモン（Docker
                                                Desktopなど）を再起動すると、この設定をしたコンテナも謎に勝手に起動されます。
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="border border-slate-700 px-8 text-center">
                                                on-failure
                                            </td>
                                            <td class="border border-slate-700 p-4">
                                                終了コードが
                                                <CodeText>0</CodeText>
                                                以外でコンテナが停止した場合、再起動する設定です。異常終了した場合、終了コードには
                                                <CodeText>0</CodeText>
                                                以外の何かしらの値が設定されるからですね。Dockerデーモン（Docker
                                                Desktopなど）を再起動してもコンテナは再起動されません。
                                                <br />
                                                <CodeText>
                                                    on-failure:5
                                                </CodeText>
                                                のように記載すると５回再起動をトライするようになります。
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="border border-slate-700 px-8 text-center">
                                                unless-stopped
                                            </td>
                                            <td class="border border-slate-700 p-4">
                                                手動で再起動した場合を除いて、コンテナを常に再起動する設定です。Dockerデーモン（Docker
                                                Desktopなど）を再起動してもコンテナは再起動されません。
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </MediumParagraph>
                        </MainParagraph>
                    </section>
                    <section>
                        <MainHeading>
                            DockerCompose関連のコマンド一覧
                        </MainHeading>
                        <MainParagraph>
                            前述の通り、ファイル（
                            <CodeText>docker-compose.yml</CodeText>
                            ）を作成しただけで終わりではなく、コンテナを実行するためのコマンドを打つ必要があります。
                            <br />
                            実行以外にも、DockerCompose用のコマンドがいくつかあるのでまとめます。
                            <CodeBlockTitle>
                                ▼docker-compose.ymlの内容を実行
                            </CodeBlockTitle>
                            <CodeBlock
                                language={"shell"}
                            >{`$ docker-compose up`}</CodeBlock>
                            <CodeText>docker-compose.yml</CodeText>
                            があるディレクトリまで移動してから実行しましょう。
                            <br />
                            イメージの作成と起動が同時に実行されます。
                            <CodeBlockTitle>
                                ▼docker-compose.ymlの内容をビルドして実行
                            </CodeBlockTitle>
                            <CodeBlock language={"shell"}>
                                {`$ docker-compose up --build`}
                            </CodeBlock>
                            一度<CodeText>docker-compose.yml</CodeText>
                            から作成したコンテナのソースコードを書き換えた場合は、普通の「停止」→「起動」では更新されません。
                            <br />
                            ビルドをし直す必要があるんですね。そんな時に使用します。
                            <CodeBlockTitle>
                                ▼docker-compose.ymlの内容をバックグランドで実行
                            </CodeBlockTitle>
                            <CodeBlock
                                language={"shell"}
                            >{`$ docker-compose up --d`}</CodeBlock>
                            普通に<CodeText>docker-compose up</CodeText>
                            を実行するとサーバのログが表示され、キーボードからコンソール入力はできなくなってしまいます。
                            <br />
                            ですが、このコマンドを使用するとコンテナがバックグランドで実行され、コンソールが開放されます。
                            <CodeBlockTitle>
                                ▼起動中のDockerComposeを停止
                            </CodeBlockTitle>
                            <CodeBlock
                                language={"shell"}
                            >{`$ docker-compose down`}</CodeBlock>
                            停止対象の
                            <CodeText>docker-compose.yml</CodeText>
                            があるディレクトリまで移動してから実行しましょう。
                        </MainParagraph>
                    </section>
                    <section>
                        <MainHeading>最後に</MainHeading>
                        <MainParagraph>
                            以上、個人的なメモも含みましたが、DockerComposeの作成方法について簡単でしたがまとめてみました。
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

export default DockerImage;
