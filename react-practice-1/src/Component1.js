function Component1(props){
    function orderFoodHandler(){
        console.log("order successful for", props.name, "at price of", props.price)
    }
    return(
        //Note : This is a basic Programme
        // <div className="box">
        //     <img className="picture" src="https://source.unsplash.com/1600x800/?house"/>
        //     <h3>Your Dream Home</h3>
        //     <p>Buy your dream home at walking distance from Mumbai</p>
        //     <p>Range starts from 13.9 lacs onwards</p>
        // </div>

        //Note : This is value replacemnt through props example, this allows you to add different value for diff.props
        //    <div className="box">
        //         <img className="picture" src={"https://source.unsplash.com/1600x800/?" + props.img}/>
        //         <h3>{props.title}</h3>
        //         <p>{props.desc}</p>
        //         <p>{props.price}</p>
        //     </div>

        <div className="box" onClick={orderFoodHandler}>
            <div className="card-header"> 
            <img  className="picture" src={"https://source.unsplash.com/1800x600/?" + props.img}/>
            <p className="ratings"> {props.ratings} ({props.votes} votes)</p>
            </div>
            
            <div className="flex1">
            <h3>{props.name}</h3>
            <p className={props.ratings > 4.0 ? "tag" :props.ratings > 4 && props.votes > 1000? "popular" : "d-none"}>{4.4 ? "must try" : props.ratings > 4 && props.votes > 1000? "Most popluar" : ""}</p>
            </div>
            <p>{props.desc}</p>
            <p>Rs.{props.price}</p>
            {/* <p>{props.ratings}</p> */}
        </div>
    )


}

export default Component1