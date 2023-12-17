import React from "react";
import { Carousel } from "antd";
import {  BiChevronLeft, BiChevronRight } from "react-icons/bi";

const CarouselApp = ({
  children,
  play,
  classname,
}: {
  children: React.ReactNode;
  play: boolean;
  classname?: string;
}) => {
  if (play) {
    return (
      <Carousel
        arrows
        prevArrow={<BiChevronLeft />}
        nextArrow={<BiChevronRight />}
        className={classname}
        autoplay
      >
        {children}
      </Carousel>
    );
  }

  return (
    <div className="relative w-full h-full">
      <Carousel
        arrows
        prevArrow={<BiChevronLeft />}
        nextArrow={<BiChevronRight />}
      >
        {children}
      </Carousel>
    </div>
  );
};

export default CarouselApp;
