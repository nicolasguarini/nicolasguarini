"use client"
import Footer from "./Footer"
import Meta from "./Meta"
import Navbar from "./Navbar"

type Props = {
    children: React.ReactNode
}

const Layout = ({children}: Props) => {
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