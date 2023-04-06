import React from "react";

const Card = ({ title, selftext_html, url, score }) => {
  return (
    <div className="card-back">
      <div className="card-container">
        <div className="card-content">
          <div className="card-title">
            <h3>{title}</h3>
          </div>
          <div className="card-body">
            <p className="des">{selftext_html}</p>
          </div>
          <div className="card-body">
            <a className="des" href={url}>{url}</a>
          </div>
          <div className="btn">
          <button>Score: {score} </button>
        </div>
          </div>
        </div>
      </div>
  );
};

export default Card;