// Layouts are basically used for components that you want to show on every page

// In the MainLayout, whatever route you are on, that page is going to come through the outlet
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const MainLayout = () => {
  return (
    <>
        <Navbar />
        {/* Outlet will render the matched child route component */}
        <Outlet />
    </>
  )
}

export default MainLayout