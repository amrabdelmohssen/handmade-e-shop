import React, { useEffect, useState,useRef } from "react";
import { Link } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import "./order.css"

import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { confirmDialog } from "primereact/confirmdialog";

// import '../App.css';
import { connect, useSelector, useDispatch } from "react-redux"; //
import { deleteOrder, loadedData } from "../../actions/orderAdminAction";

const ListOrders = ({ loadedData, deleteOrder, Data }) => {
  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const orders = useSelector((state) => state);
  const dispatch = useDispatch(); //

  useEffect(() => {
    loadedData();
  }, []); //

  const handleDelete = (id) => {
    console.log(id, "id");
    deleteOrder(id);
  };

  if (orders.rootReducer.Data !== 0 && orders.rootReducer.Data) {
    console.log(orders.rootReducer.Data.data.data);
  }



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
            to={`singleOrder/${rowData[item.field]}`}
            s
          >
            <i class="pi pi-pencil p-button-rounded p-button-success p-mr-2"></i>
          </Link>
        </React.Fragment>
      </>
    );
  };

  return (
    <div className="container">
    
      {orders.rootReducer.Data !== 0 && orders.rootReducer.Data && (
        <div className="">
          <Toast ref={toast} />
          <DataTable
            value={orders.rootReducer.Data.data.data}
            responsiveLayout="scroll"
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} Users"
            globalFilter={globalFilter}
            header={header}
            showGridlines
            className="p-datatable-customers"
          >
            <Column field="id" header="order id" sortable></Column>
            <Column field="totalPrice" header="total price" sortable></Column>
            <Column field="dateOrdered" header="data ordered" sortable></Column>

            <Column field="status" header="ordr status" sortable></Column>

            <Column field="id" header="Delete" body={actionBodyTemplateDelete} exportable={false}></Column>
            <Column field="id" header = "go to order details" body={actionBodyTemplateEdite} exportable={false}></Column>
             </DataTable>
             </div>

            
         

      
        //                   {data.status == 0
        //                     ? "Pending"
        //                     : data.status == 1
        //                     ? "Proccessd"
        //                     : data.status == 2
        //                     ? "Shipped"
        //                     : data.status == 3
        //                     ? "Deliverd"
        //                     : "Failed"}
        //                 </td>
        //              
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
