# 🗓️ React Calendar Event Scheduling App

A fully responsive event scheduling application built using **React + Vite**. This project displays events on a calendar grid and allows users to view a full list of events on a dedicated Programs page. Event data is loaded from a static JSON file.

---

## 📦 Features

- 📅 **Monthly calendar view** with events shown on the correct dates
- 🔔 **Sidebar navigation** with links to pages like Home, Programs, and Events
- 📋 **Events page** shows a card layout of all events from the JSON file
- 🟢 **Upcoming event preview** displayed at the top
- 🎨 Clean UI using CSS 

---

## 📁 Folder Structure

src/<br>
│
├── components/
│ ├── Calendar.jsx  # Monthly view
│ ├── Header.jsx  # Displays nearest upcoming event
│ ├── ProgramsPage.jsx  # Lists all events
│ ├── Sidebar.jsx  # Navigation panel
│ └── EventCard.jsx  # Event display in calendar
│
├── data/
│ └── events.json # Static list of events
│
├── App.jsx
├── main.jsx
└── index.css

## 🛠 Installation

```bash
git clone https://github.com/Deepaks31/Calender-app.git
cd calendar-app
npm install
npm run dev
