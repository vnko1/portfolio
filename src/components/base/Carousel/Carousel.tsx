"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import { IconsEnum } from "@/types";
import { IconButton } from "@/components";

interface Props extends React.PropsWithChildren {
  options?: EmblaOptionsType;
  classNames?: string;
  slideClassNames?: string;
  title?: React.ReactNode;
}

const Carousel: React.FC<Props> = ({
  options,
  classNames = "",
  title,
  children,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, ...options });

  const scrollPrev = () => emblaApi?.scrollPrev();

  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className={`${classNames}`}>
      <div className="flex justify-between items-center mb-4-xs">
        {title || null}
        <div className="flex gap-0-xl">
          <IconButton
            classNames="rotate-180 border border-primary-main"
            icon={IconsEnum.Arrow}
            size={24}
            onClick={scrollPrev}
            aria-label="Previous slide"
            disabled={!emblaApi?.canScrollPrev()}
          />
          <IconButton
            icon={IconsEnum.Arrow}
            size={24}
            onClick={scrollNext}
            classNames="border border-primary-main"
            aria-label="Next slide"
            disabled={!emblaApi?.canScrollNext()}
          />
        </div>
      </div>
      <div className="overflow-hidden" ref={emblaRef}>
        {children}
      </div>
    </div>
  );
};

export default Carousel;
