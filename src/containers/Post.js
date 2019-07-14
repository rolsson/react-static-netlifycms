import React from 'react'
import { withRouteData } from 'react-static'
import { Link } from '@reach/router'

import Markdown from 'react-markdown'

export default withRouteData(({ post }) => (
  <div className="blog-post">
    <Link to="/blog/">{'<'} Back</Link>
    <br />
    <h3>{post.data.title}</h3>
    <p>{post.data.date}</p>
    <img className="image" src={post.data.thumbnail} alt="" />
    <Markdown source={post.content} escapeHtml={false} />
  </div>
))
