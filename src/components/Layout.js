import Head from "next/head";
import styles from "./Layout.module.scss";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const FROFILE_NAME = "natto";
export const siteTitle = "Blog";

function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <img className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`} src="/images/profile_icon.png" width="auto" height="100" />
                        <h1 className={utilStyles.heading2Xl}>{FROFILE_NAME}</h1>
                    </>
                ) : (
                    <>
                        <img className={utilStyles.borderCircle} src="/images/profile_icon.png" width="auto" height="100" />
                        <h1 className={utilStyles.heading2Xl}>{FROFILE_NAME}</h1>
                    </>
                )}
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
