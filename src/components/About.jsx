import { useState } from 'react'
import styled from './About.module.css'
import Footer from './Footer'

export default function About() {
    const [showToast, setShowToast] = useState(false)

    const handleEmailCopy = () => {
        navigator.clipboard.writeText('contact@strandvide.se')
        setShowToast(true)
        setTimeout(() => setShowToast(false), 4000)
    }
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
                        React and Svelte. I enjoy building useful projects, especially
                        anything involving maps and data. I've built projects
                        for real clients and have a background interest in
                        cybersecurity and privacy.
                    </h4>
                </div>
                <div className={styled.emailButtonWrapper}>
                    <button
                        className={styled.emailButton}
                        onClick={handleEmailCopy}
                    >
                        Contact Me
                    </button>
                </div>
            </section>
            <Footer />
        </>
    )
}
