import { useState } from "react";
import Button from "./Button";
import FormField from "./FormField";

const Form = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        mensaje: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulario enviado:", formData);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg p-6 bg-white shadow-md rounded-xl space-y-5"
        >
            <FormField
                id="nombre"
                label="Nombre"
                value={formData.nombre}
                onChange={handleChange}
            />
            <FormField
                id="email"
                type="email"
                label="Correo"
                value={formData.email}
                onChange={handleChange}
            />
            <FormField
                id="mensaje"
                type="textarea"
                label="Mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows={4}
            />

            <Button type="submit" className="px-5 py-3">
                Enviar
            </Button>
        </form>
    );
};

export default Form;
