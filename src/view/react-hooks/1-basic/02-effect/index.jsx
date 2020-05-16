import React, { useState, useEffect }  from 'react';
export default () => {
    const [count, setCount] = useState(0);
    console.info('render......');

    // useEffect(() => {
    //     console.info('useEffect......');
    //     setTimeout(() => {
    //        setCount(x => x + 1);
    //     }, 1000)
    // })
    
    useEffect(() => {
        console.info('useEffect......');
        setTimeout(() => {
           setCount(x => x + 1);
        }, 1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count > 5 ? 5 : count])
    // [] 依赖，监听的值，触发
    return <div>
        <div>{count}</div>
    </div> 
}