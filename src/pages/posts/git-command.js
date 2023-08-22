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
                            <p className="mb-8 md:p-8">
                                今更ですが、Gitについて最近学び直しているので備忘メモとして簡単にまとめます。
                                雑ですがコマンド以外のメモも残します。
                            </p>
                            <div className="flex justify-center">
                                <div className="mb-8 border border-dashed border-neutral-900 p-4 align-middle md:w-1/2">
                                    <p className="mb-4 text-center text-xl">目次</p>
                                    <ul className="list-disc pl-6">
                                        <li className="pb-2">
                                            <a href="#id1">Gitコマンドまとめ</a>
                                        </li>
                                        <li className="pb-2">
                                            <a href="#id2">コンフリクトが起きた場合の対処法</a>
                                        </li>
                                        <li className="pb-2">
                                            <a href="#id3">その他メモ</a>
                                        </li>
                                        <li className="pb-2">
                                            <a href="#id4">最後に</a>
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
                                <p className="mt-4 font-bold">▼ワークツリーの変更をステージへ追加（＝ステージにインデックスを作成）</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git add <ファイル名>`}
                                </SyntaxHighlighter>
                                <p className="mt-4 font-bold">▼現在のファイル変更状況を確認</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git status`}
                                </SyntaxHighlighter>
                                ワークツリーとステージの差分は赤色の文字で、ステージとローカルリポジトリの差分は緑色の文字で表示されます。
                                <p className="mt-4 font-bold">▼ワークツリーとステージの変更差分を確認</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git diff`}
                                </SyntaxHighlighter>
                                ステージとローカルリポジトリの変更差分を確認する場合は、以下のコマンドを使用します。
                                <p className="mt-4 font-bold">▼ステージとローカルリポジトリの変更差分を確認</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git diff --staged`}
                                </SyntaxHighlighter>
                                <p className="mt-4 font-bold">▼変更（コミット）履歴を確認</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git log`}
                                </SyntaxHighlighter>
                                <p className="mt-4 font-bold">▼変更（コミット）履歴を一行ずつで確認</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git log --oneline`}
                                </SyntaxHighlighter>
                                <p className="mt-4 font-bold">▼変更（コミット）履歴の変更差分のみを確認</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git log -p`}
                                </SyntaxHighlighter>
                                「-p」の後ろにスペースを開けて、ファイル名を追加することで特定のファイルに絞って確認することができます。
                                <p className="mt-4 font-bold">▼変更（コミット）履歴を表示数を制限して確認</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git log -n コミット数`}
                                </SyntaxHighlighter>
                                <p className="mt-4 font-bold">▼ワークツリーとローカルリポジトリの両方からファイル（またはディレクトリ）を削除</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git rm ファイル名（またはディレクトリ名）`}
                                </SyntaxHighlighter>
                                <p className="mt-4 font-bold">▼ローカルリポジトリからのみファイル（またはディレクトリ）を削除</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git rm --cached ファイル名（またはディレクトリ名）`}
                                </SyntaxHighlighter>
                                <p className="mt-4 font-bold">▼ファイルを移動（またはリネーム）</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git mv 旧ファイル名 新ファイル名`}
                                </SyntaxHighlighter>
                                上のmvコマンドを実行すると、ワークツリーだけでなくステージにも変更が反映された状態になります。すなわち、変更後git addした状態になるということです。 <br />
                                ディレクトリを移動する場合は、ファイル名の部分にディレクトリパスを入力すれば可能です。
                                <p className="mt-4 font-bold">▼ローカルPCのディレクトリをリモートリポジトリへ登録</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git remote add origin リモートリポジトリのURL`}
                                </SyntaxHighlighter>
                                「git remote add」の部分でリモートリポジトリを登録して、その後の「origin」で今後使用するリモートリポジトリの省略名を設定します。<br />
                                また、使う機会はあまりないかもしれませんが、複数のリモートリポジトリを設定することもできます。
                                <p className="mt-4 font-bold">▼リモートリポジトリに変更を反映</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git push リモート名 ブランチ名`}
                                </SyntaxHighlighter>
                                リモート名は「origin」が一般的かと思います。
                                <p className="mt-4 font-bold">▼Gitコマンドにエイリアスを登録</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git config --global alias.エイリアス名 エイリアス登録するコマンド`}
                                </SyntaxHighlighter>
                                例としては、「git config --global alias.co commit」のような感じです。<br />
                                「--global」をつけた場合は、ホームディレクトリ配下の「~/.gitconfig」ファイルに設定が反映されます。<br />
                                「--global」をつけない場合は、コマンドを実行した際にいるプロジェクトの「.git/config」ファイルに設定が反映されます。
                                <p className="mt-4 font-bold">▼ワークツリーの変更を取り消す（＝ステージの状態に戻す）</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git checkout -- ファイル名（またはディレクトリ名）`}
                                </SyntaxHighlighter>                                
                                「checkout」コマンドはブランチを切り替える時にも使用しますが、ブランチの切り替えなのか、ファイルの変更取り消しなのかを区別するために「--」がついています。<br />
                                また、前回のaddコマンド実行時からの全ファイルの変更を取り消したい場合は、「git checkout -- .」のコマンドで取り消すことができます。
                                <p className="mt-4 font-bold">▼ステージに追加した変更を取り消す（＝最新のコミットの状態に戻す）</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git reset HEAD ファイル名（またはディレクトリ名）`}
                                </SyntaxHighlighter>
                                「git reset HEAD .」とすると、全ファイルの変更が前回のコミットの状態に戻ります。<br />
                                また、このコマンドのみではワークツリーの変更は元に戻らないので注意が必要です。<br />
                                ワークツリーも元に戻したい場合は、このresetコマンドを実行した後、前述のcheckoutコマンドを実行しましょう。
                                <p className="mt-4 font-bold">▼直前のコミットをやり直す</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git commit --amend`}
                                </SyntaxHighlighter>
                                最新のステージの状態で最新のコミットをやり直します。<br />
                                一点注意点があり、リモートリポジトリへ既にプッシュしてしまった変更は取り消さないようにしましょう。他の人の余計な混乱を招く可能性があります。<br />
                                既にリモートへプッシュしてしまった後に変更したい場合は、新しいコミットを作成してプッシュし直しましょう。
                                <p className="mt-4 font-bold">▼リモートリポジトリの情報を表示</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git remote`}
                                </SyntaxHighlighter>
                                「git remote -v」と入力するとより詳細な情報を確認することができます。
                                <p className="mt-4 font-bold">▼リモートリポジトリのより詳細な情報を表示</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git remote show リモート名`}
                                </SyntaxHighlighter>
                                リモート名は「origin」などが入ります。
                                <p className="mt-4 font-bold">▼リモートの情報を変更</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git remote rename 旧リモート名 新リモート名`}
                                </SyntaxHighlighter>
                                <p className="mt-4 font-bold">▼リモートの情報を削除</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git remote rm 旧リモート名 新リモート名`}
                                </SyntaxHighlighter>
                                当たり前ですが、ロケールのリポジトリから指定したリモートリポジトリの情報が削除されるだけで、リモートリポジトリが削除されるわけではありません。
                                <p className="mt-4 font-bold">▼リモートの情報を変更・削除</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git remote rename 旧リモート名 新リモート名`}
                                </SyntaxHighlighter>
                                <p className="mt-4 font-bold">▼リモートから情報を取得</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git fetch リモート名`}
                                </SyntaxHighlighter>
                                リモート名は「origin」などとなります。<br />
                                このコマンドでローカルリポジトリへリモートのブランチとコミットの情報が取得されますが、ワークツリーへは反映されないことに注意してください。<br />
                                ワークツリーに取り込む場合は以下のコマンドを実行しましょう。
                                <p className="mt-4 font-bold">▼別ブランチの変更を現在のワークツリーへ反映する</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git merge ブランチ名`}
                                </SyntaxHighlighter>
                                マージ先のブランチはコマンド実行時にチェックアウトしているブランチとなります。<br />
                                ブランチ名を「origin/main」のようにすることで、前述のfetchコマンドで取ってきた情報を現在のワークツリーへ反映することができます。<br />
                                「origin」をつけずにブランチ名だけ（featureなど）を指定すると、そのローカルのブランチの内容をマージすることができます。<br />
                                また、マージ先ブランチの最新コミット履歴にマージされた側のコミット履歴が追加され、マージ先ブランチの最新コミットが新たに作られ更新されます。（例：masterにfeatureを取り込んだ場合、masterの最新コミット履歴にfeatureの最新コミット履歴が追加され、masterの最新コミットはfeatureでコミットしたものとなる。）
                                <p className="mt-4 font-bold">▼リモートからデータを取得してマージ</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git pull リモート名 ブランチ名`}
                                </SyntaxHighlighter>
                                pullコマンドは、fecth → mergeの順番でコマンドを実行した場合と同じ挙動となります。<br />
                                マージ先のブランチはコマンド実行時にチェックアウトしているブランチになる点に注意しましょう。
                                <p className="mt-4 font-bold">▼リモートからデータを取得してリベース</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git pull --rebase リモート名 ブランチ名`}
                                </SyntaxHighlighter>
                                rebaseで取り込むことで、マージコミットがコミット履歴に残らないようになります。
                                シンプルにローカルブランチを最新に更新したい時に使用しましょう。
                                <p className="mt-4 font-bold">▼ローカルのブランチ一覧を表示</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git branch`}
                                </SyntaxHighlighter>
                                「-a」オプションを付けることによって、リモートのブランチもすべて表示されます。
                                <p className="mt-4 font-bold">▼ローカルにブランチを新規作成</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git branch ブランチ名`}
                                </SyntaxHighlighter>
                                <p className="mt-4 font-bold">▼リモートブランチからローカルブランチを新規作成</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git branch ブランチ名 リモートブランチ名`}
                                </SyntaxHighlighter>
                                例としては「git branch feature origin/feature」のような感じです。
                                <p className="mt-4 font-bold">▼ブランチ名を変更</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git branch -m 新ブランチ名`}
                                </SyntaxHighlighter>
                                コマンド実行時にチェックアウトしているブランチの名前が変更されます。
                                <p className="mt-4 font-bold">▼ブランチを削除</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git branch -d ブランチ名`}
                                </SyntaxHighlighter>
                                masterにマージされていない変更が残っている場合は警告が出て削除はされません。
                                「-d」の部分を「-D」に変更することで、警告を無視して強制削除できます。
                                <p className="mt-4 font-bold">▼ブランチを切り替え</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git checkout ブランチ名`}
                                </SyntaxHighlighter>
                                「git checkout -b ブランチ名」のように「-b」オプションを付けることで、ブランチの作成と切り替えを同時に行うことができます。
                                <p className="mt-4 font-bold">▼リモートブランチからローカルブランチを作成して切り替え</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git checkout -b 作成するローカルブランチ名 リモートブランチ名`}
                                </SyntaxHighlighter>
                                「git checkout -b feature origin/feature」のような感じです。
                                <p className="mt-4 font-bold">▼ブランチの履歴（親コミット）を更新する</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git rebase ブランチ名`}
                                </SyntaxHighlighter>
                                コマンド実行時にチェックアウトしているブランチの履歴（親コミット）を更新します。<br />
                                featureブランチで作業をしている途中に、最新のmasterブランチの内容を取り込みたい場合などで使用します。<br />
                                もちろん、masterへfeatureを取り込むことの可能です。<br />
                                <span className="font-bold underline decoration-red-400 decoration-2">一点、一度リモートへプッシュしたコミットが最新の状態ではrebaseコマンドは実行しないようにしましょう。</span><br />
                                <span className="font-bold underline decoration-red-400 decoration-2">リモートリポジトリとのコミット履歴の整合性が合わず、プッシュできなくなります。</span>
                                <p className="mt-4 font-bold">▼過去のコミットを修正する・まとめる</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git rebase -i HEAD~数字`}
                                </SyntaxHighlighter>
                                このコマンドは実行後のステップが他のコマンドより少し複雑ですが、<a href="https://qiita.com/yuya_yuzen/items/274b8e9cde840492d7e8" className="cursor-pointer text-blue-500 underline decoration-blue-500 hover:scale-105">こちら</a>の記事がわかりやすくまとめられていました。
                                <p className="mt-4 font-bold">▼タグを作成する</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git tag タグ名`}
                                </SyntaxHighlighter>
                                コマンド実行時にチェックアウトしているブランチの最新コミットにタグ付けされます。
                                <p className="mt-4 font-bold">▼既存のコミットにタグを作成する</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git tag タグ名 コミットID`}
                                </SyntaxHighlighter>
                                <p className="mt-4 font-bold">▼注釈付きタグを作成する</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git tag -a タグ名 -m "タグの説明"`}
                                </SyntaxHighlighter>
                                こちらもコマンド実行時にチェックアウトしているブランチの最新コミットにタグ付けされます。
                                <p className="mt-4 font-bold">▼既存のコミットに注釈付きタグを作成する</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git tag -a タグ名 -m "タグの説明" コミットID`}
                                </SyntaxHighlighter>
                                <p className="mt-4 font-bold">▼タグの一覧を表示する</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git tag`}
                                </SyntaxHighlighter>
                                上記コマンドの後ろに「-l 文字列」とオブションを追加することで、指定した文字列で始まるタグのみを表示することができます。
                                <p className="mt-4 font-bold">▼タグの詳細を表示する</p>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`$ git show タグ名`}
                                </SyntaxHighlighter>
                                <br />
                                <br />
                                コマンドは他にも沢山ありますが、以上です。
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
                            <h2 className="ml-2 text-xl" id="id2">
                                コンフリクトが起きた場合の対処法
                            </h2>
                        </div>
                        <div className="mt-8 md:p-8">
                            いつまで経ってもコンフリクトが起きるとテンパるので、解消手順をまとめます。
                            <ul className="list-decimal md:p-8 list-inside">
                                <li className="my-4">「git status」コマンドでコンフリクトが起きているファイルを特定する。（「both modified」と表示されているファイルがコンフリクトが起きているファイル）</li>
                                <li className="my-4">任意のテキストエディタで、コンフリクトが起きているファイルを開く。</li>
                                <li className="my-4">不要な行は削除して、最終的にしたい形にファイルを変更する。</li>
                                <li className="my-4">以下の行を削除する。</li>
                                <SyntaxHighlighter language="shell" style={vscDarkPlus} showLineNumbers={false}>
                                    {`<<<<<<< HEAD
=======
>>>>>>> feature`}
                                </SyntaxHighlighter>
                                <li className="my-4">ファイルを保存し、「git add」、「git commit」を実行する。</li>
                            </ul>
                            以上です。これで安心です。
                        </div>
                    </section>
                    <section>
                        <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
                            <h2 className="ml-2 text-xl" id="id2">
                                mergeとrebaseの使い分け
                            </h2>
                        </div>
                        <div className="mt-8">
                            <ul className="list-disc md:p-8 list-inside">
                                <li className="my-4">merge　→　リモートへプッシュした後に取り込む場合。</li>
                                <li className="my-4">rebase　→　リモートへプッシュしておらずローカルの履歴を整理したい場合。</li>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
                            <h2 className="ml-2 text-xl" id="id2">
                                その他メモ
                            </h2>
                        </div>
                        <div className="mt-8">
                            <ul className="list-disc md:p-8 list-inside">
                                <li className="my-4">ブランチは飽くまで、最新のコミットがどれかを指し示すポインタである。</li>
                                <li className="my-4">「HEAD」はその時点でチェックアウトしているポインタ（ブランチ）を指し示すものである。（featureにチェックアウトしている場合は、featureを示すことになる）</li>
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
                                以上、Gitのコマンドについて簡単でしたがまとめてみました。
                                <br />
                                <br />
                                何度も打っているはずのコマンドですが、多くのコマンドが頭の中に保存されず抜けていってしまいます笑。
                                <br />
                                こんなの知ってるよ！という内容だったかと思いますが、以上、どなたかの役にたてば幸いです！
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
