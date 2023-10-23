import path from "path";
import fs from "fs";

export function getSubFolders(folderPath) {
    const folders = fs
        .readdirSync(folderPath)
        .filter((item) =>
            fs.statSync(path.join(folderPath, item)).isDirectory()
        );

    return folders.map((folder) => ({
        name: folder,
        path: path.join(folderPath, folder),
        subfolders: getSubFolders(path.join(folderPath, folder)),
    }));
}

export function getPostsData() {
    const postsDirectory = path.join(process.cwd(), "src/pages/posts");

    const allPostsData = getSubFolders(postsDirectory).map((item) => {
        const fileNames = fs.readdirSync(item.path);
        const filterdFileNames = fileNames.filter(
            (item) => item !== ".DS_Store"
        );
        const allPostsData = filterdFileNames.map((fileName) => {
            const id = item.name + "/" + fileName.replace(/\.js$/, "");

            const fullPath = path.join(item.path, fileName);
            const fileContent = fs.readFileSync(fullPath, "utf8");

            const titleRegex = /const title =\s+"([^"]+)";/;
            const titleMatch = fileContent.match(titleRegex);
            const title = titleMatch[1];

            const updateDateRegex = /const updateDate =\s+"([^"]+)";/;
            const updateDateMatch = fileContent.match(updateDateRegex);
            const updateDate = updateDateMatch[1];

            const thumbnailImagePathRegex =
                /const thumbnailImagePath =\s+"([^"]+)";/;
            const thumbnailImagePathMatch = fileContent.match(
                thumbnailImagePathRegex
            );
            const thumbnailImagePath = thumbnailImagePathMatch[1];

            const linkPath = "/posts/" + id;

            return {
                postMonth: item.name,
                id,
                // fileContent,
                title,
                updateDate,
                thumbnailImagePath,
                linkPath,
            };
        });
        return allPostsData;
    });
    // ネストされたリストの中のオブジェクトをリスト内で並列化
    const parallelizationAllPostsData = allPostsData.reduce(
        (accumulator, currentArray) => {
            return accumulator.concat(currentArray);
        },
        []
    );
    return parallelizationAllPostsData;
}
