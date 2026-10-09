import { Section, SectionHeading } from "../components/Section";
import { Card } from "../components/Card";
import { ButtonLink } from "../components/Button";
import { StepTab } from "../components/StepTab";
import { Band } from "../components/Band";
import { Notice } from "../components/Notice";
import { FAQ } from "../components/FAQ";
import {
  GraduationCap,
  Plane,
  FileText,
  ArrowRight,
  Compass,
  ShieldCheck,
  Users,
} from "lucide-react";

export function HomePage() {
  return (
    <div className="page">
      {/* Hero */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="animate-in">
            <p className="hero__label">Consultancy | Visa | Immigration</p>
            <h1>
              Your path to{" "}
              <span className="accent">studying abroad</span> starts here
            </h1>
            <p className="hero__lead">
              Expert guidance for students in Pakistan. We help you choose the
              right course, prepare your application, and navigate the visa
              process — step by step, with honesty at every stage.
            </p>
            <div className="hero__actions">
              <ButtonLink to="/contact" variant="white">
                Book a free consultation
              </ButtonLink>
              <ButtonLink to="/services" variant="ghost-white">
                Explore services
              </ButtonLink>
            </div>
          </div>

          {/* Hero step card */}
          <div className="hero-card animate-in">
            <p className="hero-card__title">How it works</p>
            <div className="hero-step">
              <span className="hero-step__num">1</span>
              <span className="hero-step__text">
                Tell us your goals — your field, budget, and preferred country.
              </span>
            </div>
            <div className="hero-step">
              <span className="hero-step__num">2</span>
              <span className="hero-step__text">
                We shortlist universities and guide your application.
              </span>
            </div>
            <div className="hero-step">
              <span className="hero-step__num">3</span>
              <span className="hero-step__text">
                We prepare your visa file and walk you through the interview.
              </span>
            </div>
            <div className="hero-step">
              <span className="hero-step__num">4</span>
              <span className="hero-step__text">
                You travel, enrol, and begin your journey abroad.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <Section>
        <SectionHeading
          label="What we do"
          title={
            <>
              Clear, practical support for <span className="text-accent">every stage</span>
            </>
          }
          lead="From choosing a course to arriving on campus, we break the process into manageable steps so you always know what comes next."
        />
        <div className="grid-3">
          <Card
            chip="Consultancy"
            title="Study Abroad Consultancy"
            linkText="Learn more"
            linkHref="#/services#consultancy"
          >
            Personalised advice on courses, universities, and countries that fit
            your goals and budget.
          </Card>
          <Card
            chip="Visa"
            title="Visa Guidance"
            linkText="Learn more"
            linkHref="#/services#visa"
          >
            Step-by-step help preparing your visa application, documents, and
            interview readiness.
          </Card>
          <Card
            chip="Immigration"
            title="Immigration Support"
            linkText="Learn more"
            linkHref="#/services#immigration"
          >
            Guidance on post-study work routes, dependent visas, and long-term
            immigration pathways.
          </Card>
          <Card
            chip="Scholarships"
            title="Scholarship Search"
            linkText="Learn more"
            linkHref="#/services#scholarships"
          >
            We help you find and apply to scholarships and funding opportunities
            for eligible programmes.
          </Card>
          <Card
            chip="Preparation"
            title="Application Prep"
            linkText="Learn more"
            linkHref="#/services#prep"
          >
            Statement of purpose reviews, CV formatting, and reference letter
            guidance to strengthen your application.
          </Card>
          <Card
            chip="Pre-departure"
            title="Pre-departure Briefing"
            linkText="Learn more"
            linkHref="#/services#pre-departure"
          >
            Practical sessions on accommodation, banking, travel, and settling
            into your new country.
          </Card>
        </div>
      </Section>

      {/* How we work — numbered steps with signature tab */}
      <Section alt id="how-we-work">
        <SectionHeading
          label="How we work"
          title={
            <>
              A simple, <span className="text-accent">four-step process</span>
            </>
          }
          lead="No jargon, no false promises. Just clear guidance from start to finish."
        />
        <div className="grid-2" style={{ maxWidth: "800px" }}>
          {[
            {
              num: 1,
              icon: Compass,
              title: "Discovery call",
              desc: "We learn about your academic background, career goals, and budget. You ask questions — we give honest answers.",
            },
            {
              num: 2,
              icon: FileText,
              title: "University shortlisting",
              desc: "We research and recommend universities and courses that match your profile and preferences.",
            },
            {
              num: 3,
              icon: ShieldCheck,
              title: "Application and visa",
              desc: "We help you prepare and submit applications, then guide your visa file and interview prep.",
            },
            {
              num: 4,
              icon: Plane,
              title: "Pre-departure and travel",
              desc: "We brief you on practicalities — accommodation, finances, and what to expect when you arrive.",
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

      {/* Why choose us */}
      <Section>
        <SectionHeading
          label="Why Rakizar World"
          title={
            <>
              Honest guidance, <span className="text-accent">no shortcuts</span>
            </>
          }
          lead="We believe in transparency. We will tell you what is realistic, not just what you want to hear."
        />
        <div className="grid-3">
          <Card chip="Principle" title="We tell you the truth">
            If a university or country is not a good fit, we say so. We will not
            push you toward a course just because it is easier to place.
          </Card>
          <Card chip="Experience" title="Real knowledge of the process">
            We understand the documentation, timelines, and common pitfalls of
            student visa applications for major destinations.
          </Card>
          <Card chip="Support" title="We stay with you throughout">
            From your first call to your pre-departure briefing, you have a
            consistent point of contact for questions.
          </Card>
        </div>
      </Section>

      {/* Honest notice */}
      <Section alt>
        <div style={{ maxWidth: "720px" }}>
          <Notice>
            <strong>An honest note:</strong> We do not guarantee visa approvals,
            university admissions, or scholarship outcomes. Our role is to guide
            and support you — the final decision always rests with the
            university and the immigration authority.
          </Notice>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading
          label="Common questions"
          title={
            <>
              Frequently asked <span className="text-accent">questions</span>
            </>
          }
        />
        <div style={{ maxWidth: "760px" }}>
          <FAQ
            items={[
              {
                question: "Do you charge for the first consultation?",
                answer:
                  "No, the first consultation is free. We use it to understand your goals and explain how we can help. After that, we will be clear about any fees before you commit.",
              },
              {
                question: "Which countries do you help with?",
                answer:
                  "We primarily support applications to the United Kingdom, Australia, Canada, and the United States. If you are interested in another destination, ask us and we will let you know if we can help.",
              },
              {
                question: "Can you guarantee my visa will be approved?",
                answer:
                  "No consultancy can guarantee a visa outcome. We help you prepare the strongest possible application, but the decision is made by the immigration authority of the destination country.",
              },
              {
                question: "Do you help with scholarships?",
                answer:
                  "We help you identify scholarships you may be eligible for and guide you through the application. However, scholarship awards are competitive and decided by the awarding body.",
              },
              {
                question: "Are your services available outside Lahore?",
                answer:
                  "Yes. We work with students across Pakistan online, so location is not a barrier. Our consultations can be conducted over phone or video call.",
              },
            ]}
          />
        </div>
      </Section>

      {/* CTA Band */}
      <Band>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-3)",
            alignItems: "flex-start",
          }}
        >
          <h2>Ready to take the first step?</h2>
          <p style={{ maxWidth: "50ch" }}>
            Book a free consultation and let's talk about your plans. No
            pressure, no obligation — just an honest conversation about your
            options.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--space-2)",
            }}
          >
            <ButtonLink to="/contact" variant="white">
              Book a free consultation <ArrowRight size={16} />
            </ButtonLink>
            <ButtonLink to="/services" variant="outline">
              View all services
            </ButtonLink>
          </div>
        </div>
      </Band>

      {/* Icons showcase strip */}
      <Section alt>
        <SectionHeading
          label="At a glance"
          title={
            <>
              What we <span className="text-accent">help with</span>
            </>
          }
        />
        <div className="grid-3">
          <Card chip="Step 1" title="Choosing your path">
            <div
              style={{
                display: "flex",
                gap: "var(--space-2)",
                marginTop: "var(--space-1)",
              }}
            >
              <GraduationCap size={28} className="text-accent" />
              <p style={{ color: "var(--color-text-secondary)", margin: 0 }}>
                Course selection, university matching, and career planning.
              </p>
            </div>
          </Card>
          <Card chip="Step 2" title="Getting accepted">
            <div
              style={{
                display: "flex",
                gap: "var(--space-2)",
                marginTop: "var(--space-1)",
              }}
            >
              <FileText size={28} className="text-accent" />
              <p style={{ color: "var(--color-text-secondary)", margin: 0 }}>
                Application forms, SOPs, CVs, and document verification.
              </p>
            </div>
          </Card>
          <Card chip="Step 3" title="Arriving prepared">
            <div
              style={{
                display: "flex",
                gap: "var(--space-2)",
                marginTop: "var(--space-1)",
              }}
            >
              <Users size={28} className="text-accent" />
              <p style={{ color: "var(--color-text-secondary)", margin: 0 }}>
                Pre-departure briefings, accommodation, and settling-in advice.
              </p>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}
