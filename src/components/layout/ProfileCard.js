import Link from "next/link";

const ProfileCard = (props) => {
    return (
        <Link href="/profile">
            <div className="rounded-md border border-t-8  border-neutral-600 p-5 align-middle">
                <div className="mb-4 text-lg font-bold ">プロフィール</div>
                <div className="flex flex-wrap items-center">
                    <img
                        className="w-2/12 lg:w-3/12"
                        src="/images/profile/profile_icon.png"
                        alt="プロフィールアイコン"
                    />
                    <p className="ml-6 text-xl">natto</p>
                </div>
                <div className="py-6">
                    <p className="title-font border-l-neutral-700">
                        社内SEとして働きながら日頃ITスキルを磨いています。
                        <br />
                        やってみたことや、エラーの対処法などIT関連の記事を備忘録としてこのブログに残しています。
                        <br />
                        納豆とトマトと豆腐が好きです。ラーメンも好きです。
                        <br />
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default ProfileCard;
