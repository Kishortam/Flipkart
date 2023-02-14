import Component1 from "./Components/Component1"
import './App.css';

let fashion = [
  {brand:"Levis", desc:"Mens Skinny fit Jeans", price: 959, ratings:4.3, votes: 5000, img:"jeans", date: 2019},
  {brand:"Roadster", desc:"Mens Skinny fit Jeans", price: 1019, ratings:3.7, votes: 5400, img:"jeans", date: 2023 },
  {brand:"Harvard", desc:"Mens Slim fit Jeans", price: 1271, ratings:3.2, votes: 1400, img:"jeans", date: 2022 },
  {brand:"Highlander", desc:"Mens tapered fit Jeans", price: 636, ratings:4, votes: 2304, img:" jeans", date: 2023},
  {brand:"Wrogn", desc:"Mens Slim fit Jeans", price: 1949, ratings:3.5, votes: 324, img:" jeans", date: 2023},
  {brand:"Ether", desc:"Mens Skinny fit Jeans", price: 899, ratings:3.8, votes: 834, img:" jeans",date: 2022},
]

function App() {
  return (
    <div className="flexbox">
      {
        fashion.map((jeans)=>{
          return <Component1 brand={jeans.brand} desc={jeans.desc} price={jeans.price} ratings={jeans.ratings} votes={jeans.votes} img={jeans.img} date={jeans.date}/>
    })
      }
    </div>
  
  );
}

export default App;
