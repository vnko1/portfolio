"use client";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { CareerHistoryType } from "@/types/careerHistory.types";

interface TimeLineProps {
  careerHistory: Array<CareerHistoryType>;
}

const Timeline: React.FC<TimeLineProps> = ({ careerHistory }) => {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline animate>
          {careerHistory.map((item) => (
            <VerticalTimelineElement
              key={item.id}
              visible={true}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date={item.period}
              iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.subTitle}
              </h4>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Timeline;
