import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function SignUp() {
    let [user, setUser]=useState("");
    let [pass, setPass]= useState("");
    let [err, setErr]= useState('');
    let navigate= useNavigate();
     function handleSubmit(e){
        e.preventDefault();
        if(user==='training' && pass==="123"){
            navigate('/');
        }else{
            setErr("Please Enter correct credentials")
        }
        
     }
     function handleChange(e){
       let val= e.target.value;
       let name= e.target.name;
       if(name==="user"){
         setUser(val);
       }else if(name==="pass"){
         setPass(val);
       }

     }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user">UserName:</label>
        <input type="text" name="user" id="user" onChange={handleChange} />
        <label htmlFor="pass">Password:</label>
        <input type="text" name="pass" id="pass" onChange={handleChange} />
        <button type='submit'>Submit</button>
         {
            err&&<p>{err}</p>
         }
      </form>
    </div>
  )
}
