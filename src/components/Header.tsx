import styled from 'styled-components'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function Header() {
    return (
        <HeaderBar>
            <HeaderText>
                <HeaderName>Joacim Strandvide</HeaderName>
                <HeaderTitle>Front-End Developer</HeaderTitle>
            </HeaderText>
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
        </HeaderBar>
    )
}

export default Header

const HeaderBar = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #1a1a1a;
    color: #fff;
    width: 100%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

    @media (max-width: 640px) {
        flex-direction: column;
        align-items: center;
        padding: 1rem;
    }
`

const HeaderText = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    font-family: 'Oswald', sans-serif;
    margin-left: 1rem;

    @media (max-width: 640px) {
        margin-bottom: 1rem;
        flex-direction: column;
        margin-left: 0;
        gap: 0;
    }
`

const HeaderName = styled.h1`
    font-size: 2rem;
    color: #fed128;
    text-shadow: 0 0 1vw #fa1c16, 0 0 3vw #fa1c16;

    @media (max-width: 640px) {
        font-size: 3rem;
    }
`

const HeaderTitle = styled.h2`
    font-size: 1.8rem;
    color: #28d7fe;
    text-shadow: 0 0 1vw #1041ff, 0 0 3vw #1041ff;

    @media (max-width: 640px) {
        font-size: 2.5rem;
    }
`

const HeaderLinks = styled.nav`
    display: flex;
    gap: 1rem;
    margin-right: 4rem;

    a {
        text-decoration: none;
        color: #fff;
        padding: 0.4rem 0.8rem;
        background-color: var(--btn);
        border-radius: 5px;
        border: 2px solid #f0f6fa;
        font-size: 1rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        transition: 0.3s ease;
        font-family: 'Oswald', sans-serif;

        svg {
            margin-right: 0.5rem;
        }
    }

    a:hover {
        box-shadow: 0 0 1vw 0.2vw var(--btn);
    }

    @media (max-width: 640px) {
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-right: 0;

        a {
            font-size: 1.4rem;
        }
    }
`
