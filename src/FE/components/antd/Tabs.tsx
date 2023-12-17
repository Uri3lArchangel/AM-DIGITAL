'use client'
import React from 'react';
import { Tabs } from 'antd';

const onChange = (key: string) => {
  console.log(key);
};
const TabApp= ({items}:{items:any}) => {
    
return (
<Tabs defaultActiveKey="1" type="line"  className='lg:w-[75%] mx-auto'  centered items={items} onChange={onChange} />
)
};

export default TabApp;