export const TUTOR_EMAIL = "aidan.t.davis@gmail.com";

function buildMailto(form: HTMLFormElement): string {
  const fd = new FormData(form);
  const name = String(fd.get("name") ?? "").trim();
  const email = String(fd.get("email") ?? "").trim();
  const grade = String(fd.get("grade_level") ?? "").trim();
  const currentMath = String(fd.get("current_math") ?? "").trim();
  const interests = String(fd.get("interests") ?? "").trim();
  const message = String(fd.get("message") ?? "").trim();

  const subject = `Tutoring inquiry — ${name || "website form"}`;

  const lines = [
    "Tutoring inquiry (from website contact form)",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    `Grade level: ${grade}`,
    "",
    "Current math / coursework:",
    currentMath,
    "",
    "Interests (for project ideas):",
    interests,
    "",
  ];
  if (message) {
    lines.push("Additional notes:", message, "");
  }

  const body = lines.join("\n");
  return `mailto:${TUTOR_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ContactForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const href = buildMailto(form);

    if (href.length > 7500) {
      window.alert(
        "Your message is quite long. Please shorten the text fields slightly, or copy your answers into a regular email to " +
          TUTOR_EMAIL +
          "."
      );
      return;
    }

    window.location.href = href;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label className="field">
          <span>Your name</span>
          <input name="name" type="text" required autoComplete="name" placeholder="Jane Doe" />
        </label>
        <label className="field">
          <span>Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
          />
        </label>
        <label className="field field-full">
          <span>What grade are you or your child in?</span>
          <input
            name="grade_level"
            type="text"
            required
            placeholder="e.g. 10th grade, sophomore in college"
          />
        </label>
        <label className="field field-full">
          <span>What math are you or your child learning right now?</span>
          <textarea
            name="current_math"
            required
            rows={3}
            placeholder="e.g. Algebra 2, AP Calculus BC, linear algebra…"
          />
        </label>
        <label className="field field-full">
          <span>What are you or your child&apos;s interests?</span>
          <textarea
            name="interests"
            required
            rows={4}
            placeholder="Hobbies, career goals, games, sports, music — anything that helps me design a project you care about."
          />
        </label>
        <label className="field field-full">
          <span>Anything else? (optional)</span>
          <textarea
            name="message"
            rows={3}
            placeholder="Scheduling preferences, learning goals, questions…"
          />
        </label>
      </div>
      <button type="submit" className="btn-primary">
        Submit
      </button>
    </form>
  );
}
