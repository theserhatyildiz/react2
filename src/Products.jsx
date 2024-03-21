import { useEffect, useState } from "react";


function Products() 
{

    let [name,setName] = useState('Iphone 14');
    let [price,setPrice] = useState('$1300');

    //1. By Default useEffect is called for every render and rerender
    //2. if you pass a second param as a blank array it will be only called for first render
    //3. if you pass variables in dependency array useeffect will still be called for first render
    //   it will also be called if the value of the variable in the dependency array changes
    //4. You can have multiple useEffects in a single component

    useEffect(()=>{
        console.log("Component Mounted");

        return ()=>{
            console.log('Component gone');
        }
    },[price])

    return(

        <div className="product">
            <h1>{name}</h1>
            <h3>{price}</h3>
            <button onClick={()=>{
                setName('Iphone 7 Pro');
            }}>Change Name</button>
            
            <button onClick={()=>{
                setPrice('$2000');
            }}>Change Price</button>
        </div>
    )

}

export default Products;