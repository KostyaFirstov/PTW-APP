import React from 'react'

export default function ErrorProduct({ error }) {
	return (
		<div>
			<p className='bg-red-400 text-center'>{error}</p>
		</div>
	)
}
