import { Routes, Route } from 'react-router-dom'
import Layout from './Layout';
import About from './pages/About';
import Cart from './pages/Cart';
import Home from './pages/Home/index.jsx';
import Products from './pages/Products';
import Single from './pages/Single';
import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  let carts = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < carts.length; i++) {
      sum += Number(carts[i].amount)   
    }
    setCount(sum);
    console.log(count);
  }, [count])

  return (
      <Routes>  
        <Route path='/' element={<Layout setCount={setCount} count={count}/>}>

            <Route index element={<Home></Home>}/>

            <Route path='about' element={<About></About>}/>

            <Route path='products'>
                <Route index={true} element={<Products></Products>}/>
                <Route path='id' element={<Single setCount={setCount}></Single>}/>
            </Route>

            <Route path='cart' element={<Cart setCount={setCount}></Cart>}/>

        </Route>
      </Routes>
  )
}

export default App
