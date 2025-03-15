# `Demo test:`

#### `Breadcrumb basic`

```
"<div class=\"k-breadcrumb\">
    <div class=\"k-item\"><a class=\"k-item-link\">item 1</a><span class=\"k-separator\">&gt;</span></div><div class=\"k-item\"><a class=\"k-item-link\">item 2</a><span class=\"k-separator\">&gt;</span></div><div class=\"k-item\"><span class=\"k-item-link\">item 3</span></div> 
</div>"
```

#### `Breadcrumb separator`

```
"<div class=\"k-breadcrumb\">
    <div class=\"k-item\"><a class=\"k-item-link\"><i class=\"ion-home\"></i> item 1
    </a><span class=\"k-separator\"><b class=\"separator\">=&gt;</b></span></div><div class=\"k-item\"><a class=\"k-item-link\"><i class=\"ion-earth\"></i> item 2
    </a><span class=\"k-separator\"><b class=\"separator\">=&gt;</b></span></div><div class=\"k-item\"><span class=\"k-item-link\"><i class=\"ion-planet\"></i> item 3
    </span></div> 
</div>"
```

#### `Button basic`

```
"<div><button class=\"k-btn\" type=\"button\">
    <span>default</span>
    </button><button class=\"k-btn k-primary\" type=\"button\">
    <span>primay</span>
    </button><button class=\"k-btn k-warning\" type=\"button\">
    <span>warning</span>
    </button><button class=\"k-btn k-danger\" type=\"button\">
    <span>danger</span>
    </button><button class=\"k-btn k-none\" type=\"button\">
    <span>none</span>
    </button></div>"
```

#### `Button disabled`

```
"<div><button class=\"k-btn\" disabled=\"\" type=\"button\">
    <span>disabled</span>
    </button><button class=\"k-btn k-none\" disabled=\"\" type=\"button\">
    <span>disabled text</span>
    </button><button class=\"k-btn k-btn-icon k-circle\" disabled=\"\" type=\"button\">
    <i class=\"k-icon ion-ios-search\"></i>
    </button></div>"
```

#### `Button group`

```
"<div><div class=\"k-btns\"><button class=\"k-btn\" type=\"button\">
    <span>开机</span>
    </button><button class=\"k-btn\" type=\"button\">
    <span>关机</span>
    </button><button class=\"k-btn\" type=\"button\">
    <span>重启</span>
    </button></div><div class=\"k-btns\"><button class=\"k-btn k-primary k-small\" type=\"button\">
    <span>开机</span>
    </button><button class=\"k-btn k-primary k-small\" type=\"button\">
    <span>关机</span>
    </button><button class=\"k-btn k-primary k-small\" type=\"button\">
    <span>重启</span>
    </button></div><div class=\"k-btns\"><button class=\"k-btn k-primary k-small k-icon-left\" type=\"button\">
    <i class=\"k-icon ion-ios-arrow-left\"></i><span>上一页
        </span>
    </button><button class=\"k-btn k-primary k-small k-icon-right\" type=\"button\">
    <span>
            下一页</span><i class=\"k-icon ion-ios-arrow-right\"></i>
    </button></div><br><br><p>纵向按钮组</p><div class=\"k-btns k-vertical\"><button class=\"k-btn k-primary k-small\" type=\"button\">
    <span>开机</span>
    </button><button class=\"k-btn k-primary k-small\" type=\"button\">
    <span>关机</span>
    </button><button class=\"k-btn k-primary k-small\" type=\"button\">
    <span>重启</span>
    </button></div><br><br><p>radio按钮组</p><div class=\"k-btns\"><button class=\"k-btn k-small k-active\" type=\"button\">
    <span>北京</span>
    <input type=\"radio\"></button><button class=\"k-btn k-small\" type=\"button\">
    <span>上海</span>
    <input type=\"radio\"></button><button class=\"k-btn k-small\" type=\"button\">
    <span>广州</span>
    <input type=\"radio\"></button><button class=\"k-btn k-small\" type=\"button\">
    <span>深圳</span>
    <input type=\"radio\"></button></div><p>checkbox按钮组</p><div class=\"k-btns\"><button class=\"k-btn k-small\" type=\"button\">
    <span>北京</span>
    <input type=\"checkbox\"></button><button class=\"k-btn k-small\" type=\"button\">
    <span>上海</span>
    <input type=\"checkbox\"></button><button class=\"k-btn k-small\" type=\"button\">
    <span>广州</span>
    <input type=\"checkbox\"></button><button class=\"k-btn k-small\" type=\"button\">
    <span>深圳</span>
    <input type=\"checkbox\"></button></div></div>"
```

#### `Button icon`

```
"<div><button class=\"k-btn k-btn-icon\" type=\"button\">
    <i class=\"ion-ios-search\"></i>
    </button><button class=\"k-btn k-btn-icon k-circle\" type=\"button\">
    <i class=\"ion-ios-search\"></i>
    </button><button class=\"k-btn k-primary k-icon-left\" type=\"button\">
    <i class=\"k-icon ion-ios-search\"></i><span>搜索</span>
    </button><button class=\"k-btn k-primary k-circle k-icon-left\" type=\"button\">
    <i class=\"k-icon ion-ios-search\"></i><span>搜索</span>
    </button></div>"
```

#### `Button loading`

```
"<div><button class=\"k-btn k-primary k-loading\" disabled=\"\" type=\"button\">
    <i class=\"k-icon ion-load-c icon-loading\"></i><span>确认</span>
    </button><button class=\"k-btn k-btn-icon k-circle k-loading\" disabled=\"\" type=\"button\">
    <i class=\"k-icon ion-load-c icon-loading\"></i><i class=\"k-icon ion-ios-search\"></i>
    </button><br><br><button class=\"k-btn k-primary\" type=\"button\">
    <span>点击加载</span>
    </button><button class=\"k-btn k-primary k-icon-left\" type=\"button\">
    <i class=\"k-icon ion-ios-search\"></i><span>点击加载</span>
    </button><button class=\"k-btn k-btn-icon k-circle\" type=\"button\">
    <i class=\"k-icon ion-ios-search\"></i>
    </button><button class=\"k-btn k-primary k-icon-right\" type=\"button\">
    <span>图标在右侧</span><i class=\"k-icon ion-ios-search\"></i>
    </button></div>"
```

#### `Button size`

