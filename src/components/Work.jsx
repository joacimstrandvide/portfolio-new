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
                            Redesigned and developed the website from scratch
                            using React and Node.js in collaboration with the
                            owner, achieving Lighthouse scores of 100/100
                            (desktop) and 93/100 (mobile).
                        </li>
                        <li>
                            Migrated from a website builder to a custom-built
                            solution using WebP images, lazy loading, and
                            components, reducing load time by over 50%.
                        </li>
                        <li>
                            Handled deployment including DNS configuration and
                            continue to provide ongoing maintenance and
                            technical support.
                        </li>
                    </ul>
                </div>

                <div className={styled.job}>
                    <h5>January 2024 – June 2024</h5>
                    <h4>Frontend Developer Intern</h4>
                    <p className={styled.company}>Nilo Collaborations</p>
                    <ul>
                        <li>
                            Built a PDF export feature using React, GraphQL,
                            Apollo Client, and Docker, rendering multiple data
                            types including tables and curve graphs, reducing
                            manual processing time by over 95%.
                        </li>
                        <li>
                            Took ownership of the full feature lifecycle
                            independently, from data fetching and layout to
                            styling and final delivery over several weeks,
                            working in an Agile Scrum environment with Jira.
                        </li>
                        <li>
                            Collaborated with a fellow intern on shared
                            debugging tasks, suggesting approaches and working
                            through problems together.
                        </li>
                    </ul>
                </div>

                <div className={styled.job}>
                    <h5>August 2023 – October 2023</h5>
                    <h4>Frontend Developer Intern</h4>
                    <p className={styled.company}>PlotEye</p>
                    <ul>
                        <li>
                            Implemented a "click to zoom" feature using React
                            and Mapbox, allowing users to instantly focus on
                            selected properties, and merged it into the main
                            branch independently.
                        </li>
                        <li>
                            Learned and delivered frontend architecture UML
                            documentation, providing the team with a structured
                            overview of the codebase.
                        </li>
                        <li>
                            Helped onboard multiple waves of new interns into
                            the codebase and Agile workflow, including daily
                            standups and weekly retrospectives.
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}
