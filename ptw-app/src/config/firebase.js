import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyAW5g_aLf8SIcYOUrq9b2s8fCk4UsLY1Z4',
	authDomain: 'ptw-project-9c36b.firebaseapp.com',
	projectId: 'ptw-project-9c36b',
	storageBucket: 'ptw-project-9c36b.appspot.com',
	messagingSenderId: '634491058445',
	appId: '1:634491058445:web:16c4673380b095da9bd844',
	measurementId: 'G-CMV5F18YMV'
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
