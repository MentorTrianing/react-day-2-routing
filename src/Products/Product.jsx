import React,{useState} from 'react'
import Navigation from '../components/Navigation'
import styles from './Product.module.css';
import Card from '../components/Card'
export default function Product({products}) {
    let [quantity, setQuantity]= useState(0);
    function handleQuantity(){
        setQuantity(quantity+1);
      }
  return (
    <>
    <Navigation/>
    <div className={styles.products}>
      {products.map((val,idx)=><Card key={idx} product={val} quantity={quantity}/>)}
    </div>
    <button onClick={handleQuantity}>Increase the quatity</button>
    </>
  )
}
