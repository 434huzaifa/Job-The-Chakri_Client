import { CarouselCard, CarouselImage } from 'react-rainbow-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Card } from 'flowbite-react';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
const carouselContainerStyles = {
    maxWidth: "100vw",
    height: "90vh"
};
const a = new Array(4).fill("")
const Home = () => {
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
                        <div className='grid grid-cols-4 gap-3 justify-items-center'>
                            {
                                a.map(() => <JobCard></JobCard>)
                            }
                        </div>

                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-4 gap-3 justify-items-center'>
                            {
                                a.map(() => <JobCard></JobCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-4 gap-3 justify-items-center'>
                            {
                                a.map(() => <JobCard></JobCard>)
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
            <div className='grid grid-cols-3 mt-5 justify-items-center'>
                <Card className="max-w-sm">
                    <div className="mb-4 flex items-center justify-between">
                        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest User</h5>
                    </div>
                    <div className="flow-root">
                        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="shrink-0">
                                        <img
                                            alt="Neil image"
                                            height="32"
                                            src="/images/people/profile-picture-1.jpg"
                                            width="32"
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Neil Sims</p>
                                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$320</div>
                                </div>
                            </li>
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="shrink-0">
                                        <img
                                            alt="Bonnie image"
                                            height="32"
                                            src="/images/people/profile-picture-3.jpg"
                                            width="32"
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Bonnie Green</p>
                                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        $3467
                                    </div>
                                </div>
                            </li>
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="shrink-0">
                                        <img
                                            alt="Michael image"
                                            height="32"
                                            src="/images/people/profile-picture-2.jpg"
                                            width="32"
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Michael Gough</p>
                                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$67</div>
                                </div>
                            </li>
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="shrink-0">
                                        <img
                                            alt="Lana image"
                                            height="32"
                                            src="/images/people/profile-picture-4.jpg"
                                            width="32"
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Lana Byrd</p>
                                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$367</div>
                                </div>
                            </li>
                            <li className="pb-0 pt-3 sm:pt-4">
                                <div className="flex items-center space-x-4">
                                    <div className="shrink-0">
                                        <img
                                            alt="Thomas image"
                                            height="32"
                                            src="/images/people/profile-picture-5.jpg"
                                            width="32"
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Thomes Lean</p>
                                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        $2367
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </Card>
                <Card className="max-w-sm">
                    <div className="mb-4 flex items-center justify-between">
                        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Top Performer</h5>
                    </div>
                    <div className="flow-root">
                        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="shrink-0">
                                        <img
                                            alt="Neil image"
                                            height="32"
                                            src="/images/people/profile-picture-1.jpg"
                                            width="32"
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Neil Sims</p>
                                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$320</div>
                                </div>
                            </li>
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="shrink-0">
                                        <img
                                            alt="Bonnie image"
                                            height="32"
                                            src="/images/people/profile-picture-3.jpg"
                                            width="32"
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Bonnie Green</p>
                                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        $3467
                                    </div>
                                </div>
                            </li>
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="shrink-0">
                                        <img
                                            alt="Michael image"
                                            height="32"
                                            src="/images/people/profile-picture-2.jpg"
                                            width="32"
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Michael Gough</p>
                                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$67</div>
                                </div>
                            </li>
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="shrink-0">
                                        <img
                                            alt="Lana image"
                                            height="32"
                                            src="/images/people/profile-picture-4.jpg"
                                            width="32"
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Lana Byrd</p>
                                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$367</div>
                                </div>
                            </li>
                            <li className="pb-0 pt-3 sm:pt-4">
                                <div className="flex items-center space-x-4">
                                    <div className="shrink-0">
                                        <img
                                            alt="Thomas image"
                                            height="32"
                                            src="/images/people/profile-picture-5.jpg"
                                            width="32"
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Thomes Lean</p>
                                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        $2367
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </Card>
                <Card className="max-w-sm">
                    <div className="mb-4 flex items-center justify-between">
                        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Top Seller</h5>
                    </div>
                    <div className="flow-root">
                        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="shrink-0">
                                        <img
                                            alt="Neil image"
                                            height="32"
                                            src="/images/people/profile-picture-1.jpg"
                                            width="32"
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Neil Sims</p>
                                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$320</div>
                                </div>
                            </li>
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="shrink-0">
                                        <img
                                            alt="Bonnie image"
                                            height="32"
                                            src="/images/people/profile-picture-3.jpg"
                                            width="32"
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Bonnie Green</p>
                                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        $3467
                                    </div>
                                </div>
                            </li>
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="shrink-0">
                                        <img
                                            alt="Michael image"
                                            height="32"
                                            src="/images/people/profile-picture-2.jpg"
                                            width="32"
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Michael Gough</p>
                                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$67</div>
                                </div>
                            </li>
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="shrink-0">
                                        <img
                                            alt="Lana image"
                                            height="32"
                                            src="/images/people/profile-picture-4.jpg"
                                            width="32"
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Lana Byrd</p>
                                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$367</div>
                                </div>
                            </li>
                            <li className="pb-0 pt-3 sm:pt-4">
                                <div className="flex items-center space-x-4">
                                    <div className="shrink-0">
                                        <img
                                            alt="Thomas image"
                                            height="32"
                                            src="/images/people/profile-picture-5.jpg"
                                            width="32"
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Thomes Lean</p>
                                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        $2367
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Home;