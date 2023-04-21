import React from 'react'
import { useForm } from 'react-hook-form'
import ErrorProduct from './ErrorProduct'

export default function Modal({ onSubmit, toggleModal }) {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm()

	return (
		<div
			className='modal'
			onClick={event => event.currentTarget === event.target && toggleModal()}
		>
			<div className='modal__container rounded relative'>
				<form action='#' onSubmit={handleSubmit(onSubmit)}>
					<div className='form__input'>
						<label className='form__label' htmlFor='title'>
							Title for to do
						</label>
						<input
							type='text'
							className='border p-2 mb-2 w-full outline-0 rounded-sm'
							id='title'
							{...register('title', {
								required: 'Title is require field'
							})}
						/>
						{errors.title && <ErrorProduct error={errors.title.message} />}
					</div>
					<div className='form__input'>
						<label className='form__label' htmlFor='desc'>
							Description
						</label>
						<input
							type='text'
							className='border p-2 mb-2 w-full outline-0 rounded-sm'
							id='desc'
							{...register('desc', {
								required: 'Desc is require field'
							})}
						/>
						{errors.desc && <ErrorProduct error={errors.desc.message} />}
					</div>
					<div className='form__input'>
						<label className='form__label' htmlFor='date'>
							Deadline
						</label>
						<input
							type='date'
							className='border p-2 mb-2 w-full outline-0 rounded-sm'
							id='date'
							{...register('deadline', {
								required: 'Deadline is require field'
							})}
						/>
						{errors.date && <ErrorProduct error={errors.date.message} />}
					</div>
					<button className='border py-2 px-4 bg-yellow-400 w-full hover:bg-red-400 rounded-sm'>
						Create
					</button>
				</form>
				<button
					className='modal-btn absolute top-0 right-0 z-10'
					onClick={toggleModal}
				>
					<svg
						width='50'
						height='50'
						viewBox='0 0 40 40'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<circle
							cx='20'
							cy='20'
							r='14'
							transform='rotate(-45 20 20)'
							fill='black'
							fillOpacity='0.08'
						/>
						<g opacity='0.4'>
							<path
								d='M22.8284 17.1715L17.1715 22.8284'
								stroke='black'
								strokeWidth='2'
								strokeLinecap='round'
							/>
							<path
								d='M22.8284 22.8285L17.1715 17.1716'
								stroke='black'
								strokeWidth='2'
								strokeLinecap='round'
							/>
						</g>
					</svg>
				</button>
			</div>
		</div>
	)
}
