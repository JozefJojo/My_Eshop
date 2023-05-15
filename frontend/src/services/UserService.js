import axios from 'axios'

export const createUser = async user => {

  try {
    const response = await axios.post("http://localhost:8080/users", user)
    console.log('Success- User was created:', response.data);
    return response
    
  } catch (error) {
    console.log('Error - User was not created:',error.message)    
  }

}





