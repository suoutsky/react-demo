import React, { useState, useEffect, useRef, useImperativeHandle }  from 'react';
import { Button } from 'antd';

const Input = (props) => {
    const ref = useRef();
    useImperativeHandle(ref, () => {
        ref.current.focus();
    }, [])
    useEffect(() => {
        console.log('props.value-------->', props.value);
        ref.current.value = props.value;
    }, [props.value])
    return <input ref={ref} onChange={(e) => props.onChange(e.currentTarget.value)}/>
};
export default () => {
    const [count, setCount] = useState(0);
    console.info('father.start---------->');
    useEffect(() => {
      console.log('father.end-------->');
    }, [])
   
    return (
        <>
            <Input value={count} onChange={x => console.log(x)} initialValue={100}/>
            <Button onClick={() => setCount(x => x+1)}> test </Button>
        </>
    );
}