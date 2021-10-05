const path = require('path');


const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');


module.exports = {
    
 
  entry: path.join(__dirname, "src", "index.js"),
 
  output: {
    path:path.resolve(__dirname, "dist"),
  },
 

  resolve: {
    fallback: {
      "os": false,
      "path": false,
      "fs":false
    }
},

  module: {
    
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: {
            loader: 'url-loader',
            options: {
              limit: 50000, // make sure this number is big enough to load your resource, or do not define it at all.
            }
          }
  
               
      },    
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
    new webpack.DefinePlugin({
        'process.env': JSON.stringify(dotenv.config().parsed), // it will automatically pick up key values from .env file
     }),
     
  ],
 
}


