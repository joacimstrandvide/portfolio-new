import styled from './About.module.css'

export default function About() {
    return (
        <>
            <section className={styled.aboutMain}>
                <h3>About Me</h3>
                <h4>
                    Frontend developer from Sweden with a focus on React &
                    Svelte. I build performant, secure web applications and have
                    a background interest in cybersecurity and fraud prevention.
                    I also contribute to OpenStreetMap in my spare time.
                </h4>
            </section>
        </>
    )
}
