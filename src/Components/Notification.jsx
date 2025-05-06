import { useEffect } from "react";
import { FiCheckCircle } from "react-icons/fi";

const Notification = ({ message, onClose }) => {
    useEffect(() => {
        const timeout = setTimeout(onClose, 3000);
        return () => clearTimeout(timeout);
    }, [onClose]);

    return (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-800 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-3 animate-fade-in">
            <FiCheckCircle className="text-lime-400 text-xl" />
            <span>{message}</span>
        </div>
    );
};

export default Notification;
