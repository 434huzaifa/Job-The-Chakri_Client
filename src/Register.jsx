import { Button, Label, TextInput } from 'flowbite-react';
import { BsGoogle } from "react-icons/bs";
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <div className="px-48">
            <div className="card lg:card-side bg-base-100 shadow-xl h-auto">
                
                <div className="card-body ">
                    <form className="flex flex-col gap-4">

                    <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email1" value="Your Name" />
                            </div>
                            <TextInput id="email1" type="text" required />
                        </div>
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
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password2" value="Confirm Password" />
                            </div>
                            <TextInput id="password2" type="password" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="url" value="Image url" />
                            </div>
                            <TextInput id="url" type="url" required />
                        </div>
                        <Button type="submit">Submit</Button>
                    </form>
                    <p>If you have a account please, <Link to="/register" className='underline text-cyan-500'>Login</Link></p>

                </div>
                <figure><img src="/job.svg" className="h-96 transform scale-x-[-1]" /></figure>
            </div>
        </div>
    );
};

export default Register;