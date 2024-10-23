"use client";
import { useState } from "react";
import styles from './Payment.module.css';

const shippingCosts = {
  "PORTUGAL": 1.63,
  "EUROPE (EXCEPT PT)": 2.60,
  "USA": 3.63,
  "REST OF THE WORLD": 3.40
};

const stickerPrices = {
  circular: {
    "3X3 (vinyl)": [2.55, 1.47, 0.84, 0.62, 0.52, 0.44],
    "5X5 (vinyl)": [3.83, 2.12, 1.16, 0.84, 0.68, 0.57],
    "7X7 (paper, customized)": [3.98, 2.44, 1.70, 1.36, 1.20, 0.97],
    "7X7 (vinyl, circular)": [4.90, 2.65, 1.43, 1.02, 0.81, 0.68],
    "10X10 (paper, customized)": [4.49, 2.78, 2.04, 1.70, 1.51, 1.38],
    "10X10 (vinyl, circular)": [5.90, 3.15, 1.62, 1.18, 0.94, 0.78],
  },
  square: {
    "3X3 (vinyl)": [2.09, 1.24, 0.72, 0.55, 0.46, 0.40],
    "5X5 (vinyl)": [3.37, 1.89, 1.04, 0.76, 0.62, 0.53],
    "7X7 (vinyl)": [5.10, 2.75, 1.48, 1.05, 0.86, 0.70],
    "10X10 (vinyl)": [6.70, 3.55, 1.88, 1.32, 1.06, 0.86],
    "8,5X5,5 (vinyl)": [3.97, 2.19, 1.19, 0.86, 0.70, 0.59],
    "11X9 (vinyl)": [5.45, 2.93, 1.56, 1.32, 1.04, 0.86],
  },
  glass: {
    "20x20": [15.50, 12.50, 11.17, 10.25, 8.98, 4.74],
    "40x40": [19.50, 16.00, 13.17, 11.75, 10.50, 8.00],
    "60x60": [25.50, 21.00, 18.17, 15.75, 13.50, 10.00],
    "90x90": [31.50, 27.00, 24.17, 20.50, 19.50, 14.00],
    "120x120": [41.50, 35.00, 30.17, 25.75, 21.50, 16.00],
  },
  temporary_tattoos: {
    "2,5X2,5": [6.40, 2.85, 1.65, 1.36, 1.04],
    "5X5": [7.40, 3.77, 2.48, 2.12, 1.73],
    "7,5X7,5": [8.40, 4.67, 3.31, 2.88, 2.42],
    "10X5": [8.40, 4.67, 3.31, 2.88, 2.42],
    "13X6,5": [9.40, 5.58, 4.14, 3.64, 3.10],
    "10X10": [9.95, 6.08, 4.60, 4.06, 3.48],
  }
};

const imageTreatmentPrices = [1.50, 3.00, 4.00, 5.00, 5.50, 6.00];

