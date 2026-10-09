import { useState } from "react";
import { Section, SectionHeading } from "../components/Section";
import { Button } from "../components/Button";
import { Input, Textarea, Select } from "../components/FormField";
import { Notice } from "../components/Notice";
import { MessageCircle, MapPin, Mail, Clock } from "lucide-react";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const newErrors: Record<string, string> = {};

    if (!formData.get("name")) newErrors.name = "Please enter your name.";
    if (!formData.get("email")) {
      newErrors.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(formData.get("email") as string)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.get("message"))
      newErrors.message = "Please tell us a bit about your plans.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <div className="page">
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="animate-in" style={{ maxWidth: "600px" }}>
            <p className="hero__label">Contact Us</p>
            <h1>
              Let's talk about your{" "}
              <span className="accent">plans</span>
            </h1>
            <p className="hero__lead">
              Book a free consultation or send us a message. We typically
              respond within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Contact form + info */}
      <Section id="book">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "var(--space-5)",
          }}
        >
          <div className="grid-2" style={{ alignItems: "start" }}>
            {/* Form */}
            <div>
              <SectionHeading
                label="Book a consultation"
                title={
                  <>
                    Send us a <span className="text-accent">message</span>
                  </>
                }
              />
              {submitted ? (
                <Notice>
                  <strong>Thank you for reaching out.</strong> We have received
                  your message and will get back to you within one business day.
                </Notice>
              ) : (
                <form className="form" onSubmit={handleSubmit} noValidate>
                  <Input
                    label="Full name"
                    name="name"
                    placeholder="Your name"
                    required
                    error={errors.name}
                  />
                  <Input
                    label="Email address"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    error={errors.email}
                  />
                  <Input
                    label="Phone number (optional)"
                    name="phone"
                    type="tel"
                    placeholder="+92 3XX XXXXXXX"
                  />
                  <Select label="Destination of interest" name="destination">
                    <option value="">Select a destination</option>
                    <option value="uk">United Kingdom</option>
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">United States</option>
                    <option value="other">Other / Not sure yet</option>
                  </Select>
                  <Textarea
                    label="Tell us about your plans"
                    name="message"
                    placeholder="What would you like to study? When do you plan to start? Any questions you have for us."
                    required
                    error={errors.message}
                  />
                  <Button type="submit" variant="solid" block>
                    Send message
                  </Button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div>
              <SectionHeading
                label="Other ways to reach us"
                title={
                  <>
                    Get in <span className="text-accent">touch</span>
                  </>
                }
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-3)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "var(--space-2)",
                    alignItems: "flex-start",
                  }}
                >
                  <MapPin
                    size={22}
                    className="text-accent"
                    style={{ flexShrink: 0, marginTop: "2px" }}
                  />
                  <div>
                    <p
                      style={{
                        fontWeight: 600,
                        fontSize: "var(--font-size-small)",
                        textTransform: "uppercase",
                        letterSpacing: "var(--letter-spacing-label)",
                        color: "var(--color-text)",
                        marginBottom: "4px",
                      }}
                    >
                      Office
                    </p>
                    <p style={{ color: "var(--color-text-secondary)" }}>
                      Lahore, Pakistan
                      <br />
                      Consultations by appointment.
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "var(--space-2)",
                    alignItems: "flex-start",
                  }}
                >
                  <Mail
                    size={22}
                    className="text-accent"
                    style={{ flexShrink: 0, marginTop: "2px" }}
                  />
                  <div>
                    <p
                      style={{
                        fontWeight: 600,
                        fontSize: "var(--font-size-small)",
                        textTransform: "uppercase",
                        letterSpacing: "var(--letter-spacing-label)",
                        color: "var(--color-text)",
                        marginBottom: "4px",
                      }}
                    >
                      Email
                    </p>
                    <a href="mailto:info@rakizarworld.com">
                      info@rakizarworld.com
                    </a>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "var(--space-2)",
                    alignItems: "flex-start",
                  }}
                >
                  <MessageCircle
                    size={22}
                    className="text-accent"
                    style={{ flexShrink: 0, marginTop: "2px" }}
                  />
                  <div>
                    <p
                      style={{
                        fontWeight: 600,
                        fontSize: "var(--font-size-small)",
                        textTransform: "uppercase",
                        letterSpacing: "var(--letter-spacing-label)",
                        color: "var(--color-text)",
                        marginBottom: "4px",
                      }}
                    >
                      WhatsApp
                    </p>
                    <a
                      href="https://wa.me/920000000000"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Message us on WhatsApp
                    </a>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "var(--space-2)",
                    alignItems: "flex-start",
                  }}
                >
                  <Clock
                    size={22}
                    className="text-accent"
                    style={{ flexShrink: 0, marginTop: "2px" }}
                  />
                  <div>
                    <p
                      style={{
                        fontWeight: 600,
                        fontSize: "var(--font-size-small)",
                        textTransform: "uppercase",
                        letterSpacing: "var(--letter-spacing-label)",
                        color: "var(--color-text)",
                        marginBottom: "4px",
                      }}
                    >
                      Hours
                    </p>
                    <p style={{ color: "var(--color-text-secondary)" }}>
                      Monday to Friday, 9:00 AM to 6:00 PM PKT.
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "var(--space-4)" }}>
                <Notice>
                  <strong>Before you book:</strong> The first consultation is
                  free. We will discuss your goals and explain how we can help.
                  We do not guarantee visa, admission, or scholarship outcomes.
                </Notice>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
