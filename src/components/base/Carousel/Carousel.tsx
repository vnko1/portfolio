"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import { IconsEnum } from "@/types";
import { IconButton } from "@/components";

interface Props extends React.PropsWithChildren {
  options?: EmblaOptionsType;
  slides: React.JSX.Element[];
  classNames?: string;
}

const Carousel: React.FC<Props> = ({ options, classNames, slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, ...options });

  const scrollPrev = () => emblaApi?.scrollPrev();

  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className={`overflow-hidden w-full ${classNames}`}>
      <div className="flex justify-end mb-4-xs gap-0-xl">
        <IconButton
          classNames="rotate-180 border border-light-primary dark:border-dark-primary"
          icon={IconsEnum.Arrow}
          size={24}
          onClick={scrollPrev}
        />
        <IconButton
          icon={IconsEnum.Arrow}
          size={24}
          onClick={scrollNext}
          classNames="border border-light-primary dark:border-dark-primary"
        />
      </div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((Slide, idx) => (
            <div key={idx} className="flex-[0_0_50%] mx-3-xs">
              {Slide}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
