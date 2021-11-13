import React, { Props, VFC } from 'react';
import './.Card.css';

export type CardDetails = {
  src: string;
  title: string;
  descripiton: string;
};

type Props = {
  cardDetails: CardDetails[];
};
const Card: VFC<Props> = (props) => {
  const { cardDetails } = props;

  return (
    <>
      <div className="card">
        {}
        <img src={src} alt="" />
        <div className="card__info">
          <h2>{title}</h2>
          <h4>{descriotion}</h4>
        </div>
      </div>
    </>
  );
};

export default Card;
