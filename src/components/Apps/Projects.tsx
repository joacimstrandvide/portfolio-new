import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { projects } from '../content/projects'

type ProjectsProps = {
    isMaximized: boolean
}

type Project = {
    name: string
    description: string
    imagePath: string
    techStack: string
    githubLink?: string
    websiteLink?: string
}

const Projects = ({ isMaximized }: ProjectsProps) => {
    return (
        <div
            className={`flex flex-col gap-5 p-4 w-full h-[100%] overflow-y-scroll ${
                isMaximized ? 'pb-[100px] sm:pb-[50px]' : ''
            }`}
        >
            {(projects as Project[]).map((project, i) => (
                <div
                    className=" flex sm:flex-row flex-col sm:flex:row gap-7 bg-[#eaeaeaaf] w-full p-4"
                    key={i}
                >
                    <div className=" flex flex-col sm:w-1/2 items-center">
                        <img
                            src={project.imagePath}
                            alt="project image"
                            className={`${isMaximized ? 'w-[100%]' : 'w-full'}`}
                        />
                        <div className=" sm:flex hidden m-3 mx-auto gap-2 flex-wrap justify-center">
                            {project.techStack.split(',').map((tech, j) => (
                                <span
                                    key={j}
                                    className="bg-[#d1d5db] text-xs px-2 py-1 rounded m-1"
                                >
                                    {tech.trim()}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="sm:w-[47%] flex flex-col gap-2 justify-center pe-5">
                        <h2 className=" font-extrabold text-2xl">
                            {project.name}
                        </h2>
                        <p className=" text-sm">{project.description}</p>
                        <div className=" sm:hidden flex m-3 mx-auto gap-2 flex-wrap justify-center">
                            {project.techStack.split(',').map((tech, j) => (
                                <span
                                    key={j}
                                    className="bg-[#d1d5db] text-xs px-2 py-1 rounded m-1"
                                >
                                    {tech.trim()}
                                </span>
                            ))}
                        </div>
                        <div className="mt-2 flex justify-center sm:justify-end gap-5">
                            {project.githubLink && (
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FiGithub
                                        size="24px"
                                        color="black"
                                        className="hover:cursor-pointer"
                                    />
                                </a>
                            )}
                            {project.websiteLink && (
                                <a
                                    href={project.websiteLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FiExternalLink
                                        size="24px"
                                        color="black"
                                        className="hover:cursor-pointer"
                                    />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Projects
