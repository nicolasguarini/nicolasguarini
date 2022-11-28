import Link from "next/link"
import { useState } from "react"
import GitHubIcon from "../icons/GitHubIcon"
import MobileMenu from "./MobileMenu"

export type Navigation = {
  name: string, 
  to: string
}[]

const navigation: Navigation= [
  {name: 'home/', to: '/'},
  {name: 'about/', to: '/about'},
  {name: 'contact/', to: '/contact'}
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-black py-5 px-6 md:py-3 fixed min-w-full z-50">
        <div className="container flex flex-wrap items-center justify-between mx-auto font-bold">
          <Link href="/" className="flex items-center">nicolas guarini</Link>
        
          <button 
            type="button" 
            className="inline-flex items-center p-2 ml-3 md:hidden" 
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">Open main menu</span>
            <span aria-hidden="true">menu</span>
          </button>

          <div className="hidden w-full md:block md:w-auto">
            <ul className="flex flex-col p-4 mt-4 md:flex-row  md:mt-0 ">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.to} className="block py-1 px-8 font-normal" >{item.name}</Link>
                </li>
              ))}

              <li>
                <Link 
                  href="https://github.com/nicolasguarini" 
                  className="block py-1 pl-8 font-normal border-l-[1px] border-[#5E5E5E]"
                >
                  <GitHubIcon />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <MobileMenu 
          open={open} 
          setOpen={setOpen} 
          navigation={navigation}
        />
    </nav>
  )
}

export default Navbar
