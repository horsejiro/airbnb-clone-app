/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
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
  description: string;
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
            <div className="searchResult__info">
              <div className="searchResult__infoTop">
                <p>{searchResultDetail.location}</p>
                <h3>{searchResultDetail.title}</h3>
                <p>___</p>
                <p>{searchResultDetail.description}</p>
              </div>
              <div className="searchResult__infoBottom" />
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default SearchResult;
