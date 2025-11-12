import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import frLocale from '@fullcalendar/core/locales/fr';

const Calendrier = () => {
  return (
    <FullCalendar
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
      locale={frLocale}
      events={[
    { title: 'A2 cours dw', start: '2025-09-01', end:'2025-09-06', color: 'red' },
    { title: 'A3 alternance', start: '2025-09-01', end:'2025-09-06', color: 'green' },
    { title: 'A4 alternance', start: '2025-09-01', end:'2025-09-06', color: 'blue' },
    { title: 'A5 alternance', start: '2025-09-01', end:'2025-09-06', color: 'lightblue' },
    { title: 'A1 cours', start: '2025-09-08', end:'2025-09-13', color: 'lightgreen' },
    { title: 'A2 cours dw', start: '2025-09-08', end:'2025-09-13', color: 'red' },
    { title: 'A3 alternance', start: '2025-09-08', end:'2025-09-13', color: 'green' },
    { title: 'A4 alternance', start: '2025-09-08', end:'2025-09-13', color: 'blue' },
    { title: 'A5 alternance', start: '2025-09-08', end:'2025-09-13', color: 'lightblue' },
  ]}
    />
  )
}

export default Calendrier;