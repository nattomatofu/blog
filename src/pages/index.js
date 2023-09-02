import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import { getPostsData } from "@/lib/post";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });
const siteTitle = "natto memo";
const metaDescription =
    "どうも、納豆大好きnattoです。natto memoです。IT関係の技術的な記事をメインに投稿していきます。";
const metaOgUrl = "https://www.nattomatofu.com/";
const metaOgType = "article";
const thumbnailImagePath = "/images/profile/profile_icon.png";

//SSGの場合
// export async function getStaticProps() {
// const allPostsData = getPostsData();
// console.log(allPostsData);
//     return {
//         props: {
//             allPostsData,
//         },
//     };
// }

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
                    <div className="container mx-auto px-1 md:pt-4 xl:pl-48">
                        <div className="flex flex-wrap">
                            <div className="w-full p-4 md:w-1/2">
                                <Link href="/posts/docker-compose">
                                    <div className="overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 duration-300 hover:scale-105">
                                        <img
                                            className="w-full object-cover object-center md:h-36 lg:h-48"
                                            src="images/thumbnail/docker_compose_thumbnail.png"
                                            alt="blog"
                                        />
                                        <div className="p-6">
                                            <div className="overflow-hidden  md:h-16">
                                                <h1 className="title-font md:h-15 mb-3 border-l-neutral-700 text-lg font-medium line-clamp-2">
                                                    Docker
                                                    Composeファイルの書き方
                                                </h1>
                                            </div>
                                            <div className="flex flex-wrap items-center">
                                                <p className="inline-flex items-center  border-l-neutral-700 md:mb-2 lg:mb-0">
                                                    更新日 : 2023/9/5
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="w-full p-4 md:w-1/2">
                                <Link href="/posts/docker-imagefile">
                                    <div className="overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 duration-300 hover:scale-105">
                                        <img
                                            className="w-full object-cover object-center md:h-36 lg:h-48"
                                            src="images/thumbnail/docker-thumbnail.jpg"
                                            alt="blog"
                                        />
                                        <div className="p-6">
                                            <div className="overflow-hidden  md:h-16">
                                                <h1 className="title-font md:h-15 mb-3 border-l-neutral-700 text-lg font-medium line-clamp-2">
                                                    Dockerイメージファイルの書き方
                                                </h1>
                                            </div>
                                            <div className="flex flex-wrap items-center">
                                                <p className="inline-flex items-center  border-l-neutral-700 md:mb-2 lg:mb-0">
                                                    更新日 : 2023/9/2
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="w-full p-4 md:w-1/2">
                                <Link href="/posts/docker-memo">
                                    <div className="overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 duration-300 hover:scale-105">
                                        <img
                                            className="w-full object-cover object-center md:h-36 lg:h-48"
                                            src="images/thumbnail/docker-thumbnail.jpg"
                                            alt="blog"
                                        />
                                        <div className="p-6">
                                            <div className="overflow-hidden  md:h-16">
                                                <h1 className="title-font md:h-15 mb-3 border-l-neutral-700 text-lg font-medium line-clamp-2">
                                                    Dockerコマンド一覧
                                                </h1>
                                            </div>
                                            <div className="flex flex-wrap items-center">
                                                <p className="inline-flex items-center  border-l-neutral-700 md:mb-2 lg:mb-0">
                                                    更新日 : 2023/9/2
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="w-full p-4 md:w-1/2">
                                <Link href="/posts/git-command">
                                    <div className="overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 duration-300 hover:scale-105">
                                        <img
                                            className="w-full object-cover object-center md:h-36 lg:h-48"
                                            src="images/thumbnail/git_command_thumbnail.png"
                                            alt="blog"
                                        />
                                        <div className="p-6">
                                            <div className="overflow-hidden  md:h-16">
                                                <h1 className="title-font md:h-15 mb-3 border-l-neutral-700 text-lg font-medium line-clamp-2">
                                                    Gitのコマンドをまとめてみた
                                                </h1>
                                            </div>
                                            <div className="flex flex-wrap items-center">
                                                <p className="inline-flex items-center  border-l-neutral-700 md:mb-2 lg:mb-0">
                                                    更新日 : 2023/8/24
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="w-full p-4 md:w-1/2">
                                <Link href="/posts/jenkins-memo">
                                    <div className="overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 duration-300 hover:scale-105">
                                        <img
                                            className="w-full object-cover object-center md:h-36 lg:h-48"
                                            src="images/thumbnail/jenkins_thumbnail.png"
                                            alt="blog"
                                        />
                                        <div className="p-6">
                                            <div className="overflow-hidden  md:h-16">
                                                <h1 className="title-font md:h-15 mb-3 border-l-neutral-700 text-lg font-medium line-clamp-2">
                                                    UbuntuへのJenkinsインストール手順
                                                </h1>
                                            </div>
                                            <div className="flex flex-wrap items-center">
                                                <p className="inline-flex items-center  border-l-neutral-700 md:mb-2 lg:mb-0">
                                                    更新日 : 2023/6/4
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="w-full p-4 md:w-1/2">
                                <Link href="/posts/gitlab-memo">
                                    <div className="overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 duration-300 hover:scale-105">
                                        <img
                                            className="w-full object-cover object-center md:h-36 lg:h-48"
                                            src="images/thumbnail/gitlab_thumbnail.jpg"
                                            alt="blog"
                                        />
                                        <div className="p-6">
                                            <div className="overflow-hidden  md:h-16">
                                                <h1 className="title-font md:h-15 mb-3 border-l-neutral-700 text-lg font-medium line-clamp-2">
                                                    GitLabのエディションやインストール手順についてまとめてみた
                                                </h1>
                                            </div>
                                            <div className="flex flex-wrap items-center">
                                                <p className="inline-flex items-center  border-l-neutral-700 md:mb-2 lg:mb-0">
                                                    更新日 : 2023/6/4
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="w-full p-4 md:w-1/2">
                                <Link href="/posts/ec2-troubleshooting">
                                    <div className="overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 duration-300 hover:scale-105">
                                        <img
                                            className="w-full object-cover object-center md:h-36 lg:h-48"
                                            src="images/thumbnail/AWS_EC2_thumbnail.jpg"
                                            alt="blog"
                                        />
                                        <div className="p-6">
                                            <div className="overflow-hidden  md:h-16">
                                                <h1 className="title-font mb-3 border-l-neutral-700 text-lg font-medium line-clamp-2">
                                                    AWSのEC2立ち上げからセッションマネージャーでアクセスするまでに出会ったエラー対処法
                                                </h1>
                                            </div>
                                            <div className="flex flex-wrap items-center">
                                                <p className="inline-flex items-center  border-l-neutral-700 md:mb-2 lg:mb-0">
                                                    更新日 : 2023/5/9
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="w-full p-4 md:w-1/2">
                                <Link href="/posts/made-blog-with-nextjs">
                                    <div className="overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 duration-300 hover:scale-105">
                                        <img
                                            className="w-full object-cover object-center md:h-36 lg:h-48"
                                            src="images/thumbnail/nextjs_thumbnail.jpg"
                                            alt="blog"
                                        />
                                        <div className="p-6">
                                            <div className="overflow-hidden  md:h-16">
                                                <h1 className="title-font md:h-15 mb-3 border-l-neutral-700 text-lg font-medium line-clamp-2">
                                                    Next.jsでブログを作ってみた。（やった勉強や、今後実装したい機能などをメインにまとめています！）
                                                </h1>
                                            </div>
                                            <div className="flex flex-wrap items-center">
                                                <p className="inline-flex items-center  border-l-neutral-700 md:mb-2 lg:mb-0">
                                                    更新日 : 2023/5/13
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
