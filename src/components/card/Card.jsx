import React from 'react';

const Card = ({card}) => {
  return (
    <div className="card-container">
      <div className="content">
        <h1>{card.title}</h1>
        <h3>{card.body}</h3>
      </div>
    </div>
  );
};

export default Card;