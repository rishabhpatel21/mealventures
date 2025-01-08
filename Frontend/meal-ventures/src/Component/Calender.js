import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import "react-datepicker/dist/react-datepicker.css";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import '../CSS/Cal.css';

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const initialEvents = [];

function CalendarComponent() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const dateParam = queryParams.get("date");
  const ingredientParam = queryParams.get("ingredient");

  const [allEvents, setAllEvents] = useState(initialEvents);

  useEffect(() => {
    if (dateParam && ingredientParam) {
      const newEvent = {
        title: ingredientParam,
        start: new Date(dateParam),
      };
      setAllEvents([...allEvents, newEvent]);
    }
  }, [dateParam, ingredientParam]);

  const handleDeleteEvent = (eventIndex) => {
    const updatedEvents = [...allEvents];
    updatedEvents.splice(eventIndex, 1);
    setAllEvents(updatedEvents);
  };

  return (
    <div className="Calendar">
      <div className="agenda-container">
        <Calendar
          localizer={localizer}
          events={allEvents}
          startAccessor="start"
          endAccessor="start"
          style={{ height: 800, margin: "30px" }}
          components={{
            event: ({ event, idx: eventIndex }) => (  
              <div className="btnn">
                <strong>{event.title}</strong>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteEvent(eventIndex)}
                >
                &#128465; {/* Unicode trash bin symbol */}
                </button>
              </div>
            ),
          }}
          views={{
            month: true, // Include the month view
            agenda: true, // Include the agenda view
          }}
        />
      </div>
    </div>
  );
}

export default CalendarComponent;
