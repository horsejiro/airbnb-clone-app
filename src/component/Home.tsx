import React, { VFC } from 'react';
import './Home.css';
import Banner from './Banner';
import Card, { CardDetails } from './Card';

const Home: VFC = () => {
  const cardDetail: CardDetails[] = [
    {
      id: 1,
      src: 'https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720',
      title: 'Online Experiences',
      description:
        'Unique activities we can do together, led by a world of hosts.',
    },
    {
      id: 2,
      src: 'https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720',
      title: 'Unique stays',
      description: 'Spaces that are more than just a place to sleep.',
    },
    {
      id: 3,
      src: 'https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720',
      title: 'Entire homes',
      description:
        'Comfortable private places, with room for friends or family.',
    },
  ];

  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card cardDetails={cardDetail} />
      </div>
    </div>
  );
};

export default Home;
