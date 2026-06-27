import styled from './Footer.module.css'

function Footer() {
    return (
        <footer className={styled.footer}>
            <a
                href="https://www.linkedin.com/in/joacim-strandvide/"
                target="_blank"
                rel="noopener noreferrer"
                className={styled.link}
            >
                <img
                    src="./assets/linkedin.png"
                    className={styled.icon}
                    alt="LinkedIn"
                />
                LinkedIn
            </a>

            <a
                href="https://github.com/joacimstrandvide"
                target="_blank"
                rel="noopener noreferrer"
                className={styled.link}
            >
                <img
                    src="./assets/github.png"
                    className={styled.icon}
                    alt="GitHub"
                />
                GitHub
            </a>
        </footer>
    )
}

export default Footer
