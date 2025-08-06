import { FaLinkedin, FaGithub } from 'react-icons/fa'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.headerBar}>
            <div className={styles.headerText}>
                <h1 className={styles.headerName}>Joacim Strandvide</h1>
                <h2 className={styles.headerTitle}>Front-end Developer</h2>
            </div>
            <nav className={styles.headerLinks}>
                <a
                    href="https://github.com/joacimstrandvide"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub /> Github
                </a>
                <a
                    href="https://www.linkedin.com/in/joacim-strandvide/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin /> Linkedin
                </a>
            </nav>
        </header>
    )
}

export default Header
