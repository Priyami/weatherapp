const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const dotenv = require('dotenv').config({ 
    path: path.join(__dirname, '/Users/karvangum/projects/weatherapp/.env') 
})
module.exports = {
    entry: '/Users/karvangum/projects/weatherapp/src/index.js',
    
   
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        chunkFilename: '[id].js',
        publicPath: '/'
    },
    externals: {
        express: 'express',
      },
    resolve: {
        extensions: ['.js', '.jsx'],
        
        fallback: {
            
            "os": false,
            "path": false,
            "fs":false,
            "zlib": false,
            "stream": false,
            "https": false,
            "http": false,
            "util": false,
            "crypto": false,
            "buffer": false
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
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new webpack.DefinePlugin( {
            "process.env": dotenv.parsed
          }),
        
         

          
          
    
    ]
    
       
};
