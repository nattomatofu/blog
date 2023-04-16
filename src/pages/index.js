import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Layout, { siteTitle } from "@/components/Layout";
import utilStyles from "@/styles/utils.module.css";
import { getPostsData } from "@/lib/Post";

const inter = Inter({ subsets: ["latin"] });

//SSGの場合
export async function getStaticProps() {
    const allPostsData = getPostsData();
    // console.log(allPostsData);
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>プロフィールを書く場所</p>
            </section>

            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2>ブログサイトのタイトル</h2>
                <div className={styles.grid}>
                    {allPostsData.map(({ id, title, date, thumbnail }) => {
                        return (
                            <article key={id}>
                                <Link href={`/posts/${id}`}>
                                    <img className={styles.thumbnailImage} src={`${thumbnail}`} />
                                </Link>
                                <Link href={`/posts/${id}`} legacyBehavior>
                                    <a className={utilStyles.boldText}>{title}</a>
                                </Link>
                                <br />
                                <small className={utilStyles.lightText}>{date}</small>
                            </article>
                        );
                    })}
                </div>
            </section>
        </Layout>
    );
}
