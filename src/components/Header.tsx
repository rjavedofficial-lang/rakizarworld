import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, MessageCircle, Sun, Moon } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./Button";

interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navLinks: NavLink[] = [
  { label: "Home", href: "#/" },
  {
    label: "Services",
    href: "#/services",
    children: [
      { label: "Study Abroad Consultancy", href: "#/services#consultancy" },
      { label: "Visa Guidance", href: "#/services#visa" },
      { label: "Immigration Support", href: "#/services#immigration" },
      { label: "Scholarship Search", href: "#/services#scholarships" },
    ],
  },
  {
    label: "Destinations",
    href: "#/destinations",
    children: [
      { label: "United Kingdom", href: "#/destinations#uk" },
      { label: "Australia", href: "#/destinations#australia" },
      { label: "Canada", href: "#/destinations#canada" },
      { label: "United States", href: "#/destinations#usa" },
    ],
  },
  { label: "About", href: "#/about" },
  { label: "Contact", href: "#/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("rakizar-theme");
    if (saved === "dark" || saved === "light") {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("rakizar-theme", next);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
        <div className="container header__inner">
          <Logo />

          {/* Desktop nav */}
          <nav className="nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <div key={link.label} className="nav__item">
                <a
                  href={link.href}
                  className={`nav__link ${
                    link.children ? "nav__link--has-dropdown" : ""
                  }`}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown size={14} strokeWidth={2} />
                  )}
                </a>
                {link.children && (
                  <div className="nav__dropdown">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="nav__dropdown-link"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="header__actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <a
              href="https://wa.me/920000000000"
              className="btn btn--whatsapp btn--icon"
              aria-label="Chat on WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} />
            </a>
            <Button href="#/contact" variant="solid" size="sm">
              Book a consultation
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className="mobile-menu__nav" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <div key={link.label}>
              {link.children ? (
                <button
                  className="mobile-menu__link"
                  style={{ width: "100%", background: "none", textAlign: "left", fontFamily: "inherit", font: "inherit" }}
                  onClick={() =>
                    setExpandedMobile(
                      expandedMobile === link.label ? null : link.label
                    )
                  }
                  aria-expanded={expandedMobile === link.label}
                >
                  {link.label}
                  <ChevronDown
                    size={18}
                    style={{
                      transform:
                        expandedMobile === link.label
                          ? "rotate(180deg)"
                          : "none",
                      transition: "transform 180ms ease",
                    }}
                  />
                </button>
              ) : (
                <a
                  href={link.href}
                  className="mobile-menu__link"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              )}
              {link.children && expandedMobile === link.label && (
                <div className="mobile-menu__sub">
                  {link.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="mobile-menu__sub-link"
                      onClick={closeMenu}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div style={{ paddingTop: "var(--space-3)" }}>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              style={{ width: "auto", justifyContent: "flex-start", gap: "8px" }}
            >
              {theme === "light" ? (
                <>
                  <Moon size={18} /> Dark mode
                </>
              ) : (
                <>
                  <Sun size={18} /> Light mode
                </>
              )}
            </button>
          </div>
        </nav>
        <div className="mobile-menu__actions">
          <Button
            href="https://wa.me/920000000000"
            variant="whatsapp"
            block
            onClick={closeMenu}
          >
            <MessageCircle size={18} /> WhatsApp us
          </Button>
          <Button href="#/contact" variant="solid" block onClick={closeMenu}>
            Book a consultation
          </Button>
        </div>
      </div>
    </>
  );
}
