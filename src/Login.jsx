import { Button, Label, TextInput } from 'flowbite-react';
import { BsGoogle } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { myContext } from "./App";
import { useContext } from "react";
const Login = () => {
    const { SignIn, googlemama } = useContext(myContext)
    function GetFromForm(e) {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;
        let error = document.getElementById("error")
        error.textContent=""
        SignIn(email, password).then(() => navigate('/')).catch(err => error.textContent = err.message)
      }
      function itsgoogletime() {
        googlemama()
          .then(() => {
            navigate('/')
          })
          .catch(error => console.log(error))
      }
    return (
        <div className="px-48">
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
                        <div className='flex gap-2 justify-center'>
                        <Button type="submit">Submit</Button>
                        <Button onClick={itsgoogletime}><BsGoogle></BsGoogle></Button>
                        </div>
                    </form>
                    <p>If you don't have a account please, <Link to="/register" className='underline text-cyan-500'>Register</Link></p>

                </div>
            </div>
        </div>
    );
};

export default Login;