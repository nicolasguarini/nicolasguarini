"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ExternalLink from "../icons/externalLink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setIsProjectsOpen(false);
    setIsOpen(false);
  }, [pathName]);

  const linkClasses = (path: string) =>
    pathName === (path) ? "text-white" : "text-[#A1A1A1]";

  const linkClassesContains = (path: string) =>
    pathName.includes(path) ? "text-white" : "text-[#A1A1A1]";

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              Nicolas Guarini
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-5">
                <Link href="/" className={linkClasses("/")}>
                  Home
                </Link>
                <Link href="/about" className={linkClasses("/about")}>
                  About
                </Link>
                <div className="relative">
                <button
                  onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                  className={linkClassesContains("/projects") + " focus:outline-none flex items-center"}
                >
                  Projects
                  <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                  {isProjectsOpen && (
                    <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-gray-900 ring-1 ring-black ring-opacity-5" style={{
                      backgroundColor: "rgb(3, 5, 15, 0.65)",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                    }}>
                      <div className="py-1">
                        <Link href="/projects/client" className={"block px-4 py-2 " + linkClasses("/projects/client")}>
                          Client Projects
                        </Link>
                        <Link href="/projects/personal" className={"block px-4 py-2 " + linkClasses("/projects/personal")}>
                          Personal Projects
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                <Link href="/blog" className={linkClassesContains("/blog")}>
                  Blog
                </Link>
                <Link href="https://github.com/nicolasguarini" target="_blank" className="text-[#A1A1A1]">
                  GitHub
                  <ExternalLink />
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Link href="/contact" className="px-5 py-3 border border-[#333232] hover:border-[#A1A1A1] rounded-lg transition-all">
              Contact
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-black inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
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

      <div className={`${isOpen ? "fixed right-4 border-white" : "hidden"} md:hidden`} id="mobile-menu">
        <div
          className="px-8 pt-2 pb-3 space-y-1 sm:px-5 bg-gray-900"
          style={{
            backgroundColor: "rgb(3, 5, 15, 0.65)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
        >
          <Link href="/" className={linkClasses("/") + " block px-3 py-2"}>
            Home
          </Link>

          <Link href="/about" className={linkClasses("/") + " block px-3 py-2"}>
            About
          </Link>
          <Link href="/projects/clients" className={linkClasses("/") + " block px-3 py-2"}>
            Client Projects
          </Link>
          <Link href="/projects/personal" className={linkClasses("/") + " block px-3 py-2"}>
            Personal Projects
          </Link>
          <Link href="/blog" className={linkClasses("/") + " block px-3 py-2"}>
            Blog
          </Link>
          
          <Link href="/contact" className={linkClasses("/") + " block px-3 py-2"}>
            Contact
          </Link>
          <Link href="https://nicolasguarini.notion.site/Appunti-Universit-e5cefc29fff04a3283799023b7558337?pvs=74" target="_blank" className="block px-3 py-2">
            Notes
            <ExternalLink />
          </Link>
          <Link href="https://github.com/nicolasguarini" target="_blank" className="block px-3 py-2">
            GitHub
            <ExternalLink />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;