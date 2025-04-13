import Logo from './Logo.jsx';
import CartWidget from './CartWidget.jsx';

function Navbar() {
    return (
        <nav className="bg-slate-800 shadow-md py-4 px-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Logo />
                <ul className="flex space-x-6 items-center text-slate-200 font-medium">
                    <li className="hover:text-teal-300 cursor-pointer">Home</li>
                    <li className="hover:text-teal-300 cursor-pointer">Products</li>
                    <li className="hover:text-teal-300 cursor-pointer">Contact</li>
                    
                </ul>
                <ul>
                    <li>
                        <CartWidget />
                    </li>
                </ul>
            </div>
        </nav> 
    );
}

export default Navbar;
