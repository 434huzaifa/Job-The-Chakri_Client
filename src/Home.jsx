import { CarouselCard, CarouselImage } from 'react-rainbow-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Card } from 'flowbite-react';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
import { useEffect, useState } from 'react';
import useAxios from './useAxios';
import TopLi from './TopLi';
const carouselContainerStyles = {
    maxWidth: "100vw",
    height: "90vh"
};
const a = new Array(4).fill("")
const Home = () => {
    const [top,setTop]=useState([])
    const caxios=useAxios()
    useEffect(()=>{
        caxios.get('/top').then(res=>setTop(res.data)).catch(error=>console.log(error))
    },[])
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
                                a.map(() => <JobCard flag={false}></JobCard>)
                            }
                        </div>

                    </TabPanel>
                    <TabPanel>
                        <div className=' grid grid-cols-4 gap-3 justify-items-center'>
                            {
                                a.map(() => <JobCard flag={false}></JobCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-4 gap-3 justify-items-center'>
                            {
                                a.map(() => <JobCard flag={false}></JobCard>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
            <div className='mt-5'>
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white mb-5">New Job</h5>
            <div className='grid grid-cols-4 gap-3 justify-items-center'>
                            {
                                a.map(() => <JobCard></JobCard>)
                            }
                        </div>
            </div>
            <div className=' grid grid-cols-3 mt-5 gap-4 justify-items-center'>
                <Card className=" w-full">
                    <div className='h-full flex justify-start flex-col'>
                    
                    <div className="mb-4 flex items-center justify-between">
                        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest User</h5>
                    </div>
                    <div className="flow-root">
                        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                            {
                                top?.map((x,index)=>{
                                    return <TopLi key={index} image={x.photo} email={x.email}  name={x.name}  ></TopLi>
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
                                top?.map((x,index)=>{
                                    return <TopLi key={index} image={x.photo} email={x.email}  name={x.name}  ></TopLi>
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
                                top?.map((x,index)=>{
                                    return <TopLi key={index} image={x.photo} email={x.email}  name={x.name}  ></TopLi>
                                })
                            }
                        </ul>
                    </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Home;