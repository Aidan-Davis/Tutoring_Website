import { ContactForm, TUTOR_EMAIL } from "./components/ContactForm";
import "./App.css";

const TUTOR_PHONE_DISPLAY = "602-501-5545";
const TUTOR_PHONE_TEL = "+16025015545";

export default function App() {
  return (
    <div className="site">
      <header className="header">
        <div className="header-inner">
          <p className="site-title">Aidan Davis Math Tutoring</p>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#how-it-works">How I work</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-split">
            <div className="hero-photo-col">
              <img
                className="hero-photo"
                src="/headshot.jpeg"
                alt="Portrait of Aidan Davis"
                width={585}
                height={498}
              />
            </div>
            <div className="hero-copy">
              <p className="eyebrow">Remote · $60/hr · Project-based</p>
              <h1>
                Math tutoring built around <em>your</em> interests
              </h1>
              <p className="hero-lead">I tie the math you need to a project you care about.</p>
              <p className="hero-consult">
                <span className="hero-consult-label">Free 15-minute consultation</span>
                {" · "}
                <a href={`tel:${TUTOR_PHONE_TEL}`}>{TUTOR_PHONE_DISPLAY}</a>
              </p>
              <div className="hero-cta">
                <a href="#contact" className="btn-primary">
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="section-inner">
            <h2 id="about" className="section-anchor" tabIndex={-1}>
              About
            </h2>
            <p className="about-intro">
              I&apos;m a husband and father in the Royal Oak area. I have a passion for teaching math, and
              have been tutoring since early high school. I have worked with a wide range of students, from
              elementary schoolers learning division to undergraduate math majors learning abstract algebra
              and differential equations. I hold a BS in Mathematics and Computer Science from Purdue
              University, and work as a programmer for AI Cybersecurity solutions.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="section-inner">
            <h2 id="how-it-works" className="section-anchor" tabIndex={-1}>
              How I work
            </h2>
            <div className="how-benefits">
              <p>
                <strong>For students,</strong> project-based tutoring means the math lives inside something
                you actually care about — so ideas stick better and practice feels less like busywork.
              </p>
              <p>
                <strong>For parents,</strong> it means a tangible piece of work your student can talk about on
                college or internship applications: a small portfolio story, not just a list of topics
                covered.
              </p>
            </div>
            <h3 className="section-subhead">Five example starting points</h3>
            <ul className="how-examples">
              <li>
                <strong>Trig+Gaming</strong> — build a tiny lighting or camera-angle demo in Python so sine
                and cosine are doing real on-screen work.
              </li>
              <li>
                <strong>Algebra+Basketball</strong> — turn shooting splits and season trends into plots and
                equations so you can back up hot takes in the group chat with real numbers.
              </li>
              <li>
                <strong>Stats+Fantasy</strong> — pull league stats into a spreadsheet or small script so that
                averages, trendlines, and simple probability models turn lineup debates into numbers you can
                defend.
              </li>
              <li>
                <strong>Geometry+Art</strong> — use perspective scale drawings or simple animation paths so
                triangles and circles and coordinates show up in characters or rooms you actually draw.
              </li>
              <li>
                <strong>Exponents+Money</strong> — model savings prom budgets or “what if I raise my allowance”
                so compound growth and percent change read like real life instead of filler problems.
              </li>
            </ul>
          </div>
        </section>

        <section className="section section--alt section--contact">
          <div className="section-inner section-inner--narrow">
            <h2 id="contact" className="section-anchor" tabIndex={-1}>
              Contact
            </h2>
            <div className="contact-callout">
              <p>
                <strong>Free 15-minute consultation</strong> — call or text{" "}
                <a href={`tel:${TUTOR_PHONE_TEL}`}>{TUTOR_PHONE_DISPLAY}</a>
                . Use the form below to ask about availability and tell me about your student.
              </p>
            </div>
            <p className="contact-email">
              <a href={`mailto:${TUTOR_EMAIL}`}>{TUTOR_EMAIL}</a>
            </p>
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}