```
"<div><button class=\"k-btn\" type=\"button\">
    <span>default</span>
    </button><button class=\"k-btn k-small\" type=\"button\">
    <span>small</span>
    </button><button class=\"k-btn k-mini\" type=\"button\">
    <span>mini</span>
    </button><br><br><button class=\"k-btn k-btn-icon k-circle\" type=\"button\">
    <i class=\"k-icon ion-ios-search\"></i>
    </button><button class=\"k-btn k-btn-icon k-small k-circle\" type=\"button\">
    <i class=\"k-icon ion-ios-search\"></i>
    </button><button class=\"k-btn k-btn-icon k-mini k-circle\" type=\"button\">
    <i class=\"k-icon ion-ios-search\"></i>
    </button></div>"
```

#### `Button tagName`

```
"<div><div class=\"k-btn k-primary\">
    <span>div元素按钮</span>
    </div><a class=\"k-btn\" href=\"https://www.ksyun.com\" style=\"margin-left: 20px;\" target=\"_blank\">
    <span>超链接按钮</span>
    </a></div>"
```

#### `Checkbox basic`

```
"<div><label class=\"k-checkbox\"><span class=\"k-wrapper\"><input type=\"checkbox\" value=\"true\"></span><span class=\"k-text\">checkbox</span></label><label class=\"k-checkbox k-disabled\"><span class=\"k-wrapper\"><input type=\"checkbox\" disabled=\"\" value=\"true\"></span><span class=\"k-text\">disabled checkbox</span></label><label class=\"k-checkbox k-disabled k-checked\"><span class=\"k-wrapper\"><input type=\"checkbox\" disabled=\"\" value=\"true\"></span><span class=\"k-text\">disabled checked checkbox</span></label></div>"
```

#### `Checkbox group`

```
"<div><label class=\"k-checkbox\"><span class=\"k-wrapper\"><input type=\"checkbox\" name=\"languages\" value=\"Javascript\"></span><span class=\"k-text\">Javascript</span></label><label class=\"k-checkbox\"><span class=\"k-wrapper\"><input type=\"checkbox\" name=\"languages\" value=\"C++\"></span><span class=\"k-text\">C++</span></label><label class=\"k-checkbox\"><span class=\"k-wrapper\"><input type=\"checkbox\" name=\"languages\" value=\"PHP\"></span><span class=\"k-text\">PHP</span></label>
    Your selected: []
</div>"
```

#### `Checkbox value`

```
"<div><label class=\"k-checkbox\"><span class=\"k-wrapper\"><input type=\"checkbox\" value=\"true\"></span><span class=\"k-text\">默认值: </span></label><label class=\"k-checkbox\"><span class=\"k-wrapper\"><input type=\"checkbox\" value=\"checked\"></span><span class=\"k-text\">
        指定选中时取值为\"checked\": 
    </span></label><label class=\"k-checkbox\"><span class=\"k-wrapper\"><input type=\"checkbox\" value=\"0\"></span><span class=\"k-text\">
        指定非选中时取值为对象：
    </span></label></div>"
```

#### `Datepicker basic`

```
"<div><div class=\"k-datepicker\"><div class=\"k-input k-with-suffix\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择日期\"><div class=\"k-suffix\"><i class=\"ion-ios-calendar-outline\"></i></div></div></div><!--placeholder--></div><div class=\"k-datepicker k-disabled\"><div class=\"k-input k-disabled k-with-suffix\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择日期\" disabled=\"\"><div class=\"k-suffix\"><i class=\"ion-ios-calendar-outline\"></i></div></div></div><!--placeholder--></div></div>"
```

#### `Datepicker clearable`

```
"<div class=\"k-datepicker\"><div class=\"k-input k-with-suffix k-clearable\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择日期\"><div class=\"k-suffix\"><i class=\"k-clear k-icon ion-ios-close\"></i><i class=\"ion-ios-calendar-outline\"></i></div></div></div><!--placeholder--></div>"
```

#### `Datepicker datetime`

```
"<div><div class=\"k-datepicker\"><div class=\"k-input k-with-suffix\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择日期和时间\"><div class=\"k-suffix\"><i class=\"ion-ios-calendar-outline\"></i></div></div></div><!--placeholder--></div><div class=\"k-datepicker\"><div class=\"k-input k-with-suffix\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"时间精确到小时\"><div class=\"k-suffix\"><i class=\"ion-ios-calendar-outline\"></i></div></div></div><!--placeholder--></div></div>"
```

#### `Datepicker disabledDate`

```
"<div class=\"k-datepicker\"><div class=\"k-input k-with-suffix\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择日期\"><div class=\"k-suffix\"><i class=\"ion-ios-calendar-outline\"></i></div></div></div><!--placeholder--></div>"
```

#### `Datepicker maxMin`

```
"<div><div class=\"k-datepicker\"><div class=\"k-input k-with-suffix\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"开始日期\"><div class=\"k-suffix\"><i class=\"ion-ios-calendar-outline\"></i></div></div></div><!--placeholder--></div><div class=\"k-datepicker\"><div class=\"k-input k-with-suffix\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"结束日期\"><div class=\"k-suffix\"><i class=\"ion-ios-calendar-outline\"></i></div></div></div><!--placeholder--></div></div>"
```

#### `Datepicker multiple`

```
"<div><div class=\"k-datepicker\"><div class=\"k-input k-with-suffix\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择日期\"><div class=\"k-suffix\"><i class=\"ion-ios-calendar-outline\"></i></div></div></div><!--placeholder--></div>
    You selected: 
</div>"
```

#### `Dialog async`

```
"<div><button class=\"k-btn k-primary\" type=\"button\">
    <span>Close dialog asynchronously</span>
    </button><!--placeholder--></div>"
```

#### `Dialog basic`

```
"<div><button class=\"k-btn k-primary\" type=\"button\">
    <span>Show Dialog</span>
    </button><!--placeholder--></div>"
```

#### `Dialog block`

```
"<div><button class=\"k-btn k-primary\" type=\"button\">
    <span>Show Dialog</span>
    </button><!--placeholder--></div>"
```

#### `Dialog events`

```
"<div><button class=\"k-btn k-primary\" type=\"button\">
    <span>Show Dialog</span>
    </button><!--placeholder--></div>"
```

#### `Dialog extends`

```
"<button class=\"k-btn k-primary\" type=\"button\">
    <span>Show Dialog</span>
    </button>"
```

#### `Dropdown basic`

```
"<div><button class=\"k-btn k-primary k-icon-right\" type=\"button\">
    <span>
            hover </span><i class=\"k-icon ion-arrow-down-b\"></i>
    </button><!--placeholder--></div>"
```

#### `Dropdown disabled`

```
"<div><button class=\"k-btn k-primary k-icon-right\" type=\"button\">
    <span>
            disabled </span><i class=\"k-icon ion-arrow-down-b\"></i>
    </button><!--placeholder--><button class=\"k-btn k-primary k-icon-right\" type=\"button\">
    <span>
            disabled item</span><i class=\"k-icon ion-arrow-down-b\"></i>
    </button><!--placeholder--></div>"
```

