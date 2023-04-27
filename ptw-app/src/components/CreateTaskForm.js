import React from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import ErrorProduct from './ErrorProduct'
import { v4 as uuidv4 } from 'uuid'

export default function CreateTaskForm({ onAddTask }) {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors }
	} = useForm()

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'steps'
	})

	return (
		<form action='#' onSubmit={handleSubmit(onAddTask)}>
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
				<label className='form__label' htmlFor='status'>
					Status
				</label>
				<input
					type='text'
					className='border p-2 mb-2 w-full outline-0 rounded-sm'
					id='status'
					{...register('status', {
						required: 'Status is require field'
					})}
				/>
				{errors.status && <ErrorProduct error={errors.status.message} />}
			</div>
			<div className='form__steps'>
				<span className='form__label'>Steps to achieve</span>
				{fields.map((field, index) => {
					return (
						<div key={field.id} className='form__input flex'>
							<input
								className='border p-2 mb-2 w-full outline-0 rounded-sm'
								type='text'
								{...register(`steps[${index}].step`)}
								id={`ingredients[${index}].step`}
							/>
							<button type='button' onClick={() => remove(index)}>
								Reomve &#8722;
							</button>
						</div>
					)
				})}
				<button
					type='button'
					onClick={() => append({ step: '', id: uuidv4() })}
				>
					Add steps
				</button>
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
	)
}
