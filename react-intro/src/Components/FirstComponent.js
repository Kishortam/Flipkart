function FirstComponent(props){
    return(
        // <div className="card">
        //     <img className="imgs" src={"https://source.unsplash.com/1600x800/?" + props.img}/>
        //     <h3>{props.name}</h3>
        //     <p>{props.desc}</p>
            
        // </div>
        // <div className="card">
        //     <img className="imgs" src={"https://source.unsplash.com/1600x800/?" + props.img}/>
        //     <h3>{props.name}</h3>
        //     <p>{props.desc}</p>
        // </div>
//new example:
        // <div className="temp1">
        //     <img className="picture" src="https://source.unsplash.com/1600x800/?tshirt"/>
        //     <h3>T-shirts</h3>
        //     <p>All size and patterns available</p>
        //     <button>Buy Now</button>
        // </div>
        <div className="temp1">
            <img className="picture" src={"https://source.unsplash.com/1600x800/?" + props.img}/>
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
            <button>Buy Now</button>
        </div>
    )
}

export default FirstComponent;