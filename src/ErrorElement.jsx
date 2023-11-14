import { Button } from "flowbite-react";
import { Link, useRouteError } from "react-router-dom";
const ErrorElement= () => {
    const error = useRouteError()
    return (
        <div className="w-screen h-screen">
            {
                error?.status==404 && <div className="flex flex-col justify-center items-center w-full h-full">
                    <h1 className="text-7xl text-center font-extrabold tracking-tight text-gray-900 dark:text-white">404<br/>¯\_(ツ)_/¯  </h1>
                    <p className=" text-5xl text-center font-normal text-gray-700 dark:text-gray-400">Page not found<br/>(╯°□°）╯︵ ┻━┻</p>
                    <Button className="mt-4 h-24 w-80"><Link className="font-bold text-5xl" to="/">HOME</Link></Button>
                </div>
            }
        </div>
        
    )
}
export default ErrorElement;