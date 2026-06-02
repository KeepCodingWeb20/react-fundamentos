import type { ReactNode } from "react";
import "./header.css";

// interface Props {
//     readonly title: string,
//     readonly subTittle: string
// }

type Props = {
    readonly title: string;
    readonly subTittle: string;
    readonly children: ReactNode;
};

export const Header: React.FC<Props> = ({ title, subTittle, children }) => {
    return (
        <header>
            {children}
            <h1>{title}</h1>
            <p className="subtitle">{subTittle}</p>
        </header>
    );
};
