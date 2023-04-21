import React from 'react'

export default function Task({ title, desc, deadline }) {
	return (
		<div className='working__task bg-white border-2 border-grayLite rounded-sm p-4 cursor-grabbing'>
			<div className='task__header flex items-center justify-between pb-2'>
				<div className='task__info'>
					<div className='task__name text-xl font-semibold'>{title}</div>
					<div className='task__desc text-gray'>{desc}</div>
				</div>
				<div className='task__options cursor-pointer'>
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
						<span className='ml-1 text-gray'>Progress</span>
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
					<span className='bg-grayLite py-1 px-2 rounded text-gray cursor-default'>
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
	)
}
