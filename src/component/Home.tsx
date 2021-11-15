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

  const homeCardDetail: CardDetails[] = [
    {
      id: 1,
      src: 'https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg',
      title: '3 Bedroom Flat in Bournemouth',
      description:
        'Superhost with a stunning view of the beachside in Sunny Bournemouth',
      price: '13000/日',
    },
    {
      id: 2,
      src: 'https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg',
      title: 'Penthouse in London',
      description:
        'Enjoy the amazing sights of London with this stunning penthouse',
      price: '35000/日',
    },
    {
      id: 3,
      src: 'https://media.nomadicmatt.com/2018/apartment.jpg',
      title: '1 Bedroom apartment',
      description:
        'Superhost with great amenities and a fabolous shopping complex nearby',
      price: '7000/日',
    },
  ];

  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card cardDetails={cardDetail} />
      </div>
      <div className="home__section">
        <Card cardDetails={homeCardDetail} />
      </div>
    </div>
  );
};

export default Home;
