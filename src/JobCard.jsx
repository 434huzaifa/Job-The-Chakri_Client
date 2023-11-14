import { Card } from 'flowbite-react';
import { Button } from 'flowbite-react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
const JobCard = ({flag,title,desc,min,max,endate,id}) => {
    const navigate=useNavigate()
    function getJobInfo(id) {
        navigate(`/jobdetails/${id}`)
    }
    return (
        <Card className="w-full" id={id} onClick={()=>getJobInfo(id)}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 break-all">{String(desc).slice(0,50)}...</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">BDT {min}-{max}</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">{moment(endate,'YYYY-MM-dd').format("MMMM Do YYYY")}</p>
        {
            flag? <div className='flex gap-2'><Button color="purple">Update</Button><Button color="purple">Delete</Button></div>
            :<Button color="purple">Bid Now</Button>
        }
    </Card>
    );
};

export default JobCard;