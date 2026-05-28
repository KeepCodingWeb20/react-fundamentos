import type { MouseEvent, MouseEventHandler } from "react";
import './button.css'

type Props = {
    readonly children: string;
    readonly className?: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    [key: string]: unknown
};

export const Button: React.FC<Props> = ({ children, className, onClick, ...restOfProps }) => {

    const totalClass = className ? 'button ' + className : 'button'

    const handleClick = (event: MouseEvent<HTMLButtonElement>, id: number): void => {
        console.log("Click en el Componente Button", id)
        onClick(event)
    }

    return (
        <button className={totalClass} onClick={(event) => handleClick(event, 12) } {...restOfProps}>
            {children}
        </button>
    );
};
