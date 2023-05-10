import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Calendar() {
  const [calendar1, setCalendar1] = useState(null);
  useEffect(() => {
    axios
      .get('https://servicodados.ibge.gov.br/api/v3/calendario/')
      .then((response) => {
        console.log(response.data);
        setCalendar1(response.data);
        console.log(calendar1);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!calendar1) {
    return <h2>Carregando...</h2>;
  }
  return (
    <div>
      <img src={calendar1.url} alt="" />
    </div>
  );
}

export default Calendar;
