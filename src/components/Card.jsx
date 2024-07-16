import React from 'react'
import styles from './Card.module.css'
export default function Card({product,quantity}) {
  return (
    <div className={styles.card}>
    <img className={styles.productImg} src={product.pic} alt="pic not available" />
       <div className={styles.info}>
       <h2 className={styles.title}> Product name:{product.name}</h2> 
       <h3 className={styles.price}> Price: {product.price}</h3>
       <h3 className={styles.price}> left: {quantity?quantity:product.quantity}</h3>
       </div>
    </div>
  )
}
