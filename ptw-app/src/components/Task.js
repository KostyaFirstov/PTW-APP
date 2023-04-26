import React, { useState } from 'react'
import { useDrag } from 'react-dnd'
import Modal from './Modal'

export default function Task({
	title,
	desc,
	deadline,
	id,
	date,
	tasks,
	setTasks
}) {
	const [modal, setModal] = useState(false)
	const [options, setOptions] = useState(false)
	const [selectedColor, setSelectedColor] = useState(0)
	const colors = ['Gray', 'Orange', 'Green', 'Red']

	const [{ isDragging }, drag] = useDrag(() => ({
		type: 'task',
		item: { id },
		collect: monitor => ({
			isDragging: !!monitor.isDragging()
		})
	}))

	const toggleModal = () => {
		setModal(prev => !prev)
	}

	const handleRemove = id => {
		const filterTasks = tasks.filter(item => item.id !== id)
		localStorage.setItem('tasks', JSON.stringify(filterTasks))
		setTasks(filterTasks)
	}

	const onChangeColor = index => {
		setSelectedColor(index)
	}

	return (
		<>
			{modal && <Modal toggleModal={toggleModal} />}
			<div
				ref={drag}
				className={`relative working__task bg-white border-2 border-grayLite rounded-sm p-4 cursor-grabbing ${
					isDragging ? 'opacity-25' : 'opacity-100'
				}`}
			>
				<div className='task__header flex items-center justify-between pb-2'>
					<div className='task__info'>
						<div className='task__name text-xl font-semibold'>{title}</div>
						<div className='task__desc text-gray'>{desc}</div>
					</div>
					<div
						className='task__options cursor-pointer'
						onClick={() => setOptions(!options)}
					>
						<svg
							width='26'
							height='26'
							viewBox='0 0 26 26'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<rect width='26' height='26' rx='13' fill='white' />
							<rect
								x='1'
								y='1'
								width='24'
								height='24'
								rx='12'
								stroke='#1C1D22'
								strokeOpacity='0.1'
								strokeWidth='2'
							/>
							<circle cx='17' cy='13' r='1' fill='#1C1D22' />
							<circle cx='13' cy='13' r='1' fill='#1C1D22' />
							<circle cx='9' cy='13' r='1' fill='#1C1D22' />
						</svg>
					</div>
					{options && (
						<div className='options__modal absolute top-1/3 w-30 -right-5 bg-white border-2 border-grayLite z-30 rounded-sm'>
							<ul className='options__List'>
								<li className='options__item relative py-2 pl-8 pr-6 border-b-2 border-grayLite'>
									<svg
										className='absolute left-2 top-1/2 -translate-y-1/2'
										width='16'
										height='16'
										viewBox='0 0 16 16'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M16 2.8C16 4.3464 14.6071 5.6 12.8889 5.6C12.0871 5.6 11.3562 5.32704 10.8045 4.87874L6.121 7.68888C6.18706 7.91592 6.22222 8.15432 6.22222 8.4C6.22222 8.64568 6.18706 8.88408 6.121 9.11112L10.3146 11.6273C10.8743 10.8865 11.8185 10.4 12.8889 10.4C14.6071 10.4 16 11.6536 16 13.2C16 14.7464 14.6071 16 12.8889 16C11.1812 16 9.79476 14.7616 9.77796 13.2282L5.19543 10.4787C4.64381 10.927 3.91288 11.2 3.11111 11.2C1.39289 11.2 0 9.9464 0 8.4C0 6.8536 1.39289 5.6 3.11111 5.6C3.91288 5.6 4.64381 5.87296 5.19543 6.32126L9.87902 3.51112C9.81298 3.28404 9.77778 3.04572 9.77778 2.8C9.77778 1.2536 11.1707 0 12.8889 0C14.6071 0 16 1.2536 16 2.8ZM12.8889 4C13.6252 4 14.2222 3.46274 14.2222 2.8C14.2222 2.13726 13.6252 1.6 12.8889 1.6C12.1525 1.6 11.5556 2.13726 11.5556 2.8C11.5556 3.46274 12.1525 4 12.8889 4ZM3.11111 9.6C3.84749 9.6 4.44444 9.06272 4.44444 8.4C4.44444 7.73728 3.84749 7.2 3.11111 7.2C2.37473 7.2 1.77778 7.73728 1.77778 8.4C1.77778 9.06272 2.37473 9.6 3.11111 9.6ZM14.2222 13.2C14.2222 13.8627 13.6252 14.4 12.8889 14.4C12.1525 14.4 11.5556 13.8627 11.5556 13.2C11.5556 12.5373 12.1525 12 12.8889 12C13.6252 12 14.2222 12.5373 14.2222 13.2Z'
											fill='black'
										/>
									</svg>
									Share
								</li>
								<li className='options__item py-2 pl-8 pr-6 border-b-2 border-grayLite relative'>
									<svg
										className='absolute left-2  top-1/2 -translate-y-1/2'
										width='18'
										height='18'
										viewBox='0 0 18 18'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M15.4 9C15.4 12.5346 12.5346 15.4 9 15.4M15.4 9C15.4 5.46538 12.5346 2.6 9 2.6M15.4 9H17M9 15.4C5.46538 15.4 2.6 12.5346 2.6 9M9 15.4V17M9 2.6C5.46538 2.6 2.6 5.46538 2.6 9M9 2.6V1M2.6 9H1M11.4 9C11.4 10.3255 10.3255 11.4 9 11.4C7.67448 11.4 6.6 10.3255 6.6 9C6.6 7.67448 7.67448 6.6 9 6.6C10.3255 6.6 11.4 7.67448 11.4 9Z'
											stroke='black'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
									Mark
									<ul className='options__item-dropdown absolute bg-white border-2 border-grayLite z-30 rounded-sm top-0 right-0'>
										{colors.map((item, index) => {
											return (
												<li
													key={index}
													onClick={() => onChangeColor(index)}
													className='options__item-dropdown-link bg-white border-b-2 border-grayLite py-2 px-7'
												>
													{item}
												</li>
											)
										})}
									</ul>
								</li>
								<li
									onClick={() => handleRemove(id)}
									className='options__item py-2 pl-8 pr-6 relative'
								>
									<svg
										className='absolute left-2 top-1/2 -translate-y-1/2'
										width='16'
										height='16'
										viewBox='0 0 18 18'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M3.28564 3H14.7142V15C14.7142 16.1046 13.6909 17 12.4285 17H5.57136C4.30899 17 3.28564 16.1046 3.28564 15V3ZM8.99993 1C10.2049 1 11.1921 1.81588 11.2794 2.85074L11.2856 3H6.71422C6.71422 1.89543 7.73757 1 8.99993 1Z'
											stroke='black'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
										<path
											d='M1 3H17'
											stroke='black'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
										<path
											d='M6.71436 6V14'
											stroke='black'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
										<path
											d='M11.2856 6V14'
											stroke='black'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
									Remove
								</li>
							</ul>
						</div>
					)}
				</div>
				<div className='task__main pb-2'>
					<div className='task__progress flex items-center justify-between'>
						<div className='task__progress-info flex items-center cursor-pointer'>
							<svg
								width='16'
								height='16'
								viewBox='0 0 16 16'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<g opacity='0.5'>
									<path
										d='M2.66666 4.66661C2.66666 4.29842 2.96513 3.99994 3.33332 3.99994H3.99999C4.36818 3.99994 4.66666 4.29842 4.66666 4.66661C4.66666 5.0348 4.36818 5.33327 3.99999 5.33327H3.33332C2.96513 5.33327 2.66666 5.0348 2.66666 4.66661ZM5.99999 4.66661C5.99999 4.29842 6.29847 3.99994 6.66666 3.99994H12.6667C13.0348 3.99994 13.3333 4.29842 13.3333 4.66661C13.3333 5.0348 13.0348 5.33327 12.6667 5.33327H6.66666C6.29847 5.33327 5.99999 5.0348 5.99999 4.66661ZM2.66666 7.99994C2.66666 7.63175 2.96513 7.33327 3.33332 7.33327H3.99999C4.36818 7.33327 4.66666 7.63175 4.66666 7.99994C4.66666 8.36813 4.36818 8.66661 3.99999 8.66661H3.33332C2.96513 8.66661 2.66666 8.36813 2.66666 7.99994ZM5.99999 7.99994C5.99999 7.63175 6.29847 7.33327 6.66666 7.33327H12.6667C13.0348 7.33327 13.3333 7.63175 13.3333 7.99994C13.3333 8.36813 13.0348 8.66661 12.6667 8.66661H6.66666C6.29847 8.66661 5.99999 8.36813 5.99999 7.99994ZM2.66666 11.3333C2.66666 10.9651 2.96513 10.6666 3.33332 10.6666H3.99999C4.36818 10.6666 4.66666 10.9651 4.66666 11.3333C4.66666 11.7015 4.36818 11.9999 3.99999 11.9999H3.33332C2.96513 11.9999 2.66666 11.7015 2.66666 11.3333ZM5.99999 11.3333C5.99999 10.9651 6.29847 10.6666 6.66666 10.6666H12.6667C13.0348 10.6666 13.3333 10.9651 13.3333 11.3333C13.3333 11.7015 13.0348 11.9999 12.6667 11.9999H6.66666C6.29847 11.9999 5.99999 11.7015 5.99999 11.3333Z'
										fill='#1C1D22'
									/>
								</g>
							</svg>
							<span className='ml-1 text-gray' onClick={toggleModal}>
								Progress
							</span>
						</div>
						<div className='task__progress-steps cursor-pointer'>
							<span>7/10</span>
						</div>
					</div>
					<div className='task__progressbar bg-grayLite'>
						<div className='task__progressline bg-orange'></div>
					</div>
				</div>
				<div className='task__footer pt-6 flex justify-between'>
					<div className='task__dedline'>
						<span
							className={`${
								colors[selectedColor] === 'Gray' ? 'bg-grayLite' : ''
							} 
							${colors[selectedColor] === 'Orange' ? 'bg-orangeLite text-orange' : ''}
							${colors[selectedColor] === 'Green' ? 'bg-greenLite text-green' : ''}
							${colors[selectedColor] === 'Red' ? 'bg-red text-powerRed' : ''}
							py-1 px-2 rounded text-gray cursor-default`}
						>
							{deadline}
						</span>
					</div>
					<div className='task__chat flex items-center cursor-pointer'>
						<svg
							width='18'
							height='18'
							viewBox='0 0 18 18'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<g opacity='0.5'>
								<path
									d='M1.5 4.5C1.5 3.67157 2.17157 3 3 3H15C15.8284 3 16.5 3.67157 16.5 4.5V12.75C16.5 13.5784 15.8284 14.25 15 14.25H11.5607L9.53033 16.2803C9.23744 16.5732 8.76256 16.5732 8.46967 16.2803L6.43934 14.25H3C2.17157 14.25 1.5 13.5784 1.5 12.75V4.5ZM15 4.5H3V12.75H6.75C6.94891 12.75 7.13968 12.829 7.28033 12.9697L9 14.6893L10.7197 12.9697C10.8603 12.829 11.0511 12.75 11.25 12.75H15V4.5ZM4.5 7.125C4.5 6.71079 4.83579 6.375 5.25 6.375H12.75C13.1642 6.375 13.5 6.71079 13.5 7.125C13.5 7.53921 13.1642 7.875 12.75 7.875H5.25C4.83579 7.875 4.5 7.53921 4.5 7.125ZM4.5 10.125C4.5 9.71079 4.83579 9.375 5.25 9.375H9.75C10.1642 9.375 10.5 9.71079 10.5 10.125C10.5 10.5392 10.1642 10.875 9.75 10.875H5.25C4.83579 10.875 4.5 10.5392 4.5 10.125Z'
									fill='#1C1D22'
								/>
							</g>
						</svg>
						<span className='ml-1'>0</span>
					</div>
				</div>
			</div>
		</>
	)
}
