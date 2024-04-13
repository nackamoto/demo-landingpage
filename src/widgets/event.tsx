import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs'
import { eventList } from '../data/event'

const localizer = dayjsLocalizer(dayjs)

const MyCalendar = () => (
    
  <div>
    <Calendar
      localizer={localizer}
      events={eventList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 200 }}
      className='w-full'
    />
  </div>
)


export default MyCalendar
