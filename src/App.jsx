import { Outlet, useNavigate } from 'react-router-dom'
import { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from './firebase.init.js';
import NavBar from './NavBar';
import Footer from './Footer';
import useAxios from './useAxios.js';
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const myContext = createContext(null)
function App() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate()
  const caxios=useAxios()
  function signUpUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  function googlemama() {
    return signInWithPopup(auth, provider)
  }
  function SignIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }
  function LogOut() {
    navigate('/login')
    caxios.post('/logout').then().catch(err=>err)
    return signOut(auth)
  }

  function userData(userdata) {
    caxios.post('/user',userdata).then(res=>res).catch(error=>console.log(error))
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      if (currentUser && !!currentUser?.email) {
        caxios.post('/jsonwebtoken',{email:currentUser.email}).then(res=>res).catch(error=>console.log(error))
      }else{
        caxios.post('/logout').then().catch(err=>err)
      }
    });
    return () => {
      unSubscribe();
    }
  }, [])
  const context = {
    user,
    signUpUser,
    SignIn,
    LogOut,
    googlemama,
    userData
  }
  return (
    <>
     <myContext.Provider value={context}>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
      </myContext.Provider>
    </>
  )
}

export default App
