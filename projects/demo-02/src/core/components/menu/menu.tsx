import type { MenuOption } from "@core/types/menu-option";
import "./menu.css";

type Props = {
    readonly options: MenuOption[];
};

export const Menu: React.FC<Props> = ({ options }) => {
    return (
        <nav>
            <ul>
                {options.map((item) => (
                    <li key={item.path}>
                        <a href={item.path}> {item.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
