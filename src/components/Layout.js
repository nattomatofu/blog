import Head from "next/head";
import Link from "next/link";

const BLOG_TITLE = "natto";
const BLOG_SUB_TITLE = "TechBlog";
export const siteTitle = "Blog";

function Layout({ children, home }) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className=" bg-neutral-700">
                <div className="container mx-auto px-5">
                    <div className="flex flex-row flex-wrap justify-between py-2 md:py-6">
                        <Link href={"/"}>
                            <div className="title-font mb-1 text-gray-300 md:font-medium ">
                                <span className="text-xl md:text-3xl">{BLOG_TITLE}</span>
                                <span className="ml-2 text-sm md:text-lg">{BLOG_SUB_TITLE}</span>
                            </div>
                        </Link>
                        <nav className="mb-1 flex flex-wrap items-end text-base">
                            <Link legacyBehavior href={"/"}>
                                <a className="text-bottom cursor-pointer text-sm text-gray-300 hover:scale-105 hover:text-white md:text-xl">Posts</a>
                            </Link>
                            <Link legacyBehavior href={"/"}>
                                <a className="text-bottom ml-5 cursor-pointer text-sm text-gray-300 hover:scale-105 hover:text-white md:ml-10 md:text-xl">Profile</a>
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>
            <main>{children}</main>
            {!home && (
                <div>
                    <Link href="/">← ホームへ戻る</Link>
                </div>
            )}
        </div>
    );
}

export default Layout;
