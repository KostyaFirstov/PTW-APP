import React, { useEffect, useState } from 'react'
import Home from './components/Home'
import AdvancedMenu from './components/AdvancedMenu'
import SideMenu from './components/SideMenu'
import Auth from './components/Auth'

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

	return (
		<div className={theme ? 'App flex darkmode' : 'App flex'}>
			<SideMenu />
			<AdvancedMenu changeTheme={changeTheme} theme={theme} />
			<Home />
			{/* <Auth /> */}
		</div>
	)
}

export default App
