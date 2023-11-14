import { useContext } from 'react';
import { myContext } from './App';
import { Navigate, useLocation } from 'react-router-dom';
const Private = ({ children }) => { 
    const { user } = useContext(myContext)
    const location=useLocation()
    if (user) {
        return children ;
    }else{
        return (
            <Navigate to="/login" state={location}></Navigate>
        )
    }

 }
 
export default Private;