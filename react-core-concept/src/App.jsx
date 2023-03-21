import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUser></ExternalUser>
    </div>
  )
};

function ExternalUser() {
  const [users, setUsers] = useState([])
  // useEffect(()=>{} , [])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data=> setUsers(data))

    } , [])
    
  return (
    <div>
      <h2>External Users{ }</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email ={user.email} ></User>)
      }
  </div>
)
};

function User(props) {
  return (
    < div style={{border:'2px solid red', margin:'10px', paddingLeft:'100px' ,paddingRight:'100px', backgroundColor:'blue'}}>
      <h3>Name: {props.name}</h3>
      <p>Email {props.email}</p>
      
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(33)

  const increaseCount = () => setCount(count +1);
  const decreaseCount = () => setCount(count - 1);

  // const increaseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button className='btn' onClick={increaseCount}>Increase</button>
      <button className='btn' onClick={decreaseCount}>Decrease:</button>
    </div>
  )
}




/*
 {
        products.map(product=> <Product name={product.name} price={product.price}></Product>)
      }
     <Product name="Laptop" price="35000"></Product>
     <Product name="Phone" price="7000"></Product>
     <Product name="Watch" price="8000"></Product>

*/ 

 
/*
const products = [
    { name: "Laptop", price: "53000" },
     { name: "Price", price: "9000" },
    { name: "Tablet", price: "7000" },
    { name: "Watch", price: "3000" }
  ]
*/ 



function Product(props) {
  return (
    <div className='product'>
      <h3>Name: {props.name} </h3>
      <p>Price: {props.price }</p>
  </div>
  )
};

 



export default App
