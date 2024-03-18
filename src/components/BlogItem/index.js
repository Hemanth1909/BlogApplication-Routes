// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, imageUrl, avatarUrl, title, author, topic} = blogDetails

  return (
    <Link to={`/blogs/${id}`} className="link-item">
      <li className="blog-listItem">
        <img src={imageUrl} className="thumbnail" alt={`item${id}`} />
        <div className="blogContainer">
          <p className="topic">{topic}</p>
          <h2 className="title">{title}</h2>
          <div className="blog-bottom-container">
            <img src={avatarUrl} className="avatar" alt={`avatar${id}`} />
            <p className="topic">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
