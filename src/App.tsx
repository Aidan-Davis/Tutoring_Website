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
            <a href="#methodology">Methodology</a>
            <a href="#approach">Approach</a>
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
              <p className="eyebrow">Online · Project-based · $150/hr</p>
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
              About me
            </h2>
            <div className="prose">
              <p>
                I have a lifelong passion for math, and I&apos;ve now been{" "}
                <strong>tutoring for 7 years</strong>. My tutoring methodology focuses on guiding the student
                through a{" "}
                <strong>tangible project</strong> that both fits their interests and helps them excel in math.
                These projects are perfect opportunities for students to explore their interests, advance in
                math beyond what school offers, and even{" "}
                <strong>stand out on university and internship applications</strong>.
              </p>
              <p>
                I hold a B.S. in Mathematics and a B.S. in Computer Science from Purdue University, and I
                currently work as an AI cybersecurity programmer. I&apos;m also a husband and father living in
                Royal Oak, MI.
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
                I focus on the content covered in high school and university level math courses, but
                interested students of all ages are welcome. My priority is{" "}
                <strong>project-based tutoring</strong>, where students learn by creating a project that
                relates math concepts to a personal interest of their choice.
              </p>
              <p>
                In contrast with traditional tutoring that only helps you complete homework or pass an exam,
                I work as more of an <strong>all-around academic coach</strong>—my educational approach focuses
                on building
                foundational skills instead of simply cramming for tests. I believe that when students are
                taught to really understand the material rather than just memorizing it, they can not only
                achieve more long-term success, but also feel more engaged and confident.
              </p>
              <p>
                <strong>
                  As a result, this is a premium service primarily targeted towards students who are
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
                I can also offer guidance on much more than just the course material—we can talk about how
                to focus better, how to make learning fun, advice for transitioning from high school to
                university and from being a student to being part of the workforce, and any other concerns you
                might have. Plus, I love to get to know my students and learn from them too!
              </p>
            </div>
            <h3>You may be a good fit if you…</h3>
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

        <section className="section section--alt">
          <div className="section-inner">
            <h2 id="approach" className="section-anchor" tabIndex={-1}>
              What makes project-based tutoring different?
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
                  Project-based tutoring means I&apos;ll work with you to fit the math to something that
                  excites you outside of the classroom
                </strong>
                , whether that&apos;s gaming, sports, art, technology, or
                any other topic that matters to you. You get to take the lead with regards to what your
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
                The standard curriculum offered in schools often restricts students&apos; natural curiosity
                and fails to support them to achieve their full potential, especially when they are
                performing <strong>above grade level</strong>. As a result, you may have a bright student
                who&apos;s feeling academically
                limited and emotionally discouraged.{" "}
                <strong>
                  Project-based tutoring helps students develop meaningful connections with their education,
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
                skills, and goals, so we can be equipped to make the most out of the time we spend together. Payment is
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
