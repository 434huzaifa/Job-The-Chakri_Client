import { NavLink } from "react-router-dom";
import './App.css'
import { myContext } from "./App";
import { useContext } from "react";
import { Button } from 'flowbite-react';
const NavBar = () => {
    const { user, LogOut } = useContext(myContext)
    console.log(user)
    return (
        <div className="mb-5">
            <div className="navbar  bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to="/">Home</NavLink></li>
                            {
                                user!=null &&
                                <>
                                    <li><NavLink to="/addjob">Add job</NavLink></li>
                                    <li><NavLink to="/postedjob">My posted jobs</NavLink></li>
                                    <li><NavLink to="/bids">My Bids</NavLink></li>
                                    <li><NavLink to="/bidrequest">Bid Requests</NavLink></li>
                                </>
                            }
                            {
                                user==null &&
                                <>
                                    <li><NavLink to="/register">Register</NavLink></li>
                                    <li><NavLink to="/login">login</NavLink></li>
                                </>
                            }

                        </ul>
                    </div>
                    <NavLink className="btn btn-ghost normal-case text-xl"> <img src="/briefcase.png" className="w-8 h-8" /> Job The Search</NavLink>
                </div>
                <div className="navbar-end hidden lg:flex px-2">
                    <ul className="menu menu-horizontal gap-2">
                        <li><NavLink to="/">Home</NavLink></li>
                        {
                            user!=null &&
                            <>
                                <li><NavLink to="/addjob">Add job</NavLink></li>
                                <li><NavLink to="/postedjob">My posted jobs</NavLink></li>
                                <li><NavLink to="/bids">My Bids</NavLink></li>
                                <li><NavLink to="/bidrequest">Bid Requests</NavLink></li>
                            </>
                        }
                        {
                            user==null &&
                            <>
                                <li><NavLink to="/register">Register</NavLink></li>
                                <li><NavLink to="/login">login</NavLink></li>
                            </>
                        }

                    </ul>
                </div>
                {
                    user && <div className="dropdown dropdown-end">

                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">

                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} />
                            </div>
                        </label>

                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li className="font-bold">{user.displayName}</li>
                            <li>{user.email}</li>
                            <li> <Button onClick={LogOut}>LogOut</Button> </li>
                        </ul>
                    </div>
                }

            </div>
        </div>
    );
};

export default NavBar;