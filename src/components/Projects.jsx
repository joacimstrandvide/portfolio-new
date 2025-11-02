import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { projects } from '../content/projects'
import styled from './Projects.module.css'

function Projects() {
    return (
        <main className={styled.projectsContainer}>
            {projects.map((project, i) => (
                <div className={styled.projectCard} key={i}>
                    <div className={styled.projectImageContainer}>
                        <img
                            src={project.imagePath}
                            alt={project.name}
                            className={styled.projectImage}
                            loading='lazy'
                        />
                        <div className={styled.techStackDesktop}>
                            {project.techStack.split(',').map((tech, j) => (
                                <span key={j} className={styled.techTag}>
                                    {tech.trim()}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className={styled.projectContent}>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        <div className={styled.techStackMobile}>
                            {project.techStack.split(',').map((tech, j) => (
                                <span key={j} className={styled.techTag}>
                                    {tech.trim()}
                                </span>
                            ))}
                        </div>
                        <div className={styled.links}>
                            {project.githubLink && (
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FiGithub size="24px" />
                                </a>
                            )}
                            {project.websiteLink && (
                                <a
                                    href={project.websiteLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FiExternalLink size="24px" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </main>
    )
}

export default Projects
