
// 主要特性：Fragement
// React 15：render函数只能接受一个组件，所以一定要外层包一层<div>。
// React16：可以通过Fragement直接返回多个组件

import React from 'react';
export default function RenderFragment() {
    return (
       <>
        <div key="1">first RenderFragment</div>
        <div key="2">second RenderFragment</div>
       </> 
    );
}
