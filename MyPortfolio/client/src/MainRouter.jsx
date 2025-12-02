import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from '../components/Layout.jsx'
import Home from '../components/Home.jsx'
import About from './about.jsx'
import Contact from './contact.jsx'
import Education from './education.jsx'
import Projects from './projects.jsx'
import Services from './services.jsx'
import Signup from './auth/Signup.jsx'
import Signin from './auth/Signin.jsx'

const MainRouter = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/education" element={<Education />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Route>

    <Route path="/auth/signup" element={<Signup />} />
    <Route path="/auth/signin" element={<Signin />} />
  </Routes>
)

export default MainRouter
