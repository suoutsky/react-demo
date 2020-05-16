import React, { useState } from 'react';
import { Button } from 'antd';
import FnDemo from './fn';
import CallbackDemo from './callback';
import StringDemo from './string';
export default function () {
   const [tap, setTap] = useState(1);
   return (
       <>
        <ul>
            <li style={{padding: '4px'}}><Button type="primary" onClick={() => setTap(1)}>callBack-ref</Button></li>
            <li style={{padding: '4px'}}><Button type="dashed" onClick={() => setTap(3)}>string-ref</Button></li>
            <li style={{padding: '4px'}}><Button onClick={() => setTap(2)}>fn-component</Button></li>
        </ul>
        <div style={{padding: '40px'}}>
             { tap === 1 ? <CallbackDemo/> :
               tap === 3 ? <StringDemo/>:
               <FnDemo/>
             }
        </div>
       </> 
   );
}