const Home = ({ greeting }) => {
    return (
        <section className="h-[80vh] flex items-center justify-center bg-gradient-to-r from-yellow-100 via-white to-indigo-100 rounded-xl shadow-lg px-6 text-center">
            <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    {greeting}
                </h1>
                <p className="text-gray-600 text-lg md:text-xl">
                ¿Listo para girar tu mundo y expandir tu mente?🌌
                </p>
            </div>
        </section>
    );
};

export default Home