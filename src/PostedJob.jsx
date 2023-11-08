import JobCard from './JobCard';
const PostedJob = () => {
    const a = new Array(4).fill("")
    return (
        <div className='mx-48'>
            <div className=' grid grid-cols-4 gap-3 justify-items-center'>
                {
                    a.map(() => <JobCard flag={true}></JobCard>)
                }
            </div>
        </div>
    );
};

export default PostedJob;