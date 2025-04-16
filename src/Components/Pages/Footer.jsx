import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 ">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-m text-gray-300">
                    © {new Date().getFullYear()} Rubik Haus. Todos los derechos reservados
                </p>

                <div className="flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                        <FaFacebook size={20} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
                        <FaInstagram size={20} />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
                        <FaGithub size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
