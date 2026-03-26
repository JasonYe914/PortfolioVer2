import LoadingPage from './LoadingPage';
import './App.css';
import NavBar from './NavBar';
import RoadMap from './RoadMap';
import {Route, Routes} from "react-router-dom";
import ContactPage from './ContactPage';
import { useState, useEffect } from "react";
import "./App.css";

const skills = {
    Languages: [
        { name: "JavaScript", color: "#F7DF1E", text: "#000" },
        { name: "Python", color: "#3776AB", text: "#fff" },
        { name: "Java", color: "#ED8B00", text: "#fff" },
        { name: "C", color: "#A8B9CC", text: "#000" },
        { name: "HTML", color: "#E34F26", text: "#fff" },
        { name: "CSS", color: "#1572B6", text: "#fff" },
        { name: "MATLAB", color: "#0076A8", text: "#fff" },
    ],
    Frameworks: [
        { name: "React.js", color: "#61DAFB", text: "#000" },
        { name: "Spring Boot", color: "#6DB33F", text: "#fff" },
        { name: "Flask", color: "#000000", text: "#fff" },
        { name: "Express.js", color: "#404040", text: "#fff" },
    ],
    Tools: [
        { name: "PostgreSQL", color: "#336791", text: "#fff" },
        { name: "Docker", color: "#2496ED", text: "#fff" },
        { name: "Git", color: "#F05032", text: "#fff" },
        { name: "ROS2", color: "#22314E", text: "#fff" },
        { name: "Gemini API", color: "#8E75B2", text: "#fff" },
        { name: "ElevenLabs", color: "#111", text: "#fff" },
    ],
    "Core Skills": [
        { name: "Full-Stack Dev", color: "#f0f0f0", text: "#111" },
        { name: "RESTful API", color: "#f0f0f0", text: "#111" },
        { name: "OOP", color: "#f0f0f0", text: "#111" },
        { name: "DSA", color: "#f0f0f0", text: "#111" },
        { name: "Version Control", color: "#f0f0f0", text: "#111" },
        { name: "GenAI", color: "#f0f0f0", text: "#111" },
    ],
};

const projects = [
    {
        name: "Wayfinder",
        emoji: "🗺️",
        desc: "AI-powered roadmap generator that creates personalized skill milestones and visualizes your learning progress through an interactive graph UI.",
        stack: ["Python", "Flask", "Google Gemini", "React"],
        links: { github: "#", devpost: "#" },
        date: "Feb 2026",
    },
    {
        name: "Get-Into.Tech",
        emoji: "🎙️",
        desc: "AI interview coach that analyzes video and audio in real time — scoring eye contact, speech clarity, and vocabulary with automated feedback.",
        stack: ["React", "Flask", "OpenCV", "AssemblyAI", "ElevenLabs"],
        links: { github: "#", devpost: "#" },
        date: "Jan 2026",
    },
    {
        name: "Valorant Team Selector",
        emoji: "🎮",
        desc: "Full-stack app for interactive team selection, built with a clean MVC architecture across a React frontend and Spring Boot backend.",
        stack: ["React", "Spring Boot", "Java", "PostgreSQL"],
        links: { github: "#" },
        date: "Sep 2025–Present",
    },
    {
        name: "Neural Network",
        emoji: "🧠",
        desc: "Built a neural network from scratch using NumPy to classify handwritten digits — trained on 10,000+ images with 95%+ accuracy.",
        stack: ["Python", "NumPy"],
        links: { github: "#" },
        date: "Jan 2026",
    },
];

const futureProjects = [
    {
        emoji: "💊",
        title: "AI for biotech",
        desc: "Apply machine learning to biological data — drug interaction prediction, research acceleration, or lab automation.",
    },
    {
        emoji: "🛠️",
        title: "Developer tooling",
        desc: "Build tools that make developers faster — smarter CLIs, AI-assisted debugging, or better DX abstractions.",
    },
    {
        emoji: "🤖",
        title: "Autonomous systems",
        desc: "Extend work from the Aerospace Design Team into more complex real-world autonomy — robotics, path planning, and beyond.",
    },
];

function SkillBadge({ name, color, text }) {
    return (
        <span
            className="skill-badge"
            style={{
                backgroundColor: color,
                color: text,
                border: color === "#f0f0f0" ? "1px solid #ddd" : "none",
            }}
        >
      {name}
    </span>
    );
}

function Section({ id, title, accent, children }) {
    return (
        <section id={id} className="section">
            <div className="section-header">
        <span className="section-title" style={{ color: accent }}>
          {title}
        </span>
                <div className="section-line" />
            </div>
            {children}
        </section>
    );
}


