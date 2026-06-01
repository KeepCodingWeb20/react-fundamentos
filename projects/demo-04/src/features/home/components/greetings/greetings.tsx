import { Card } from "@core/components/card/card";
import React from "react";

type Props = {
    readonly userName?: string;
};

export const Greetings: React.FC<Props> = ({ userName }) => {
    return (
        <Card>{userName ? <p> Hola {userName}</p> : <p>Hola amigo </p>}</Card>
    );

    // if (userName) {
    //     return <p>Hola {userName}</p>;
    // } else {
    //     return <p>Hola amigo</p>;
    // }
};
