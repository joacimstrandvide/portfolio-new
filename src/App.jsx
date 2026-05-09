import { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'

function App() {
    return (
        <div className="app">
            <Header />

            <main className="content">
                <About />
                <Projects />
            </main>
        </div>
    )
}

export default App
