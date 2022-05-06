/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Button } from '@material-ui/core';
import React, { VFC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Banner.css';
import Search from './Search';

const Banner: VFC = () => {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const toSearch = () => {
    history.push(');
  };

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          variant="outlined"
          className="bunner__searchButton"
        >
          {showSearch ? '隠す' : '日付を探す'}
        </Button>
      </div>
      <div className="banner__info">
        <h1>次はどこへ行こう？より柔軟な検索で、広がる旅の可能性。</h1>
        <h5>さぁ探しにいこう</h5>
        <Button onClick={toSearch} variant="outlined">
          柔軟な検索を試してみる
        </Button>
      </div>
    </div>
  );
};

export default Banner;
