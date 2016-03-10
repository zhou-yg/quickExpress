var path = require('path');

var webpack = require('webpack');

<<<<<<< HEAD
=======
var webpackDevPort = 7301;

>>>>>>> origin/master
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
<<<<<<< HEAD
      'webpack-hot-middleware/client',
      path.resolve(__dirname, './public/js/main.jsx')
    ],
  },
  output: {
    path: path.resolve(__dirname, './public/dist/'),
    publicPath: '/dist/',
=======
      path.resolve(__dirname, './public/js/main.js'),
      'webpack-hot-middleware/client',
    ]
  },
  output: {
    path: path.resolve(__dirname, './public/dist/'),
    publicPath: "/dist",
>>>>>>> origin/master
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
<<<<<<< HEAD
      },{
        test:/\.css$/,
        exclude: /node_modules|bower_components/,
        loaders:['style','css']
      },{
        test:/\.ttf|otf$/,
        loaders:['file?name=[name].[ext]']
=======
      },
      {
        test:/\.jpg|png$/,
        exclude: /node_modules|bower_components/,
        loaders:['url','file']
      },
      {
        test:/\.ttf|otf|eot|svg$/,
        exclude: /node_modules|bower_components/,
        loaders:['url','file']
>>>>>>> origin/master
      }
    ]
  },
  plugins:[
<<<<<<< HEAD
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      env:{
        isDevelopment:true
      },
      __DEV__:true,
    })
  ],
=======
    new webpack.DefinePlugin({
      env:{
        isDevelopment:true
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

>>>>>>> origin/master
  devtool: 'source-map'
};

//# sourceMappingURL=webpack.config.js.map
