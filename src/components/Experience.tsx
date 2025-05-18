import { useState } from 'react'
import styles from './Experience.module.css'
import { SiTypescript, SiPostgresql, SiExpress } from 'react-icons/si'
import {
    FaReact,
    FaNodeJs,
    FaLinux,
    FaGitAlt,
    FaDocker,
    FaPhp
} from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { RiNextjsLine } from 'react-icons/ri'
import { GrGraphQl } from 'react-icons/gr'

function Experience() {
    const [selectedTab, setSelectedTab] = useState('experience')

    const skills = (
        <section className={styles.skillsMain}>
            <section className={styles.skillCard}>
                <FaReact />
                <p>React</p>
            </section>
            <section className={styles.skillCard}>
                <SiTypescript />
                <p>Typescript</p>
            </section>
            <section className={styles.skillCard}>
                <IoLogoJavascript />
                <p>Javascript</p>
            </section>
            <section className={styles.skillCard}>
                <FaNodeJs />
                <p>Node.js</p>
            </section>
            <section className={styles.skillCard}>
                <RiNextjsLine />
                <p>Next.js</p>
            </section>
            <section className={styles.skillCard}>
                <FaGitAlt />
                <p>Git</p>
            </section>
            <section className={styles.skillCard}>
                <GrGraphQl />
                <p>GraphQL</p>
            </section>
            <section className={styles.skillCard}>
                <SiExpress />
                <p>Express</p>
            </section>
            <section className={styles.skillCard}>
                <SiPostgresql />
                <p>PostgreSQL</p>
            </section>
            <section className={styles.skillCard}>
                <FaPhp />
                <p>PHP</p>
            </section>
            <section className={styles.skillCard}>
                <FaLinux />
                <p>Linux</p>
            </section>
            <section className={styles.skillCard}>
                <FaDocker />
                <p>Docker</p>
            </section>
        </section>
    )

    const workHistory = (
        <section className={styles.tabsMain}>
            <section className={styles.tabsContent}>
                {/* Example of one card: */}
                <section className={styles.tabsCard}>
                    <h2>Classicrolls.se</h2>
                    <h4>June 2024 - March 2025</h4>
                    <h4>Freelance Project</h4>
                    <h5>Lead Developer</h5>
                    <ul>
                        <li>
                            Collaborated directly with the owner to redesign
                            their existing website.
                        </li>
                        <li>
                            Developed the website using React and Node.js,
                            effectively managing the entire development process
                            from design to finished product.
                        </li>
                        <li>
                            Handled the deployment of the website, including
                            configuring DNS settings and ensuring a smooth
                            transition to the production environment.
                        </li>
                    </ul>
                </section>
                <section className={styles.tabsCard}>
                    <h2>Nilo Collaborations</h2>
                    <h4>January 2024 - June 2024</h4>
                    <h4>Internship</h4>
                    <h5>Front-end Developer</h5>
                    <ul>
                        <li>
                            Collaborated with a team of developers and UX
                            designers to enhance the website’s design and
                            functionality by improving the user experience and
                            resolving bugs.
                        </li>
                        <li>
                            Developed a new data export feature using React,
                            GraphQL, Apollo Client and Docker, enabling the user
                            to easily export data to a PDF.
                        </li>
                        <li>
                            Worked in an agile environment using Jira to track
                            sprint goals and efficiently manage project goals,
                            ensuring that all deadlines were met within the
                            timeframe.
                        </li>
                    </ul>
                </section>
                <section className={styles.tabsCard}>
                    <h2>PlotEye</h2>
                    <h4>August 2023 - October 2023</h4>
                    <h4>Internship</h4>
                    <h5>Front-end Developer</h5>
                    <ul>
                        <li>
                            Developed the website by managing tasks from a
                            Trello board in an agile environment.
                        </li>
                        <li>
                            Implemented a click-to-zoom feature using React and
                            styled-components, enhancing user experience.
                        </li>
                    </ul>
                </section>
            </section>
        </section>
    )

    const educationHistory = (
        <section className={styles.tabsMain}>
            <section className={styles.tabsContent}>
                <section className={styles.tabsCard}>
                    <h2>College</h2>
                    <h4>2021 - 2024</h4>
                    <ul>
                        <li>IT-Högskolan, Front-end Developer</li>
                        <li>
                            Högskolan i Borås: Cybersecurity for connected
                            devices (remote)
                        </li>
                        <li>
                            Kristianstad högskola: App development for Android
                            (remote)
                        </li>
                    </ul>
                    <h2>High School</h2>
                    <h4>2018 - 2021</h4>
                    <ul>
                        <li>
                            Åva Gymnasium, Information and media technologies
                        </li>
                    </ul>
                </section>
            </section>
        </section>
    )

    return (
        <>
            <div className={styles.tabSelect}>
                <div
                    className={`${styles.tab} ${
                        selectedTab === 'experience' ? styles.tabActive : ''
                    }`}
                    onClick={() => setSelectedTab('experience')}
                >
                    Experience
                </div>
                <div
                    className={`${styles.tab} ${
                        selectedTab === 'skills' ? styles.tabActive : ''
                    }`}
                    onClick={() => setSelectedTab('skills')}
                >
                    Skills
                </div>
                <div
                    className={`${styles.tab} ${
                        selectedTab === 'education' ? styles.tabActive : ''
                    }`}
                    onClick={() => setSelectedTab('education')}
                >
                    Education
                </div>
            </div>

            <div>
                {selectedTab === 'experience' && workHistory}
                {selectedTab === 'skills' && skills}
                {selectedTab === 'education' && educationHistory}
            </div>
        </>
    )
}

export default Experience
