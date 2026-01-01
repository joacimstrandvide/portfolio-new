import styled from './About.module.css'

export default function About() {
    return (
        <>
            <section className={styled.aboutMain}>
                <h3>About Me</h3>
                <h4>
                    Hello, I'm Joacim, a software engineer with a focus on
                    frontend from Sweden with experience building real-world
                    projects through internships and freelance work. I have a
                    long-standing interest in cybersecurity and spend time
                    exploring the world of scam baiting and fraud prevention. I
                    also enjoy working with more hands-on tech, such as
                    installing operating systems on old laptops and working with
                    3D printers. Furthermore, I really like open source and
                    enjoy contributing to OpenStreetMap.
                </h4>
            </section>
        </>
    )
}
