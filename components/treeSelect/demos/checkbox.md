---
title: 复选框
order: 2
---


```vdt
import {TreeSelect} from 'kpc';

<TreeSelect
    checkbox
    data={{ [
        {
            label: 'First floor-1',
            key: '1',
            children: [
                {
                    label: 'Second floor-1.1',
                    key: '1.1',
                    children: [
                        {
                            label: 'Third floor-1.1.1',
                            key: '1.1.1'
                        }
                    ]
                }
            ]
        },
        {
            label: 'First floor-2',
            key: '2',
            children: [
                {
                    label: 'Second floor-2.1',
                    key: '2.1',
                    children: [
                        {
                            label: 'Third floor-2.1.1',
                            key: '2.1.1' 
                        },
                        {
                            label: 'Third floor-2.1.2',
                            key: '2.1.2'
                        }
                    ]
                },
                {
                    label: 'Second floor-2.2',
                    disabled: true,
                    key: '2.2',
                    children: [
                        {
                            label: 'Third floor-2.2.1',
                            key: '2.2.1'
                        }
                    ]
                }
            ]
        }
    ] }}
/>
```