export default function Payment() {
  const [step, setStep] = useState(0);  // Controls the current step in the form
  const [stickerType, setStickerType] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(5);
  const [location, setLocation] = useState("PORTUGAL");
  const [imageTreatment, setImageTreatment] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]); // Stores the products added by the user

  const calculatePrice = () => {
    let index;
    if (quantity >= 5 && quantity < 10) {
      index = 0;
    } else if (quantity >= 10 && quantity < 50) {
      index = 1;
    } else if (quantity >= 50 && quantity < 100) {
      index = 2;
    } else if (quantity >= 100 && quantity < 200) {
      index = 3;
    } else if (quantity >= 200 && quantity < 500) {
      index = 4;
    } else if (quantity >= 500) {
      index = 5;
    }

    const basePrice = stickerPrices[stickerType][size][index];
    const shippingCost = shippingCosts[location];
    const treatmentCost = imageTreatment ? imageTreatmentPrices[index] : 0;
    return basePrice * quantity + shippingCost + treatmentCost;
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1); // Move to the next step
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1); // Go back to the previous step
  };

  const handleAddProduct = () => {
    const price = calculatePrice();
    const newProduct = {
      stickerType,
      size,
      quantity,
      imageTreatment,
      price
    };

    setProducts([...products, newProduct]); // Add the product to the list
    resetForm();
    setStep(0);  // Reset to first step for new product
  };

  const resetForm = () => {
    setStickerType("");
    setSize("");
    setQuantity(5);
    setImageTreatment(false);
  };

  const handleRemoveProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);  // Remove product from the list
  };

  const handleSubmit = async () => {
    console.log("Submitting...")
    const finalPrice = products.reduce((acc, product) => acc + product.price, 0).toFixed(2);
    const response = await fetch('/api/apiroute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        products,
        finalPrice,
        location
      })
    });
    console.log("Order submitted.")
  
    const result = await response.json();
    alert(`Submitting products: ${JSON.stringify(products)} \nShipping to: ${location} \nTotal Price: ${finalPrice}€ ${result.message}`);
  };


  return (
    <div className={styles.containerPayment123}>
      <h1 className={styles.titleXYZ}>Sticker Order Form</h1>

      {step === 0 && (
        <div className={styles.sectionABCD}>
          {/* Sticker Type Selection */}
          <label className={styles.label_001}>
            Sticker Type:
            <select className={styles.select} value={stickerType} onChange={(e) => setStickerType(e.target.value)}>
              <option value="">Select a type</option>
              <option value="circular">Circular</option>
              <option value="square">Square</option>
              {/* More options */}
            </select>
          </label>
          <div>
            <button className={styles.btnSubmit} onClick={handleNext} disabled={!stickerType}>Next</button>
          </div>
        </div>
      )}

      {step === 1 && (
        <div className={styles.sectionABCD}>
          {/* Size Selection */}
          <label className={styles.label_001}>
            Size:
            <select className={styles.select} value={size} onChange={(e) => setSize(e.target.value)}>
              <option value="">Select a size</option>
              {stickerType && Object.keys(stickerPrices[stickerType]).map((sizeOption) => (
                <option key={sizeOption} value={sizeOption}>{sizeOption}</option>
              ))}
            </select>
          </label>
          <div>
            <button className={styles.btnSubmit} onClick={handlePrevious}>Back</button>
            <button style={{ marginLeft: '20px' }} className={styles.btnSubmit} onClick={handleNext} disabled={!size}>Next</button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className={styles.sectionABCD}>
          {/* Quantity and Image Treatment */}
          <label className={styles.label_001}>
            Quantity:
            <input className={styles.input} type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 0)} />
          </label>
          <label className={styles.label_001}>
            Image Treatment:
            <input type="checkbox" checked={imageTreatment} onChange={(e) => setImageTreatment(e.target.checked)} />
          </label>
          <button className={styles.btnSubmit} onClick={handlePrevious}>Back</button>
          <button style={{ marginLeft: '20px' }} className={styles.btnSubmit} onClick={handleAddProduct}>Add Product</button>
        </div>
      )}

      <div className={styles.productsList_2024}>
        <h2 className={styles.productsTitle_abc}>Products Added</h2>
        {products.map((product, index) => (
          <div key={index} className={styles.itemProduct_1}>
            <span>{`${product.quantity}x ${product.stickerType} (${product.size}) - Price: ${product.price.toFixed(2)}`}</span>
            <button className={styles.btnRemove_2023} onClick={() => handleRemoveProduct(index)}>Remove</button>
          </div>
        ))}
      </div>

      <div className={styles.totalContainer}>
        <h2 className={styles.totalPrice_99}>Total Price: {products.reduce((acc, product) => acc + product.price, 0).toFixed(2)}€</h2>
      </div>

      {/* Shipping Location */}
      <div className={styles.shippingContainer}>
        <h2 className={styles.shippingTitle}>Shipping Details</h2>
        <label className={styles.label_001}>
          Shipping Location:
          <select className={styles.select} value={location} onChange={(e) => setLocation(e.target.value)}>
            {Object.keys(shippingCosts).map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </label>
      </div>

      {/* Submit the order */}
      {products.length > 0 && (
        <div className={styles.btnSubmitContainer5845}>
          <button className={styles.btnSubmit} onClick={handleSubmit}>Submit Order</button>
        </div>
      )}

    </div>
  );
}
