import { Section, SectionHeading } from "../components/Section";
import { Card } from "../components/Card";
import { ButtonLink } from "../components/Button";
import { Band } from "../components/Band";
import { Notice } from "../components/Notice";
import { StepTab } from "../components/StepTab";
import { ArrowRight } from "lucide-react";

export function AboutPage() {
  return (
    <div className="page">
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="animate-in" style={{ maxWidth: "600px" }}>
            <p className="hero__label">About Us</p>
            <h1>
              Helping students in Pakistan{" "}
              <span className="accent">study abroad</span> with honesty
            </h1>
            <p className="hero__lead">
              Rakizar World was founded on a simple belief: students deserve
              honest, practical guidance — not false promises.
            </p>
          </div>
        </div>
      </section>

      {/* Our story */}
      <Section>
        <SectionHeading
          label="Our story"
          title={
            <>
              Built on <span className="text-accent">transparency</span>
            </>
          }
        />
        <div style={{ maxWidth: "65ch" }}>
          <p style={{ marginBottom: "var(--space-3)" }}>
            Rakizar World is a consultancy based in Pakistan, focused on helping
            students and graduates navigate the journey of studying abroad. We
            saw too many students misled by exaggerated promises and confusing
            advice, so we set out to do things differently.
          </p>
          <p style={{ marginBottom: "var(--space-3)" }}>
            Our approach is straightforward: we listen, we assess honestly, and
            we guide you through each stage — from choosing a course to
            preparing your visa application. We will tell you what is realistic
            and what is not.
          </p>
          <p>
            We are not affiliated with any government or university. We are an
            independent consultancy, and our job is to work in your interest.
          </p>
        </div>
      </Section>

      {/* Values */}
      <Section alt>
        <SectionHeading
          label="What we stand for"
          title={
            <>
              Our <span className="text-accent">values</span>
            </>
          }
        />
        <div className="grid-3">
          <Card chip="Honesty" title="We tell you the truth">
            If a path is not right for you, we will say so. We will not push you
            toward a decision that does not serve your interests.
          </Card>
          <Card chip="Clarity" title="We keep it simple">
            The process is complex enough. We break it down into clear, numbered
            steps so you always know what is next.
          </Card>
          <Card chip="Independence" title="We work for you">
            We are not tied to any university or government body. Our advice is
            independent and based on your situation.
          </Card>
        </div>
      </Section>

      {/* Process with step tabs */}
      <Section>
        <SectionHeading
          label="How we work"
          title={
            <>
              A <span className="text-accent">clear process</span>, not a
              black box
            </>
          }
          lead="We want you to understand exactly what happens at each stage."
        />
        <div className="grid-2" style={{ maxWidth: "800px" }}>
          {[
            {
              num: 1,
              title: "We listen first",
              desc: "Your goals, constraints, and preferences come before any recommendation. The first consultation is about understanding you.",
            },
            {
              num: 2,
              title: "We research and shortlist",
              desc: "We compare universities and courses based on your profile and present options with honest pros and cons.",
            },
            {
              num: 3,
              title: "We prepare and submit",
              desc: "We help with applications, documents, and visa filing — checking everything before it goes out.",
            },
            {
              num: 4,
              title: "We brief you before departure",
              desc: "We cover accommodation, finances, and what to expect, so you arrive prepared.",
            },
          ].map((step) => (
            <div
              key={step.num}
              style={{
                display: "flex",
                gap: "var(--space-3)",
                alignItems: "flex-start",
              }}
            >
              <StepTab number={step.num} large />
              <div>
                <h3 style={{ marginBottom: "var(--space-1)" }}>{step.title}</h3>
                <p style={{ color: "var(--color-text-secondary)" }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Team placeholder */}
      <Section alt>
        <SectionHeading
          label="Our team"
          title={
            <>
              The people <span className="text-accent">behind Rakizar</span>
            </>
          }
          lead="Our team photos will appear here once uploaded."
        />
        <div className="grid-3">
          <div>
            <div
              className="placeholder"
              style={{ minHeight: "280px", marginBottom: "var(--space-2)" }}
            >
              Team photo placeholder
            </div>
            <h3 style={{ fontSize: "1.125rem" }}>Founder & Lead Consultant</h3>
            <p style={{ color: "var(--color-text-secondary)", fontSize: "var(--font-size-small)" }}>
              Name and bio to be added.
            </p>
          </div>
          <div>
            <div
              className="placeholder"
              style={{ minHeight: "280px", marginBottom: "var(--space-2)" }}
            >
              Team photo placeholder
            </div>
            <h3 style={{ fontSize: "1.125rem" }}>Visa Specialist</h3>
            <p style={{ color: "var(--color-text-secondary)", fontSize: "var(--font-size-small)" }}>
              Name and bio to be added.
            </p>
          </div>
          <div>
            <div
              className="placeholder"
              style={{ minHeight: "280px", marginBottom: "var(--space-2)" }}
            >
              Team photo placeholder
            </div>
            <h3 style={{ fontSize: "1.125rem" }}>Applications Advisor</h3>
            <p style={{ color: "var(--color-text-secondary)", fontSize: "var(--font-size-small)" }}>
              Name and bio to be added.
            </p>
          </div>
        </div>
      </Section>

      {/* Honest notice */}
      <Section>
        <div style={{ maxWidth: "720px" }}>
          <Notice>
            <strong>Independence statement:</strong> Rakizar World is an
            independent education consultancy. We are not a government agency,
            embassy, or university. We do not represent any official body, and
            we do not guarantee admissions, visas, or scholarships.
          </Notice>
        </div>
      </Section>

      {/* CTA */}
      <Band>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-3)",
            alignItems: "flex-start",
          }}
        >
          <h2>Want to know if we can help?</h2>
          <p style={{ maxWidth: "50ch" }}>
            The best way to find out is a free, no-obligation consultation. Tell
            us about your plans and we will give you honest advice.
          </p>
          <ButtonLink to="/contact" variant="white">
            Book a free consultation <ArrowRight size={16} />
          </ButtonLink>
        </div>
      </Band>
    </div>
  );
}
