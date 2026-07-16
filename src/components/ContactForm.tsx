import { useCallback, useState } from "react";

export const TUTOR_EMAIL = "aidan.t.davis@gmail.com";

type FormStatus = "idle" | "sending" | "success" | "error" | "captcha_fail";

function randomDigit(min: number, max: number) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function formatInquiryBody(fd: FormData): string {
  const name = String(fd.get("name") ?? "").trim();
  const email = String(fd.get("email") ?? "").trim();
  const message = String(fd.get("message") ?? "").trim();

  return [
    "Tutoring inquiry (website form)",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    "Message:",
    message,
    "",
  ].join("\n");
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
          <span>Message</span>
          <textarea
            name="message"
            required
            rows={4}
            placeholder="Questions, goals, or anything you'd like to share…"
          />
        </label>
        <label className="field field-full captcha-field">
          <span className="captcha-label-row">
            <span>
              Quick check: What is {challenge.a} + {challenge.b}?
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
