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
  slideClassNames?: string;
}

const Carousel: React.FC<Props> = ({
  options,
  classNames = "",
  slides,
  slideClassNames = "",
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, ...options });

  const scrollPrev = () => emblaApi?.scrollPrev();

  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className={classNames}>
      {slides.length > 2 ? (
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
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((Slide, idx) => (
            <div
              key={idx}
              className={`${
                slideClassNames
                  ? slideClassNames
                  : "ml-1-xs mr-2-xs flex-[0_0_100%]"
              }`}
            >
              {Slide}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
