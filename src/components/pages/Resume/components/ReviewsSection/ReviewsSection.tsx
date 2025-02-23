import React from "react";

import { ReviewCardType } from "@/types";
import { Carousel, ReviewCard } from "@/components";

interface Props {
  reviews: ReviewCardType[];
}
const ReviewsSection: React.FC<Props> = ({ reviews }) =>
  reviews.length ? (
    <section>
      <Carousel
        title={
          <h2 className="section-title">
            Client <span>Reviews</span>
          </h2>
        }
      >
        <ul className="flex">
          {reviews.map((review) => (
            <li
              key={review.id}
              className="ml-1-xs mr-1-xs flex-[0_0_100%] 2xl:flex-[0_0_60%]"
            >
              <ReviewCard {...review} />
            </li>
          ))}
        </ul>
      </Carousel>
    </section>
  ) : null;
export default ReviewsSection;
