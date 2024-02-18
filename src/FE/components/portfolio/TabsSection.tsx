import React from "react";
import TabApp from "../antd/Tabs";
import { TabsProps } from "antd";
import BlockchainProjectsDisplay from "./blockchain/BlockchainProjectsDisplay";
import Web2Projects from "./web2/Web2Projects";
import Web2ProjectsMain from "../subcomponents/Web2ProjectsMain";
import GraphicsCarousel from './graphics/GraphicsCarousel'

const items: TabsProps["items"] = [
  {
    key: "1",
    label: (
      <button className="w-fit text-dark_blue border-dark_blue border-2 px-4 py-2 rounded-full hover:bg-dark_blue hover:text-white">
        {" "}
        Blockchain (Web3.0)
      </button>
    ),
    children: <BlockchainProjectsDisplay />,
  },
  {
    key: "2",
    label: (
      <button className="w-fit text-dark_blue border-dark_blue border-2 px-4 py-2 rounded-full hover:bg-dark_blue hover:text-white">
        {" "}
        Web2.0
      </button>
    ),
    children: (
     <Web2ProjectsMain />
    ),
  },
  {
    key: "3",
    label: (
      <button className="w-fit text-dark_blue border-dark_blue border-2 px-4 py-2 rounded-full hover:bg-dark_blue hover:text-white">
        {" "}
        A.I / M.L
      </button>
    ),
    children: "Content of Tab Pane 3",
  },
  {
    key: "4",
    label: (
      <button className="w-fit text-dark_blue border-dark_blue border-2 px-4 py-2 rounded-full hover:bg-dark_blue hover:text-white">
        {" "}
        Graphics
      </button>
    ),
    children: <GraphicsCarousel />,
  },
];

const TabsSection = () => {
  return (
    <>
      <TabApp items={items} />
    </>
  );
};

export default TabsSection;
