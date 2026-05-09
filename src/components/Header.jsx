import styled from './Header.module.css'

export default function Header({ setActiveSection }) {
    return (
        <>
            <header className={styled.headermain}>
                <h1>
                    Joacim Strandvide <strong>Frontend Developer</strong>
                </h1>
            </header>
        </>
    )
}
