import styles from "./footer.module.css";

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.readDocs}>
                Click on the Vite and React logos to learn more
            </p>
        </footer>
    );
};
