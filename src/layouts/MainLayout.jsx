// Layouts are basically used for components that you want to show on every page

// In the MainLayout, whatever route you are on, that page is going to come through the outlet
import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"; // This is done to show toast notifications globally
// CSS file for react-toastify
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar"

const MainLayout = () => {
  return (
    <>
        <Navbar />
        {/* Outlet will render the matched child route component */}
        <Outlet />
        {/* ToastContainer will render the toast notifications */}
        <ToastContainer />
    </>
  )
}

export default MainLayout