import React, { useEffect, useState } from 'react'
import Task from './Task'
import Modal from './Modal'
import { useDrop } from 'react-dnd'
import { v4 as uuidv4 } from 'uuid'
import dateFormat from 'dateformat'

export default function Template({ title, status, tasks, setTasks, date }) {
	const [modal, setModal] = useState(false)
	const [todos, setTodos] = useState([])
	const [inProgress, setInProgress] = useState([])
	const [done, setDone] = useState([])

	const toggleModal = () => {
		setModal(prev => !prev)
	}

	const [{ isOver }, drop] = useDrop(() => ({
		accept: 'task',
		drop: item => addItemToTemplate(item.id),
		collect: monitor => ({
			isOver: !!monitor.isOver()
		})
	}))

	const onAddTask = async ({ deadline, desc, title, status }) => {
		const dataTask = {
			title: title,
			desc: desc,
			deadline: dateFormat(deadline, 'd mmm yyyy'),
			status: status,
			id: uuidv4()
		}

		setTasks(prev => {
			const list = [...prev, dataTask]
			localStorage.setItem('tasks', JSON.stringify(list))

			return list
		})
	}

	useEffect(() => {
		const findTodos = tasks.filter(tasks => tasks.status === 'todo')
		const findInProgress = tasks.filter(tasks => tasks.status === 'inprogress')
		const findDone = tasks.filter(tasks => tasks.status === 'done')

		setTodos(findTodos)
		setInProgress(findInProgress)
		setDone(findDone)
	}, [tasks])

	const addItemToTemplate = id => {
		setTasks(prev => {
			const mTasks = prev.map(t => {
				if (t.id === id) {
					console.log({ ...t, status: status })
					return { ...t, status: status }
				}

				return t
			})

			localStorage.setItem('tasks', JSON.stringify(mTasks))

			return mTasks
		})
	}

	let taskToMap = todos

	if (status === 'inprogress') {
		taskToMap = inProgress
	}
	if (status === 'done') {
		taskToMap = done
	}

	return (
		<>
			{modal && <Modal toggleModal={toggleModal} onSubmit={onAddTask} />}
			<div
				ref={drop}
				className={`working__template grow rounded p-4 ${
					isOver ? 'min-h-[100vh]' : ''
				}`}
			>
				<div className='template__header flex justify-between items-center mb-2'>
					<div className='template__name opacity-50 text-base'>
						<span>
							{title} ({taskToMap.length})
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
				{taskToMap.map((item, index) => {
					return (
						<Task
							key={index}
							title={item.title}
							desc={item.desc}
							deadline={item.deadline}
							date={date}
							id={item.id}
						/>
					)
				})}
			</div>
		</>
	)
}
