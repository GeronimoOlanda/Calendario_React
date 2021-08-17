import React from 'react';
import DatePicker from 'react-datepicker';
import P from 'prop-types';

export const Input = ({ newEvent, setNewEvent, handleAddEvnt }) => {
  return (
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
  );
};

Input.propTypes = {
  newEvent: P.object,
  setNewEvent: P.func,
  handleAddEvnt: P.func,
};
export default Input;
