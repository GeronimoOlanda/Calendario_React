
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

const locales = {
  "pt-BR": require("date-fns/locale/pt-BR"),
  
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const events = [
  {
    title: "Aniversario do Pain",
    allDay: true,
    start: new Date(2021,2,10),
    end: new Date(2021, 2, 10)
  },
  {
    title: "Aniversario meu",
    allDay: true,
    start: new Date(2021,10,10),
    end: new Date(2021, 10, 10)
  },
  {
    title: "Dia de Luta Livre",
    allDay: true,
    start: new Date(2021,5,10),
    end: new Date(2021, 5, 10)
  }
]
function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
