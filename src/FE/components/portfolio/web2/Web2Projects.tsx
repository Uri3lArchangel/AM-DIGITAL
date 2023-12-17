import React from "react";
import MasonryGrid from "./MasonryGrid";

interface Props {
  viewerObj: {
    viewer: {
      img: any;
      display: "hidden" | "block";
    };
    setViewerState: React.Dispatch<
      React.SetStateAction<{
        img: any;
        display: "hidden" | "block";
      }>
    >;
  };
}
const Web2Projects = ({ viewerObj }: Props) => {
  return (
    <section style={{filter:viewerObj.viewer.display == "block"?"brightness(0.1) blur(10px)":"brightness(1) blur(0px)" }}>
      <MasonryGrid viewerObj={viewerObj} />
    </section>
  );
};

export default Web2Projects;
