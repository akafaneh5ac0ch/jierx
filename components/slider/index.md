---
title: 滑块
category: 组件
order: 8
sidebar: doc
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| min | 最小值 | `Number` | 0 |
| max | 最大值 | `Number` | 100 |
| value | 当前值，可用`v-model`双向绑定 | `Number` &#124; `Array` | 0 |
| unit | 单位，用于刻度展示 | `String` | `""` |
| isShowEnd | 是否展示最小值和最大值刻度 | `Boolean` | `true` |
| isShowInput | 是否展示输入框 | `Boolean` | `true` |
| step | 步长 | `Number` | `1` |
| isShowStop | 是否展示间隔点 | `Boolean` | `false` |
| marks | 标注刻度 | `Object` | `undefined` |
| showTooltip | 是否展示提示气泡，默认不展示 | `Boolean` | `false` |
| always | 当展示气泡时，是否一直展示 | `Boolean` | `false` |

# 扩展点

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| tooltip | 当展示提示气泡，定义气泡的内容，和`Tooltip`组件行为一样，如果你传入空的内容，则不会展示气泡 | 当前组件取值`value` |
