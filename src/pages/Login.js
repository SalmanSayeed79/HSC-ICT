import React,{useState,useEffect,useRef} from 'react'
import {auth} from '../firebase'
export default function Login() {
    const [email,setEmail]=useState('')
    const [pass,setPass]=useState('')
    const emailRef=useRef(null)
    const passRef=useRef(null)
    const authChecker=()=>{
        auth.onAuthStateChanged((user)=>{
		    if(user){

            }
		    else{}
        })
    }
    
    const loginFunction=()=>{
        auth.signInWithEmailAndPassword(email,pass)
    }
    const createUserFunction=()=>{
        auth.createUserWithEmailAndPassword(email,pass)
    }
    useEffect(()=>{
        authChecker()
    },[])
    return (
        <div style={{display:"flex",flexDirection:"column",width:"100vw",height:"100vh",alignItems:"center",justifyContent:"center"}}>
            <h2 style={{fontSize:"2rem"}}>Login Page</h2>
            <div className="input-fields" style={{display:"flex",flexDirection:"column",marginTop:"10vh"}}>
                <input ref={emailRef} type="text" onChange={()=>setEmail(emailRef.current.value)} placeholder="Email Address" style={{width:"80vw",height:"5vh",border:"1px solid gray",margin:"1rem",fontSize:"2rem"}}></input>
                <input ref={passRef} type="password" onChange={()=>setPass(passRef.current.value)} placeholder="Password" style={{width:"80vw",height:"5vh",border:"1px solid gray",margin:"1rem",fontSize:"2rem"}}></input>
                <button onClick={()=>loginFunction()} style={{width:"80vw",height:"5vh",fontSize:"2rem",margin:"1rem",backgroundColor:"#191919",color:"white",cursor:"pointer"}}>Login</button>
                {/*<button onClick={()=>createUserFunction()} style={{width:"80vw",minHeight:"5vh",fontSize:"2rem",margin:"1rem",backgroundColor:"#191919",color:"white",cursor:"pointer"}}>Create Account</button>*/}
            </div>
        </div>
    )
}
