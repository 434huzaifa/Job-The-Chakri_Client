import { Table, Button } from 'flowbite-react';
import "react-step-progress-bar/styles.css";
import Slider from 'rc-slider';
import { Spinner } from 'flowbite-react';
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { myContext } from './App';
import Swal from 'sweetalert2';
const BidRequest = () => {
    const caxios = useAxios()
    const { user } = useContext(myContext)
    const jobs = useQuery({
        queryKey: ['jobrequest'],
        queryFn: async () => {
            const res = await caxios.get(`/bidrequest/${user.email}`)
            return res.data
        },
        enabled: !!user?.email,
        retry:5,
        retryDelay:2000
    })
    const marks = {
        0: 'pending',
        1: 'inprogress',
        2: 'completed'
    }
    function ChangeStatus(bidid, status) {
        caxios.put(`/jobstatus/${bidid}`,{status}).then(res => {
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
                    <Table.HeadCell>Price</Table.HeadCell>
                    <Table.HeadCell>Accept button</Table.HeadCell>
                    <Table.HeadCell>Reject button</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        jobs.isLoading ? <div className="text-center">
                            <Spinner aria-label="Center-aligned Extra large spinner example" size="xl" />
                        </div> : 
                        !jobs.isSuccess||jobs.data?.length == 0 || jobs.data == null ? <Table.Cell colSpan={5}>You did not bid any jobe</Table.Cell> :
                            jobs.data?.map((x, index) => {
                                if (x==null) {
                                    return
                                }
                                let s_value=0
                                if (x.status =="progress") {
                                    s_value=1
                                }
                                else if (x.status=="completed") {
                                    s_value=2
                                }
                                return (
                                    <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{x.title}</Table.Cell>
                                        <Table.Cell>{x.bidder}</Table.Cell>
                                        <Table.Cell>{x.enddate}</Table.Cell>
                                        <Table.Cell>{x.status}</Table.Cell>
                                        <Table.Cell>{x.price}</Table.Cell>
                                        {
                                            s_value != 0 ? <Table.Cell colSpan={2} className='py-8 px-9'>
                                                 <Slider  min={0} marks={marks} dotStyle={{background:"green"}} max={2} step={null} value={s_value} />
                                            </Table.Cell> : <>
                                                <Table.Cell>
                                                    <Button onClick={()=>{ChangeStatus(x.bidid,1)}} className='mt-2' disabled={!(x.status != "rejected" && x.status == "pending")} color="purple" type="submit">Accept</Button>
                                                </Table.Cell>
                                                <Table.Cell>
                                                    <Button onClick={()=>{ChangeStatus(x.bidid,0)}} className='mt-2' disabled={!(x.status != "rejected" && x.status == "pending")} color="purple" type="submit">Reject</Button>
                                                </Table.Cell>
                                            </>
                                        }

                                    </Table.Row>
                                )
                            })
                    }



                </Table.Body>
            </Table>
        </div>
    );
};

export default BidRequest;