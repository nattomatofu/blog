import Layout from "@/components/Layout";
import { getPostData, getAllPostIds } from "@/lib/Post";
import utilStyles from "@/styles/utils.module.css";
import Head from "next/head";

// あくまでビルド時に事前に作成するための実行であることに注意
// このファイルを使って表示したいページのパスのリストを作成する
// 「getStaticProps」より先に実行される
/** pathsの中身↓
 * [
  { params: { id: 'pre-rendering-about' } },
  { params: { id: 'pre-rendering' } },
  { params: { id: 'react-next' } },
  { params: { id: 'ssg-ssr' } }
]
 */

export async function getStaticPaths() {
    const paths = getAllPostIds();
    // console.log(paths);
    return {
        paths,
        fallback: false,
    };
}

// あくまでビルド時に事前に作成するための実行であることに注意
// paramsには上記pathsで指定した値が入る（リストの要素1つずつ）
// getStaticPropsで生成したパスのリストから1つずつデータを取得する
// ここまでの処理で作成されたリストの数だけあるページのパスが、ビルド完了時に「post」配下に作成される
/** paramsの中身の1つの例↓
 * { id: 'pre-rendering-about' }
 */
export async function getStaticProps({ params }) {
    // console.log(params);
    const postData = await getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
}

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingX1}>{postData.title}</h1>
                <div className={utilStyles.lightText}>{postData.date}</div>
                <div dangerouslySetInnerHTML={{ __html: postData.blogContentHTML }} />
            </article>
        </Layout>
    );
}
