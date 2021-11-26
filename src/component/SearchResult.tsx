/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { FavoriteBorder, FavoriteBorderIcon } from '@material-ui/icons';
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
          <>
            <img src={searchResultDetail.image} alt="" />
            <FavoriteBorderIcon className="search__heart" />
          </>
        ))}
      </div>
    </>
  );
};

export default SearchResult;
