function CodeText({ children }) {
    return (
        <span className="rounded-md bg-slate-200 p-1 text-sm italic text-slate-600">
            {children}
        </span>
    );
}

export default CodeText;
