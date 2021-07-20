import React,{useEffect,useState} from 'react';
import Home from './pages/Home'
import Login from './pages/Login'
import {auth } from './firebase'

export default function App() {
  const [loggedIn,setLoggedIn]=useState(true)
  const [loading,setLoading]=useState(true)
  const authChecker=()=>{
    auth.onAuthStateChanged((user)=>{
    setLoading(true)
    if(user){
      setLoading(false)
      setLoggedIn(true)
      
        }
    else{
      setLoading(false)
      setLoggedIn(false)
    }
    })
  }
  useEffect(()=>{
    authChecker()
},[])
  return (
    <div>
      {loading && <p style={{fontSize:"2rem",display:"flex",width:"100vw",height:"100vh",alignItems:"center",justifyContent:"center"}}>Loading.....</p>}
      {!loading && !loggedIn && <Login/>}
      {!loading && loggedIn && <Home/>}
    </div>
  )
}

