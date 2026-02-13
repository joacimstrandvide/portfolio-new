import styled from './Work.module.css'

export default function Work() {
    return (
        <>
            <section className={styled.workMain}>
                <div className={styled.job}>
                    <h5>June 2024 – Present</h5>
                    <h4>Frontend Developer</h4>
                    <p className={styled.company}>Classicrolls</p>
                    <ul>
                        <li>
                            Led the redesign and development of the website in
                            close collaboration with the owner.
                        </li>
                        <li>
                            Develops and maintains a production-ready web
                            application using React and Node.js, focusing on
                            performance, modular architecture, and long-term
                            maintainability.
                        </li>
                        <li>
                            Responsible for deployment to production, including
                            DNS configuration and launch.
                        </li>
                        <li>
                            Performs ongoing improvements, bug fixes, and
                            provides technical support.
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
                            enhance functionality and user flows.
                        </li>
                        <li>
                            Developed a data export feature using React,
                            GraphQL, and Apollo Client, enabling automated PDF
                            generation and reducing manual work.
                        </li>
                        <li>
                            Participated in an agile development process using
                            Jira and sprint planning.
                        </li>
                    </ul>
                </div>

                <div className={styled.job}>
                    <h5>August 2023 – October 2023</h5>
                    <h4>Frontend Developer</h4>
                    <p className={styled.company}>PlotEye – Internship</p>
                    <ul>
                        <li>
                            Developed new functionality in React, including
                            click-to-zoom features that improved map navigation
                            and user interaction.
                        </li>
                        <li>
                            Worked in an agile environment with task management
                            in Trello.
                        </li>
                        <li>Implemented map visualizations using Mapbox.</li>
                    </ul>
                </div>
            </section>
        </>
    )
}
