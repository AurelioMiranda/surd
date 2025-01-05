"use client";
import { useState, useEffect } from "react";
//import { fetchAffiliateCodes, addAffiliateCode, removeAffiliateCode, toggleAffiliateCode } from "../firebase/affiliateCodes";
import styles from "./AffiliateCodes.module.css";

export default function AffiliateCodes() {
  const [codes, setCodes] = useState([]);
  const [newCode, setNewCode] = useState("");
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    async function loadCodes() {
      const data = await fetchAffiliateCodes();
      setCodes(data);
    }
    loadCodes();
  }, []);

  const handleAddCode = async () => {
    await addAffiliateCode(newCode, percentage);
    setNewCode("");
    setPercentage(0);
    const updatedCodes = await fetchAffiliateCodes();
    setCodes(updatedCodes);
  };

  const handleRemoveCode = async (id) => {
    await removeAffiliateCode(id);
    const updatedCodes = await fetchAffiliateCodes();
    setCodes(updatedCodes);
  };

  const handleToggleCode = async (id, active) => {
    await toggleAffiliateCode(id, active);
    const updatedCodes = await fetchAffiliateCodes();
    setCodes(updatedCodes);
  };

  return (
    <div className={styles.container}>
      <h2>Affiliate Code Management</h2>
      <div className={styles.form}>
        <input
          type="text"
          placeholder="Affiliate Code"
          value={newCode}
          onChange={(e) => setNewCode(e.target.value)}
        />
        <input
          type="number"
          placeholder="Percentage"
          value={percentage}
          onChange={(e) => setPercentage(e.target.value)}
        />
        <button onClick={handleAddCode}>Add Code</button>
      </div>
      <div className={styles.codesList}>
        {codes.map((code) => (
          <div key={code.id} className={styles.codeItem}>
            <p>{code.code} - {code.percentage}%</p>
            <button onClick={() => handleToggleCode(code.id, code.active)}>
              {code.active ? "Deactivate" : "Activate"}
            </button>
            <button onClick={() => handleRemoveCode(code.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}
