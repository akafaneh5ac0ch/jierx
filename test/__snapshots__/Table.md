# `Table`

#### `getCheckedData`

```
"[{\"a\":\"多选1\"}]"
```

```
"[{\"a\":\"多选1\"},{\"a\":\"多选2\"}]"
```

```
"[{\"a\":\"单选1\"}]"
```

```
"[{\"a\":\"单选2\"}]"
```

#### `expand & shrink`

```
"<div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col></colgroup><thead><tr>
            
            <th title=\"点击整行展开内容\"><div class=\"k-th\"><div class=\"c-ellipsis\">点击整行展开内容</div></div></th></tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col></colgroup><tbody><tr class=\"\"><td title=\"Javey\">Javey</td></tr><tr class=\"k-expand\"><td colspan=\"1\"><div>Email: jiawei23716@sina.com</div></td></tr><tr class=\"\"><td title=\"Jiawei\">Jiawei</td></tr></tbody></table></div></div><div class=\"k-scrollbar\"><div class=\"k-inner\"></div></div></div>"
```

```
"<div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col></colgroup><thead><tr>
            
            <th title=\"点击整行展开内容\"><div class=\"k-th\"><div class=\"c-ellipsis\">点击整行展开内容</div></div></th></tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col></colgroup><tbody><tr class=\"\"><td title=\"Javey\">Javey</td></tr><tr class=\"\"><td title=\"Jiawei\">Jiawei</td></tr></tbody></table></div></div><div class=\"k-scrollbar\"><div class=\"k-inner\"></div></div></div>"
```

```
"<div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col></colgroup><thead><tr>
            
            <th title=\"点击+，展开内容\"><div class=\"k-th\"><div class=\"c-ellipsis\">点击+，展开内容</div></div></th></tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col></colgroup><tbody><tr class=\"\"><td><div><i class=\"icon ion-ios-plus-outline\"></i>Javey</div></td></tr><tr class=\"\"><td><div><i class=\"icon ion-ios-plus-outline\"></i>Jiawei</div></td></tr></tbody></table></div></div><div class=\"k-scrollbar\"><div class=\"k-inner\"></div></div></div>"
```

```
"<div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col></colgroup><thead><tr>
            
            <th title=\"点击+，展开内容\"><div class=\"k-th\"><div class=\"c-ellipsis\">点击+，展开内容</div></div></th></tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col></colgroup><tbody><tr class=\"\"><td><div><i class=\"icon ion-ios-minus-outline\"></i>Javey</div></td></tr><tr class=\"k-expand\"><td colspan=\"1\"><div>Email: jiawei23716@sina.com</div></td></tr><tr class=\"\"><td><div><i class=\"icon ion-ios-plus-outline\"></i>Jiawei</div></td></tr></tbody></table></div></div><div class=\"k-scrollbar\"><div class=\"k-inner\"></div></div></div>"
```

```
"<div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col></colgroup><thead><tr>
            
            <th title=\"点击+，展开内容\"><div class=\"k-th\"><div class=\"c-ellipsis\">点击+，展开内容</div></div></th></tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col></colgroup><tbody><tr class=\"\"><td><div><i class=\"icon ion-ios-plus-outline\"></i>Javey</div></td></tr><tr class=\"\"><td><div><i class=\"icon ion-ios-plus-outline\"></i>Jiawei</div></td></tr></tbody></table></div></div><div class=\"k-scrollbar\"><div class=\"k-inner\"></div></div></div>"
```

#### `sort`

```
"<div class=\"no-data-template\"><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th class=\"k-sortable\" title=\"姓名\"><div class=\"k-th\"><div class=\"c-ellipsis\">姓名</div><div class=\"k-sort k-desc\"><i class=\"k-icon icon-desc\"></i></div></div></th><th class=\"k-sortable\" title=\"年龄\"><div class=\"k-th\"><div class=\"c-ellipsis\">年龄</div><div class=\"k-sort\"><i class=\"k-icon icon-sortable\"></i></div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"cc\">cc</td><td title=\"5\">5</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"bb\">bb</td><td title=\"9\">9</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td><td title=\"aa\">aa</td><td title=\"1\">1</td></tr></tbody></table></div></div><div class=\"k-scrollbar\"><div class=\"k-inner\"></div></div></div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            
            <th class=\"k-sortable\" title=\"姓名\"><div class=\"k-th\"><div class=\"c-ellipsis\">姓名</div><div class=\"k-sort k-desc\"><i class=\"k-icon icon-desc\"></i></div></div></th><th class=\"k-sortable\" title=\"年龄\"><div class=\"k-th\"><div class=\"c-ellipsis\">年龄</div><div class=\"k-sort\"><i class=\"k-icon icon-sortable\"></i></div></div></th></tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"cc\">cc</td><td title=\"5\">5</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"bb\">bb</td><td title=\"9\">9</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td><td title=\"aa\">aa</td><td title=\"1\">1</td></tr></tbody></table></div></div><div class=\"k-scrollbar\"><div class=\"k-inner\"></div></div></div></div>"
```

