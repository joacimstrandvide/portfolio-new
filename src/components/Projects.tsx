import { useState } from 'react'
import { IoIosGlobe } from 'react-icons/io'
import { FaGithub } from 'react-icons/fa'
import styles from './Projects.module.css'

function Projects() {
    const [modalImage, setModalImage] = useState<string | null>(null)

    const openModal = (imageSrc: string) => {
        setModalImage(imageSrc)
    }

    const closeModal = () => {
        setModalImage(null)
    }

    return (
        <>
            {/* My Projects */}
            <h2 className={styles.projectHeader}>My Projects</h2>
            <section className={styles.projectsMain}>
                {/* Project 4 */}
                <section className={styles.project}>
                    <section className={styles.projectContent}>
                        <section
                            className={styles.projectImage}
                            onClick={() => openModal('/images/20.webp')}
                        >
                            <img src={'/images/20-front.webp'} alt="rollsbar" />
                            <div className={styles.imageOverlay}>
                                Click to View
                            </div>
                        </section>
                        <section className={styles.projectDetails}>
                            <h2>DMARC Viewer</h2>
                            <p>
                                Site for uploading and viewing DMARC XML
                                reports.
                            </p>
                            <p className={styles.projectTech}>
                                Next.js, Typescript, Tailwind
                            </p>
                            <section className={styles.projectLinks}>
                                <a
                                    href="https://joacimstrandvide.github.io/dmarc-viewer/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <IoIosGlobe /> Live
                                </a>
                                <a
                                    href="https://github.com/joacimstrandvide/dmarc-viewer"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub /> Source
                                </a>
                            </section>
                        </section>
                    </section>
                </section>

                {/* Project 2 */}
                <section className={styles.project}>
                    <section className={styles.projectContent}>
                        <section
                            className={styles.projectImage}
                            onClick={() => openModal('/images/18.webp')}
                        >
                            <img
                                src={'/images/18-front.webp'}
                                alt="classicrolls"
                                loading="lazy"
                            />
                            <div className={styles.imageOverlay}>
                                Click to View
                            </div>
                        </section>
                        <section className={styles.projectDetails}>
                            <h2>Classicrolls</h2>
                            <p>
                                I developed and assisted with deploying a
                                website for a company specializing in
                                Rolls-Royce rentals for weddings and other
                                special occasions.
                            </p>
                            <p className={styles.projectTech}>React, Node.js</p>
                            <section className={styles.projectLinks}>
                                <a
                                    href="https://www.amaraldfoto.se"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <IoIosGlobe /> Live
                                </a>
                            </section>
                        </section>
                    </section>
                </section>

                {/* Project 1 */}
                <section className={styles.project}>
                    <section className={styles.projectContent}>
                        <section
                            className={styles.projectImage}
                            onClick={() => openModal('/images/15.webp')}
                        >
                            <img
                                src={'/images/15-front.webp'}
                                alt="SwedishMarkers"
                                loading="lazy"
                            />
                            <div className={styles.imageOverlay}>
                                Click to View
                            </div>
                        </section>
                        <section className={styles.projectDetails}>
                            <h2>SwedishMarkers</h2>
                            <p>
                                Interactive map where you can find points of
                                interests
                            </p>
                            <p className={styles.projectTech}>
                                React, react-leaflet, Node.js
                            </p>
                            <section className={styles.projectLinks}>
                                <a
                                    href="https://joacimstrandvide.github.io/SwedishMarkers/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <IoIosGlobe /> Live
                                </a>
                                <a
                                    href="https://github.com/joacimstrandvide/SwedishMarkers"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub /> Source
                                </a>
                            </section>
                        </section>
                    </section>
                </section>
            </section>

            {/* Modal */}
            {modalImage && (
                <div className={styles.modal}>
                    <div className={styles.modalOverlay} onClick={closeModal} />
                    <button className={styles.closeButton} onClick={closeModal}>
                        &times;
                    </button>
                    <img src={modalImage} alt="larger" />
                </div>
            )}
        </>
    )
}

export default Projects
