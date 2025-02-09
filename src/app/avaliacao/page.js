'use client';
import { useState } from "react";
import { Rating } from "@mui/material";
import styles from "./avaliacao.module.css";
import Snackbar from '@mui/material/Snackbar';

export default function SubmitReview() {
  const [review, setReview] = useState("");
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [rating, setRating] = useState(0);
  const [open, setOpen] = useState(false);

  const [errors, setErrors] = useState({
    review: "",
    email: "",
    displayName: "",
    rating: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = { review: "", email: "", displayName: "", rating: "" };
    if (!review) newErrors.review = "A review é obrigatória.";
    if (!email) newErrors.email = "O email é obrigatório.";
    if (!displayName) newErrors.displayName = "O nome a exibir é obrigatório.";
    if (!rating) newErrors.rating = "A classificação é obrigatória.";

    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {
      console.log({ review, email, displayName, rating });
    }

    setReview("");
    setEmail("");
    setDisplayName("");
    setRating(0);
    setOpen(true);
  };

  return (
    <div className={styles.reviewContainer}>
      <section className={styles.reviewSection}>
        <h1 className={styles.reviewTitle}>Deixe a sua avaliação</h1>
        <form onSubmit={handleSubmit} className={styles.reviewForm}>
          <div className={styles.clientRating}>
            <Rating
              onChange={(e, newValue) => setRating(newValue)}
              value={rating}
              precision={0.5}
            />
            {errors.rating && <p className={styles.errorText}>{errors.rating}</p>}
          </div>

          <textarea
            placeholder="Escreva a sua avaliação..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className={styles.textarea}
          />
          {errors.review && <p className={styles.errorText}>{errors.review}</p>}

          <input
            type="email"
            placeholder="O seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
          {errors.email && <p className={styles.errorText}>{errors.email}</p>}

          <input
            type="text"
            placeholder="Nome a exibir na avaliação"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className={styles.input}
          />
          {errors.displayName && <p className={styles.errorText}>{errors.displayName}</p>}

          <div className={styles.submitReviewButtonContainer}>
            <button type="submit" className={styles.submitButton}>Enviar Avaliação</button>
          </div>
        </form>

        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={() => setOpen(false)}
          message="A sua avaliação foi enviada! Estará disponível no website em breve."
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        />
      </section>
    </div>
  );
}
