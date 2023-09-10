import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import Layout from "@/components/Layout";
import HomeCards from "@/components/HomeCards";
import { getPostsData } from "@/lib/post";

const inter = Inter({ subsets: ["latin"] });
const siteTitle = "natto memo";
const metaDescription =
    "どうも、納豆大好きnattoです。natto memoです。IT関係の技術的な記事をメインに投稿していきます。";
const metaOgUrl = "https://www.nattomatofu.com/";
const metaOgType = "article";
const thumbnailImagePath = "/images/profile/profile_icon.png";

//S
export async function getStaticProps() {
    const allPostsData = getPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({ allPostsData }) {
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
                            <h1 className="ml-2 text-xl">Posts</h1>
                        </div>
                    </div>
                </section>

                <section className="body-font text-gray-600">
                    <HomeCards allPostsData={allPostsData} />
                </section>
            </main>
        </Layout>
    );
}
