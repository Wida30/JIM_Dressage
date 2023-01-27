import { EventInput } from '@fullcalendar/core';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'Entrenamiento',
    start: '2023-01-10'
  },
  {
    id: createEventId(),
    title: 'clase Alba',
    start: '2023-01-28',
    end: '2023-01-28' + 'T01:00:00'
  },
  {
    id: createEventId(),
    title: 'Clase Noa',
    start: '2023-01-27' + 'T12:00:00',
    end: '2023-01-27' + 'T15:00:00'
  }
];

export function createEventId() {
  return String(eventGuid++);
}
