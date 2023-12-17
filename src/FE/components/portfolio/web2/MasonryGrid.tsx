"use client";
import React, { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import proj1 from "../../../../../public/assets/img_220011/web2Projects/project1.png";
import proj2 from "../../../../../public/assets/img_220011/web2Projects/project2.png";
import proj3 from "../../../../../public/assets/img_220011/web2Projects/project3.png";
import proj4 from "../../../../../public/assets/img_220011/web2Projects/project4.png";
import proj5 from "../../../../../public/assets/img_220011/web2Projects/project5.png";
import proj6 from "../../../../../public/assets/img_220011/web2Projects/project6.png";
import proj7 from "../../../../../public/assets/img_220011/web2Projects/project7.png";
import proj8 from "../../../../../public/assets/img_220011/web2Projects/project8.png";

import Image from "next/image";
import w2masonry from "../../../../../styles/portfolio/masonry/web2Masonry.module.css";

const images = [proj1, proj2, proj3, proj4, proj5, proj6, proj7, proj8];

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
function MasonryGrid({ viewerObj }: Props) {
  const [col, setCol] = useState(2);
  const [viwerImg, setViewerImg] = useState(null);
  const selectImage = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation()
    const url = e.currentTarget.src;

    if (viewerObj.viewer.display == "hidden" && viewerObj.viewer.img != url) {
      viewerObj.setViewerState({
        img: url,
        display: "block",
      });
    } else if (
      viewerObj.viewer.img == url &&
      viewerObj.viewer.display != "hidden"
    ) {
      viewerObj.setViewerState({ img: url, display: "block" });
    } else {
      viewerObj.setViewerState({ img: null, display: "hidden" });
    }
  };
  useEffect(() => {
    if (window.innerWidth >= 640) {
      setCol(4);
    }
  }, []);

  return (
    <div className="w-full  mx-auto">
      <Masonry columnsCount={col} gutter="10px" className={w2masonry.Masonry}>
        {images.map((img, i) => (
          <div className={w2masonry.Images} id={"web2Proj" + i} key={i}>
            <Image onClick={selectImage} alt="web2 project" src={img} key={i} />
          </div>
        ))}
      </Masonry>
    </div>
  );
}

export default MasonryGrid;
