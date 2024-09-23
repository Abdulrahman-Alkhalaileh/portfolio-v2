import Slider, { SliderProps } from "components/Slider/Slider";
import { ProjectType } from "helpers/types";
import React, { useState } from "react";
import ProjectCard from "../../ProjectCard";

export interface SliderViewProps extends Partial<SliderProps> {
  projects: ProjectType[];
}

const SliderView: React.FC<SliderViewProps> = ({ projects, ...props }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  return (
    <>
      <Slider
        {...props}
        count={projects.length}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      >
        {projects.map(
          (project: any, index: any) =>
            currentIndex === index && (
              <ProjectCard type="slider" key={crypto.randomUUID()} data={project} />
            )
        )}
      </Slider>
    </>
  );
};

export default SliderView;
