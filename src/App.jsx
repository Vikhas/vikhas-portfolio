import React from "react";
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Publications from './components/Publications'
import Contact from './components/Contact'
import { siteMeta } from './data'

export default function App() {
  return (
    <div className="font-sans">
      <Navbar name={siteMeta.name} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Publications />
        <Contact />
      </main>
      <footer className="text-center py-6 text-gray-500">
        © {new Date().getFullYear()} {siteMeta.name}
      </footer>
    </div>
  )
}
