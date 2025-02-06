"use client";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./AffiliateCodes.module.css";

export default function AffiliateCodes() {
  const [codes, setCodes] = useState([]);
  const [newCode, setNewCode] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [loading, setLoading] = useState(false);

  async function loadCodes() {
    setLoading(true);
    const response = await fetch('/api/fetchAffiliateCodes', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store'
    });

    if (!response.ok) {
      console.error('Failed to fetch affiliate codes');
      return;
    }

    const data = await response.json();
    setLoading(false);
    setCodes([...data]);
  }

  useEffect(() => {
    loadCodes();
  }, []);

  const handleAddCode = async () => {
    if (!newCode || percentage <= 0) {
      console.error("Please provide valid code and percentage.");
      return;
    }

    const response = await fetch('/api/newAffiliateCode', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: newCode, percentage }),
      cache: 'no-store'
    });

    if (!response.ok) {
      console.error('Failed to add affiliate code');
      return;
    }

    setNewCode("");
    setPercentage(0);
    loadCodes();
  };


  const handleRemoveCode = async (id) => {
    const response = await fetch(`/api/deleteAffiliateCode`, {
      method: 'DELETE',
      body: JSON.stringify({ id: id }),
      cache: 'no-store'
    });

    if (!response.ok) {
      console.error('Failed to remove affiliate code');
      return;
    }
    loadCodes();
  };


  const handleToggleCode = async (id, active) => {
    const response = await fetch(`/api/toggleAffiliateCode`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: id, active: !active }),
      cache: 'no-store'
    });

    if (!response.ok) {
      console.error('Failed to toggle affiliate code');
      return;
    }
    loadCodes();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Códigos de afiliado</h2>
      <div className={styles.form}>
        <input
          type="text"
          placeholder="Código de afiliado"
          value={newCode}
          onChange={(e) => setNewCode(e.target.value)}
          className={styles.codeInput}
        />
        <input
          type="number"
          placeholder="Percentagem"
          value={percentage}
          onChange={(e) => setPercentage(e.target.value)}
          className={styles.codeInput}
        />
        <button onClick={handleAddCode} className={styles.codeButton}>Adicionar Código</button>
      </div>
      <div className={styles.codesList}>
        <div className={styles.loadingAnimation}>
          {loading && <CircularProgress size={24} color="inherit" />}
        </div>
        {codes.map((code) => (
          <div key={code.id} className={styles.codeItem}>
            <p>{code.code} - {code.percentage}%</p>
            <div className={styles.codeButtons}>
              <button onClick={() => handleToggleCode(code.id, code.active)} className={styles.codeButton}>
                {code.active ? "Desativar" : "Ativar"}
              </button>
              <button onClick={() => handleRemoveCode(code.id)} className={styles.codeButton}>Remover</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
