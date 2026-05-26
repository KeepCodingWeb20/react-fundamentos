import reactLogo from '../../assets/react.svg';
import viteLogo from '../../assets/vite.svg';
import heroImg from '../../assets/hero.png';

interface Props {
    title: string;
    path: string;
    children?: React.ReactNode;
}

export const AboutPage: React.FC<Props> = ({ title, path, children }) => {
    return (
        <div className="hero-container">
            <div className="hero">
                <img
                    src={heroImg}
                    className="base"
                    width="170"
                    height="179"
                    alt=""
                />
                <img src={reactLogo} className="framework" alt="React logo" />
                <img src={viteLogo} className="vite" alt="Vite logo" />
            </div>
            <div>
                <h1>{title}</h1>
                <p>
                    Edit <code>{path}</code> and save to test <code>HMR</code>
                </p>
            </div>
            <div>{children}</div>
        </div>
    );
};
