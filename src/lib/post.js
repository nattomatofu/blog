import path from "path";
import fs from "fs";

const postsDirectory = path.join(process.cwd(), "src/pages/posts");

export function getPostsData() {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.js$/, "");

        const fullPath = path.join(postsDirectory, fileName);
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
            id,
            // fileContent,
            title,
            updateDate,
            thumbnailImagePath,
            linkPath,
        };
    });
    return allPostsData;
}
