import Link from "next/link"
import { Dispatch, SetStateAction } from "react"
import { Navigation } from "./Navbar"

type Props = {
    open: Boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    navigation: Navigation
}

const MobileMenu = ({open, setOpen, navigation}: Props) => {
    return(
      <div className={open ? "opacity-100 visible" : "opacity-0 invisible"} style={{"transition": "all 0.2s ease-out !important"}}>
        <div className="bg-black h-[100vh] w-[100vw] fixed top-0 left-0 z-50 text-right p-7">
          <button
            className=""
            onClick={() => setOpen(!open)}
          >close</button>
  
          <div className="w-[100%] mt-[50%] text-center">
            <ul>
                {navigation.map((item) => (
                    <li className="mb-14" key={item.name}>
                        <Link href={item.to} className="">{item.name}</Link>
                    </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  export default MobileMenu