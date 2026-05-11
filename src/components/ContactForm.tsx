import { useCallback, useState } from "react";

export const TUTOR_EMAIL = "aidan.t.davis@gmail.com";

type FormStatus = "idle" | "sending" | "success" | "error" | "captcha_fail";

function randomDigit(min: number, max: number) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function formatInquiryBody(fd: FormData): string {
  const name = String(fd.get("name") ?? "").trim();
  const email = String(fd.get("email") ?? "").trim();
  const grade = String(fd.get("grade_level") ?? "").trim();
  const currentMath = String(fd.get("current_math") ?? "").trim();
  const interests = String(fd.get("interests") ?? "").trim();
  const availability = String(fd.get("availability") ?? "").trim();
  const message = String(fd.get("message") ?? "").trim();

  const lines = [
    "Tutoring inquiry (website form)",
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
    "Availability / preferred times:",
    availability,
    "",
  ];
  if (message) {
    lines.push("Additional notes:", message, "");
  }
  return lines.join("\n");
}

export function ContactForm() {
  const accessKey = (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined)?.trim() ?? "";
  const [status, setStatus] = useState<FormStatus>("idle");
  const [captchaInput, setCaptchaInput] = useState("");
  const [challenge, setChallenge] = useState(() => ({
    a: randomDigit(2, 9),
    b: randomDigit(2, 9),
  }));

  const refreshCaptcha = useCallback(() => {
    setChallenge({ a: randomDigit(2, 9), b: randomDigit(2, 9) });
    setCaptchaInput("");
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!accessKey) {
      setStatus("error");
      return;
    }

    const honeypot = String(
      (e.currentTarget.elements.namedItem("company_website") as HTMLInputElement | null)?.value ?? ""
    ).trim();
    if (honeypot.length > 0) {
      return;
    }

    const answer = parseInt(captchaInput.trim(), 10);
    const expectedSum = challenge.a + challenge.b;
    if (Number.isNaN(answer) || answer !== expectedSum) {
      setStatus("captcha_fail");
      refreshCaptcha();
      return;
    }

    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();

    setStatus("sending");

    const payload = {
      access_key: accessKey,
      subject: `Tutoring inquiry — ${name || "website"}`,
      name,
      email,
      message: formatInquiryBody(fd),
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { success?: boolean; message?: string };
      if (data.success) {
        setStatus("success");
        form.reset();
        setCaptchaInput("");
        refreshCaptcha();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (!accessKey) {
    return (
      <div className="form-notice" role="status">
        Add <code>VITE_WEB3FORMS_ACCESS_KEY</code> in a <code>.env</code> file (see <code>.env.example</code>)
        and redeploy so the form can send mail.
      </div>
    );
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
          <span>What topics in math are you or your child learning right now?</span>
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
          <span>When are you or your child usually free? What times work best?</span>
          <textarea
            name="availability"
            required
            rows={3}
            placeholder="e.g. weekday evenings after 5, Sunday afternoons, only during winter break…"
          />
        </label>
        <label className="field field-full">
          <span>Anything else? (optional)</span>
          <textarea
            name="message"
            rows={3}
            placeholder="Learning goals, questions, anything I should know…"
          />
        </label>
        <label className="field field-full captcha-field">
          <span className="captcha-label-row">
            <span>
              Quick check: what is {challenge.a} + {challenge.b}?
            </span>
            <button type="button" className="captcha-refresh" onClick={refreshCaptcha}>
              New question
            </button>
          </span>
          <input
            type="text"
            inputMode="numeric"
            autoComplete="off"
            value={captchaInput}
            onChange={(ev) => setCaptchaInput(ev.target.value)}
            placeholder="Answer"
            aria-invalid={status === "captcha_fail"}
          />
        </label>
      </div>
      <input
        type="text"
        name="company_website"
        className="honeypot"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <button type="submit" className="btn-primary" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Submit"}
      </button>
      {status === "success" && (
        <p className="form-feedback form-feedback--ok" role="status">
          Thanks — your message was sent. I&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="form-feedback form-feedback--err" role="alert">
          Something went wrong. Try again, or email me at {TUTOR_EMAIL}.
        </p>
      )}
      {status === "captcha_fail" && (
        <p className="form-feedback form-feedback--err" role="alert">
          That answer doesn&apos;t match. Please solve the quick check and submit again.
        </p>
      )}
    </form>
  );
}
