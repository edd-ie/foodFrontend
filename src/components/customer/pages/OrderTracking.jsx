import React, { useState, useEffect } from 'react';
import NavC from '../../utility/NavC';
import './orderTracking.css';

export default function OrderTracking({ user }) {
  const [orders, setOrders] = useState([]);
  console.log(orders);

  useEffect(() => {
    fetch('https://backendfood-co7z.onrender.com/customer/activeOrders/1')
      .then(response => response.json())
      .then(data => setOrders(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="gOrderTrack">
      <NavC />
      <div className="gOrderTrack-content">
        <div className="gOrders-container">
          {orders.map(order => (
            <div className="gOrder" key={order.id}>
              <h2>Order {order.id} (Status: {order.status})</h2>
              <img src={order.restaurant.picture} alt={order.restaurant.name} />
              <p>Items: {order.order.items.join(', ') || 'None specified'}</p>
              <p>Status: {order.status}</p>
              <p>Order ID: {order.order_id}</p>
              <p>Restaurant Name: {order.restaurant.name}</p>
              <p>Total: ksh {order.order.total}</p>
              <p>Paid: {order.paid ? 'True' : 'False'}</p>
              <p>Complete: {order.complete ? 'True' : 'False'}</p>
              {!order.paid && <button>Pay Now</button>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}