import { useRef } from 'react';
const Input = () => {
    const referenciaInput = useRef(null);

    const handleFocus = () => {
        referenciaInput.current.focus();
    }
   /*  const handleBlur = () => {
        referenciaInput.current.blur();
    } */
    return (
        <div>
            <input placeholder='buscar' ref={referenciaInput} />
            <button onClick={handleFocus}>Focus</button>
        </div>
    )
}

export default Input