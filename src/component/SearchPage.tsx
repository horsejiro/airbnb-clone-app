import React, { VFC } from 'react';
import './SearchPage.css';
import { Button } from '@material-ui/core';
import SearchResult from './SearchResult';

const SearchPage: VFC = () => (
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
    <SearchResult searchResultDetails={[]} />
  </div>
);

export default SearchPage;
