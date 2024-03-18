// Write your JS code here
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Component} from 'react'

import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogsList: [], isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const blogsDate = await fetch('https://apis.ccbp.in/blogs')
    const data = await blogsDate.json()
    console.log(data)

    const formatedData = data.map(eachItem => ({
      id: eachItem.id,
      author: eachItem.author,
      avatarUrl: eachItem.avatar_url,
      imageUrl: eachItem.image_url,
      topic: eachItem.topic,
      title: eachItem.title,
    }))
    this.setState({blogsList: formatedData, isLoading: false})

    // console.log(formatedData)
  }

  render() {
    const {blogsList, isLoading} = this.state

    return (
      <div className="list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          blogsList.map(eachItem => (
            <BlogItem blogDetails={eachItem} key={eachItem.id} />
          ))
        )}
      </div>
    )
  }
}

export default BlogList
