import styled from './About.module.css'

export default function About() {
    return (
        <>
            <section className={styled.aboutMain}>
                <h3>About Me</h3>
                <h4>
                    Frontend developer from Sweden with a focus on React &
                    Svelte. I build web applications with a focus on performance
                    and security. Beyond coding, i have a strong interest in
                    cybersecurity and fraud prevention. I also contribute to
                    OpenStreetMap in my spare time.
                </h4>
            </section>
        </>
    )
}
