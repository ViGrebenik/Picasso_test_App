import { Link } from 'react-router-dom'
import { IPost } from '../../../types/types'
import './PostDetails.scss'

interface PostItemProps {
	post: IPost
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
	return (
		<div className='containerPostItem'>
			<div>№ {post.id}</div>
			<div>Title: {post.title}</div>
			<div>
				Description:{' '}
				{post.body.length > 100
					? post.body.substring(0, 100) + '...'
					: post.body}
			</div>
			<div className='buttonBlock'>
				<Link to={`/post/${post.id}`} className='viewButton'>
					View
				</Link>
			</div>
		</div>
	)
}

export default PostItem
