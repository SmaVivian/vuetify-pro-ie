const path = require('path')
const pxtorem = require('postcss-pxtorem');

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './', // 相对路径
  chainWebpack: config => {
    // 修复HMR(热更新失效) 
    config.resolve.symlinks(true)
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@css', resolve('src/assets/css'))
      .set('@images', resolve('src/assets/images'))
      .set('@cmp', resolve('src/components'))
      .set('@views', resolve('src/views'))
    // mobile下scss或sass文件下转换为rem
    config.module
      .rule('mobile-postcss')  // 新增规则，规则名自定义
      .test(/mobile.*\.s[ac]ss$/)  // 用正则表达式匹配mobile的目录下的所有scss文件
      // .test(/mobile.*\.scss$/)  // 用正则表达式匹配mobile的目录下的所有scss文件
      .use('style-loader', 'css-loader', 'sass-loader')  // css加载器
      // .use('sass-loader')  // css加载器
      .loader('postcss-loader')  // css处理器
      .options({  // 这里的内容跟方法一中css.loaderOptions一样
        plugins: [
          pxtorem({
            rootValue: 18.75,  // 20等分
            // rootValue: 37.5,
            minPixelValue: 2,
            selectorBlackList: ['.ignore'], // 忽略转换正则匹配项
            // propList: ['*'], // 可以从px更改为rem的属性
            propList: ['*', '!font*'], // 可以从px更改为rem的属性 忽略font-size属性
            unitPrecision: 4 // rem单位的小数位数上限.
          })
        ]
      });
    // // mobile下css文件下转换为rem
    // config.module
    //   .rule('md-postcss')  // 新增规则，规则名自定义
    //   .test(/mobile.*\.css$/)  // 用正则表达式匹配mobile的目录下的所有scss文件
    //   .use('css-loader')  // css加载器
    //   .loader('postcss-loader')  // css处理器
    //   .options({  // 这里的内容跟方法一中css.loaderOptions一样
    //     plugins: [
    //       pxtorem({
    //         rootValue: 37.5,
    //         minPixelValue: 2,
    //         propList: ['*'],
    //         selectorBlackList: []
    //       })
    //     ]
    //   });
  },
  // "transpileDependencies": [
  //   "vuetify"
  // ],
  css: {
    sourceMap: true, // 查看css源文件
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/variables.scss";
        `
      }
    }
  },
  devServer: {
    // sockHost: 'http://localhost', // 解决一直发/sockjs-node/info请求
    port: 8080,
    proxy: {
      '/admin': {
        target: 'http://www.jnmuseum.com/', 
        // target: 'http://archives.dev.tj720.com', // 内测环境
        // target: 'http://sdk.tj720.com', // 内测环境
        // target: 'http://dev.tj720.com', // 内测环境
        ws: false,
        changeOrigin: true
      },
      '/singleMuseum': {
        target: 'http://archives.dev.tj720.com', // 内测环境
        // target: 'http://sdk.tj720.com', // 内测环境
        // target: 'http://dev.tj720.com', // 内测环境
        ws: false,
        changeOrigin: true
      }
    }
  },

  lintOnSave: undefined
}