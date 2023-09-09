import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

function CodeBlock({ children }) {
    return (
        <SyntaxHighlighter
            language="shell"
            style={vscDarkPlus}
            showLineNumbers={false}
        >
            {children}
        </SyntaxHighlighter>
    );
}

export default CodeBlock;
