import format from 'date-fns/format';
import getDay from 'date-fns/getDay';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';

const locales = {
  'en-US': require('date-fns/locale/en-US'),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [{}];

function App() {
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });
  const [allEvent, setAllEvent] = useState(events);

  const handleAddEvnt = () => {
    setAllEvent([...allEvent, newEvent]);
  };

  return (
    <div className="App">
      <h1>Calendar</h1>
      <h2> Add New Event </h2>
      <div>
        <input
          type="text"
          placeholder="Adicionar Titulo"
          style={{ width: '20%', margin: '10px' }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <DatePicker
          placeholderText="O Evento se Inicia em"
          style={{ marginRight: '10px' }}
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />

        <DatePicker
          placeholderText="O Evento  Termina em"
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        />
        <button style={{ marginTop: '10px' }} onClick={handleAddEvnt}>
          Adicionar Evento
        </button>
      </div>
      <Calendar
        localizer={localizer}
        events={allEvent}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: '50px' }}
      />
    </div>
  );
}

export default App;
