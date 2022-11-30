import Footer from "./Footer"
import Meta from "./Meta"
import Navbar from "./Navbar"
import { useEffect } from "react"

type Props = {
    children: React.ReactNode
}

const Layout = ({children}: Props) => {
    useEffect(() => {
        const isServer: boolean = typeof window === 'undefined'
        const WOW = !isServer ? require('wow.js') : null  
        new WOW().init()
    }, [])

    return (
        <>
            <Meta />
            <div className="min-h-screen">
                <Navbar />
                <main>{children}</main>
                <Footer />
            </div>
        </>
    )
}

export default Layout
