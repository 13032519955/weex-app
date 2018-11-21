## 如何使用 css 预编译 less/sass/pug

用 `sass` 举例:

```
$ npm i node-sass sass-loader --save
```

那么，你只需要将 `style` 标签改为： `<style lang="sass"><style>`.

## 使用本地图片
要把图片转base64,还需要安卓端做处理。建议把图片上传到cdn。下面是前端webpack配置base64
> npm install url-loader file-loader --save

configs/webpack.common.conf.js对`rules`添加下面几句话
```
{
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    use: [
        {
        loader: 'url-loader',
        options: {
            limit: 1295360,
            name: '[name].[ext]'
        }
        }
    ]
}
```

