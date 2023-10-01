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
import UnderLineBoldText from "@/components/UnderLineBoldText";

const title = "Pythonについての個人的なメモ";
const updateDate = "2023/9/26";
const thumbnailImagePath = "/images/thumbnail/python_logo.webp";
const metaDescription =
    "どうも、納豆大好きnattoです。仕事でよくPythonを使うので、最近は改めてPythonを勉強し直しています。その中で個人的に勉強になったことやカンペとして残しておきたいことをまとめます。";
const metaOgUrl = "https://www.nattomatofu.com/posts/python-memo";
const metaOgType = "article";

const PythonMemo = () => {
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
                                仕事でよくPythonを使うので、最近改めてPythonを勉強し直しています。
                                <br />
                                その中で個人的に勉強になったことや、カンペとして残しておきたいことをまとめます。
                                <br />
                                めちゃくちゃ初歩的な内容も多いです笑
                            </PrefaceText>
                            <TableOfContents />
                        </Preface>
                    </section>
                    <section>
                        <MainHeading>便利な関数</MainHeading>
                        <MainParagraph>
                            メモとして残しておきたい関数を列挙します。
                            <MediumHeading>input関数</MediumHeading>
                            <MediumParagraph>
                                以下のように使用します。
                                <CodeBlock language={"python"} isLineNum={true}>
                                    {`input("何か入力してください。")`}
                                </CodeBlock>
                                このように入力することで、input()の中に記載した文字が表示された後にユーザーからの入力を受け付けます。
                                <br />
                                <UnderLineBoldText>
                                    戻り値の方はStringです。
                                </UnderLineBoldText>
                                <br />
                                ちなみに、print関数と以下のような組み合わせ方も可能です。
                                <CodeBlock language={"python"} isLineNum={true}>
                                    {`print("こんにちは、" + input("名前を入力してください"))`}
                                </CodeBlock>
                                この書き方で、まずはユーザーに名前を入力させてその後に「こんにちは、〇〇〇〇」と表示することができます。
                            </MediumParagraph>
                            <MediumHeading>len関数</MediumHeading>
                            <MediumParagraph>
                                以下のように使用することで引数に渡した文字列や配列の長さを取得できます。
                                <CodeBlock language={"python"} isLineNum={true}>
                                    {`len(任意の文字列や配列)`}
                                </CodeBlock>
                                <UnderLineBoldText>
                                    文字列も配列も0から数えた長さではなく、1から数えた長さの数値が返されることに注意しましょう。
                                </UnderLineBoldText>
                            </MediumParagraph>
                            <MediumHeading>type関数</MediumHeading>
                            <MediumParagraph>
                                以下のように使用することで引数に渡した変数の方を確認できます。
                                <CodeBlock language={"python"} isLineNum={true}>
                                    {`type(変数)`}
                                </CodeBlock>
                            </MediumParagraph>
                            <MediumHeading>
                                int関数, round関数, format関数
                            </MediumHeading>
                            <MediumParagraph>
                                引数に渡した変数をint型へ変換します。
                                <br />
                                <CodeBlock language={"python"} isLineNum={true}>
                                    {`int(変数)`}
                                </CodeBlock>
                                <UnderLineBoldText>
                                    このint関数でfloatからintへ変換した場合、小数点以下は全て切り捨てられます。
                                    <br />
                                    四捨五入したい場合は以下のようにround関数を使用しましょう。
                                </UnderLineBoldText>
                                <CodeBlock language={"python"} isLineNum={true}>
                                    {`round(変数)`}
                                </CodeBlock>
                                また、round関数では小数点何桁まで値を保持したいかを、以下のように引数で指定することができます。
                                <CodeBlock language={"python"} isLineNum={true}>
                                    {`float_num = 1.2345
round_num = round(float_num, 2) # →　二桁目まで残す
print(round_num) # →　1.23と表示される`}
                                </CodeBlock>
                                桁数の指定でいうと、format関数を使用しても桁数を指定できます。
                                <br />
                                <UnderLineBoldText>
                                    便利なことにこのformat関数もround関数と同じように、表示しない桁で勝手に四捨五入してくれます。
                                </UnderLineBoldText>
                                <CodeBlock language={"python"} isLineNum={true}>
                                    {`float_num = 1.2345
format_num = "{:.2f}".format(float_num) # →　二桁目まで残す
print(format_num) # →　1.23と表示される`}
                                </CodeBlock>
                            </MediumParagraph>
                            <MediumHeading>lower関数</MediumHeading>
                            <MediumParagraph>
                                大文字を含む文字列を全て小文字に変換します。
                                <CodeBlock language={"python"} isLineNum={true}>
                                    {` 文字列.lower() # ABC → abc へ変換など`}
                                </CodeBlock>
                            </MediumParagraph>
                            <MediumHeading>count関数</MediumHeading>
                            <MediumParagraph>
                                文字列の中に含まれる特定の文字の数を返します。
                                <CodeBlock language={"python"} isLineNum={true}>
                                    {` 文字列.count("a") # 文字列に含まれる「a」の数をを返す`}
                                </CodeBlock>
                            </MediumParagraph>
                            <MediumHeading>random.random関数</MediumHeading>
                            <MediumParagraph>
                                0〜1の範囲で乱数を生成します。
                                <CodeBlock language={"python"} isLineNum={true}>
                                    {`import random
                                    
random_num = random.random() # 0〜1の範囲で乱数を生成`}
                                </CodeBlock>
                                生成した乱数に何かしらの数字をかけてから使うことになるかと思います。
                                小数点のない乱数を生成したい場合は下記のrandint関数を使いましょう。
                            </MediumParagraph>
                            <MediumHeading>random.randint関数</MediumHeading>
                            <MediumParagraph>
                                指定した範囲で乱数を生成します。
                                <CodeBlock language={"python"} isLineNum={true}>
                                    {`import random

random_num = random.randint(1, 10) # 1〜10の範囲で乱数を生成`}
                                </CodeBlock>
                            </MediumParagraph>
                            <MediumHeading>random.choice関数</MediumHeading>
                            <MediumParagraph>
                                引数に渡した配列の中からランダムに1つの要素を選んで返してくれます。
                                <CodeBlock language={"python"} isLineNum={true}>
                                    {`import random

array = [a, b, c, d]
result = random.choice(array) # 「a」「b」「c」「d」のどれかが返される`}
                                </CodeBlock>
                            </MediumParagraph>
                            <MediumHeading>random.shuffle関数</MediumHeading>
                            <MediumParagraph>
                                リストの並び順をシャッフルしてくれる関数です。
                                <br />
                                <UnderLineBoldText>
                                    引数に渡したリストを直接書き換える動作となります。
                                </UnderLineBoldText>
                                <CodeBlock language={"python"} isLineNum={true}>
                                    {`import random

list = [1, 2, 3, 4, 5]
random.shuffle(list)
print(my_list) # [4, 2, 5, 1, 3]などシャッフルしたリストが返される`}
                                </CodeBlock>
                            </MediumParagraph>
                            <MediumHeading>random.sample関数</MediumHeading>
                            <MediumParagraph>
                                リスト、タプル、文字列の並びをシャッフルして
                                <UnderLineBoldText>
                                    リストとして
                                </UnderLineBoldText>
                                結果を返してくれる関数です。
                                <br />
                                第一引数にシャッフルしたいリスト（またはタプル、文字列）を、
                                <br />
                                第二引数にシャッフルした結果から取得したい要素数を指定します。
                                <br />
                                <UnderLineBoldText>
                                    また、引数に渡した元のリストや文字列を直接書き換えることはなく、戻り値として新しい結果を返す動作となります。
                                </UnderLineBoldText>
                                <br />
                                リストの場合は上に書いたshuffle関数でも問題ない場面もあるので、今回は文字列をシャッフルするコードを書きます。
                                <CodeBlock language={"python"} isLineNum={true}>
                                    {`import random

str = "abcde"
shuffled_str_list = random.sample(str, len(str)) # 第一引数にシャッフルしたい文字列を、第二引数にシャッフルした結果から取得したい要素数を指定
print(shuffled_str_list) # ['b', 'd', 'a', 'c', 'e']など返り値はリストになる

shuffled_str = "".join(shuffled_str_list) # join関数を使ってリストを文字列に戻す
print(shuffled_str) # 「bdace」の文字列になる`}
                                </CodeBlock>
                            </MediumParagraph>
                            <MediumHeading>extend関数</MediumHeading>
                            <MediumParagraph>
                                ある配列に別の配列を結合したい場合は以下のように書きます。
                                <CodeBlock language={"python"} isLineNum={true}>
                                    {`array1 = [1, 2, 3]
array2 = [4, 5, 6]

array1.extend(array2)
print(array1) # 「1, 2, 3, 4, 5, 6」と表示される`}
                                </CodeBlock>
                            </MediumParagraph>
                            <MediumHeading>range関数</MediumHeading>
                            <MediumParagraph>
                                for文で頻繁に使用するrange関数ですが、3つ目の引数で値の増える量を指定することができます。
                                <CodeBlock language={"python"} isLineNum={true}>
                                    {`for number in range(1, 11, 3)
    print(number) # 1 4 7 10 が表示される`}
                                </CodeBlock>
                                また、返される値の範囲は、2つ目の引数に与えた値未満の範囲になることにも注意しましょう。
                                <br />
                                上記の例だと、2つ目の引数に「11」を指定しているので、「10」までループが実行されます。
                            </MediumParagraph>
                        </MainParagraph>
                    </section>
                    <section>
                        <MainHeading>その他小技</MainHeading>
                        <MainParagraph>
                            上記以外でへえーと思ったものをまとめます。
                            <MediumHeading>数値の可視性向上</MediumHeading>
                            <MediumParagraph>
                                とても大きな数値を扱う時、あまりにも桁が多いと分かり辛いですよね。
                                Pythonでは3桁区切りにアンダースコアで区切ることができます。
                                <CodeBlock language={"python"} isLineNum={true}>
                                    {`a = 123456789
b = 123_456_789 # Pythonが「_」は無視してくれる`}
                                </CodeBlock>
                            </MediumParagraph>
                            <MediumHeading>
                                文字列の特定のインデックス番目の文字を取得
                            </MediumHeading>
                            <MediumParagraph>
                                以下のように書くことで、文字列の特定のインデックス番目の文字を取得することができます。
                                <CodeBlock language={"python"} isLineNum={true}>
                                    {`str = "Hello"
str[1] # 一番目の文字を取得　→　H
"Hello"[1]  # 同じく一番目の文字を取得　→　H`}
                                </CodeBlock>
                            </MediumParagraph>
                            <MediumHeading>指数の計算</MediumHeading>
                            <MediumParagraph>
                                Pythonでは以下のような書き方で指数の計算を行うことができます。
                                <CodeBlock language={"python"} isLineNum={true}>
                                    {`result = 2 ** 3
print(result) # 2の3乗で「8」が表示される`}
                                </CodeBlock>
                            </MediumParagraph>
                            <MediumHeading>
                                小数点以下を切り落として除算
                            </MediumHeading>
                            <MediumParagraph>
                                以下のように書くことで、小数点以下を切り落として除算することができます。
                                <CodeBlock language={"python"} isLineNum={true}>
                                    {`result = 8 // 3 # 普通に割ると 2.666666666....
print(result) # でも2になる`}
                                </CodeBlock>
                            </MediumParagraph>
                            <MediumHeading>
                                String型以外の変数をString型へ変換して文字列を作成
                            </MediumHeading>
                            <MediumParagraph>
                                単純にキャスト用の関数を使ってプラス記号で繋ぐことでも可能ですが、以下のように書くことでよりスマートにかけます。
                                <CodeBlock language={"python"} isLineNum={true}>
                                    {`name = "Jon"
age = 20
print(f"My name is {name}. I'm {age} years old.") # 「My name is Jon. I'm 20 years old.」と表示される`}
                                </CodeBlock>
                            </MediumParagraph>
                            <MediumHeading>変数の入れ替え</MediumHeading>
                            <MediumParagraph>
                                Pythonで変数を入れ替えたい場合、以下のように書くことで入れ替えることができます。
                                <CodeBlock language={"python"} isLineNum={true}>
                                    {`a = 1
b = 2

b, a = a, b # 変数を入れ替える

print(a) # 2と表示される
print(b) # 1と表示される`}
                                </CodeBlock>
                                便利ですね。
                            </MediumParagraph>
                            <MediumHeading>
                                文字列を改行しながら定義
                            </MediumHeading>
                            <MediumParagraph>
                                メール本文など、長い文字列を書く時はきりの良いところで改行したいですよね。
                                <br />
                                Pythonでは以下のように書くことで改行しながら文字列を定義することができます。
                                <CodeBlock language={"python"} isLineNum={true}>
                                    {`str = '''
一行目の文字列です。
改行しました。
3行目の文字列です。
いくらでもかけます。
'''`}
                                </CodeBlock>
                            </MediumParagraph>
                            <MediumHeading>
                                配列の末尾の要素を参照
                            </MediumHeading>
                            <MediumParagraph>
                                配列を末尾の要素を取得する時は以下のようにマイナス記号をつけることで参照できます。
                                <CodeBlock language={"python"} isLineNum={true}>
                                    {`array = [1, 2, 3, 4, 5, 6]
print(array[-1]) # 「6」が表示される`}
                                </CodeBlock>
                            </MediumParagraph>
                        </MainParagraph>
                    </section>
                    <section>
                        <MainHeading>その他メモ</MainHeading>
                        <MainParagraph>
                            上記以外でその他メモとして残しておきたいものを書きます。
                            <MediumHeading>二次元配列について</MediumHeading>
                            <MediumParagraph>
                                以下のように書くと二次元配列を作ることができるのですが、この書き方だと配列のコピーが渡されるわけではなく、
                                <UnderLineBoldText>
                                    配列の参照が渡されます。
                                </UnderLineBoldText>
                                <CodeBlock language={"python"} isLineNum={true}>
                                    {`array1 = [1, 2, 3]
array2 = [4, 5, 6]
array3 = [array1, array2] # 二次元配列を作成

array3[0][0] = 10 # 作成した二次元配列の要素を書き換え
print(array1[0]) # 「10」と表示される`}
                                </CodeBlock>
                                そのため、作成した二次元配列から値と書き換えると、元の配列の値も書き換えらます。
                            </MediumParagraph>
                        </MainParagraph>
                    </section>
                    <section>
                        <MainHeading>最後に</MainHeading>
                        <MainParagraph>
                            以上、Pythonの復習で個人的に勉強になったことをまとめました。
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

export default PythonMemo;
