import React, { useState, useEffect, useRef } from "react";
import { classNames } from "primereact/utils";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Image } from "primereact/image";
import { Editor } from "primereact/editor";
import { Dropdown } from "primereact/dropdown";
import {
    getProducts,
    updateProducts,
    AddProduct,
    deleteProducts,
    // getProductsByCategoryId,
} from "../../actions/productAction";
import { getCateAction } from "../../actions/cateAction";
import { useDispatch, useSelector } from "react-redux";

import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { FileUpload } from "primereact/fileupload";
import { Toolbar } from "primereact/toolbar";
import { InputTextarea } from "primereact/inputtextarea";
import { InputNumber } from "primereact/inputnumber";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import "./table.css";

const AdminListProducts = ({ history }) => {
    const userLogin = useSelector((state) => state.userLoginReducer);
    const { userInfo } = userLogin;
    let emptyProduct = {
        image: "",
        brand: "",
        price: 0,
        rating: 0,
        numReviews: 0,
        isFeatured: false,
        name: "",
        description: "",
        category: null,
        reviews: [],
        countInStock: "0",
        richDescription: "",
        images: "",
        dateCreated: "",
    };

    const [products, setProducts] = useState(null);
    const [productDialog, setProductDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [product, setProduct] = useState(emptyProduct);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [imageUploaded, setImageUploaded] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const allProducts = useSelector((state) => state.productReducer);
    const allCategories = useSelector((state) => state.categoryReducer);
    const dispatch = useDispatch();
    const [imgState, setImgState] = useState(null);
    let formData = new FormData();
    useEffect(() => {
        if (userInfo.length !== 0) {
            if (userInfo.data.user.isAdmin === false) {
                history.push("/");
            } else {
                dispatch(getProducts());
                dispatch(getCateAction());
                setProducts(allProducts)
            }
        } else {
            history.push("/login");
        }
    }, [dispatch, userInfo]);

    const openNew = () => {
        setProduct(emptyProduct);
        setSubmitted(false);
        setProductDialog(true);
    };

    const hideDialog = () => {
        setSubmitted(false);
        setProductDialog(false);
    };

    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    };

    const hideDeleteProductsDialog = () => {
        setDeleteProductsDialog(false);
    };

    const findIndexById = (id) => {
        let index = -1;
        for (let i = 0; i < allProducts.data.data.length; i++) {
            if (allProducts.data.data[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    };
    const saveProduct = () => {
        setSubmitted(true);
        if (product.name.trim()) {
            let _products = [...allProducts.data.data];
            let _product = { ...product };
            if (product.id) {
                const index = findIndexById(product.id);
                _products[index] = _product;
                let { name, description, richDescription, category, price, countInStock } = _product;
                formData.append("name", name);
                formData.append("description", description);
                formData.append("richDescription", richDescription);
                formData.append("category", category);
                formData.append("price", price);
                formData.append("countInStock", countInStock);
                formData.append("image", imageUploaded);

                dispatch(updateProducts(product.id, formData));
                toast.current.show({
                    severity: "success",
                    summary: "Successful",
                    detail: "Product Updated successfully",
                    life: 3000,
                });
            } else {
                let { name, description, richDescription, category, price, countInStock } = _product;
                formData.append("name", name);
                formData.append("description", description);
                formData.append("richDescription", richDescription);
                formData.append("category", category);
                formData.append("price", price);
                formData.append("countInStock", countInStock);
                formData.append("image", imageUploaded);
              
                dispatch(AddProduct(formData));
                toast.current.show({
                  severity: "success",
                  summary: "Successful",
                  detail: "Product Created successfully",
                  life: 3000,
              });
            }

            setProducts(_products);
            setProductDialog(false);
            setProduct(emptyProduct);
        }
    };

    const editProduct = (product) => {
        setProduct({ ...product });
        setProductDialog(true);
    };

    const confirmDeleteProduct = (product) => {
        setProduct(product);
        setDeleteProductDialog(true);
    };

    const deleteProduct = () => {
      setDeleteProductDialog(false);
      setProduct(emptyProduct);
      dispatch(deleteProducts(product.id));
        toast.current.show({
            severity: "success",
            summary: "Successful",
            detail: "Product Deleted",
            life: 3000,
        });
    };

    const confirmDeleteSelected = () => {
        setDeleteProductsDialog(true);
    };

    const deleteSelectedProducts = () => {
        let _products = allProducts.data.data.filter((val) => !selectedProducts.includes(val));
        selectedProducts.map((val) => {
          console.log(val.id);
            dispatch(deleteProducts(val.id));
        });
        setProducts(_products);
        setDeleteProductsDialog(false);
        setSelectedProducts(null);
        toast.current.show({
            severity: "success",
            summary: "Successful",
            detail: "Products Deleted",
            life: 3000,
        });
    };

    const onImageChange = (e, name) => {
      if (name === "image") {
        formData.append(name, e.files[0]);
        setImageUploaded(e.files[0])
          } else {
            formData.append(name, e.files);
          }
    };
    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || "";
        let _product = { ...product };
        _product[`${name}`] = val;
        setProduct(_product);
    };

    const onEditorChange = (e, name) => {
        const val = e.htmlValue || "";
        let _product = { ...product };
        _product[`${name}`] = val;
        setProduct(_product);
    };
    const onInputNumberChange = (e, name) => {
        const val = e.value || 0;
        let _product = { ...product };
        _product[`${name}`] = val;

        setProduct(_product);
    };

    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <Button label="New" icon="pi pi-plus" className="p-button-success p-mr-2" onClick={openNew} />
                <Button
                    label="Delete"
                    icon="pi pi-trash"
                    className="p-button-danger"
                    onClick={confirmDeleteSelected}
                    disabled={!selectedProducts || !selectedProducts.length}
                />
            </React.Fragment>
        );
    };

    const imageBodyTemplate = (rowData) => {
        return (
            <Image
                src={`${rowData.image}`}
                alt={rowData.name}
                onError={(e) =>
                    (e.target.src = "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
                }
                imageStyle={{ width: "6rem", height: "4rem" }}
            />
        );
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button
                    icon="pi pi-pencil"
                    className="p-button-rounded p-button-success p-mr-2"
                    onClick={() => editProduct(rowData)}
                />
                <Button
                    icon="pi pi-trash"
                    className="p-button-rounded p-button-warning"
                    onClick={() => confirmDeleteProduct(rowData)}
                />
            </React.Fragment>
        );
    };

    const header = (
        <div className="table-header">
            <h5 className="p-mx-0 p-my-1">Manage Products</h5>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );
    const editorHeader = (
        <span className="ql-formats">
            <button className="ql-bold" aria-label="Bold"></button>
            <button className="ql-format-separator"></button>
            <button className="ql-italic"></button>
            <button className="ql-format-separator"></button>
            <button className="ql-underline"></button>
            <button className="ql-format-separator"></button>
            <button className="ql-strike"></button>
        </span>
    );
    const productDialogFooter = (
        <React.Fragment>
            <Button label="Cancel" icon="pi pi-times" className="p-button-text" onClick={hideDialog} />
            <Button label="Save" type="submit" icon="pi pi-check" className="p-button-text" onClick={saveProduct} />
        </React.Fragment>
    );
    const deleteProductDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteProduct} />
        </React.Fragment>
    );
    const deleteProductsDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductsDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteSelectedProducts} />
        </React.Fragment>
    );

    return (
        <div className="container">
            {allProducts.length !== 0 && (
                <div className="datatable-crud-demo">
                    <Toast ref={toast} />

                    <div className="card">
                        <Toolbar className="p-mb-4" left={leftToolbarTemplate}></Toolbar>

                        <DataTable
                            value={allProducts.data.data}
                            selection={selectedProducts}
                            onSelectionChange={(e) => setSelectedProducts(e.value)}
                            showGridlines
                            dataKey="id"
                            paginator
                            rows={10}
                            resizableColumns
                            columnResizeMode="fit"
                            rowsPerPageOptions={[5, 10, 25]}
                            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                            globalFilter={globalFilter}
                            header={header}
                            responsiveLayout="scroll"
                        >
                            <Column
                                selectionMode="multiple"
                                headerStyle={{ width: "3rem" }}
                                exportable={false}
                            ></Column>
                            <Column field="_id" header="_id" sortable style={{ minWidth: "12rem" }}></Column>
                            <Column field="name" header="Name" sortable style={{ minWidth: "16rem" }}></Column>
                            <Column
                                field="image"
                                header="Image"
                                body={imageBodyTemplate}
                                className="text-center"
                            ></Column>
                            <Column field="price" header="Price" sortable style={{ minWidth: "8rem" }}></Column>
                            <Column
                                field="countInStock"
                                header="countInStock"
                                sortable
                                style={{ minWidth: "16rem" }}
                            ></Column>
                            <Column field="category" header="Category" sortable style={{ minWidth: "10rem" }}></Column>
                            <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: "8rem" }}></Column>
                        </DataTable>
                    </div>

                    <Dialog
                        visible={productDialog}
                        style={{ width: "800px" }}
                        header="Product Details"
                        modal
                        className="p-fluid text-center"
                        footer={productDialogFooter}
                        onHide={hideDialog}
                    >
                        {product.image && (
                            <Image
                                src={`${product.image}`}
                                alt={product.name}
                                onError={(e) =>
                                    (e.target.src =
                                        "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
                                }
                                imageStyle={{ width: "50%", height: "18rem" }}
                                className="product-image p-d-block p-m-auto p-pb-3"
                            />
                        )}
                        <form onSubmit={saveProduct}>
                            <div className="p-field">
                                <FileUpload
                                    name="image"
                                    customUpload
                                    auto
                                    mode="basic"
                                    maxFileSize="1000000"
                                    accept="image/*"
                                    uploadHandler={(e) => onImageChange(e, "image")}
                                />
                            </div>
                            <div className="p-field">
                                <label htmlFor="name">Name</label>
                                <InputText
                                    id="name"
                                    value={product.name}
                                    onChange={(e) => onInputChange(e, "name")}
                                    required
                                    autoFocus
                                    className={classNames({ "p-invalid": submitted && !product.name })}
                                />
                                {submitted && !product.name && <small className="p-error">Name is required.</small>}
                            </div>
                            <div className="p-field">
                                <label htmlFor="description">Description</label>
                                <InputTextarea
                                    id="description"
                                    value={product.description}
                                    onChange={(e) => onInputChange(e, "description")}
                                    required
                                    rows={3}
                                    cols={20}
                                />
                                {submitted && !product.description && (
                                    <small className="p-error">Description is required.</small>
                                )}
                            </div>
                            <div className="p-field">
                                <label htmlFor="richDescription">richDescription</label>
                                <Editor
                                    id="richDescription"
                                    style={{ height: "320px" }}
                                    value={product.richDescription}
                                    required
                                    onTextChange={(e) => onEditorChange(e, "richDescription")}
                                    headerTemplate={editorHeader}
                                />
                                {submitted && !product.richDescription && (
                                    <small className="p-error">richDescription is required.</small>
                                )}
                            </div>
                            <div className="p-field">
                                <label className="p-mb-3">Category</label>
                                <div className="p-formgrid p-grid">
                                    <div className="p-field p-col">
                                        <Dropdown
                                            options={allCategories.data.data}
                                            optionLabel="name"
                                            optionValue="_id"
                                            value={product.category}
                                            filter={true}
                                            filterBy="name"
                                            onChange={(e) => onInputChange(e, "category")}
                                            showClear={true}
                                            style={{ width: "100%" }}
                                        ></Dropdown>
                                        {submitted && !product.category && (
                                            <small className="p-error">Category is required.</small>
                                        )}
                                    </div>
                                </div>
                                <div className="p-formgrid p-grid">
                                    <div className="p-field p-col">
                                        <label htmlFor="price">Price</label>
                                        <InputNumber
                                            id="price"
                                            value={product.price}
                                            onValueChange={(e) => onInputNumberChange(e, "price")}
                                            mode="currency"
                                            currency="USD"
                                            locale="en-US"
                                        />
                                    </div>
                                    <div className="p-field p-col">
                                        <label htmlFor="countInStock">countInStock</label>
                                        <InputNumber
                                            id="countInStock"
                                            value={product.countInStock}
                                            onValueChange={(e) => onInputNumberChange(e, "countInStock")}
                                            integeronly
                                        />
                                        {submitted && !product.countInStock && (
                                            <small className="p-error">countInStock is required.</small>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </Dialog>

                    <Dialog
                        visible={deleteProductDialog}
                        style={{ width: "450px" }}
                        header="Confirm"
                        modal
                        footer={deleteProductDialogFooter}
                        onHide={hideDeleteProductDialog}
                    >
                        <div className="confirmation-content">
                            <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: "2rem" }} />
                            {product && (
                                <span>
                                    Are you sure you want to delete <b>{product.name}</b>?
                                </span>
                            )}
                        </div>
                    </Dialog>

                    <Dialog
                        visible={deleteProductsDialog}
                        style={{ width: "450px" }}
                        header="Confirm"
                        modal
                        footer={deleteProductsDialogFooter}
                        onHide={hideDeleteProductsDialog}
                    >
                        <div className="confirmation-content">
                            <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: "2rem" }} />
                            {product && <span>Are you sure you want to delete the selected products?</span>}
                        </div>
                    </Dialog>
                </div>
            )}
        </div>
    );
};
export default AdminListProducts;
