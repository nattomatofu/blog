import Layout, { siteTitle } from "@/components/Layout";

export const title = "sample";
export const updateDate = "2023/4/23";

const sample = () => {
    return (
        <Layout>
            <div>
                <h1>{title}</h1>
                <h1>{updateDate}</h1>
            </div>
        </Layout>
    );
};

export default sample;
