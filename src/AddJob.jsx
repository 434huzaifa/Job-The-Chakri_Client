import { Label, TextInput, Button, Select, Textarea } from 'flowbite-react';
import { useContext, useState } from 'react';
import { DatePicker } from 'react-rainbow-components';
import { myContext } from "./App";
import useAxios from './useAxios';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const initialState = {
    date: new Date(Date.now()),
    locale: { name: 'en-US', label: 'English (US)' },
};
const containerStyles2 = {
    maxWidth: "100%",
};
const AddJob = () => {
    const caxios = useAxios()
    const [date, setDate] = useState(new Date(Date.now()))
    const { user } = useContext(myContext)
    const navigate=useNavigate()
    function GetJobDetails(e) {
        e.preventDefault();
        let formdata = new FormData(e.target);
        let data = Object.fromEntries(formdata)
        let error = document.getElementById("error")
        error.textContent=""
        if (parseInt(data.min)>parseInt(data.max)) {
            error.textContent="Max value is smaller then min value"
        }else{
            data.enddate=moment(data.enddate,'MM/DD/YYYY').format('YYYY-MM-DD')
            caxios.post('/addjob', data).then(res => {
                if (res.data?.insertedId != null) {
                    Swal.fire("You Successfully Created Job")
                    navigate('/postedjob')
                }else{
                    Swal.fire({
                        title: "Job Not created",
                        icon: "error",
                    })
                }
            }).catch(error => console.log(error))
        }
    }
    return (
        <div className="mx-7 lg:mx-48">
            <form onSubmit={GetJobDetails}>
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
                    <TextInput id="title" name="title" type="text" />
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
                    <Select id="cate" name="cate" required>
                        <option value="web development">Web Development</option>
                        <option value="digital marketing">Digital Marketing</option>
                        <option value="graphics design">Graphics Design</option>
                    </Select>
                </div>
                <div className="">
                    <div className="mb-2 block">
                        <Label htmlFor="desc" value="Description" />
                    </div>
                    <Textarea id="desc" name="desc" required rows={4} />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="min" value="Minimum Price" />
                    </div>
                    <TextInput id="min" name="min" type="number" />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="max" value="Maximum Price" />
                    </div>
                    <TextInput id="max" name="max" type="number" sizing="md" />
                </div>
                <p id='error' className='text-red-500 font-semibold '></p>
                <Button className='mt-2' color="purple" type="submit">Add Job</Button>
            </form>
        </div>
    );
};

export default AddJob;