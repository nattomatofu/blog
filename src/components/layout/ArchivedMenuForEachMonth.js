import Link from "next/link";

const months = [
    { date: "202311", postCount: 1 },
    { date: "202310", postCount: 2 },
    { date: "202309", postCount: 6 },
    { date: "202308", postCount: 1 },
    { date: "202306", postCount: 2 },
    { date: "202305", postCount: 2 },
];

const ArchivedMenuForEachMonth = () => {
    return (
        <div className="rounded-md border border-t-8  border-neutral-600 p-5 align-middle">
            <div className="mb-4 text-lg font-bold ">月別アーカイブ</div>
            <ul>
                {months.map((monthData, index) => {
                    const year = monthData.date.substring(0, 4);
                    const monthNumber = monthData.date.substring(4, 6);
                    const formattedMonth = `${year}年${monthNumber}月`;

                    return (
                        <li key={index}>
                            <Link href={{ pathname: `/${monthData.date}` }}>
                                {formattedMonth} ({monthData.postCount})
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ArchivedMenuForEachMonth;
