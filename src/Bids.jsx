import { useQuery } from '@tanstack/react-query';
import { Table,Button    } from 'flowbite-react';
import { myContext } from "./App";
import { Spinner } from 'flowbite-react';
import useAxios from './useAxios';
import { useContext } from 'react';
import Swal from 'sweetalert2';
const Bids = () => {
    const caxios=useAxios()
    const { user } = useContext(myContext)
    const jobs=useQuery({
        queryKey:['bidjobs'],
        queryFn: async () => {
            const res=await caxios.get(`/bid/${user.email}`)
            return res.data
        },
        enabled:!!user?.email,
        retry:5,
        retryDelay:2000
    })
    function MakeComplete(bidid) {
        caxios.put(`/jobstatus/${bidid}`,{status:2}).then(res => {
            if (res.data.modifiedCount==1) {
                jobs.refetch()
                Swal.fire("Update Successful").then(() => {
                    // window.location.reload();
                })
            }else {
                Swal.fire({
                    title: "Update Failed",
                    icon: "error",
                })
            }
        })
    }
    return (
        <div className='mx-7 lg:mx-48'>
            <Table striped>
                <Table.Head>
                    <Table.HeadCell>Job title</Table.HeadCell>
                    <Table.HeadCell>Email</Table.HeadCell>
                    <Table.HeadCell>Deadline</Table.HeadCell>
                    <Table.HeadCell>Status</Table.HeadCell>
                    <Table.HeadCell>Complete button</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        jobs.isLoading? <div className="text-center">
                        <Spinner aria-label="Center-aligned Extra large spinner example" size="xl" />
                    </div> : 
                    !jobs.isSuccess||jobs.data?.length==0 || jobs.data==null? <Table.Cell colSpan={5}>You did not bid any jobe</Table.Cell>:
                    jobs.data.map((x,index)=>{
                        return(
                            <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{x.title}</Table.Cell>
                                <Table.Cell>{x.seller}</Table.Cell>
                                <Table.Cell>{x.enddate}</Table.Cell>
                                <Table.Cell>{x.status}</Table.Cell>
                                <Table.Cell>
                                    <Button className='mt-2' disabled={x.status=="progress" ? false:true} onClick={()=>MakeComplete(x.bidid)} color="purple" type="submit">Complete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })
                    }
                </Table.Body>
            </Table>
        </div>
    );
};

export default Bids;