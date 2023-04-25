import Layout from "@/components/Layout";

export const title = "Next.jsでブログを作ってみた";
export const updateDate = "2023/4/25";

const sample = () => {
    return (
        <div className="container mx-auto px-5 xl:px-52">
            <h1>{title}</h1>
            <h1>{updateDate}</h1>
        </div>
    );
};

export default sample;
