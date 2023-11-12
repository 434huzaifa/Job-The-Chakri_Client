import { Card, Label, TextInput, Button } from 'flowbite-react';
import { useContext ,useState } from 'react';
import { Slider } from 'react-rainbow-components';
import { DatePicker } from 'react-rainbow-components';
import useAxios from './useAxios';
import { useParams } from 'react-router-dom';
import { myContext } from './App';
import { useQuery } from '@tanstack/react-query';
import { Spinner } from 'flowbite-react';
import Swal from 'sweetalert2';
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
    const [value, setValue] = useState(1);
    const [date, setDate] = useState(null)
    const caxios=useAxios()
    const {id}=useParams()
    const {user}=useContext(myContext)
    const job_query=useQuery({
        queryKey:['job'],
        queryFn:async()=>{
            const res=await caxios.get(`/job/${id}`)
            initialState.date=new Date(Date.parse(res.data.enddate))
            setValue(parseInt(res.data.min))
            return res.data
                // caxios.get(`/job/${id}`).then(res=>{
                //     setJob(res.data)
                //     initialState.date=new Date(Date.parse(res.data.enddate))
                //     setValue(parseInt(res.data.min))
                // }).catch(error=>console.log(error))       
        },
        enabled:!!user && !!id,
        }
    )
    // useEffect(()=>{
    //     if (id!=null) {
    //         caxios.get(`/job/${id}`).then(res=>{
    //             setJob(res.data)
    //             initialState.date=new Date(Date.parse(res.data.enddate))
    //             setValue(parseInt(res.data.min))
    //         }).catch(error=>console.log(error))
            
    //     }
    // },[])

    function AcceptBid(e) {
        e.preventDefault()
        let data=Object.fromEntries(new FormData(e.target))
        data.jobid=id
        caxios.post('/bid',data).then(res=>{
            if (res.data.instanceid!=null) {
                Swal.fire("You bidded Successfully")
            }
        }).catch(error=>console.log(error))
    }
    return (
        <div className="px-48">
            {
                job_query.isLoading?
                    <div className="text-center">
                        <Spinner aria-label="Center-aligned Extra large spinner example" size="xl" />
                    </div> : <Card className="w-full h-full">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {job_query.data.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">{job_query.data.desc}</p>
                <p className="font-normal text-gray-700 dark:text-gray-400">  BDT {job_query.data.min}-{job_query.data.max}</p>
                <p className="font-normal text-gray-700 dark:text-gray-400"><strong> Deadline:</strong> {job_query.data.enddate}</p>
                <form onSubmit={AcceptBid}>
                    <div
                        className="rainbow-m-vertical_xx-large rainbow-p-around_large rainbow-m_auto"
                        style={containerStyles}
                    >
                    <Slider name="price" max={parseInt(job_query.data.max)} min={parseInt(job_query.data.min)} value={value} onChange={value2=>setValue(parseInt(value2))} step={10} required />

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
                        <TextInput id="seller" name='seller' type="email" value={job_query.data.seller} readOnly sizing="md" />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="bidder" value="Your Email" />
                        </div>
                        <TextInput id="bidder" type="email" name='bidder' value={user?.email} readOnly sizing="md" />
                    </div>
                    {
                        user.email!=job_query.data.seller? <Button className='mt-2' color="purple" type="submit">Purple</Button> :""
                    }
                    
                </form>
            </Card>
            }
            
        </div>
    );
};

export default Details;