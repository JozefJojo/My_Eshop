import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/shop-context';

function Thanks() {

  const navigate = useNavigate();
  const { resetContext } = React.useContext(ShopContext);

  const handleButtonClick = () => {
    resetContext(); 
    navigate('/'); 
  };

  return (
    <div style={{ marginTop: '10px' }}>
      <h1>Thank you for your purchase!</h1>
      <p>Thank you for choosing our e-shop for your purchase.</p>
      <p>Your order has been successfully processed.</p>
      <p>If you have any questions about your order, you can contact us at this phone number: 0900 666 666.</p>
      <p>Thank you once again and we look forward to doing business with you again!</p>
      <button type="button" class="btn btn-primary" onClick={handleButtonClick} >Back to Home Page</button>
    </div>
  );
}

export default Thanks;













