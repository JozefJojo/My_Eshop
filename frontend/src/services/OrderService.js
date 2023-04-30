import axios from 'axios'
// const ordersUrl = "http://localhost:8080/orders"

// export const createOrder = async order => {

//   try {
//     // const response = await axios.post(`${ordersUrl}`, order,
//     const response = await axios.post("hhttp://localhost:8080/orders", order,
//       {
//         headers: {
//           "content-type": "application/json"
//         }
//       }
//     )

//     return response
//   } catch (error) {
//     console.log(error.message)    
//   }

// }



export const createOrder = async order => {

  try {
    const response = await axios.post("http://localhost:8080/orders", order)
    console.log('Success- Order was created:', response.data);
    return response
    
  } catch (error) {
    console.log('Error - Order was not created:',error.message)    
  }

}