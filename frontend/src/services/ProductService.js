import axios from 'axios';

class ProductService{
    async getProducts(){
        const response = await axios.get("http://localhost:8080/products");
        return response
    }

}

export default new ProductService ()