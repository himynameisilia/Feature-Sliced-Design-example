import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { IBuildOptions } from "./types/config";

export function buildLoaders({ isDev }: IBuildOptions): webpack.RuleSetRule[] {
  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (path: string) => Boolean(path.includes(".module.")),
            localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]"
          },

        }
      },
      "sass-loader",
    ],
  }

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  return [typeScriptLoader, scssLoader, svgLoader, fileLoader];
}
