function Component(props){
    function foodOrderHandler(){
        console.log(props.name, "@ price of", props.price)
    }
    return(
        // <div className="box">
        //     <img className="food-picture" src="https://source.unsplash.com/1600x1000/?burger"/>
        //     <h3>Burger</h3>
        //     <p>Deliciuos veges and fresh ketchup</p>
        //     <p>4.5</p>
        //     <p>Rs. 220/-</p> 
        // </div> 

        <div className="box" onClick={foodOrderHandler}>
            <div className="position">
            <img className="food-picture" src={"https://source.unsplash.com/1600x1000/?" + props.img}/>
            <p className="ratings">{props.ratings} Stars & {props.votes} Votes</p>
            </div>
            <div className="flex-box2">
            <h3>{props.name}</h3>
            <p className={props.ratings > 4.5 ? "tag" : "d-none"}>Bestseller</p>
            </div>
            <p className="desc">{props.desc}</p>
            <div className="flex-box2">
            <p className="price">Rs. {props.price}</p> 
            <button>Order Now</button>
            </div>   
            <p className={props.price > 200 ? "free" : "d-none"}>*Free Delivery available</p>
        </div>
    )
}

export default Component