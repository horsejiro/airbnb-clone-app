import React, { useState } from 'react';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';
import 'moment/locale/ja';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const Search: React.FC = () => {
  const [startDate, setStartDate] = useState<moment.Moment | null>(null);
  const [endDate, setEndDate] = useState<moment.Moment | null>(null);
  const [focusedInput, setFocusedInput] = useState<
    'startDate' | 'endDate' | null
  >(null);

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
    </div>
  );
};

export default Search;
