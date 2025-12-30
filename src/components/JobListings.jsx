// import jobs from '../jobs.json';
import JobListing from './JobListing';
// useEffect hook lets you perform side effects in function components - meaning operations like data fetching, setting up a subscription, and manually changing the DOM in React components.
// Here, we want the side effect of fetching data when the component renders.
// When we get the data from the api, we want to put them in state, so we use useState
// useState hook lets you add state to functional components.
import { useEffect, useState } from 'react';
import Spinner from './Spinner';

const JobListings = ({ isHome = false }) => {
    // const jobListings = isHome ? jobs.slice(0, 3) : jobs; // Get the first 3 jobs for recent listings

    // Creating the state
    // jobs - name of the state
    // setJobs - function to update the state
    const [jobs, setJobs] = useState([]); // default value for jobs is an empty array, since we'll make the request when the component loads through useEffect, and then we will fill the state with the response from the API.
    const [loading, setLoading] = useState(true); // for the spinner/loading indicator

    // useEffect takes two arguments - a function and a dependency array
    // If the data in the dependency array changes, useEffect will run the function again.
    useEffect(() => {
        const fetchJobs = async () => {
            // /api is a proxy that we set up in vite.config.js to point to the json-server running on port 8000. 
            // We do this because if we deploy the app, the json-server will no longer be running on localhost:8000
            const apiUrl = isHome ? 'api/jobs?_limit=3' : 'api/jobs';

            try {
                const res = await fetch(apiUrl); // fetching from the json-server
                const data = await res.json();
                setJobs(data);
            } catch (error) {
                console.log('Error fetching data', error);
            } finally {
                setLoading(false); // stop the loading spinner/indicator
            }
        }

        fetchJobs();
    }, []);
    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? 'Recent Jobs' : 'Browse Jobs'}
                </h2>
                    {loading ? (
                        <Spinner loadingState={loading}/>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {jobs.map((job) => (
                                // Note: For lists, you need to provide a unique 'key' prop, or else React will give a warning.
                                <JobListing key={job.id} job={job} />
                            ))}
                        </div>
                    )}
            </div>
        </section>
    )
}

export default JobListings