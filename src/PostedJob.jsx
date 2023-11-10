import { useContext, useEffect, useState } from 'react';
import JobCard from './JobCard';
import useAxios from './useAxios';
import { myContext } from "./App";
const PostedJob = () => {
    const { user } = useContext(myContext)
    const a = new Array(4).fill("")
    const [myJob,setMyJob]=useState([])
    const caxios=useAxios()
    useEffect(()=>{
        if (user?.email) {
            caxios.get(`/myjobs/${user.email}/`).then(res=>setMyJob(res.data)).catch(error=>console.log(error))
        }
    },[user])
    return (
        <div className='mx-48'>
            <div className=' grid grid-cols-4 gap-3 justify-items-center'>
                {
                    myJob?.map((x,index) => <JobCard key={index} title={x.title} desc={x.desc} min={x.min} max={x.max} id={x._id} endate={x.enddate} flag={true}></JobCard>)
                }
            </div>
        </div>
    );
};

export default PostedJob;