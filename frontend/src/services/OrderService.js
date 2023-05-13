import axios from 'axios'

export const createOrder = async order => {

  try {
    const response = await axios.post("http://localhost:8080/orders/createOrderWithUser", order)
    console.log('Success- Order was created:', response.data);
    return response
    
  } catch (error) {
    console.log('Error - Order was not created:',error.message)    
  }

}