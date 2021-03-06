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
    title: 'Mimoo',
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
        port: 7000,
        p: 7000,
        root: 'D:\\www\\projects\\mimoo\\.docz',
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
        title: 'Mimoo',
        description: 'My awesome app using docz',
        host: 'localhost',
        separator: '-',
        paths: {
          root: 'D:\\www\\projects\\mimoo',
          templates:
            'D:\\www\\projects\\mimoo\\node_modules\\docz-core\\dist\\templates',
          docz: 'D:\\www\\projects\\mimoo\\.docz',
          cache: 'D:\\www\\projects\\mimoo\\.docz\\.cache',
          app: 'D:\\www\\projects\\mimoo\\.docz\\app',
          appPackageJson: 'D:\\www\\projects\\mimoo\\package.json',
          appTsConfig: 'D:\\www\\projects\\mimoo\\tsconfig.json',
          gatsbyConfig: 'D:\\www\\projects\\mimoo\\gatsby-config.js',
          gatsbyBrowser: 'D:\\www\\projects\\mimoo\\gatsby-browser.js',
          gatsbyNode: 'D:\\www\\projects\\mimoo\\gatsby-node.js',
          gatsbySSR: 'D:\\www\\projects\\mimoo\\gatsby-ssr.js',
          importsJs: 'D:\\www\\projects\\mimoo\\.docz\\app\\imports.js',
          rootJs: 'D:\\www\\projects\\mimoo\\.docz\\app\\root.jsx',
          indexJs: 'D:\\www\\projects\\mimoo\\.docz\\app\\index.jsx',
          indexHtml: 'D:\\www\\projects\\mimoo\\.docz\\app\\index.html',
          db: 'D:\\www\\projects\\mimoo\\.docz\\app\\db.json',
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
