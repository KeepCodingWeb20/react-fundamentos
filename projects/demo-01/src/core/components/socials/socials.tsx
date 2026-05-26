import { SOCIALS } from "./socials-data";

export const Socials: React.FC = () => {
    return (
        <div id="social">
            <svg className="icon" role="presentation" aria-hidden="true">
                <use href="/icons.svg#social-icon"></use>
            </svg>
            <h2>Connect with us</h2>
            <p>Join the Vite community</p>
            <ul>
                {SOCIALS.map(({ name, url, iconId }) => (
                    <li key={name}>
                        <a href={url} target="_blank">
                            <svg
                                className="button-icon"
                                role="presentation"
                                aria-hidden="true"
                            >
                                <use href={"/icons.svg#" + iconId}></use>
                            </svg>
                            {name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
