
import './App.css';
import {useState} from 'react';

let counter = 0;
let name = "";


function App() {
  let [counter, setCounter] = useState(0);
  let [name, setName] = useState('');
  let [orderFoodHandler, setorderFoodHandler] = useState(0);

function clickHandler(){
setCounter(counter + 1)
setName('Virat Kohli')
console.log(counter)
}
function OrderKarHandler(){
  setorderFoodHandler(1);
  console.log(setorderFoodHandler)
}
  return (
    // <div className="App">
    //   <p>{counter} times clicked by {name}</p>
    //   <button className='butn' onClick={clickHandler}>Simple Click Calculator</button>
    // </div>

    <div className='card'>
      <img src='https://source.unsplash.com/300x200/?french fries'/>
      <h2>ChatPata French Fries</h2>
      <p className={orderFoodHandler == 1 ? 'success' : 'd-none'}>Your Order has been placed Successfully!</p>
      <p>Made up of freshly harvested potatoes and sprinkled with ajmain</p>
      <button className={orderFoodHandler == 0? 'butn1':'d-none'} onClick={OrderKarHandler}>Order Now</button>
      <button className={orderFoodHandler == 1?'butn2': 'd-none'}>Oops! Cancel Order</button>
    </div>

    
  );
}

export default App;