#### `Dropdown nested`

```
"<div><button class=\"k-btn k-primary k-icon-right\" type=\"button\">
    <span>
            hover </span><i class=\"k-icon ion-arrow-down-b\"></i>
    </button><!--placeholder--></div>"
```

#### `Dropdown position`

```
"<div><button class=\"k-btn k-primary k-icon-right\" type=\"button\">
    <span>
            left </span><i class=\"k-icon ion-arrow-down-b\"></i>
    </button><!--placeholder--><button class=\"k-btn k-primary k-icon-right\" type=\"button\">
    <span>
            right </span><i class=\"k-icon ion-arrow-down-b\"></i>
    </button><!--placeholder--><button class=\"k-btn k-primary k-icon-right\" type=\"button\">
    <span>
            top center </span><i class=\"k-icon ion-arrow-down-b\"></i>
    </button><!--placeholder--></div>"
```

#### `Dropdown trigger`

```
"<div><button class=\"k-btn k-primary k-icon-right\" type=\"button\">
    <span>
            hover </span><i class=\"k-icon ion-arrow-down-b\"></i>
    </button><!--placeholder--><button class=\"k-btn k-primary k-icon-right\" type=\"button\">
    <span>
            click </span><i class=\"k-icon ion-arrow-down-b\"></i>
    </button><!--placeholder--></div>"
```

#### `Editable basic`

```
"<div><div class=\"k-editable\"><i class=\"ion-edit k-edit\" title=\"编辑\"></i><div class=\"c-ellipsis\">
        <i class=\"ion-ios-location\"></i><a href=\"\">editable text</a>
    </div></div><br><div class=\"k-editable k-disabled\"><div class=\"c-ellipsis\">
        <i class=\"ion-ios-location\"></i><a href=\"\">disabled editable text</a>
    </div></div></div>"
```

#### `Editable validate`

```
"<div><div class=\"k-editable\"><i class=\"ion-edit k-edit\" title=\"编辑\"></i><div class=\"c-ellipsis\">
        100
    </div></div><br><div class=\"k-editable\"><i class=\"ion-edit k-edit\" title=\"编辑\"></i><div class=\"c-ellipsis\">
        100
    </div></div><br><div class=\"k-editable\"><i class=\"ion-edit k-edit\" title=\"编辑\"></i><div class=\"c-ellipsis\">
        100
    </div></div></div>"
```

#### `Form basic`

```
"<form class=\"k-form\" novalidate=\"\"><div class=\"k-form-item\"><label class=\"k-label\">Input</label><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div></div></div><div class=\"k-form-item\"><label class=\"k-label\">Select</label><div class=\"k-content\"><div class=\"k-select\"><div class=\"k-wrapper\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div></div><div class=\"k-form-item\"><label class=\"k-label\">Checkbox</label><div class=\"k-content\"><label class=\"k-checkbox\"><span class=\"k-wrapper\"><input type=\"checkbox\" value=\"Javascript\"></span><span class=\"k-text\">Javascript</span></label><label class=\"k-checkbox\"><span class=\"k-wrapper\"><input type=\"checkbox\" value=\"PHP\"></span><span class=\"k-text\">PHP</span></label><label class=\"k-checkbox\"><span class=\"k-wrapper\"><input type=\"checkbox\" value=\"C++\"></span><span class=\"k-text\">C++</span></label></div></div><div class=\"k-form-item\"><label class=\"k-label\">Radio</label><div class=\"k-content\"><label class=\"k-radio\"><span class=\"k-wrapper\"><input type=\"radio\" value=\"Javascript\"></span><span class=\"k-text\">Javascript</span></label><label class=\"k-radio\"><span class=\"k-wrapper\"><input type=\"radio\" value=\"PHP\"></span><span class=\"k-text\">PHP</span></label><label class=\"k-radio\"><span class=\"k-wrapper\"><input type=\"radio\" value=\"C++\"></span><span class=\"k-text\">C++</span></label></div></div><div class=\"k-form-item\"><label class=\"k-label\">Radio ButtonGroup</label><div class=\"k-content\"><div class=\"k-btns\"><button class=\"k-btn\" type=\"button\">
    <span>Javascript</span>
    <input type=\"radio\"></button><button class=\"k-btn\" type=\"button\">
    <span>PHP</span>
    <input type=\"radio\"></button><button class=\"k-btn\" type=\"button\">
    <span>C++</span>
    <input type=\"radio\"></button></div></div></div><div class=\"k-form-item\"><label class=\"k-label\">Switch</label><div class=\"k-content\"><div class=\"k-switch k-default\"><input type=\"checkbox\" value=\"true\"><div class=\"k-bar\"><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div></div></div><div class=\"k-form-item\"><label class=\"k-label\">Slider</label><div class=\"k-content\"><div class=\"k-slider\"><div class=\"k-wrapper\"><div class=\"k-bar\" style=\"width: 0%;\"></div><div class=\"k-handle\" style=\"left: 0%;\"></div><div class=\"k-box\"><span>0 </span><span>100</span></div></div></div></div></div><div class=\"k-form-item\"><label class=\"k-label\">Textarea</label><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><textarea class=\"k-inner k-textarea\" rows=\"2\" spellcheck=\"false\"></textarea></div></div></div></div><div class=\"k-form-item\"><label class=\"k-label\">Password</label><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"password\"></div></div></div></div><div class=\"k-form-item\"><label class=\"k-label\">Confirm Password</label><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"password\"></div></div></div></div><div class=\"k-form-item\"><label class=\"k-label\"></label><div class=\"k-content\"><button class=\"k-btn k-primary\" type=\"submit\">
    <span>提交</span>
    </button><button class=\"k-btn\" style=\"margin-left: 20px\" type=\"button\">
    <span>重置</span>
    </button></div></div></form>"
```

#### `Form custom`

```
"<form class=\"k-form\" novalidate=\"\"><div class=\"k-form-item\"><label class=\"k-label\">描述</label><div class=\"k-content\"><div class=\"k-form-item\"><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div></div><div class=\"k-append\"><button class=\"k-btn\" type=\"button\">
    <span>删除</span>
    </button></div></div><button class=\"k-btn\" type=\"button\">
    <span>添加</span>
    </button></div></div></form>"
```

#### `Form label`

```
"<form class=\"k-form\" novalidate=\"\"><div class=\"k-form-item\"><label class=\"k-label\"><i style=\"color: red\">*</i> 姓名</label><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div></div></div><div class=\"k-form-item\"><label class=\"k-label\"><i class=\"ion-person\"></i> 姓名</label><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div></div></div></form>"
```

