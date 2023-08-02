import React, { useState, useEffect } from "react";
import './order.css';
import NavR from "../../utility/NavR";

export default function Orders({ user }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await fetch("https://backendfood-co7z.onrender.com/restaurant/orders/1");
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchOrders();
  }, []);

  return (
    <div id="nOrders">
      <NavR />
      <table id="nTable">
        <thead id="nHeader">
          <tr >
            <th id="nTh">ID</th>
            <th id="nTh">Status</th>
            <th id="nTh">Order ID</th>
            <th id="nTh">Restaurant ID</th>
            <th id="nTh">Chef ID</th>
            <th id="nTh">Paid</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td id="nTd">{order.id}</td>
              <td id="nTd">{order.status}</td>
              <td id="nTd">{order.order_id}</td>
              <td id="nTd">{order.restaurant_id}</td>
              <td id="nTd">{order.chef_id}</td>
              <td id="nTd">{order.paid ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
