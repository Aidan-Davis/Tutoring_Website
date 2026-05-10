import { ContactForm } from "./components/ContactForm";
import "./App.css";

export default function App() {
  return (
    <div className="site">
      <header className="header">
        <div className="header-inner">
          <a href="#" className="logo">
            <span className="logo-mark">∑</span>
            <span>Math tutoring</span>
          </a>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-photo-wrap">
            <img
              className="hero-photo"
              src="/headshot.jpeg"
              alt="Portrait of Aidan Davis"
              width={585}
              height={498}
            />
          </div>
          <div className="hero-inner">
            <p className="eyebrow">Remote · $60/hr · Project-based</p>
            <h1>
              Math tutoring built around <em>your</em> interests
            </h1>
            <p className="hero-lead">
              We tie the math you need to a small project you care about — useful for motivation and for
              applications.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn-primary">
                Get in touch
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="section section--alt">
          <div className="section-inner">
            <h2>About &amp; how I work</h2>
            <div className="about-dense">
              <p>
                I tutor high school and college math (including at Purdue and Mathnasium).{" "}
                <strong>BS Math</strong> and <strong>BS Computer Science</strong> from Purdue; I work as an{" "}
                <strong>AI cybersecurity programmer</strong>.
              </p>
              <p>
                Sessions are <strong>project-based</strong>: I learn what you are into, connect it to what
                you are learning, and guide you through something concrete — for example, a little
                Python lighting demo if you like games and are learning trig.
              </p>
              <p className="about-muted">
                Best fit: students who can stay organized and follow through between sessions. Remote only.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="section section--contact">
          <div className="section-inner section-inner--narrow">
            <h2>Contact</h2>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Remote math tutoring</p>
      </footer>
    </div>
  );
}
