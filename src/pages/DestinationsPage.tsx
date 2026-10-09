import { Section, SectionHeading } from "../components/Section";
import { Card } from "../components/Card";
import { ButtonLink } from "../components/Button";
import { Band } from "../components/Band";
import { Notice } from "../components/Notice";
import { ArrowRight } from "lucide-react";

export function DestinationsPage() {
  return (
    <div className="page">
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="animate-in" style={{ maxWidth: "600px" }}>
            <p className="hero__label">Destinations</p>
            <h1>
              Where you can{" "}
              <span className="accent">study abroad</span>
            </h1>
            <p className="hero__lead">
              We primarily support applications to four destinations. Each has
              its own requirements, timelines, and post-study options.
            </p>
            <div className="hero__actions">
              <ButtonLink to="/contact" variant="white">
                Book a free consultation
              </ButtonLink>
              <ButtonLink to="/contact" variant="ghost-white">
                Ask a question
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* UK */}
      <Section id="uk">
        <SectionHeading
          label="🇬🇧 United Kingdom"
          title={
            <>
              Study in the <span className="text-accent">United Kingdom</span>
            </>
          }
          lead="The UK offers one-year master's programmes, a graduate route visa for post-study work, and a wide range of universities."
        />
        <div className="grid-3">
          <Card chip="Duration" title="Typical course length">
            Bachelor's: 3 years. Master's: 1 year. This makes the UK
            time-efficient compared to many destinations.
          </Card>
          <Card chip="Post-study" title="Graduate route visa">
            Eligible graduates can stay and work for 2 years (3 years for
            doctoral graduates) after completing their degree.
          </Card>
          <Card chip="Intake" title="Main intakes">
            September (primary) and January (select universities and courses).
          </Card>
        </div>
      </Section>

      {/* Australia */}
      <Section alt id="australia">
        <SectionHeading
          label="🇦🇺 Australia"
          title={
            <>
              Study in <span className="text-accent">Australia</span>
            </>
          }
          lead="Australia offers a strong education system, post-study work rights, and pathways to permanent residency for eligible graduates."
        />
        <div className="grid-3">
          <Card chip="Duration" title="Typical course length">
            Bachelor's: 3 years. Master's: 1 to 2 years depending on the
            programme type.
          </Card>
          <Card chip="Post-study" title="Temporary Graduate visa">
            Eligible graduates can work in Australia for 2 to 4 years depending
            on qualification and location.
          </Card>
          <Card chip="Intake" title="Main intakes">
            February and July. Some universities also offer a November intake.
          </Card>
        </div>
      </Section>

      {/* Canada */}
      <Section id="canada">
        <SectionHeading
          label="🇨🇦 Canada"
          title={
            <>
              Study in <span className="text-accent">Canada</span>
            </>
          }
          lead="Canada is known for its post-study work permit programme and clear pathways to permanent residency for eligible graduates."
        />
        <div className="grid-3">
          <Card chip="Duration" title="Typical course length">
            Bachelor's: 4 years. Master's: 1 to 2 years. Diplomas and
            certificates: 1 to 2 years.
          </Card>
          <Card chip="Post-study" title="Post-graduation work permit">
            Eligible graduates can work in Canada for up to 3 years after
            completing their programme.
          </Card>
          <Card chip="Intake" title="Main intakes">
            September (primary), January, and May (select programmes).
          </Card>
        </div>
      </Section>

      {/* USA */}
      <Section alt id="usa">
        <SectionHeading
          label="🇺🇸 United States"
          title={
            <>
              Study in the <span className="text-accent">United States</span>
            </>
          }
          lead="The US has the largest number of universities in the world, with flexible programme structures and optional practical training for graduates."
        />
        <div className="grid-3">
          <Card chip="Duration" title="Typical course length">
            Bachelor's: 4 years. Master's: 1 to 2 years. The US system allows
            flexibility in course selection.
          </Card>
          <Card chip="Post-study" title="Optional Practical Training">
            F-1 visa holders may be eligible for 1 year of OPT (3 years for STEM
            graduates) after completing their degree.
          </Card>
          <Card chip="Intake" title="Main intakes">
            Fall (August/September) and Spring (January). Some universities
            also offer a Summer intake.
          </Card>
        </div>
      </Section>

      {/* Comparison table */}
      <Section>
        <SectionHeading
          label="Compare"
          title={
            <>
              Side-by-side <span className="text-accent">comparison</span>
            </>
          }
          lead="A quick reference for the four destinations we support. Requirements change — contact us for current details."
        />
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Destination</th>
                <th>Bachelor's length</th>
                <th>Master's length</th>
                <th>Post-study work</th>
                <th>Main intakes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="flag">🇬🇧</span> United Kingdom
                </td>
                <td>3 years</td>
                <td>1 year</td>
                <td>2 years (Graduate Route)</td>
                <td>September, January</td>
              </tr>
              <tr>
                <td>
                  <span className="flag">🇦🇺</span> Australia
                </td>
                <td>3 years</td>
                <td>1 to 2 years</td>
                <td>2 to 4 years (Temporary Graduate)</td>
                <td>February, July</td>
              </tr>
              <tr>
                <td>
                  <span className="flag">🇨🇦</span> Canada
                </td>
                <td>4 years</td>
                <td>1 to 2 years</td>
                <td>Up to 3 years (PGWP)</td>
                <td>September, January, May</td>
              </tr>
              <tr>
                <td>
                  <span className="flag">🇺🇸</span> United States
                </td>
                <td>4 years</td>
                <td>1 to 2 years</td>
                <td>1 year OPT (3 years STEM)</td>
                <td>August, January</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* Notice */}
      <Section alt>
        <div style={{ maxWidth: "720px" }}>
          <Notice>
            <strong>Important:</strong> Visa policies, post-study work rules,
            and intake schedules change frequently. The information above is a
            general guide. We provide current, specific guidance during your
            consultation.
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
          <h2>Not sure which destination is right for you?</h2>
          <p style={{ maxWidth: "50ch" }}>
            Book a free consultation and we will help you compare options based
            on your goals, budget, and timeline.
          </p>
          <ButtonLink to="/contact" variant="white">
            Book a free consultation <ArrowRight size={16} />
          </ButtonLink>
        </div>
      </Band>
    </div>
  );
}
