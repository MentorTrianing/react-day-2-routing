import './App.css';
import Home from './Home/Home';
import Product from './Products/Product';
import {Routes, Route} from 'react-router-dom';
import SignUp from './auth/SignUp';
let  App = ()=>{
   
  let  productArr=[
    {name:"phone",price:10000,pic:"https://t4.ftcdn.net/jpg/02/97/35/11/360_F_297351123_gd71TTj4GzWtalft9fIQF8XcqsOnwj8S.jpg",quantity:5},
    {name:"Laptop",price:100000,pic:"https://t4.ftcdn.net/jpg/02/97/35/11/360_F_297351123_gd71TTj4GzWtalft9fIQF8XcqsOnwj8S.jpg",quantity:5},
    {name:"iPad",price:50000,pic:"https://t4.ftcdn.net/jpg/02/97/35/11/360_F_297351123_gd71TTj4GzWtalft9fIQF8XcqsOnwj8S.jpg",quantity:5}
]
 
  return (
    <>
     {/* <Home products={productArr} />
    //  <Product products={productArr} />
     <button onClick={handleQuantity}>Increase the quatity</button> */}
     <Routes>
      <Route path='/' element={<Home products={productArr}/>}/>
      <Route path='/product' element={<Product products={productArr}/>} />
      <Route path='/signup' element={<SignUp/>}/>
     </Routes>
    </>
   
  );
}

export default App;
