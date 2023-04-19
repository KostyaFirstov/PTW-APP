import React, { useEffect, useState } from 'react'

function App() {
	const [theme, setTheme] = useState(() => {
		return JSON.parse(localStorage.getItem('theme:')) || false
	})

	const changeTheme = mode => {
		setTheme(mode === 'dark' ? true : false)
	}

	useEffect(() => {
		localStorage.setItem('theme:', JSON.stringify(theme))
	}, [theme])

	console.log(localStorage)

	return (
		<div className={theme ? 'App flex darkmode' : 'App flex'}>
			<div className='side-menu flex-none w-20 flex bg-dark flex-col place-items-center py-8 place-content-between'>
				<div className='header'>
					<div className='logo'>
						<svg
							width='53'
							height='32'
							viewBox='0 0 53 32'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<circle cx='41' cy='3' r='3' fill='white' fillOpacity='0.2' />
							<circle cx='27' cy='3' r='3' fill='white' fillOpacity='0.5' />
							<circle cx='13' cy='3' r='3' fill='white' fillOpacity='1' />
							<path
								d='M8.016 13.2C9.568 13.2 10.784 13.36 11.664 13.68C12.544 14 13.168 14.552 13.536 15.336C13.92 16.12 14.112 17.216 14.112 18.624C14.112 20.032 13.928 21.128 13.56 21.912C13.208 22.696 12.624 23.248 11.808 23.568C10.992 23.872 9.888 24.024 8.496 24.024C7.76 24.024 7.04 23.992 6.336 23.928C5.632 23.864 4.976 23.784 4.368 23.688C3.76 23.592 3.24 23.496 2.808 23.4C2.376 23.288 2.08 23.184 1.92 23.088L1.992 21.264C2.936 21.264 3.912 21.264 4.92 21.264C5.944 21.264 6.952 21.264 7.944 21.264C8.584 21.248 9.08 21.168 9.432 21.024C9.8 20.88 10.056 20.616 10.2 20.232C10.36 19.848 10.44 19.312 10.44 18.624C10.44 17.92 10.36 17.376 10.2 16.992C10.056 16.608 9.8 16.344 9.432 16.2C9.08 16.04 8.584 15.96 7.944 15.96C6.472 15.96 5.208 15.968 4.152 15.984C3.096 16 2.384 16.032 2.016 16.08L1.656 13.44C2.328 13.36 2.96 13.304 3.552 13.272C4.144 13.24 4.784 13.224 5.472 13.224C6.176 13.208 7.024 13.2 8.016 13.2ZM5.328 13.44L5.328 30H1.656L1.656 13.44H5.328ZM23.8839 13.44L23.8839 30H20.2119L20.2119 13.44H23.8839ZM28.8759 13.44V16.32L15.2439 16.32L15.2439 13.44H28.8759ZM52.0734 13.44L49.3614 28.992C49.3134 29.28 49.1694 29.52 48.9294 29.712C48.6894 29.904 48.4014 30 48.0654 30H44.6334C44.3134 30 44.0254 29.904 43.7694 29.712C43.5294 29.52 43.3854 29.272 43.3374 28.968L41.4894 18.192C41.4414 17.824 41.3934 17.464 41.3454 17.112C41.2974 16.744 41.2494 16.384 41.2014 16.032H40.7454C40.7134 16.384 40.6734 16.744 40.6254 17.112C40.5774 17.48 40.5294 17.84 40.4814 18.192L38.6334 28.968C38.5854 29.272 38.4334 29.52 38.1774 29.712C37.9374 29.904 37.6574 30 37.3374 30H33.8814C33.5614 30 33.2734 29.904 33.0174 29.712C32.7774 29.52 32.6334 29.28 32.5854 28.992L29.8734 13.44L33.5694 13.44L35.2974 24.96C35.3454 25.312 35.3854 25.688 35.4174 26.088C35.4494 26.488 35.4814 26.912 35.5134 27.36H35.9694C36.0334 26.976 36.0974 26.576 36.1614 26.16C36.2414 25.728 36.3054 25.328 36.3534 24.96L38.1774 14.568C38.2254 14.232 38.3694 13.96 38.6094 13.752C38.8494 13.544 39.1374 13.44 39.4734 13.44H42.4974C42.8334 13.44 43.1134 13.544 43.3374 13.752C43.5774 13.96 43.7214 14.232 43.7694 14.568L45.6174 24.984C45.6814 25.368 45.7454 25.768 45.8094 26.184C45.8734 26.584 45.9294 26.976 45.9774 27.36H46.4574C46.4894 26.976 46.5214 26.576 46.5534 26.16C46.6014 25.744 46.6414 25.36 46.6734 25.008L48.3774 13.44H52.0734Z'
								fill='white'
							/>
						</svg>
					</div>
					<ul className='menu'>
						<li className='menu__link active'>
							<svg
								width='22'
								height='22'
								viewBox='0 0 22 22'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M2.75 4.58333C2.75 3.57081 3.57081 2.75 4.58333 2.75H8.25C9.26252 2.75 10.0833 3.57081 10.0833 4.58333V8.25C10.0833 9.26252 9.26252 10.0833 8.25 10.0833H4.58333C3.57081 10.0833 2.75 9.26252 2.75 8.25V4.58333ZM8.25 4.58333H4.58333V8.25H8.25V4.58333ZM11.9167 4.58333C11.9167 3.57081 12.7375 2.75 13.75 2.75H17.4167C18.4292 2.75 19.25 3.57081 19.25 4.58333V8.25C19.25 9.26252 18.4292 10.0833 17.4167 10.0833H13.75C12.7375 10.0833 11.9167 9.26252 11.9167 8.25V4.58333ZM17.4167 4.58333H13.75V8.25H17.4167V4.58333ZM2.75 13.75C2.75 12.7375 3.57081 11.9167 4.58333 11.9167H8.25C9.26252 11.9167 10.0833 12.7375 10.0833 13.75V17.4167C10.0833 18.4292 9.26252 19.25 8.25 19.25H4.58333C3.57081 19.25 2.75 18.4292 2.75 17.4167V13.75ZM8.25 13.75H4.58333V17.4167H8.25V13.75ZM11.9167 13.75C11.9167 12.7375 12.7375 11.9167 13.75 11.9167H17.4167C18.4292 11.9167 19.25 12.7375 19.25 13.75V17.4167C19.25 18.4292 18.4292 19.25 17.4167 19.25H13.75C12.7375 19.25 11.9167 18.4292 11.9167 17.4167V13.75ZM17.4167 13.75H13.75V17.4167H17.4167V13.75Z'
									fill='white'
								/>
							</svg>
						</li>
						<li className='menu__link hoverMenuLink'>
							<svg
								width='22'
								height='22'
								viewBox='0 0 22 22'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M11 3.66666C8.97496 3.66666 7.33333 5.30828 7.33333 7.33333C7.33333 9.35837 8.97496 11 11 11C13.025 11 14.6667 9.35837 14.6667 7.33333C14.6667 5.30828 13.025 3.66666 11 3.66666ZM5.5 7.33333C5.5 4.29576 7.96243 1.83333 11 1.83333C14.0376 1.83333 16.5 4.29576 16.5 7.33333C16.5 10.3709 14.0376 12.8333 11 12.8333C7.96243 12.8333 5.5 10.3709 5.5 7.33333ZM7.33333 16.5C5.81455 16.5 4.58333 17.7312 4.58333 19.25C4.58333 19.7563 4.17293 20.1667 3.66667 20.1667C3.16041 20.1667 2.75 19.7563 2.75 19.25C2.75 16.7187 4.80203 14.6667 7.33333 14.6667H14.6667C17.198 14.6667 19.25 16.7187 19.25 19.25C19.25 19.7563 18.8396 20.1667 18.3333 20.1667C17.8271 20.1667 17.4167 19.7563 17.4167 19.25C17.4167 17.7312 16.1854 16.5 14.6667 16.5H7.33333Z'
									fill='white'
								/>
							</svg>
						</li>
						<li className='menu__link'>
							<svg
								width='22'
								height='22'
								viewBox='0 0 22 22'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M8.25 1.83334C8.75626 1.83334 9.16667 2.24375 9.16667 2.75001V3.66668H12.8333V2.75001C12.8333 2.24375 13.2437 1.83334 13.75 1.83334C14.2563 1.83334 14.6667 2.24375 14.6667 2.75001V3.66668H17.4167C18.4292 3.66668 19.25 4.48749 19.25 5.50001V17.4167C19.25 18.4292 18.4292 19.25 17.4167 19.25H4.58333C3.57081 19.25 2.75 18.4292 2.75 17.4167V5.50001C2.75 4.48749 3.57081 3.66668 4.58333 3.66668H7.33333V2.75001C7.33333 2.24375 7.74374 1.83334 8.25 1.83334ZM7.33333 5.50001H4.58333V8.25001H17.4167V5.50001H14.6667V6.41668C14.6667 6.92294 14.2563 7.33334 13.75 7.33334C13.2437 7.33334 12.8333 6.92294 12.8333 6.41668V5.50001H9.16667V6.41668C9.16667 6.92294 8.75626 7.33334 8.25 7.33334C7.74374 7.33334 7.33333 6.92294 7.33333 6.41668V5.50001ZM17.4167 10.0833H4.58333V17.4167H17.4167V10.0833Z'
									fill='white'
								/>
							</svg>
						</li>
						<li className='menu__link'>
							<svg
								width='22'
								height='22'
								viewBox='0 0 22 22'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M2.75 4.58333C2.75 3.57081 3.57081 2.75 4.58333 2.75H17.4167C18.4292 2.75 19.25 3.57081 19.25 4.58333V17.4167C19.25 18.4292 18.4292 19.25 17.4167 19.25H4.58333C3.57081 19.25 2.75 18.4292 2.75 17.4167V4.58333ZM17.4167 4.58333H4.58333V17.4167H17.4167V4.58333ZM11 6.41667C11.5063 6.41667 11.9167 6.82707 11.9167 7.33333V14.6667C11.9167 15.1729 11.5063 15.5833 11 15.5833C10.4937 15.5833 10.0833 15.1729 10.0833 14.6667V7.33333C10.0833 6.82707 10.4937 6.41667 11 6.41667ZM14.6667 8.25C15.1729 8.25 15.5833 8.66041 15.5833 9.16667V14.6667C15.5833 15.1729 15.1729 15.5833 14.6667 15.5833C14.1604 15.5833 13.75 15.1729 13.75 14.6667V9.16667C13.75 8.66041 14.1604 8.25 14.6667 8.25ZM7.33333 10.0833C7.83959 10.0833 8.25 10.4937 8.25 11V14.6667C8.25 15.1729 7.83959 15.5833 7.33333 15.5833C6.82707 15.5833 6.41667 15.1729 6.41667 14.6667V11C6.41667 10.4937 6.82707 10.0833 7.33333 10.0833Z'
									fill='white'
								/>
							</svg>
						</li>
						<li className='menu__link'>
							<svg
								width='22'
								height='22'
								viewBox='0 0 22 22'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M8.25 4.58333C7.74374 4.58333 7.33333 4.99374 7.33333 5.5C7.33333 6.00626 7.74374 6.41667 8.25 6.41667C8.75626 6.41667 9.16667 6.00626 9.16667 5.5C9.16667 4.99374 8.75626 4.58333 8.25 4.58333ZM5.65648 4.58333C6.034 3.51524 7.05263 2.75 8.25 2.75C9.44737 2.75 10.466 3.51524 10.8435 4.58333H17.4167C17.9229 4.58333 18.3333 4.99374 18.3333 5.5C18.3333 6.00626 17.9229 6.41667 17.4167 6.41667H10.8435C10.466 7.48476 9.44737 8.25 8.25 8.25C7.05263 8.25 6.034 7.48476 5.65648 6.41667H4.58333C4.07707 6.41667 3.66667 6.00626 3.66667 5.5C3.66667 4.99374 4.07707 4.58333 4.58333 4.58333H5.65648ZM13.75 10.0833C13.2437 10.0833 12.8333 10.4937 12.8333 11C12.8333 11.5063 13.2437 11.9167 13.75 11.9167C14.2563 11.9167 14.6667 11.5063 14.6667 11C14.6667 10.4937 14.2563 10.0833 13.75 10.0833ZM11.1565 10.0833C11.534 9.01524 12.5526 8.25 13.75 8.25C14.9474 8.25 15.966 9.01524 16.3435 10.0833H17.4167C17.9229 10.0833 18.3333 10.4937 18.3333 11C18.3333 11.5063 17.9229 11.9167 17.4167 11.9167H16.3435C15.966 12.9848 14.9474 13.75 13.75 13.75C12.5526 13.75 11.534 12.9848 11.1565 11.9167H4.58333C4.07707 11.9167 3.66667 11.5063 3.66667 11C3.66667 10.4937 4.07707 10.0833 4.58333 10.0833H11.1565ZM8.25 15.5833C7.74374 15.5833 7.33333 15.9937 7.33333 16.5C7.33333 17.0063 7.74374 17.4167 8.25 17.4167C8.75626 17.4167 9.16667 17.0063 9.16667 16.5C9.16667 15.9937 8.75626 15.5833 8.25 15.5833ZM5.65648 15.5833C6.034 14.5152 7.05263 13.75 8.25 13.75C9.44737 13.75 10.466 14.5152 10.8435 15.5833H17.4167C17.9229 15.5833 18.3333 15.9937 18.3333 16.5C18.3333 17.0063 17.9229 17.4167 17.4167 17.4167H10.8435C10.466 18.4848 9.44737 19.25 8.25 19.25C7.05263 19.25 6.034 18.4848 5.65648 17.4167H4.58333C4.07707 17.4167 3.66667 17.0063 3.66667 16.5C3.66667 15.9937 4.07707 15.5833 4.58333 15.5833H5.65648Z'
									fill='white'
								/>
							</svg>
						</li>
					</ul>
				</div>
				<div className='account'>
					<div className='menu__link'>
						<svg
							width='19'
							height='18'
							viewBox='0 0 19 18'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M8.08333 16.3333C8.08333 15.8271 7.67293 15.4167 7.16667 15.4167H2.58333V2.58333H7.16667C7.67293 2.58333 8.08333 2.17293 8.08333 1.66667C8.08333 1.1604 7.67293 0.75 7.16667 0.75H2.58333C1.57081 0.75 0.75 1.57081 0.75 2.58333V15.4167C0.75 16.4292 1.57081 17.25 2.58333 17.25H7.16667C7.67293 17.25 8.08333 16.8396 8.08333 16.3333Z'
								fill='white'
							/>
							<path
								d='M17.9041 9.64217C17.9891 9.55569 18.0534 9.45655 18.0971 9.35089C18.1416 9.2436 18.1663 9.12604 18.1667 9.00275L18.1667 9L18.1667 8.99725C18.166 8.76357 18.0765 8.53011 17.8982 8.35182L14.2315 4.68515C13.8735 4.32717 13.2931 4.32717 12.9352 4.68515C12.5772 5.04313 12.5772 5.62353 12.9352 5.98151L15.037 8.08333H6.25C5.74374 8.08333 5.33333 8.49374 5.33333 9C5.33333 9.50626 5.74374 9.91667 6.25 9.91667H15.037L12.9352 12.0185C12.5772 12.3765 12.5772 12.9569 12.9352 13.3148C13.2931 13.6728 13.8735 13.6728 14.2315 13.3148L17.8975 9.64884L17.9041 9.64217Z'
								fill='white'
							/>
						</svg>
					</div>
				</div>
			</div>
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
									stroke-opacity='0.5'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
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
									stroke-opacity='0.5'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
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
									stroke-opacity='0.5'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
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
									stroke-opacity='0.5'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
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
									stroke-opacity='0.5'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
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
			<div className='grow py-8 px-8'>
				<div className='working__header flex place-content-between items-center pb-6'>
					<div className='working__greeting text-2xl font-bold'>
						<h2>Welcome back, Vincent 👋</h2>
					</div>
					<div className='working__options flex items-center'>
						<div className='working__options'>
							<svg
								width='22'
								height='22'
								viewBox='0 0 22 22'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M9.30063 2.97745C9.57303 2.30648 10.2313 1.83334 11 1.83334C11.7687 1.83334 12.427 2.30648 12.6994 2.97745C15.4185 3.72233 17.4167 6.21115 17.4167 9.16667V13.4725L19.096 15.9915C19.2836 16.2728 19.3011 16.6345 19.1415 16.9325C18.982 17.2306 18.6714 17.4167 18.3333 17.4167H14.1758C13.9534 18.9715 12.6163 20.1667 11 20.1667C9.3837 20.1667 8.04656 18.9715 7.82416 17.4167H3.66667C3.32861 17.4167 3.01798 17.2306 2.85847 16.9325C2.69895 16.6345 2.71643 16.2728 2.90396 15.9915L4.58333 13.4725V9.16667C4.58333 6.21115 6.58151 3.72233 9.30063 2.97745ZM9.70324 17.4167C9.892 17.9507 10.4013 18.3333 11 18.3333C11.5987 18.3333 12.108 17.9507 12.2968 17.4167H9.70324ZM11 4.58334C8.4687 4.58334 6.41667 6.63536 6.41667 9.16667V13.75C6.41667 13.931 6.3631 14.1079 6.26271 14.2585L5.37948 15.5833H16.6205L15.7373 14.2585C15.6369 14.1079 15.5833 13.931 15.5833 13.75V9.16667C15.5833 6.63536 13.5313 4.58334 11 4.58334Z'
									fill='#1C1D22'
								/>
							</svg>
						</div>
						<div className='working__options flex ml-2'>
							<svg
								width='22'
								height='22'
								viewBox='0 0 22 22'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M8.25 1.83334C8.75626 1.83334 9.16667 2.24374 9.16667 2.75V3.66667H12.8333V2.75C12.8333 2.24374 13.2437 1.83334 13.75 1.83334C14.2563 1.83334 14.6667 2.24374 14.6667 2.75V3.66667H17.4167C18.4292 3.66667 19.25 4.48748 19.25 5.5V17.4167C19.25 18.4292 18.4292 19.25 17.4167 19.25H4.58333C3.57081 19.25 2.75 18.4292 2.75 17.4167V5.5C2.75 4.48748 3.57081 3.66667 4.58333 3.66667H7.33333V2.75C7.33333 2.24374 7.74374 1.83334 8.25 1.83334ZM7.33333 5.5H4.58333V8.25H17.4167V5.5H14.6667V6.41667C14.6667 6.92293 14.2563 7.33334 13.75 7.33334C13.2437 7.33334 12.8333 6.92293 12.8333 6.41667V5.5H9.16667V6.41667C9.16667 6.92293 8.75626 7.33334 8.25 7.33334C7.74374 7.33334 7.33333 6.92293 7.33333 6.41667V5.5ZM17.4167 10.0833H4.58333V17.4167H17.4167V10.0833Z'
									fill='#1C1D22'
								/>
							</svg>
							<span className='ml-2'>19 May 2022</span>
						</div>
						<div className='working__options ml-2'>
							<svg
								width='36'
								height='36'
								viewBox='0 0 36 36'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<circle cx='18' cy='18' r='18' fill='#D9D9D9' />
							</svg>
						</div>
					</div>
				</div>
				<div className='working__settings flex place-content-between py-4'>
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
						<div className='working__board ml-4'>
							<button className='flex items-center opacity-50'>
								<svg
									width='18'
									height='18'
									viewBox='0 0 18 18'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<circle
										cx='9'
										cy='9'
										r='9'
										fill='#1C1D22'
										fill-opacity='0.08'
									/>
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
								<span className='ml-2 text-xl'>Add view</span>
							</button>
						</div>
					</div>
					<div className='working__setting'>
						<button className='bg-dark py-2 px-8 rounded text-white'>
							New template
						</button>
					</div>
					<div className='working__setting-scrollbar bg-grayLite'>
						<div className='working___setting-progress bg-dark'></div>
					</div>
				</div>
				<div className='working__templates pt-6 flex gap-4'>
					<div className='working__template grow rounded p-4'>
						<div className='template__header flex justify-between items-center mb-2'>
							<div className='template__name opacity-50 text-lg'>
								<span>To do(4)</span>
							</div>
							<div className='template__add flex items-center text-lg'>
								<svg
									width='18'
									height='18'
									viewBox='0 0 18 18'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<circle
										cx='9'
										cy='9'
										r='9'
										fill='#1C1D22'
										fill-opacity='0.08'
									/>
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
								<span className='ml-2'>Add new task</span>
							</div>
						</div>
						<div className='working__task bg-white border-2 border-grayLite rounded-sm p-5'>
							<div className='task__header flex items-center justify-between pb-2'>
								<div className='task__info'>
									<div className='task__name text-xl font-semibold'>
										Design new ui presentation
									</div>
									<div className='task__desc text-gray'>Dribble marketing</div>
								</div>
								<div className='task__options'>
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
											stroke-opacity='0.1'
											stroke-width='2'
										/>
										<circle cx='17' cy='13' r='1' fill='#1C1D22' />
										<circle cx='13' cy='13' r='1' fill='#1C1D22' />
										<circle cx='9' cy='13' r='1' fill='#1C1D22' />
									</svg>
								</div>
							</div>
							<div className='task__main pb-2'>
								<div className='task__progress flex items-center justify-between'>
									<div className='task__progress-info flex items-center'>
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
										<span className='ml-1 text-gray'>Progress</span>
									</div>
									<div className='task__progress-steps'>
										<span>7/10</span>
									</div>
								</div>
								<div className='task__progressbar bg-grayLite'>
									<div className='task__progressline bg-orange'></div>
								</div>
							</div>
							<div className='task__footer pt-3 flex justify-between'>
								<div className='task__dedline'>
									<span>10 May 2023</span>
								</div>
								<div className='task__chat flex items-center'>
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
						<div className='working__task bg-white border-2 border-grayLite rounded-sm p-5'>
							<div className='task__header flex items-center justify-between pb-2'>
								<div className='task__info'>
									<div className='task__name text-xl font-semibold'>
										Design new ui presentation
									</div>
									<div className='task__desc text-gray'>Dribble marketing</div>
								</div>
								<div className='task__options'>
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
											stroke-opacity='0.1'
											stroke-width='2'
										/>
										<circle cx='17' cy='13' r='1' fill='#1C1D22' />
										<circle cx='13' cy='13' r='1' fill='#1C1D22' />
										<circle cx='9' cy='13' r='1' fill='#1C1D22' />
									</svg>
								</div>
							</div>
							<div className='task__main pb-2'>
								<div className='task__progress flex items-center justify-between'>
									<div className='task__progress-info flex items-center'>
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
										<span className='ml-1 text-gray'>Progress</span>
									</div>
									<div className='task__progress-steps'>
										<span>7/10</span>
									</div>
								</div>
								<div className='task__progressbar bg-grayLite'>
									<div className='task__progressline bg-orange'></div>
								</div>
							</div>
							<div className='task__footer pt-3 flex justify-between'>
								<div className='task__dedline'>
									<span>10 May 2023</span>
								</div>
								<div className='task__chat flex items-center'>
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
						<div className='working__task bg-white border-2 border-grayLite rounded-sm p-5'>
							<div className='task__header flex items-center justify-between pb-2'>
								<div className='task__info'>
									<div className='task__name text-xl font-semibold'>
										Design new ui presentation
									</div>
									<div className='task__desc text-gray'>Dribble marketing</div>
								</div>
								<div className='task__options'>
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
											stroke-opacity='0.1'
											stroke-width='2'
										/>
										<circle cx='17' cy='13' r='1' fill='#1C1D22' />
										<circle cx='13' cy='13' r='1' fill='#1C1D22' />
										<circle cx='9' cy='13' r='1' fill='#1C1D22' />
									</svg>
								</div>
							</div>
							<div className='task__main pb-2'>
								<div className='task__progress flex items-center justify-between'>
									<div className='task__progress-info flex items-center'>
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
										<span className='ml-1 text-gray'>Progress</span>
									</div>
									<div className='task__progress-steps'>
										<span>7/10</span>
									</div>
								</div>
								<div className='task__progressbar bg-grayLite'>
									<div className='task__progressline bg-orange'></div>
								</div>
							</div>
							<div className='task__footer pt-3 flex justify-between'>
								<div className='task__dedline'>
									<span>10 May 2023</span>
								</div>
								<div className='task__chat flex items-center'>
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
						<div className='working__task bg-white border-2 border-grayLite rounded-sm p-5'>
							<div className='task__header flex items-center justify-between pb-2'>
								<div className='task__info'>
									<div className='task__name text-xl font-semibold'>
										Design new ui presentation
									</div>
									<div className='task__desc text-gray'>Dribble marketing</div>
								</div>
								<div className='task__options'>
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
											stroke-opacity='0.1'
											stroke-width='2'
										/>
										<circle cx='17' cy='13' r='1' fill='#1C1D22' />
										<circle cx='13' cy='13' r='1' fill='#1C1D22' />
										<circle cx='9' cy='13' r='1' fill='#1C1D22' />
									</svg>
								</div>
							</div>
							<div className='task__main pb-2'>
								<div className='task__progress flex items-center justify-between'>
									<div className='task__progress-info flex items-center'>
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
										<span className='ml-1 text-gray'>Progress</span>
									</div>
									<div className='task__progress-steps'>
										<span>7/10</span>
									</div>
								</div>
								<div className='task__progressbar bg-grayLite'>
									<div className='task__progressline bg-orange'></div>
								</div>
							</div>
							<div className='task__footer pt-3 flex justify-between'>
								<div className='task__dedline'>
									<span>10 May 2023</span>
								</div>
								<div className='task__chat flex items-center'>
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
					</div>
					<div className='working__template grow rounded p-4'>
						<div className='template__header flex justify-between items-center mb-2'>
							<div className='template__name opacity-50 text-lg'>
								<span>To do(4)</span>
							</div>
							<div className='template__add flex items-center text-lg'>
								<svg
									width='18'
									height='18'
									viewBox='0 0 18 18'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<circle
										cx='9'
										cy='9'
										r='9'
										fill='#1C1D22'
										fill-opacity='0.08'
									/>
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
								<span className='ml-2'>Add new task</span>
							</div>
						</div>
						<div className='working__task bg-white border-2 border-grayLite rounded-sm p-5'>
							<div className='task__header flex items-center justify-between pb-2'>
								<div className='task__info'>
									<div className='task__name text-xl font-semibold'>
										Design new ui presentation
									</div>
									<div className='task__desc text-gray'>Dribble marketing</div>
								</div>
								<div className='task__options'>
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
											stroke-opacity='0.1'
											stroke-width='2'
										/>
										<circle cx='17' cy='13' r='1' fill='#1C1D22' />
										<circle cx='13' cy='13' r='1' fill='#1C1D22' />
										<circle cx='9' cy='13' r='1' fill='#1C1D22' />
									</svg>
								</div>
							</div>
							<div className='task__main pb-2'>
								<div className='task__progress flex items-center justify-between'>
									<div className='task__progress-info flex items-center'>
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
										<span className='ml-1 text-gray'>Progress</span>
									</div>
									<div className='task__progress-steps'>
										<span>7/10</span>
									</div>
								</div>
								<div className='task__progressbar bg-grayLite'>
									<div className='task__progressline bg-orange'></div>
								</div>
							</div>
							<div className='task__footer pt-3 flex justify-between'>
								<div className='task__dedline'>
									<span>10 May 2023</span>
								</div>
								<div className='task__chat flex items-center'>
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
						<div className='working__task bg-white border-2 border-grayLite rounded-sm p-5'>
							<div className='task__header flex items-center justify-between pb-2'>
								<div className='task__info'>
									<div className='task__name text-xl font-semibold'>
										Design new ui presentation
									</div>
									<div className='task__desc text-gray'>Dribble marketing</div>
								</div>
								<div className='task__options'>
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
											stroke-opacity='0.1'
											stroke-width='2'
										/>
										<circle cx='17' cy='13' r='1' fill='#1C1D22' />
										<circle cx='13' cy='13' r='1' fill='#1C1D22' />
										<circle cx='9' cy='13' r='1' fill='#1C1D22' />
									</svg>
								</div>
							</div>
							<div className='task__main pb-2'>
								<div className='task__progress flex items-center justify-between'>
									<div className='task__progress-info flex items-center'>
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
										<span className='ml-1 text-gray'>Progress</span>
									</div>
									<div className='task__progress-steps'>
										<span>7/10</span>
									</div>
								</div>
								<div className='task__progressbar bg-grayLite'>
									<div className='task__progressline bg-orange'></div>
								</div>
							</div>
							<div className='task__footer pt-3 flex justify-between'>
								<div className='task__dedline'>
									<span>10 May 2023</span>
								</div>
								<div className='task__chat flex items-center'>
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
						<div className='working__task bg-white border-2 border-grayLite rounded-sm p-5'>
							<div className='task__header flex items-center justify-between pb-2'>
								<div className='task__info'>
									<div className='task__name text-xl font-semibold'>
										Design new ui presentation
									</div>
									<div className='task__desc text-gray'>Dribble marketing</div>
								</div>
								<div className='task__options'>
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
											stroke-opacity='0.1'
											stroke-width='2'
										/>
										<circle cx='17' cy='13' r='1' fill='#1C1D22' />
										<circle cx='13' cy='13' r='1' fill='#1C1D22' />
										<circle cx='9' cy='13' r='1' fill='#1C1D22' />
									</svg>
								</div>
							</div>
							<div className='task__main pb-2'>
								<div className='task__progress flex items-center justify-between'>
									<div className='task__progress-info flex items-center'>
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
										<span className='ml-1 text-gray'>Progress</span>
									</div>
									<div className='task__progress-steps'>
										<span>7/10</span>
									</div>
								</div>
								<div className='task__progressbar bg-grayLite'>
									<div className='task__progressline bg-orange'></div>
								</div>
							</div>
							<div className='task__footer pt-3 flex justify-between'>
								<div className='task__dedline'>
									<span>10 May 2023</span>
								</div>
								<div className='task__chat flex items-center'>
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
						<div className='working__task bg-white border-2 border-grayLite rounded-sm p-5'>
							<div className='task__header flex items-center justify-between pb-2'>
								<div className='task__info'>
									<div className='task__name text-xl font-semibold'>
										Design new ui presentation
									</div>
									<div className='task__desc text-gray'>Dribble marketing</div>
								</div>
								<div className='task__options'>
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
											stroke-opacity='0.1'
											stroke-width='2'
										/>
										<circle cx='17' cy='13' r='1' fill='#1C1D22' />
										<circle cx='13' cy='13' r='1' fill='#1C1D22' />
										<circle cx='9' cy='13' r='1' fill='#1C1D22' />
									</svg>
								</div>
							</div>
							<div className='task__main pb-2'>
								<div className='task__progress flex items-center justify-between'>
									<div className='task__progress-info flex items-center'>
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
										<span className='ml-1 text-gray'>Progress</span>
									</div>
									<div className='task__progress-steps'>
										<span>7/10</span>
									</div>
								</div>
								<div className='task__progressbar bg-grayLite'>
									<div className='task__progressline bg-orange'></div>
								</div>
							</div>
							<div className='task__footer pt-3 flex justify-between'>
								<div className='task__dedline'>
									<span>10 May 2023</span>
								</div>
								<div className='task__chat flex items-center'>
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
					</div>
					<div className='working__template grow rounded p-4'>
						<div className='template__header flex justify-between items-center mb-2'>
							<div className='template__name opacity-50 text-lg'>
								<span>To do(4)</span>
							</div>
							<div className='template__add flex items-center text-lg'>
								<svg
									width='18'
									height='18'
									viewBox='0 0 18 18'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<circle
										cx='9'
										cy='9'
										r='9'
										fill='#1C1D22'
										fill-opacity='0.08'
									/>
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
								<span className='ml-2'>Add new task</span>
							</div>
						</div>
						<div className='working__task bg-white border-2 border-grayLite rounded-sm p-5'>
							<div className='task__header flex items-center justify-between pb-2'>
								<div className='task__info'>
									<div className='task__name text-xl font-semibold'>
										Design new ui presentation
									</div>
									<div className='task__desc text-gray'>Dribble marketing</div>
								</div>
								<div className='task__options'>
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
											stroke-opacity='0.1'
											stroke-width='2'
										/>
										<circle cx='17' cy='13' r='1' fill='#1C1D22' />
										<circle cx='13' cy='13' r='1' fill='#1C1D22' />
										<circle cx='9' cy='13' r='1' fill='#1C1D22' />
									</svg>
								</div>
							</div>
							<div className='task__main pb-2'>
								<div className='task__progress flex items-center justify-between'>
									<div className='task__progress-info flex items-center'>
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
										<span className='ml-1 text-gray'>Progress</span>
									</div>
									<div className='task__progress-steps'>
										<span>7/10</span>
									</div>
								</div>
								<div className='task__progressbar bg-grayLite'>
									<div className='task__progressline bg-orange'></div>
								</div>
							</div>
							<div className='task__footer pt-3 flex justify-between'>
								<div className='task__dedline'>
									<span>10 May 2023</span>
								</div>
								<div className='task__chat flex items-center'>
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
						<div className='working__task bg-white border-2 border-grayLite rounded-sm p-5'>
							<div className='task__header flex items-center justify-between pb-2'>
								<div className='task__info'>
									<div className='task__name text-xl font-semibold'>
										Design new ui presentation
									</div>
									<div className='task__desc text-gray'>Dribble marketing</div>
								</div>
								<div className='task__options'>
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
											stroke-opacity='0.1'
											stroke-width='2'
										/>
										<circle cx='17' cy='13' r='1' fill='#1C1D22' />
										<circle cx='13' cy='13' r='1' fill='#1C1D22' />
										<circle cx='9' cy='13' r='1' fill='#1C1D22' />
									</svg>
								</div>
							</div>
							<div className='task__main pb-2'>
								<div className='task__progress flex items-center justify-between'>
									<div className='task__progress-info flex items-center'>
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
										<span className='ml-1 text-gray'>Progress</span>
									</div>
									<div className='task__progress-steps'>
										<span>7/10</span>
									</div>
								</div>
								<div className='task__progressbar bg-grayLite'>
									<div className='task__progressline bg-orange'></div>
								</div>
							</div>
							<div className='task__footer pt-3 flex justify-between'>
								<div className='task__dedline'>
									<span>10 May 2023</span>
								</div>
								<div className='task__chat flex items-center'>
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
						<div className='working__task bg-white border-2 border-grayLite rounded-sm p-5'>
							<div className='task__header flex items-center justify-between pb-2'>
								<div className='task__info'>
									<div className='task__name text-xl font-semibold'>
										Design new ui presentation
									</div>
									<div className='task__desc text-gray'>Dribble marketing</div>
								</div>
								<div className='task__options'>
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
											stroke-opacity='0.1'
											stroke-width='2'
										/>
										<circle cx='17' cy='13' r='1' fill='#1C1D22' />
										<circle cx='13' cy='13' r='1' fill='#1C1D22' />
										<circle cx='9' cy='13' r='1' fill='#1C1D22' />
									</svg>
								</div>
							</div>
							<div className='task__main pb-2'>
								<div className='task__progress flex items-center justify-between'>
									<div className='task__progress-info flex items-center'>
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
										<span className='ml-1 text-gray'>Progress</span>
									</div>
									<div className='task__progress-steps'>
										<span>7/10</span>
									</div>
								</div>
								<div className='task__progressbar bg-grayLite'>
									<div className='task__progressline bg-orange'></div>
								</div>
							</div>
							<div className='task__footer pt-3 flex justify-between'>
								<div className='task__dedline'>
									<span>10 May 2023</span>
								</div>
								<div className='task__chat flex items-center'>
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
						<div className='working__task bg-white border-2 border-grayLite rounded-sm p-5'>
							<div className='task__header flex items-center justify-between pb-2'>
								<div className='task__info'>
									<div className='task__name text-xl font-semibold'>
										Design new ui presentation
									</div>
									<div className='task__desc text-gray'>Dribble marketing</div>
								</div>
								<div className='task__options'>
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
											stroke-opacity='0.1'
											stroke-width='2'
										/>
										<circle cx='17' cy='13' r='1' fill='#1C1D22' />
										<circle cx='13' cy='13' r='1' fill='#1C1D22' />
										<circle cx='9' cy='13' r='1' fill='#1C1D22' />
									</svg>
								</div>
							</div>
							<div className='task__main pb-2'>
								<div className='task__progress flex items-center justify-between'>
									<div className='task__progress-info flex items-center'>
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
										<span className='ml-1 text-gray'>Progress</span>
									</div>
									<div className='task__progress-steps'>
										<span>7/10</span>
									</div>
								</div>
								<div className='task__progressbar bg-grayLite'>
									<div className='task__progressline bg-orange'></div>
								</div>
							</div>
							<div className='task__footer pt-3 flex justify-between'>
								<div className='task__dedline'>
									<span>10 May 2023</span>
								</div>
								<div className='task__chat flex items-center'>
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
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
