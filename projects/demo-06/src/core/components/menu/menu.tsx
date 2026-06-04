import type { MenuOption } from "@core/types/menu-option";
import "./menu.css";
import { Link } from "react-router";

type Props = {
    readonly options: MenuOption[];
};

export const Menu: React.FC<Props> = ({ options }) => {
    return (
        <nav>
            <ul>
                {options.map((item) => (
                    <li key={item.path}>
                        <Link to={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
