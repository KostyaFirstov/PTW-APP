import React from 'react'

export default function Modal({ toggleModal, children }) {
	return (
		<div
			className='modal'
			onClick={event => event.currentTarget === event.target && toggleModal()}
		>
			<div className='modal__container rounded relative'>
				{children}
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
