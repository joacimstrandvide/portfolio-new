import { useState } from 'react'
import styled from 'styled-components'
import {
    SiTypescript,
    SiPostgresql,
    SiExpress
} from 'react-icons/si'
import { FaReact, FaNodeJs, FaLinux, FaGitAlt, FaDocker } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { RiNextjsLine } from 'react-icons/ri'
import { GrGraphQl } from 'react-icons/gr'

function Experience() {
    const [selectedTab, setSelectedTab] = useState('experience')

    const skills = (
        <>
            {/* Skills */}
            <SkillsMain>
                <SkillCard>
                    <FaReact />
                    <p>React</p>
                </SkillCard>
                <SkillCard>
                    <SiTypescript />
                    <p>Typescript</p>
                </SkillCard>
                <SkillCard>
                    <IoLogoJavascript />
                    <p>Javascript</p>
                </SkillCard>
                <SkillCard>
                    <FaNodeJs />
                    <p>Node.js</p>
                </SkillCard>
                <SkillCard>
                    <RiNextjsLine />
                    <p>Next.js</p>
                </SkillCard>
                <SkillCard>
                    <FaGitAlt />
                    <p>Git</p>
                </SkillCard>
                <SkillCard>
                    <GrGraphQl />
                    <p>GraphQL</p>
                </SkillCard>
                <SkillCard>
                    <SiExpress />
                    <p>Express</p>
                </SkillCard>
                <SkillCard>
                    <SiPostgresql />
                    <p>PostgreSQL</p>
                </SkillCard>
                <SkillCard>
                    <FaLinux />
                    <p>Linux</p>
                </SkillCard>
                <SkillCard>
                    <FaDocker />
                    <p>Docker</p>
                </SkillCard>
                {/* <SkillCard>
                    <SiKubernetes />
                    <p>Kubernetes</p>
                </SkillCard> */}
            </SkillsMain>
        </>
    )

    const workHistory = (
        <>
            {/* Work Experience */}
            <TabsMain>
                <TabsContent>
                    {/* <TabsCard>
                        <h2>Rollsbar.se</h2>
                        <h4>March 2025 - Ongoing</h4>
                        <h4>Freelance Project</h4>
                        <h5>Lead Developer</h5>
                        <ul>
                            <li>
                                Collaborated directly with the owner to design
                                an aesthetically pleasing and user-friendly
                                website.
                            </li>
                            <li>
                                Developed the website using TypeScript and
                                Next.js, ensuring high performance,
                                maintainability, and readability.
                            </li>
                            <li>
                                Handled the deployment of the website, including
                                configuring DNS settings and ensuring a smooth
                                transition to the production environment.
                            </li>
                        </ul>
                    </TabsCard> */}
                    <TabsCard>
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
                                effectively managing the entire development
                                process from design to finished product.
                            </li>
                            <li>
                                Handled the deployment of the website, including
                                configuring DNS settings and ensuring a smooth
                                transition to the production environment.
                            </li>
                        </ul>
                    </TabsCard>
                    <TabsCard>
                        <h2>Nilo Collaborations</h2>
                        <h4>January 2024 - June 2024</h4>
                        <h4>Internship</h4>
                        <h5>Front-end Developer</h5>
                        <ul>
                            <li>
                                Collaborated with a team of developers and UX
                                designers to enhance the website’s design and
                                functionality by improving the user experience
                                and resolving bugs.
                            </li>
                            <li>
                                Developed a new data export feature using React,
                                GraphQL, Apollo Client and Docker, enabling the
                                user to easily export data to a PDF.
                            </li>
                            <li>
                                Worked in an agile environment using Jira to
                                track sprint goals and efficiently manage
                                project goals, ensuring that all deadlines were
                                met within the timeframe.
                            </li>
                        </ul>
                    </TabsCard>
                    <TabsCard>
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
                                Implemented a click-to-zoom feature using React
                                and styled-components, enhancing user
                                experience.
                            </li>
                        </ul>
                    </TabsCard>
                </TabsContent>
            </TabsMain>
        </>
    )

    const educationHistory = (
        <>
            {/* Education */}
            <TabsMain>
                <TabsContent>
                    <TabsCard>
                        <h2>College</h2>
                        <h4>2021 - 2024</h4>
                        <ul>
                            <li>IT-Högskolan, Front-end Developer</li>
                            <li>
                                Högskolan i Borås: Cybersecurity for connected
                                devices (remote)
                            </li>
                            <li>
                                Kristianstad högskola: App development for
                                Android (remote)
                            </li>
                        </ul>
                        <h2>High School</h2>
                        <h4>2018 - 2021</h4>
                        <ul>
                            <li>
                                Åva Gymnasium, Information and media
                                technologies
                            </li>
                        </ul>
                    </TabsCard>
                </TabsContent>
            </TabsMain>
        </>
    )

    return (
        <>
            <TabSelect>
                <Tab
                    $isActive={selectedTab === 'experience'}
                    onClick={() => setSelectedTab('experience')}
                >
                    Experience
                </Tab>
                <Tab
                    $isActive={selectedTab === 'skills'}
                    onClick={() => setSelectedTab('skills')}
                >
                    Skills
                </Tab>
                <Tab
                    $isActive={selectedTab === 'education'}
                    onClick={() => setSelectedTab('education')}
                >
                    Education
                </Tab>
            </TabSelect>

            <div>
                {selectedTab === 'experience' && workHistory}
                {selectedTab === 'skills' && skills}
                {selectedTab === 'education' && educationHistory}
            </div>
        </>
    )
}

