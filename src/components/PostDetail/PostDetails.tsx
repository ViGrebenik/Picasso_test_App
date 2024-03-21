import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetchPostByIdQuery } from '../../api/postApi'
import styles from './PostDetails.module.scss'

const PostDetails: React.FC = () => {
	const { id } = useParams<{ id: string }>()
	const { data: post, isLoading, isError } = useFetchPostByIdQuery(Number(id))

	if (isLoading) {
		return <div className={styles.loadingBlock}>Loading...</div>
	}

	if (isError) {
		return <div className={styles.errorBlock}>Error loading post</div>
	}

	return (
		<div className={styles.containerPostDetailsItem}>
			<div>№ {post?.id}</div>
			<div>{post?.title}</div>
			<div>{post?.body}</div>
			<div className={styles.buttonBlock}>
				<Link to='/'>Back</Link>
			</div>
		</div>
	)
}

export default PostDetails
