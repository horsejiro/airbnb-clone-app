import React, { VFC } from 'react';
import './Card.css';

export type CardDetails = {
  id?: number;
  src: string;
  title: string;
  description: string;
};

type Props = {
  cardDetails: CardDetails[];
};

const Card: VFC<Props> = (props) => {
  const { cardDetails } = props;

  return (
    <>
      {cardDetails.map((cardDetail) => (
        <div className="card">
          <img src={cardDetail.src} alt="" />
          <div className="card__info">
            <h2>{cardDetail.title}</h2>
            <h4>{cardDetail.description}</h4>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
