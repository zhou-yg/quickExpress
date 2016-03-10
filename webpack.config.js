var path = require('path');

var webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['', '.js','.jsx'],
  },
  externals:{
    pixi:'PIXI',
    PIXI:'PIXI',
  },
  entry: {
    index: [
      'webpack-hot-middleware/client',
      path.resolve(__dirname, './public/js/main.jsx')
    ],
  },
  output: {
    path: path.resolve(__dirname, './public/dist/'),
    publicPath: '/dist/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test:/\.jsx|\.js$/,
        loader:'babel',
        query:{
          compact:false
        }
      },
      {
        test:/\.scss$/,
        exclude: /node_modules|bower_components/,
        loaders:['style','css','sass-loader']
      },{
        test:/\.css$/,
        exclude: /node_modules|bower_components/,
        loaders:['style','css']
      },{
        test:/\.ttf|otf$/,
        loaders:['file?name=[name].[ext]']
      }
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      env:{
        isDevelopment:true
      },
      __DEV__:true,
    })
  ],
  devtool: 'source-map'
};

//# sourceMappingURL=webpack.config.js.map
