export const title = "Next.jsでブログを作ってみた";
export const updateDate = "2023/4/25";

const sample = () => {
    return (
        <div className="container mx-auto px-5 xl:px-52">
            <section>
                <div className="mt-8 border-b-2 border-t-2 border-neutral-700">
                    <h1 className="container mx-auto p-4 text-lg font-bold md:p-12 md:text-xl">{title}</h1>
                </div>
                <div className="mt-4 text-right">
                    <p className="font-thin">更新日 : {updateDate}</p>
                </div>
            </section>

            <section>
                <div className="mt-4">
                    <h2>
                        この度Next.jsでブログを作ってみました。
                        <br />
                        初投稿で何を書けば良いか分からないですが、作成する上で心掛けたことなどHTMLの勉強から初めて約3カ月かけてブログを作成したので
                    </h2>
                </div>
                <div className="mt-4 border-b border-l-4 border-neutral-700 border-l-neutral-700 md:mt-8">
                    <h1 className="ml-2 text-xl">作ろうと思ったきっかけ</h1>
                </div>
            </section>
        </div>
    );
};

export default sample;
