import axios from "axios";



const apiURL = 'http://localhost:5100/api/products';

export const fetchProducts = async ()=>{
    try {
        const response = await axios.get(apiURL);
        return response.data;
    } catch (error) {
        console.log('Error fetching products:',error)
    }
}

export const fetchProductById = async (productId)=>{
    try {
        const response = await axios.get(`${apiURL}/${productId}`);
        return response.data
    } catch (error) {
        console.log('Error fetching product by id',error)
    }
}

export const createProduct = async (productdata)=>{
    try {
        const response = await axios.post(`${apiURL}`,productdata);
        return response.data
    } catch (error) {
        console.log('Error creating product',error)
    }
}

export const updateProduct = async(productId,productdata)=>{
    try {
        const response = await axios.put(`${apiURL}/${productId}`,productdata);
        return response.data
    } catch (error) {
        console.log('Error Updating Product')
    }
}

export const deleteProduct = async (productId)=>{
    try {
        const response = await axios.delete(`${apiURL}/${productId}`);
        return response.data
    } catch (error) {
        console.log('Error Deleting Product')   
    }
}




