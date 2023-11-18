import { useContext } from 'react';
import JobCard from './JobCard';
import useAxios from './useAxios';
import { Spinner } from 'flowbite-react';
import { myContext } from "./App";
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const PostedJob = () => {
    const { user } = useContext(myContext)
    const caxios = useAxios()
    const navigate=useNavigate()
    const myjob_query = useQuery({
        queryKey: ['myjobs'],
        queryFn: async () => {
            const res=await caxios.get(`/myjobs/${user.email}/`)
            return res.data;
        },
        enabled: !!user?.email,
        retry:5,
        retryDelay:2000
    })
    if (myjob_query.isError && myjob_query.error.response?.status==401) {
        navigate('/login')
    }
    function deleteJob(id) {
        Swal.fire({
            title: "Do you want to Delete this Job?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
        }).then((res) => {
            if (res.isConfirmed) {
                caxios.get(`/jobdelete/${id}`).then((res) => { 
                    if (res.data.deletedCount!=0) {
                        Swal.fire({
                            title:"Delete Successful",
                            icon:"success",
                            confirmButtonColor:"#3085d6",
                            confirmButtonText:"Ok"
                        })
                        myjob_query.refetch()
                    }
                 }).catch((err) => { console.log(err); });
            }
        })
    }
    return (
        <>
            {
                myjob_query.isLoading ?
                    <div className="text-center">
                        <Spinner aria-label="Center-aligned Extra large spinner example" size="xl" />
                    </div> : 
                    myjob_query.isSuccess?
                    <div className='mx-7 lg:mx-48'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 justify-items-center'>
                            {myjob_query.data?.length == 0 || myjob_query.data == null ? <p>You did not post any job</p> :
                                myjob_query.data.map((x, index) => <JobCard key={index} deleteJob={deleteJob} title={x.title} desc={x.desc} min={x.min} max={x.max} id={x._id} endate={x.enddate} flag={true}></JobCard>)
                            }
                        </div>
                    </div>:
                    <p className='text-center text-red-500 font-black text-4xl'>No data found</p>
            }
        </>

    );
};

export default PostedJob;