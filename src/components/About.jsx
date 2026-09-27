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
                        Frontend developer from Sweden. I began programming in
                        2015 and mostly work with React and Svelte these days. I
                        enjoy building projects involving maps and data.
                        I also have a longstanding interest in cybersecurity,
                        privacy and open source.
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
            {showToast && (
                <div className={styled.toast}>Email copied to clipboard!</div>
            )}
            <Footer />
        </>
    )
}
