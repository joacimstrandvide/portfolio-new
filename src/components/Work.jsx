import styled from './Work.module.css'

export default function Work() {
    return (
        <>
            <section className={styled.workMain}>
                <h3>Work Experience</h3>
                <div className={styled.job}>
                    <h5>June 2024 – Present</h5>
                    <h4>Frontend Developer</h4>
                    <p className={styled.company}>
                        Classicrolls – Contract / Ongoing Freelance
                    </p>
                    <ul>
                        <li>
                            Redesigned the company website in close
                            collaboration with the owner, improving user
                            experience and performance.
                        </li>
                        <li>
                            Developed the entire website independently using
                            React, Vite, and Node.js, resulting in a more
                            efficient system for implementing updates and
                            reducing development time.
                        </li>
                        <li>
                            Handled website deployment, including DNS
                            configuration, achieving 100% uptime at launch.
                        </li>
                        <li>
                            Responsible for ongoing maintenance, improvements,
                            and technical support as needed.
                        </li>
                    </ul>
                </div>

                <div className={styled.job}>
                    <h5>January 2024 – June 2024</h5>
                    <h4>Frontend Developer</h4>
                    <p className={styled.company}>
                        Nilo Collaborations – Internship
                    </p>
                    <ul>
                        <li>
                            Collaborated with developers and UX designers to
                            improve website design and functionality, reducing
                            bugs and improving user experience.
                        </li>
                        <li>
                            Developed a new data-export feature using React,
                            GraphQL, Apollo Client, and Docker, enabling
                            automatic PDF generation.
                        </li>
                        <li>
                            Worked in an Agile environment using Jira to meet
                            sprint goals, helping ensure all sprint deliveries
                            stayed on schedule.
                        </li>
                    </ul>
                </div>

                <div className={styled.job}>
                    <h5>August 2023 – October 2023</h5>
                    <h4>Frontend Developer</h4>
                    <p className={styled.company}>PlotEye – Internship</p>
                    <ul>
                        <li>
                            Developed new website functionality using Trello
                            tasks in an Agile workflow, improving feature
                            delivery speed.
                        </li>
                        <li>
                            Implemented a click-to-zoom feature using React,
                            increasing usability.
                        </li>
                        <li>Worked with Mapbox for mapping functionality.</li>
                    </ul>
                </div>
            </section>
        </>
    )
}