```
"<div class=\"no-data-template\"><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th class=\"k-sortable\" title=\"姓名\"><div class=\"k-th\"><div class=\"c-ellipsis\">姓名</div><div class=\"k-sort\"><i class=\"k-icon icon-sortable\"></i></div></div></th><th class=\"k-sortable\" title=\"年龄\"><div class=\"k-th\"><div class=\"c-ellipsis\">年龄</div><div class=\"k-sort k-asc\"><i class=\"k-icon icon-asc\"></i></div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"aa\">aa</td><td title=\"1\">1</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"cc\">cc</td><td title=\"5\">5</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td><td title=\"bb\">bb</td><td title=\"9\">9</td></tr></tbody></table></div></div><div class=\"k-scrollbar\"><div class=\"k-inner\"></div></div></div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            
            <th class=\"k-sortable\" title=\"姓名\"><div class=\"k-th\"><div class=\"c-ellipsis\">姓名</div><div class=\"k-sort\"><i class=\"k-icon icon-sortable\"></i></div></div></th><th class=\"k-sortable\" title=\"年龄\"><div class=\"k-th\"><div class=\"c-ellipsis\">年龄</div><div class=\"k-sort k-asc\"><i class=\"k-icon icon-asc\"></i></div></div></th></tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"aa\">aa</td><td title=\"1\">1</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"cc\">cc</td><td title=\"5\">5</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td><td title=\"bb\">bb</td><td title=\"9\">9</td></tr></tbody></table></div></div><div class=\"k-scrollbar\"><div class=\"k-inner\"></div></div></div></div>"
```

#### `group`

```
"<div class=\"k-item k-active\"><span>全部</span></div><div class=\"k-item\"><span>运行中</span></div><div class=\"k-item\"><span>已关闭</span></div>"
```

```
"<div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"名称\"><div class=\"k-th\"><div class=\"c-ellipsis\">名称</div></div></th><th title=\"状态(运行中)\"><div class=\"k-th\"><div class=\"k-group\"><i class=\"k-arrow ion-ios-arrow-down\"></i><!--placeholder--><div class=\"c-ellipsis\">状态(运行中)</div></div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"主机1\">主机1</td><td title=\"运行中\">运行中</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"主机3\">主机3</td><td title=\"运行中\">运行中</td></tr></tbody></table></div></div><div class=\"k-scrollbar\"><div class=\"k-inner\"></div></div></div>"
```

```
"<div class=\"k-item\"><span>全部</span></div><div class=\"k-item k-active\"><span>运行中</span></div><div class=\"k-item\"><span>已关闭</span></div>"
```

```
"<div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            
            <th title=\"名称\"><div class=\"k-th\"><div class=\"c-ellipsis\">名称</div></div></th><th title=\"状态(运行中)\"><div class=\"k-th k-group-show\"><div class=\"k-group\"><i class=\"k-arrow ion-ios-arrow-down\"></i><!--placeholder--><div class=\"c-ellipsis\">状态(运行中)</div></div></div></th></tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"主机1\">主机1</td><td title=\"运行中\">运行中</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"主机3\">主机3</td><td title=\"运行中\">运行中</td></tr></tbody></table></div></div><div class=\"k-scrollbar\"><div class=\"k-inner\"></div></div></div>"
```

```
"<div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            
            <th title=\"名称\"><div class=\"k-th\"><div class=\"c-ellipsis\">名称</div></div></th><th title=\"状态(运行中, 已关闭)\"><div class=\"k-th k-group-show\"><div class=\"k-group\"><i class=\"k-arrow ion-ios-arrow-down\"></i><!--placeholder--><div class=\"c-ellipsis\">状态(运行中, 已关闭)</div></div></div></th></tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"主机1\">主机1</td><td title=\"运行中\">运行中</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"主机2\">主机2</td><td title=\"已关闭\">已关闭</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td><td title=\"主机3\">主机3</td><td title=\"运行中\">运行中</td></tr></tbody></table></div></div><div class=\"k-scrollbar\"><div class=\"k-inner\"></div></div></div>"
```

