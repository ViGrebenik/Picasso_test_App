import { FC, useEffect, useState } from 'react'
import { useFetchAllPostsQuery } from '../../api/postApi'
import PostItem from './PostItem/PostItem'
import styles from './PostsList.module.scss'

const PostList: FC = () => {
	const [currentPostStart, setCurrentPostStart] = useState(0)
	const { data: posts, isLoading } = useFetchAllPostsQuery({
		limit: 7,
		start: currentPostStart,
	})
	const [isMyFetching, setIsFetchingDown] = useState(false)
	const [isMyFetchingUp, setIsMyFetchingUp] = useState(false)
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		setIsVisible(isLoading)
	}, [isLoading])
	useEffect(() => {
		if (isMyFetching) {
			setCurrentPostStart(prev => {
				return prev < 93 ? prev + 1 : prev
			})
			setIsFetchingDown(false)
		}
	}, [isMyFetching])
	useEffect(() => {
		if (isMyFetchingUp) {
			setCurrentPostStart(prev => {
				return prev > 0 ? prev - 1 : prev
			})
			setIsMyFetchingUp(false)
		}
	}, [isMyFetchingUp])
	useEffect(() => {
		document.addEventListener('scroll', scrollHandler)
		return () => {
			document.removeEventListener('scroll', scrollHandler)
		}
	}, [])
	const scrollHandler = (e: any): void => {
		if (e.target.documentElement.scrollTop < 150) {
			setIsMyFetchingUp(true)
		}
		if (
			e.target.documentElement.scrollHeight -
				e.target.documentElement.scrollTop -
				window.innerHeight <
			100
		) {
			setIsFetchingDown(true)
			window.scrollTo(
				0,
				e.target.documentElement.scrollHeight +
					e.target.documentElement.scrollTop
			)
		}
	}

	return (
		<div className={styles.postsList}>
			<div className={styles.headerTitle}>
				<h1>Picasso App</h1>
			</div>
			{isLoading && <div className={styles.loadingBlock}>Loading...</div>}
			{posts &&
				posts.map(post => (
					<div
						key={post.id}
						className={`${styles.postItem} ${!isVisible ? styles.visible : ''}`}
					>
						<PostItem post={post} />
					</div>
				))}
		</div>
	)
}

export default PostList
