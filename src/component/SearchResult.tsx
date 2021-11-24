/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { VFC } from 'react';
import './SearchResult.css';

export type SearchResultDetails = {
  id?: number;
  image: string;
  location: string;
  title: string;
  star: string;
  price: number;
  total: number;
};

type Props = {
  searchResultDetails: SearchResultDetails[];
};

const SearchResult: VFC<Props> = (props) => {
  const { searchResultDetails } = props;

  return (
    <>
      <div className="searchResult">
        {searchResultDetails.map((searchResultDetail) => (
          <img src={searchResultDetail.image} alt="" />
        ))}
      </div>
    </>
  );
};

export default SearchResult;
