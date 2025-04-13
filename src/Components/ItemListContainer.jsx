import React from 'react';

const ItemListContainer = ({ greeting }) => {
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


/* const ItemListContainer = (props) => {
    return (
        <section className="p-6 bg-gray-100 rounded-lg shadow-md max-w-4xl mx-auto my-8">
            <h1 className="text-3xl font-semibold text-center text-gray-800">{props.greeting}</h1>
        </section>
    );
};
 */

export default ItemListContainer