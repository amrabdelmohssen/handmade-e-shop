import http from "../utils/http";
const searchGetAll = (productName)=>{
    return http.get(`/products/search?name=${productName}`)

    //https://www.googleapis.com/books/v1/volumes?q=${cat}
}

const searchService = {
    searchGetAll,
}

export default searchService;

