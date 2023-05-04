import React, { useEffect, useState } from 'react'
import Template from '../../components/Template'
import Modal from '../../components/Modal'
import HomeHeader from '../../components/HomeHeader'

export default function Projects() {
	const templates = [
		{ title: 'To do', status: 'todo' },
		{ title: 'In progress', status: 'inprogress' },
		{ title: 'Done', status: 'done' }
	]

	const [modal, setModal] = useState(false)
	const [tasks, setTasks] = useState([])

	const toggleModal = () => {
		setModal(prev => !prev)
	}

	useEffect(() => {
		setTasks(JSON.parse(localStorage.getItem('tasks')))
	}, [])

	const onCreateBoard = async ({ title }) => {
		try {
			const templatesTask = {
				title: title
			}
		} catch (error) {
			alert(error)
		}
	}

	return (
		<>
			{modal && <Modal toggleModal={toggleModal} onSubmit={onCreateBoard} />}
			<HomeHeader title='Welcome back' />
			<div className='working__settings flex place-content-between'>
				<div className='working__setting flex items-center'>
					<div className='working__board'>
						<button className='flex items-center'>
							<svg
								width='18'
								height='18'
								viewBox='0 0 18 18'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M14.25 2.25C15.0784 2.25 15.75 2.92157 15.75 3.75V6.75C15.75 7.57843 15.0784 8.25 14.25 8.25L3.75 8.25C2.92157 8.25 2.25 7.57843 2.25 6.75L2.25 3.75C2.25 2.92157 2.92157 2.25 3.75 2.25L14.25 2.25ZM14.25 6.75V3.75L3.75 3.75L3.75 6.75L14.25 6.75Z'
									fill='#1C1D22'
								/>
								<path
									d='M14.25 9.75C15.0784 9.75 15.75 10.4216 15.75 11.25V14.25C15.75 15.0784 15.0784 15.75 14.25 15.75H3.75C2.92157 15.75 2.25 15.0784 2.25 14.25L2.25 11.25C2.25 10.4216 2.92157 9.75 3.75 9.75L14.25 9.75ZM14.25 14.25V11.25L3.75 11.25L3.75 14.25H14.25Z'
									fill='#1C1D22'
								/>
							</svg>
							<span className='ml-2 text-xl'>Board view</span>
						</button>
					</div>
				</div>
				<div className='working__setting'>
					<button
						className='bg-dark py-2 px-10 rounded text-white'
						onClick={toggleModal}
					>
						New board
					</button>
				</div>
				<div className='working__setting-scrollbar bg-grayLite'>
					<div className='working___setting-progress bg-dark'></div>
				</div>
			</div>
			<div className='working__templates pt-6 flex gap-4'>
				{templates.map((item, index) => {
					return (
						<Template
							key={index}
							title={item.title}
							status={item.status}
							tasks={tasks}
							setTasks={setTasks}
						/>
					)
				})}
			</div>
		</>
	)
}
