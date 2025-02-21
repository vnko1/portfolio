"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import { IconsEnum } from "@/types";
import { IconButton } from "@/components";

interface Props extends React.PropsWithChildren {
  options?: EmblaOptionsType;
  slides: React.ReactNode[];
  classNames?: string;
  slideClassNames?: string;
  title?: React.ReactNode;
  controllerView?: number;
}

const Carousel: React.FC<Props> = ({
  options,
  classNames = "",
  slides,
  slideClassNames = "",
  title,
  controllerView = 2,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, ...options });

  const scrollPrev = () => emblaApi?.scrollPrev();

  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className={classNames}>
      <div className="flex justify-between items-center">
        {title || null}
        {slides.length > controllerView ? (
          <div className="flex mb-4-xs gap-0-xl">
            <IconButton
              classNames="rotate-180 border border-light-primary dark:border-dark-primary"
              icon={IconsEnum.Arrow}
              size={24}
              onClick={scrollPrev}
              aria-label="Previous slide"
            />
            <IconButton
              icon={IconsEnum.Arrow}
              size={24}
              onClick={scrollNext}
              classNames="border border-light-primary dark:border-dark-primary"
              aria-label="Next slide"
            />
          </div>
        ) : null}
      </div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`ml-1-xs mr-2-xs ${
                slideClassNames ? slideClassNames : "flex-[0_0_100%]"
              }`}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
