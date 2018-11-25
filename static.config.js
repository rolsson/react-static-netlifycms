import React, { Component } from 'react'
import flush from 'styled-jsx/server'

const fs = require('fs')
const klaw = require('klaw')
const path = require('path')
const matter = require('gray-matter')

if (typeof require !== 'undefined') {
  require.extensions['.sass'] = (file) => {}
}

function getContent (contentPath) {
  const items = []
  // Walk ("klaw") through posts directory and push file paths into items array //
  const getFiles = () => new Promise(resolve => {
    // Check if posts directory exists //
    if (fs.existsSync(contentPath)) {
      klaw(contentPath)
        .on('data', item => {
          // Filter function to retrieve .md files //
          if (path.extname(item.path) === '.md') {
            // If markdown file, read contents //
            const data = fs.readFileSync(item.path, 'utf8')
            // Convert to frontmatter object and markdown content //
            const dataObj = matter(data)
            // Create slug for URL //
            dataObj.data.slug = dataObj.data.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
            // Remove unused key //
            delete dataObj.orig
            // Push object into items array //
            items.push(dataObj)
          }
        })
        .on('error', e => {
          console.log(e)
        })
        .on('end', () => {
          // Resolve promise for async getRoutes request //
          // posts = items for below routes //
          resolve(items)
        })
    } else {
      // If src/posts directory doesn't exist, return items as empty array //
      resolve(items)
    }
  })
  return getFiles()
}

export default {
  plugins: ['react-static-plugin-sass'],
  webpack: [(config) => {
    console.log("webpack", config)
    // config.merge({
    //   resolve: {
    //     alias: {
    //       '_variables.sass': path.resolve(__dirname, './src/_variables.sass')
    //     }
    //   }
    // })
    return config
  },
  (config) => {
    console.log(config) // Log out the final set of rules
  }],
  getSiteData: () => ({
    title: 'Argasso bokförlag',
  }),
  getRoutes: async () => {
    const posts = await getContent('./src/posts')
    console.log(posts)
    const books = await getContent('./src/cms/books')
    console.log(books)
    const authors = await getContent('./src/cms/authors')
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/books',
        component: 'src/containers/Books',
        getData: () => ({
          books,
          authors,
        }),
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        path: '/blog',
        component: 'src/containers/Blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.data.slug}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        path: '/404',
        component: 'src/containers/404',
      },
    ]
  },
  // renderToHtml: (render, Comp, meta) => {
  //   const html = render(<Comp />)
  //   const styles = flush()
  //   meta.styleTags = styles
  //   return html
  // },
  // Document: class CustomHtml extends Component {
  //   render () {
  //     const {
  //       Html, Head, Body, children, renderMeta,
  //     } = this.props

  //     return (
  //       <Html>
  //         <Head>
  //           <meta charSet="UTF-8" />
  //           <meta name="viewport" content="width=device-width, initial-scale=1" />
  //           {renderMeta.styleTags}
  //         </Head>
  //         <Body>{children}</Body>
  //       </Html>
  //     )
  //   }
  // },
}
