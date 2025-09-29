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
            {/* Mina Projekt */}
            <h2 className={styles.projectHeader}>My Projects</h2>
            <section className={styles.projectsMain}>
                {/* Project 4 */}
                <section className={styles.project}>
                    <section className={styles.projectContent}>
                        <section
                            className={styles.projectImage}
                            onClick={() => openModal('images/rolls.webp')}
                        >
                            <img
                                src={'images/rolls.webp'}
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

                {/* Project 3 */}
                <section className={styles.project}>
                    <section className={styles.projectContent}>
                        <section
                            className={styles.projectImage}
                            onClick={() => openModal('images/markers.webp')}
                        >
                            <img
                                src={'images/markers.webp'}
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
                {/* Project 2 */}
                <section className={styles.project}>
                    <section className={styles.projectContent}>
                        <section
                            className={styles.projectImage}
                            onClick={() => openModal('images/forum.webp')}
                        >
                            <img
                                src={'images/forum.webp'}
                                alt="Text Forum"
                                loading="lazy"
                            />
                            <div className={styles.imageOverlay}>
                                Click to View
                            </div>
                        </section>
                        <section className={styles.projectDetails}>
                            <h2>Text Forum</h2>
                            <p>
                                Simple text forum with user authentication and
                                threads
                            </p>
                            <p className={styles.projectTech}>PHP, sqlite</p>
                            <section className={styles.projectLinks}>
                                <a
                                    href="https://github.com/joacimstrandvide/Board-forum"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub /> Source
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
                            onClick={() => openModal('images/country.webp')}
                        >
                            <img
                                src={'images/country.webp'}
                                alt="Text Forum"
                                loading="lazy"
                            />
                            <div className={styles.imageOverlay}>
                                Click to View
                            </div>
                        </section>
                        <section className={styles.projectDetails}>
                            <h2>CountryLookup</h2>
                            <p>
                                Website where you can look up information about specific countries.
                            </p>
                            <p className={styles.projectTech}>HTMl, CSS, JavaScript, API</p>
                            <section className={styles.projectLinks}>
                                <a
                                    href="https://joacimstrandvide.github.io/CountryAPI/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <IoIosGlobe /> Live
                                </a>
                                <a
                                    href="https://github.com/joacimstrandvide/CountryAPI"
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
