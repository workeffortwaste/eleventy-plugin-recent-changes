# eleventy-plugin-recent-changes

An [Eleventy (11ty)](https://www.11ty.dev/) plugin that creates a collection containing your recent commit history. 

*Automatically create a viewable changelog for your project.*

**Like this project? Help support my projects and buy me a coffee via [ko-fi](https://ko-fi.com/defaced)**.

---

## Getting started

### Install the plugin

In your project directory run:

```sh
# Using npm
npm install eleventy-plugin-recent-changes --save
```

Then update your project's `.eleventy.js` to include the plugin:

```js
const recentChanges = require('eleventy-plugin-recent-changes');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(recentChanges);
};
```

### Configure the plugin (optional)

You can pass an object with configuration options as the second
parameter:

```js
eleventyConfig.addPlugin(recentChanges, {
  commits: 20, // The maxmium number of commits to add to the collection, before filtering.
  filter: 'news', // Filter only commits that include a specific string.
});
```

## Using the plugin

The plugin will create a collection `recentChanges` containing your recent commit history.

### Layout example

Nunjucks:
```
<ul>
  {%- for commit in collections.recentChanges %}
        <li><time>{{ commit.authorDate }}</time> {{ commit.subject }}</li>
  {%- endfor %}
</ul>
```

### Collection values

| Value | Description  |
|---|---|
| authorDate | The date of the commit. |
| authorName | The name of the author. |
| subject | The commit message. |
| hash | The full hash of the commit. |
| abbrevHash | The abbreviated hash of the commit. |

## Author
Chris Johnson - [defaced.dev](https://defaced.dev) - [@defaced](http://twitter.co.uk/defaced/)

