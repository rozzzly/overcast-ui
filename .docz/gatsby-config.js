const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Overcast Ui',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/home/rozzzly/dev/overcast-ui/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Overcast Ui',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/home/rozzzly/dev/overcast-ui',
          templates:
            '/home/rozzzly/dev/overcast-ui/node_modules/docz-core/dist/templates',
          docz: '/home/rozzzly/dev/overcast-ui/.docz',
          cache: '/home/rozzzly/dev/overcast-ui/.docz/.cache',
          app: '/home/rozzzly/dev/overcast-ui/.docz/app',
          appPackageJson: '/home/rozzzly/dev/overcast-ui/package.json',
          appTsConfig: '/home/rozzzly/dev/overcast-ui/tsconfig.json',
          gatsbyConfig: '/home/rozzzly/dev/overcast-ui/gatsby-config.js',
          gatsbyBrowser: '/home/rozzzly/dev/overcast-ui/gatsby-browser.js',
          gatsbyNode: '/home/rozzzly/dev/overcast-ui/gatsby-node.js',
          gatsbySSR: '/home/rozzzly/dev/overcast-ui/gatsby-ssr.js',
          importsJs: '/home/rozzzly/dev/overcast-ui/.docz/app/imports.js',
          rootJs: '/home/rozzzly/dev/overcast-ui/.docz/app/root.jsx',
          indexJs: '/home/rozzzly/dev/overcast-ui/.docz/app/index.jsx',
          indexHtml: '/home/rozzzly/dev/overcast-ui/.docz/app/index.html',
          db: '/home/rozzzly/dev/overcast-ui/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
