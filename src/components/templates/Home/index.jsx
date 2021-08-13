import format from 'date-fns/format';
import getDay from 'date-fns/getDay';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DatePicker from 'react-datepicker';
import Favicon from 'react-favicon';

import 'react-datepicker/dist/react-datepicker.css';
import './App.css';

//localidade do pais ou idioma
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
  // setando estados
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });
  const [allEvent, setAllEvent] = useState(events);

  //funcao para adicionar novos eventos
  const handleAddEvnt = () => {
    setAllEvent([...allEvent, newEvent]);
  };
  //utilizamos para dar titulo a pagina
  React.useEffect(() => {
    document.title = 'CalendarioDay - Mantenha-se em dia com sua vida!';
  }, []);

  return (
    <div className="App">
      <Favicon
        url="https://images.vexels.com/media/users/3/205950/isolated/preview/6fbc93ab8efc8497ef9ad1f7c815dd33-icone-de-curso-do-calendario.png"
        title="Calendario"
      />
      <h1>Calendar</h1>
      <h2> Adicionar Evento </h2>
      <div>
        {/* Input para adicionar os dados, e funcao onChange para adicionar os mesmos*/}
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
      {/*adicionando evento do calendario*/}
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
