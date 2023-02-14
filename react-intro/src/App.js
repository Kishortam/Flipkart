import FirstComponent from '../src/Components/FirstComponent.js'
import './App.css';

// let food = [
//   {name: 'Galaxy Note 3', company:'Samsung', price: 40000, img:'Samsung Mobile'},
//   {name: 'Reno3', company:'Oppo', price: 22000, img:'Oppo Mobile'},
//   {name: 'Max pro', company:'iPhone', price: 80000, img:'iPhone Mobile'},
//   {name: 'Narzo', company:'Realme', price: 20000, img: 'Realme Mobile'},
// ]

let menswear = [
  {name:"T-shirt", price:200, desc:'Available in all sizes'},
  {name:"Jeans", price:800, desc:'Available in all sizes'},
  {name:"Blazzer", price:2200, desc:'Available in all sizes'},
  {name:"Shoes", price:600, desc:'Available in all sizes'},
]

function App() {
  return (
    <div >
      {
        menswear.map((clothes)=>{
        return <FirstComponent name={clothes.name} Price={clothes.Price} desc={clothes.desc}/>
      })
      
      
      // <div className="flex-card">
      //   <FirstComponent name="Hot Coffee" desc="Chai pio, aur jio" img="coffee"/>
      // <FirstComponent name="Hot Coffee" desc="Chai pio, aur jio" img="bun"/>
      // <FirstComponent name="Hot Coffee" desc="Chai pio, aur jio" img="toast"/>
      // </div>*/

      }
      {
        <div classname="flex-card">
        {/* <FirstComponent name="H&M T-shirts" desc="Available in all sizes" img="t-shirt"/> 
        <FirstComponent name="Levis Jeans" desc="Available in all sizes" img="Jeans"/>
      <FirstComponent name="Nike Shoes" desc="Available in all sizes" img="shoes"/>
      <FirstComponent name="Puma Backpack" desc="Available in all sizes" img="backpack"/>
      <FirstComponent name="Jacket" desc="Available in all sizes" img="jacket"/>
      <FirstComponent name="Cap" desc="Available in all sizes" img="cap"/> */}
      <FirstComponent/>
      </div>
      
      
      }
    </div>
  );
}

export default App;
