import ProfileCard from "./ProfileCard";
import ArchivedMenuForEachMonth from "./ArchivedMenuForEachMonth";

const RightSideMenu = () => {
    return (
        <>
            <div className="container mx-auto mt-8 space-y-4 p-6 text-gray-600 lg:mx-0 lg:mt-0 lg:w-4/12 xl:pr-52">
                <ProfileCard />
                <ArchivedMenuForEachMonth />
            </div>
        </>
    );
};

export default RightSideMenu;
