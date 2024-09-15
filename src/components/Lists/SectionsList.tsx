import React, { useEffect, useState } from "react";
import { sections } from "configs/sectionItems";
import { useLocation } from "react-router-dom";
import AnimatedTabs, { AnimatedTabsProps } from "components/Animations/AnimatedTabs";

export interface SectionsListProps extends Partial<AnimatedTabsProps>{
  layoutId?: string;
}

const SectionsList: React.FC<SectionsListProps> = ({ layoutId,...props }) => {
  const [selected, setSelected] = useState(0);
  const path = useLocation();

  useEffect(() => {
    const selectedSection = sections.find(
      (section) => section.path === path.pathname
    );
    if (!selectedSection) return;
    setSelected(selectedSection.index);
  }, [path]);

  const handleChangeSection = (index: number, currentPath: string) => {
    path.pathname === currentPath && setSelected(index);
  };
  return (
    <>
      <AnimatedTabs
        selected={selected}
        handleChange={handleChangeSection}
        items={sections}
        layoutId={layoutId || "sectionsLayout"}
        {...props}
      />
    </>
  );
};

export default SectionsList;
