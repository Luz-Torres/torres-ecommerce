const Layout = ({ children, className = '' }) => {
    return (
        <section
            className={`bg-gradient-to-r from-indigo-500 to-purple-600 shadow-xl animate-fade-in text-white px-6 justify-center flex flex-col items-center ${className}`}
        >
            {children}
        </section>
    );
};
export default Layout;
