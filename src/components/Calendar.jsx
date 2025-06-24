import React, { useState } from 'react';
import dayjs from 'dayjs';
import events from '../data/events.json';
import EventCard from './EventCard';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const daysInMonth = currentMonth.daysInMonth();
  const startDay = currentMonth.startOf('month').day() || 7;
  const today = dayjs();

  const prevMonth = () => setCurrentMonth(currentMonth.subtract(1, 'month'));
  const nextMonth = () => setCurrentMonth(currentMonth.add(1, 'month'));

  const getEventsForDay = (date) => {
    return events.filter(e => dayjs(e.date).isSame(date, 'day'));
  };

  const renderDays = () => {
    const days = [];
    for (let i = 1; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-cell empty"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const date = currentMonth.date(i);
      const dayEvents = getEventsForDay(date);
      const isToday = today.isSame(date, 'day');

      days.push(
        <div key={i} className={`calendar-cell ${isToday ? 'today' : ''}`}>
          <div className="date-number">{i}</div>
          {dayEvents.map((event, idx) => (
            <EventCard
              key={idx}
              title={event.title}
              startTime={event.startTime}
              endTime={event.endTime}
              color={event.color}
            />
          ))}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={prevMonth} className="nav-btn">←</button>
        <h3>{currentMonth.format('MMMM YYYY')}</h3>
        <button onClick={nextMonth} className="nav-btn">→</button>
      </div>
      <div className="weekdays">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d, idx) => (
          <div key={idx}>{d}</div>
        ))}
      </div>
      <div className="calendar-grid">
        {renderDays()}
      </div>
    </div>
  );
};

export default Calendar;
