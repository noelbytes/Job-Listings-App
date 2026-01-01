import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';

const JobPage = () => {
    const { id } = useParams(); // useParams is a hook that returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>.
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const res = await fetch(`/api/jobs/${id}`);
                const data = await res.json();
                console.log(data);
                setJob(data);
            } catch (error) {
                console.log('Error fetching data', error);
            } finally {
                setLoading(false);
            }
        }

        fetchJob();
    }, []);

    return loading ? <Spinner /> : (<h1>{ job.title }</h1>);
};


export default JobPage