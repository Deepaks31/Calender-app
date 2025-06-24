import React from 'react';
import dayjs from 'dayjs';
import events from '../data/events.json';
import { getNearestEvent, formatMonthYear } from '../utils/dateUtils';

const Header = () => {
  const today = dayjs();
  const nextEvent = getNearestEvent(events);

  return (
    <div className="header">
      <div className="header-left">
        <p className="weekly">{formatMonthYear(today)}</p>
        {nextEvent ? (
          <>
            <h2 className="title">{nextEvent.title}</h2>
            <p className="details">
              Date - {nextEvent.date} | Time - {nextEvent.startTime} - {nextEvent.endTime}
            </p>
          </>
        ) : (
          <>
            <h2 className="title">No Upcoming Events</h2>
            <p className="details">You are all caught up!</p>
          </>
        )}
      </div>
      
    </div>
  );
};

export default Header;
