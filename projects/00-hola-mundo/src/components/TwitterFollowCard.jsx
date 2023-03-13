import React, { useState } from 'react'
import './TwitterFollowCard.css'
// const [folowing, setFolowing] = useState(false)

const TwitterFollowCard = ({ username, name, isFollowing }) => {
	return (
		<article className="tw-followCard">
			<header className="tw-followCard-header">
				<img className="tw-followCard-avatar" src={`https://unavatar.io/${username}`} alt="Avatar de r4nu54" />
				<div className="tw-followCard-info">
					<strong>{name}</strong>
					<span className="tw-followCard-infoUserName">@{username}</span>
				</div>
			</header>
			<aside>
				<button className="tw-followCard-button">Seguir</button>
			</aside>
		</article>
	)
}

export default TwitterFollowCard
