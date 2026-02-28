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
                            Built and deployed a car showcase website using
                            React and Node.js, achieving a perfect 100
                            Lighthouse score across all desktop categories and
                            an average of 93 on mobile through WebP optimization
                            and performance tuning.
                        </li>
                        <li>
                            Handled the full deployment pipeline including DNS
                            configuration and launch, and continue to provide
                            ongoing maintenance and technical support.
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
                            Independently drove the PDF export feature from
                            initial research through to completion, working
                            through problems and collaborating with senior
                            developers when needed.
                        </li>
                        <li>
                            Built an automated PDF export feature using React,
                            GraphQL, and Apollo Client, reducing report
                            generation time from up to an hour of manual copying
                            to seconds.
                        </li>
                        <li>
                            Worked in an Agile Scrum environment using Jira,
                            contributing to the full development cycle from task
                            assignment to deployment.
                        </li>
                    </ul>
                </div>

                <div className={styled.job}>
                    <h5>August 2023 – October 2023</h5>
                    <h4>Frontend Developer</h4>
                    <p className={styled.company}>PlotEye – Internship</p>
                    <ul>
                        <li>
                            Implemented automatic click-to-zoom functionality
                            with React and Mapbox, enabling users to instantly
                            focus on selected properties instead of manually
                            zooming and panning.
                        </li>
                        <li>
                            Independently learned and delivered a UML diagram
                            for the frontend architecture with no prior
                            experience of UML.
                        </li>
                        <li>
                            Helped onboard new interns and worked in an Agile
                            Scrum environment with daily standups and weekly
                            retrospectives, using Trello for task management.
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}
