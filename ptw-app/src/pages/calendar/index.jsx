import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import dateFormat from 'dateformat'
import HomeHeader from '../../components/HomeHeader'

export default function Calendar() {
	const [currentEvents, setCurrentEvents] = useState([])

	const handleDateClick = selected => {
		const title = prompt('Please enter a new title for your event')
		const calendarApi = selected.view.calendar
		calendarApi.unselect()

		if (title) {
			calendarApi.addEvent({
				id: `${selected.dateStr}-${title}`,
				title,
				start: selected.startStr,
				end: selected.endStr,
				allDay: selected.allDay
			})
		}
	}

	const handleEventClick = selected => {
		if (
			window.confirm(
				`Are you sure want to delete the event ${selected.event.title}`
			)
		) {
			selected.event.remove()
		}
	}

	return (
		<>
			<HomeHeader title='Your calendar' />
			<div className='flex justify-between'>
				<div className='calendar__sidebar flex flex-col h-screen'>
					<div>
						<h2>Events</h2>
					</div>
					{currentEvents.map(item => {
						return (
							<div key={item.id}>
								<div>
									{item.title}{' '}
									<span>{dateFormat(item.start, 'd mmm yyyy')}</span>
								</div>
							</div>
						)
					})}
				</div>
				<div className='calendar grow'>
					<FullCalendar
						plugins={[
							dayGridPlugin,
							timeGridPlugin,
							interactionPlugin,
							listPlugin
						]}
						initialView={'dayGridMonth'}
						headerToolbar={{
							start: 'prev,next today',
							center: 'title',
							end: 'dayGridMonth,timeGridWeek,timeGridDay'
						}}
						editable={true}
						selectable={true}
						selectMirror={true}
						dayMaxEvents={true}
						select={handleDateClick}
						eventClick={handleEventClick}
						eventsSet={events => setCurrentEvents(events)}
						initialEvents={[
							{ id: '1234', title: 'All-day event', date: '2023-09-15' }
						]}
						height={'90vh'}
					/>
				</div>
			</div>
		</>
	)
}
