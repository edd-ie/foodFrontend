import React, { useState, useEffect } from "react";
import './order.css';
import NavR from "../../utility/NavR";

export default function Orders({ user }) {
  const [orders, setOrders] = useState([]);
  const [editingOrderId, setEditingOrderId] = useState(null);
  const [editedChefId, setEditedChefId] = useState("");
  const [editedStatus, setEditedStatus] = useState("");
  const [editedOrderId, setEditedOrderId] = useState("");

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

  const handleFieldChange = async (orderId) => {
    try {
      const response = await fetch(`https://backendfood-co7z.onrender.com/restaurant/orders/${orderId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chef_id: editedChefId,
          status: editedStatus,
          order_id: editedOrderId
        })
      });

      if (response.ok) {
        setOrders(prevOrders =>
          prevOrders.map(order =>
            order.id === orderId
              ? {
                  ...order,
                  chef_id: editedChefId,
                  status: editedStatus,
                  order_id: editedOrderId
                }
              : order
          )
        );
        setEditingOrderId(null);
        setEditedChefId("");
        setEditedStatus("");
        setEditedOrderId("");
      } else {
        console.error('Error updating fields');
      }
    } catch (error) {
      console.error('Error updating fields:', error);
    }
  };

  const handleEditClick = (orderId, currentChefId, currentStatus, currentOrderId) => {
    setEditingOrderId(orderId);
    setEditedChefId(currentChefId);
    setEditedStatus(currentStatus);
    setEditedOrderId(currentOrderId);
  };

  const handleEditFormClose = () => {
    console.log("Closing edit Form");
    setEditingOrderId(null);
    setEditedChefId("");
    setEditedStatus("");
    setEditedOrderId("");
  };

  return (
    <div id="nOrders">
      <NavR />
      <table id="nTable">
        <thead id="nHeader">
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Order ID</th>
            <th>Restaurant ID</th>
            <th>Chef ID</th>
            <th>Paid</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>
                {editingOrderId === order.id ? (
                  <div className="gEdit-form">
                    <h2>Edit Order</h2>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleFieldChange(order.id);
                      }}
                    >
                      <label>Chef ID:</label>
                      <input type="text" value={editedChefId} onChange={(e) => setEditedChefId(e.target.value)}/>
                      <label>Status:</label>
                      <select
                        value={editedStatus}
                        onChange={(e) => setEditedStatus(e.target.value)}
                      >
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="completed">Completed</option>
                      </select>
                      <label>Order ID:</label>
                      <input type="text" value={editedOrderId} onChange={(e) => setEditedOrderId(e.target.value)}/>
                      <div className="buttons">
                        <button type="submit">Save</button>
                        <button type="button" onClick={handleEditFormClose}>
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                ) : (
                  <span>{order.status}</span>
                )}
              </td>
              <td>{order.order_id}</td>
              <td>{order.restaurant_id}</td>
              <td>{order.chef_id}</td>
              <td>{order.paid ? "Yes" : "No"}</td>
              <td>
                {editingOrderId === order.id ? (
                  <button onClick={handleEditFormClose}>Cancel</button>
                ) : (
                  <button
                    id="nEditbutton"
                    onClick={() =>
                      handleEditClick(
                        order.id,
                        order.chef_id,
                        order.status,
                        order.order_id
                      )
                    }
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
