import { ContactForm } from "./components/ContactForm";
import "./App.css";

export default function App() {
  return (
    <div className="site">
      <header className="header">
        <div className="header-inner">
          <p className="site-title">Choice Math Projects</p>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#methodology">Methodology</a>
            <a href="#example-projects">Examples</a>
            <a href="#benefits">Benefits</a>
            <a href="#pricing">Pricing</a>
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
              <p className="eyebrow">1-on-1 · personalized · project-based</p>
              <h1>
                Advanced math &amp; coding projects built around <em>your</em> interests
              </h1>
              <p className="hero-lead">I tie the math you need to a project you care about.</p>
              <p className="hero-consult">
                <span className="hero-consult-label">Free 15-minute consultation</span>
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
              About me
            </h2>
            <div className="prose">
              <p>
                Hi, I&apos;m Aidan! I have a lifelong passion for math, and I&apos;ve now been{" "}
                <strong>tutoring for 7 years</strong>. My methodology focuses on guiding the student
                through a{" "}
                <strong>tangible project</strong> that both fits their interests and helps them excel in math.
                These projects are perfect opportunities for students to explore their interests, advance in
                math beyond what school offers, and even{" "}
                <strong>stand out on university and internship applications</strong>.
              </p>
              <p>
                I hold a B.S. in Mathematics and a B.S. in Computer Science from Purdue University, and I
                currently work as an AI cybersecurity programmer. I&apos;m also a husband and father living in
                Royal Oak, Michigan.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-inner">
            <h2 id="methodology" className="section-anchor" tabIndex={-1}>
              My methodology
            </h2>
            <div className="prose">
              <p>
                I focus on the content covered in high-school and university-level math courses, but
                interested students of all ages are welcome. My priority is{" "}
                <strong>advanced math projects</strong>, where students learn by creating a project that
                relates math concepts to a personal interest of their choice.{" "}
                <strong>
                  Coding is a normal part of these projects, so this is a great two-in-one learning
                  opportunity.
                </strong>{" "}
                Many projects can be coded in a number of languages, like{" "}
                <strong>Python, C, C++, or Java</strong>, so I can design the project around the coding language
                that best fits the student&apos;s goals. If coding isn&apos;t for you, I am happy to design a
                no-code project as well. Along the way, you can pick up skills like{" "}
                <strong>
                  effective AI use, programming, and a new perspective on your favorite interest.
                </strong>
              </p>
              <p>
                In contrast with traditional tutoring that only helps you complete homework or pass an exam,
                I work as more of an <strong>all-around academic coach</strong>—my educational approach focuses on
                building foundational skills instead of simply cramming for tests. I believe that when students are
                taught to really understand the material rather than just memorizing it, they can not only
                achieve more long-term success, but also feel more engaged and confident.
              </p>
              <p>
                <strong>
                  As a result, this is a premium service primarily targeted toward students who are
                  underchallenged in the classroom and motivated to dig deeper.
                </strong>{" "}
                Each plan is custom-made to
                support the individual student&apos;s goals rather than being a generic textbook review
                session or a one-size-fits-all &quot;how do I pass this test&quot; study guide. I encourage
                students to go beyond the boundaries of their current grade level, pursue whatever intrigues
                them, and use their skills to create real-world impact. Please understand that I am
                currently not taking on students who specifically require remedial or &quot;crash
                course&quot; tutoring.
              </p>
              <p>
                I can also offer guidance on much more than just the course material—we can talk about things like
                how to use AI effectively, advice for transitioning from high school to university and from being a
                student to part of the workforce, and anything else you&apos;re curious about. Plus, I love getting to
                know my students and learning from them too!
              </p>
            </div>
            <h3 className="fit-heading">You may be a good fit if you…</h3>
            <ul className="fit-list">
              <li>Know that you could get an A when you try, but often lack motivation or find class to be boring</li>
              <li>Feel like you&apos;re not learning enough from classroom instruction</li>
              <li>Want to build a strong application to impress university admissions</li>
              <li>Struggle to focus and need advice from someone who gets it</li>
              <li>Have wondered how what you learn in school is actually useful in real life</li>
              <li>Would describe yourself as an inquisitive, driven, or creative person</li>
            </ul>
          </div>
        </section>

        <section className="section section--alt" aria-labelledby="example-projects">
          <div className="section-inner">
            <h2 id="example-projects" className="section-anchor" tabIndex={-1}>
              Example Projects
            </h2>
            <ul className="example-project-list">
              <li className="example-project-card">
                <span className="example-project-icon example-project-icon--lg" aria-hidden>
                  <svg viewBox="0 0 32 32" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(-3.25 0)">
                      <path
                        d="M10 14h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2Z"
                        stroke="currentColor"
                        strokeWidth="1.75"
                      />
                      <path
                        d="M8 18H6m20 0h-2M12 22h8M14 10V8a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                      />
                      <circle cx="12" cy="17" r="1.25" fill="currentColor" />
                      <circle cx="20" cy="17" r="1.25" fill="currentColor" />
                    </g>
                  </svg>
                </span>
                <div>
                  <h3 className="example-project-title">AI &amp; Technology</h3>
                  <p className="example-project-desc">
                    Love AI? Use derivatives to train your own neural net from scratch and learn how AI works
                    under the hood.
                  </p>
                </div>
              </li>
              <li className="example-project-card">
                <span className="example-project-icon" aria-hidden>
                  {/* Lucide "gamepad-2" (ISC) — https://lucide.dev/icons/gamepad-2 */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="6" x2="10" y1="11" y2="11" />
                    <line x1="8" x2="8" y1="9" y2="13" />
                    <line x1="15" x2="15.01" y1="12" y2="12" />
                    <line x1="18" x2="18.01" y1="10" y2="10" />
                    <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
                  </svg>
                </span>
                <div>
                  <h3 className="example-project-title">Video Games</h3>
                  <p className="example-project-desc">
                    Love Gaming? Use trig and vectors to design a lighting or physics engine in Python.
                  </p>
                </div>
              </li>
              <li className="example-project-card">
                <span className="example-project-icon" aria-hidden>
                  {/* Lucide "paintbrush" (ISC) — https://lucide.dev/icons/paintbrush */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m14.622 17.897-10.68-2.913" />
                    <path d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z" />
                    <path d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15" />
                  </svg>
                </span>
                <div>
                  <h3 className="example-project-title">Illustration &amp; Animation</h3>
                  <p className="example-project-desc">
                    Love Art? Discover how polynomial functions power the tools in every digital art program.
                  </p>
                </div>
              </li>
              <li className="example-project-card">
                <span className="example-project-icon" aria-hidden>
                  {/* Lucide "book-open" (ISC) — https://lucide.dev/icons/book-open */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 7v14" />
                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                  </svg>
                </span>
                <div>
                  <h3 className="example-project-title">History</h3>
                  <p className="example-project-desc">
                    Love History? Use probability theory to analyze texts and prove who really wrote them.
                  </p>
                </div>
              </li>
              <li className="example-project-card">
                <span className="example-project-icon" aria-hidden>
                  {/* Tabler Icons "ball-football" (MIT) — https://tabler.io/icons/icon/ball-football */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
                    <path d="M12 7l4.76 3.45l-1.76 5.55h-6l-1.76-5.55l4.76-3.45" />
                    <path d="M12 7v-4m3 13l2.5 3m-.74-8.55l3.74-1.45m-11.44 7.05l-2.56 2.95m.74-8.55l-3.74-1.45" />
                  </svg>
                </span>
                <div>
                  <h3 className="example-project-title">Sports</h3>
                  <p className="example-project-desc">
                    Love Sports? Use Markov chains and linear algebra to optimize game strategy, predict
                    outcomes, and uncover the hidden mathematics behind winning teams.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="section section--alt">
          <div className="section-inner">
            <h2 id="benefits" className="section-anchor" tabIndex={-1}>
              Benefits
            </h2>
            <h3>For students</h3>
            <div className="prose">
              <p>
                A lot of math lessons revolve around boring, repetitive exercises, and it can be really hard
                to feel motivated to practice when the work doesn&apos;t feel related to anything you care
                about in the real world. Plus, learning can feel stressful when it&apos;s always revolving
                around homework, tests, and grades.
              </p>
              <p>
                <strong>
                  Project-based coaching means I&apos;ll work with you to fit the math you&apos;re learning to
                  something that excites you outside of the classroom,
                </strong>{" "}
                whether that&apos;s gaming, sports, art, technology, or any other topic that matters to you. You get to take the lead regarding what your
                learning goals, topics of interest, and questions are. Instead of a stack of completed
                worksheets, you&apos;ll be able to{" "}
                <strong>walk away with a finished project</strong> that you can actually be proud of!
              </p>
              <p>
                At the same time, I&apos;ll still be equipping you to be successful in your regular school
                courses, so don&apos;t worry: the work we do together will still be helpful for your upcoming
                exam. I would love to see what you&apos;re working on in class—content from your textbook,
                homework you&apos;ve completed, past quiz results—and I&apos;ll design the project so that you
                learn exactly what you need to get ahead in school, while building something you&apos;re
                interested in.
              </p>
              <p>
                Many high school students worry about getting into college, and having a portfolio of personal
                projects can be a great thing to show off when you&apos;re applying to schools. Admissions
                officers see thousands of applications every day and they&apos;re always looking to spot the
                students who are different. Instead of talking about the same math course or standardized
                test that everyone else also took, you&apos;ll be able to confidently prove that
                you&apos;re someone who can think outside the box and knows how to apply what you&apos;ve
                learned on your own.
              </p>
            </div>
            <h3>For parents</h3>
            <div className="prose">
              <p>
                The standard curriculum offered in schools often restricts students&apos; natural curiosity and
                fails to help them reach their full potential, especially when they are performing above grade level.
                As a result, you may have a bright student who&apos;s feeling academically limited and emotionally
                discouraged.{" "}
                <strong>
                  Project-based coaching helps students develop meaningful connections with their education,
                  guiding and inspiring them to go above and beyond.
                </strong>{" "}
                It&apos;s also a great way for students to continue learning and get a head start when school
                isn&apos;t in session during the summer.
              </p>
              <p>
                <strong>
                  Additionally, many academic institutions are now more interested in seeing real-world results
                  than in simply looking at grades or test scores.
                </strong>{" "}
                Contrary to many parents&apos; expectations,
                students often have a hard time getting accepted even if they have excellent performance in
                school or on standardized tests, which can be a difficult experience for families who know that
                their child has a lot to offer and wants to see them succeed. Many popular math extracurriculars
                (such as contests and online courses) require extensive effort without actually offering any
                meaningful advantage in the admissions process, causing students undue stress and wasting
                their time.{" "}
                <strong>
                  A completed project is a unique, tangible accomplishment that helps your child stand out on
                  university and internship applications, unlocking valuable opportunities for their future.
                </strong>
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-inner">
            <h2 id="pricing" className="section-anchor" tabIndex={-1}>
              Pricing
            </h2>
            <div className="prose">
              <p>
                <strong>My standard rate is $150 USD per hour of direct instruction.</strong> This rate reflects the
                time and expertise needed to design personalized projects for each student&apos;s unique
                circumstances; every session is backed by hours of preparation spent analyzing your course material,
                skills, and goals, so we can be equipped to make the most of the time we spend together. Payment is
                preferred via Venmo or Zelle. All sessions are conducted via Zoom.
              </p>
              <p>
                I have a 24-hour cancellation policy. Any sessions canceled within 24 hours of the start of
                the session will be charged at full price. I value my students&apos; growth and our coaching
                relationship will be most effective when we can both consistently show up prepared and on
                time.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--alt section--contact">
          <div className="section-inner section-inner--narrow">
            <h2 id="contact" className="section-anchor" tabIndex={-1}>
              Contact
            </h2>
            <div className="contact-callout">
              <p>
                <strong>Free 15-minute consultation</strong>
                {" — "}
                Fill out the form below to tell me about your student.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}
