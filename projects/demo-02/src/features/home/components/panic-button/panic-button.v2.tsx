import { Card } from "@core/components/card/card";
import type { MouseEventHandler } from "react";
import { Button } from "@core/components/button/button";

export const PanicButton: React.FC = () => {
    const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
        console.log(event)
        console.dir(event.target);
        console.dir(event.currentTarget);
        alert("Horror, lo hiciste");
    };

    return (
        <Card title="Panic Button">
            <div className="panic-button">
                <Button onClick={handleClick} title="Panic">
                    Pulsar en caso de emergencia
                </Button>
                <p className="message">
                    ¡No lo hagas a menos que sea realmente necesario!
                </p>
            </div>
        </Card>
    );
};
