import { MessageCircle, MapPin, Mail } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__about">
            <Logo />
            <p>
              Consultancy, visa, and immigration support for students in
              Pakistan who want to study abroad.
            </p>
          </div>

          <div className="footer__col">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#/services#consultancy">Study Abroad Consultancy</a>
              </li>
              <li>
                <a href="#/services#visa">Visa Guidance</a>
              </li>
              <li>
                <a href="#/services#immigration">Immigration Support</a>
              </li>
              <li>
                <a href="#/services#scholarships">Scholarship Search</a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Destinations</h4>
            <ul>
              <li>
                <a href="#/destinations#uk">United Kingdom</a>
              </li>
              <li>
                <a href="#/destinations#australia">Australia</a>
              </li>
              <li>
                <a href="#/destinations#canada">Canada</a>
              </li>
              <li>
                <a href="#/destinations#usa">United States</a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="#/contact">
                  <MapPin
                    size={14}
                    style={{
                      display: "inline",
                      marginRight: "4px",
                      verticalAlign: "middle",
                    }}
                  />
                  Lahore, Pakistan
                </a>
              </li>
              <li>
                <a href="mailto:info@rakizarworld.com">
                  <Mail
                    size={14}
                    style={{
                      display: "inline",
                      marginRight: "4px",
                      verticalAlign: "middle",
                    }}
                  />
                  info@rakizarworld.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/920000000000">
                  <MessageCircle
                    size={14}
                    style={{
                      display: "inline",
                      marginRight: "4px",
                      verticalAlign: "middle",
                    }}
                  />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            &copy; {new Date().getFullYear()} Rakizar World. Consultancy | Visa
            | Immigration.
          </p>
          <p>
            We do not guarantee visa or admission outcomes.{" "}
            <a href="#/about">Read more</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
