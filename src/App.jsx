import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import HomeCards from "./components/HomeCards"
import JobListings from "./components/JobListings"
import ViewAllJobs from "./components/ViewAllJobs"
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import JobPage, { jobLoader } from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'

const App = () => {
    const addJob = (newJob) => {
        console.log(newJob);
    }
    
    // Breaking this down
    // createBrowserRouter: This function creates a router instance that uses the HTML5 history API to keep your UI in sync with the URL.
    // createRoutesFromElements: This function creates route configuration from React elements.
    // Route: This component is used to define a route in your application. index prop indicates that this route will match the root path.
    // RouterProvider: This component makes the router available to the rest of your app.
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<MainLayout />}>
                {/* Any routes that you put in here are going to be rendered inside the MainLayout */}
                <Route index element={<HomePage />} />
                <Route path='/jobs' element={<JobsPage />} />
                {/* : basically signifies that the variable is dynamic. The loader function fetches the data for the route before the component renders */}
                <Route path='/jobs/:id' element={<JobPage />} loader={jobLoader} />
                {/* The * here will match any route that doesn't match the above routes */}
                <Route path='/add-job' element={< AddJobPage addJobSubmit={addJob} />} />
                <Route path='*' element={<NotFoundPage />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />
}

export default App