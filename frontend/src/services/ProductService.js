import axios from 'axios';

class ProductService{
    async getProducts(){
        const response = await axios.get("http://localhost:8080/products");
        return response
    }

    // async getProductById(){
    //     const response = await axios.get(`http://localhost:8080/products/${id}`);
    //     return response
    // }
    getProductById(id) {
        return axios.get(`http://localhost:8080/products/${id}`)
    }

}

export default new ProductService ()