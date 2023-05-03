import Image from "next/image";
import Head from "next/head";

const Profile = () => {
    return (
        <>
            <Head>
                <title>Profile</title>
            </Head>
            <section>
                <div class="container mx-auto mt-8 flex items-center justify-center px-6">
                    <img src={"/images/profile_icon.png"} className={"w-2/12"} />
                </div>
                <div class="container mx-auto px-6 text-center xl:px-72">
                    <h1 className={"text-3xl"}>natto</h1>
                </div>
            </section>
            <section>
                <div class="container mx-auto px-6 xl:px-72">
                    <div className="mt-4 border-b border-l-4 border-neutral-700 border-l-neutral-700 md:mt-8">
                        <h1 className="ml-2 text-xl">Profile</h1>
                    </div>
                    <div className="mt-10 px-5  xl:px-40">
                        <div className=" border-b border-dashed border-gray-600 text-center">
                            <h2 className="text-xl">Skill</h2>
                        </div>
                        <div className="p-2">
                            <ul className="list-disc px-8 md:px-12 md:py-4">
                                <div className="mb-2">
                                    <li className="text-sm">Python（業務で約3年）</li>
                                </div>
                                <div className="mb-2">
                                    <li className="text-sm">HTML（趣味で少し）</li>
                                </div>
                                <div className="mb-2">
                                    <li className="text-sm">CSS（趣味で少し）</li>
                                </div>
                                <div className="mb-2">
                                    <li className="text-sm">JavaScript（趣味で少し）</li>
                                </div>
                                <div className="mb-2">
                                    <li className="text-sm">Java（大学で約1年）</li>
                                </div>
                                <div className="mb-2">
                                    <li className="text-sm">AWS（業務で約3年）</li>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-10 px-5  xl:px-40">
                        <div className=" border-b border-dashed border-gray-600 text-center">
                            <h2 className="text-xl">Qualification</h2>
                        </div>
                        <div className="p-2">
                            <ul className="list-disc px-8 md:px-12 md:py-4">
                                <div className="mb-2">
                                    <li className="text-sm">基本情報技術者</li>
                                </div>
                                <div className="mb-2">
                                    <li className="text-sm">AWS Cloud Practitioner</li>
                                </div>
                                <div className="mb-2">
                                    <li className="text-sm">AWS Solutions Architect Associate</li>
                                </div>
                                <div className="mb-2">
                                    <li className="text-sm">AWS Developer</li>
                                </div>
                                <div className="mb-2">
                                    <li className="text-sm">普通自動車免許</li>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-10 px-5  xl:px-40">
                        <div className=" border-b border-dashed border-gray-600 text-center">
                            <h2 className="text-xl">hobby</h2>
                        </div>
                        <div className="p-2">
                            <ul className="list-disc px-8 md:px-12 md:py-4">
                                <div className="mb-2">
                                    <li className="text-sm">プログラミング（最近はWebサイトやWebアプリケーションに興味があります！）</li>
                                </div>
                                <div className="mb-2">
                                    <li className="text-sm">ランニング</li>
                                </div>
                                <div className="mb-2">
                                    <li className="text-sm">スマホゲーム（主にクラロワやってます）</li>
                                </div>
                                <div className="mb-2">
                                    <li className="text-sm">飲酒</li>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-10 px-5  xl:px-40">
                        <div className=" border-b border-dashed border-gray-600 text-center">
                            <h2 className="text-xl">Favorite food</h2>
                        </div>
                        <div className="p-2">
                            <ul className="list-disc px-8 md:px-12 md:py-4">
                                <div className="mb-2">
                                    <li className="text-sm">納豆（ゲームの主人公の名前をなっとうにするくらい好きです笑）</li>
                                </div>
                                <div className="mb-2">
                                    <li className="text-sm">トマト</li>
                                </div>
                                <div className="mb-2">
                                    <li className="text-sm">豆腐</li>
                                </div>
                                <div className="mb-2">
                                    <li className="text-sm">ラーメン</li>
                                </div>
                                <div className="mb-2">
                                    <li className="text-sm">お寿司</li>
                                </div>
                                <div className="mb-2">
                                    <li className="text-sm">焼肉</li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Profile;
