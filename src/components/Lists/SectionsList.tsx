import React, { useEffect, useState } from "react";
import { sections } from "configs/sectionItems";
import { useLocation } from "react-router-dom";
import AnimatedTabs from "components/Animations/AnimatedTabs";

export interface SectionsListProps {}

const SectionsList: React.FC<SectionsListProps> = () => {
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
        layoutId="sectionsLayout"
      />
    </>
  );
};

export default SectionsList;
