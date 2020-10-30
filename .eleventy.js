const gitlog = require('gitlog').default

module.exports = {
  initArguments: {},
  configFunction: function (eleventyConfig, options = {}) {
    eleventyConfig.addCollection('recentChanges', () => {
      const settings = {
        repo: __dirname,
        number: options.commits || 20,
        fields: ['hash', 'abbrevHash', 'subject', 'authorName', 'authorDate']
      }
      const commits = gitlog(settings)
      if (options.filter) {
        return commits.filter(e => e.subject.includes(options.filter))
      }
      return commits
    })
  }
}
