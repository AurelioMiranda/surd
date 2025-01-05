"use client";
import { useState, useEffect } from "react";
import styles from "./OrderManagement.module.css";

export default function OrderManagement() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      const response = await fetch('/api/orders', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        console.error('Failed to fetch orders');
        return;
      }

      const data = await response.json();
      setOrders(data);
    }
    loadOrders();
  }, []);

  const handleMarkComplete = async (id) => {
    alert('Não implementado!');
  };

  const toggleAccordion = (id) => {
    setOrders(orders.map(order =>
      order.id === id ? { ...order, isOpen: !order.isOpen } : order
    ));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Gestão de pedidos</h2>
      <div className={styles.ordersList}>
        {orders.map((order) => (
          <div key={order.id} className={styles.orderItem}>
            <p>ID: {order.id}</p>
            <p>Timestamp: {new Date(order.timestamp.seconds * 1000).toLocaleString()}</p>
            <p>Preço final: {order.finalPrice}€</p>
            <b>Entregue: {order.completed ? "Sim" : "Não"}</b>

            <div className={styles.orderDetails}>
              <p><strong>Cidade:</strong> {order.city}</p>
              <p><strong>País:</strong> {order.country}</p>
              <p><strong>Morada:</strong> {order.deliveryAddress}</p>
              <p><strong>Nome:</strong> {order.instagram}</p>
              <p><strong>Contacto:</strong> {order.phoneNumber}</p>
              <p><strong>Email:</strong> {order.userEmail}</p>
              <p><strong>Localização:</strong> {order.location}</p>
            </div>

            <div className={styles.flexToCenter}>
              <button onClick={() => handleMarkComplete(order.id)}>
                Marcar como entregue
              </button>
            </div>

            <div className={styles.accordion}>
              <div className={styles.flexToCenter}>
                <button onClick={() => toggleAccordion(order.id)}>
                  {order.isOpen ? "Esconder Produtos" : "Ver Produtos"}
                </button>
              </div>

              {order.isOpen && (
                <div className={styles.productList}>
                  {order.orderReadyProducts.map((product, index) => (
                    <div key={index} className={styles.productItem}>
                      {product.imageFile && <img src={product.imageFile} alt={product.size} className={styles.productImage} />}
                      {!product.imageFile && <p>N/a</p>}
                      <p><strong>Tipo de Sticker:</strong> {product.stickerType}</p>
                      <p><strong>Tamanho:</strong> {product.size}</p>
                      <p><strong>Quantidade:</strong> {product.quantity}</p>
                      <p><strong>Preço:</strong> {product.price}€</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
