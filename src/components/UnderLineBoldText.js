function UnderLineBoldText({ children }) {
    return (
        <span className="font-bold underline decoration-red-400 decoration-2">
            {children}
        </span>
    );
}

export default UnderLineBoldText;
