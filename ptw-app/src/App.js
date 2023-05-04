import React, { useEffect, useState } from 'react'
import AdvancedMenu from './components/AdvancedMenu'
import SideMenu from './components/SideMenu'
import Auth from './components/Auth'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Calendar from './pages/calendar'
import { Route, Routes } from 'react-router-dom'
import Projects from './pages/projects'
import Account from './pages/account'
import Statistics from './pages/statistics'
import Options from './pages/options'

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
			<div className={`App flex ${theme ? 'darkmode' : ''}`}>
				<SideMenu />
				<AdvancedMenu changeTheme={changeTheme} theme={theme} />
				<div className='grow py-8 px-8'>
					<Routes>
						<Route path='/' element={<Projects />} />
						<Route path='/account' element={<Account />} />
						<Route path='/calendar' element={<Calendar />} />
						<Route path='/statistics' element={<Statistics />} />
						<Route path='/options' element={<Options />} />
					</Routes>
				</div>
			</div>
		</DndProvider>
	)
}

export default App
