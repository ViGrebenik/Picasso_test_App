import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetchPostByIdQuery } from '../../api/postApi'
import './PostDetails.scss'

const PostDetails: React.FC = () => {
	const { id } = useParams<{ id: string }>()
	const { data: post, isLoading, isError } = useFetchPostByIdQuery(Number(id))

	if (isLoading) {
		return <div className='loadingBlock'>Loading...</div>
	}

	if (isError) {
		return <div className='errorBlock'>Error loading post</div>
	}

	return (
		<div className='containerPostDetailsItem'>
			<div>№ {post.id}</div>
			<div>{post?.title}</div>
			<div>{post?.body}</div>
			<div className='buttonBlock'>
				<Link to='/'>Back</Link>
			</div>
		</div>
	)
}

export default PostDetails
