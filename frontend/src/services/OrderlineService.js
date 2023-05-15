import axios from 'axios'



export const createOrderLine = async (item) => {

  try {
    const response = await axios.post("http://localhost:8080/orderlines", item) 
    console.log('Success - Orderlines was created:', response.data);
    return response
  } catch (error) {
    console.log('Error - Orderlines was not created:',error.message)    
  }

}




// const saveCartItem = async (item) => {
//     try {
//       // odoslanie POST požiadavky na server
//       const response = await axios.post('http://your-api-url.com/cart-items', item);
  
//       // response obsahuje nový záznam v databáze so zadaným ID
//       console.log('Položka bola úspešne uložená:', response.data);
//     } catch (error) {
//       console.error('Chyba pri ukladaní položky:', error);
//     }


