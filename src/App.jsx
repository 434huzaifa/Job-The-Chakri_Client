import { Outlet, useNavigate } from 'react-router-dom'
import { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from './firebase.init.js';
import NavBar from './NavBar';
import Footer from './Footer';
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const myContext = createContext(null)
function App() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate()
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
    localStorage.removeItem('cart')
    navigate('/login')
    return signOut(auth)
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
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
