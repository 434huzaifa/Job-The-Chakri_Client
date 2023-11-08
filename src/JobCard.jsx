import { Card } from 'flowbite-react';
import { Button } from 'flowbite-react';
const JobCard = ({flag}) => {
    
    return (
        <Card href="#" className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Create Me a Python library
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">Create Me a library using python that will hack nasa</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">$17-$16</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">2023-1-11</p>
        {
            flag? <div className='flex gap-2'><Button color="purple">Update</Button><Button color="purple">Delete</Button></div>
            :<Button color="purple">Bid Now</Button>
        }
    </Card>
    );
};

export default JobCard;