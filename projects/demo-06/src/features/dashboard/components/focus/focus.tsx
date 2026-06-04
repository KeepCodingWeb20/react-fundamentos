import { Card } from "@core/components/card/card";
import React, { useRef } from "react";

export const Focus: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFocus = (): void => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };
    
    // MAla práctica. Con el DOM hay que usar Ref
    const handleFocusBad = (): void => {
        const input = document.querySelector("input");
        input?.focus();
    }


    return (
        <Card title="Focus">
            <input type="text" ref={inputRef} />
            <button onClick={handleFocus}>Focus</button>
            <button onClick={handleFocusBad}>Focus (Bad)</button>
        </Card>
    );
};
