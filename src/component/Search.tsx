/* eslint-disable react/jsx-no-bind */
import moment from 'moment';
import React, { VFC, useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './Search.css';

const Search: VFC = () => {
  const [startDate, setStartDate] = useState<moment.Moment | null>(null);
  const [endDate, setEndDate] = useState<moment.Moment | null>(null);

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  };

  function handleSelect(ranges: {
    selection: {
      startDate: React.SetStateAction<moment.Moment | null>;
      endDate: React.SetStateAction<moment.Moment | null>;
    };
  }) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
    </div>
  );
};

export default Search;
