## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| content | String | `''` | 原始代码内容 |
| lang | String | `''` | 语言 |
| auto | Boolean | `false` | 是否自动探测代码中的语言 |
| preRender | Function\<content: string, lang: string\> | `this.defaultPreRender` | 渲染前对代码的处理函数 |
| postRender | Function\<result: string\> | `this.defaultPostRender` | 渲染后对结果的处理函数 |

### Events

#### @before-render

渲染前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.content | String | 原始代码内容 |
| $event.lang | String | 语言 |
| $event.result | String | 渲染后的结果 |
| $event.preventDefault | Function | 阻止渲染流程 |
| senderVM | XHighlight | 发送事件实例 |

#### @render

渲染后触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.content | String | 原始代码内容 |
| $event.lang | String | 语言 |
| $event.result | String | 渲染后的结果 |
| senderVM | XHighlight | 发送事件实例 |

### Methods

#### render()

渲染代码。初始化时和`content`属性改变时会自动调用。

| Param | Type | Description |
| ----- | ---- | ----------- |
