import React, { type ReactNode } from "react";
import { Header } from "@core/components/header/header";
import { Footer } from "@core/components/footer/footer";
import { Logos } from "@core/components/logos/logos";
import { Menu } from "@core/components/menu/menu";
import type { MenuOption } from "@core/types/menu-option";
type Props = {
    readonly children: ReactNode;
    readonly appTitle: string;
    readonly subTitle: string;
    readonly menuOptions: MenuOption[];
};

export const Layout: React.FC<Props> = ({
    appTitle,
    subTitle,
    menuOptions,
    children,
}) => {
    return (
        <>
            <Header title={appTitle} subTittle={subTitle}>
                <Menu options={menuOptions} />
                <Logos />
            </Header>
            <main>{children}</main>
            <Footer />
        </>
    );
};
