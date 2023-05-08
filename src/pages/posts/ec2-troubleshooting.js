import Head from "next/head";

const title = "AWSのEC2立ち上げからセッションマネージャーでアクセスするまでに出会ったエラー対処法";
const updateDate = "2023/5/8";
const thumbnailImagePath = "images/AWS_EC2_thumbnail.jpg";
const metaDescription =
    "Amazon EC2を立ち上げてからセッションマネージャーで接続するまでに遭遇したエラーの解消方法についてまとめます。私自身、一見簡単にできると思っていたのですが、ほんの少し苦戦したので記事としてまとめておきます。「既存の 参照先のグループ ID ルールに 1 つの IPv4 CIDR を指定することはできません。」「AWS EC2にセッションマネージャーで接続できない」";
const metaOgUrl = "https://www.nattomatofu.com/posts/ec2-troubleshooting";
const metaOgType = "article";

const Ec2TroubleShooting = () => {
    return (
        <>
            <Head>
                <meta content={metaDescription} name="description"></meta>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
                <meta name="robots" content="noindex,nofollow"></meta>
                <meta property="og:url" content={metaOgUrl} />
                <meta property="og:type" content={metaOgType} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:site_name" content={title} />
                <meta property="og:image" content={thumbnailImagePath} />
                <title>{title}</title>
            </Head>
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
                                <p className="mb-4 text-center text-xl">目次</p>
                                <ul className="list-disc pl-6">
                                    <li className="pb-2">
                                        <a href="#id1">「既存の参照先のグループ ID ルールに 1 つの IPv4 CIDR を指定することはできません。」のエラー対処法</a>
                                    </li>
                                    <li className="pb-2">
                                        <a href="#id2">AWS EC2にセッションマネージャーで接続できない場合の対処法</a>
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
                            「既存の参照先のグループ ID ルールに 1 つの IPv4 CIDR を指定することはできません。」のエラー対処法
                        </h2>
                    </div>
                    <div className="mt-8 md:p-8">
                        <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-0">エラーの内容</h3>
                        <p className="md:p-8">
                            最終的に確認したいのは、Nginxのサーバの挙動だったので、コンソール上でEC2を立ち上げた後、まずEC2インスタンスへ外部から HTTP / HTTPS
                            で接続できるようにインバウンドルールの設定を行いました。
                            <br />
                            <br />
                            すると、以下のようなエラーが、、
                            <br />
                            (下の画像はソースの部分を「0.0.0.0/0」からセキュリティグループへ変更しようとした際の画像ですが、セキュリティグループから「0.0.0.0/0」へ変更しようとしても同様のエラーが発生します。)
                            <br />
                            <br />
                            <img src={"/images/「既存の参照先のグループ ID ルールに 1 つの IPv4 CIDR を指定することはできません。」のエラー画面.png"} />
                            <br />
                            <br />
                            <span className="font-bold underline decoration-red-400 decoration-2">「既存の参照先のグループ ID ルールに 1 つの IPv4 CIDR を指定することはできません。」</span>
                            と表示されています。
                        </p>
                        <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-8">対処法</h3>
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
                            <img src={"/images/「既存の参照先のグループ ID ルールに 1 つの IPv4 CIDR を指定することはできません。」のエラー画面削除ボタン印付き.png"} />
                            <br />
                            <br />
                            AWSエンジニアの方からすると当たり前のことかもしれませんが、恥ずかしながら私はここで少々つまずきました、、
                        </p>
                    </div>
                </section>
                <section>
                    <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
                        <h2 className="ml-2 text-xl" id="id2">
                            AWS EC2にセッションマネージャーで接続できない場合の対処法
                        </h2>
                    </div>
                    <div className="mt-8 md:p-8">
                        <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-0">エラーの内容</h3>
                        <p className="md:p-8">
                            今回は個人的な動作確認だったので、公開鍵を使ったSSH接続ではなく、
                            AWSマネジメントコンソール上のセッションマネージャーでぱぱっと設定しようと思い、EC2のコンソールからセッションマネージャーを開きました。
                            <br />
                            <br />
                            すると、今度は以下のようなエラーが、、
                            <br />
                            <br />
                            <img src={"/images/インスタンスに接続できませんでしたエラー画面.png"} className="m-auto w-8/12" />
                            <br />
                            <br />
                            はい、
                            <br />
                            <br />
                            <span className="font-bold underline decoration-red-400 decoration-2">インスタンスに接続できませんでした。</span>
                            <br />
                            <br />
                            だそうです。。
                        </p>
                        <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-8">対処法</h3>
                        <p className="md:p-8">
                            こちらの原因はいくつかあるようですが、
                            セキュリティグループなど特に設定していない、作成したてのEC2インスタンスにコンソールからセッションマネージャーでアクセスする場合は、大体以下の2点を確認すると解決するのではないかと思います。
                            <br />
                            <br />
                            <ul className="ml-8 list-disc">
                                <li>EC2インスタンスにSSM Agentがインストールされているか</li>
                                <li>EC2インスタンスに「AmazonSSMManagedInstanceCore」のIAMポリシーがついているか</li>
                            </ul>
                            <br />
                            <br />
                            それぞれ詳しく見ていきます。
                            <br />
                            <br />
                            <br />
                            <span className="text-xl font-bold">【EC2インスタンスにSSM Agentがインストールされているか】</span>
                            <br />
                            <br />
                            まず前提として、以下のインスタンスについては、インスタンスを立ち上げた時点で既にインストールされているので、特に作業する必要はありません。（2023年4月時点）
                            <br />
                            <br />
                            参考 :{" "}
                            <a
                                href="https://docs.aws.amazon.com/ja_jp/systems-manager/latest/userguide/ami-preinstalled-agent.html"
                                className="cursor-pointer text-blue-500 underline decoration-blue-500 hover:scale-105"
                            >
                                SSM Agent がプリインストールされた Amazon Machine Images (AMIs)
                            </a>
                            <br />
                            <br />
                            <ul className="ml-8 list-disc">
                                <li>2017 年 9 月以降の Amazon Linux Base AMI</li>
                                <li>Amazon Linux 2</li>
                                <li>Amazon Linux 2 ECS に最適化されたベース AMIs</li>
                                <li>Amazon Linux 2023 (AL2023)</li>
                                <li>Amazon EKS 最適化 Amazon Linux AMIs</li>
                                <li>macOS 10.14.x (Mojave)、10.15.x (Catalina)、11.x (Big Sur)</li>
                                <li>SUSE Linux Enterprise Server(SLES) 12 と 15</li>
                                <li>Ubuntu Server 16.04、18.04、および 20.04</li>
                                <li>2016 年 11 月以降に公開された Windows Server 2008-2012 R2 AMIs</li>
                                <li>Windows Server 2016、2019、および 2022</li>
                            </ul>
                            <br />
                            <br />
                            色々あって少し混乱しそうですが、Amazon Linux系はほぼ全てにプリインストールされています。
                            <br />
                            UbuntuやWindowsは良く使われるものはプリインストールされていて、その他RedHat, Debianなどは自分でインストールしなければ、セッションマネージャーで接続はできないようです。
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
                                                    <h2 class="title-font mb-3 text-lg font-medium text-gray-900">Windowsの場合</h2>
                                                    <ul className="list-disc">
                                                        <li>
                                                            <a
                                                                href="https://docs.aws.amazon.com/ja_jp/systems-manager/latest/userguide/sysman-install-ssm-win.html"
                                                                className="cursor-pointer text-blue-500 underline decoration-blue-500 hover:scale-105"
                                                            >
                                                                Windows Server 用 EC2 インスタンスで SSM Agent を使用する
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="p-4 md:w-full">
                                            <div class="flex flex-col rounded-lg border-2 border-gray-200 border-opacity-50 p-8 sm:flex-row xl:mx-24">
                                                <div class="flex-grow">
                                                    <h2 class="title-font mb-3 text-lg font-medium text-gray-900">macOSの場合</h2>
                                                    <ul className="list-disc">
                                                        <li>
                                                            <a
                                                                href="https://docs.aws.amazon.com/ja_jp/systems-manager/latest/userguide/install-ssm-agent-macos.html"
                                                                className="cursor-pointer text-blue-500 underline decoration-blue-500 hover:scale-105"
                                                            >
                                                                macOS 用 EC2 インスタンスで SSM Agent を使用する
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="p-4 md:w-full">
                                            <div class="flex flex-col rounded-lg border-2 border-gray-200 border-opacity-50 p-8 sm:flex-row xl:mx-24">
                                                <div class="flex-grow">
                                                    <h2 class="title-font mb-3 text-lg font-medium text-gray-900">Ubuntuの場合</h2>
                                                    <ul className="list-disc">
                                                        <li>
                                                            <a
                                                                href="https://docs.aws.amazon.com/ja_jp/systems-manager/latest/userguide/agent-install-ubuntu.html"
                                                                className="cursor-pointer text-blue-500 underline decoration-blue-500 hover:scale-105"
                                                            >
                                                                Ubuntu Server インスタンスに SSM Agent を手動でインストールする
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="p-4 md:w-full">
                                            <div class="flex flex-col rounded-lg border-2 border-gray-200 border-opacity-50 p-8 sm:flex-row xl:mx-24">
                                                <div class="flex-grow">
                                                    <h2 class="title-font mb-3 text-lg font-medium text-gray-900">Red Hatの場合</h2>
                                                    <ul className="list-disc">
                                                        <li>
                                                            <a
                                                                href="https://docs.aws.amazon.com/ja_jp/systems-manager/latest/userguide/agent-install-rhel.html"
                                                                className="cursor-pointer text-blue-500 underline decoration-blue-500 hover:scale-105"
                                                            >
                                                                Red Hat Enterprise Linux インスタンスに SSM Agent を手動でインストールする
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="p-4 md:w-full">
                                            <div class="flex flex-col rounded-lg border-2 border-gray-200 border-opacity-50 p-8 sm:flex-row xl:mx-24">
                                                <div class="flex-grow">
                                                    <h2 class="title-font mb-3 text-lg font-medium text-gray-900">Debianの場合</h2>
                                                    <ul className="list-disc">
                                                        <li>
                                                            <a
                                                                href="https://docs.aws.amazon.com/ja_jp/systems-manager/latest/userguide/agent-install-deb.html"
                                                                className="cursor-pointer text-blue-500 underline decoration-blue-500 hover:scale-105"
                                                            >
                                                                Debian Server インスタンスに SSM Agent を手動でインストールする
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="p-4 md:w-full">
                                            <div class="flex flex-col rounded-lg border-2 border-gray-200 border-opacity-50 p-8 sm:flex-row xl:mx-24">
                                                <div class="flex-grow">
                                                    <h2 class="title-font mb-3 text-lg font-medium text-gray-900">その他の場合</h2>
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
                            <span className="text-xl font-bold">【EC2インスタンスに「AmazonSSMManagedInstanceCore」のIAMポリシーがついているか】</span>
                            <br />
                            <br />
                            こちらは恐らくどのOSを選択していたとしても必要になる作業だと思います。
                            <br />
                            <br />
                            確認ポイントの文章の通り、
                            <span className="font-bold underline decoration-red-400 decoration-2">「AmazonSSMManagedInstanceCore」のIAMポリシーをEC2インスタンスへアタッチすれば問題ない</span>
                            のですが、慣れていない人はその方法が分からないかもしれないので、簡単に手順を説明します。
                            <br />
                            <br />
                            ＜手順①＞　「AmazonSSMManagedInstanceCore」のIAMポリシーがアタッチされたIAMロールの作成
                            <br />
                            <br />
                            <ul className="ml-8 list-decimal">
                                <li>AWSマネジメントコンソールでIAMのコンソールへアクセスします。</li>
                                <li>アクセスした後、左メニューから「ロール」＞「ロールを作成」の順で選択します。</li>
                                <li>「信頼されたエンティティを選択」画面で、「AWSのサービス」にチェックを入れ、「ユースケース」で「EC2」にチェックを入れます。「次へ」を押下します。</li>
                                <li>
                                    「許可を追加」画面で、検索窓に「AmazonSSMManagedInstanceCore」と入力して表示された「AmazonSSMManagedInstanceCore」にチェックを入れ、「次へ」を押下します。（ここで選択したものがIAMポリシーです。）
                                </li>
                                <li>作成するロールの内容確認画面が表示されるので、任意のロール名を入力し、「ロールを作成」を押下します。</li>
                            </ul>
                            <br />
                            <br />
                            以下はロール作成時の最後の確認画面です。
                            <br />
                            <br />
                            <img src={"/images/ロール作成画面.png"} />
                            <br />
                            <br />
                            ＜手順②＞　作成したポリシーをEC2インスタンスへアタッチ
                            <br />
                            <br />
                            <ul className="ml-8 list-decimal">
                                <li>AWSマネジメントコンソールでEC2のコンソールへアクセスします。</li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </p>
                    </div>
                </section>
                <section>
                    <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
                        <h2 className="ml-2 text-xl" id="id2">
                            使った技術
                        </h2>
                    </div>
                    <div className="mt-8 md:p-8">
                        <p>このブログ作成には以下の技術やプログラミング言語を使っています。</p>
                        <div>
                            {/* <h3 className="my-2 font-bold underline decoration-dotted underline-offset-4">HTML</h3> */}
                            <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-16">HTML</h3>
                            <p className="pl-4">
                                おそらく皆さんご存じのHTML(HyperText Markup Language)です。
                                <br />
                                <br />
                                Webサイトを作るうえで基本中の基本の言語ということで使用しています。
                            </p>
                            <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-16">CSS(Tailwindcss)</h3>
                            <p className="pl-4">
                                HTMLで作成したコンテンツをデザインするための言語で「Cascading Style Sheets」の略だそうです。
                                <br />
                                <br />
                                今回はプレーンのCSSを使用するか、Bootstrapなどのフレームワークを使用するかで少し悩みましたが、
                                CSSの基本を理解したいという気持ちの上に楽もしたいという気持ちがあったので、 中間くらいに位置するTailwindcssを使用することにしました。
                            </p>
                            <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-16">JavaScript</h3>
                            <p className="pl-4">
                                HTML, CSSときたらJavaScriptですよね。フロントエンドではサイトのコンテンツに動きを付ける時などに使われます。
                                <br />
                                <br />
                                今回は静的なブログを作成するだけなのでJavaScriptはなくても作れるのですが、 以前から下記のReactというJavaScriptのフレームワークに興味があったので使ってみました。
                            </p>
                            <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-16">React</h3>
                            <p className="pl-4">
                                JavaScriptのフレームワークで、コンテンツをコンポーネントという単位でまとめて管理することができます。
                                <br />
                                <br />
                                ブログ程度の静的なサイトだとHTMLとCSSのみでも問題なく作ることができるのですが、前述の通りReactというものに以前から興味があったので、ページ自体や良く使うHTMLタグをコンポーネント化するために使用しました。
                            </p>
                            <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-16">Next.js</h3>
                            <p className="pl-4">
                                JavaScriptのフレームワークであるReactのさらにフレームワークであるNext.jsです。
                                <br />
                                <br />
                                Next.jsを使用することで難しい設定をしなくとも高速で快適なWebサイトを作ることが出来ます。
                                <br />
                                <br />
                                また、ルーティングで面倒な設定が不要なことも大きなメリットだと感じています。
                                <br />
                                <br />
                                Next.jsはReactについて調べている間に存在を知り、Reactを使うなら便利そうだ！使ってみよう！と思ったのがきっかけです。（Next.jsのSSG,
                                SSRの詳しい仕組みは現在勉強中です。。）
                            </p>
                            <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-16">Vercel</h3>
                            <p className="pl-4">
                                作成したサイト（今回だとブログ）を世に配信するためのサービスです。 Next.jsを開発している会社がVercelという名前で、社名と同名のサービスとなります。
                                <br />
                                <br />
                                Next.jsの開発会社が開発しているということもあってNext.jsとの相性は抜群だそうで、 Gitの更新をトリガーにしてビルド→デプロイの流れを自動で行ってくれます。
                            </p>
                        </div>
                        <p className="pt-8 md:mt-4">
                            本ブログで使った技術はざっと以上となります。
                            <br />
                            続いて、以上のプログラミング言語や技術をどのように勉強したかを書こうと思うのですが、その前にブログ制作を始める前の私のスキルについて簡単に触れようと思います。
                        </p>
                    </div>
                </section>
                <section>
                    <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
                        <h2 className="ml-2 text-xl" id="id3">
                            ブログ制作を始める前の自身のスキル
                        </h2>
                    </div>
                    <div className="mt-8">
                        <p className="md:p-8">
                            大学を卒業後、システムエンジニアや社内SEの職を3年ほど経験しましたが、 ぶっちゃけ業務ではバックエンド側を担当することがほとんどで、
                            <span className="font-bold underline decoration-red-400 decoration-2">上記のプログラミング言語はほぼ触れたことはない状態でした。</span>
                            <br />
                            <br />
                            ですので、このブログ制作を始める前はHTMLはもちろんCSS、JavaScriptにも触れたことはほとんどなく、どちらかというとPythonやSQL、基盤でいうとAWS等の知識しかありませんでした。
                            <br />
                            <br />
                            ただIT業界で働いていると、業務内で嫌でもITについての話題はでてくるので、
                            このブログを作るにあたって触れたことのない技術であっても、何となく聞いたことがあるなーという技術やサービス名はいくつかあったという感じです。
                            <br />
                            <br />
                            はい、要するにフロントエンド初心者ということですね笑。
                        </p>
                    </div>
                </section>
                <section>
                    <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
                        <h2 className="ml-2 text-xl" id="id4">
                            プログラミング言語などの学習方法
                        </h2>
                    </div>
                    <div className="mt-8">
                        <p className="md:p-8">
                            上記の通り、フロントエンドについてのスキルはほぼ皆無な私ですが、その状態からどんな過程で学習してこの記事を執筆するまでに至ったか、期間別でご紹介します。
                        </p>
                    </div>
                    <div className="md:pl-8">
                        <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-8">0～1ヶ月半程度 : HTML, CSSの勉強</h3>
                        <p className="pl-4">
                            始めの1か月半の学習はほぼ全てHTMLとCSSの習得にあてていました。
                            <br />
                            <br />
                            やはりWebサイトを作成する上で欠かせないプログラミング言語ですし、基本中の基本ということでじっくり時間を書けて勉強しました。
                            <br />
                            <br />
                            その甲斐あってか、3カ月前はHTMLとCSSを使って「Hello
                            World」と表示するだけのページでもどう作れば良いか思いつかなったのが、現在ではこのようにブログ程度の簡単なサイトであればある程度自由に編集できるようになっています。
                            <br />
                            <br />
                            ちなみにHTML, CSSに限らず、基本的に勉強はUdemyというオンライン学習サイトを使って勉強しています。
                        </p>
                        <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-16">1ヶ月半～2ヶ月 : JavaScriptの勉強</h3>
                        <p className="pl-4">
                            大体1ヶ月半～2ヶ月の半月ではJavaScriptを主に学習していました。
                            <br />
                            <br />
                            バックエンドで良く使われるプログラミング言語はある程度使える知識は持っていたので、JavaScriptの勉強はあまり時間がかからなかった印象です。
                            <br />
                            <br />
                            ただ、せっかく勉強するならある程度深い部分まで知っておきたいという思いがあったので、
                            同期処理/非同期処理の違いやProxyなどの少し難しめの内容も勉強していたこともあり、少し長めに時間を取りました。（現時点の当ブログではそれら技術は本当に全く使ってないんですけどね、、）
                        </p>
                        <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-16">2ヶ月～2ヶ月半 : Reactの勉強</h3>
                        <p className="pl-4">
                            ここに来てやっとですが、Reactの勉強を始めます。 実をいうと、ブログを作ろうと思ってまず初めにUdemyでReactの講座を受講したのですが、HTMLやCSSが全く分からず、
                            Reactの内容が全然頭に入ってこなかったので、HTML, CSSの勉強時間をまず初めに取り、このタイミングでReactの勉強を始めました。
                            <br />
                            <br />
                            約2カ月の地道な下積みの甲斐もあって、基本的なReactの仕組みの理解にはあまり時間はかからなかったと思っています。
                            <br />
                            <br />
                            ただ、コンポーネントを分ける単位や、コンポーネント間でデータを共有するuseContextやReduxをどの区切りで整理するのが良いのかは、実際にWeb制作を経験して学ぶ必要があるなーと思っています。
                        </p>
                        <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-16">2ヶ月半～3ヶ月 : Next.jsの勉強とブログ制作</h3>
                        <p className="pl-4">
                            ここでいきなりブログを作り始めます笑。Reactの勉強を始めた頃から早くブログを作りたい欲が高まっていたんですよね笑。
                            <br />
                            <br />
                            当初はプレーンのReactでブログ作成する予定だったのですが、
                            UdemyでReactの講座を見ていた時に、あわせてNext.jsというフレームワークの紹介があったので、そこでNext.jsを使うことに方向転換しました。
                            <br />
                            <br />
                            前に書いた通りNext.jsについては現在も勉強中であまり詳しくは理解できていないのですが、便利さ故にこの早さでブログを公開できています。 （
                            Next.jsを使ったブログの制作から公開まで一気に学ぶことが出来る講座がUdemyにあったからというのが早く作れた一番の理由です。はい。）
                        </p>
                    </div>
                    <p className="pt-8 md:mt-8 md:p-8">
                        ブログを作ろう！と思い立ってからこの記事を書くまでの経緯は以上のような感じでした。
                        <br />
                        <br />
                        せっかくなので私が受講したUdemyの講座をご紹介させていただきます。全てとても分かりやすい講座でした！
                    </p>
                    <section class="body-font text-gray-600">
                        <div class="container mx-auto flex flex-wrap px-5 py-6">
                            <div class="-m-4 flex flex-wrap">
                                <div class="p-4 md:w-full">
                                    <div class="flex flex-col rounded-lg border-2 border-gray-200 border-opacity-50 p-8 sm:flex-row xl:mx-24">
                                        <div class="flex-grow">
                                            <h2 class="title-font mb-3 text-lg font-medium text-gray-900">HTML/CSSの講座</h2>
                                            <ul className="list-disc">
                                                <li>
                                                    <a href="https://www.udemy.com/course/html5css3-b/" className="cursor-pointer text-blue-500 underline decoration-blue-500 hover:scale-105">
                                                        【最新2022】未経験からHTML、CSS をマスターして、WEBデザイナー・エンジニアを目指す　最高の実践コース
                                                    </a>
                                                </li>
                                                <li className="pt-2">
                                                    <a href="https://www.udemy.com/course/html-css-js/" className="cursor-pointer text-blue-500 underline decoration-blue-500 hover:scale-105">
                                                        ちゃんと学ぶ、HTML/CSS + JavaScript
                                                    </a>
                                                    （JavaScriptも含まれていますが、HTML/CSSの印象が強かったのでHTML/CSSに入れさせていただきました）
                                                </li>
                                                <li className="pt-2">
                                                    <a href="https://www.udemy.com/course/tailwindcss_beginner/" className="cursor-pointer text-blue-500 underline decoration-blue-500 hover:scale-105">
                                                        【tailwindcss】初心者向け講座・CSSが苦手な人向け 【わかりやすさ重視】【次世代のCSS】にじっくり取り組む
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-4 md:w-full">
                                    <div class="flex flex-col rounded-lg border-2 border-gray-200 border-opacity-50 p-8 sm:flex-row xl:mx-24">
                                        <div class="flex-grow">
                                            <h2 class="title-font mb-3 text-lg font-medium text-gray-900">JavaScriptの講座</h2>
                                            <ul className="list-disc">
                                                <li>
                                                    <a href="https://www.udemy.com/course/javascript-essence/" className="cursor-pointer text-blue-500 underline decoration-blue-500 hover:scale-105">
                                                        【JS】ガチで学びたい人のためのJavaScriptメカニズム
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-4 md:w-full">
                                    <div class="flex flex-col rounded-lg border-2 border-gray-200 border-opacity-50 p-8 sm:flex-row xl:mx-24">
                                        <div class="flex-grow">
                                            <h2 class="title-font mb-3 text-lg font-medium text-gray-900">Reactの講座</h2>
                                            <ul className="list-disc">
                                                <li>
                                                    <a href="https://www.udemy.com/course/react-complete-guide/" className="cursor-pointer text-blue-500 underline decoration-blue-500 hover:scale-105">
                                                        【2023年最新】React(v18)完全入門ガイド｜Hooks、Next.js、Redux、TypeScript
                                                    </a>
                                                </li>
                                                <li className="pt-2">
                                                    <a
                                                        href="https://www.udemy.com/course/modern_javascipt_react_beginner/"
                                                        className="cursor-pointer text-blue-500 underline decoration-blue-500 hover:scale-105"
                                                    >
                                                        モダンJavaScriptの基礎から始める挫折しないためのReact入門
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-4 md:w-full">
                                    <div class="flex flex-col rounded-lg border-2 border-gray-200 border-opacity-50 p-8 sm:flex-row xl:mx-24">
                                        <div class="flex-grow">
                                            <h2 class="title-font mb-3 text-lg font-medium text-gray-900">Next.jsの講座</h2>
                                            <ul className="list-disc">
                                                <li>
                                                    <a
                                                        href="https://www.udemy.com/course/nextjs-microblog-for-beginner/"
                                                        className="cursor-pointer text-blue-500 underline decoration-blue-500 hover:scale-105"
                                                    >
                                                        【Next.js入門】ReactフレームワークのNext.jsでマイクロブログを構築しながら基礎と本質を学ぶ講座
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section>
                    <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
                        <h2 className="ml-2 text-xl" id="id5">
                            今後の課題や実装したい機能
                        </h2>
                    </div>
                    <div className="mt-8">
                        <p className="md:p-8">
                            思っていたより早くブログを公開することはできたのですが、学習終盤で一気に作ったこともあり、現在のこのブログは見た目も中身もスッカスカです笑。
                            <br />
                            しかし今後もメンテナンスはしてきたいと思っているので、現時点で追加したと思っている機能や、課題について最後にまとめようと思います。
                        </p>
                    </div>
                    <div className="md:pl-8">
                        <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-8">ドメインの購入とサーバへの設定</h3>
                        <p className="pl-4">
                            いや、早くやれよって感じですよね笑。というかもはや、独自ドメインを設定せずにサイトを公開したと言えないのでは
                            、、という感じなのですが、一応固定のURLでサイトを公開でいているので、一旦良しとしています笑。
                            <br />
                            <br />
                            ただやはり、本格的に運用していくのであれば独自ドメインは設定した方が良いと思うので（愛着がわきますし、、）、まず初めにドメインを買って設定したいと思っています。
                        </p>
                        <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-16">良く使うもののコンポーネント化</h3>
                        <p className="pl-4">
                            良く使うHTMLタグなどその他コンポーネント化できそうな部分が現状まだまだあります。
                            <br />
                            <br />
                            見出しのデザインや目次のデザインなど、再利用して何度も使用するものは早めにコンポーネント化して修正したいときの負荷を減らさねばっ、、
                            <br />
                            と思っているのでこちらも早めに対応したいことの1つに挙がっています。
                        </p>
                        <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-16">GA(Google Analytics)の導入</h3>
                        <p className="pl-4">
                            ブログを作ったからにはやはりどのくらい見られているのかが気になりますよね。
                            <br />
                            GAを導入することで、ホームページの訪問者数や、訪問者がサイト上で行った操作をデータで可視化することができます。
                            <br />
                            <br />
                            このブログはまだまだ作ったばかりで、そんな機能があっても宝の持ち腐れ状態になる未来が見えるので急いではいないのですが、
                            いずれGAを導入して最低でも訪問者数の把握はできたらいいなーなんて思っています。
                        </p>
                        <h3 className="my-8 border-b border-dotted border-neutral-900 font-bold md:mb-8 md:mt-16">AWSへの移行</h3>
                        <p className="pl-4">
                            ここまであまり触れてこなかったのですが、私は仕事でAWSを使っていて割と多くのサービスに触れたことがあるので、EC2に立てたWebサーバにブログを移行して、更にCI/CDの設定も自作してみようかなーと思っています。
                            <br />
                            <br />
                            現状のVercelのサーバと比較すると運用の負荷は上がること間違いなしな気がしていますが、その分サーバ周りの勉強にもなるので、こちらもいずれチャレンジしたいです。
                        </p>
                    </div>
                    <p className="pt-8 md:mt-8  md:p-8">
                        現時点でパッと思いつく課題は以上のような感じです。
                        <br />
                        <br />
                        もっと記事やコンテンツが増えれば、ナビゲーションメニューとかも作ってみたいなーと思っているのですが、現状では作っても画面遷移させる先がないので一旦保留としてます。
                        <br />
                        それっぽいものでいうと、記事が増えてきたらジャンル（カテゴリ）別のメニューを作って、それぞれのジャンルの記事一覧にジャンプさせるとかですかね、、やるとしたらいつになるんだろう、、笑。
                    </p>
                </section>
                <section>
                    <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
                        <h2 className="ml-2 text-xl" id="id6">
                            最後に
                        </h2>
                    </div>
                    <div className="mt-8">
                        <p className="md:p-8">
                            以上、Next.jsでブログを作成したので、作るまでの学習や今後の課題についてまとめてみました。
                            <br />
                            <br />
                            まだまだ改善しなければならない点も沢山あるのですが、今後もメンテナンスを続けてこのブログを育てていくことができたらいいなと思っています！
                            <br />
                            また冒頭でも書いたのですが、ブログを作った一番の目的はフリーランスになった時のアピール材料にすることなので、
                            <span className="font-bold underline decoration-red-400 decoration-2">技術的な記事を沢山投稿していく予定です！</span>
                            <br />
                            <br />
                            【お礼】
                            <br />
                            まともに記事を書いてた経験が今回初めてということで、汚い文章で申し訳ありませんが、読んでくださった方がもしいたら本当にありがとうございました！
                            <br />
                            今後は技術的な記事をメインに投稿していく予定なので、もしよかったらまた訪れてみてください！
                            <br />
                            <br />
                            それでは！
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Ec2TroubleShooting;
