import { Card } from "@core/components/card/card";
import "./panic-button.css";
import type { MouseEventHandler } from "react";

export const PanicButton: React.FC = () => {
    const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
        console.dir(event.target);
        console.dir(event.currentTarget);
        alert("Horror, lo hiciste");
    };

    return (
        <Card title="Panic Button">
            <div className="panic-button">
                <button onClick={handleClick}>
                    "Pulsar en caso de emergencia"
                </button>
                <p className="message">
                    ¡No lo hagas a menos que sea realmente necesario!
                </p>
            </div>
        </Card>
    );
};
