import { useQuery } from "@tanstack/react-query";
import { Label, TextInput, Button, Select, Textarea, Spinner } from 'flowbite-react';
import useAxios from "./useAxios";
import { useContext, useState } from "react";
import { myContext } from "./App";
import { useNavigate, useParams } from "react-router-dom";
import moment from 'moment';
import Swal from "sweetalert2";
import { DatePicker } from 'react-rainbow-components';
const initialState = {
    date: new Date(Date.now()),
    locale: { name: 'en-US', label: 'English (US)' },
};
const containerStyles2 = {
    maxWidth: "100%",
};
const Update = () => {
    const { user } = useContext(myContext)
    const caxios = useAxios()
    const { id } = useParams()
    const [date, setDate] = useState(null)
    const navigate = useNavigate()
    const job_query = useQuery({
        queryKey: ['jobupdated'],
        queryFn: async () => {
            const res = await caxios.get(`/job/${id}`)
            setDate(new Date(Date.parse(res.data.enddate)))
            return res.data
        },
        enabled: !!user && !!id,
    }
    )
    function GetJobDetails(e) {
        e.preventDefault();
        let formdata = new FormData(e.target);
        let data = Object.fromEntries(formdata)
        let error = document.getElementById("error")
        error.textContent = ""
        if (parseInt(data.min) > parseInt(data.max)) {
            error.textContent = "Max value is smaller then min value"
        } else {
            data.enddate = moment(data.enddate, 'MM/DD/YYYY').format('YYYY-MM-DD')
            caxios.put(`/updatedjobs/${id}`, data).then(res => {
                if (res.data?.modifiedCount != 0) {
                    Swal.fire("You Successfully Updated Job")
                    navigate('/postedjob')
                } else {
                    Swal.fire({
                        title: "Job Not Updated",
                        icon: "error",
                    })
                }
            }).catch(error => console.log(error))
        }
    }
    return (
        <div className="mx-48">
            {
                job_query.isLoading ? <div className="text-center">
                    <Spinner aria-label="Center-aligned Extra large spinner example" size="xl" />
                </div> : <form onSubmit={GetJobDetails}>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="employer" value="Employer" />
                        </div>
                        <TextInput id="employer" name="seller" type="email" value={user.email} readOnly />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="title" value="Job Title" />
                        </div>
                        <TextInput id="title" defaultValue={job_query.data.title} name="title" type="text" />
                    </div>
                    <div
                        className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
                        style={containerStyles2}
                    >
                        <div className="mb-2 block">
                            <Label htmlFor="title" value="Deadline" />
                        </div>
                        <DatePicker
                            id="datePicker-1"
                            borderRadius="semi-rounded"
                            name="enddate"
                            value={date}
                            onChange={value => setDate(value)}
                            formatStyle="medium"
                            locale={initialState.locale.name}
                            labelAlignment='left'
                            minDate={new Date(Date.now())}
                        />
                    </div>
                    <div className="">
                        <div className="mb-2 block">
                            <Label htmlFor="cate" value="Select your Category" />
                        </div>
                        <Select id="cate" name="cate" required defaultValue={job_query.data.title}>
                            <option value="web development">Web Development</option>
                            <option value="digital marketing">Digital Marketing</option>
                            <option value="graphics design">Graphics Design</option>
                        </Select>
                    </div>
                    <div className="">
                        <div className="mb-2 block">
                            <Label htmlFor="desc" value="Description" />
                        </div>
                        <Textarea id="desc" name="desc" defaultValue={job_query.data.desc} required rows={4} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="min" value="Minimum Price" />
                        </div>
                        <TextInput id="min" name="min" defaultValue={parseInt(job_query.data.min)} type="number" />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="max" value="Maximum Price" />
                        </div>
                        <TextInput id="max" defaultValue={parseInt(job_query.data.max)} name="max" type="number" sizing="md" />
                    </div>
                    <p id='error' className='text-red-500 font-semibold '></p>
                    <Button className='mt-2' color="purple" type="submit">Update Job</Button>
                </form>
            }

        </div>
    );
};

export default Update;