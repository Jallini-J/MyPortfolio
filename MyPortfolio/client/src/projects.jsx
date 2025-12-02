// Projects showcase page displaying 3 portfolio projects with images
import './projects.css';
import databaseImage from './assets/database.png';
import healthcareImage from './assets/healthcare_app_image.png';
import pokemonImage from './assets/pokemon.png';

export default function Projects() {
return (
<div className="projects-container">
<h2 className="projects-title">My Projects</h2>

{/* Project 1: Pokédex Web App */}
<div className="project-entry">
<h3 className="project-name">1. Pokédex Web App (JavaScript & REST API)</h3>
<a href={pokemonImage} target="_blank" rel="noopener noreferrer" className="project-image-link">
<img src={pokemonImage} alt="Pokédex Web Application" className="project-image" />
<p className="image-caption">Click to enlarge</p>
</a>
<div className="project-section">
<p className="project-label">Description:</p>
<p className="project-text">A dynamic web application that allows users to search for Pokémon by name or ID using the PokéAPI. The project features an interactive interface with styled cards, loading spinners, and a favorites system that persists data using localStorage.</p>
</div>
<div className="project-section">
<p className="project-label">Role:</p>
<p className="project-text">Developed the entire application, implemented API integration, designed the user interface, and created the favorites functionality with error handling.</p>
</div>
<div className="project-section">
<p className="project-label">Outcome:</p>
<p className="project-text">A fully functional web application with responsive design, dynamic search capabilities, and persistent user preferences through client-side storage.</p>
</div>
</div>

{/* Project 2: Healthcare App Documentation */}
<div className="project-entry">
<h3 className="project-name">2. Healthcare App Documentation - MediAlert (Requirements Analysis)</h3>
<a href={healthcareImage} target="_blank" rel="noopener noreferrer" className="project-image-link">
<img src={healthcareImage} alt="MediAlert Healthcare App Documentation" className="project-image" />
<p className="image-caption">Click to enlarge</p>
</a>
<div className="project-section">
<p className="project-label">Description:</p>
<p className="project-text">A comprehensive 28-page Software Requirements Specification (SRS) document for MediAlert, a mobile application designed to improve medication scheduling through AI-powered reminders, medical record integration, and wearable device synchronization.</p>
</div>
<div className="project-section">
<p className="project-label">Role:</p>
<p className="project-text">Co-authored the SRS documentation, created UML use case models, defined functional requirements, and developed user stories for the development team.</p>
</div>
<div className="project-section">
<p className="project-label">Outcome:</p>
<p className="project-text">A detailed specification document that successfully defined system scope, supported development planning, and established clear testing parameters for the healthcare application.</p>
</div>
</div>

{/* Project 3: Database Management System */}
<div className="project-entry">
<h3 className="project-name">3. Student Database Management System (Oracle 12c)</h3>
<a href={databaseImage} target="_blank" rel="noopener noreferrer" className="project-image-link">
<img src={databaseImage} alt="Database Management System" className="project-image" />
<p className="image-caption">Click to enlarge</p>
</a>
<div className="project-section">
<p className="project-label">Description:</p>
<p className="project-text">A database project designed to manage student records, developed using Oracle 12c. The system followed the Software Development Life Cycle (SDLC), including defining business rules, creating an Entity-Relationship Diagram (ERD), and implementing user roles with permissions.</p>
</div>
<div className="project-section">
<p className="project-label">Role:</p>
<p className="project-text">Co-designed the ERD, wrote SQL scripts, and documented requirements.</p>
</div>
<div className="project-section">
<p className="project-label">Outcome:</p>
<p className="project-text">A functioning database schema that supports student record management with secure access for different user roles.</p>
</div>
</div>
</div>
);
}