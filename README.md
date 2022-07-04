# vite-plugin-entry-inject

修改打包后入口文件在html中的注入位置

### 使用说明
```sh
npm install --save-dev vite-plugin-entry-inject
# or
yarn add vite-plugin-entry-inject -D
```

```js
// vite.config.js
import VitePluginEntryInject from 'vite-plugin-entry-inject';

export default {
    plugins: [{
        VitePluginEntryInject({
            // head-prepend/head/body-prepend/body
            injectTo: 'body'
        })
    }]
};
```

## 参数

### `injectTo`
入口文件注入位置，默认`body`，即body闭合标签`</body>`前，可选。
#### `head-prepend`: `<head>`开始标签后
#### `head`: `</head>`闭合标签前
#### `body-prepend`: `<body>`开始标签后
#### `body`: `</body>`闭合标签前

- **Type:** `string`
- **Default:** `body`