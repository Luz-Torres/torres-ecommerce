import React from 'react';

const Logo = () => {
    return (
        <div className="flex items-center gap-3">
            <img src="/logo.webp" alt="Logo" className="w-15 h-15 rounded-full shadow-md" />
            <h3 className="text-2xl font-bold text-teal-300 hover:text-rose-600">Rubik Haus</h3>
        </div>
    );
};


export default Logo;
