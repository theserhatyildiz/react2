import { useState } from 'react'
import './App.css'
import Products from './Products'

function App() {
  
  let [showProduct,setShowProduct] = useState(true);

  return (
    <div className='main'>
   
      <h1>All Products</h1>
      {
        showProduct==true?
        (
        <Products/>
        ):
        (
          <h1>Product Not Available</h1>
        )
      }

    

    </div>
  )
}

export default App
