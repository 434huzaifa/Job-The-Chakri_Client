import { Button, Label, TextInput } from 'flowbite-react';
import { BsGoogle } from "react-icons/bs";
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className="px-48">
            <div className="card lg:card-side bg-base-100 shadow-xl h-auto">
                <figure><img src="/job.svg" className="h-96" /></figure>
                <div className="card-body ">
                    <form className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email1" value="Your email" />
                            </div>
                            <TextInput id="email1" type="email" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password1" value="Your password" />
                            </div>
                            <TextInput id="password1" type="password" required />
                        </div>
                        <div className='flex gap-2 justify-center'>
                        <Button type="submit">Submit</Button>
                        <Button type="submit"><BsGoogle></BsGoogle></Button>
                        </div>
                    </form>
                    <p>If you don't have a account please, <Link to="/register" className='underline text-cyan-500'>Register</Link></p>

                </div>
            </div>
        </div>
    );
};

export default Login;