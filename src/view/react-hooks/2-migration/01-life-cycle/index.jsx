import React, { useState, useEffect, useRef }  from 'react';
import { Button } from 'antd';

const Input = (props) => {
    const ref = useRef();
    useEffect(() => {
        console.log('props.value-------->', props.value);
        ref.current.value = props.value;
    }, [props.value])
    // return <input value={props.value} ref={ref}/>
    return <input ref={ref}/>
};
export default () => {
    const [count, setCount] = useState(0);
    console.info('father.start---------->');
    useEffect(() => {
      console.log('father.end-------->'); // 依赖没变, 此处相当于
    }, [])
    return (
        <>
            <Input value={count}/>
            <Button onClick={() => setCount(x => x+1)}> test </Button>
        </>
    );
}