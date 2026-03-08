import styled from './About.module.css'

export default function About() {
    return (
        <>
            <section className={styled.aboutMain}>
                <h3>About Me</h3>
                <h4>
                    Frontend developer from Sweden, mostly working with React
                    and Svelte. I've built things for real clients and
                    companies. Outside of work i have a strong interest in
                    cybersecurity and fraud prevention.
                </h4>
            </section>
        </>
    )
}
