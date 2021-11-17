import http from "../utils/http";


const getAllCateApi = (config) =>{
    return http.get(`/categories`,config)
}

const deleteCateApi = (id,config)=>{
    return http.delete(`/categories/${id}`,config)
} 


const createCateApi = (data,config) => {
    return http.post("/categories", data,config);
  };

  const updateCateApi = (id,data,config)=>{

    return http.put(`/categories/${id}`,data,config)
}
  

const CategoryService = {
    getAllCateApi,
    deleteCateApi,
    createCateApi,
    updateCateApi,

}

export default CategoryService ;  