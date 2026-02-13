import styled from './About.module.css'

export default function About() {
    return (
        <>
            <section className={styled.aboutMain}>
                <h3>About Me</h3>
                <h4>
                    Frontend developer from Sweden specializing in React &
                    Svelte. I build secure, user-friendly web applications with
                    special attention to performance. Outside of coding, I'm
                    interested in cybersecurity, fraud prevention and contribute
                    to OpenStreetMap.
                </h4>
            </section>
        </>
    )
}
