import { useState } from 'react'
import { IoIosGlobe } from 'react-icons/io'
import { FaGithub } from 'react-icons/fa'
import styled from 'styled-components'

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
            <ProjectHeader>My Projects</ProjectHeader>
            <ProjectsMain>
                {/* Project 4 */}
                <Project>
                    <ProjectContent>
                        <ProjectImage
                            onClick={() => openModal('/images/20.webp')}
                        >
                            <img src={'/images/20-front.webp'} alt="rollsbar" />
                            <ImageOverlay>Click to View</ImageOverlay>
                        </ProjectImage>
                        <ProjectDetails>
                            <h2>DMARC Viewer</h2>
                            <p>
                                Site for uploading and viewing DMARC XML
                                reports.
                            </p>
                            <ProjectTech>
                                Next.js, Typescript, Tailwind
                            </ProjectTech>
                            <ProjectLinks>
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
                            </ProjectLinks>
                        </ProjectDetails>
                    </ProjectContent>
                </Project>
                {/* Project 3 */}
                <Project>
                    <ProjectContent>
                        <ProjectImage
                            onClick={() => openModal('/images/19.webp')}
                        >
                            <img src={'/images/19-front.webp'} alt="rollsbar" />
                            <ImageOverlay>Click to View</ImageOverlay>
                        </ProjectImage>
                        <ProjectDetails>
                            <h2>Rollsbar</h2>
                            <p>
                                I designed, developed, and deployed a website
                                for a company selling Whiskybars made out of
                                Rolls-Royce radioator grills.
                            </p>
                            <ProjectTech>
                                Next.js, Typescript, Tailwind
                            </ProjectTech>
                            <ProjectLinks>
                                <a
                                    href="https://www.rollsbar.se/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <IoIosGlobe /> Live
                                </a>
                            </ProjectLinks>
                        </ProjectDetails>
                    </ProjectContent>
                </Project>
                {/* Project 2 */}
                <Project>
                    <ProjectContent>
                        <ProjectImage
                            onClick={() => openModal('/images/18.webp')}
                        >
                            <img
                                src={'/images/18-front.webp'}
                                alt="classicrolls"
                                loading="lazy"
                            />
                            <ImageOverlay>Click to View</ImageOverlay>
                        </ProjectImage>
                        <ProjectDetails>
                            <h2>Classicrolls</h2>
                            <p>
                                I developed and assisted with deploying a
                                website for a company specializing in
                                Rolls-Royce rentals for weddings and other
                                special occasions.
                            </p>
                            <ProjectTech>
                                React, Node.js, styled-components
                            </ProjectTech>
                            <ProjectLinks>
                                <a
                                    href="https://www.classicrolls.se"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <IoIosGlobe /> Live
                                </a>
                            </ProjectLinks>
                        </ProjectDetails>
                    </ProjectContent>
                </Project>
                {/* Project 1 */}
                <Project>
                    <ProjectContent>
                        <ProjectImage
                            onClick={() => openModal('/images/15.webp')}
                        >
                            <img
                                src={'/images/15-front.webp'}
                                alt="SwedishMarkers"
                                loading="lazy"
                            />
                            <ImageOverlay>Click to View</ImageOverlay>
                        </ProjectImage>
                        <ProjectDetails>
                            <h2>SwedishMarkers</h2>
                            <p>
                                Interactive map where you can find points of
                                interests
                            </p>
                            <ProjectTech>
                                React, react-leaflet, Node.js, PostgreSQL,
                                Supabase
                            </ProjectTech>
                            <ProjectLinks>
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
                            </ProjectLinks>
                        </ProjectDetails>
                    </ProjectContent>
                </Project>
            </ProjectsMain>

            {/* Modal */}
            {modalImage && (
                <Modal>
                    <ModalOverlay onClick={closeModal} />
                    <CloseButton onClick={closeModal}>&times;</CloseButton>
                    <img src={modalImage} alt="larger" />
                </Modal>
            )}
        </>
    )
}

export default Projects

const ProjectHeader = styled.h2`
    margin-left: 2rem;
    font-size: 1.8rem;
    font-weight: 600;
    font-family: 'Oswald', sans-serif;
    font-optical-sizing: auto;
    margin-top: 5rem;
    color: var(--text);

    @media (max-width: 640px) {
        text-align: center;
        margin-left: 0;
    }
`
const ProjectTech = styled.p`
    font-weight: 500;
`
const ProjectsMain = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px;
    grid-auto-flow: row;
    margin: 5rem 0.8rem 5rem 0.8rem;
    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`
const Project = styled.section`
    color: var(--text);
`
const ProjectContent = styled.section`
    display: flex;

    @media (max-width: 640px) {
        display: block;
    }
`
const ProjectImage = styled.section`
    flex: 1;
    overflow: hidden;
    position: relative;
    cursor: pointer;

    img {
        width: 100%;
        height: auto;
        display: block;
    }

    &:hover div {
        opacity: 1;
    }
`
const ImageOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 2rem;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    font-family: 'Oswald', sans-serif;
    font-optical-sizing: auto;
`
const ProjectDetails = styled.section`
    flex: 1;
    padding: 10px;
    font-family: 'Oswald', sans-serif;
    font-optical-sizing: auto;
    line-height: 1.6;
`
const ProjectLinks = styled.section`
    a {
        margin: 5px 8px 0px 0px;
        padding: 0.5rem;
        color: var(--text);
        font-size: 1.2rem;
        font-weight: 600;
        text-decoration: none;
        transition: 0.4s;
        border: 2px solid var(--text);
        border-radius: 10px;
    }

    a:hover {
        box-shadow: 2px 2px 2px 0px var(--text);
    }
`
const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;

    img {
        max-width: 90%;
        max-height: 90%;
        border-radius: 8px;
    }
`
const ModalOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: transparent;
`
const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    font-size: 2rem;
    color: #fff;
    cursor: pointer;
    z-index: 1001;

    &:hover {
        color: red;
    }
`