#### `Form variable`

```
"<form class=\"k-form\" novalidate=\"\"><div class=\"k-form-item\"><label class=\"k-label\">姓名</label><div class=\"k-content\"><div class=\"k-row k-gutter\" style=\"margin-left: -8px; margin-right: -8px;\"><div class=\"k-col k-12\" style=\"padding-left: 8px; padding-right: 8px;\"><div><div class=\"k-form-item\"><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div></div></div></div></div><div class=\"k-col k-12\" style=\"padding-left: 8px; padding-right: 8px;\"><div><div class=\"k-form-item\"><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div></div></div></div></div></div></div></div></form>"
```

#### `Grid basic`

```
"<div><div class=\"k-row\"><div class=\"k-col k-12\">col-12</div><div class=\"k-col k-12\">col-12</div></div><div class=\"k-row\"><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-6\">col-6</div><div class=\"k-col k-8\">col-8</div><div class=\"k-col k-6\">col-6</div></div></div>"
```

#### `Grid gutter`

```
"<div><div class=\"k-row k-gutter\" style=\"margin-left: -8px; margin-right: -8px;\"><div class=\"k-col k-12\" style=\"padding-left: 8px; padding-right: 8px;\"><div>col-12</div></div><div class=\"k-col k-12\" style=\"padding-left: 8px; padding-right: 8px;\"><div>col-12</div></div></div><div class=\"k-row k-gutter\" style=\"margin-left: -8px; margin-right: -8px;\"><div class=\"k-col k-4\" style=\"padding-left: 8px; padding-right: 8px;\"><div>col-4</div></div><div class=\"k-col k-6\" style=\"padding-left: 8px; padding-right: 8px;\"><div>col-6</div></div><div class=\"k-col k-8\" style=\"padding-left: 8px; padding-right: 8px;\"><div>col-8</div></div><div class=\"k-col k-6\" style=\"padding-left: 8px; padding-right: 8px;\"><div>col-6</div></div></div></div>"
```

#### `Input autowidth`

```
"<div class=\"k-input k-auto-width\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"auto width\" style=\"width: 2px;\"><div class=\"k-fake\">auto width</div></div></div>"
```

#### `Input basic`

```
"<div><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"></div></div> 
    <br><div class=\"k-input k-disabled\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"disabled\" disabled=\"\"></div></div></div>"
```

#### `Input blocks`

```
"<div><div class=\"k-input k-group\"><div class=\"k-prepend\">http://</div><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"></div><div class=\"k-append\">.com</div></div><div class=\"k-input k-group\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"></div><div class=\"k-append\"><button class=\"k-btn k-none k-btn-icon\" type=\"button\">
    <i class=\"ion-ios-search\"></i>
    </button></div></div><div class=\"k-input k-group\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"></div><div class=\"k-append\"><button class=\"k-btn k-primary k-btn-icon\" type=\"button\">
    <i class=\"ion-ios-search\"></i>
    </button></div></div><div class=\"k-input k-group\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"></div><div class=\"k-append\"><button class=\"k-btn k-primary\" type=\"button\">
    <span>搜索</span>
    </button></div></div><div class=\"k-input k-with-prefix k-with-suffix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-earth\"></i></div><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"><div class=\"k-suffix\"><i class=\"ion-ios-search\"></i></div></div></div><div class=\"k-input k-group k-with-prefix k-with-suffix\"><div class=\"k-prepend\">http://</div><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-earth\"></i></div><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"><div class=\"k-suffix\"><i class=\"ion-ios-search\"></i></div></div><div class=\"k-append\">.com</div></div></div>"
```

#### `Input clearable`

```
"<div><div class=\"k-input k-clearable\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"><div class=\"k-suffix\"><i class=\"k-clear k-icon ion-ios-close\"></i></div></div></div><br><div class=\"k-input k-with-suffix k-clearable\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"><div class=\"k-suffix\"><i class=\"k-clear k-icon ion-ios-close\"></i><i class=\"ion-ios-search\"></i></div></div></div></div>"
```

#### `Input size`

```
"<div><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><br><div class=\"k-input k-small\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><div class=\"k-input k-small k-group\"><div class=\"k-prepend\">http://</div><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"></div><div class=\"k-append\">.com</div></div><div class=\"k-input k-small k-group\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"></div><div class=\"k-append\"><button class=\"k-btn k-primary k-btn-icon k-small\" type=\"button\">
    <i class=\"ion-ios-search\"></i>
    </button></div></div><div class=\"k-input k-small k-group\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"></div><div class=\"k-append\"><button class=\"k-btn k-primary k-small\" type=\"button\">
    <span>Search</span>
    </button></div></div><div class=\"k-input k-mini\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div></div>"
```

#### `Input textarea`

```
"<div><div class=\"k-input\"><div class=\"k-wrapper\"><textarea class=\"k-inner k-textarea\" placeholder=\"please enter\" rows=\"2\" spellcheck=\"false\"></textarea></div></div><br><div class=\"k-input\"><div class=\"k-wrapper\"><textarea class=\"k-inner k-textarea\" placeholder=\"please enter\" rows=\"5\" spellcheck=\"false\"></textarea></div></div></div>"
```

#### `Message basic`

```
"<div class=\"k-btns\"><button class=\"k-btn\" type=\"button\">
    <span>info</span>
    </button><button class=\"k-btn\" type=\"button\">
    <span>error</span>
    </button><button class=\"k-btn\" type=\"button\">
    <span>warning</span>
    </button><button class=\"k-btn\" type=\"button\">
    <span>success</span>
    </button></div>"
```

#### `Message custom`

```
"<div><button class=\"k-btn\" type=\"button\">
    <span>custom message</span>
    </button><!--message--></div>"
```

#### `Message duration`

```
"<div class=\"k-btns\"><button class=\"k-btn\" type=\"button\">
    <span>close after 10s</span>
    </button><button class=\"k-btn\" type=\"button\">
    <span>stick message</span>
    </button></div>"
```

#### `Pagination basic`

