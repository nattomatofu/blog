import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "src/posts");

export function getPostsData() {
    const fileNames = fs.readdirSync(postsDirectory);
    // console.log(fileNames);
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.js$/, "");

        const fullPath = path.join(postsDirectory, fileName);
        // console.log(fullPath);
        // const fileContent = fs.readFileSync(fullPath, "utf8");
        const fileContent = fs.readFileSync(fullPath, "utf8");
        console.log("fileContent");
        console.log(fileContent);

        // const matterResult = matter(fileContent);

        return {
            id,
            fileContent,
            // ...matterResult.data,
        };
    });
    return allPostsData;
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);
    // console.log(fileNames);
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ""),
            },
        };
    });
}

//idに基づいて記事ファイルのデータを返す
export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.js`);
    const fileContent = fs.readFileSync(fullPath, "utf8");

    // const matterResult = matter(fileContent);
    // console.log("fileContent");
    // console.log(fileContent);

    const blogContent = await remark().use(html).process(matterResult.content);
    // const blogContent = await remark().use(html).process(fileContent.content);
    const blogContentHTML = blogContent.toString();

    return {
        id,
        fileContent,
        // ...matterResult.data,
    };
}
