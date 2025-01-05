"use client";
import { useEffect, useState } from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

import styles from "./DashboardOverview.module.css";

export default function DashboardOverview() {
  const [orders, setOrders] = useState([]);
  const [totalSales, setTotalSales] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [is2025Only, setIs2025Only] = useState(false);


  const toggle2025Orders = () => {
    setIs2025Only(prevState => !prevState);
  };

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
      if (is2025Only) {
        const filteredOrders = data.filter(order => {
          const orderDate = new Date(order.timestamp.seconds * 1000);
          return orderDate.getFullYear() === 2025;
        });
        setOrders(filteredOrders);
      } else {
        setOrders(data);
      }

      const sales = data.length;
      const revenue = data.reduce((sum, order) => sum + parseFloat(order.finalPrice), 0);
      setTotalSales(sales);
      setTotalRevenue(revenue);
    }
    loadOrders();
  }, [is2025Only]);



  const lineChartData = {
    labels: orders.map(order => {
      const date = new Date(order.timestamp.seconds * 1000);
      return date.toLocaleDateString();
    }),
    datasets: [
      {
        label: "Valor das encomendas por data (€)",
        data: orders.map(order => parseFloat(order.finalPrice)),
        borderColor: "red",
        backgroundColor: "rgba(160, 25, 25, 0.2)",
      },
    ],
  };

  const lineChartData2 = {
    labels: orders.map(order => {
      const date = new Date(order.timestamp.seconds * 1000);
      return date.toLocaleDateString();
    }),
    datasets: [
      {
        label: "Nº produtos por data",
        data: orders.map(order => order.orderReadyProducts.length),
        borderColor: "black",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
      },
    ],
  };

  const barChartData = {
    labels: ["Circular", "Custom", "Quadrangular", "Para vidros", "Insta Stickers", "Taguagens temporárias"],
    datasets: [
      {
        label: "Encomendas por produto",
        data: [
          orders.filter(order => order.orderReadyProducts.some(p => p.stickerType === "circular")).length,
          orders.filter(order => order.orderReadyProducts.some(p => p.stickerType === "custom")).length,
          orders.filter(order => order.orderReadyProducts.some(p => p.stickerType === "square")).length,
          orders.filter(order => order.orderReadyProducts.some(p => p.stickerType === "glass")).length,
          orders.filter(order => order.orderReadyProducts.some(p => p.stickerType === "instaStickers")).length,
          orders.filter(order => order.orderReadyProducts.some(p => p.stickerType === "temporaryTattoos")).length,
        ],
        backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#f1c40f", "#e74c3c", "#9b59b6"],
      },
    ],
  };


  const pieChartData = {
    labels: ["Circular", "Custom", "Quadrangular", "Para vidros", "Insta Stickers", "Taguagens temporárias"],
    datasets: [
      {
        data: [
          orders.filter(order => order.orderReadyProducts.some(p => p.stickerType === "circular")).length,
          orders.filter(order => order.orderReadyProducts.some(p => p.stickerType === "custom")).length,
          orders.filter(order => order.orderReadyProducts.some(p => p.stickerType === "square")).length,
          orders.filter(order => order.orderReadyProducts.some(p => p.stickerType === "glass")).length,
          orders.filter(order => order.orderReadyProducts.some(p => p.stickerType === "instaStickers")).length,
          orders.filter(order => order.orderReadyProducts.some(p => p.stickerType === "temporaryTattoos")).length,
        ],
        backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#f1c40f", "#e74c3c", "#9b59b6"],
      },
    ],
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.overview}>Dashboard Overview</h2>
      <div className={styles.topBar}>
        <div className={styles.stats}>
          <p>Total de vendas: {totalSales}</p>
          <p>Valor das vendas: {totalRevenue.toFixed(2)}€</p>
          <p>Valor médio por venda: {(totalRevenue / totalSales || 0).toFixed(2)}€</p>
        </div>
        <button onClick={toggle2025Orders} className={styles.filterOrders}>
          {is2025Only ? "Show All Orders" : "Show 2025 Orders Only"}
        </button>
      </div>
      <div className={styles.charts}>
        <div className={styles.chart}>
          <Line data={lineChartData} />
        </div>
        <div className={styles.chart}>
          <Line data={lineChartData2} />
        </div>
        <div className={styles.chart}>
          <Bar data={barChartData} />
        </div>
        <div className={styles.pieChart}>
          <Pie data={pieChartData} />
        </div>
      </div>
    </div>
  );
}
