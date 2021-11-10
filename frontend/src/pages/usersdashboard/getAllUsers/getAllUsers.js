import { getUsersAction ,deletUserAction} from "../../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect ,useRef} from "react";
import { Link } from "react-router-dom";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Redirect } from "react-router";

import React from "react";
// import { classNames } from 'primereact/utils';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import { ProductService } from '../service/ProductService';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
// import { FileUpload } from 'primereact/fileupload';
// import { Rating } from 'primereact/rating';
// import { Toolbar } from 'primereact/toolbar';
// import { InputTextarea } from 'primereact/inputtextarea';
// import { RadioButton } from 'primereact/radiobutton';
// import { InputNumber } from 'primereact/inputnumber';
// import { Dialog } from 'primereact/dialog';
// import { InputText } from 'primereact/inputtext';



import './getallusers.css'
export const GetAllUsersPage = ({ history }) => {
  const userLogin = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLogin;

  const [globalFilter, setGlobalFilter] = useState(null);

  //toast 

  const toast = useRef(null);

  //delete 

  // const [deleteProductDialog, setDeleteProductDialog] = useState(false);

//   const hideDeleteProductDialog = () => {
//     setDeleteProductDialog(false);
// }


//     const [products, setProducts] = useState(null);




  const { usersReducer: users } = useSelector((state) => state);
    const y = JSON.stringify(users)
    //  console.log(y)
  const dispatch = useDispatch();

  const deleletUserOnClick = (id)=>{
    
      dispatch(deletUserAction(id))

      toast.current.show({ severity: 'success', summary: 'Successful', detail: 'User Deleted', life: 3000 });
      dispatch(getUsersAction());

    
  }


  useEffect(() => {
    if (userInfo.length === 0 || userInfo.isAdmin === false) {
      history.push("/login");
    } else {
      dispatch(getUsersAction());
      
      

      // console.log(users.data.data[0].name, userInfo);
      // console.log(users)

    }
  } ,[ dispatch, userInfo,]);

//delete 
// const deleteProductDialogFooter = (
//   <React.Fragment>
//       <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductDialog}/>
//       <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleletUserOnClick} />
//   </React.Fragment>
// );





const actionBodyTemplate = (rowData,item) => {
  return (
      <React.Fragment>
          <Button icon="pi pi-trash" style= {{marginLeft:"20px"}} className="p-button-rounded p-button-warning userDeleteButton"  onClick={() => deleletUserOnClick(rowData[item.field])}/>
      </React.Fragment>
      // <!-- button trigger modal -->

//       <>
// {          console.log(rowData.id)}

// <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//   Launch demo modal
// </button>

// <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//         ...
//       </div>
//       <div class="modal-footer">
//         <React.Fragment>
//           {/* <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-mr-2" onClick={() => editProduct(rowData)} />  onClick={() => deleletUserOnClick(rowData[item.field])}*/}
//           <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" data-bs-toggle="modal" data-bs-target="#exampleModal"  onClick={() => deleletUserOnClick(rowData[item.field])} />
          
//        </React.Fragment>
//       </div>
//     </div>
//   </div>
// </div>
// </>
  );
}

//edit

const actionBodyTemplateEdite = (rowData,item) => {
  return (
      <React.Fragment>
                  <Link className="userEditeLink" to = {`edituser/${rowData[item.field]}`} s><i class="fas fa-user-edit userEditeIcon" ></i></Link>
      </React.Fragment>
  )}


const bool = (rowData,item)=>{
  if(typeof rowData[item.field] === "boolean"){
    return rowData[item.field]?"admin":"user"
  }else{
    return rowData[item.field]
  }
}

const header = (
  <div className="table-header">
      <h5 className="p-mx-0 p-my-1">Manage Products</h5>
      <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
      </span>
  </div>
);
  return (
    <>
      <div className="table-responsive container">
        <table className="table table-bordered table-hover text-center">
          <thead className="" >

            <tr>
              
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Country</th>
              <th>City</th>
              <th>Street</th>
              <th>apartment</th>
              <th>ZIP</th>
              <th>Role</th>
              <th>Delete</th>
              <th>Update</th>
              
            </tr>
          </thead>
          <tbody>
          { typeof users.data !== "undefined" ? users.data.data.map((item, index)=>{
                return(
            <tr key = {index}>                      
              
                  <td>{item.name}</td> 
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.country}</td>
                  <td>{item.city}</td>
                  <td>{item.street}</td>
                  <td>{item.apartment}</td>
                  <td>{item.zip}</td>
                  <td>{item.isAdmin?"Admin":"User"}</td>
                  <td><button to = {`/${item.id}`} onClick = {()=>deleletUserOnClick(item.id)}><i class="fas fa-trash-alt"></i></button></td>
                  <td><Link to = ""><i class="fas fa-user-edit"></i></Link></td>


                  </tr>

                )
              }):""}
              {/* 
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
               */}
          
             {/* </tr> */}
          </tbody>
        </table>
      </div>

<div  className="datatable-crud-demo">
      <div className=" container ">

      { typeof users.data !== "undefined" &&<div className="">
                <h5>Single Column</h5>
                <Toast ref={toast} />
                <DataTable value={users.data.data} responsiveLayout="scroll"
                globalFilter={globalFilter} header={header} showGridlines className="p-datatable-customers"
                >
                    <Column field="name" header="name" sortable></Column>
                    <Column field="email" header="Email" sortable></Column>
                    <Column field="phone" header="Phone" sortable></Column>
                    <Column field="country" header="Country" sortable></Column>
                    <Column field="city" header="City" sortable></Column>
                    <Column field="street" header="Street" sortable></Column>
                    <Column field="apartment" header="Apartment" sortable></Column>
                    <Column field="isAdmin" header="Role" body = {bool} sortable></Column>
                    <Column field="zip" header="ZIP" sortable></Column>
                    <Column field = "id" body={actionBodyTemplate} exportable={false} style={{ minWidth: '8rem' }}></Column>
                    <Column field = "id" body={actionBodyTemplateEdite} exportable={false} style={{ minWidth: '8rem' }}></Column>

                    {/* <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleletUserOnClick} /> */}
                    
                    </DataTable>
                      
                      





                    {/* <Column field="name" header="Name" sortable></Column>
                    <Column field="category" header="Category" sortable></Column>
                    <Column field="quantity" header="Quantity" sortable></Column>
                    <Column field="price" header="Price" sortable></Column> */}

            {/* //     <Dialog visible={deleteProductDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}> */}
            {/* //     <div className="confirmation-content">
            //         <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem'}} />
            //         {product && <span>Are you sure you want to delete <b>{product.name}</b>?</span>}
            //     </div>
            // </Dialog> */}
            </div>
                      
            }

      </div>
      </div>
    </>
  );
};
