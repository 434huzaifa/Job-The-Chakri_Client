import { Card, Label, TextInput, Button } from 'flowbite-react';
import { useContext, useEffect, useState } from 'react';
import { Slider } from 'react-rainbow-components';
import { DatePicker } from 'react-rainbow-components';
import useAxios from './useAxios';
import { useParams } from 'react-router-dom';
import { myContext } from './App';
const containerStyles = {
    maxWidth: 700,
};
const initialState = {
    date: new Date('2019-10-25 10:44'),
    locale: { name: 'en-US', label: 'English (US)' },
};

const containerStyles2 = {
    maxWidth: "100%",
};
const Details = () => {
    const [value, setValue] = useState(0);
    const [date, setDate] = useState(null)
    const [job,setJob]=useState({}) 
    const caxios=useAxios()
    const {id}=useParams()
    const {user}=useContext(myContext)
    useEffect(()=>{
        if (id!=null) {
            caxios.get(`/job/${id}`).then(res=>{
                setJob(res.data)
                initialState.date=new Date(Date.parse(res.data.enddate))
                setValue(parseInt(res.data.min))
            }).catch(error=>console.log(error))
            
        }
    },[])
    const onChange = event => setValue(event.target.value);
    function AcceptBid(e) {
        e.preventDefault()
        let data=Object.fromEntries(new FormData(e.target))
        console.log(data)
    }
    return (
        <div className="px-48">
            <Card className="w-full h-full">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {job?.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">{job?.desc}</p>
                <p className="font-normal text-gray-700 dark:text-gray-400">  BDT {job?.min}-{job?.max}</p>
                <p className="font-normal text-gray-700 dark:text-gray-400"><strong> Deadline:</strong> {job?.enddate}</p>
                <form onSubmit={AcceptBid}>
                    <div
                        className="rainbow-m-vertical_xx-large rainbow-p-around_large rainbow-m_auto"
                        style={containerStyles}
                    >
                        BDT{job?.min}<Slider name="price" max={parseInt(job?.max)} min={parseInt(job?.min)} value={value} onChange={onChange} step={1} required />

                    </div>
                    <div
                        className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
                        style={containerStyles2}
                    >
                         <div className="mb-2 block">
                            <Label htmlFor="base" value="Dateline" />
                        </div>
                        <DatePicker
                            id="datePicker-1"
                            readOnly={true}
                            value={initialState.date}
                            onChange={value => setDate(value)}
                            formatStyle="large"
                            locale={initialState.locale.name}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="seller" value="Employer" />
                        </div>
                        <TextInput id="seller" name='seller' type="email" value={job?.seller} readOnly sizing="md" />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="bidder" value="Your Email" />
                        </div>
                        <TextInput id="bidder" type="email" name='bidder' value={user?.email} readOnly sizing="md" />
                    </div>
                    {
                        user.email!=job.seller? <Button className='mt-2' color="purple" type="submit">Purple</Button> :""
                    }
                    
                </form>
            </Card>
        </div>
    );
};

export default Details;