```
"<div><div class=\"k-pagination\"><div class=\"k-pages\"><div class=\"k-prev k-disabled\"><i class=\"ion-ios-arrow-left\"></i></div><div class=\"k-page k-active\">1</div><div class=\"k-page\">2</div><div class=\"k-page\">3</div><div class=\"k-page\">4</div><div class=\"k-page\">5</div><div class=\"k-ellipsis\">...</div><div class=\"k-page\">20</div><div class=\"k-next\"><i class=\"ion-ios-arrow-right\"></i></div></div><div class=\"k-limits\"><div class=\"k-select k-active\"><div class=\"k-wrapper\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div><div class=\"k-pagination\"><div class=\"k-pages\"><div class=\"k-prev k-disabled\"><i class=\"ion-ios-arrow-left\"></i></div><div class=\"k-page k-active\">1</div><div class=\"k-page\">2</div><div class=\"k-page\">3</div><div class=\"k-page\">4</div><div class=\"k-page\">5</div><div class=\"k-ellipsis\">...</div><div class=\"k-page\">10</div><div class=\"k-next\"><i class=\"ion-ios-arrow-right\"></i></div></div><div class=\"k-limits\"><div class=\"k-select k-active\"><div class=\"k-wrapper\"><input type=\"hidden\" value=\"20\"><span class=\"k-value c-ellipsis\">20 条 / 页</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div><div class=\"k-pagination\"><div class=\"k-pages\"><div class=\"k-prev k-disabled\"><i class=\"ion-ios-arrow-left\"></i></div><div class=\"k-page k-active\">1</div><div class=\"k-page\">2</div><div class=\"k-page\">3</div><div class=\"k-page\">4</div><div class=\"k-page\">5</div><div class=\"k-ellipsis\">...</div><div class=\"k-page\">10</div><div class=\"k-next\"><i class=\"ion-ios-arrow-right\"></i></div></div><div class=\"k-limits\"><div class=\"k-select k-active\"><div class=\"k-wrapper\"><input type=\"hidden\" value=\"20\"><span class=\"k-value c-ellipsis\">20 条 / 页</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div></div>"
```

#### `Pagination counts`

```
"<div><div class=\"k-pagination\"><div class=\"k-pages\"><div class=\"k-prev k-disabled\"><i class=\"ion-ios-arrow-left\"></i></div><div class=\"k-page k-active\">1</div><div class=\"k-page\">2</div><div class=\"k-page\">3</div><div class=\"k-page\">4</div><div class=\"k-page\">5</div><div class=\"k-page\">6</div><div class=\"k-page\">7</div><div class=\"k-page\">8</div><div class=\"k-ellipsis\">...</div><div class=\"k-page\">20</div><div class=\"k-next\"><i class=\"ion-ios-arrow-right\"></i></div></div><div class=\"k-limits\"><div class=\"k-select k-active\"><div class=\"k-wrapper\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div><div class=\"k-pagination\"><div class=\"k-pages\"><div class=\"k-prev k-disabled\"><i class=\"ion-ios-arrow-left\"></i></div><div class=\"k-page k-active\">1</div><div class=\"k-page\">2</div><div class=\"k-page\">3</div><div class=\"k-page\">4</div><div class=\"k-page\">5</div><div class=\"k-page\">6</div><div class=\"k-page\">7</div><div class=\"k-ellipsis\">...</div><div class=\"k-page\">20</div><div class=\"k-next\"><i class=\"ion-ios-arrow-right\"></i></div></div><div class=\"k-limits\"><div class=\"k-select k-active\"><div class=\"k-wrapper\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div></div>"
```

#### `Pagination current`

```
"<div><div class=\"k-pagination\"><div class=\"k-pages\"><div class=\"k-prev k-disabled\"><i class=\"ion-ios-arrow-left\"></i></div><div class=\"k-page k-active\">1</div><div class=\"k-page\">2</div><div class=\"k-page\">3</div><div class=\"k-page\">4</div><div class=\"k-page\">5</div><div class=\"k-ellipsis\">...</div><div class=\"k-page\">20</div><div class=\"k-next\"><i class=\"ion-ios-arrow-right\"></i></div></div><div class=\"k-limits\"><div class=\"k-select k-active\"><div class=\"k-wrapper\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div></div>"
```

#### `Pagination goto`

```
"<div><div class=\"k-pagination\"><div class=\"k-pages\"><div class=\"k-prev k-disabled\"><i class=\"ion-ios-arrow-left\"></i></div><div class=\"k-page k-active\">1</div><div class=\"k-page\">2</div><div class=\"k-page\">3</div><div class=\"k-page\">4</div><div class=\"k-page\">5</div><div class=\"k-ellipsis\">...</div><div class=\"k-page\">20</div><div class=\"k-next\"><i class=\"ion-ios-arrow-right\"></i></div></div><div class=\"k-limits\"><div class=\"k-select k-active\"><div class=\"k-wrapper\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-goto\">
        跳至<div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div>页
    </div><div class=\"k-total\">共 200 条</div></div></div>"
```

#### `Pagination size`

```
"<div><div class=\"k-pagination\"><div class=\"k-pages\"><div class=\"k-prev k-disabled\"><i class=\"ion-ios-arrow-left\"></i></div><div class=\"k-page k-active\">1</div><div class=\"k-page\">2</div><div class=\"k-page\">3</div><div class=\"k-page\">4</div><div class=\"k-page\">5</div><div class=\"k-ellipsis\">...</div><div class=\"k-page\">20</div><div class=\"k-next\"><i class=\"ion-ios-arrow-right\"></i></div></div><div class=\"k-limits\"><div class=\"k-select k-active\"><div class=\"k-wrapper\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div><div class=\"k-pagination k-small\"><div class=\"k-pages\"><div class=\"k-prev k-disabled\"><i class=\"ion-ios-arrow-left\"></i></div><div class=\"k-page k-active\">1</div><div class=\"k-page\">2</div><div class=\"k-page\">3</div><div class=\"k-page\">4</div><div class=\"k-page\">5</div><div class=\"k-ellipsis\">...</div><div class=\"k-page\">20</div><div class=\"k-next\"><i class=\"ion-ios-arrow-right\"></i></div></div><div class=\"k-limits\"><div class=\"k-select k-small k-active\"><div class=\"k-wrapper\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div><div class=\"k-pagination k-mini\"><div class=\"k-pages\"><div class=\"k-prev k-disabled\"><i class=\"ion-ios-arrow-left\"></i></div><div class=\"k-page k-active\">1</div><div class=\"k-page\">2</div><div class=\"k-page\">3</div><div class=\"k-page\">4</div><div class=\"k-page\">5</div><div class=\"k-ellipsis\">...</div><div class=\"k-page\">20</div><div class=\"k-next\"><i class=\"ion-ios-arrow-right\"></i></div></div><div class=\"k-limits\"><div class=\"k-select k-mini k-active\"><div class=\"k-wrapper\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div></div>"
```

#### `Progress basic`

```
"<div class=\"k-progress k-bar k-active\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 50%;\"></div></div></div><div class=\"k-text\"><span>50%</span></div></div>"
```

#### `Progress children`

