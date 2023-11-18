import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
import { Button,Spinner, TextInput } from 'flowbite-react';
import { Checkbox, Label } from 'flowbite-react';
import { useState } from "react";
const AllJob = () => {
    const caxios = useAxios()
    const [jobs, setJobs] = useState([])
    const [search, setSearch] = useState(false)
    const allJobs = useQuery({
        queryKey: ['alljobs'],
        queryFn: async () => {
            let res = await caxios.get('/alljobs')
            return res.data
        },
        retry:5,
        retryDelay:2000
    })
    function SearchSubmit(e) {
        e.preventDefault()
        let error=document.getElementById('error')
        error.textContent=""
        let data = Object.fromEntries(new FormData(e.target))
        let c=Object.keys(data);
        let flag=false
        let t=new Array()
        for (const i of c) {
            if (String(i).includes("cate")) {
                flag=true
                t.push(data[i])
            }
        }
        data.category=t
        if (flag) {
            error.textContent=""
            if ((data.max=='' || data.min=='')||parseInt(data.max)>=parseInt(data.min)) {
                caxios.post('/search', data).then(res => {
                    setSearch(true)
                    setJobs(res.data)
                }).catch(error => console.log(error))
            }    else{
                error.textContent="Max is smaller then min"
            }
            
        }else{
            error.textContent="No category Selected"
        }
        
    }
    function clearSearch() {
        setSearch(false)
        let form=document.getElementById("searchform");
        form.reset()
    }

    return (
        <div className="mx-7 lg:mx-48">
            <form className="mb-4 flex flex-col gap-1" onSubmit={SearchSubmit} id="searchform">
                <TextInput className="flex-1" name="search" type="text" required placeholder="Job Title"></TextInput>
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                        <Checkbox name="category1" id="accept" value="web development" defaultChecked />
                        <Label htmlFor="accept" className="flex">
                        Web Development
                        </Label>
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox name="category2" id="accept" value="digital marketing" defaultChecked />
                        <Label htmlFor="accept" className="flex">
                        Digital Marketing
                        </Label>
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox name="category3" id="accept" value="graphics design" defaultChecked />
                        <Label htmlFor="accept" className="flex">
                        Graphics Design
                        </Label>
                    </div>
                </div>
                <div className="flex gap-2">
                <TextInput className="flex-1" name="max" type="number" placeholder="Max Price"></TextInput>
                <TextInput className="flex-1" name="min" type="number" placeholder="Min Price"></TextInput>
                </div>
                <div className="flex gap-2 w-full">
                    <Button type="submit" className="w-full">Search</Button>
                    <Button onClick={clearSearch} className="w-full">Clear</Button>
                </div>
                <p className="text-red-600 font-medium" id="error"></p>

            </form>
            <p className="text-center mb-4 font-medium">Total Jobs {search ? jobs.length : allJobs.data?.length}</p>
            {
                !search ?
                    allJobs.isLoading ?
                        <div className="text-center">
                            <Spinner aria-label="Center-aligned Extra large spinner example" size="xl" />
                        </div> :
                        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 justify-items-center'>
                            {
                                allJobs.data?.length == 0 || allJobs.data == null ? <p>There is No Job</p> :
                                    allJobs.data.map((x, index) => {
                                        return (
                                            <JobCard key={index} title={x.title} desc={x.desc} min={x.min} max={x.max} id={x._id} endate={x.enddate} flag={false}></JobCard>
                                        )

                                    })
                            }
                        </div> : <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 justify-items-center'>
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