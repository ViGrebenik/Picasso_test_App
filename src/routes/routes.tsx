import React from 'react'
import { Routes as ReactRouterRoutes, Route } from 'react-router-dom'
import PostDetails from '../components/PostDetail/PostDetails'
import PostList from '../components/PostsList/PostList'

const Routes: React.FC = () => {
	return (
		<ReactRouterRoutes>
			<Route path='/' element={<PostList />} />
			<Route path='/post/:id' element={<PostDetails />} />
		</ReactRouterRoutes>
	)
}

export default Routes
