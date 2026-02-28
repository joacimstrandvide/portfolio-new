import { useState } from 'react'
import styles from './Footer.module.css'

function Footer() {
    const [showToast, setShowToast] = useState(false)

    const handleEmailCopy = () => {
        navigator.clipboard.writeText('contact@strandvide.se')
        setShowToast(true)
        setTimeout(() => setShowToast(false), 4000)
    }

    return (
        <footer className={styles.footer}>
            <a
                href="https://www.linkedin.com/in/joacim-strandvide/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
            >
                <img
                    src="./assets/linkedin.png"
                    className={styles.icon}
                    alt="LinkedIn"
                />
                LinkedIn
            </a>

            <button className={styles.link} onClick={handleEmailCopy}>
                <img
                    src="./assets/mail.png"
                    className={styles.icon}
                    alt="Email"
                />
                Email
            </button>

            <a
                href="https://github.com/joacimstrandvide"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
            >
                <img
                    src="./assets/github.png"
                    className={styles.icon}
                    alt="GitHub"
                />
                GitHub
            </a>

            {showToast && (
                <div className={styles.toast}>Email copied to clipboard!</div>
            )}
        </footer>
    )
}

export default Footer
