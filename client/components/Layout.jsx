// Header layout component with custom logo and navigation bar
import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

export default function Layout() {
return (
<div className="layout-container">
{/* Header section with logo and name */}
<div className="header-section">
<div className="logo">JJ</div>
<h1 className="layout-title">Jallini Joachimpillai</h1>
</div>

{/* Navigation links to all portfolio pages */}
<nav className="layout-nav">
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/education">Education</Link>
<Link to="/projects">Projects</Link>
<Link to="/services">Services</Link>
<Link to="/contact">Contact</Link>
</nav>

{/* Visual divider between header and content */}
<hr className="layout-divider" />
</div>
);
}