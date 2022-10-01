import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import NodePolyfillPlugin from "node-polyfill-webpack-plugin";

const plugins = [
  new HtmlWebpackPlugin({
    template: "./src/client/index.html",
  }),
  new MiniCssExtractPlugin({
    filename: "[name].[contenthash].css",
  }),
  new NodePolyfillPlugin(),
];

const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = {
  mode,
  entry: "./src/client/index.tsx",
  plugins,
  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[hash][ext][query]",
    clean: true,
    publicPath: "/",
  },
  devtool: "source-map",
  devServer: {
    hot: true,
    port: 1008,
    historyApiFallback: true,
  },
  module: {
    rules: [
      { test: /\.(html)$/, use: ["html-loader"] },
      {
        test: /\.scss$/i,
        include: path.join(__dirname, "src", "client"),
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[folder]_[local]__[hash:base64:5]",
              },
              importLoaders: 1,
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: mode === "production" ? "asset" : "asset/resource",
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".scss"],
    fallback: {
      assert: require.resolve("assert"),
      buffer: require.resolve("buffer"),
      console: require.resolve("console-browserify"),
      constants: require.resolve("constants-browserify"),
      crypto: require.resolve("crypto-browserify"),
      domain: require.resolve("domain-browser"),
      events: require.resolve("events"),
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      os: require.resolve("os-browserify/browser"),
      path: require.resolve("path-browserify"),
      punycode: require.resolve("punycode"),
      process: require.resolve("process/browser"),
      querystring: require.resolve("querystring-es3"),
      stream: require.resolve("stream-browserify"),
      string_decoder: require.resolve("string_decoder"),
      sys: require.resolve("util"),
      timers: require.resolve("timers-browserify"),
      tty: require.resolve("tty-browserify"),
      url: require.resolve("url"),
      util: require.resolve("util"),
      vm: require.resolve("vm-browserify"),
      zlib: require.resolve("browserify-zlib"),
      tls: require.resolve("nodemailer/lib/smtp-connection"),
      net: require.resolve("nodemailer/lib/smtp-connection"),
      dns: require.resolve("nodemailer/lib/shared"),
      fs: require.resolve("nodemailer/lib/shared"),
      child_process: require.resolve("nodemailer/lib/sendmail-transport"),
    },
  },
};