function LandingPage() {
    return (
        <div className="portfolio-root">

            {/* Hero */}
            <header className="hero">
                <div className="hero-glow" />
                <p className="hero-label">Software Engineer</p>
                <h1 className="hero-name">Jason Ye</h1>
                <p className="hero-desc">
                    Building things that matter — from full-stack apps to AI-powered tools.
                    Second-year Engineering student at Queen's, always learning something new.
                </p>
                <div className="hero-links">
                    <a href="mailto:jason.ye914@gmail.com" className="link-btn">✉ Email</a>
                    <a href="https://github.com/JasonYe914" target="_blank" rel="noreferrer" className="link-btn">⌥ GitHub</a>
                    <a href="https://www.linkedin.com/in/jasonyequeens/" target="_blank" rel="noreferrer" className="link-btn">↗ LinkedIn</a>
                </div>
            </header>

            {/* Main */}
            <main className="main">

                {/* About */}
                <Section id="about" title="About" accent="#4caf82">
                    <div className="about-grid">
                        <div className="about-text">
                            <p>
                                I'm a Second-year Engineering student at Queen's University passionate about building
                                things that matter — from full-stack web apps to AI-powered tools.
                            </p>
                            <p>
                                I love jumping into new technologies, figuring them out fast, and shipping real
                                products. Whether it's a hackathon overnight or a months-long internship, I'm
                                happiest when I'm building.
                            </p>
                        </div>
                        <div className="about-stats">
                            {[
                                { label: "Currently", value: "Queen's University, 2nd year" },
                                { label: "Location", value: "Markham, ON" },
                                { label: "Internship", value: "Playtoon It Inc (2025–2026)" },
                                { label: "GPA", value: "4.1 / 4.3" },
                            ].map(({ label, value }) => (
                                <div key={label} className="about-stat">
                                    <span className="about-stat-label">{label}</span>
                                    <span className="about-stat-value">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* Education */}
                <Section id="education" title="Education" accent="#6b9fff">
                    <div className="edu-card">
                        <div className="edu-card-top">
                            <div>
                                <h3 className="edu-school">Queen's University</h3>
                                <p className="edu-degree">BASc in Applied Science and Engineering</p>
                            </div>
                            <div className="edu-meta">
                                <span className="edu-date">Sep 2024 – Present</span>
                                <div>
                                    <span className="edu-gpa-badge">GPA 4.1 / 4.3</span>
                                </div>
                            </div>
                        </div>
                        <div className="edu-courses">
                            <p className="edu-courses-label">Relevant Coursework</p>
                            <div className="edu-courses-list">
                                {["Data Structures & Algorithms", "Object Oriented Programming", "Linear Algebra"].map((c) => (
                                    <span key={c} className="edu-course-tag">{c}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Skills */}
                <Section id="skills" title="Technical Skills" accent="#f5a623">
                    <div className="skills-list">
                        {Object.entries(skills).map(([category, items]) => (
                            <div key={category}>
                                <p className="skill-category-label">{category}</p>
                                <div className="skill-badges">
                                    {items.map((s) => <SkillBadge key={s.name} {...s} />)}
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* Projects */}
                <Section id="projects" title="Recent Projects" accent="#b87fff">
                    <div className="projects-grid">
                        {projects.map((p) => (
                            <div key={p.name} className="project-card">
                                <div className="project-card-top">
                                    <div className="project-title-row">
                                        <span className="project-emoji">{p.emoji}</span>
                                        <h3 className="project-name">{p.name}</h3>
                                    </div>
                                    <span className="project-date">{p.date}</span>
                                </div>
                                <p className="project-desc">{p.desc}</p>
                                <div className="project-stack">
                                    {p.stack.map((t) => (
                                        <span key={t} className="project-stack-tag">{t}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    {p.links.github && <a href={p.links.github} className="link-btn">⌥ GitHub</a>}
                                    {p.links.devpost && <a href={p.links.devpost} className="link-btn">↗ Devpost</a>}
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* Future */}
                <Section id="future" title="Future Goals" accent="#f47c7c">
                    <p className="future-intro">
                        I want to keep pushing into the intersection of AI and real-world impact. Long-term,
                        I'm excited to work on products that make genuinely hard problems easier to solve.
                    </p>
                    <div className="future-grid">
                        {futureProjects.map((f) => (
                            <div key={f.title} className="future-card">
                                <div className="future-emoji">{f.emoji}</div>
                                <h3 className="future-title">{f.title}</h3>
                                <p className="future-desc">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </Section>

            </main>

            {/* Footer */}
            <footer className="footer">
                <span className="footer-logo">jy<span className="nav-logo-dot">.</span></span>
                <span className="footer-email">jason.ye914@gmail.com</span>
            </footer>

        </div>
    );
}

export default function App(){
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        try{
            const timer = setTimeout(() => {
                setLoading(false);
            }, 3000);

            return () => clearTimeout(timer);
        }catch (e) {
            console.log(e);
        }

    }, []);

    if(loading){
        return<LoadingPage />
    }

    return(
        <div>
            <NavBar/>
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route path="/Roadmap" element={<RoadMap/>}/>
                <Route path="/contact-page" element={<ContactPage/>} />
            </Routes>
        </div>
    )

}
