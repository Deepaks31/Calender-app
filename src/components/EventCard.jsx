import React from 'react';

const EventCard = ({ title, startTime, endTime, color }) => {
  const cardStyle = {
    fontSize: '10px',
    marginTop: '4px',
    padding: '3px 5px',
    backgroundColor: color || '#def7ec',
    color: '#000',
    borderRadius: '4px'
  };

  return (
    <div style={cardStyle}>
      <strong>{title}</strong>
      <div>{startTime} - {endTime}</div>
    </div>
  );
};

export default EventCard;