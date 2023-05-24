import axios from 'axios'

export const createOrder = async order => {

  try {
    const response = await axios.post("http://localhost:8080/orders/createOrderWithUser", order)
    console.log('Success- Order was created:', response.data);
    return { success: true, data: response.data };
  } catch (error) {
    console.log('Error - Order was not created:',error.message) 
    return { success: false, error: error.message };   
  }

}


