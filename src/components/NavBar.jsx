import { createElement, useEffect, useRef, useState, useCallback } from "react";
import terracotaSecondaryLogo from "../assets/terracota-logos/terracota-secondary-logo.png";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const SOCIAL_LINKS = [
  { href: "https://www.instagram.com/terracota_alfajores", icon: FaInstagram, label: "Instagram" },
  { href: "https://www.tiktok.com/@terracota_alfajores", icon: AiFillTikTok, label: "TikTok" },
  { href: "https://www.facebook.com/profile.php?id=61584470065292", icon: FaFacebook, label: "Facebook" },
];

const EASING = "cubic-bezier(0.4, 0, 0.2, 1)";
const DURATION = "1.4s";
const TRANSITION = `${DURATION} ${EASING}`;

export default function NavBar() {
  const navRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [navTop, setNavTop] = useState(0);

  const updateNavTop = useCallback(() => {
    if (navRef.current) {
      setNavTop(navRef.current.getBoundingClientRect().top + window.scrollY);
    }
  }, []);
  useEffect(() => {
    updateNavTop();
    const timer = setTimeout(updateNavTop, 4000);
    return () => clearTimeout(timer);
  }, [updateNavTop]);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY >= navTop);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navTop]);

  return (
    <div ref={navRef} className="h-20 relative">
      <nav className={`transition-all duration-300 ease-in-out ${isSticky ? "fixed top-0 left-0 w-full z-11" : "absolute top-0 left-0 w-full"}`}>
        <div className="bg-primary h-20 flex items-center px-4 backdrop-blur-md bg-opacity-90">

          {/* Logo */}
          <div
            className="shrink-0 flex items-center"
            style={{
              width: isSticky ? "" : "0px",
              opacity: isSticky ? 1 : 0,
              transition: `width ${TRANSITION}, opacity ${TRANSITION}`,
            }}
          >
            <img src={terracotaSecondaryLogo} alt="Terracota" className="h-17" />
          </div>

          {/* Espaciador izquierdo */}
          <div style={{ flex: 1 }} />

          {/* Íconos */}
          <div
            className="shrink-0 flex items-center"
            style={{
              gap: isSticky ? "0.625rem" : "1.75rem",
              transition: `gap ${TRANSITION}`,
            }}
          >
            {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => {
              const isTikTok = label === "TikTok";
              const size = isSticky
                ? isTikTok ? "2.125rem" : "1.875rem"
                : isTikTok ? "2.875rem" : "2.5rem";

              return (
                        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                          {createElement(Icon, {
                            className: "fill-secondary hover:scale-125 cursor-pointer",
                            style: {
                              width: size,
                              height: size,
                              transition: `width ${TRANSITION}, height ${TRANSITION}, transform 0.3s ease`,
                            },
                          })}
                        </a>
                      );
            })}
          </div>

          {/* Espaciador derecho */}
          <div
            style={{
              flex: isSticky ? "0 0 0px" : "1 1 0px",
              transition: `flex ${TRANSITION}`,
              overflow: "hidden",
            }}
          />

        </div>
      </nav>
    </div>
  );
}