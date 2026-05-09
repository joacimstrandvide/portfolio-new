import styled from './About.module.css'
import Footer from './Footer'

export default function About() {
    return (
        <>
            <section className={styled.aboutMain}>
                <div className={styled.aboutText}>
                    <h3>
                        <img
                            src="./assets/about.png"
                            className={styled.icon}
                            alt="About"
                        />
                        About Me
                    </h3>
                    <h4>
                        Frontend developer from Sweden, mostly working with
                        React and Svelte. I've built things for real clients and
                        companies. I also have a strong interest in
                        cybersecurity and fraud prevention.
                    </h4>
                </div>
            </section>
            <Footer />
        </>
    )
}
