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
  instaStickers: {
    "15cm/20cm (Black/White Outside)": [7.00, 2.40, 1.50, 0.88, 0.66],
    "15cm (Colour Outside/Inside)": [9.00, 3.78, 2.64],
    "20cm (Colour Outside/Inside)": [10.50, 4.13, 2.99],
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

const stickerQuantities = {
  circular: {
    "3X3 (vinyl)": [5, 10, 20, 30, 40, 50],
    "5X5 (vinyl)": [5, 10, 20, 30, 40, 50],
    "7X7 (paper, customized)": [5, 10, 20, 30, 40, 50],
    "7X7 (vinyl, circular)": [5, 10, 20, 30, 40, 50],
    "10X10 (paper, customized)": [5, 10, 20, 30, 40, 50],
    "10X10 (vinyl, circular)": [5, 10, 20, 30, 40, 50],
  },
  square: {
    "3X3 (vinyl)": [5, 10, 20, 30, 40, 50],
    "5X5 (vinyl)": [5, 10, 20, 30, 40, 50],
    "7X7 (vinyl)": [5, 10, 20, 30, 40, 50],
    "10X10 (vinyl)": [5, 10, 20, 30, 40, 50],
    "8,5X5,5 (vinyl)": [5, 10, 20, 30, 40, 50],
    "11X9 (vinyl)": [5, 10, 20, 30, 40, 50],
  },
  glass: {
    "20x20": [1, 2, 3, 4, 5, 10],
    "40x40": [1, 2, 3, 4, 5, 10],
    "60x60": [1, 2, 3, 4, 5, 10],
    "90x90": [1, 2, 3, 4, 5, 10],
    "120x120": [1, 2, 3, 4, 5, 10],
  },
  instaStickers: {
    "15cm/20cm (Black/White Outside)": [1, 5, 10, 25, 50],
    "15cm (Colour Outside/Inside)": [1, 5, 10],
    "20cm (Colour Outside/Inside)": [1, 5, 10],
  },
  temporary_tattoos: {
    "2,5X2,5": [1, 5, 15, 25, 50],
    "5X5": [1, 5, 15, 25, 50],
    "7,5X7,5": [1, 5, 15, 25, 50],
    "10X5": [1, 5, 15, 25, 50],
    "13X6,5": [1, 5, 15, 25, 50],
    "10X10": [1, 5, 15, 25, 50],
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
  const [imageTreatmentText, setImageTreatmentText] = useState("");
  const [showImage, setShowImage] = useState(false);

  const [userEmail, setUserEmail] = useState(""); // User details
  const [instagram, setInstagram] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [deliveryNotes, setDeliveryNotes] = useState("");

  const [products, setProducts] = useState([]); // Stores the products added by the user
  const [tempProducts, setTempProducts] = useState([]); // Stores the products added by the user
  const [totalPrice, setTotalPrice] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [discountCode, setDiscountCode] = useState(""); // Discount section
  const [discountApplied, setDiscountApplied] = useState(false);
  const [discountOfferValue, setDiscountOfferValue] = useState(1); // 20 for the price of 10, etc...
  const [discountOfferMin, setDiscountOfferMin] = useState(100); // only applies discount of greater than this number
  const [discountOfferInstaValue, setDiscountOfferInstaValue] = useState(1); // 20 for the price of 10 but instaStickers only
  const [discountOfferInstaMin, setDiscountOfferInstaMin] = useState(1); // only applies discount of greater than this number
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [discountOfferPercValue, setDiscountOfferPercValue] = useState(1); // takes a % off of the price (above 10 units)
  const [discountShipping, setdiscountShipping] = useState(1); // takes a % off of the shipping price (above 2 products)
  const [discountTreatment, setdiscountTreatment] = useState(1); // takes a % off of the image treatment price

  const handleIconClick = () => {
    setShowImage(true);
  };

  const handleCloseClick = () => {
    setShowImage(false);
  };

  const calculatePrice = () => {
    const index = stickerQuantities[stickerType][size].indexOf(quantity);
    if (index === -1) return 0; // Handle case where quantity is invalid
    const basePrice = stickerPrices[stickerType][size][index];
    const treatmentCost = imageTreatment ? imageTreatmentPrices[index] : 0;
    return basePrice * quantity + treatmentCost;
  };

  const calculateTotalPrice = () => {
    const price = products.reduce((acc, product) => acc + product.price, 0);
    return price.toFixed(2);
  };

  const handleApplyDiscount = async (discountCodeTemp) => {
    const response = await fetch('/api/apifire', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        discountCodeTemp,
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      alert(errorData.message);
      return;
    }
    var activeDiscount = ""
    var isShippingDiscount = ""
    var discountPercentage = ""

    const data = await response.json();
    console.log("Response data:", data);
    data.discounts.forEach((discount) => {
      activeDiscount = discount.active;
      isShippingDiscount = discount.isShipping;
      discountPercentage = discount.percentage;
      console.log("Discount Code:", discount.code);
      console.log("Active:", discount.active);
      console.log("Discount ID:", discount.id);
      console.log("Is Common:", discount.isCommon);
      console.log("Is Shipping Discount:", discount.isShipping);
      console.log("Is Treatment Discount:", discount.isTreatment);
      console.log("Is Vinyl Discount:", discount.isVinyl);
      console.log("Minimum Amount Required:", discount.minAmount);
      console.log("Additional Amount Required:", discount.moreAmount);
      console.log("Requires More Stickers:", discount.moreStickers);
      console.log("Discount Percentage:", discount.percentage);
    });

    if (activeDiscount && isShippingDiscount) { // Shipping
      let shipping = shippingCosts[location] - shippingCosts[location] * (discountPercentage / 100)
      let tempPrice = parseFloat(calculateTotalPrice()) + shipping;
      setTotalPrice(tempPrice);
    }

    // TODO: the rest...........

    if (data.discounts && data.discounts.length > 0) {
      const discountValue = data.discounts[0];

      //setDiscountPercentage(codeValue);
      //setDiscountApplied(true);
      alert(`Discount applied: ${discountPercentage}%`);
    } else {
      alert("Invalid discount code.");
    }
  };

  const handleDiscountMode = () => {
    handleSetStep(3);
    setTempProducts(products);

    updateTotalPriceWLocation();
  }

  const updateTotalPriceWLocation = (newLocation) => {
    if (newLocation === undefined) {
      newLocation = "PORTUGAL";
      setLocation(newLocation);
    }
    let totalPriceTemp = calculateTotalPrice();
    totalPriceTemp = parseFloat(totalPriceTemp);
    totalPriceTemp += shippingCosts[newLocation];
    setTotalPrice(totalPriceTemp);
  }

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
    updateTotalPriceWLocation(newLocation);
  }

  const handleSetStep = (setTo) => {
    if (setTo !== step) {
      setStep((prevStep) => setTo);
    }
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
      imageTreatmentText,
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

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    const finalPrice = products.reduce((acc, product) => acc + product.price, 0).toFixed(2);
    const response = await fetch('/api/apiroute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        products,
        finalPrice,
        location,
        userEmail,
        instagram
      })
    });

    const result = await response.json();
    alert(result.message);

    if (response.ok) {
      // Reset all states after submission if successful
      resetForm();
      setProducts([]);
      setDiscountCode("");
      setLocation("PORTUGAL");
      setUserEmail("");
      setInstagram("");
    }
    setTimeout(() => {
      setIsSubmitting(false);
    }, 300);
  };

  return (
    <div className={styles.containerPayment123}>
      <h1 className={styles.titleXYZ}>Sticker Order Form</h1>

      <div className={styles.progressBarContainer}>
        <div className={`${styles.stepItem} ${step >= 0 ? styles.activeStep : ""}`}>
          <span className={styles.stepNumber}>1</span> Produtos
        </div>
        <div className={`${styles.stepItem} ${step >= 4 ? styles.activeStep : ""}`}>
          <span className={styles.stepNumber}>2</span> Endereço
        </div>
        <div className={`${styles.stepItem} ${step >= 5 ? styles.activeStep : ""}`}>
          <span className={styles.stepNumber}>3</span> Checkout
        </div>
      </div>

      {step === 0 && (
        <div className={styles.sectionABCD}>
          {/* Sticker Type Selection */}
          <label className={styles.label_001}>
            Tipo de Sticker
            <select className={styles.select} value={stickerType} onChange={(e) => setStickerType(e.target.value)}>
              <option value="">Selecione um tipo</option>
              <option value="circular">Circular</option>
              <option value="square">Quadrado</option>
              <option value="glass">Para vidro</option>
              <option value="instaStickers">@ do Instagram</option>
              <option value="temporary_tattoos">Tatuagem temporária</option>
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
            Tamanho <span class="material-symbols-outlined" onClick={handleIconClick}>info</span>
            <select className={styles.select} value={size} onChange={(e) => setSize(e.target.value)}>
              <option value="">Selecione um tamanho</option>
              {stickerType && Object.keys(stickerPrices[stickerType]).map((sizeOption) => (
                <option key={sizeOption} value={sizeOption}>{sizeOption}</option>
              ))}
            </select>
          </label>
          <div className={styles.navButtons182}>
            <button className={styles.btnSubmit} onClick={handlePrevious}>Back</button>
            <button style={{ marginLeft: '10px' }} className={styles.btnSubmit} onClick={handleNext} disabled={!size}>Next</button>
          </div>
        </div>
      )}

      {showImage && (
        <div className={styles.overlay5168}>
          <div className={styles.imageContainer17552}>
            <span className={styles.closeButton884656} onClick={handleCloseClick}>X</span>
            <img src="Tamanho-a-encomendar.png" alt="Size to order info" className={styles.image1456} />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className={styles.quantityAndTreatment}>
          {/* Quantity and Image Treatment */}
          <div>
            <label className={styles.label_001}>
              Quantidade <span class="material-symbols-outlined" title="Se precisar de uma quantidade não listada, envie-nos mensagem diretamente no instagram!">info</span>
              <select className={styles.select} value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value, 10))}>
                <option value="">Selecione a quantidade</option>
                {stickerQuantities && size && stickerQuantities[stickerType][size]?.map((qty) => (
                  <option key={qty} value={qty}>{qty}</option>
                ))}
              </select>
            </label>
            <div style={{ marginTop: '5px', width: 'fit-content', display: 'flex', alignItems: 'center' }}>
              <label className={styles.label_001} htmlFor="imageTreatmentCheckbox">
                Tratamento de imagem:
              </label>
              <input
                type="checkbox"
                id="imageTreatmentCheckbox"
                checked={imageTreatment}
                onChange={(e) => setImageTreatment(e.target.checked)}
                style={{ marginLeft: '4px', width: '15px', height: '15px' }}
              />
            </div>

            {imageTreatment && (
              <div style={{ marginTop: '5px', width: 'fit-content', display: 'flex', alignItems: 'center' }}>
                <label className={styles.label_001} htmlFor="imageTreatmentText">
                  Descrição do tratamento:
                </label>
                <textarea
                  value={imageTreatmentText}
                  onChange={(e) => setImageTreatmentText(e.target.value)}
                  placeholder="Descreva o tratamento que deseja"
                  style={{ width: '100%', height: '100%', resize: 'vertical', marginTop: '5px', padding: '8px' }}
                />
              </div>
            )}
          </div>
          <div className={styles.btnAddProductContainer}>
            <button className={styles.btnSubmit} onClick={handlePrevious}>Back</button>
            <button style={{ marginLeft: '20px' }} className={styles.btnSubmit} onClick={handleAddProduct}>Adicionar produto</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className={styles.shippingContainer}>
          {/* Shipping Details */}
          <h2 className={styles.shippingTitle}>Detalhes de envio</h2>
          <label className={styles.label_001}>
            Local de envio
            <select className={styles.select} value={location} onChange={(e) => handleLocationChange(e.target.value)}>
              {Object.keys(shippingCosts).map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </label>

          {/* Discount Code Area */}
          <div className={styles.discountCodeContainer} style={{ marginTop: '30px' }}>
            <h2 className={styles.shippingTitle}>Código de desconto</h2>
            <input
              type="text"
              placeholder="Código de desconto"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              disabled={discountApplied}
              className={styles.modalInput}
              style={{ width: '60%' }}
            />
            <button
              onClick={() => handleApplyDiscount(discountCode)}
              disabled={discountApplied}
              className={discountApplied ? styles.disabledButton : styles.btnSubmit}
              style={{ marginLeft: '10px' }}
            >
              {discountApplied ? "Aplicado" : "Aplicar"}
            </button>
          </div>
        </div>
      )}

      {(products.length > 0 && step <= 2) && (
        <div>
          <div className={styles.productsList_2024}>
            <h2 className={styles.productsTitle_abc}>Produtos adicionados</h2>
            {products.map((product, index) => (
              <div key={index} className={styles.itemProduct_1}>
                <span>{`${product.quantity}x ${product.stickerType} (${product.size}) - Price: ${product.price.toFixed(2)}`}</span>
                <button className={styles.btnRemove_2023} onClick={() => handleRemoveProduct(index)}>Remover</button>
              </div>
            ))}
          </div>

          <div className={styles.totalContainer}>
            <h2 className={styles.totalPrice_99}>Preço total: {products.reduce((acc, product) => acc + product.price, 0).toFixed(2)}€</h2>
          </div>
        </div>
      )}

      {(products.length > 0 && step > 2 && step < 5) && (
        <div>
          <div className={styles.productsList_2024}>
            <h2 className={styles.productsTitle_abc}>Produtos adicionados</h2>
            {tempProducts.map((product, index) => (
              <div key={index} className={styles.itemProduct_1}>
                <span>{`${product.quantity}x ${product.stickerType} (${product.size}) - Price: ${product.price.toFixed(2)}`}</span>
              </div>
            ))}
          </div>

          <div className={styles.totalContainer}>
            <h2 className={styles.totalPrice_99}>Preço total: {totalPrice}€</h2>
          </div>
        </div>
      )}

      {(products.length > 0 && step <= 2) && (
        <div className={styles.btnAddProductContainer}>
          {step > 2 && (
            <button className={styles.btnSubmit} onClick={handlePrevious}>Back</button>
          )}
          <button style={{ marginLeft: '20px' }} className={styles.btnSubmit} onClick={() => handleDiscountMode()}>Continuar</button>
        </div>
      )}

      {/* Shipping Location Nav */}
      {(step === 3 && products.length > 0) && (
        <div>
          <div className={styles.btnAddProductContainer}>
            <button className={styles.btnSubmit} onClick={() => handleSetStep(0)}>Back</button>
            <button style={{ marginLeft: '10px' }} className={styles.btnSubmit} onClick={handleNext}>Continuar</button>
          </div>
        </div>
      )}

      {/* Shipping Location */}
      {step === 4 && (
        <form className={styles.containerPayment123} onSubmit={handleNext}>
          <h2 className={styles.titleXYZ}>Delivery Information</h2>

          <div className={styles.sectionABCD}>
            <label className={styles.label_001}>Email:</label>
            <input
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
              className={styles.modalInput}
            />
          </div>

          <div className={styles.sectionABCD}>
            <label className={styles.label_001}>Instagram (optional):</label>
            <input
              type="text"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              className={styles.modalInput}
            />
          </div>

          <div className={styles.sectionABCD}>
            <label className={styles.label_001}>Endereço:</label>
            <input
              type="text"
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
              required
              className={styles.modalInput}
            />
          </div>

          <div className={styles.sectionABCD}>
            <label className={styles.label_001}>City:</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              className={styles.modalInput}
            />
          </div>

          <div className={styles.sectionABCD}>
            <label className={styles.label_001}>Postal Code:</label>
            <input
              type="text"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
              className={styles.modalInput}
            />
          </div>

          <div className={styles.sectionABCD}>
            <label className={styles.label_001}>Country:</label>
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
              className={styles.modalInput}
            />
          </div>

          <div className={styles.sectionABCD}>
            <label className={styles.label_001}>Delivery Notes (optional):</label>
            <textarea
              value={deliveryNotes}
              onChange={(e) => setDeliveryNotes(e.target.value)}
              className={styles.modalInput}
            />
          </div>

          <div className={styles.btnAddProductContainer}>
            <button className={styles.btnSubmit} onClick={handlePrevious}>Back</button>
            <button type="submit" className={styles.btnSubmit} disabled={!userEmail}>
              Submit
            </button>
          </div>
        </form>
      )}

      {/* Checkout Area */}
      {step === 5 && (
        <div className={styles.containerPayment123}>
          <h2 className={styles.titleXYZ}>Checkout</h2>

          {/* User Details Section */}
          <div className={styles.userDetailsContainer}>
            <h3 className={styles.userDetailsTitle}>Detalhes do pedido</h3>
            <p className={styles.userDetailItem}><strong>Email:</strong> {userEmail}</p>
            <p className={styles.userDetailItem}><strong>Instagram:</strong> {instagram}</p>
            <p className={styles.userDetailItem}><strong>Endereço:</strong> {deliveryAddress}</p>
            <p className={styles.userDetailItem}><strong>Cidade:</strong> {city}</p>
            <p className={styles.userDetailItem}><strong>Código Postal:</strong> {postalCode}</p>
            <p className={styles.userDetailItem}><strong>País:</strong> {country}</p>
            <p className={styles.userDetailItem}><strong>Notas de envio:</strong> {deliveryNotes}</p>
          </div>

          {/* Products List Section */}
          <h2 className={styles.titleXYZ}>Produtos</h2>
          <ul className={styles.productsList_2024}>
            {tempProducts.map((product, index) => (
              <li key={index} className={styles.itemProduct_1}>
                {product.stickerType} - {product.size} - Qty: {product.quantity} - Price: ${product.price.toFixed(2)}
              </li>
            ))}
          </ul>

          <p className={styles.totalPrice_99}>Total: ${totalPrice}</p>

          {/* Buttons Section */}
          <div className={styles.btnAddProductContainer}>
            <button className={styles.btnSubmit} onClick={handlePrevious}>Back</button>
            <button onClick={handleFinalSubmit} className={styles.btnSubmit} disabled={isSubmitting}>
              {isSubmitting ? 'A enviar...' : 'Submeter pedido'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}