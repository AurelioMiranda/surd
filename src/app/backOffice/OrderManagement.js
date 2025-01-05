"use client";
import { useState, useEffect } from "react";
// import { fetchAllOrders, markOrderAsComplete } from "../firebase/orders";
import styles from "./OrderManagement.module.css";

export default function OrderManagement() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      const data = await fetchAllOrders();
      setOrders(data);
    }
    loadOrders();
  }, []);

  const handleMarkComplete = async (id) => {
    await markOrderAsComplete(id);
    const updatedOrders = await fetchAllOrders();
    setOrders(updatedOrders);
  };

  return (
    <div className={styles.container}>
      <h2>Order Management</h2>
      <div className={styles.ordersList}>
        {orders.map((order) => (
          <div key={order.id} className={styles.orderItem}>
            <p>Order ID: {order.id}</p>
            <p>Timestamp: {new Date(order.timestamp).toLocaleString()}</p>
            <p>Final Price: ${order.finalPrice}</p>
            <p>Completed: {order.completed ? "Yes" : "No"}</p>
            <button onClick={() => handleMarkComplete(order.id)}>
              Mark as Complete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
