import { Link } from 'react-router-dom';
import './Home.css';
/**
 * Home.jsx - Landing page component for portfolio website
 * Displays welcome message, mission statement, and navigation buttons
 */

/**
 * Home component renders the main landing page with mission statement
 * and call-to-action buttons for navigation
 */
export default function Home() {
return (
<div className="home-container">
<h2 className="home-title">Welcome to my portfolio!</h2>
<div className="mission-section">
<h3 className="mission-title">Mission Statement</h3>
<p className="home-text">
My mission is to create AI solutions that improve social systems and bridge the gap between technological innovation and human needs, while continuing to grow as a software engineering student.
</p>
</div>

<div className="cta-section">
<h3 className="cta-title">Explore My Portfolio</h3>
<div className="cta-buttons">
<Link to="/about" className="cta-button">
Learn More About Me
</Link>
<Link to="/projects" className="cta-button">
View My Work
</Link>
<Link to="/contact" className="cta-button">
Get In Touch
</Link>
</div>
</div>
</div>
);
}
