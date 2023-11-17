import { Card } from 'flowbite-react';
import { Button } from 'flowbite-react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"; 
const JobCard = ({ flag, title, desc, min, max, endate, id ,deleteJob=null}) => {
    const navigate = useNavigate()
    function getJobInfo(id) {
        navigate(`/jobdetails/${id}`)
    }
    
    function UpdateJob(id) {
        navigate(`/updatejob/${id}`)
    }
    return (
        <motion.div initial={{scale:0.1}} animate={{scale:1}} transition={{duration:0.5}}   className="w-full h-full">
        <motion.div className="w-full h-full" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Card className="w-full h-full" id={id} >
            <h5 onClick={() => getJobInfo(id)} className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
            </h5>
            <p onClick={() => getJobInfo(id)} className="font-normal text-gray-700 dark:text-gray-400 break-all">{String(desc).slice(0, 50)}...</p>
            <p onClick={() => getJobInfo(id)} className="font-normal text-gray-700 dark:text-gray-400">BDT {min}-{max}</p>
            <p onClick={() => getJobInfo(id)} className="font-normal text-gray-700 dark:text-gray-400">{moment(endate, 'YYYY-MM-dd').format("MMMM Do YYYY")}</p>
            {
                flag ? <div className='flex gap-2'><Button color="purple" onClick={()=>UpdateJob(id)}>Update</Button><Button color="purple" onClick={() => deleteJob(id)}>Delete</Button></div>
                    : <Button color="purple">Bid Now</Button>
            }
        </Card>
        </motion.div>
        </motion.div>
    );
};

export default JobCard;