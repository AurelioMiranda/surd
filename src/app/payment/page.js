"use client";
import { useState } from "react";
import styles from './Payment.module.css';
import ImageUpload from './ImageUpload';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

const shippingCosts = {
  "PORTUGAL": 0.90,
  "EUROPE (EXCETO PT)": 1.45,
  "RESTO DO MUNDO": 1.55
};

const locationTime = {
  "PORTUGAL": "10 a 15 dias úteis",
  "EUROPE (EXCETO PT)": "12 a 17 dias úteis",
  "RESTO DO MUNDO": "14 a 19 dias úteis"
};

const stickerPrices = {
  circular: {
    "3X3": [2.55, 1.47, 0.84, 0.62, 0.52, 0.44],
    "5X5": [3.83, 2.12, 1.16, 0.84, 0.68, 0.57],
    "7X7": [4.90, 2.65, 1.43, 1.02, 0.81, 0.68],
    "10X10": [5.90, 3.15, 1.62, 1.18, 0.94, 0.78],
  },
  custom: {
    "7X7": [3.98, 2.44, 1.70, 1.36, 1.20, 0.97],
    "10X10": [4.49, 2.78, 2.04, 1.70, 1.51, 1.38],
  },
  square: {
    "3X3": [2.09, 1.24, 0.72, 0.55, 0.46, 0.40],
    "5X5": [3.37, 1.89, 1.04, 0.76, 0.62, 0.53],
    "7X7": [5.10, 2.75, 1.48, 1.05, 0.86, 0.70],
    "10X10": [6.70, 3.55, 1.88, 1.32, 1.06, 0.86],
    "8,5X5,5": [3.97, 2.19, 1.19, 0.86, 0.70, 0.59],
    "11X9": [5.45, 2.93, 1.56, 1.32, 1.04, 0.86],
  },
  glass: {
    "20x20": [15.50, 12.50, 11.17, 10.25, 8.98, 4.74],
    "40x40": [19.50, 16.00, 13.17, 11.75, 10.50, 8.00],
    "60x60": [25.50, 21.00, 18.17, 15.75, 13.50, 10.00],
    "90x90": [31.50, 27.00, 24.17, 20.50, 19.50, 14.00],
    "120x120": [41.50, 35.00, 30.17, 25.75, 21.50, 16.00],
  },
  instaStickers: {
    "15cm/20cm (Preto/Branco Exterior)": [7.00, 2.40, 1.50, 0.88, 0.66],
    "15cm (Cores Exterior/Interior)": [9.00, 3.78, 2.64],
    "20cm (Cores Exterior/Interior)": [10.50, 4.13, 2.99],
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
    "3X3": [5, 10, 20, 30, 40, 50],
    "5X5": [5, 10, 20, 30, 40, 50],
    "7X7": [5, 10, 20, 30, 40, 50],
    "10X10": [5, 10, 20, 30, 40, 50],
  },
  custom: {
    "7X7": [5, 10, 20, 30, 40, 50],
    "10X10": [5, 10, 20, 30, 40, 50],
  },
  square: {
    "3X3": [5, 10, 20, 30, 40, 50],
    "5X5": [5, 10, 20, 30, 40, 50],
    "7X7": [5, 10, 20, 30, 40, 50],
    "10X10": [5, 10, 20, 30, 40, 50],
    "8,5X5,5": [5, 10, 20, 30, 40, 50],
    "11X9": [5, 10, 20, 30, 40, 50],
  },
  glass: {
    "20x20": [1, 2, 3, 4, 5, 10],
    "40x40": [1, 2, 3, 4, 5, 10],
    "60x60": [1, 2, 3, 4, 5, 10],
    "90x90": [1, 2, 3, 4, 5, 10],
    "120x120": [1, 2, 3, 4, 5, 10],
  },
  instaStickers: {
    "15cm/20cm (Preto/Branco Exterior)": [1, 5, 10, 25, 50],
    "15cm (Cores Exterior/Interior)": [1, 5, 10],
    "20cm (Cores Exterior/Interior)": [1, 5, 10],
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

const stickerName = {
  circular: "Sticker Circular",
  custom: "Sticker Customizado",
  square: "Sticker Quadrangular/Retangular",
  glass: "Sticker para vidros",
  instaStickers: "Sticker com @ do Instagram",
  temporary_tattoos: "Tatuagem temporária"
};

const stickerNameSpecification = {
  circular: {
    "3X3": "vinil",
    "5X5": "vinil",
    "7X7": "vinil",
    "10X10": "vinil",
  },
  custom: {
    "7X7": "papel",
    "10X10": "papel",
  },
  square: {
    "3X3": "vinil",
    "5X5": "vinil",
    "7X7": "vinil",
    "10X10": "vinil",
    "8,5X5,5": "vinil",
    "11X9": "vinil",
  },
  glass: {
    "20x20": "vinil",
    "40x40": "vinil",
    "60x60": "vinil",
    "90x90": "vinil",
    "120x120": "vinil",
  },
  instaStickers: {
    "15cm/20cm (Preto/Branco Exterior)": "(Preto/Branco Exterior)",
    "15cm (Cores Exterior/Interior)": "(Cores Exterior/Interior)",
    "20cm (Cores Exterior/Interior)": "(Cores Exterior/Interior)",
  },
  temporary_tattoos: {
    "2,5X2,5": "",
    "5X5": "",
    "7,5X7,5": "",
    "10X5": "",
    "13X6,5": "",
    "10X10": "",
  }
};

const fontNames = {
  "15cm/20cm (Preto/Branco Exterior)": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  "15cm (Cores Exterior/Interior)": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  "20cm (Cores Exterior/Interior)": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  "qtt1": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
};

const imageTreatmentPrices = [1.50, 3.00, 4.00, 5.00, 5.50, 6.00];

export default function Payment() {

  const [step, setStep] = useState(0);  // Controls the current step in the form
  const [stickerType, setStickerType] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(5);
  const [location, setLocation] = useState("PORTUGAL");
  const [currentLocationTime, setCurrentLocationTime] = useState("PORTUGAL");
  const [imageTreatment, setImageTreatment] = useState(false);
  const [imageTreatmentText, setImageTreatmentText] = useState("");
  const [showImage, setShowImage] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [chosenFont, setChosenFont] = useState("");
  const [instagramText, setInstagramText] = useState("");
  const [showFonts, setShowFonts] = useState(false);

  const [userEmail, setUserEmail] = useState(""); // User details
  const [instagram, setInstagram] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [deliveryNotes, setDeliveryNotes] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [products, setProducts] = useState([]); // Stores the products added by the user
  const [tempProducts, setTempProducts] = useState([]); // Stores the products added by the user
  const [totalPrice, setTotalPrice] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [discountCode, setDiscountCode] = useState(""); // Discount section
  const [affiliateCode, setAffiliateCode] = useState(0);
  const [usedAffiliateCode, setUsedAffiliateCode] = useState(false);
  const [discountApplied, setDiscountApplied] = useState(false);
  const [treatmentDiscountApplied, setTreatmentDiscount] = useState(false);
  const [quantityDiscountApplied, setQuantityDiscount] = useState(false);

  const handleIconClick = () => {
    setShowImage(true);
  };

  const handleCloseClick = () => {
    setShowImage(false);
  };

  const handleFontClick = () => {
    setShowFonts(true);
  };

  const handleFontCloseClick = () => {
    setShowFonts(false);
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

  const calculateTempTotalPrice = () => {
    let price = tempProducts.reduce((acc, product) => acc + product.price, 0);
    price += shippingCosts[location];
    return price.toFixed(2);
  };

  const calculateTempTotalPriceNoShipping = () => {
    let price = tempProducts.reduce((acc, product) => acc + product.price, 0);
    return price.toFixed(2);
  };

  const applyDiscountToProducts = (discountPercentage) => {
    const updatedProducts = tempProducts.map(product => {
      const discountedPrice = product.price - (discountPercentage / 100) * product.price;
      return {
        ...product,
        price: discountedPrice,
      };
    });

    setTempProducts(updatedProducts);

    let tempPrice = updatedProducts.reduce((total, product) => total + parseFloat(product.price), 0);
    if (updatedProducts.length < 2) {
      tempPrice += shippingCosts[location];
    }
    setTotalPrice(tempPrice);

    console.log("Updated Products with Discounted Prices:", updatedProducts);
    console.log("New Total Price:", tempPrice.toFixed(2));
  };

  const handleApplyDiscount = async (discountCodeTemp) => {

    const response = await fetch('/api/apidiscounts', {
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

    const discountData = await response.json();
    const discountDocument = discountData.discount;
    console.log("discountDocument" + discountDocument)
    console.log("discountData" + discountData.percentage)

    if (discountDocument.active && !usedAffiliateCode) {
      const discountPercentage = discountDocument.percentage || 0;
      setAffiliateCode(discountPercentage);
      setUsedAffiliateCode(true);

      applyDiscountToProducts(discountPercentage);

      alert(`Desconto aplicado!`);
    } else if (discountDocument.active && usedAffiliateCode) {
      alert(`Um desconto já foi aplicado.`);
    } else if (!discountDocument.active && !usedAffiliateCode) {
      alert("Código de desconto expirado.");
    } else {
      alert("Código inválido.");
    }
  };

  const getTreatmentIndex = (min) => {
    let idx = 0;
    if (min <= 10) {
      idx = 1;
    } else if (min <= 20) {
      idx = 2
    } else if (min <= 30) {
      idx = 3
    } else if (min <= 40) {
      idx = 4
    } else if (min <= 50) {
      idx = 5
    }
    return idx
  }

  const handleDiscountMode = () => {
    handleSetStep(3);
    setTempProducts(JSON.parse(JSON.stringify(products)));
    // setAffiliateCode(0)
    // setUsedAffiliateCode(false)

    updateTotalPriceWLocation();
  }

  const updateTotalPriceWLocation = (newLocation) => {
    if (newLocation === undefined) {
      newLocation = "PORTUGAL";
      setLocation(newLocation);
    }
    let totalPriceTemp = calculateTotalPrice();
    totalPriceTemp = parseFloat(totalPriceTemp);
    if (products.length < 2) {
      totalPriceTemp += shippingCosts[newLocation];
    }
    totalPriceTemp -= (affiliateCode / 100) * totalPriceTemp;
    setTotalPrice(totalPriceTemp);
    console.log(totalPrice)
  }

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
    updateTotalPriceWLocation(newLocation);
    setCurrentLocationTime(newLocation);
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
    console.log("deliveryNotes" + deliveryNotes)
    setStep((prevStep) => prevStep - 1); // Go back to the previous step
  };

  const handleAddProduct = () => {
    if (imageTreatment && !imageTreatmentText) {
      return
    }
    if (!imageFile && !chosenFont) {
      return
    }
    if (chosenFont && !instagramText) {
      return
    }

    const price = calculatePrice();
    const newProduct = {
      stickerType,
      size,
      quantity,
      imageTreatment,
      imageTreatmentText,
      imageFile,
      chosenFont,
      instagramText,
      price
    };
    console.log(newProduct);

    setProducts([...products, newProduct]); // Add the product to the list
    resetForm();
    setStep(0);  // Reset to first step for new product
  };

  const resetForm = () => {
    setStickerType("");
    setSize("");
    setQuantity(5);
    setImageTreatment(false);
    setImageTreatmentText("");
    setImageFile(null);
    setChosenFont("");
    setInstagramText("");
  };

  const handleRemoveProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);  // Remove product from the list
  };

  const toggleImageModal = (newImage) => {
    setSelectedImage(newImage);
    setImageModalOpen(!isImageModalOpen);
  };

  const getImageUrl = (file) => {
    return file ? URL.createObjectURL(file) : '';
  };

  const getTreatmentText = (hasTreatment) => {
    if (hasTreatment) {
      return "(Com tratamento)"
    }
    return "";
  };

  function generateUniqueString(length = 10) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let result = '';
    const charactersLength = characters.length;

    for (let
      i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;

  }

  const uploadProductImages = async (orderProducts) => {
    return await Promise.all(
      orderProducts.map(async (product) => {
        if (product.imageFile) {
          const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
          const uploadUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

          const formData = new FormData();
          formData.append('file', product.imageFile);
          formData.append('upload_preset', 'designs');

          const response = await fetch(uploadUrl, {
            method: 'POST',
            body: formData
          });

          const result = await response.json();
          console.log(result);

          return {
            ...product,
            imageFile: result.secure_url // Replace imageFile with the uploaded URL
          };
        } else {
          return product;
        }
      })
    );
  };


  async function saveDesignImages(orderProducts) {
    try {
      const updatedProducts = await uploadProductImages(orderProducts);
      return updatedProducts;
    } catch (error) {
      console.error("Error processing order: ", error);
      return [];
    }
  }


  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    const finalPrice = products.reduce((acc, product) => acc + product.price, 0).toFixed(2);

    const orderId = generateUniqueString();
    const orderReadyProducts = await saveDesignImages(products);

    const response = await fetch('/api/apiroute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        orderId,
        orderReadyProducts,
        finalPrice,
        location,
        userEmail,
        instagram,
        deliveryAddress,
        city,
        postalCode,
        country,
        phoneNumber,
        deliveryNotes
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
      setDeliveryAddress("");
      setCity("");
      setPostalCode("");
      setCountry("");
      setCountry("");
      setDeliveryNotes("");
      setPhoneNumber("");
      setStep(0);
    }
    setTimeout(() => {
      setIsSubmitting(false);
    }, 300);
  };

  return (
    <div className={styles.containerPayment123}>
      <h1 className={styles.titleXYZ}>Carrinho</h1>

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
        <div className={styles.sectionEfrgt5}>
          {/* Sticker Type Selection */}
          <label className={styles.label_001}>
            Produto
            <select className={styles.select} value={stickerType} onChange={(e) => setStickerType(e.target.value)}>
              <option value="">Selecione um tipo</option>
              <option value="circular">Sticker Circular</option>
              <option value="custom">Sticker Customizado</option>
              <option value="square">Sticker Quadrangular/Retangular</option>
              <option value="glass">Sticker para vidros</option>
              <option value="instaStickers">Sticker com @ do Instagram</option>
              <option value="temporary_tattoos">Tatuagem temporária</option>
            </select>
          </label>
          <div style={{ marginTop: '10px' }}>
            <button className={styles.btnSubmit} onClick={handleNext} disabled={!stickerType}>Selecionar</button>
          </div>
        </div>
      )}

      {step === 1 && (
        <div className={styles.sectionEfrgt5}>
          {/* Size Selection */}
          <div>
            <label className={styles.label_001}>
              Tamanho <span class="material-symbols-outlined" onClick={handleIconClick}>info</span>
              <select className={styles.select} value={size} onChange={(e) => setSize(e.target.value)}>
                <option value="">Selecione um tamanho</option>
                {stickerType && Object.keys(stickerPrices[stickerType]).map((sizeOption) => (
                  <option key={sizeOption} value={sizeOption}>{sizeOption}</option>
                ))}
              </select>
            </label>
            {!(stickerType == 'instaStickers') &&
              <div style={{ marginTop: '8px' }}>
                <label className={styles.label_001}>
                  Design
                </label>
                <ImageUpload onUpload={setImageFile} />
              </div>
            }
            {(stickerType == 'instaStickers') &&
              <div>
                <label className={styles.label_001}>
                  Quantidade {/*<span class="material-symbols-outlined" title="Se precisar de uma quantidade não listada, envie-nos mensagem diretamente no instagram!">info</span>*/}
                  <select className={styles.select} value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value, 10))}>
                    <option value="">Selecione a quantidade</option>
                    {stickerQuantities && size && stickerQuantities[stickerType][size]?.map((qty) => (
                      <option key={qty} value={qty}>{qty}</option>
                    ))}
                  </select>
                </label>
              </div>
            }
          </div>
          <div style={{ marginTop: '10px' }} className={styles.navButtons182}>
            <button className={styles.btnSubmit} onClick={handlePrevious}>Voltar</button>
            <button style={{ marginLeft: '10px' }} className={styles.btnSubmit} onClick={handleNext} disabled={!size || (!imageFile && !(stickerType == 'instaStickers'))}>Selecionar</button>
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
            {!(stickerType == 'instaStickers') &&
              <label className={styles.label_001}>
                Quantidade {/*<span class="material-symbols-outlined" title="Se precisar de uma quantidade não listada, envie-nos mensagem diretamente no instagram!">info</span>*/}
                <select className={styles.select} value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value, 10))}>
                  <option value="">Selecione a quantidade</option>
                  {stickerQuantities && size && stickerQuantities[stickerType][size]?.map((qty) => (
                    <option key={qty} value={qty}>{qty}</option>
                  ))}
                </select>
              </label>
            }
            {!(stickerType == 'instaStickers') &&
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
            }

            {(stickerType == 'instaStickers') &&
              <div>
                <label className={styles.label_001}>
                  Tipo de fonte <span class="material-symbols-outlined" onClick={handleFontClick}>info</span>
                  <select className={styles.select} value={chosenFont} onChange={(e) => setChosenFont(e.target.value)} disabled={!size}>
                    <option value="">Selecione uma fonte</option>
                    {((quantity == 1) && size != "15cm/20cm (Preto/Branco Exterior)") &&
                      fontNames["qtt1"].map((sizeOption) => (
                        <option key={sizeOption} value={sizeOption}>
                          {sizeOption}
                        </option>
                      ))
                    }
                    {((quantity > 1) || ((quantity == 1) && size == "15cm/20cm (Preto/Branco Exterior)"))
                      && size == "15cm (Cores Exterior/Interior)" &&
                      fontNames["15cm (Cores Exterior/Interior)"].map((sizeOption) => (
                        <option key={sizeOption} value={sizeOption}>
                          {sizeOption}
                        </option>
                      ))
                    }
                    {((quantity > 1) || ((quantity == 1) && size == "15cm/20cm (Preto/Branco Exterior)"))
                      && size == "20cm (Cores Exterior/Interior)" &&
                      fontNames["20cm (Cores Exterior/Interior)"].map((sizeOption) => (
                        <option key={sizeOption} value={sizeOption}>
                          {sizeOption}
                        </option>
                      ))
                    }
                    {((quantity > 1) || ((quantity == 1) && size == "15cm/20cm (Preto/Branco Exterior)")) &&
                      fontNames["15cm/20cm (Preto/Branco Exterior)"].map((sizeOption) => (
                        <option key={sizeOption} value={sizeOption}>
                          {sizeOption}
                        </option>
                      ))
                    }
                  </select>
                </label>
                <div className={styles.fontGuide} onClick={handleFontClick}>Guia de fontes</div>
                <label className={styles.label_001}>
                  Texto do sticker {/*<span class="material-symbols-outlined" onClick={handleFontClick}>info</span>*/}
                  <div className={styles.sectionEfrgt5}>
                    <input
                      type="text"
                      value={instagramText}
                      onChange={(e) => setInstagramText(e.target.value)}
                      required
                      className={styles.modalInput}
                      disabled={!size}
                    />
                  </div>
                </label>
              </div>
            }

            {showFonts && (
              <div>
                {((quantity == 1) && size != "15cm/20cm (Preto/Branco Exterior)") &&
                  <div className={styles.overlay5168}>
                    <div className={styles.imageContainer17552}>
                      <span className={styles.closeButton884656} onClick={handleFontCloseClick}>X</span>
                      <img src="InstaHandleColorJustOne.jpeg" alt="Font to choose" className={styles.image1456} />
                    </div>
                  </div>
                }
                {((quantity > 1) || ((quantity == 1) && size == "15cm/20cm (Preto/Branco Exterior)")) &&
                  <div className={styles.overlay5168}>
                    {size == "15cm/20cm (Preto/Branco Exterior)" &&
                      <div className={styles.imageContainer17552}>
                        <span className={styles.closeButton884656} onClick={handleFontCloseClick}>X</span>
                        <img src="InstaHandleBandWAllQuantities.jpeg" alt="Font to choose" className={styles.image1456} />
                      </div>
                    }
                    {size != "15cm/20cm (Preto/Branco Exterior)" &&
                      <div className={styles.imageContainer17552}>
                        <span className={styles.closeButton884656} onClick={handleFontCloseClick}>X</span>
                        <img src="InstaHandleColorAllQuantities.jpeg" alt="Font to choose" className={styles.image1456} />
                      </div>
                    }
                  </div>
                }
              </div>
            )}

            {imageTreatment && (
              <div style={{ marginTop: '5px', width: 'fit-content', display: 'flex', alignItems: 'center' }}>
                <label className={styles.label_001} htmlFor="imageTreatmentText">
                  Descrição do tratamento:
                </label>
                <textarea
                  value={imageTreatmentText}
                  onChange={(e) => setImageTreatmentText(e.target.value)}
                  placeholder="Especifique todos os tratamentos que deseja"
                  style={{ width: '100%', height: '100%', resize: 'vertical', marginTop: '5px', padding: '8px' }}
                />
              </div>
            )}
          </div>
          <div className={styles.btnAddProductContainer}>
            <button className={styles.btnSubmit} onClick={handlePrevious}>Voltar</button>
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
            <p style={{ fontSize: '14px', marginLeft: '5px', marginTop: '5px' }}>Tempo de entrega: {locationTime[currentLocationTime]}</p>
          </label>
          <span>
            {products.length > 1 && (
              <span className={styles.offerMessage}>
                Oferta de portes: {products.length} produtos no carrinho!
              </span>
            )}
          </span>

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
            <div className={styles.productAlignment}>
              {products.map((product, index) => (
                <div key={index} className={styles.itemProduct_1}>
                  <span>
                    {`${stickerName[product.stickerType]} | ${product.quantity}x | 
                    ${product.size} ${getTreatmentText(product.imageTreatment)} - ${product.price.toFixed(2)}€`}
                  </span>

                  <div className={styles.itemProduct_2}>
                    {!(product.stickerType == 'instaStickers') &&
                      <button className={styles.btnShowImage} onClick={() => toggleImageModal(product.imageFile)}>
                        Mostrar
                      </button>
                    }

                    <button className={styles.btnRemove_2023} onClick={() => handleRemoveProduct(index)}>
                      Remover
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {isImageModalOpen && selectedImage && (
              <div className={styles.imageModalOverlay} onClick={() => setImageModalOpen(false)}>
                <div className={styles.imageModalContent} onClick={(e) => e.stopPropagation()}>
                  <img src={getImageUrl(selectedImage)} alt="Preview" width="400" />
                  <button className={styles.btnCloseModal} onClick={() => setImageModalOpen(false)}>
                    X
                  </button>
                </div>
              </div>
            )}
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
                <span>
                  {`${stickerName[product.stickerType]} | ${product.quantity}x | 
                  ${product.size} ${getTreatmentText(product.imageTreatment)} - ${product.price.toFixed(2)}€`}
                </span>
              </div>
            ))}
          </div>

          <div className={styles.totalContainer}>
            <h2 className={styles.totalPrice_99}>Preço total: {totalPrice.toFixed(2)}€</h2>
          </div>
        </div>
      )}

      {(products.length > 0 && step <= 2) && (
        <div className={styles.btnAddProductContainer}>
          {step > 2 && (
            <button className={styles.btnSubmit} onClick={handlePrevious}>Voltar</button>
          )}
          <button style={{ marginLeft: '20px' }} className={styles.btnSubmit} onClick={() => handleDiscountMode()}>Continuar</button>
        </div>
      )}

      {/* Shipping Location Nav */}
      {(step === 3 && products.length > 0) && (
        <div>
          <div className={styles.btnAddProductContainer}>
            {!usedAffiliateCode &&
              <button className={styles.btnSubmit} onClick={() => handleSetStep(0)}>Voltar</button>
            }
            <button style={{ marginLeft: '10px' }} className={styles.btnSubmit} onClick={handleNext}>Continuar</button>
          </div>
        </div>
      )}

      {/* User details */}
      {step === 4 && (
        <form className={styles.containerPayment123} onSubmit={handleNext}>
          <h2 className={styles.titleXYZ}>Informação de envio</h2>

          <div className={styles.sectionEfrgt5}>
            <label className={styles.label_001}>Endereço de correio eletrónico*</label>
            <input
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
              className={styles.modalInput}
            />
          </div>

          <div className={styles.sectionEfrgt5}>
            <label className={styles.label_001}>Nome e Apelido*</label>
            <input
              type="text"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              required
              className={styles.modalInput}
            />
          </div>

          <div className={styles.sectionEfrgt5}>
            <label className={styles.label_001}>Morada (Avenida/Rua, Porta, Piso)*</label>
            <input
              type="text"
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
              required
              className={styles.modalInput}
            />
          </div>

          <div className={styles.sectionEfrgt5}>
            <label className={styles.label_001}>Localidade e distrito*</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              className={styles.modalInput}
            />
          </div>

          <div className={styles.sectionEfrgt5}>
            <label className={styles.label_001}>País*</label>
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
              className={styles.modalInput}
            />
          </div>

          <div className={styles.sectionEfrgt5}>
            <label className={styles.label_001}>Código Postal*</label>
            <input
              type="text"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
              className={styles.modalInput}
            />
          </div>

          <div className={styles.sectionEfrgt5}>
            <label className={styles.label_001}>Telefone/telemóvel*</label>
            <PhoneInput
              international
              defaultCountry="PT"
              value={phoneNumber}
              onChange={setPhoneNumber}
              required
              className={styles.modalInput}
            />
          </div>

          <div className={styles.sectionEfrgt5}>
            <label className={styles.label_001}>Notas de encomenda (opcional)</label>
            <textarea
              value={deliveryNotes}
              onChange={(e) => setDeliveryNotes(e.target.value)}
              className={styles.modalInput}
            />
          </div>

          <div className={styles.btnAddProductContainer}>
            <button className={styles.btnSubmit} onClick={handlePrevious}>Voltar</button>
            <button
              type="submit"
              className={styles.btnSubmit}
              disabled={!userEmail || !instagram || !deliveryAddress || !city || !country || !postalCode || !phoneNumber}>
              Submeter
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
            <h3 className={styles.userDetailsTitle}>Informação de envio</h3>
            <p className={styles.userDetailItem}><strong>Email:</strong> {userEmail}</p>
            <p className={styles.userDetailItem}><strong>Instagram:</strong> {instagram}</p>
            <p className={styles.userDetailItem}><strong>Endereço:</strong> {deliveryAddress}</p>
            <p className={styles.userDetailItem}><strong>Cidade:</strong> {city}</p>
            <p className={styles.userDetailItem}><strong>Código Postal:</strong> {postalCode}</p>
            <p className={styles.userDetailItem}><strong>País:</strong> {country}</p>
            <p className={styles.userDetailItem}><strong>Telefone/telemóvel:</strong> {phoneNumber}</p>
            <p className={styles.userDetailItem}><strong>Notas de envio:</strong> {deliveryNotes}</p>

            {/* Products List Section */}
            <h2 className={styles.titleXYZ}>Produtos</h2>
            <ul className={styles.productsList_2024}>
              {tempProducts.map((product, index) => (
                <li key={index} className={styles.itemProduct_1}>
                  {`${stickerName[product.stickerType]} | ${product.quantity}x | 
                ${product.size} ${getTreatmentText(product.imageTreatment)} - ${product.price.toFixed(2)}€`}
                </li>
              ))}
            </ul>

            <p
              className={`${styles.totalPrice_99} ${totalPrice !== products.reduce((acc, product) => acc + product.price, 0) + shippingCosts[location] ? styles.strikethrough : ""}`}
              style={{
                color: totalPrice !== products.reduce((acc, product) => acc + product.price, 0) + shippingCosts[location] ? 'red' : 'inherit',
                fontSize: totalPrice !== products.reduce((acc, product) => acc + product.price, 0) + shippingCosts[location] ? '0.9em' : 'inherit',
                display: totalPrice < products.reduce((acc, product) => acc + product.price, 0) + shippingCosts[location] ? 'block' : 'none',
              }}
            >
              Total: {(products.reduce((acc, product) => acc + product.price, 0) + shippingCosts[location]).toFixed(2)}€
            </p>
            <p className={styles.totalPrice_99}>Total: {totalPrice.toFixed(2)}€</p>
          </div>


          {/* Buttons Section */}
          <div className={styles.btnAddProductContainer}>
            <button className={styles.btnSubmit} onClick={handlePrevious}>Voltar</button>
            <button onClick={handleFinalSubmit} className={styles.btnSubmit} disabled={isSubmitting}>
              {isSubmitting ? 'A enviar...' : 'Submeter pedido'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}