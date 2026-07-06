"use client";

import { Loader2 } from "lucide-react";
import { FormEvent, useState } from "react";
import { Button } from "@/components/Button";
import { siteConfig } from "@/data/site";

type FormStatus = "idle" | "submitting" | "success" | "error";

const inputStyles =
  "w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground outline-none backdrop-blur-sm transition-all placeholder:text-muted/60 focus:border-accent focus:ring-2 focus:ring-accent/20";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formspreeId = siteConfig.formspreeId;

  function validate(form: HTMLFormElement): boolean {
    const newErrors: Record<string, string> = {};
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Please enter a valid email";
    if (!message) newErrors.message = "Message is required";
    else if (message.length < 10)
      newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!validate(form)) return;

    if (!formspreeId) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    const formData = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setErrors({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (!formspreeId) {
    return (
      <div className="text-center">
        <p className="text-sm text-muted">
          To enable the contact form, add your Formspree form ID to{" "}
          <code className="rounded bg-background px-1.5 py-0.5 text-foreground">
            NEXT_PUBLIC_FORMSPREE_ID
          </code>{" "}
          in your <code className="rounded bg-background px-1.5 py-0.5 text-foreground">.env.local</code> file.
        </p>
        <p className="mt-4 text-sm text-muted">
          Or reach me directly at{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-accent hover:text-accent-hover"
          >
            {siteConfig.email}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className={inputStyles}
          placeholder="Your name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-xs text-red-500" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={inputStyles}
          placeholder="you@example.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 text-xs text-red-500" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`${inputStyles} resize-y`}
          placeholder="Tell me about your project..."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-red-500" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={status === "submitting"}
        className="w-full"
      >
        {status === "submitting" ? (
          <span className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </Button>

      {status === "success" && (
        <p className="text-center text-sm text-green-600 dark:text-green-400" role="status">
          Thank you! Your message has been sent successfully.
        </p>
      )}

      {status === "error" && (
        <p className="text-center text-sm text-red-600 dark:text-red-400" role="alert">
          Something went wrong. Please try again or email me directly.
        </p>
      )}
    </form>
  );
}
