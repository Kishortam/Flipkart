
import Component1 from "./Component1"
import './App.css';
let menu = [
  {name:"Pizza", desc:"Hot and cheezy with your favourite toppings", ratings:4.5, img:"pizza", votes:323, price:250},
  {name:"Burger", desc:"Hot and cheezy with your favourite toppings", ratings:4.2, img:"Burger", votes:524, price:180},
  {name:"Coffee", desc:"Hot and cheezy with your favourite toppings", ratings:3.2, img:"Coffee", votes:782, price:120},
  {name:"Sandwich", desc:"Hot and cheezy with your favourite toppings", ratings:3.8, img:"Sandwich", votes:328, price:160},
  {name:"Coke", desc:"Hot and cheezy with your favourite toppings", ratings:4.9, img:"Coke", votes:1096, price:50},
  {name:"Nuggets", desc:"Hot and cheezy with your favourite toppings", ratings:3.5, img:"Nuggets", votes:902, price:200},
]

function App() {
  return (

    // <div className="flex">
    //    <Component1 title="Book Now" desc="Buy your dream home at walking distance from Mumbai" price="Range starts from 13.9 lacs onwards" img="home"/>
    //    <Component1 title="Search Job" desc="Buy your dream home at walking distance from Mumbai" price="find your dream job at highly scalable companies" img="job"/>
    //    <Component1 title="Book a Bike Now" desc="Buy your dream home at walking distance from Mumbai" price=" Ex-showroom price 1.22 onwards" img="bike"/>
       
    // </div>
    <div className="flex">
      {
        menu.map((food)=>{
          return <Component1 name={food.name} desc={food.desc} ratings={food.ratings} img={food.img} votes={food.votes} price={food.price}/>
        })
      }
      
    </div>
    
  );
}

export default App;
