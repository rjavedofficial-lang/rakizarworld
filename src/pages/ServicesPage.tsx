import { Section, SectionHeading } from "../components/Section";
import { Card } from "../components/Card";
import { ButtonLink } from "../components/Button";
import { Band } from "../components/Band";
import { Notice } from "../components/Notice";
import { ArrowRight } from "lucide-react";

export function ServicesPage() {
  return (
    <div className="page">
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="animate-in" style={{ maxWidth: "600px" }}>
            <p className="hero__label">Our Services</p>
            <h1>
              Everything you need to{" "}
              <span className="accent">study abroad</span>
            </h1>
            <p className="hero__lead">
              From choosing a course to arriving on campus, we provide practical
              support at each stage of your journey.
            </p>
            <div className="hero__actions">
              <ButtonLink to="/contact" variant="white">
                Book a free consultation
              </ButtonLink>
              <ButtonLink to="/contact" variant="ghost-white">
                Contact us
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Consultancy */}
      <Section id="consultancy">
        <SectionHeading
          label="Consultancy"
          title={
            <>
              Study abroad <span className="text-accent">consultancy</span>
            </>
          }
          lead="We help you make informed decisions about your education and career path abroad."
        />
        <div className="grid-3">
          <Card chip="Guidance" title="Course selection">
            We assess your academic background and career goals to recommend
            courses that genuinely fit your profile.
          </Card>
          <Card chip="Research" title="University shortlisting">
            We research and compare universities based on ranking, cost,
            location, and entry requirements relevant to you.
          </Card>
          <Card chip="Planning" title="Career mapping">
            We discuss post-study work options and long-term pathways so your
            choice aligns with your career plans.
          </Card>
        </div>
      </Section>

      {/* Visa */}
      <Section alt id="visa">
        <SectionHeading
          label="Visa"
          title={
            <>
              Visa <span className="text-accent">guidance</span>
            </>
          }
          lead="We help you prepare a complete and accurate visa application, step by step."
        />
        <div className="grid-3">
          <Card chip="Documents" title="Document checklist">
            We provide a clear list of required documents and help you verify
            each one before submission.
          </Card>
          <Card chip="Preparation" title="Interview readiness">
            We conduct mock interviews and share tips on handling common
            questions confidently.
          </Card>
          <Card chip="Filing" title="Application support">
            We guide you through filling out forms, paying fees, and booking
            appointments for your visa submission.
          </Card>
        </div>
      </Section>

      {/* Immigration */}
      <Section id="immigration">
        <SectionHeading
          label="Immigration"
          title={
            <>
              Immigration <span className="text-accent">support</span>
            </>
          }
          lead="Guidance on post-study work routes and longer-term immigration pathways."
        />
        <div className="grid-2">
          <Card chip="Post-study" title="Work visa pathways">
            Information on graduate route visas, post-study work permits, and
            employer sponsorship options for major destinations.
          </Card>
          <Card chip="Dependents" title="Dependent visa guidance">
            Advice on bringing family members with you, including eligibility
            criteria and documentation requirements.
          </Card>
        </div>
      </Section>

      {/* Scholarships */}
      <Section alt id="scholarships">
        <SectionHeading
          label="Scholarships"
          title={
            <>
              Scholarship <span className="text-accent">search</span>
            </>
          }
          lead="We help you find funding opportunities — but we cannot guarantee awards."
        />
        <div className="grid-3">
          <Card chip="Search" title="Finding scholarships">
            We identify scholarships you may be eligible for based on your
            academic profile and target universities.
          </Card>
          <Card chip="Applications" title="Application support">
            We guide you through scholarship application requirements, essays,
            and deadlines.
          </Card>
          <Card chip="Honesty" title="Realistic expectations">
            Scholarships are competitive. We help you apply broadly but will not
            promise outcomes we cannot control.
          </Card>
        </div>
      </Section>

      {/* Scholarship table */}
      <Section>
        <SectionHeading
          label="Examples"
          title={
            <>
              Scholarship <span className="text-accent">examples</span>
            </>
          }
          lead="A sample of scholarship types available at popular destinations. Eligibility and amounts vary — contact us for current details."
        />
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Destination</th>
                <th>Scholarship</th>
                <th>Typical coverage</th>
                <th>Eligibility notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="flag">🇬🇧</span> United Kingdom
                </td>
                <td>Chevening Scholarship</td>
                <td>Full tuition + stipend</td>
                <td>Leadership potential, 2 years work experience</td>
              </tr>
              <tr>
                <td>
                  <span className="flag">🇦🇺</span> Australia
                </td>
                <td>Australia Awards</td>
                <td>Full tuition + living allowance</td>
                <td>Government-backed, competitive</td>
              </tr>
              <tr>
                <td>
                  <span className="flag">🇨🇦</span> Canada
                </td>
                <td>Vanier Canada Graduate Scholarships</td>
                <td>$50,000 per year for 3 years</td>
                <td>Doctoral studies, academic excellence</td>
              </tr>
              <tr>
                <td>
                  <span className="flag">🇺🇸</span> United States
                </td>
                <td>Fulbright Foreign Student Program</td>
                <td>Tuition, airfare, living stipend</td>
                <td>Master's or PhD, competitive selection</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* Honest notice */}
      <Section alt>
        <div style={{ maxWidth: "720px" }}>
          <Notice>
            <strong>Please note:</strong> Scholarship availability, amounts, and
            eligibility criteria change frequently. The table above is for
            illustration only. We help you identify and apply for current
            opportunities, but we do not guarantee any award.
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
          <h2>Not sure which service you need?</h2>
          <p style={{ maxWidth: "50ch" }}>
            Book a free consultation and we will help you figure out where you
            are in the process and what support makes sense for you.
          </p>
          <ButtonLink to="/contact" variant="white">
            Book a free consultation <ArrowRight size={16} />
          </ButtonLink>
        </div>
      </Band>
    </div>
  );
}
