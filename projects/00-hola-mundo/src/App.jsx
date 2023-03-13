import React from 'react'

import './app.css'
import TwitterFollowCard from './components/TwitterFollowCard'

export const App = () => {
	return (
		<>
			<TwitterFollowCard username="r4nu54" name="Raúl Núñez" />
			<TwitterFollowCard username="midudev" name="Miguel Ángle Durán" />
			<TwitterFollowCard username="carlosazaustre" name="Carlos Azaustre" />
		</>
	)
}
