import {useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
import { Button, Select, Spinner, TextInput } from 'flowbite-react';
import { useState } from "react";
const AllJob = () => {
    const caxios = useAxios()
    const [jobs,setJobs]=useState([])
    const allJobs = useQuery({
        queryKey: ['alljobs'],
        queryFn: async () => {
            let res = await caxios.get('/alljobs')
            return res.data
        }
    })
    async function SearchSubmit(e) {
        e.preventDefault()
        let data = Object.fromEntries(new FormData(e.target))
       console.log(data);
       caxios.post('/search',data).then(res=>setJobs(res.data)).catch(error=>console.log(error))
    }
   
    return (
        <div className="mx-48">
            <form className="mb-4 flex gap-1" onSubmit={SearchSubmit}>
                <Select name="type">
                    <option value="Category">Category</option>
                    <option value="Job title">Job title</option>
                    <option value="Max Price">Max Price</option>
                    <option value="Min Pirce">Min Pirce</option>
                </Select>
                <TextInput className="flex-1" name="search" type="text" placeholder="keyword...."></TextInput>
                <Button type="submit">Search</Button>
            </form>
            <p className="text-center mb-4 font-medium">Total Jobs { jobs.length==0?allJobs.data?.length:jobs.length}</p>
            {
                jobs.length==0?
                allJobs.isLoading ?
                    <div className="text-center">
                        <Spinner aria-label="Center-aligned Extra large spinner example" size="xl" />
                    </div> :
                    <div className=' grid grid-cols-4 gap-3 justify-items-center'>
                        {
                            allJobs.data?.length == 0 || allJobs.data == null ? <p>There is No Job</p> :
                                allJobs.data.map((x, index) => {
                                    return (
                                        <JobCard key={index} title={x.title} desc={x.desc} min={x.min} max={x.max} id={x._id} endate={x.enddate} flag={false}></JobCard>
                                    )

                                })
                        }
                    </div>:<div className=' grid grid-cols-4 gap-3 justify-items-center'>
                        {
                            jobs?.length == 0 || jobs == null ? <p>There is No Job</p> :
                            jobs?.map((x, index) => {
                                    return (
                                        <JobCard key={index} title={x.title} desc={x.desc} min={x.min} max={x.max} id={x._id} endate={x.enddate} flag={false}></JobCard>
                                    )

                                })
                        }
                    </div>
            }
        </div>
    );
};

export default AllJob;