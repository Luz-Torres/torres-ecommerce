const Filter = ({ setSelectedCategory, selectedCategory }) => {
    const categories = [
        { id: 'todos', name: 'Todos' },
        { id: '1', name: 'Cubos' },
        { id: '2', name: 'Libros' },
    ];

    return (
        <nav className="flex justify-center gap-4 mb-6">
            {categories.map((cat) => (
                <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded ${
                        selectedCategory === cat.id
                            ? 'bg-yellow-400 text-black font-bold'
                            : 'hover:text-yellow-400'
                    }`}
                >
                    {cat.name}
                </button>
            ))}
        </nav>
    );
};

export default Filter;