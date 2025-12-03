// About page displaying personal bio, profile photo, and resume download
import profilePhoto from './assets/mycard.jpeg';
import resumePDF from './assets/Web_App_Resume.pdf';
import './about.css';

export default function About() {
return (
<div className="about-container">
<h2 className="about-title">About Myself</h2>
<div className="about-content-box">
<p className="about-text">
My name is Jallini Joachimpillai, and I am a second-year student in the Software Engineering Technology - Artificial Intelligence Co-op Program at Centennial College. With a background in Social Work, I am transitioning into the tech field to explore the intersection of technology and social impact. My career goal is to design and develop AI solutions that improve social systems and contribute to the betterment of society.
</p>
<p>This is a CI/CD test update.</p>

<div className="resume-section">
<a href={resumePDF} download="Jallini_Joachimpillai_Resume.pdf" className="resume-link">
📄 Download My Resume 
</a>
</div>
<img src={profilePhoto} alt="Photo headshot" className="profile-image" />
</div>
</div>
);
}