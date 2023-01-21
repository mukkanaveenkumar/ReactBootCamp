const Shimmer = () => {
    return (
       <div className="restaurantList">         
       {
       Array(10).fill("").map((e,index)=> (
        <div className="shimmerCard" key={index}></div> 
       ))
       }        
       </div>       
    )
};

export default Shimmer;