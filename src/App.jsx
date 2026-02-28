import { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Work from './components/Work'
import Footer from './components/Footer'

function App() {
    const [activeSection, setActiveSection] = useState('about')

    return (
        <div className="app">
            <Header setActiveSection={setActiveSection} />

            <main className="content">
                {activeSection === 'about' && <About />}
                {activeSection === 'work' && <Work />}
                {activeSection === 'projects' && <Projects />}
            </main>
            <Footer />
        </div>
    )
}

export default App
