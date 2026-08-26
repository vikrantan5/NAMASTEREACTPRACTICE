import products from "../utils/products";
import Card from "./Card"
const Body = ()=>{
    return(
        <div className="containbody">
        <div className="search">
            <input></input>
            <button>search</button>
        </div>
        <div className="body">
            {products.map((pro , key)=>{
                return(
                     <Card prod = {pro} key= {pro.card.card.info.id}/>
                )
               
            })}
           
           
            

        </div>
        </div>
    )
}
export default Body