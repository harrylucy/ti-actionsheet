
## Actionsheet 上拉菜单

### 使用指南
``` javascript
import { actionsheet } from 'ti-vue';

Vue.use(actionsheet);
```

### 代码演示

#### 基础用法

需要传入一个`menus`的数组，数组的每一项是一个对象，对象属性见文档下方表格。

```html
<actionsheet v-model="show" :menus="menus" :showCancel="show" title="<h3 style='color: red;'>一个大标题</h3><p>最多两行</p>" :closeMask="hide" @clickMenu="clickMenu"></actionsheet>
```

```javascript
export default {
  data() {
    return {
      show: true,
      hide: false,
      menus: [
        {
          label: '香蕉'
        },
        {
          label: '西瓜',
        }
      ]
    };
  },

  methods: {
    clickMenu(index) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      console.log('menu'+index);
    }
  }
}
```

#### 带取消按钮的 Actionsheet

如果传入了`cancelText`属性，且不为空，则会在下方显示一个取消按钮，点击会将当前`Actionsheet`关闭。


### API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| value | 是否显示，使用v-model绑定变量 | `Boolean`  | | `false` |
| showCancel | 是否显示取消菜单 | `Boolean`  | | `false` |
| cancelText | 取消菜单的显示文字 | `Boolean`  | | `取消` |
| menus | 菜单项列表，举例:`[{label:'香蕉'},{label:'西瓜'}]` | `Array` |  | `[]` |
| title | 标题 | `String`  | | ''|
| closeMask | 点击遮罩时是否关闭菜单 | `Boolean`  | | `true` |
| closeMenu | 点击菜单时是否自动隐藏 | `Boolean`  | | `true` |
### Event
| 事件名 | 说明 | 回调参数 |
|------|------|------|
| clickMenu | 选中选项时触发| menus的索引 |
| onCancel | 取消按钮点击时触发 |  |
| onShow | actionshee显示的时触发|  |
| onHide | actionshee关闭的时触发 |  |

