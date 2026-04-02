import { useEffect, useState } from "react";
import profileSvg from "../images/avatar-one.svg";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Pricing", href: "#plans" },
  { label: "Community", href: "#testimonials" },
  { label: "Contact us", href: "#footer" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 48;
      setIsScrolled(scrolled);
      if (scrolled) {
        setMobileOpen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 flex w-full justify-center transition-all duration-300 font-['Poppins'] ${isScrolled ? "pt-4 bg-transparent border-transparent" : "pt-0 bg-[#BBBBBB] border-b border-black"
          }`}
      >
        <div
          className={`flex items-center transition-all duration-500 overflow-hidden ${isScrolled
              ? "h-[70px] w-full max-w-[750px] justify-between rounded-[30px] bg-[#FFFFFF]/[0.65] px-4 backdrop-blur-md shadow-lg"
              : "h-[120px] w-full max-w-[1440px] justify-between px-6 lg:px-10 bg-transparent"
            }`}
        >
          {/* Logo / Avatar */}
          <div className="flex shrink-0 items-center">
            {isScrolled ? (
              <img
                src={profileSvg}
                alt="Profile"
                className="h-[50px] w-[50px] rounded-[30px] object-cover"
              />
            ) : (
              <a
                href="#home"
                className="flex items-center justify-start font-medium tracking-[0.11em] text-[#000000] text-[24px] leading-[32px] w-[278px] h-[36px] no-underline decoration-transparent"
              >
                SVASTHA TEKTHON
              </a>
            )}
          </div>

          {/* Desktop Nav Items */}
          <nav
            className={`${
              isScrolled
                ? "flex flex-1 items-center justify-end sm:justify-center gap-[clamp(8px,2.5vw,40px)] px-2 lg:px-6"
                : "hidden lg:flex flex-1 items-center justify-center max-w-[700px] justify-between gap-4 lg:gap-8 h-[65px] mx-4 lg:mx-8"
            }`}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-medium text-[#000000] no-underline transition-colors hover:text-[#DCFB46] text-[clamp(12px,3.5vw,22px)] leading-none whitespace-nowrap`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Auth Buttons (Only when not scrolled) */}
          {!isScrolled && (
            <div className="hidden items-center gap-4 lg:flex shrink-0">
              <button
                type="button"
                className="rounded-[30px] border-[1.5px] border-[#DCFB46] px-8 py-2 text-[20px] font-medium text-[#000000] transition-colors hover:bg-[#DCFB46]"
              >
                Login
              </button>
              <button
                type="button"
                className="rounded-[30px] bg-[#000000] px-8 py-2 text-[20px] font-medium text-white transition-colors hover:bg-black/80"
              >
                Register
              </button>
            </div>
          )}

          {/* Mobile Menu Button (Hidden when scrolled) */}
          <div className={`${isScrolled ? "hidden" : "flex lg:hidden"} items-center pr-2`}>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-8 w-8 items-center justify-center rounded-[30px] border border-black/15 bg-white/40"
              aria-label="Toggle navigation"
            >
              <span className="relative h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-5 bg-black transition ${mobileOpen ? "translate-y-[7px] rotate-45" : ""
                    }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-0.5 w-5 bg-black transition ${mobileOpen ? "opacity-0" : ""
                    }`}
                />
                <span
                  className={`absolute left-0 top-[14px] h-0.5 w-5 bg-black transition ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
                    }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && !isScrolled && (
        <div className="fixed left-4 right-4 top-24 z-40 rounded-[30px] bg-[#E6E6E6] p-4 shadow-xl lg:hidden font-['Poppins']">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-[22px] font-medium text-[#000000] no-underline transition hover:text-[#DCFB46]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <button
              type="button"
              className="rounded-[30px] border-[1.5px] border-[#DCFB46] px-4 py-2 text-center text-[20px] font-medium text-[#000000]"
            >
              Login
            </button>
            <button
              type="button"
              className="rounded-[30px] bg-[#000000] px-4 py-2 text-center text-[20px] font-medium text-white"
            >
              Register
            </button>
          </div>
        </div>
      )}
    </>
  );
}
