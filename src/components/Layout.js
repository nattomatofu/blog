import Head from "next/head";
import Link from "next/link";

const BLOG_TITLE = "natto";
const BLOG_SUB_TITLE = "TechBlog";
export const siteTitle = "natto TechBlog";

function Layout({ children, home }) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className=" bg-neutral-700">
                <div className="container mx-auto px-5 xl:px-52">
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
                            <Link legacyBehavior href={"/profile"}>
                                <a className="text-bottom ml-5 cursor-pointer text-sm text-gray-300 hover:scale-105 hover:text-white md:ml-10 md:text-xl">Profile</a>
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>
            <main>{children}</main>
            {/* {!home && (
                <div class="container mx-auto px-1 pb-4 md:pt-4">
                    <div class="p-5 md:w-1/3">
                        <Link href="/">← ホームへ戻る</Link>
                    </div>
                </div>
            )} */}
            <footer class="body-font mt-8 bg-neutral-200 text-gray-600">
                <div class="container mx-auto flex flex-col  items-center px-5 py-5">
                    <p class="text-gray-500 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4">© natto</p>
                </div>
            </footer>
        </div>
    );
}

export default Layout;
