/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState, FC } from 'react';
import moment from 'moment';
import './Search.css';
import { DateRangePicker } from 'react-dates';
import 'moment/locale/ja';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import PeopleIcon from '@material-ui/icons/People';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const Search: FC = () => {
  const [startDate, setStartDate] = useState<moment.Moment | null>(null);
  const [endDate, setEndDate] = useState<moment.Moment | null>(null);
  const [focusedInput, setFocusedInput] = useState<
    'startDate' | 'endDate' | null
  >(null);
  const history = useHistory();
  const toSearch = () => {
    history.push('./search');
  };

  return (
    <div className="search">
      <DateRangePicker
        startDate={startDate}
        startDateId="startDateId"
        endDate={endDate}
        endDateId="endDateId"
        focusedInput={focusedInput}
        onFocusChange={setFocusedInput}
        onDatesChange={(selectedDates) => {
          setStartDate(selectedDates.startDate);
          setEndDate(selectedDates.endDate);
        }}
      />
      <h2>
        ゲスト数を入力
        <PeopleIcon />
      </h2>
      <input min={0} defaultValue={2} type="number" />
      <Button onClick={toSearch}> 検索 </Button>
    </div>
  );
};

export default Search;
