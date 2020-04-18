exports.onCreateBabelConfig = ({actions}) => {
  actions.setBabelPlugin ({
    name: `babel-plugin-module-resolver`,
    options: {
      root: ['../src'],
    },
  })
}
//  const path = require('path')

// exports.onCreateWebpackConfig = args => {
//   args.actions.setWebpackConfig({
//     resolve: {
//       modules: [path.resolve(__dirname, '../'), 'node_modules']
//     },
//   })
// }