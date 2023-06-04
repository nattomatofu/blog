import Layout from "@/components/Layout";
import Head from "next/head";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

const title = "UbuntuへのJenkinsインストール手順";
const updateDate = "2023/6/4";
const thumbnailImagePath = "/images/thumbnail/jenkins_thumbnail.png";
const metaDescription = "どうも、納豆大好きnattoです。仕事でJenkinsを使う機会があり、Ubuntuサーバ上にインストールしてみました。その時のインストール手順を備忘もかねてまとめます。";
const metaOgUrl = "https://www.nattomatofu.com/posts/jenkins-memo";
const metaOgType = "article";

const JenkinsMemo = () => {
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
                <div className="container mx-auto px-5 xl:px-52">
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
                            <div className="md:p-8">
                                最近お仕事でJenkinsを使う必要があり、JenkinsをUbuntuにインストールしてみたのでその時の手順をまとめます。
                                <br />
                                <br />
                            </div>
                            <div className="flex justify-center">
                                <div className="mb-8 border border-dashed border-neutral-900 p-4 align-middle md:w-1/2">
                                    <p className="mb-4 text-center text-xl">目次</p>
                                    <ul className="list-disc pl-6">
                                        <li className="pb-2">
                                            <a href="#id1">事前準備</a>
                                        </li>
                                        <li className="pb-2">
                                            <a href="#id2">サーバ上でのインストール</a>
                                        </li>
                                        <li className="pb-2">
                                            <a href="#id3">サーバ上でのインストール後の設定</a>
                                        </li>
                                        <li className="pb-2">
                                            <a href="#id4">最後に</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="md:p-8">
                                ちなみに今回使用したサーバ機やOS、Jenkins自体のバージョンは以下です。
                                <br />
                                <br />
                                <ul className="list-disc pl-6 md:pl-12">
                                    <li>サーバ機　:　AWS EC2 t2.micro</li>
                                    <li>OS　:　Ubuntu Server 22.05 LTS (HVM), SSD Volume Type</li>
                                    <li>Jenkins　:　バージョン2.401.1</li>
                                </ul>
                                <br />
                                <br />
                                まずはJenkinsをインストールする前に必要な事前準備です。
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
                            <h2 className="ml-2 text-xl" id="id1">
                                事前準備
                            </h2>
                        </div>
                        <div className="mt-8">
                            <div className="md:p-8">
                                事前準備というセクションを作りましたが、やる必要のある事前準備はただ一つ、
                                <br />
                                <br />
                                <span className="font-bold underline decoration-red-400 decoration-2">外部から8080番ポートでJenkinsへアクセスできるようにしておくことです。</span>
                                <br />
                                <br />
                                ファイアウォールを設定している場合はファイアウォールの設定を変更しましょう。
                                <br />
                                私はAWSのEC2を使っていたので、インストールするEC2が配置されているセキュリティグループのインバウンドルールで、8080番ポートを許可するように設定しました。
                                <br />
                                <br />
                                ただ、このポート番号は任意の番号に変更可能なのようなので、変更したい方は
                                <a href="https://mebee.info/2022/12/06/post-80923/" className="cursor-pointer text-blue-500 underline decoration-blue-500 hover:scale-105">
                                    こちらのサイト
                                </a>
                                を参考にして変更してみてください。公式ではありませんがとても分かりやすかったです。
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
                            <h2 className="ml-2 text-xl" id="id2">
                                サーバ上でのインストール
                            </h2>
                        </div>
                        <div className="mt-8 md:p-8">
                            <div>
                                続いていよいよJenkinsのインストールです。
                                <br />
                                <br />
                                JenkinsはJavaで動いているのでJenkins自体のインストール前に、
                                <span className="font-bold underline decoration-red-400 decoration-2">Javaをインストールする必要があります。</span>
                                <br />
                                <br />
                                Javaのインストールを含めたインストールコマンドは以下です。
                                <br />
                                <br />
                                <ul className="list-decimal space-y-6 px-6 md:my-6">
                                    <li>
                                        <span className="text-lg font-bold">Javaをインストール</span>
                                        <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                            {`// aptを最新化
$ sudo apt update
// Java(JDK)をインストール
$ sudo apt install openjdk-11-jre
// インストール出来ていることを確認
$ java -version`}
                                        </SyntaxHighlighter>
                                        最後のバージョン確認コマンドでJavaのバージョンが表示されれば大丈夫です。
                                        <br />
                                        （上記はOpenJDKのバージョン11をインストールしていますが
                                        <a href="https://www.jenkins.io/doc/administration/requirements/java/" className="cursor-pointer text-blue-500 underline decoration-blue-500 hover:scale-105">
                                            こちら
                                        </a>
                                        に書かれている通り、Jenkinsはバージョン17も対応しているようです。動作は確認していませんが、恐らくバージョン17でも可能です。）
                                    </li>
                                    <li>
                                        <span className="text-lg font-bold">Jenkinsをインストール</span>
                                        <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                            {`// Jenkinsをインストールするときに使用する公開鍵を取得
$ curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key | sudo tee \
/usr/share/keyrings/jenkins-keyring.asc > /dev/null
// インストールした公開鍵を使ってJenkinsのaptリポジトリを追加
$ echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
/etc/apt/sources.list.d/jenkins.list > /dev/null
// aptを最新化
$ sudo apt-get update
// Jenkinsをインストール
$ sudo apt-get install jenkins`}
                                        </SyntaxHighlighter>
                                        以上は
                                        <a href="https://www.jenkins.io/doc/book/installing/linux/#debianubuntu" className="cursor-pointer text-blue-500 underline decoration-blue-500 hover:scale-105">
                                            公式サイト
                                        </a>
                                        に書かれているままの手順ですが、何やら長いコマンドがあり、何をしているのか解釈するのに少し時間がかかりました笑。
                                    </li>
                                    <li>
                                        <span className="text-lg font-bold">Jenkinsの起動とステータス確認</span>
                                        <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                            {`// Jenkinsを開始
$ sudo systemctl start jenkins
// サーバ起動時にJenkinsを自動起動するように設定
$ sudo systemctl enable jenkins
// Jenkinsのステータスを確認
$ sudo systemctl status jenkins`}
                                        </SyntaxHighlighter>
                                        最後のステータス確認で、以下のように<span className="font-bold underline decoration-red-400 decoration-2">「active (running)」</span>
                                        と出力されていれば問題ありません。
                                        <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                            {`● jenkins.service - Jenkins Automation Server
   Loaded: loaded (/lib/systemd/system/jenkins.service; enabled; vendor preset: enabled)
   Active: active (running) since Mon 2023-06-05 10:30:15 UTC; 1 day  ago
     Docs: https://jenkins.io/doc/
 Main PID: 1287 (java)
    Tasks: 59 (limit: 2270)
   Memory: 1.2G
   CGroup: /system.slice/jenkins.service
           └─1287 /usr/bin/java -Djenkins.install.runSetupWizard=false -jar /usr/share/jenkins/jenkins.war`}
                                        </SyntaxHighlighter>
                                    </li>
                                </ul>
                                <p className="mt-8">サーバ上での操作は一旦以上です。 続いてブラウザから設定を行っていきます。</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
                            <h2 className="ml-2 text-xl" id="id3">
                                サーバ上でのインストール後の設定
                            </h2>
                        </div>
                        <div className="mt-8">
                            <div className="md:p-8">
                                サーバ上のCLIでインストール下だけではまだ使うことはできず、
                                <span className="font-bold underline decoration-red-400 decoration-2">ブラウザからも簡単な初期設定を行う必要があります。</span>
                                <br />
                                <br />
                                その手順を記載していきます。
                                <ul className="list-decimal space-y-6 px-6 md:my-6">
                                    <li>
                                        <span className="text-lg font-bold">Jenkinsへブラウザでアクセス</span>
                                        <br />
                                        Edgeやchromeなど適当なWebブラウザを開いて以下のアドレスをURL入力欄に入力して、アクセスします。（ポートを変更した場合は、ポート番号を変えてください）
                                        <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                            {`http://<サーバのIP or ドメイン>:8080`}
                                        </SyntaxHighlighter>
                                    </li>
                                    <li>
                                        <span className="text-lg font-bold">Jenkinsのロック解除</span>
                                        <br />
                                        ブラウザでアクセスすると初回ロック解除用のパスワード入力を求められます
                                        <img src="/images/jenkins-memo/Unlock_Jenkins.png" alt="Jenkinsロック解除画面" className="m-auto my-4 w-8/12" />
                                        Jenkinsサーバ上で以下のコマンドを実行して、表示されたパスワードを上の画面の赤枠に入力して「Continue」をクリックします。
                                        <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                            {`$ sudo cat /var/lib/jenkins/secrets/initialAdminPassword
xxxxxxxxxxxxxxxxxxxxxxxx　　←　　これを入力`}
                                        </SyntaxHighlighter>
                                    </li>
                                    <li>
                                        <span className="text-lg font-bold">インストールするプラグインの選択</span>
                                        <br />
                                        ロックを解除すると、プラグインのインストール画面が表示されます。
                                        <br />
                                        このタイミングで必要なプラグインをインストールしなくても、プラグインの追加インストールは後から可能なので、お好みで選択してください。
                                        <br />
                                        <br />
                                        私は一旦、推奨プラグインのみがインストールされる「Install suggested plugins」を選択しました。
                                        <br />
                                        （もちろん、使用するプラグインが既に分かっている場合であれば、「Select plugins to install」でも問題ありません。）
                                        <br />
                                        <img src="/images/jenkins-memo/Customize _Jenkins.png" alt="プラグインのインストール画面" className="m-auto my-4 w-8/12" />
                                        <br />
                                        どちらかを選択して先に進むと以下のようなインストール画面に移って、プラグインのインストールが行われます。
                                        <br />
                                        <br />
                                        <img src="/images/jenkins-memo/Customize _Jenkins_installing.png" alt="プラグインインストール中の画面" className="m-auto my-4 w-8/12" />
                                    </li>
                                    <li>
                                        <span className="text-lg font-bold">管理者ユーザの作成</span>
                                        <br />
                                        プラグインのインストールが完了すると、管理者ユーザを作成する画面が表示されるので、
                                        <br />
                                        <br />
                                        　・　ユーザ名
                                        <br />
                                        　・　パスワード
                                        <br />
                                        　・　名前
                                        <br />
                                        　・　メールアドレス
                                        <br />
                                        <br />
                                        を入力して「Save and Continue」をクリックします。
                                        <img src="/images/jenkins-memo/Create_First_Admin_User.png" alt="管理者ユーザ作成画面" className="m-auto my-4 w-8/12" />
                                    </li>
                                    <li>
                                        <span className="text-lg font-bold">Jenkinsへアクセスする際のURLを指定</span>
                                        <br />
                                        管理者ユーザ作成後、Jenkinsへアクセスする際のURL入力画面が表示されます。
                                        <br />
                                        既にドメインを持っていて登録するURLが決まっている方は、ドメインを入力して「Save and Finish」をクリックしてください。
                                        <br />
                                        <br />
                                        今回は簡単な動作確認の目的でJenkinsを立ち上げたので、私はデフォルトのままとしました。
                                        <br />
                                        <img src="/images/jenkins-memo/Instance_Configuration.png" alt="JenkinsのURL設定画面" className="m-auto my-4 w-8/12" />
                                        <br />
                                        「Save and Finish」をクリックした後、以下の「Jenkins is ready！」画面が表示されれば一通りの初期セットアップは完了です。
                                        <br />
                                        「Start using Jenkins」をクリックします。
                                        <br />
                                        <br />
                                        <img src="/images/jenkins-memo/Jenkins_is_ready.png" alt="セットアップ完了画面" className="m-auto my-4 w-8/12" />
                                        <br />
                                        すると、、
                                        <br />
                                        <br />
                                        <img src="/images/jenkins-memo/Jenkins_Home.png" alt="セットアップ完了画面" className="m-auto my-4 w-8/12" />
                                        <br />
                                        Jenkinsのホーム画面が表示されました！！
                                    </li>
                                </ul>
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
                                以上、JenkinsをUbuntu上にインストールする方法と初期セットアップについてでした。
                                <br />
                                <br />
                                昨今のシステム開発ではCI/CDを考慮した設計にすることはほぼ当たり前のような感じでもあるので、Jenkinsのようなサービスは使えるようになっておいて損はないかと思います。
                                <br />
                                <br />
                                Jenkins上でのビルドプロジェクトの作成やユーザ管理、外部リポジトリとの紐づけの方法については現在確認中なので気が向いたらまたまとめます！
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

export default JenkinsMemo;