```
"<div><div class=\"k-progress k-circle k-active\"><svg class=\"k-canvas\" viewBox=\"0 0 120 120\">
        <circle class=\"k-meter\" cx=\"60\" cy=\"60\" r=\"55\" stroke-width=\"10\"></circle><circle class=\"k-value\" cx=\"60\" cy=\"60\" r=\"55\" stroke-dashoffset=\"207.34511513692635\" stroke-dasharray=\"345.57519189487726\" stroke-width=\"10\"></circle><circle class=\"k-animate\" cx=\"60\" cy=\"60\" r=\"55\" stroke-width=\"10\" stroke-dasharray=\"345.57519189487726\" stroke-dashoffset=\"345.57519189487726\"><animate attributeName=\"stroke-dashoffset\" begin=\"0s\" dur=\"2s\" repeatCount=\"indefinite\" from=\"345.57519189487726\" to=\"207.34511513692635\"></animate><animate attributeName=\"opacity\" begin=\"0s\" dur=\"2s\" repeatCount=\"indefinite\" from=\"0.2\" to=\"0\"></animate></circle>
    </svg><div class=\"k-text\"><div style=\"font-size: 14px; line-height: 20px;\">
            正在上传<br>
            40%
        </div></div></div><div class=\"k-btns\"><button class=\"k-btn k-btn-icon k-mini\" type=\"button\">
    <span>+</span>
    </button><button class=\"k-btn k-btn-icon k-mini\" type=\"button\">
    <span>-</span>
    </button></div></div>"
```

#### `Progress circle`

```
"<div><div class=\"k-progress k-circle k-active\"><svg class=\"k-canvas\" viewBox=\"0 0 120 120\">
        <circle class=\"k-meter\" cx=\"60\" cy=\"60\" r=\"55\" stroke-width=\"10\"></circle><circle class=\"k-value\" cx=\"60\" cy=\"60\" r=\"55\" stroke-dashoffset=\"172.78759594743863\" stroke-dasharray=\"345.57519189487726\" stroke-width=\"10\"></circle><circle class=\"k-animate\" cx=\"60\" cy=\"60\" r=\"55\" stroke-width=\"10\" stroke-dasharray=\"345.57519189487726\" stroke-dashoffset=\"345.57519189487726\"><animate attributeName=\"stroke-dashoffset\" begin=\"0s\" dur=\"2s\" repeatCount=\"indefinite\" from=\"345.57519189487726\" to=\"172.78759594743863\"></animate><animate attributeName=\"opacity\" begin=\"0s\" dur=\"2s\" repeatCount=\"indefinite\" from=\"0.2\" to=\"0\"></animate></circle>
    </svg><div class=\"k-text\"><span>50%</span></div></div></div>"
```

#### `Progress size`

```
"<div><div class=\"k-progress k-bar k-active\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 50%;\"></div></div></div><div class=\"k-text\"><span>50%</span></div></div><div class=\"k-progress k-bar k-active k-small\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 50%;\"></div></div></div><div class=\"k-text\"><span>50%</span></div></div><div class=\"k-progress k-bar k-active k-mini\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 50%;\"></div></div></div><div class=\"k-text\"><span>50%</span></div></div></div>"
```

#### `Progress status`

```
"<div><div class=\"k-progress k-bar k-active\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 50%;\"></div></div></div><div class=\"k-text\"><span>50%</span></div></div><div class=\"k-progress k-bar\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 50%;\"></div></div></div><div class=\"k-text\"><span>50%</span></div></div><div class=\"k-progress k-bar k-error\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 50%;\"></div></div></div><div class=\"k-text\"><span>50%</span></div></div><div class=\"k-progress k-bar k-success\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 50%;\"></div></div></div><div class=\"k-text\"><span>100%</span></div></div></div>"
```

#### `Radio basic`

```
"<div><label class=\"k-radio\"><span class=\"k-wrapper\"><input type=\"radio\" value=\"true\"></span><span class=\"k-text\">radio</span></label><label class=\"k-radio k-disabled\"><span class=\"k-wrapper\"><input type=\"radio\" disabled=\"\" value=\"true\"></span><span class=\"k-text\">disabled radio</span></label><label class=\"k-radio k-disabled k-checked\"><span class=\"k-wrapper\"><input type=\"radio\" disabled=\"\" value=\"true\"></span><span class=\"k-text\">disabled checked radio</span></label></div>"
```

#### `Radio group`

```
"<div><label class=\"k-radio\"><span class=\"k-wrapper\"><input type=\"radio\" name=\"language\" value=\"Javascript\"></span><span class=\"k-text\">Javascript</span></label><label class=\"k-radio\"><span class=\"k-wrapper\"><input type=\"radio\" name=\"language\" value=\"C++\"></span><span class=\"k-text\">C++</span></label><label class=\"k-radio\"><span class=\"k-wrapper\"><input type=\"radio\" name=\"language\" value=\"PHP\"></span><span class=\"k-text\">PHP</span></label>
    Your selected: 
</div>"
```

#### `Radio value`

```
"<div><label class=\"k-radio\"><span class=\"k-wrapper\"><input type=\"radio\" value=\"true\"></span><span class=\"k-text\">默认值：</span></label><label class=\"k-radio\"><span class=\"k-wrapper\"><input type=\"radio\" value=\"checked\"></span><span class=\"k-text\">
        指定选中时的取值为\"checked\": 
    </span></label><label class=\"k-radio\"><span class=\"k-wrapper\"><input type=\"radio\" value=\"[object Object]\"></span><span class=\"k-text\">
        指定选中时的取值为对象：
    </span></label></div>"
```

#### `Select basic`

```
"<div><div class=\"k-select\"><div class=\"k-wrapper\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div>
    You selected: 
</div>"
```

#### `Select clearable`

```
"<div><div class=\"k-select k-clearable\" style=\"margin-right: 10px\"><div class=\"k-wrapper\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span><span class=\"k-suffix\"><i class=\"k-clear ion-ios-close\"></i><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div><div class=\"k-select k-clearable\"><div class=\"k-wrapper\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span><span class=\"k-suffix\"><i class=\"k-clear ion-ios-close\"></i><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div>"
```

#### `Select custom`

```
"<div class=\"k-select\"><div class=\"k-wrapper\"><input type=\"hidden\"><div class=\"k-input k-fluid\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"请选择\"></div></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div>"
```

#### `Select disabled`

```
"<div><div class=\"k-select k-disabled\" style=\"margin-right: 10px\"><div class=\"k-wrapper\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div><div class=\"k-select\"><div class=\"k-wrapper\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div>"
```

#### `Select filterable`

