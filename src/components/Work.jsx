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
                            Built a production-ready website using React and
                            Node.js with a focus on performance and structure.
                        </li>
                        <li>
                            Optimized the website for faster loading times
                            through WebP image conversion and performance
                            testing with Lighthouse.
                        </li>
                        <li>
                            Responsible for deployment, DNS configuration,
                            launch, and ongoing maintenance and technical
                            support.
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
                            Developed a data export feature using React,
                            GraphQL, and Apollo Client that automatically
                            generates PDF reports from project data, saving time
                            and reducing risk of errors.
                        </li>
                        <li>
                            Collaborated with developers and UX designers in an
                            agile development process using Jira and sprint
                            planning.
                        </li>
                    </ul>
                </div>

                <div className={styled.job}>
                    <h5>August 2023 – October 2023</h5>
                    <h4>Frontend Developer</h4>
                    <p className={styled.company}>PlotEye – Internship</p>
                    <ul>
                        <li>
                            Developed click-to-zoom functionality using React
                            and Mapbox that improved user interaction during map
                            navigation.
                        </li>
                        <li>
                            Worked in an agile environment with task management
                            in Trello.
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}
