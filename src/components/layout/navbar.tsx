"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ExternalLink from "../icons/externalLink";

const UNIVERSITY_NOTES_URL =
  "https://nicolasguarini.notion.site/Appunti-Universit-e5cefc29fff04a3283799023b7558337?pvs=74";

const focusRing =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const pathName = usePathname();
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsProjectsOpen(false);
    setIsOpen(false);
  }, [pathName]);

  // Chiude il dropdown con Escape o cliccando fuori
  useEffect(() => {
    if (!isProjectsOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsProjectsOpen(false);
    };
    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      if (!projectsRef.current?.contains(event.target as Node)) {
        setIsProjectsOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [isProjectsOpen]);

  const isActive = (path: string) => pathName === path;
  const isWithin = (path: string) => pathName.startsWith(path);

  const linkClasses = (active: boolean) =>
    `${active ? "text-white" : "text-[#A1A1A1]"} hover:text-white transition-colors ${focusRing}`;

  const current = (active: boolean) => (active ? ("page" as const) : undefined);

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <Link href="/" className={`text-2xl font-bold ${focusRing}`}>
              Nicolas Guarini
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-5">
                <Link
                  href="/"
                  aria-current={current(isActive("/"))}
                  className={linkClasses(isActive("/"))}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  aria-current={current(isActive("/about"))}
                  className={linkClasses(isActive("/about"))}
                >
                  About
                </Link>

                <div className="relative" ref={projectsRef}>
                  <button
                    type="button"
                    onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                    aria-expanded={isProjectsOpen}
                    aria-haspopup="true"
                    className={`flex items-center ${linkClasses(isWithin("/projects"))}`}
                  >
                    Projects
                    <svg
                      className={`ml-1 h-4 w-4 transition-transform ${isProjectsOpen ? "rotate-180" : ""}`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isProjectsOpen && (
                    <div
                      className="absolute mt-2 w-48 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50"
                      style={{
                        backgroundColor: "rgba(3, 5, 15, 0.65)",
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                      }}
                    >
                      <div className="py-1">
                        <Link
                          href="/projects/client"
                          aria-current={current(isActive("/projects/client"))}
                          className={`block px-4 py-2 ${linkClasses(isActive("/projects/client"))}`}
                        >
                          Client Projects
                        </Link>
                        <Link
                          href="/projects/personal"
                          aria-current={current(isActive("/projects/personal"))}
                          className={`block px-4 py-2 ${linkClasses(isActive("/projects/personal"))}`}
                        >
                          Personal Projects
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  href="/blog"
                  aria-current={current(isWithin("/blog"))}
                  className={linkClasses(isWithin("/blog"))}
                >
                  Blog
                </Link>
                <a
                  href="https://github.com/nicolasguarini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClasses(false)}
                >
                  GitHub
                  <ExternalLink />
                </a>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <Link
              href="/contact"
              aria-current={current(isActive("/contact"))}
              className={`px-5 py-3 border border-[#333232] hover:border-[#A1A1A1] rounded-lg transition-colors ${focusRing}`}
            >
              Contact
            </Link>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-black inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-white transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">{isOpen ? "Close main menu" : "Open main menu"}</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "fixed right-4 z-50" : "hidden"} md:hidden`} id="mobile-menu">
        <div
          className="px-8 pt-2 pb-3 space-y-1 sm:px-5 rounded-lg"
          style={{
            backgroundColor: "rgba(3, 5, 15, 0.65)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
        >
          <Link href="/" aria-current={current(isActive("/"))} className={`block px-3 py-2 ${linkClasses(isActive("/"))}`}>
            Home
          </Link>
          <Link href="/about" aria-current={current(isActive("/about"))} className={`block px-3 py-2 ${linkClasses(isActive("/about"))}`}>
            About
          </Link>
          <Link href="/projects/client" aria-current={current(isActive("/projects/client"))} className={`block px-3 py-2 ${linkClasses(isActive("/projects/client"))}`}>
            Client Projects
          </Link>
          <Link href="/projects/personal" aria-current={current(isActive("/projects/personal"))} className={`block px-3 py-2 ${linkClasses(isActive("/projects/personal"))}`}>
            Personal Projects
          </Link>
          <Link href="/blog" aria-current={current(isWithin("/blog"))} className={`block px-3 py-2 ${linkClasses(isWithin("/blog"))}`}>
            Blog
          </Link>
          <Link href="/contact" aria-current={current(isActive("/contact"))} className={`block px-3 py-2 ${linkClasses(isActive("/contact"))}`}>
            Contact
          </Link>
          <a href={UNIVERSITY_NOTES_URL} target="_blank" rel="noopener noreferrer" className={`block px-3 py-2 ${linkClasses(false)}`}>
            Notes
            <ExternalLink />
          </a>
          <a href="https://github.com/nicolasguarini" target="_blank" rel="noopener noreferrer" className={`block px-3 py-2 ${linkClasses(false)}`}>
            GitHub
            <ExternalLink />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
