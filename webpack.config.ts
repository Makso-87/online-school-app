import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';

const plugins = [
  new HtmlWebpackPlugin({
    template: './src/client/index.html',
  }),
  new NodePolyfillPlugin(),
];

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  mode,
  entry: './src/client/index.tsx',
  plugins,
  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
    publicPath: '/',
  },
  devtool: 'source-map',
  devServer: {
    port: 1008,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        include: path.join(__dirname, 'src', 'client'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[folder]_[local]__[hash:base64:5]',
              },
              importLoaders: 1,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: mode === 'production' ? 'asset' : 'asset/resource',
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss'],
    fallback: {
      fs: false,
    },
  },
};
