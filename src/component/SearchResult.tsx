/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';
import React, { VFC } from 'react';
import './SearchResult.css';

export type SearchResultDetails = {
  id?: number;
  image: string;
  location: string;
  title: string;
  star: number;
  price: string;
  total: string;
  description: string;
};

type Props = {
  searchResultDetails: SearchResultDetails[];
};

const SearchResult: VFC<Props> = (props) => {
  const { searchResultDetails } = props;

  return (
    <>
      {searchResultDetails.map((searchResultDetail) => (
        <div className="searchResult">
          <img src={searchResultDetail.image} alt="" />
          <FavoriteBorderIcon className="searchResult__heart" />
          <div className="searchResult__info">
            <div className="searchResult__infoTop">
              <p>{searchResultDetail.location}</p>
              <h3>{searchResultDetail.title}</h3>
              <p>___</p>
              <p>{searchResultDetail.description}</p>
            </div>
            <div className="searchResult__infoBottom">
              <div className="searchResult__stars">
                <StarIcon className="searchResult__star" />
                <p>
                  <strong>{searchResultDetail.star}</strong>
                </p>
              </div>
            </div>
            <div className="searchResult__price">
              <h2>{searchResultDetail.price}</h2>
              <p>{searchResultDetail.total}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SearchResult;
