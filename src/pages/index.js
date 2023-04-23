import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Layout, { siteTitle } from "@/components/Layout";
import utilStyles from "@/styles/utils.module.css";
import { getPostsData } from "@/lib/post";

// import { Button, ChakraProvider } from "@chakra-ui/react";
// import theme from "@/styles/theme";
// import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

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
            <Layout home>
                <Head>
                    <title>{siteTitle}</title>
                </Head>
                <section>
                    <div class="container mx-auto px-6">
                        <div className="mt-4 border-b border-l-4 border-neutral-700 border-l-neutral-700 md:mt-8">
                            <h1 className="ml-2 text-xl">Posts</h1>
                        </div>
                    </div>
                </section>

                <section class="body-font text-gray-600">
                    <div class="container mx-auto px-1 pb-24 md:pt-4">
                        <div class="flex flex-wrap">
                            <div class="p-4 md:w-1/3">
                                <Link href="/posts/sample">
                                    <div class="overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 duration-300 hover:scale-105">
                                        <img class="w-full object-cover object-center md:h-36 lg:h-48" src="images/thumbnail01.jpg" alt="blog" />
                                        <div class="p-6">
                                            <h1 class="title-font mb-3 border-l-neutral-700 text-lg font-medium">Next.jsでブログサイトを作る</h1>
                                            <div class="flex flex-wrap items-center">
                                                <p class="inline-flex items-center  border-l-neutral-700 md:mb-2 lg:mb-0">更新日 : 2023/4/23</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div class="p-4 md:w-1/3">
                                <Link href="/posts/sample">
                                    <div class="overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 duration-300 hover:scale-105">
                                        <img class="w-full object-cover object-center md:h-36 lg:h-48" src="images/thumbnail01.jpg" alt="blog" />
                                        <div class="p-6">
                                            <h1 class="title-font mb-3 border-l-neutral-700 text-lg  font-medium">The 400 Blows</h1>
                                            <div class="flex flex-wrap items-center">
                                                <p class="inline-flex items-center  border-l-neutral-700 md:mb-2 lg:mb-0">Learn More</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div class="p-4 md:w-1/3">
                                <Link href="/posts/sample">
                                    <div class="overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 duration-300 hover:scale-105">
                                        <img class="w-full object-cover object-center md:h-36 lg:h-48" src="images/thumbnail01.jpg" alt="blog" />
                                        <div class="p-6">
                                            <h1 class="title-font mb-3 border-l-neutral-700 text-lg font-medium">The 400 Blows</h1>
                                            <div class="flex flex-wrap items-center">
                                                <p class="inline-flex items-center  border-l-neutral-700 md:mb-2 lg:mb-0">Learn More</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div class="p-4 md:w-1/3">
                                <div class="overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 duration-300 hover:scale-105">
                                    <img class="w-full object-cover object-center md:h-36 lg:h-48" src="images/thumbnail01.jpg" alt="blog" />
                                    <div class="p-6">
                                        <h1 class="title-font mb-3 border-l-neutral-700 text-lg  font-medium">The 400 Blows</h1>
                                        <div class="flex flex-wrap items-center">
                                            <p class="inline-flex items-center  border-l-neutral-700 md:mb-2 lg:mb-0">Learn More</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
