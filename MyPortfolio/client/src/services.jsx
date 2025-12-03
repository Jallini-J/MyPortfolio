// Services page displaying 6 skills
import './services.css';

export default function Services() {
return (
<div className="services-container">
<h2 className="services-title">My Services</h2>

{/* Grid layout for 6 service cards */}
<div className="services-grid">
<div className="service-item">
<span className="service-icon">🗄️</span>
<h3 className="service-name">1. Database Design & Management</h3>
<p className="service-description">Oracle, SQL & data modeling</p>
</div>

<div className="service-item">
<span className="service-icon">&lt;/&gt;</span>
<h3 className="service-name">2. Software Development</h3>
<p className="service-description">C# & Java</p>
</div>

<div className="service-item">
<span className="service-icon">💻</span>
<h3 className="service-name">3. Web Development</h3>
<p className="service-description">HTML, CSS, JavaScript - Frontend & Backend</p>
</div>

<div className="service-item">
<span className="service-icon">📱</span>
<h3 className="service-name">4. Mobile App Development</h3>
<p className="service-description">React Native, cross-platform apps</p>
</div>

<div className="service-item">
<span className="service-icon">📋</span>
<h3 className="service-name">5. Software Documentation</h3>
<p className="service-description">Systems & Application Design, analysis & technical writing</p>
</div>

<div className="service-item">
<span className="service-icon">🧠</span>
<h3 className="service-name">6. Artificial Intelligence Foundations</h3>
<p className="service-description">Machine learning integration & AI-powered apps</p>
</div>
</div>
</div>
);
}
