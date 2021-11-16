import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import "./order.css";

import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { confirmDialog } from "primereact/confirmdialog";

// import '../App.css';
import { connect, useSelector, useDispatch } from "react-redux"; //
import { deleteOrder, loadedData } from "../../actions/orderAdminAction";

const ListOrders = ({ history }) => {
  const userLogin = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLogin;
  const [localOrder, setlocalOrder] = useState(null);

  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const orders = useSelector((state) => state.rootReducer);
  console.log(orders);
  const dispatch = useDispatch(); //
  // const { orderdelReducer:orders2 } = useSelector((state) => state);

  // useEffect(() => {
  //   loadedData();
  // }, []);
  const handleDelete = (id) => {
    console.log(id, "id");
    // deleteOrder(id);
    // dispatch(deleteOrder(id));
     dispatch(deleteOrder(id))  
      toast.current.show({
      severity: "success",
      summary: "Successful",
      detail: "User Deleted",
      life: 3000,
    });
    // dispatch(loadedData());
    // history.push("/list");
   
    
  };
  console.log(localOrder); 
  useEffect(() => {
    if (userInfo.length !== 0) {
      if(userInfo.data.user.isAdmin === false){
        
        history.push("/");
      }else{
        setlocalOrder( dispatch(loadedData()))
        dispatch(loadedData());
      }
    } 
    else {
      history.push("/login");
    }
  }, [dispatch, userInfo,history]);

 

  // if (orders.rootReducer.Data !== 0 && orders.rootReducer.Data) {
  //   console.log(orders.rootReducer.Data.data.data);
  // }

  const header = (
    <div className="table-header">
      <h5 className="p-mx-0 p-my-1">Manage orders</h5>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
      </span>
    </div>
  );
  /////delete//////
  const actionBodyTemplateDelete = (rowData) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-trash"
          className=" userDeleteButton p-button-rounded p-button-warning "
          onClick={() => confirm(rowData)}
          label=""
        />
      </React.Fragment>
    );
  };
 const stat =(rowData,item)=>{
   if (rowData[item.field]==="0") {return "pending"
     
   }
   else if(rowData[item.field]==="1" ){
     return"proccessd"
   }
   else if(rowData[item.field]==="2" ){
    return"shipped"
  }
  else if(rowData[item.field]==="3" ){
    return"Deliverd"
  }
  else if(rowData[item.field]==="4" ){
    return"failed"
  }
  
 }

  const confirm = (rowData) => {
    confirmDialog({
      message: `Are you sure you want to delete this order (id order  ${rowData.id}) `,
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      acceptClassName: "p-button-danger",
      accept: () => handleDelete(rowData.id),
    });
  };

  //edit link

  const actionBodyTemplateEdite = (rowData, item) => {
    return (
      <>
        <React.Fragment>
          <Link
            className="userEditeLink "
            to={`single/${rowData[item.field]}`}
            s
          >
            <i className="pi pi-pencil p-button-rounded p-button-success p-mr-2"></i>
          </Link>
        </React.Fragment>
      </>
    );
  };

  return (
    <div className="container">
      {orders.Data !== 0 && orders.Data && (
        <div className="">
          <Toast ref={toast} />
          <DataTable
            value={orders.Data.data.data}
            responsiveLayout="scroll"
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} orders"
            globalFilter={globalFilter}
            header={header}
            showGridlines
            className="p-datatable-customers"
          >
            <Column field="id" header="order id" sortable></Column>
            <Column field="totalPrice" header="total price" sortable></Column>
            <Column field="dateOrdered" header="data ordered" sortable></Column>

            <Column field="status" header="ordr status" body={stat} sortable></Column>

            <Column
              field="id"
              header="Delete"
              body={actionBodyTemplateDelete}
              exportable={false}
            ></Column>
            <Column
              field="id"
              header="go to order details"
              body={actionBodyTemplateEdite}
              exportable={false}
            ></Column>
          </DataTable>
        </div>

        
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  Data: state.Data,
});

export default connect(mapStateToProps, { loadedData, deleteOrder })(
  ListOrders
);
