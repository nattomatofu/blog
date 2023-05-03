import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import Layout from "@/components/Layout";
import { getPostsData } from "@/lib/post";

const inter = Inter({ subsets: ["latin"] });
const siteTitle = "natto TechBlog";

//SSGの場合
export async function getStaticProps() {
    const allPostsData = getPostsData();
    console.log(allPostsData);
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({ allPostsData }) {
    return (
        <>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section>
                <div class="container mx-auto px-6 xl:px-52">
                    <div className="mt-4 border-b border-l-4 border-neutral-700 border-l-neutral-700 md:mt-8">
                        <h1 className="ml-2 text-xl">Posts</h1>
                    </div>
                </div>
            </section>

            <section class="body-font text-gray-600">
                <div class="container mx-auto px-1 md:pt-4 xl:px-48">
                    <div class="flex flex-wrap">
                        <div class="w-full p-4 md:w-1/2 lg:w-1/3">
                            <Link href="/posts/made-blog-with-nextjs">
                                <div class="overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 duration-300 hover:scale-105">
                                    <img class="w-full object-cover object-center md:h-36 lg:h-48" src="images/nextjs_thumbnail.jpg" alt="blog" />
                                    <div class="p-6">
                                        <h1 class="title-font mb-3 truncate border-l-neutral-700 text-lg font-medium">Next.jsでブログを作ってみた（※技術的な内容はありません）</h1>
                                        <div class="flex flex-wrap items-center">
                                            <p class="inline-flex items-center  border-l-neutral-700 md:mb-2 lg:mb-0">更新日 : 2023/4/29</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
