import React, { useEffect, useState } from "react";

const TableOfContents = () => {
    const [headings, setHeadings] = useState([]);

    useEffect(() => {
        const headings = Array.from(document.querySelectorAll("h2"));
        const toc = [];

        headings.forEach((heading) => {
            toc.push({
                level: parseInt(heading.tagName.charAt(1), 10),
                title: heading.textContent,
                id: heading.id,
            });
        });

        setHeadings(toc);
    }, []);

    return (
        <div className="flex justify-center">
            <div className="mb-8 border border-dashed border-neutral-900 p-4 align-middle md:w-1/2">
                <p className="mb-4 text-center text-xl">目次</p>
                <ul className="list-disc pl-6">
                    {headings.map((heading, index) => (
                        <li key={index} className="pb-2">
                            <a href={`#${heading.id}`}>{heading.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TableOfContents;
