import React, { useEffect, useState } from 'react'
import Home from './components/Home'
import AdvancedMenu from './components/AdvancedMenu'
import SideMenu from './components/SideMenu'
import Auth from './components/Auth'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

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
		<DndProvider backend={HTML5Backend}>
			<div className={theme ? 'App flex darkmode' : 'App flex'}>
				<SideMenu />
				<AdvancedMenu changeTheme={changeTheme} theme={theme} />
				<Home />
				{/* <Auth /> */}
			</div>
		</DndProvider>
	)
}

export default App
