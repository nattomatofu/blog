import Layout from "@/components/Layout";
import Head from "next/head";

const title =
    "AWSのEC2立ち上げからセッションマネージャーでアクセスするまでに出会ったエラー対処法";
const updateDate = "2023/5/9";
const thumbnailImagePath = "images/thumbnail/AWS_EC2_thumbnail.jpg";
const metaDescription =
    "どうも、納豆大好きnattoです。Amazon EC2を立ち上げてからセッションマネージャーで接続するまでに遭遇したエラーの解消方法についてまとめます。私自身、一見簡単にできると思っていたのですが、ほんの少し苦戦したので記事としてまとめておきます。「既存の 参照先のグループ ID ルールに 1 つの IPv4 CIDR を指定することはできません。」「AWS EC2にセッションマネージャーで接続できない」";
const metaOgUrl = "https://www.nattomatofu.com/posts/ec2-troubleshooting";
const metaOgType = "article";

const Ec2TroubleShooting = () => {
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
                                つい先日、仕事でAWSのEC2を立ち上げる必要があり、AWSマネジメントコンソール上のセッションマネージャーで接続する方法を個人で簡単に確認していました。
                                <br />
                                <br />
                                EC2はこれまで何度か使用したことがあるので苦戦することなくできるだろうなーと思っていたのですが、意外と躓いた部分があったのでこの記事にまとめます。
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
                                                「既存の参照先のグループ ID
                                                ルールに 1 つの IPv4 CIDR
                                                を指定することはできません。」のエラー対処法
                                            </a>
                                        </li>
                                        <li className="pb-2">
                                            <a href="#id2">
                                                AWS
                                                EC2にセッションマネージャーで接続できない場合の対処法
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <p className="md:p-8">まず1つ目のエラーです。</p>
                        </div>
                    </section>
                    <section>
                        <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
                            <h2 className="ml-2 text-xl" id="id1">
                                「既存の参照先のグループ ID ルールに 1 つの IPv4
                                CIDR
                                を指定することはできません。」のエラー対処法
                            </h2>
                        </div>
                        <div className="mt-8 md:p-8">
                            <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-0">
                                エラーの内容
                            </h3>
                            <p className="md:p-8">
                                最終的に確認したいのは、Nginxのサーバの挙動だったので、コンソール上でEC2を立ち上げた後、まずEC2インスタンスへインターネットから
                                HTTP / HTTPS
                                で接続できるようにインバウンドルールの設定を行いました。
                                デフォルトのインバウンドルールでは、インスタンスのいるセキュリティグループからポート80番（HTTP）へのアクセスしか許可されていなかったため、
                                具体的には「0.0.0.0 /
                                0」からポート80番（HTTP）と443番（HTTPS）へアクセスできるように設定しようとしました。
                                <br />
                                <br />
                                すると、以下のようなエラーが、、
                                <br />
                                (下の画像はソースの部分を「0.0.0.0/0」からセキュリティグループへ変更しようとした際の画像ですが、セキュリティグループから「0.0.0.0/0」へ変更しようとしても同様のエラーが発生します。)
                                <br />
                                <br />
                                <img
                                    src={
                                        "/images/ec2-troubleshooting/「既存の参照先のグループ ID ルールに 1 つの IPv4 CIDR を指定することはできません。」のエラー画面.png"
                                    }
                                    alt="「既存の参照先のグループ ID ルールに 1 つの IPv4 CIDR を指定することはできません。」のエラー画面"
                                />
                                <br />
                                <br />
                                <span className="font-bold underline decoration-red-400 decoration-2">
                                    「既存の参照先のグループ ID ルールに 1 つの
                                    IPv4 CIDR を指定することはできません。」
                                </span>
                                と表示されています。
                            </p>
                            <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-8">
                                対処法
                            </h3>
                            <p className="md:p-8">
                                結論からいうと、
                                <span className="font-bold underline decoration-red-400 decoration-2">
                                    前に作成した（されていた）ルールを一度削除した後に改めて作成したいルールを作成することでこのエラーは解消されます。
                                </span>
                                <br />
                                <br />
                                具体的には、以下の画像の赤枠の部分を押下して既存のルールを削除した後、画面左下の「ルールを追加」ボタンを押下して作成したいルールを作成するといった感じです。
                                <br />
                                <br />
                                <img
                                    src={
                                        "/images/ec2-troubleshooting/「既存の参照先のグループ ID ルールに 1 つの IPv4 CIDR を指定することはできません。」のエラー画面削除ボタン印付き.png"
                                    }
                                    alt="「既存の参照先のグループ ID ルールに 1 つの IPv4 CIDR を指定することはできません。」のエラー画面削除ボタン印付き"
                                />
                                <br />
                                <br />
                                AWSエンジニアの方からすると当たり前のことかもしれませんが、恥ずかしながら私はここで少々つまずきました、、
                                <br />
                                <br />
                                続いて2つ目のエラーです。
                            </p>
                        </div>
                    </section>
                    <section>
                        <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
                            <h2 className="ml-2 text-xl" id="id2">
                                AWS
                                EC2にセッションマネージャーで接続できない場合の対処法
                            </h2>
                        </div>
                        <div className="mt-8 md:p-8">
                            <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-0">
                                エラーの内容
                            </h3>
                            <p className="md:p-8">
                                今回は個人的な動作確認だったので、公開鍵を使ったSSH接続ではなく、
                                AWSマネジメントコンソール上のセッションマネージャーでぱぱっと設定しようと思い、EC2のコンソールからセッションマネージャーを開きました。
                                <br />
                                <br />
                                すると、今度は以下のようなエラーが、、
                                <br />
                                <br />
                                <img
                                    src={
                                        "/images/ec2-troubleshooting/インスタンスに接続できませんでしたエラー画面.png"
                                    }
                                    className="m-auto md:w-8/12"
                                    alt="インスタンスに接続できませんでしたエラー画面"
                                />
                                <br />
                                <br />
                                はい、
                                <br />
                                <br />
                                <span className="font-bold underline decoration-red-400 decoration-2">
                                    インスタンスに接続できませんでした。
                                </span>
                                <br />
                                <br />
                                だそうです。。
                            </p>
                            <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-8">
                                対処法
                            </h3>
                            <p className="md:p-8">
                                こちらの原因はいくつかあるようですが、
                                セキュリティグループなど特に設定していない、作成したてのEC2インスタンスにコンソールからセッションマネージャーでアクセスする場合は、大体以下の2点を確認すると解決するのではないかと思います。
                                <br />
                                <br />
                                <ul className="ml-8 list-disc">
                                    <li>
                                        EC2インスタンスにSSM
                                        Agentがインストールされているか
                                    </li>
                                    <li>
                                        EC2インスタンスに「AmazonSSMManagedInstanceCore」のIAMポリシーがついているか
                                    </li>
                                </ul>
                                <br />
                                <br />
                                それぞれ詳しく見ていきます。
                                <br />
                                <br />
                                <br />
                                <span className="text-xl font-bold">
                                    【EC2インスタンスにSSM
                                    Agentがインストールされているか】
                                </span>
                                <br />
                                <br />
                                まず前提として、以下のインスタンスについては、インスタンスを立ち上げた時点で既にSSM
                                Agentはインストールされているので、特に作業する必要はありません。（2023年4月時点）
                                <br />
                                <br />
                                参考 :{" "}
                                <a
                                    href="https://docs.aws.amazon.com/ja_jp/systems-manager/latest/userguide/ami-preinstalled-agent.html"
                                    className="cursor-pointer text-blue-500 underline decoration-blue-500 hover:scale-105"
                                >
                                    SSM Agent がプリインストールされた Amazon
                                    Machine Images (AMIs)
                                </a>
                                <br />
                                <br />
                                <ul className="ml-8 list-disc">
                                    <li>
                                        2017 年 9 月以降の Amazon Linux Base AMI
                                    </li>
                                    <li>Amazon Linux 2</li>
                                    <li>
                                        Amazon Linux 2 ECS に最適化されたベース
                                        AMIs
                                    </li>
                                    <li>Amazon Linux 2023 (AL2023)</li>
                                    <li>Amazon EKS 最適化 Amazon Linux AMIs</li>
                                    <li>
                                        macOS 10.14.x (Mojave)、10.15.x
                                        (Catalina)、11.x (Big Sur)
                                    </li>
                                    <li>
                                        SUSE Linux Enterprise Server(SLES) 12 と
                                        15
                                    </li>
                                    <li>
                                        Ubuntu Server 16.04、18.04、および 20.04
                                    </li>
                                    <li>
                                        2016 年 11 月以降に公開された Windows
                                        Server 2008-2012 R2 AMIs
                                    </li>
                                    <li>
                                        Windows Server 2016、2019、および 2022
                                    </li>
                                </ul>
                                <br />
                                <br />
                                色々あって少し混乱しそうですが、Amazon
                                Linux系はほぼ全てにプリインストールされています。
                                <br />
                                UbuntuやWindowsは良く使われるものはプリインストールされていて、その他RedHat,
                                Debianなどは自分でインストールしなければ、セッションマネージャーで接続はできないようです。
                                <br />
                                <br />
                                私はAmazon Linux 2023
                                (AL2023)だったのでこちらは問題ありませんでしたが、もしプリインストールされていないインスタンスを使用されている方は以下のサイトを参考にインストールしてみてください。
                                <br />
                                <br />
                                <section class="body-font text-gray-600">
                                    <div class="container mx-auto flex flex-wrap px-5 py-6">
                                        <div class="-m-4 flex flex-wrap">
                                            <div class="p-4 md:w-full">
                                                <div class="flex flex-col rounded-lg border-2 border-gray-200 border-opacity-50 p-8 sm:flex-row xl:mx-24">
                                                    <div class="flex-grow">
                                                        <h2 class="title-font mb-3 text-lg font-medium text-gray-900">
                                                            Windowsの場合
                                                        </h2>
                                                        <ul className="list-disc">
                                                            <li>
                                                                <a
                                                                    href="https://docs.aws.amazon.com/ja_jp/systems-manager/latest/userguide/sysman-install-ssm-win.html"
                                                                    className="cursor-pointer text-blue-500 underline decoration-blue-500 hover:scale-105"
                                                                >
                                                                    Windows
                                                                    Server 用
                                                                    EC2
                                                                    インスタンスで
                                                                    SSM Agent
                                                                    を使用する
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="p-4 md:w-full">
                                                <div class="flex flex-col rounded-lg border-2 border-gray-200 border-opacity-50 p-8 sm:flex-row xl:mx-24">
                                                    <div class="flex-grow">
                                                        <h2 class="title-font mb-3 text-lg font-medium text-gray-900">
                                                            macOSの場合
                                                        </h2>
                                                        <ul className="list-disc">
                                                            <li>
                                                                <a
                                                                    href="https://docs.aws.amazon.com/ja_jp/systems-manager/latest/userguide/install-ssm-agent-macos.html"
                                                                    className="cursor-pointer text-blue-500 underline decoration-blue-500 hover:scale-105"
                                                                >
                                                                    macOS 用 EC2
                                                                    インスタンスで
                                                                    SSM Agent
                                                                    を使用する
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="p-4 md:w-full">
                                                <div class="flex flex-col rounded-lg border-2 border-gray-200 border-opacity-50 p-8 sm:flex-row xl:mx-24">
                                                    <div class="flex-grow">
                                                        <h2 class="title-font mb-3 text-lg font-medium text-gray-900">
                                                            Ubuntuの場合
                                                        </h2>
                                                        <ul className="list-disc">
                                                            <li>
                                                                <a
                                                                    href="https://docs.aws.amazon.com/ja_jp/systems-manager/latest/userguide/agent-install-ubuntu.html"
                                                                    className="cursor-pointer text-blue-500 underline decoration-blue-500 hover:scale-105"
                                                                >
                                                                    Ubuntu
                                                                    Server
                                                                    インスタンスに
                                                                    SSM Agent
                                                                    を手動でインストールする
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="p-4 md:w-full">
                                                <div class="flex flex-col rounded-lg border-2 border-gray-200 border-opacity-50 p-8 sm:flex-row xl:mx-24">
                                                    <div class="flex-grow">
                                                        <h2 class="title-font mb-3 text-lg font-medium text-gray-900">
                                                            Red Hatの場合
                                                        </h2>
                                                        <ul className="list-disc">
                                                            <li>
                                                                <a
                                                                    href="https://docs.aws.amazon.com/ja_jp/systems-manager/latest/userguide/agent-install-rhel.html"
                                                                    className="cursor-pointer text-blue-500 underline decoration-blue-500 hover:scale-105"
                                                                >
                                                                    Red Hat
                                                                    Enterprise
                                                                    Linux
                                                                    インスタンスに
                                                                    SSM Agent
                                                                    を手動でインストールする
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="p-4 md:w-full">
                                                <div class="flex flex-col rounded-lg border-2 border-gray-200 border-opacity-50 p-8 sm:flex-row xl:mx-24">
                                                    <div class="flex-grow">
                                                        <h2 class="title-font mb-3 text-lg font-medium text-gray-900">
                                                            Debianの場合
                                                        </h2>
                                                        <ul className="list-disc">
                                                            <li>
                                                                <a
                                                                    href="https://docs.aws.amazon.com/ja_jp/systems-manager/latest/userguide/agent-install-deb.html"
                                                                    className="cursor-pointer text-blue-500 underline decoration-blue-500 hover:scale-105"
                                                                >
                                                                    Debian
                                                                    Server
                                                                    インスタンスに
                                                                    SSM Agent
                                                                    を手動でインストールする
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="p-4 md:w-full">
                                                <div class="flex flex-col rounded-lg border-2 border-gray-200 border-opacity-50 p-8 sm:flex-row xl:mx-24">
                                                    <div class="flex-grow">
                                                        <h2 class="title-font mb-3 text-lg font-medium text-gray-900">
                                                            その他の場合
                                                        </h2>
                                                        <ul className="list-disc">
                                                            <li>
                                                                その他のインスタンスの場合は
                                                                <a
                                                                    href="https://docs.aws.amazon.com/ja_jp/systems-manager/latest/userguide/sysman-manual-agent-install.html"
                                                                    className="cursor-pointer text-blue-500 underline decoration-blue-500 hover:scale-105"
                                                                >
                                                                    こちら
                                                                </a>
                                                                のサイト下部のリンクが参考になります。
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <br />
                                <br />
                                続いて2つ目の確認ポイントです。
                                <br />
                                <br />
                                <br />
                                <span className="text-xl font-bold">
                                    【EC2インスタンスに「AmazonSSMManagedInstanceCore」のIAMポリシーがついているか】
                                </span>
                                <br />
                                <br />
                                こちらは恐らくどのOSを選択していたとしても必要になる作業だと思います。
                                <br />
                                <br />
                                確認ポイントの文章の通り、
                                <span className="font-bold underline decoration-red-400 decoration-2">
                                    「AmazonSSMManagedInstanceCore」のIAMポリシーをEC2インスタンスへアタッチすれば問題ない
                                </span>
                                のですが、慣れていない人はその方法が分からないかもしれないので、簡単に手順を説明します。
                                <br />
                                <br />
                                ＜手順①＞　「AmazonSSMManagedInstanceCore」のIAMポリシーがアタッチされたIAMロールの作成
                                <br />
                                <br />
                                <ul className="ml-8 list-decimal">
                                    <li>
                                        AWSマネジメントコンソールでIAMのコンソールへアクセスします。
                                    </li>
                                    <li>
                                        アクセスした後、左メニューから「ロール」＞「ロールを作成」の順で選択します。
                                    </li>
                                    <li>
                                        「信頼されたエンティティを選択」画面で、「AWSのサービス」にチェックを入れ、「ユースケース」で「EC2」にチェックを入れます。「次へ」を押下します。
                                    </li>
                                    <li>
                                        「許可を追加」画面で、検索窓に「AmazonSSMManagedInstanceCore」と入力して表示された「AmazonSSMManagedInstanceCore」にチェックを入れ、「次へ」を押下します。（ここで選択したものがIAMポリシーです。）
                                    </li>
                                    <li>
                                        作成するロールの内容確認画面が表示されるので、任意のロール名を入力し、「ロールを作成」を押下します。
                                    </li>
                                </ul>
                                <br />
                                <br />
                                以下はロール作成時の最後の確認画面です。
                                <br />
                                <br />
                                <img
                                    src={
                                        "/images/ec2-troubleshooting/ロール作成画面.png"
                                    }
                                    alt="ロール作成画面"
                                />
                                <br />
                                <br />
                                ＜手順②＞　作成したポリシーをEC2インスタンスへアタッチ
                                <br />
                                <br />
                                <ul className="ml-8 list-decimal">
                                    <li>
                                        AWSマネジメントコンソールでEC2のコンソールへアクセスし、対象のインスタンスにチェックを入れて「アクション▲」を押下します。
                                    </li>
                                    <li>
                                        「アクション▲」の下に表示されたメニューから「セキュリティ」＞「IAMロールを変更」の順で選択します。
                                    </li>
                                    <li>
                                        「IAMロールを選択」の部分をクリックし、先ほど作成したロールを選択して「IAMロールの更新」を押下します。
                                    </li>
                                    <li>
                                        <span className="font-bold underline decoration-red-400 decoration-2">
                                            ここでインスタンスを起動している場合はインスタンスを再起動してください。
                                        </span>
                                    </li>
                                </ul>
                                <br />
                                <br />
                                本当に簡単でしたが手順は以上です。
                                <br />
                                <br />
                                これで以下の画像のように、「接続」ボタンが活性化してコンソールから接続することができるようになっているかと思います。
                                <br />
                                <br />
                                <br />
                                <img
                                    src={
                                        "/images/ec2-troubleshooting/セッションマネージャーエラー解消後.png"
                                    }
                                    className="m-auto md:w-10/12"
                                    alt="セッションマネージャーエラー解消後"
                                />
                                <br />
                                <br />
                                <br />
                                <span className="font-bold underline decoration-red-400 decoration-2">
                                    手順②の最後のインスタンスの再起動は意外と忘れがちなので、忘れないように再起動しましょう。
                                </span>
                            </p>
                        </div>
                    </section>
                    <section>
                        <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
                            <h2 className="ml-2 text-xl" id="id2">
                                最後に
                            </h2>
                        </div>
                        <div className="mt-8">
                            <p className="md:p-8">
                                以上、私がEC2を立ち上げてからセッションマネージャーで接続するまでに出会ったエラーの内容と対処法でした。
                                <br />
                                <br />
                                業務で使用したことのあるAWSサービスはフルマネージドサービス（Lambda、Glueなど）が多かったこともあり、上記のようなエラーで少し躓きましたが、
                                <br />
                                特にIAMポリシーの付与のし忘れは、これまでに何回かやらかした記憶があるので、頭に叩き込む目的でも今回記事としてまとめてみたという感じです笑。
                                <br />
                                <br />
                                この記事がどなたかの助けになれば幸いです！
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

export default Ec2TroubleShooting;
