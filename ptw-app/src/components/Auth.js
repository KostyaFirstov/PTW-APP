import React from 'react'
import { auth, googleProvider } from '../config/firebase'
import {
	createUserWithEmailAndPassword,
	signInWithPopup,
	signOut
} from 'firebase/auth'
import { useForm } from 'react-hook-form'

export default function Auth() {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm()

	const onSubmit = async ({ email, password }) => {
		try {
			await createUserWithEmailAndPassword(auth, email, password)
		} catch (error) {
			alert(error)
		}
	}

	const signInWhithGoogle = async () => {
		try {
			await signInWithPopup(auth, googleProvider)
		} catch (error) {
			alert(error)
		}
	}

	console.log(auth?.currentUser?.email)

	const logout = async () => {
		try {
			await signOut(auth)
		} catch (error) {
			alert(error)
		}
	}

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					placeholder='Email...'
					{...register('email', {
						required: 'Email is require field'
					})}
				/>
				<input
					placeholder='Password...'
					{...register('password', {
						required: 'Password is require field'
					})}
				/>
				<button>Sign In</button>
			</form>
			<button onClick={signInWhithGoogle}>Sign In With Google!</button>

			<button onClick={logout}>Logout</button>
		</div>
	)
}