export default Experience

const TabSelect = styled.div`
    display: flex;
    justify-content: center;
    cursor: pointer;
    margin: auto;
`

const Tab = styled.div<{ $isActive: boolean }>`
    font-family: 'Oswald', sans-serif;
    font-optical-sizing: auto;
    font-size: 1.3rem;
    padding: 1rem 1.5rem;
    border-bottom: ${(props) =>
        props.$isActive ? '2px solid #4495c9' : 'none'};
    color: ${(props) => (props.$isActive ? '#4495c9' : 'var(--text)')};
    &:last-child {
        margin-right: 0;
    }
`

const TabsMain = styled.section`
    margin-top: 1rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-wrap: wrap;

    @media (max-width: 640px) {
        width: 95%;
        margin: auto;
    }
`
const TabsContent = styled.section`
    background-color: var(--bg);
    box-shadow: rgba(15, 15, 15, 0.25) 0px 13px 27px -5px,
        rgba(23, 23, 23, 0.3) 0px 8px 16px -8px;
    margin: 1rem auto;
    padding: 2rem;
    position: relative;
    width: 60%;
    border-radius: 20px;
    color: var(--text);

    @media (max-width: 640px) {
        width: 100%;
        margin: 1rem auto;
    }
`

const TabsCard = styled.section`
    margin-bottom: 3rem;
    font-family: 'Oswald', sans-serif;
    font-optical-sizing: auto;
    h2 {
        font-weight: 500;
        font-size: 1.5rem;
    }

    h4 {
        margin-top: -1rem;
        font-weight: 300;
        opacity: 0.7;
    }

    h5 {
        font-weight: 600;
        font-size: 1.1rem;
    }

    ul li {
        font-weight: 300;
    }
`
const SkillsMain = styled.section`
    margin: 3rem;
    padding: 1rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 1rem;
    border-radius: 2rem;
    box-shadow: rgba(15, 15, 15, 0.25) 0px 13px 27px -5px,
        rgba(23, 23, 23, 0.3) 0px 8px 16px -8px;

    @media (min-width: 640px) {
        & > section {
            flex: 1 1 calc(15% - 1.2rem);
            max-width: 10rem;
        }
    }

    @media (max-width: 640px) {
        width: 90%;
        margin: 1rem auto;
        padding: 0rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }
`

const SkillCard = styled.section`
    background: var(--bg);
    padding: 1em;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    p {
        margin: 0;
        color: var(--text);
        font-size: 1rem;
        font-family: 'Oswald', sans-serif;
        font-optical-sizing: auto;
        font-weight: 500;
    }

    svg {
        font-size: 2rem;
        color: var(--text);
    }

    @media (max-width: 640px) {
        width: 100%;
        margin: 0;
    }
`
