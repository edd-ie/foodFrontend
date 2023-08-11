import React, { useState, useEffect } from 'react';
import NavC from '../../utility/NavC';
import './orderTracking.css';
import { useNavigate } from 'react-router-dom';

export default function OrderTracking({ user }) {
  const [orders, setOrders] = useState([]);
  const nav = useNavigate();
  console.log(orders);

  useEffect(() => {
    fetch('https://backendfood-co7z.onrender.com/customer/activeOrders/1')
      .then(response => response.json())
      .then(data => setOrders(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  function pay(id) {
    localStorage.getItem('trId') ? localStorage.removeItem('trId') :null
    localStorage.setItem('trId', id)
    nav('/payment');
  }

  return (
    <div className="g-OrderTrack">
      <NavC />
      <div className="g-OrderTrack-content">
        <div className="g-Orders-container">
          {orders.map(order => (
            <div className="g-Order" key={order.id}>
              <h2>Order {order.id} (Status: {order.status})</h2>
              <img src={order.restaurant.picture} alt={order.restaurant.name} />
              <p>Items: {order.order.items.join(', ') || 'None specified'}</p>
              <p>Status: {order.status}</p>
              <p>Order ID: {order.order_id}</p>
              <p>Restaurant Name: {order.restaurant.name}</p>
              <p>Total: ksh {order.order.total}</p>
              <p>Paid: {order.paid ? 'True' : 'False'}</p>
              <p>Complete: {order.complete ? 'True' : 'False'}</p>
              {!order.paid && <button onClick={()=>pay(order.id)}>Pay Now</button>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}