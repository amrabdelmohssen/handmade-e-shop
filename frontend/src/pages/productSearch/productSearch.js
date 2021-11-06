import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {searchAction}  from "../../actions/searchAction";

// import { useState } from "react";
// import { Link } from "react-router-dom";
export function ProductSearch({ProdName}){
    //    const[productName,setProductName] = useState("")
       const searchProducts = useSelector((state)=>state)
       const dispatch = useDispatch()
       
    //    const val = (e)=>{
    //     setProductName(e.target.value)
    // }
 



       useEffect(()=>{
           dispatch(searchAction(ProdName))
           console.log(searchProducts,'test')
           console.log('prodName',ProdName)
       },[ProdName]);

    

        console.log(searchProducts,'test')


return(
   <div>
       
     
       </div>

/* <form  className="d-flex justify-content-center px-5 mx-5 ">
     <input className="form-control me-2" type="search" onChange={(e)=>val(e)}  placeholder="Search" aria-label="Search"></input>
     <button className="navBar-search-button" type="submit"> <Link to ={`/productSearch/${productName}`}> Search</Link></button>
</form>
</div>

 </div> */


)

}