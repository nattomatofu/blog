import Link from "next/link";

const HomeCards = (props) => {
    // console.log(props.postData);

    console.log(props.allPostsData[0].id);

    return (
        <div className="container mx-auto px-1 md:pt-4 xl:pl-48">
            <div className="flex flex-wrap">
                {props.allPostsData.map((postData) => (
                    <div key={postData.id} className="w-full p-4 md:w-1/2">
                        <Link href={postData.linkPath}>
                            <div className="overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 duration-300 hover:scale-105">
                                <img
                                    className="w-full object-cover object-center md:h-36 lg:h-48"
                                    src={postData.thumbnailImagePath}
                                    alt="blog"
                                />
                                <div className="p-6">
                                    <div className="overflow-hidden  md:h-16">
                                        <h1 className="title-font md:h-15 mb-3 border-l-neutral-700 text-lg font-medium line-clamp-2">
                                            {postData.title}
                                        </h1>
                                    </div>
                                    <div className="flex flex-wrap items-center">
                                        <p className="inline-flex items-center  border-l-neutral-700 md:mb-2 lg:mb-0">
                                            更新日 : {postData.updateDate}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeCards;
