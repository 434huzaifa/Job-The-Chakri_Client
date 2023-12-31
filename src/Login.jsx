import { Button, Label, TextInput } from 'flowbite-react';
import { BsGoogle } from "react-icons/bs";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { myContext } from "./App";
import { useContext } from "react";
const Login = () => {
    const { SignIn, googlemama, userData } = useContext(myContext)
    const navigate = useNavigate()
    const location = useLocation()

    function GetFromForm(e) {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;
        let error = document.getElementById("error")
        error.textContent = ""
        SignIn(email, password).then(() =>{
            if (location?.state != null) {
                navigate(location.state)
            } else {
                navigate('/')
            }
        }
        ).catch(err => error.textContent = err.message)
    }
    function itsgoogletime() {
        googlemama()
            .then((res) => {
                userData({ name: res.user.displayName, email: res.user.email, photo: res.user.photoURL })
                if (location?.state != null) {
                    navigate(location.state)
                } else {
                    navigate('/')
                }
            })
            .catch(error => console.log(error))
    }
    return (
        <div className=" px-7 lg:px-48">
            <div className="card lg:card-side bg-base-100 shadow-xl h-auto">
                <figure><img src="/job.svg" className="h-96" /></figure>
                <div className="card-body ">
                    <form className="flex flex-col gap-4" onSubmit={GetFromForm}>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Your email" />
                            </div>
                            <TextInput id="email" name='email' type="email" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" value="Your password" />
                            </div>
                            <TextInput id="password" name='password' type="password" required />
                        </div>
                        <p id='error' className='text-red-500 font-semibold '></p>
                        <div className='flex gap-2 justify-center'>
                            <Button type="submit">Submit</Button>
                            <Button onClick={itsgoogletime}><BsGoogle></BsGoogle></Button>
                        </div>
                    </form>
                    <p>If you do not have a account please, <Link to="/register" className='underline text-cyan-500'>Register</Link></p>

                </div>
            </div>
        </div>
    );
};

export default Login;