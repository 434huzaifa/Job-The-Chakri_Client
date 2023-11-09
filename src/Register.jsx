import { Button, Label, TextInput } from 'flowbite-react';
import { Link,useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { myContext } from "./App";
import { updateProfile } from "firebase/auth";
const Register = () => {
    const { signUpUser} = useContext(myContext)
    const navigate = useNavigate()
    function GetUserAndCreate(e) {
        e.preventDefault();
        let error = document.getElementById("error")
        error.textContent=""
        let name = e.target.name.value;
        console.log('name: ', name);
        let email = e.target.email.value;
        console.log('email: ', email);
        let image = e.target.image.value;
        console.log('image: ', image);
        let password1 = e.target.password1.value;
        console.log('password1: ', password1);
        let password2 = e.target.password2.value;
        console.log('password2: ', password2);

        if (password1 == password2) {
            if (toString(password1).length >= 6) {
                if (/[A-Z]/.test(password1)) {
                    if (/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password1)) {
                        signUpUser(email, password1)
                            .then(res => {
                                updateProfile(res.user, {
                                    displayName: name,
                                    photoURL: image
                                }).then(res => {
                                    console.log(res.user)

                                }).catch(err => {
                                    error.textContent=err.message
                                })

                                Swal.fire({ icon: 'success', title: "Account Successfully Created" }
                                ).then(() => {
                                    navigate('/login')
                                })
                            }
                            )
                            .catch(err => {
                                error.textContent=err.message
                            })
                    } else {
                        error.textContent = "Password don't have a special character"
                    }
                } else {
                    error.textContent = "Password don't have a capital letter"
                }
            } else {
                error.textContent = 'Password Less than 6 characters'
            }
        } else {
            error.textContent = 'Password Did Not Match'

        }

    }
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
                        <p id='error' className='text-red-500 font-semibold '></p>
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