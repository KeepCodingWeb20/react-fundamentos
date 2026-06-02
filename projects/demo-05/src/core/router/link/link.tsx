interface Props {
    to: string;
    children: React.ReactNode;
}

export const Link: React.FC<Props> = ({ to, children }) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.history.pushState(null, '', to);
         const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return <a onClick={handleClick} href={to}>{children}</a>;
};
