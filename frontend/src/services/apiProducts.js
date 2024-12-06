import axios from "axios";

const apiURL = 'http://Localhost:5000/api';

export const fetchProducts = async ()=>{
    try {
        const response = await axios.get(`${apiURL}/products`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:',error)
    }
}

export const fetchProductById = async (prouctId)=>{
    try {
        const response = await axios.get(`${apiURL}/produts/${prouctId}`);
        return response.data
    } catch (error) {
        console.error('Error fetching product by id',error)
    }
}

export const createProduct = async (productdata)=>{
    try {
        const response = await axios.post(`${apiURL}/products`,productdata);
        return response.data
    } catch (error) {
        console.error('Error creating product',error)
    }
}

export const updateProduct = async(productId,productdata)=>{
    try {
        const response = await axios.put(`${apiURL}/products/${productId}`,productdata);
        return response.data
    } catch (error) {
        console.error('Error Updating Product')
    }
}

export const deleteProduct = async (productId)=>{
    try {
        const response = await axios.delete(`${apiURL}/products/${productId}`);
        return response.data
    } catch (error) {
        console.error('Error Deleting Product')   
    }
}