```
"<div><div class=\"k-select\" style=\"margin-right: 10px\"><div class=\"k-wrapper\"><input type=\"hidden\"><div class=\"k-input k-fluid\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"请选择\"></div></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div><div class=\"k-select\"><div class=\"k-wrapper\"><input type=\"hidden\"><span class=\"k-values\"><div class=\"k-input k-auto-width\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"请选择\" style=\"width: 2px;\"><div class=\"k-fake\">请选择</div></div></div></span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div>"
```

#### `Select group`

```
"<div class=\"k-select\"><div class=\"k-wrapper\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div>"
```

#### `Select multiple`

```
"<div class=\"k-select\"><div class=\"k-wrapper\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div>"
```

#### `Select size`

```
"<div><div class=\"k-select\"><div class=\"k-wrapper\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div><div class=\"k-select k-small\"><div class=\"k-wrapper\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div><div class=\"k-select k-mini\"><div class=\"k-wrapper\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div>"
```

#### `Slider basic`

```
"<div><div class=\"k-slider\"><div class=\"k-wrapper\"><div class=\"k-bar\" style=\"width: 0%;\"></div><div class=\"k-handle\" style=\"left: 0%;\"></div><div class=\"k-box\"><span>0 </span><span>100</span></div></div><div class=\"k-spinner\"><button class=\"k-btn k-btn-icon k-left\" disabled=\"\" type=\"button\">
    <span>-</span>
    </button><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-right\" type=\"button\">
    <span>+</span>
    </button></div></div><div class=\"k-slider\"><div class=\"k-wrapper\"><div class=\"k-bar\" style=\"width: 0%;\"></div><div class=\"k-handle\" style=\"left: 0%;\"></div><div class=\"k-box\"><span>50 </span><span>500</span></div></div><div class=\"k-spinner\"><button class=\"k-btn k-btn-icon k-left\" disabled=\"\" type=\"button\">
    <span>-</span>
    </button><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-right\" type=\"button\">
    <span>+</span>
    </button></div></div></div>"
```

#### `Slider disabled`

```
"<div><div class=\"k-slider k-disabled\"><div class=\"k-wrapper\"><div class=\"k-bar\" style=\"width: 50%;\"></div><div class=\"k-handle\" style=\"left: 50%;\"></div><div class=\"k-box\"><span>0 </span><span>100</span></div></div><div class=\"k-spinner k-disabled\"><button class=\"k-btn k-btn-icon k-left\" disabled=\"\" type=\"button\">
    <span>-</span>
    </button><div class=\"k-input k-disabled\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" disabled=\"\"></div></div><button class=\"k-btn k-btn-icon k-right\" disabled=\"\" type=\"button\">
    <span>+</span>
    </button></div></div><div class=\"k-slider k-disabled\"><div class=\"k-wrapper\"><div class=\"k-bar\" style=\"width: 50%; left: 10%;\"></div><div class=\"k-handle\" style=\"left: 10%;\"></div><div class=\"k-handle\" style=\"left: 60%;\"></div><div class=\"k-box\"><span>50 </span><span>100</span></div></div></div></div>"
```

#### `Slider range`

```
"<div class=\"k-slider\"><div class=\"k-wrapper\"><div class=\"k-bar\" style=\"width: 26%; left: 50%;\"></div><div class=\"k-handle\" style=\"left: 50%;\"></div><div class=\"k-handle\" style=\"left: 76%;\"></div><div class=\"k-box\"><span>0 </span><span>100</span></div></div></div>"
```

#### `Slider step`

```
"<div><div class=\"k-slider\"><div class=\"k-wrapper\"><div class=\"k-bar\" style=\"width: 0%;\"></div><div class=\"k-handle\" style=\"left: 0%;\"></div><div class=\"k-box\"><span>0 </span><span>100</span></div></div><div class=\"k-spinner\"><button class=\"k-btn k-btn-icon k-left\" disabled=\"\" type=\"button\">
    <span>-</span>
    </button><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-right\" type=\"button\">
    <span>+</span>
    </button></div></div><div class=\"k-slider\"><div class=\"k-wrapper\"><div class=\"k-bar\" style=\"width: 0%;\"></div><div class=\"k-handle\" style=\"left: 0%;\"></div><div class=\"k-box\"><span>50 </span><span>500</span></div></div><div class=\"k-spinner\"><button class=\"k-btn k-btn-icon k-left\" disabled=\"\" type=\"button\">
    <span>-</span>
    </button><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-right\" type=\"button\">
    <span>+</span>
    </button></div></div></div>"
```

#### `Spinner basic`

```
"<div><div class=\"k-spinner\"><button class=\"k-btn k-btn-icon k-left\" type=\"button\">
    <span>-</span>
    </button><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-right\" type=\"button\">
    <span>+</span>
    </button></div><div class=\"k-spinner k-disabled\"><button class=\"k-btn k-btn-icon k-left\" disabled=\"\" type=\"button\">
    <span>-</span>
    </button><div class=\"k-input k-disabled\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" disabled=\"\"></div></div><button class=\"k-btn k-btn-icon k-right\" disabled=\"\" type=\"button\">
    <span>+</span>
    </button></div></div>"
```

#### `Spinner size`

```
"<div><div class=\"k-spinner\"><button class=\"k-btn k-btn-icon k-left\" type=\"button\">
    <span>-</span>
    </button><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-right\" type=\"button\">
    <span>+</span>
    </button></div><div class=\"k-spinner k-small\"><button class=\"k-btn k-btn-icon k-small k-left\" type=\"button\">
    <span>-</span>
    </button><div class=\"k-input k-small\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-small k-right\" type=\"button\">
    <span>+</span>
    </button></div><div class=\"k-spinner k-mini\"><button class=\"k-btn k-btn-icon k-mini k-left\" type=\"button\">
    <span>-</span>
    </button><div class=\"k-input k-mini\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-mini k-right\" type=\"button\">
    <span>+</span>
    </button></div></div>"
```

#### `Spinner step`

```
"<div><div class=\"k-spinner\"><button class=\"k-btn k-btn-icon k-left\" disabled=\"\" type=\"button\">
    <span>-</span>
    </button><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-right\" type=\"button\">
    <span>+</span>
    </button></div><div class=\"k-spinner\"><button class=\"k-btn k-btn-icon k-left\" disabled=\"\" type=\"button\">
    <span>-</span>
    </button><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-right\" type=\"button\">
    <span>+</span>
    </button></div></div>"
```

#### `Steps basic`

