import ProfileCard from "./ProfileCard";
import ArchivedMenuForEachMonth from "./ArchivedMenuForEachMonth";

const RightSideMenu = () => {
    return (
        <>
            <div className="container mx-auto mt-8 space-y-4 p-6 text-gray-600 lg:mx-0 lg:mt-0 lg:w-4/12 xl:pr-52">
                <ProfileCard />
                <ArchivedMenuForEachMonth />
                <div
                    dangerouslySetInnerHTML={{
                        __html: `
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <ins class="adsbygoogle"
               style="display:block"
               data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
               data-ad-slot="YYYYYYYYYY"
               data-ad-format="auto"></ins>
          <script>
               (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        `,
                    }}
                />
            </div>
        </>
    );
};

export default RightSideMenu;
