// @ts-check
const { getPosts } = require('./getPosts')

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: 'Ben Brown',
  description: "Ben Brown's Website",

  customData: {
    posts: getPosts()
  },
  markdown: {
    anchor: {
      permalink: false
    }
  }
}
