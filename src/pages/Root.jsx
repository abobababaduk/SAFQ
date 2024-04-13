import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"



const Root = () => {

    useEffect(() => {

        document.title = "site"

    }, [])

    return (
        <>

            <Header />

            <div className="container">



                <Outlet />

            </div>

            <Footer />

        </>
    )
}

export default Root