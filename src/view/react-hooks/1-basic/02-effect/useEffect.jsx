// useEffect
// 基本上90%的情况下,都应该用这个,这个是在render结束后,
// 你的callback函数执行,但是不会block browser painting,\
// 算是某种异步的方式吧,但是class的componentDidMount 和componentDidUpdate是同步的,
// 在render结束后就运行,
// useEffect在大部分场景下都比class的方式性能更好.

import React, { useEffect, useLayoutEffect, useState } from "react";
import TweenOne from 'rc-tween-one';
import './index.css';

const Animate = () => {
    console.time('useLayoutEffect');
    console.time('useEffect');
    const [x, setX] = useState({x: 600});
    useEffect(() => {
        setX({x: 600});
        console.timeEnd('useEffect');
    }, []);
    useLayoutEffect(() => {
        /*下面这段代码的意思是当组件加载完成后,在0秒的时间内,将方块的横坐标位置移到600px的位置*/
        // setX({x: 600});
        console.timeEnd('useLayoutEffect');
    }, []);
    return (
        <div className='animate'>
            <TweenOne  animation={x} className="square">square</TweenOne>
        </div>
    );
};

export default Animate;