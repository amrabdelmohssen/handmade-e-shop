
import React, { useState, useEffect ,useRef} from "react";
import CategoryService from "../../services/categoryService";



 const CategoryUpdate = (props)=>{

    const [name, setName] = useState("");
    const [color, setColor] = useState("");
    const [icon, setIcon] = useState("");

    const getUser = (id,config)=>{

        CategoryService.CategoryUpdate(id,config)
        .then(response => {
            console.log("asdasdfasdf asdg agsd")
            setName(response.data.data.data.name)
            setColor(response.data.data.data.name)
            setIcon(response.data.data.data.name)
            console.log("asdasdfasdf asdg agsd")
        }).catch((err)=>{
            console.log(err)
        })    
    }
   

    return(
        <div>
            asd
        </div>
    )

}

export default CategoryUpdate
