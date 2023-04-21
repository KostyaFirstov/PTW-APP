import React from 'react'

export default function AdvancedMenu({ theme, changeTheme }) {
	return (
		<div className='advanced-menu flex-none flex flex-col py-8 px-4 place-content-between'>
			<div className='advanced-menu__header'>
				<div className='advanced-menu__header flex place-content-between'>
					<h1 className='advanced-menu__title text-4xl'>Projects</h1>
					<button className='advanced-menu__btn'>
						<svg
							width='28'
							height='28'
							viewBox='0 0 28 28'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<circle
								cx='14'
								cy='14'
								r='14'
								fill='#1C1D22'
								fillOpacity='0.08'
							/>
							<g opacity='0.4'>
								<path
									d='M18 14L10 14'
									stroke='#1C1D22'
									strokeWidth='2'
									strokeLinecap='round'
								/>
								<path
									d='M14 18L14 10'
									stroke='#1C1D22'
									strokeWidth='2'
									strokeLinecap='round'
								/>
							</g>
						</svg>
					</button>
				</div>
				<div className='advanced-menu__links'>
					<div className='advanced-menu__tab flex items-center justify-between text-2xl'>
						<span>Team</span>
						<svg
							width='6'
							height='10'
							viewBox='0 0 6 10'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M1 1L5 5L1 9'
								stroke='#1C1D22'
								strokeOpacity='0.5'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</div>
					<div className='advanced-menu__tab flex items-center justify-between text-2xl'>
						<span>Projects</span>
						<svg
							width='6'
							height='10'
							viewBox='0 0 6 10'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M1 1L5 5L1 9'
								stroke='#1C1D22'
								strokeOpacity='0.5'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</div>
					<div className='advanced-menu__tab flex items-center justify-between text-2xl'>
						<span>Tasks</span>
						<svg
							width='6'
							height='10'
							viewBox='0 0 6 10'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M1 1L5 5L1 9'
								stroke='#1C1D22'
								strokeOpacity='0.5'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</div>
					<div className='advanced-menu__tab flex items-center justify-between text-2xl'>
						<span>Reminders</span>
						<svg
							width='6'
							height='10'
							viewBox='0 0 6 10'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M1 1L5 5L1 9'
								stroke='#1C1D22'
								strokeOpacity='0.5'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</div>
					<div className='advanced-menu__tab flex items-center justify-between text-2xl'>
						<span>Messengers</span>
						<svg
							width='6'
							height='10'
							viewBox='0 0 6 10'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M1 1L5 5L1 9'
								stroke='#1C1D22'
								strokeOpacity='0.5'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</div>
				</div>
			</div>
			<div className='advanced-menu__theme flex place-content-between bg-grayLite rounded p-2'>
				<div
					className='advanced-menu__theme-item active advanced-menu__theme-light flex items-center rounded-normal py-1 px-7'
					onClick={() => changeTheme('light')}
				>
					<svg
						width='20'
						height='20'
						viewBox='0 0 20 20'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M10 1.66669C10.4602 1.66669 10.8333 2.03978 10.8333 2.50002V3.33335C10.8333 3.79359 10.4602 4.16669 10 4.16669C9.53977 4.16669 9.16667 3.79359 9.16667 3.33335V2.50002C9.16667 2.03978 9.53977 1.66669 10 1.66669ZM15.8926 4.10746C16.218 4.43289 16.218 4.96053 15.8926 5.28597L15.3033 5.87522C14.9779 6.20066 14.4503 6.20066 14.1248 5.87522C13.7994 5.54979 13.7994 5.02215 14.1248 4.69671L14.7141 4.10746C15.0395 3.78202 15.5672 3.78202 15.8926 4.10746ZM4.10744 4.10746C4.43288 3.78202 4.96052 3.78202 5.28595 4.10746L5.87521 4.69671C6.20065 5.02215 6.20065 5.54979 5.87521 5.87523C5.54977 6.20066 5.02214 6.20066 4.6967 5.87523L4.10744 5.28597C3.78201 4.96053 3.78201 4.4329 4.10744 4.10746ZM10 6.66669C8.15905 6.66669 6.66667 8.15907 6.66667 10C6.66667 11.841 8.15905 13.3334 10 13.3334C11.841 13.3334 13.3333 11.841 13.3333 10C13.3333 8.15907 11.841 6.66669 10 6.66669ZM5 10C5 7.2386 7.23858 5.00002 10 5.00002C12.7614 5.00002 15 7.2386 15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10ZM1.66667 10C1.66667 9.53978 2.03977 9.16669 2.5 9.16669H3.33334C3.79358 9.16669 4.16667 9.53978 4.16667 10C4.16667 10.4603 3.79358 10.8334 3.33334 10.8334H2.5C2.03977 10.8334 1.66667 10.4603 1.66667 10ZM15.8333 10C15.8333 9.53978 16.2064 9.16669 16.6667 9.16669H17.5C17.9602 9.16669 18.3333 9.53978 18.3333 10C18.3333 10.4603 17.9602 10.8334 17.5 10.8334H16.6667C16.2064 10.8334 15.8333 10.4603 15.8333 10ZM4.6967 14.1248C5.02214 13.7994 5.54977 13.7994 5.87521 14.1248C6.20065 14.4502 6.20065 14.9779 5.87521 15.3033L5.28595 15.8926C4.96052 16.218 4.43288 16.218 4.10744 15.8926C3.78201 15.5671 3.78201 15.0395 4.10744 14.7141L4.6967 14.1248ZM14.1248 15.3033C13.7994 14.9779 13.7994 14.4502 14.1248 14.1248C14.4503 13.7994 14.9779 13.7994 15.3033 14.1248L15.8926 14.7141C16.218 15.0395 16.218 15.5671 15.8926 15.8926C15.5672 16.218 15.0395 16.218 14.7141 15.8926L14.1248 15.3033ZM10 15.8334C10.4602 15.8334 10.8333 16.2064 10.8333 16.6667V17.5C10.8333 17.9603 10.4602 18.3334 10 18.3334C9.53977 18.3334 9.16667 17.9603 9.16667 17.5V16.6667C9.16667 16.2064 9.53977 15.8334 10 15.8334Z'
							fill='#1C1D22'
						/>
					</svg>
					<span className='ml-2'>Light</span>
				</div>
				<div
					className='advanced-menu__theme-item advanced-menu__theme-dark flex items-center rounded-normal py-1 px-7'
					onClick={() => changeTheme('dark')}
				>
					<svg
						width='20'
						height='20'
						viewBox='0 0 20 20'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<g opacity='1'>
							<path
								d='M7.80064 2.7441C8.05491 2.99837 8.11741 3.38706 7.95565 3.70821C7.5339 4.54559 7.29601 5.49197 7.29601 6.49632C7.29601 9.92474 10.0753 12.704 13.5037 12.704C14.508 12.704 15.4544 12.4661 16.2918 12.0444C16.613 11.8826 17.0017 11.9451 17.2559 12.1994C17.5102 12.4536 17.5727 12.8423 17.4109 13.1635C16.1163 15.7339 13.4524 17.5 10.3744 17.5C6.02547 17.5 2.5 13.9746 2.5 9.62567C2.5 6.54767 4.26617 3.88368 6.83653 2.58909C7.15769 2.42734 7.54638 2.48983 7.80064 2.7441ZM5.68475 5.55802C4.73864 6.64786 4.16667 8.07027 4.16667 9.62567C4.16667 13.0541 6.94594 15.8334 10.3744 15.8334C11.9298 15.8334 13.3522 15.2614 14.442 14.3153C14.1342 14.3519 13.8211 14.3707 13.5037 14.3707C9.15481 14.3707 5.62934 10.8452 5.62934 6.49632C5.62934 6.17895 5.64816 5.86581 5.68475 5.55802Z'
								fill='#1C1D22'
							/>
						</g>
					</svg>
					<span className='ml-2'>Dark</span>
				</div>
				<div
					className={
						theme
							? 'advanced-menu__theme-scrollbar full'
							: 'advanced-menu__theme-scrollbar'
					}
				></div>
			</div>
		</div>
	)
}
