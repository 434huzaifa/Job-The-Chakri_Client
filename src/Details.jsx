import { Card, Label, TextInput, Button } from 'flowbite-react';
import { useContext, useState } from 'react';
import useAxios from './useAxios';
import { useNavigate, useParams } from 'react-router-dom';
import { myContext } from './App';
import { useQuery } from '@tanstack/react-query';
import { Spinner } from 'flowbite-react';
import Swal from 'sweetalert2';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import moment from 'moment';

const Details = () => {
    const [value, setValue] = useState(1);
    const caxios = useAxios()
    const { id } = useParams()
    const { user } = useContext(myContext)
    const navigate = useNavigate()
    const job_query = useQuery({
        queryKey: ['job'],
        queryFn: async () => {
            const res = await caxios.get(`/job/${id}`)
            setValue(parseInt(res.data.min))
            return res.data
        },
        enabled: !!user && !!id,
    }
    )

    function AcceptBid(e) {
        e.preventDefault()
        let data = Object.fromEntries(new FormData(e.target))
        console.log(data)
        data.jobid = id
        data.price = value
        data.status = "pending"
        
        caxios.post('/bid', data).then(res => {
            if (res.data?.insertedId != null) {
                Swal.fire("You bidded Successfully")
                navigate('/bids')
            } else {
                Swal.fire({
                    title: "You bidded unsuccessfully",
                    icon: "error",
                })
            }
        }).catch(error => console.log(error))
    }
    return (
        <div className="px-7 lg:px-48">
            {
                job_query.isLoading ?
                    <div className="text-center">
                        <Spinner aria-label="Center-aligned Extra large spinner example" size="xl" />
                    </div> : <Card className="w-full h-full">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {job_query.data.title}
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">{job_query.data.desc}</p>
                        <form onSubmit={AcceptBid}>
                            <div className="mb-2 block">
                                <Label htmlFor="base" value="Bidding Price" />
                            </div>
                            <p className='text-center'>{value}TK</p>
                            <div className='flex justify-center items-center gap-2'><p>{job_query.data.min}TK </p><Slider dotStyle={{ background: "Red" }} name="price" min={parseInt(job_query.data.min)} max={parseInt(job_query.data.max)} step={parseInt(job_query.data.min)} dots={true} value={value} onChange={v => setValue(v)} /> <p>{job_query.data.max}TK</p></div>
                            <div>
                                <p><span className='font-bold'>Deadline: </span> {moment(job_query.data.enddate,"YYYY-MM-DD").format("MMMM Do,YYYY")}</p>
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
                                (user.email != job_query.data.seller && moment().isBefore(moment(job_query.data.enddate,"YYYY-MM-DD"))) ? <Button className='mt-2' color="purple" type="submit">Bid</Button> : ""
                            }
                            {
                                !moment().isBefore(moment(job_query.data.enddate,"YYYY-MM-DD")) && <p className='text-red-600 italic font-bold text-center'>Expire</p>
                            }

                        </form>
                    </Card>
            }

        </div>
    );
};

export default Details;