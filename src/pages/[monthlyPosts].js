import { useRouter } from "next/router";
import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";
import HomeCards from "@/components/HomeCards";
import { getPostsData, getSubFolders } from "@/lib/getAllPostsData";
import path from "path";

const inter = Inter({ subsets: ["latin"] });
const siteTitle = "natto memo";
const metaDescription =
    "どうも、納豆大好きnattoです。natto memoです。IT関係の技術的な記事をメインに投稿していきます。";
const metaOgUrl = "https://www.nattomatofu.com/";
const metaOgType = "article";
const thumbnailImagePath = "/images/profile/profile_icon.png";

//src/pages/posts配下の記事を取得する
export async function getStaticProps() {
    const allPostsData = getPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export async function getStaticPaths() {
    const monthList = getSubFolders(
        path.join(process.cwd(), "src/pages/posts")
    );
    const paths = monthList.map((month) => ({
        params: { monthlyPosts: month.name },
    }));
    return {
        paths,
        // fallback: "blocking",
        fallback: false,
    };
}

export default function MonthlyPosts({ allPostsData }) {
    const router = useRouter();
    const targetMonth = router.query.monthlyPosts;
    const filteredPosts = allPostsData.filter(
        (post) => post.postMonth === targetMonth
    );

    return (
        <Layout>
            <Head>
                <meta content={metaDescription} name="description"></meta>
                <meta charSet="utf-8"></meta>
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                ></meta>
                <meta property="og:url" content={metaOgUrl} />
                <meta property="og:type" content={metaOgType} />
                <meta property="og:title" content={siteTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:site_name" content={siteTitle} />
                <meta property="og:image" content={thumbnailImagePath} />
                <title>{siteTitle}</title>
            </Head>
            <main>
                <section>
                    <div className="container mx-auto px-6 xl:pl-52">
                        <div className="mt-4 border-b border-l-4 border-neutral-700 border-l-neutral-700 md:mt-8">
                            <h1 className="ml-2 text-xl">月別アーカイブ</h1>
                        </div>
                    </div>
                </section>
                <section className="body-font text-gray-600">
                    <HomeCards allPostsData={filteredPosts} />
                </section>
            </main>
        </Layout>
    );
}
