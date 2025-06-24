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
│<br>
├── components/<br>
│ ├── Calendar.jsx  # Monthly view<br>
│ ├── Header.jsx  # Displays nearest upcoming event<br>
│ ├── ProgramsPage.jsx  # Lists all events<br>
│ ├── Sidebar.jsx  # Navigation panel<br>
│ └── EventCard.jsx  # Event display in calendar<br>
│<br>
├── data/<br>
│ └── events.json # Static list of events<br>
│<br>
├── App.jsx<br>
├── main.jsx<br>
└── index.css<br>

## 🛠 Installation

```bash
git clone https://github.com/Deepaks31/Calender-app.git
cd calendar-app
npm install
npm run dev
