import React, { useState }  from 'react';
import { Button } from 'antd';
export default () => {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    console.info('render......');
    return <div>
        <div>{count}</div>
        <div>{count1}</div>
        <Button onClick={() => {
            setCount(x => x + 1) 
            setCount1(x => x + 1) 
        }}>+1</Button>
    </div> 
}