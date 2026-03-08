import styled from './Work.module.css'

export default function Work() {
    return (
        <>
            <section className={styled.workMain}>
                <div className={styled.job}>
                    <h5>June 2024 – Present</h5>
                    <h4>Freelance Frontend Developer</h4>
                    <p className={styled.company}>Classicrolls.se</p>
                    <ul>
                        <li>
                            Collaborated directly with the owner to redesign and
                            develop the website end-to-end.
                        </li>
                        <li>
                            Built the website using React and Node.js, achieving
                            a perfect 100 Lighthouse score across all desktop
                            categories and an average of 93 on mobile through
                            WebP images, lazy loading and performance
                            improvements.
                        </li>
                        <li>
                            Handled deployment including DNS configuration and
                            uptime, and continue to provide ongoing maintenance
                            and technical support.
                        </li>
                    </ul>
                </div>

                <div className={styled.job}>
                    <h5>January 2024 – June 2024</h5>
                    <h4>Frontend Developer Intern</h4>
                    <p className={styled.company}>Nilo Collaborations</p>
                    <ul>
                        <li>
                            Independently drove the PDF export feature from
                            start through to completion, working through
                            problems and collaborating with senior developers
                            when needed.
                        </li>
                        <li>
                            Built an automated PDF export feature using React,
                            GraphQL, Apollo Client and Docker, reducing report
                            generation time from up to an hour of manual copying
                            to seconds.
                        </li>
                        <li>
                            Worked in an Agile Scrum environment using Jira for
                            task managment.
                        </li>
                    </ul>
                </div>

                <div className={styled.job}>
                    <h5>August 2023 – October 2023</h5>
                    <h4>Frontend Developer Intern</h4>
                    <p className={styled.company}>PlotEye</p>
                    <ul>
                        <li>
                            Implemented automatic click-to-zoom functionality
                            with React and Mapbox, enabling users to instantly
                            focus on selected properties instead of manually
                            zooming and panning.
                        </li>
                        <li>
                            Created frontend architecture UML documentation for
                            the website.
                        </li>
                        <li>
                            Mentored new interns on codebase and workflows,
                            helping reduce their onboarding time.
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}
