// @ts-check
const { getPosts } = require('./getPosts')

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: 'Ben Brown',
  description: "Ben Brown's Website",
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/logo.png'
      }
    ]
  ],
  customData: {
    posts: getPosts()
  },
  markdown: {
    anchor: {
      permalink: false
    }
  }
}
