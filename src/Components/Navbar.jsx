import Logo from './Logo.jsx';
import CartWidget from './CartWidget.jsx';
import Avatar from './Avatar.jsx';
function Navbar() {
    return (
        <nav className="bg-slate-800 shadow-md py-4 px-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Logo />
                <ul className="flex space-x-6 items-center text-slate-200 font-medium">
                    <li className="hover:text-lime-300 cursor-pointer">Home</li>
                    <li className="hover:text-lime-300 cursor-pointer">Products</li>
                    <li className="hover:text-lime-300 cursor-pointer">Contact</li>
                    
                </ul>
                <ul className="flex space-x-6 items-center text-slate-200 font-medium">
                    <li><CartWidget /></li>
                    <li><Avatar /></li>
                </ul>
            </div>
        </nav> 
    );
}

export default Navbar;
