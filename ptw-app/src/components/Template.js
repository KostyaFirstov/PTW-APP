import React, { useState } from 'react'
import Task from './Task'
import ErrorProduct from './ErrorProduct'

export default function Template(props) {
	const [modal, setModal] = useState()
	const [value, setValue] = useState()
	const [error, setError] = useState()

	const openModal = () => {
		setModal(prev => !prev)
	}

	const submitHandler = async event => {
		event.preventDefault()
		setValue('')

		if (value.trim().length === 0) {
			setError('Задача не может быть пустой')
			return
		}
	}
	const changeHandler = event => {}

	return (
		<>
			<div className='modal'>
				<div className='modal__container rounded'>
					<form action='#' onSubmit={submitHandler}>
						<div className='form__input'>
							<input
								type='text'
								className='border p-2 mb-2 w-full outline-0 rounded-sm'
								value={value}
								onChange={changeHandler}
								id='title'
								required
							/>
							<label className='form__label' for='title'>
								Title for your ToDo
							</label>
						</div>

						{error && <ErrorProduct error={error} />}
						<button className='border py-2 px-4 bg-yellow-400 w-full hover:bg-red-400 rounded-sm'>
							Create
						</button>
					</form>
				</div>
			</div>
			<div className='working__template grow rounded p-4'>
				<div className='template__header flex justify-between items-center mb-2'>
					<div className='template__name opacity-50 text-lg'>
						<span>{props.title}</span>
					</div>
					<div className='template__add flex items-center text-lg'>
						<svg
							width='18'
							height='18'
							viewBox='0 0 18 18'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<circle cx='9' cy='9' r='9' fill='#1C1D22' fill-opacity='0.08' />
							<g opacity='0.4'>
								<path
									d='M12 9H6'
									stroke='#1C1D22'
									stroke-width='2'
									stroke-linecap='round'
								/>
								<path
									d='M9 12L9 6'
									stroke='#1C1D22'
									stroke-width='2'
									stroke-linecap='round'
								/>
							</g>
						</svg>
						<span className='ml-2' onClick={openModal}>
							Add new task
						</span>
					</div>
				</div>
				<Task title='' desk='' deadline='' listToDo='' amount='' />
			</div>
		</>
	)
}
