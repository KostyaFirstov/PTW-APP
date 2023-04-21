import React from 'react'

export default function SideMenu() {
	return (
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
	)
}
