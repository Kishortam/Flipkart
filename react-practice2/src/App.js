import Component from './Component';
import './App.css';

let food = [
  {name:'Veg Burger', ratings:4.7, desc:"Made of freshly curated veges & masala", Price: 220, votes:204, img:"veg-burger"},
  {name:'Garden Fresh Pizza', ratings:4.9, desc:"Made of freshly curated veges & masala", Price: 250, votes:309, img:"pizza"},
  {name:'Veg-Roll', ratings:3.5, desc:"Made of freshly curated veges & masala", Price: 120, votes:304, img:"veg-roll"},
  {name:'Chicken Soup', ratings:4.4, desc:"Made of freshly curated veges & masala", Price: 180, votes:697, img:"soup"},
  {name:'Chicken Hot Dog', ratings:4.9, desc:"Made of freshly curated veges & masala", Price: 280, votes:697, img:"hotdog"},
  {name:'Coke', ratings:4.0, desc:"Made of freshly curated veges & masala", Price: 80, votes:990, img:"coke"},
]

function App() {
  return (
    <div className="flex-box">
      {/* <Component name="Maharaja Burger" description="Fresh veggies and chatpata masala" ratings="4.7" price="Rs. 180" foodImage="burger"/>
      <Component name="Garden fresh pizza" description="Fresh veggies and chatpata masala" ratings="4.2" price="Rs. 250"foodImage="Pizza"/>
      <Component name="Black Coffee" description="Dark Coffee with brown sugar" ratings="3.0" price="Rs. 80" foodImage="black coffee"/>
      <Component name="Frankie" description="Fresh veggies and chatpata masala" ratings="3.7" price="Rs. 150" foodImage="frankie"/> */
      food.map((meal)=>{
        return <Component name={meal.name} ratings={meal.ratings} desc={meal.desc} price={meal.Price} votes={meal.votes} img={meal.img}/>
      })
      }
    </div>
    
  );
}

export default App;
