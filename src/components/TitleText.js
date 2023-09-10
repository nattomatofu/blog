function TitleText({ children }) {
    return (
        <div className="mt-8 border-b-2 border-t-2 border-neutral-700">
            <h1 className="container mx-auto p-4 text-lg font-bold md:p-12 md:text-xl">
                {children}
            </h1>
        </div>
    );
}

export default TitleText;
