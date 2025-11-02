// Education page displaying academic background and qualifications
import './education.css';

export default function Education() {
return (
<div className="education-container">
<h2 className="education-title">Education</h2>

{/* Current degree program with course list */}
<div className="education-entry">
<h3 className="education-degree">Software Engineering Technology AI (Co-op) Advanced Diploma</h3>
<p className="education-date">Sept 2024 - Present</p>
<p className="education-school">Centennial College, Toronto, ON</p>
<h4 className="courses-title">Current Courses:</h4>
<ul className="courses-list">
<li>Introduction to AI</li>
<li>AI Systems Design</li>
<li>Java Programming</li>
<li>Linear Algebra & Statistics</li>
<li>Web Application Development</li>
<li>Employment Preparation</li>
</ul>
</div>

{/* Previous diploma program */}
<div className="education-entry">
<h3 className="education-degree">Social Service Worker Diploma</h3>
<p className="education-date">Sept 2018 – 2020</p>
<p className="education-school">George Brown College, Toronto, ON</p>
</div>
</div>
);
}