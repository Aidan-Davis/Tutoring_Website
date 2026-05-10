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
            <a href="#philosophy">Approach</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-inner">
            <p className="eyebrow">Remote · Project-based</p>
            <h1>
              Math tutoring built around <em>your</em> interests
            </h1>
            <p className="hero-lead">
              I connect the math you need with projects you actually care about — so learning feels
              purposeful, and you walk away with something worth showing on applications.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn-primary">
                Start a conversation
              </a>
              <span className="hero-meta">$60/hr · remote only</span>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-inner">
            <h2>About me</h2>
            <div className="card-grid">
              <article className="card">
                <h3>Experience</h3>
                <p>
                  Years of experience tutoring math at the high school and college level — including
                  at Purdue University and at Mathnasium — working with a wide range of learners and
                  curricula.
                </p>
              </article>
              <article className="card">
                <h3>Education</h3>
                <p>
                  Bachelor of Science in Mathematics and Bachelor of Science in Computer Science from{" "}
                  <strong>Purdue University</strong>.
                </p>
              </article>
              <article className="card">
                <h3>Day job</h3>
                <p>
                  I work professionally as an <strong>AI cybersecurity programmer</strong>, so I bring
                  real-world problem-solving and technical depth to how I teach and how we structure
                  projects.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="philosophy" className="section section--alt">
          <div className="section-inner">
            <h2>How I tutor</h2>
            <div className="philosophy">
              <p className="lead">
                I believe in <strong>project-based math tutoring</strong>: I learn what you are into,
                connect it to the math you are learning, and guide you through a concrete project.
              </p>
              <p>
                For example, if you love video games and you are learning trigonometry, we might build a
                simple lighting effect in Python — you still do the trig, but it lives inside something
                that feels like yours.
              </p>
              <p>
                That investment usually helps students stick with hard ideas. Parents often like it too,
                because the project can support <strong>college or internship applications</strong> as a
                tangible demonstration of skill and curiosity.
              </p>
            </div>

            <div className="subsection">
              <h3>Ideal fit</h3>
              <p>
                Project-based work works best when the student can stay organized, follow through between
                sessions, and engage seriously with the material. If that sounds like you or your child,
                we will likely be a good match.
              </p>
            </div>

            <div className="subsection">
              <h3>Logistics</h3>
              <ul className="facts">
                <li>
                  <strong>Rate:</strong> $60 per hour
                </li>
                <li>
                  <strong>Format:</strong> remote only
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="section section--contact">
          <div className="section-inner section-inner--narrow">
            <h2>Get in touch</h2>
            <p className="contact-intro">
              Tell me about grade level, current coursework, and interests — that is usually enough for
              me to sketch project directions before we even meet.
            </p>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Project-based math tutoring · Remote sessions</p>
      </footer>
    </div>
  );
}
