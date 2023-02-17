
import './App.css';
import { useState } from 'react';

let counter = 0;
let name = '';

function App() {
  let [counter, setCounter] = useState(0);
  let [name , setName] = useState('')
  let [orderStatus, setOrderStatus] = useState(0);

  function clickHandler(){
    // console.log('clickHandler function is called')
    // setCounter(counter + 1)
    // setName('Kishor')
    // console.log(counter)
  }
  function orderFoodHandler(){
    setOrderStatus(1);
    console.log(setOrderStatus)
  }
  return (
    // <div className="App">
    //   <p>{counter} Times button clicked! by {name}</p>
    //   <button className="btn" onClick={clickHandler}>Example of react hook</button>
    // </div>

    <div className='food-card'>
      <img src='https://source.unsplash.com/300x200/?pizza'/>
      <h3>Dino's Chicken Pizza</h3>
      <h1 className={orderStatus == 1 ? 'success' : 'd-none'}>Order Successful!</h1>
      <p>Made with Dilshan Cheese and Mint Flavoured Toppings</p>
      <button className={orderStatus == 0 ? 'butn1' : 'd-none'} onClick={orderFoodHandler}>Order Now</button>
      <button className={orderStatus == 1 ? 'butn2' : 'd-none'}>Cancel Order</button>
    </div>
  );
}

export default App;
