import { updateUserAction } from "../../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect ,useRef} from "react";
import { Link } from "react-router-dom";
import UserService from "../../../services/userService";

 export const UpdateUser = (props)=>{

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [street, setStreet] = useState("");
    const [apartment, setApartment] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [zip, setZip] = useState("");
    const [isAdmin, setAdmin] = useState("");

    const intialUserDetails = {
        apartment:"",
        city: "",
        country: "",
        email:"",
        id: null,
        isAdmin:false,
        name: "",
        street: "",
        zip:""
    }
    const [currentUserDetails,setCurrentUserDetails]= useState(intialUserDetails);
    const dispatch = useDispatch;
    console.log(currentUserDetails,"new data")

    const handleInputChange = event=>{
        const {name , value} = event.target;
        setCurrentUserDetails({...currentUserDetails,
             [name]:value})
    }
    
    const getUser = (id,config)=>{

        UserService.getUserApi(id,config)
        .then(response => {
            setCurrentUserDetails(response.data.data.data)
            console.log(typeof response.data.data.data.name);
        }).catch((err)=>{
            console.log(err)
        })

        
       
    }
    const userLogin = useSelector((state) => state.userLoginReducer);
    const { userInfo } = userLogin;
  

    
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
        },
    };

console.log(props.match.params.id)
    useEffect(()=>{
        if (userInfo.length === 0 || userInfo.isAdmin === false) {
      props.history.push("/login");
    } else {          
        getUser(props.match.params.id,config)
          //console.log(currentUserDetails,"userdetails")
          //console.log(currentUserDetails.data.id,"id")
    }
    },[userInfo,props.match.params.id])

function updateContent(){
    // console.log(currentUserDetails,"ddddddddddddddddddd")
    
   let item = {apartment,city,country,email,name,street,zip}
    console.log(item)
    // dispatch(updateUserAction(props.match.params.id,item))
    //     props.history.push("/getusers")

        UserService.updateUserApi(props.match.params.id,item,config)
        .then(response => {
            // setCurrentUserDetails(response.data.data.data)
            console.log(response);
        }).catch((err)=>{
            console.log(err)
        })
    
    // .then((respons) =>{
    //     console.log(respons,"dddddddddddddfffffffffff")
    //     // setCurrentUserDetails({
    //     // apartment:data.apartment,
    //     // city: data.city,
    //     // country: data.country,
    //     // email:data.email,
    //     // id: data.id,
    //     // isAdmin:data.isAdmin,
    //     // name: data.name,
    //     // street: data.street,
    //     // zip:data.zip,

        //  }).catch(err=>{
        //      console.log(err)
        //  })
    }

        // props.history.push("/getusers")    


const onSubmit= (e)=>{
    e.preventDefault();

}

return (
    <>
    {typeof currentUserDetails !== "undefined"?
    <div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" name="name" onChange={e=>{setName (e.target.value)}} placeholder="name" defaultValue={currentUserDetails.name}/>
    </div>
    <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email </label>
            <input type="text" class="form-control" id="email" name="email" onChange={e=>{setEmail (e.target.value)}} placeholder="email" defaultValue={currentUserDetails.email}/>
    </div>
     <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Country</label>
            <input type="text" class="form-control" id="country" name="country" onChange={e=>{setCountry (e.target.value)}} placeholder="country" defaultValue={currentUserDetails.country}/>
    </div>
    <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">City</label>
            <input type="text" class="form-control" id="city" name="city" onChange={e=>{setCity (e.target.value)}} placeholder="city" defaultValue={currentUserDetails.city}/>
    </div>
    <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Street</label>
            <input type="text" class="form-control" id="street" name="street" onChange={e=>{setStreet (e.target.value)}} placeholder="street" defaultValue={currentUserDetails.street}/>
    </div>
    <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Apartment</label>
            <input type="text" class="form-control" id="apartment" name="apartment"  onChange={e=>{setApartment (e.target.value)}} placeholder="apartment" defaultValue={currentUserDetails.apartment}/>
    </div>
    <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">ZIP code</label>
            <input type="text" class="form-control" id="zip" name="zip"placeholder="ZIP" onChange={e=>{setZip (e.target.value)}} defaultValue={currentUserDetails.zip}/>
    </div>
    {/* <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1"  placeholder="name@example.com" value={currentUserDetails.zip}/>
    </div> 
    <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={currentUserDetails.isAdmin}/>
    </div> */}
    <button  className="btn btn-primary"  onClick = {updateContent}>Update</button>


    </div>
    :""}
</>
)

    // const [email, setEmail] = useState("");
    // const [name, setName] = useState("");
    // const [street, setStreet] = useState("");
    // const [apartment, setApartment] = useState("");
    // const [city, setCity] = useState("");
    // const dispatch = useDispatch();
    
 } 