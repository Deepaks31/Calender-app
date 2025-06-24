import React from 'react';
import Sidebar from './Sidebar';
import events from '../data/events.json';

const ProgramsPage = () => {
  return (
    <>
      <style>{`
        .app-container {
          display: flex;
          height: 100vh;
          width: 100vw;
          overflow: hidden;
        }

        .main-content {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
          background-color: #f4f4f4;
        }

        .event-list {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          padding: 0;
          margin: 0;
          list-style: none;
        }

        .event-item {
          flex: 1 1 250px;
          max-width: 300px;
          background-color: #fff;
          padding: 16px;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        h2 {
          margin-bottom: 20px;
        }
      `}</style>

      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <h2>Programs (Events List)</h2>
          <ul className="event-list">
            {events.map((event, index) => (
              <li key={index} className="event-item">
                <h4>{event.title}</h4>
                <p>Date: {event.date}</p>
                <p>Time: {event.startTime} - {event.endTime}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProgramsPage;
