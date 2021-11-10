import React, { VFC } from 'react';
import './.Card.css';

type CardDetail = {
  src: any;
  title: string;
  description: string;
  price: number;
};

const Card: VFC = () => {
  const cardDetail: CardDetail = {
    src: ,
  };

  return (
    <div className="card">
      <img src={src} alt="" />
      <div className="card__info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
};

export default Card;
