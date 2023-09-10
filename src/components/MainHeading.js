import React from "react";
import { v4 as uuidv4 } from "uuid";

function MainHeading({ children }) {
    const uniqueId = uuidv4();

    return (
        <div className="mt-12 border-b border-l-4 border-neutral-700 border-l-neutral-700">
            <h2 className="ml-2 text-xl" id={uniqueId}>
                {children}
            </h2>
        </div>
    );
}

export default MainHeading;
