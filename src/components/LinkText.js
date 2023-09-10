import Link from "next/link";

function LinkText({ children, href }) {
    return (
        <Link
            href={href}
            className="decoration-blue cursor-pointer text-blue-500 underline"
        >
            {children}
        </Link>
    );
}

export default LinkText;
