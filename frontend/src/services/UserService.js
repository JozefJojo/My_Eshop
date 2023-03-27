import axios from 'axios'
// const ordersUrl = "http://localhost:8080/users"

export const createUser = async user => {

  try {
    // const response = await axios.post(`${ordersUrl}`, order,
    const response = await axios.post("http://localhost:8080/users", user)
    console.log('Success:', response.data);
    return response
  } catch (error) {
    console.log(error.message)    
  }

}





