import { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'

function App() {
    const [activeSection, setActiveSection] = useState('about')

    return (
        <div className="app">
            <Header setActiveSection={setActiveSection} />

            <main className="content">
                {activeSection === 'about' && <About />}
                {activeSection === 'projects' && <Projects />}
            </main>
        </div>
    )
}

export default App
