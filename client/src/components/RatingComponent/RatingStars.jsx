import React from "react";
import "./RatingStars.css"; // Import your CSS file for styling

const RatingStars = ({ rating, total_ratings }) => {
  const percentage = (rating / 5) * 100;
  const starStyle = { width: `${percentage}%` };

  return (
    <div className="rating-container">
      <div className="rating-stars">
        <span className="filled-stars" style={starStyle}>
          ★★★★★
        </span>
        <span className="empty-stars">★★★★★</span>
      </div>
      {/* <span className="rating-text">
        {rating.toFixed(1)} out of 5 stars ({total_ratings} ratings)
      </span> */}
    </div>
  );
};

export default RatingStars;
