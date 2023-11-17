import { CarouselCard, CarouselImage } from 'react-rainbow-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Card } from 'flowbite-react';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
import { Spinner } from 'flowbite-react';
import useAxios from './useAxios';
import TopLi from './TopLi';
import { useQuery } from '@tanstack/react-query';

const carouselContainerStyles = {
    maxWidth: "100vw",
    height: "90vh"
};
const Home = () => {
    const caxios = useAxios()
    const jobs_query=useQuery({
        queryKey: ['jobs'],
        queryFn: async () => {
            const res=await caxios.get('/jobs')
            return res.data;
        },
        
    })  
    
    const new_jobs_query = useQuery({
        queryKey: ['new_jobs'],
        queryFn: async () => {
            const res=await caxios.get('/newjobs')
            return res.data;
        }
    })
    const top_user_query = useQuery({
        queryKey: ['top'],
        queryFn: async () => {
            const res=await caxios.get('/top')
            return res.data;
            }
    })
    return (
        <div className='px-48'>
            <div className='mb-12'>
                <CarouselCard className="rainbow-m_auto" style={carouselContainerStyles}>
                    <CarouselImage
                        src="/1.jpg"
                    />
                    <CarouselImage
                        src="/2.png"
                    />
                    <CarouselImage
                        src="/3.jpg"
                    />
                </CarouselCard>
            </div>
            {
                jobs_query.isLoading ?       
                <div className="text-center">
                <Spinner aria-label="Center-aligned Extra large spinner example" size="xl" />
              </div>:
              <div>
                <Tabs>
                    <TabList>
                        <Tab>Web Development</Tab>
                        <Tab>Digital Marketing</Tab>
                        <Tab>Graphics Design</Tab>
                    </TabList>

                    <TabPanel>
                        <div className=' grid grid-cols-4 gap-3 justify-items-center'>
                            {
                                jobs_query.data.web?.length==0 ||   jobs_query.data.web==null ? <p>There is No Job</p>:
                                jobs_query.data.web?.map((x, index) => {
                                    return (
                                        <JobCard key={index} title={x.title} desc={x.desc} min={x.min} max={x.max} id={x._id} endate={x.enddate} flag={false}></JobCard>
                                    )

                                })
                            }
                        </div>

                    </TabPanel>
                    <TabPanel>
                        <div className=' grid grid-cols-4 gap-3 justify-items-center'>
                        {
                              jobs_query.data.digital?.length==0 ||   jobs_query.data.digital==null ? <p>There is No Job</p>:
                              jobs_query.data.digital?.map((x, index) => {
                                    return (
                                        <JobCard key={index} title={x.title} desc={x.desc} min={x.min} max={x.max} id={x._id} endate={x.enddate} flag={false}></JobCard>
                                    )

                                })
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-4 gap-3 justify-items-center'>
                        {
                              jobs_query.data.graphics?.length==0 ||   jobs_query.data.graphics==null ? <p>There is No Job</p>:
                              jobs_query.data.graphics?.map((x, index) => {
                                    return (
                                        <JobCard key={index} title={x.title} desc={x.desc} min={x.min} max={x.max} id={x._id} endate={x.enddate} flag={false}></JobCard>
                                    )

                                })
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
            }
            {
                new_jobs_query.isLoading?       
                <div className="text-center">
                <Spinner aria-label="Center-aligned Extra large spinner example" size="xl" />
              </div>:<div className='mt-5'>
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white mb-5">New Job</h5>
                <div className='grid grid-cols-4 gap-3 justify-items-center'>
                {
                    new_jobs_query.data?.length==0 ||  new_jobs_query.data==null ? <p>There is No Job</p>:
                    new_jobs_query.data.map((x, index) => {
                                    return (
                                        <JobCard key={index} title={x.title} desc={x.desc} min={x.min} max={x.max} id={x._id} endate={x.enddate} flag={false}></JobCard>
                                    )

                                })
                            }
                </div>
            </div>
            }
            {
                top_user_query.isLoading?       
                <div className="text-center">
                <Spinner aria-label="Center-aligned Extra large spinner example" size="xl" />
              </div>:
              <div className=' grid grid-cols-3 mt-5 gap-4 justify-items-center'>
                <Card className=" w-full">
                    <div className='h-full flex justify-start flex-col'>

                        <div className="mb-4 flex items-center justify-between">
                            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest User</h5>
                        </div>
                        <div className="flow-root">
                            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                                {
                                    top_user_query.data.length==0 || top_user_query.data==null ? <p>There is No User</p>:
                                    top_user_query.data.map((x, index) => {
                                        return <TopLi key={index} image={x.photo} email={x.email} name={x.name}  ></TopLi>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </Card>
                <Card className=" w-full">
                    <div className='h-full flex justify-start flex-col'>

                        <div className="mb-4 flex items-center justify-between">
                            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Top Seller</h5>
                        </div>
                        <div className="flow-root">
                            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                                {
                                    top_user_query.data.map((x, index) => {
                                        return <TopLi key={index} image={x.photo} email={x.email} name={x.name}  ></TopLi>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </Card>
                <Card className=" w-full">
                    <div className='h-full flex justify-start flex-col'>

                        <div className="mb-4 flex items-center justify-between">
                            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Top Bidder</h5>
                        </div>
                        <div className="flow-root">
                            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                                {
                                    top_user_query.data.map((x, index) => {
                                        return <TopLi key={index} image={x.photo} email={x.email} name={x.name}  ></TopLi>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </Card>
            </div>
            }
            
        </div>
    );
};

export default Home;