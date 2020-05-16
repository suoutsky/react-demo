// 只可以返回单一组件，也就是说即使你返回的是一个string，也需要用div包住
// 支持返回这五类：React elements, 数组和Fragments，Portal，String/numbers，boolean/null。
// function MyComponent() {
//     return (
//       <div>
//          hello world
//       <div>
//     );
// }
import React from 'react';
export default function RenderNew() {
    return [
        <div key="1">first element</div>,
        <div key="2">second element</div>,
    ];
}
// 注意：无论返回的形式是怎么样的，都要保持render是一个纯函数。所以要求我们不要改state的状态，同时不要直接跟浏览器直接交互，让它每次调用生成的结果都是一致的