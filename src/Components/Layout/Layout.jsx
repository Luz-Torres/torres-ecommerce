const Layout = ({ children }) => {
    return (
        <section className="bg-gradient-to-r from-indigo-500 to-purple-600 shadow-xl animate-fade-in min-h-screen text-white px-6 justify-center flex flex-col items-center">
            {children}
        </section>
    );
};

export default Layout;
