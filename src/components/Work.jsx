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
                            Built the site from scratch with React and Node.js
                            together with the owner, reaching Lighthouse scores
                            of 100/100 (desktop) and 93/100 (mobile).
                        </li>
                        <li>
                            Moved away from a website builder to a custom
                            solution using WebP images, lazy loading, and
                            components, cutting load time by over 50%.
                        </li>
                        <li>
                            Handled deployment and DNS configuration and have
                            continued doing maintenance and support since.
                        </li>
                    </ul>
                </div>

                <div className={styled.job}>
                    <h5>January 2024 – June 2024</h5>
                    <h4>Frontend Developer Intern</h4>
                    <p className={styled.company}>Nilo Collaborations</p>
                    <ul>
                        <li>
                            Built a PDF export feature in React with GraphQL,
                            Apollo Client, and Docker that renders text, tables and
                            curve graphs, cutting manual processing time by
                            over 95%.
                        </li>
                        <li>
                            Worked on the feature alone from start to finish,
                            from data fetching and layout to styling and
                            delivery, in a Scrum team using Jira.
                        </li>
                        <li>
                            Paired with a fellow intern on debugging, sharing
                            ideas and working through problems together.
                        </li>
                    </ul>
                </div>

                <div className={styled.job}>
                    <h5>August 2023 – October 2023</h5>
                    <h4>Frontend Developer Intern</h4>
                    <p className={styled.company}>PlotEye</p>
                    <ul>
                        <li>
                            Built a click-to-zoom feature in React and Mapbox
                            that lets users instantly jump to a selected
                            property, and merged it into the main branch on my
                            own.
                        </li>
                        <li>
                            Wrote UML documentation for the frontend
                            architecture, giving the team a clearer picture of
                            the codebase.
                        </li>
                        <li>
                            Helped onboard several rounds of new interns into
                            the codebase and the team's Scrum workflow.
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}
