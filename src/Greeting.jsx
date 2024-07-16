import React from 'react'

export default function Greeting({name}) {
    let arr=["Apple","mango","oranges"];
  return (
    <div>
     {/* {name==="test"?`welcome ${name}`:`you are not welcome ${name}`} */}
     {name!=="test"&& `welcome ${name}`}
     <ol>
     {arr.map((val,ind)=>{
        return <li key={ind}>{val}</li>
     })}
     </ol>
     

    </div>
  )
}