```
"<div><div class=\"k-steps c-clearfix\"><div class=\"k-step k-active\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-head\"><div class=\"k-inner\"><span>0</span></div></div><div class=\"k-main\"><div class=\"k-title\">选择配置</div><div class=\"k-content\">请选择主机的配置信息</div></div></div><div class=\"k-step\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-head\"><div class=\"k-inner\"><span>1</span></div></div><div class=\"k-main\"><div class=\"k-title\">选择弹性IP</div><div class=\"k-content\">请选择主机弹性IP的配置信息</div></div></div><div class=\"k-step\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-head\"><div class=\"k-inner\"><span>2</span></div></div><div class=\"k-main\"><div class=\"k-title\">设置VPC</div><div class=\"k-content\"></div></div></div></div><button class=\"k-btn k-primary\" type=\"button\">
    <span>Next Step</span>
    </button></div>"
```

#### `Steps error`

```
"<div class=\"k-steps c-clearfix\"><div class=\"k-step k-done\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-head\"><div class=\"k-inner\"><i class=\"ion-ios-checkmark-empty k-icon\"></i></div></div><div class=\"k-main\"><div class=\"k-title\">选择配置</div><div class=\"k-content\">请选择主机的配置信息</div></div></div><div class=\"k-step k-active k-error\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-head\"><div class=\"k-inner\"><i class=\"ion-ios-close-empty k-icon\"></i></div></div><div class=\"k-main\"><div class=\"k-title\">选择弹性IP</div><div class=\"k-content\">请选择主机弹性IP的配置信息</div></div></div><div class=\"k-step\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-head\"><div class=\"k-inner\"><span>2</span></div></div><div class=\"k-main\"><div class=\"k-title\">设置VPC</div><div class=\"k-content\"></div></div></div></div>"
```

#### `Tooltip basic`

```
"<div><span class=\"k-tooltip\">
        hover the text
    </span><!--placeholder--></div>"
```

#### `Tooltip content`

```
"<div><button class=\"k-btn\" type=\"button\">
    <span>Adjust Volume</span>
    </button><!--placeholder--></div>"
```

#### `Tooltip position`

```
"<div class=\"k-btns\"><button class=\"k-btn\" type=\"button\">
    <span>left</span>
    </button><!--placeholder--><button class=\"k-btn\" type=\"button\">
    <span>right</span>
    </button><!--placeholder--><button class=\"k-btn\" type=\"button\">
    <span>top</span>
    </button><!--placeholder--><button class=\"k-btn\" type=\"button\">
    <span>bottom</span>
    </button><!--placeholder--></div>"
```

#### `Tooltip trigger`

```
"<div class=\"k-btns\"><button class=\"k-btn\" type=\"button\">
    <span>hover</span>
    </button><!--placeholder--><button class=\"k-btn\" type=\"button\">
    <span>click</span>
    </button><!--placeholder--><button class=\"k-btn\" type=\"button\">
    <span>can hover</span>
    </button><!--placeholder--></div>"
```

#### `Transfer basic`

```
"<div class=\"k-transfer\"><div class=\"k-panel\"><div class=\"k-title\">请选择</div><div class=\"k-list\"><div class=\"k-item\"><label class=\"k-checkbox\"><span class=\"k-wrapper\"><input type=\"checkbox\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\">主机名0</span></label></div><div class=\"k-item\"><label class=\"k-checkbox\"><span class=\"k-wrapper\"><input type=\"checkbox\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\">主机名1</span></label></div><div class=\"k-item\"><label class=\"k-checkbox\"><span class=\"k-wrapper\"><input type=\"checkbox\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\">主机名2</span></label></div><div class=\"k-item k-disabled\"><label class=\"k-checkbox k-disabled\"><span class=\"k-wrapper\"><input type=\"checkbox\" disabled=\"\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\">主机名3</span></label></div><div class=\"k-item\"><label class=\"k-checkbox\"><span class=\"k-wrapper\"><input type=\"checkbox\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\">主机名4</span></label></div></div></div><div class=\"k-arrows\"><button class=\"k-btn k-btn-icon k-circle\" disabled=\"\" type=\"button\">
    <i class=\"k-icon ion-ios-arrow-left\"></i>
    </button><button class=\"k-btn k-btn-icon k-circle\" disabled=\"\" type=\"button\">
    <i class=\"k-icon ion-ios-arrow-right\"></i>
    </button></div><div class=\"k-panel\"><div class=\"k-title\">已选择 (0)</div><div class=\"k-list\"></div></div></div>"
```

#### `Transfer label`

```
"<div class=\"k-transfer\"><div class=\"k-panel\"><div class=\"k-title\">请选择</div><div class=\"k-input k-group k-clearable k-fluid\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"请输入\"><div class=\"k-suffix\"><i class=\"k-clear k-icon ion-ios-close\"></i></div></div><div class=\"k-append\"><button class=\"k-btn k-none k-btn-icon\" type=\"button\">
    <i class=\"ion-ios-search\"></i>
    </button></div></div><div class=\"k-list\"><div class=\"k-item\"><label class=\"k-checkbox\"><span class=\"k-wrapper\"><input type=\"checkbox\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\"><div><div>主机名0</div><p>前端服务器0 | 192.168.1.0</p></div></span></label></div><div class=\"k-item\"><label class=\"k-checkbox\"><span class=\"k-wrapper\"><input type=\"checkbox\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\"><div><div>主机名1</div><p>前端服务器1 | 192.168.1.1</p></div></span></label></div><div class=\"k-item\"><label class=\"k-checkbox\"><span class=\"k-wrapper\"><input type=\"checkbox\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\"><div><div>主机名2</div><p>前端服务器2 | 192.168.1.2</p></div></span></label></div><div class=\"k-item k-disabled\"><label class=\"k-checkbox k-disabled\"><span class=\"k-wrapper\"><input type=\"checkbox\" disabled=\"\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\"><div><div>主机名3</div><p>前端服务器3 | 192.168.1.3</p></div></span></label></div><div class=\"k-item\"><label class=\"k-checkbox\"><span class=\"k-wrapper\"><input type=\"checkbox\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\"><div><div>主机名4</div><p>前端服务器4 | 192.168.1.4</p></div></span></label></div></div></div><div class=\"k-arrows\"><button class=\"k-btn k-btn-icon k-circle\" disabled=\"\" type=\"button\">
    <i class=\"k-icon ion-ios-arrow-left\"></i>
    </button><button class=\"k-btn k-btn-icon k-circle\" disabled=\"\" type=\"button\">
    <i class=\"k-icon ion-ios-arrow-right\"></i>
    </button></div><div class=\"k-panel\"><div class=\"k-title\">已选择 (0)</div><div class=\"k-input k-group k-clearable k-fluid\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"请输入\"><div class=\"k-suffix\"><i class=\"k-clear k-icon ion-ios-close\"></i></div></div><div class=\"k-append\"><button class=\"k-btn k-none k-btn-icon\" type=\"button\">
    <i class=\"ion-ios-search\"></i>
    </button></div></div><div class=\"k-list\"></div></div></div>"
```

