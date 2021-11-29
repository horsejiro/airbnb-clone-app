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
  ];

  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>1</p>
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
