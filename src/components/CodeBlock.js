import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

function CodeBlock({ children, language, filename, isLineNum }) {
    return (
        <div className="py-8">
            {filename && (
                <div className="-mb-2 mt-2 bg-neutral-600 p-1 text-sm text-slate-200">
                    {filename}
                </div>
            )}
            <SyntaxHighlighter
                language={language}
                style={vscDarkPlus}
                showLineNumbers={isLineNum}
            >
                {children}
            </SyntaxHighlighter>
        </div>
    );
}

export default CodeBlock;
