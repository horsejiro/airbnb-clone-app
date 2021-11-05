import { Moment } from 'moment';
import React, { VFC, useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './Search.css';

const Search: VFC = () => {
  const [startDate, setStartDate] = useState<moment.Moment | null>(null);
  const [endDate, setEndDate] = useState<moment.Moment | null>(null);

    function 
  return (
    <div className='search'>
        <DateRangePicker/>
    </div>
  );
};

export default Search;
