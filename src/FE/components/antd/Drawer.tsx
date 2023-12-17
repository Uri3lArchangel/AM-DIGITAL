import React from 'react';
import { Drawer } from 'antd';

interface Props{
    drawerState:boolean
    drawerStateAct: React.Dispatch<React.SetStateAction<boolean>>
    DrawerData:string | React.ReactNode

}

const DrawerApp= ({drawerState,drawerStateAct,DrawerData}:Props) => {

  

  const onClose = () => {
    drawerStateAct(false)
  };

  return (
    <>
      <Drawer title="Menu" placement="right" onClose={onClose} open={drawerState}>
        {DrawerData}
      </Drawer>
    </>
  );
};

export default DrawerApp;