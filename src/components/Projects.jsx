import { projects } from '../content/projects'
import styled from './Projects.module.css'

function Projects() {
    return (
        <div className={styled.projectsContainer}>
            {projects.map((project, i) => (
                <div className={styled.projectCard} key={i}>
                    <div className={styled.projectImageContainer}>
                        <img
                            src={project.imagePath}
                            alt={project.name}
                            className={styled.projectImage}
                            loading="lazy"
                        />
                    </div>

                    <div className={styled.projectContent}>
                        <div className={styled.headerRow}>
                            <h2>{project.name}</h2>
                            <div className={styled.links}>
                                {project.githubLink && (
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >Github
                                        <img
                                            src="/assets/github.png"
                                            className={styled.icon}
                                            alt="GitHub"
                                        />
                                    </a>
                                )}
                                {project.websiteLink && (
                                    <a
                                        href={project.websiteLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >Live
                                        <img
                                            src="/assets/world.png"
                                            className={styled.icon}
                                            alt="online"
                                        />
                                    </a>
                                )}
                            </div>
                        </div>

                        <p>{project.description}</p>

                        <div className={styled.techStack}>
                            {project.techStack.split(',').map((tech, j) => (
                                <span key={j} className={styled.techTag}>
                                    {tech.trim()}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Projects
