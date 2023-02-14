function Component1(props){
    function JeansHandler(){
        console.log(props.brand, "at price of", props.price)
    }
    return(
        <div className="card" onClick={JeansHandler}> 
            <div className="picture-info">
            <img className="picture" src={"https://source.unsplash.com/1600x1000/?" + props.img}/>
            <p className="ratings">{props.ratings} {props.votes} votes</p>
            </div>
            
            <div className="content">
            <div className="flex2">
            <p className="brand">{props.brand}</p>
            <p className={props.date >= 2023 ? "label" : "d-none"}>Exclusive</p>
            </div>
            <p className="desc">{props.desc}</p>
            <p className="price">Rs. {props.price} <span>(50% Off)</span> <span className={props.price >=1000? "free" : "d-none"}>Free Delivery</span></p>
            </div>
            
        </div>
    )
}

export default Component1