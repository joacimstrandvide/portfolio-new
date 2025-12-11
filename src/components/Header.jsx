import styled from './Header.module.css'

export default function Header({ setActiveSection }) {
    return (
        <>
            <header className={styled.headermain}>
                <h1>
                    Joacim Strandvide <strong>Software Engineer</strong>
                </h1>
            </header>

            <menu className={styled.headermenu}>
                <div
                    className={styled.menuitem}
                    onClick={() => setActiveSection('about')}
                >
                    <img
                        src="./assets/about.png"
                        className={styled.icon}
                        alt="About"
                    />
                    <h3>About Me</h3>
                </div>

                <div
                    className={styled.menuitem}
                    onClick={() => setActiveSection('work')}
                >
                    <img
                        src="./assets/work.png"
                        className={styled.icon}
                        alt="Work"
                    />
                    <h3>Work</h3>
                </div>

                <div
                    className={styled.menuitem}
                    onClick={() => setActiveSection('projects')}
                >
                    <img
                        src="./assets/projects.png"
                        className={styled.icon}
                        alt="Projects"
                    />
                    <h3>Projects</h3>
                </div>

                <div className={styled.menuitem}>
                    <img
                        src="./assets/linkedin.png"
                        className={styled.icon}
                        alt="LinkedIn"
                    />
                    <h3>
                        <a
                            href="https://www.linkedin.com/in/joacim-strandvide/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    </h3>
                </div>

                <div className={styled.menuitem}>
                    <img
                        src="./assets/github.png"
                        className={styled.icon}
                        alt="GitHub"
                    />
                    <h3>
                        <a
                            href="https://github.com/joacimstrandvide"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </h3>
                </div>
            </menu>
        </>
    )
}
