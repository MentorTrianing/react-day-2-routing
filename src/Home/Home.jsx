import React from 'react'
import Navigation from '../components/Navigation'
import Card from '../components/Card'
export default function Home({products}) {
  return (
    <div>
      <Navigation/>
      {products.map((val,idx)=><Card key={idx} product={val}/>)}
    </div>
  )
}
