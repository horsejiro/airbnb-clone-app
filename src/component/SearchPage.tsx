import React, { VFC } from 'react';
import './SearchPage.css';
import { Button } from '@material-ui/core';
import SearchResult, { SearchResultDetails } from './SearchResult';

const SearchPage: VFC = () => {
  const searchResultDetail: SearchResultDetails[] = [
    {
      id: 1,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU',
      location: 'Private room in center of London',
      title: 'Stay at this spacious Edwardian House',
      description:
        '1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine',
      star: 4.73,
      price: '£30 / night',
      total: '£117 total',
    },
    {
      id: 2,
      image:
        'https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg',
      location: 'Private room in center of London',
      title: 'London Studio Apartments',
      description:
        '4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine',
      star: 3.8,
      price: '£35 / night',
      total: '£207 total',
    },
    {
      id: 3,
      image:
        'https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI',
      location: 'Private room in center of London',
      title: '30 mins to Oxford Street, Excel London',
      description:
        '1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine',
      star: 4.1,
      price: '£55 / night',
      total: '£320 total',
    },
    {
      id: 4,
      image:
        'https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg',
      location: 'Private room in center of London',
      title: 'Spacious Peaceful Modern Bedroom',
      description:
        '3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning',
      star: 5.0,
      price: '£60 / night',
      total: '£450 total',
    },
    {
      id: 5,
      image:
        'https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937',
      location: 'Private room in center of London',
      title: 'The Blue Room In London',
      description:
        '2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine',
      star: 4.23,
      price: '£65 / night',
      total: '£480 total',
    },
    {
      id: 6,
      image:
        'https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp',
      location: 'Private room in center of London',
      title: '5 Star Luxury Apartment',
      description:
        '3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine',
      star: 3.85,
      price: '£90 / night',
      total: '£650 total',
    },
  ];

  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <h1>近場のステイ</h1>
        <Button variant="outlined">キャンセルしますか？</Button>
        <Button variant="outlined">場所の種類</Button>
        <Button variant="outlined">価格</Button>
        <Button variant="outlined">部屋とベッド</Button>
        <Button variant="outlined">絞る</Button>
      </div>
      <SearchResult searchResultDetails={searchResultDetail} />
    </div>
  );
};

export default SearchPage;
