import React from 'react'
import Template from './Template'

export default function Home() {
	return (
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
				<Template title='To do (4)' />
			</div>
		</div>
	)
}
