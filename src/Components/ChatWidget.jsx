import { useState } from "react";
import { FaRegMessage } from "react-icons/fa6";
import { FiXSquare } from "react-icons/fi";

import Form from "./Form";
import Button from "./Button";

const ChatWidget = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const toggleChat = () => setIsChatOpen(prev => !prev);
    const closeChat = () => setIsChatOpen(false);

    return (
        <section
            aria-label="Chat de consultas"
            className="fixed bottom-6 right-6 z-50"
        >
            {isChatOpen && (
                <article
                    role="dialog"
                    aria-modal="true"
                    className="bg-slate-800 shadow-xl rounded-xl p-4 w-80 sm:w-96 mb-3 animate-fade-in"
                >
                    <header className="flex justify-between items-center mb-2">
                        <h2 className="text-lg font-semibold text-white">¿En qué te podemos ayudar?</h2>
                        <Button
                            onClick={closeChat}
                            className="text-gray-500 hover:text-red-500"
                            aria-label="Cerrar chat"
                        >
                            <FiXSquare size={20} />
                        </Button>
                    </header>

                    <main>
                        <Form />
                    </main>
                </article>
            )}

            <Button
                onClick={toggleChat}
                aria-label={isChatOpen ? "Cerrar chat" : "Abrir chat"}
            >
                <FaRegMessage size={24} />
            </Button>
        </section>
    );
};

export default ChatWidget;

