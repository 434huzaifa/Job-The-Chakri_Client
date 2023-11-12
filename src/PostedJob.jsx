import { useContext } from 'react';
import JobCard from './JobCard';
import useAxios from './useAxios';
import { Spinner } from 'flowbite-react';
import { myContext } from "./App";
import { useQuery } from '@tanstack/react-query';
const PostedJob = () => {
    const { user } = useContext(myContext)
    const caxios = useAxios()
    const myjob_query = useQuery({
        queryKey: ['myjobs'],
        queryFn: async () => {
            const res=await caxios.get(`/myjobs/${user.email}/`)
            return res.data;
        },
        enabled: !!user?.email,
    })
    return (
        <>
            {
                myjob_query.isLoading ?
                    <div className="text-center">
                        <Spinner aria-label="Center-aligned Extra large spinner example" size="xl" />
                    </div> : <div className='mx-48'>
                        <div className=' grid grid-cols-4 gap-3 justify-items-center'>
                            {myjob_query.data.length == 0 || myjob_query.data == null ? <p>You did not post any job</p> :
                                myjob_query.data.map((x, index) => <JobCard key={index} title={x.title} desc={x.desc} min={x.min} max={x.max} id={x._id} endate={x.enddate} flag={true}></JobCard>)
                            }
                        </div>
                    </div>
            }
        </>

    );
};

export default PostedJob;