import React, { useState } from 'react'
import Task from './Task'
import Modal from './Modal'
import { addDoc } from 'firebase/firestore'
import dateformat from 'dateformat'

export default function Template({
	title,
	tasks,
	setTasks,
	tasksCollectionRef
}) {
	const [modal, setModal] = useState(false)

	const toggleModal = () => {
		setModal(prev => !prev)
	}

	const onAddTask = async ({ deadline, desc, title, status }) => {
		const dataTask = {
			deadline: dateformat(deadline, 'd mmm yyyy'),
			desc: desc,
			title: title
		}
		await addDoc(tasksCollectionRef, {
			title: title,
			desc: desc,
			deadline: dateformat(deadline, 'd mmm yyyy'),
			status: status
		})

		setTasks(() => [...tasks, dataTask])
	}

	return (
		<>
			{modal && <Modal toggleModal={toggleModal} onSubmit={onAddTask} />}
			<div className='working__template grow rounded p-4'>
				<div className='template__header flex justify-between items-center mb-2'>
					<div className='template__name opacity-50 text-base'>
						<span>
							{title} ({tasks.length})
						</span>
					</div>
					<div
						className='template__add flex items-center'
						onClick={toggleModal}
					>
						<svg
							width='18'
							height='18'
							viewBox='0 0 18 18'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<circle cx='9' cy='9' r='9' fill='#1C1D22' fillOpacity='0.08' />
							<g opacity='0.4'>
								<path
									d='M12 9H6'
									stroke='#1C1D22'
									strokeWidth='2'
									strokeLinecap='round'
								/>
								<path
									d='M9 12L9 6'
									stroke='#1C1D22'
									strokeWidth='2'
									strokeLinecap='round'
								/>
							</g>
						</svg>
						<span className='ml-2'>Add new task</span>
					</div>
				</div>
				{tasks.map((item, index) => {
					return (
						<Task
							key={index}
							title={item.title}
							desc={item.desc}
							deadline={item.deadline}
						/>
					)
				})}
			</div>
		</>
	)
}
