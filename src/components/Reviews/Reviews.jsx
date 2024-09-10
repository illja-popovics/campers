import React from 'react';


const Reviews = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return <p>No reviews available for this camper.</p>;
  }

  return (
    <div className={styles.reviews}>
      <h3>Customer Reviews</h3>
      {reviews.map((review, index) => (
        <div key={index} className={styles.review}>
          <h4>{review.reviewer_name}</h4>
          <div className={styles.rating}>
            <span>{'★'.repeat(review.reviewer_rating)}</span>
            <span>{'☆'.repeat(5 - review.reviewer_rating)}</span>
          </div>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;