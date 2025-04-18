import styled from 'styled-components'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function Header() {
    return (
        <>
            <HeaderMain
                style={{
                    backgroundImage: `url('/images/background.svg')`
                }}
            >
                <HeaderText>
                    <HeaderName>Joacim Strandvide</HeaderName>
                    <HeaderTitle>Front-End Developer</HeaderTitle>
                    <HeaderLinks>
                        <a
                            href="https://github.com/joacimstrandvide"
                            target="blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub /> Github
                        </a>
                        <a href="mailto:contact@strandvide.se">
                            <MdEmail /> Email
                        </a>
                        <a
                            href="https://www.linkedin.com/in/joacim-strandvide/"
                            target="blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin /> Linkedin
                        </a>
                    </HeaderLinks>
                </HeaderText>
            </HeaderMain>
        </>
    )
}

export default Header

const HeaderMain = styled.section`
    padding: 2rem;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    svg {
        font-size: 1.1rem;
    }

    @media (max-width: 640px) {
        flex-direction: column;
        text-align: center;
        height: 60vh;
        padding: 1rem;
    }

    @media (min-width: 1800px) {
        svg {
            font-size: 2rem;
        }
    }
`

const HeaderText = styled.section`
    text-align: center;
    margin-bottom: 7rem;
    font-family: 'Oswald', sans-serif;
    font-optical-sizing: auto;

    @media (max-width: 640px) {
        margin-bottom: 2rem;
    }

    @media (min-width: 1800px) {
        margin-bottom: 10rem;
    }
`

const HeaderName = styled.h1`
    line-height: 4vw;
    font-size: 4rem;
    text-shadow: 0 0 1vw #fa1c16, 0 0 3vw #fa1c16;
    color: #fed128;

    @media (max-width: 640px) {
        font-size: 3rem;
        line-height: 3rem;
        margin-bottom: 1rem;
    }

    @media (min-width: 1800px) {
        font-size: 6rem;
        line-height: 6rem;
    }
`

const HeaderTitle = styled.h2`
    color: #426dfb;
    line-height: 4vw;
    font-size: 3rem;
    text-shadow: 0 0 1vw #1041ff, 0 0 3vw #1041ff;
    color: #28d7fe;

    @media (max-width: 640px) {
        font-size: 2rem;
        line-height: 2.5rem;
        margin-bottom: 1.5rem;
    }

    @media (min-width: 1800px) {
        font-size: 5rem;
        line-height: 5rem;
    }
`

const HeaderLinks = styled.section`
    margin: auto;
    width: 40vw;
    margin-top: 2rem;
    padding: 0.5rem;
    display: flex;
    justify-content: space-evenly;

    a {
        text-decoration: none;
        color: #fff;
        padding: 0.4rem;
        position: relative;
        transition: 0.4s ease;
        font-size: 1.2rem;
        font-weight: 600;
        background-color: var(--btn);
        border-radius: 10px;
        border: 2px solid #f0f6fa;

        svg {
            vertical-align: middle;
        }
    }

    a:hover {
        box-shadow: 0 0 1vw 0.2vw var(--btn);
    }

    @media (max-width: 640px) {
        width: 90vw;
    }

    @media (min-width: 1800px) {
        width: 30vw;

        a {
            font-size: 1.2rem;
            padding: 0.4rem;
        }
    }
`
