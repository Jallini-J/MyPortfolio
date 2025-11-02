// Main routing component handling navigation between all 6 portfolio pages
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './src/about'
import Contact from './src/contact'
import Education from './src/education'
import Projects from './src/projects'
import Layout from './components/Layout'
import Services from './src/Services'
import './components/Layout.css'

const MainRouter = () => {
return (<div>
    {/* Header navigation and logo */}
    <Layout/>
{/* Route definitions for all portfolio pages */}
<Routes>
{/* Home page*/}
<Route exact path="/" element={<Home />} />
{/* About page  */}
<Route exact path="/about" element={<About  />} />
{/* Education page */}
<Route exact path="/education" element={<Education />} />
{/* Projects page */}
<Route exact path="/projects" element={<Projects />} />
{/* Services page */}
<Route exact path="/services" element={<Services />} />
{/* Contact page */}
<Route exact path="/contact" element={<Contact />} />
</Routes>
{/* Footer */}
<footer className="layout-footer">
<p>&copy; Jallini Joachimpillai 2024. All rights reserved.</p>
</footer>
</div>
)
}
export default MainRouter