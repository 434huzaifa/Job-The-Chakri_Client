import { Button } from "flowbite-react";
import { Navigate, useRouteError } from "react-router-dom";
const ErrorElement= () => {
    const error = useRouteError()
    return (
        <div className="w-screen h-screen">
            {
                error?.status==404 && <div className="flex flex-col justify-center items-center w-full h-full">
                    <h1 className="text-7xl text-center font-extrabold tracking-tight text-gray-900 dark:text-white">404<br/>¯\_(ツ)_/¯  </h1>
                    <p className=" text-5xl text-center font-normal text-gray-700 dark:text-gray-400">Page not found<br/>(╯°□°）╯︵ ┻━┻</p>
                    <Button><Navigate to="/">HOME</Navigate></Button>
                </div>
            }
        </div>
        
    )
}
export default ErrorElement;