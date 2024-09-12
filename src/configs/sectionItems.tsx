import H1 from "components/Typography/H1";
import Experience from "Sections/Experience/Experience";
import Projects from "Sections/Projects/Projects";
import Skills from "Sections/Skills/Skills";

export interface AnimatedItemType {
  index: number;
  name: string;
  element: React.ReactNode;
  path?: string;
}

export const sections: AnimatedItemType[] = [
  {
    index: 0,
    name: "home",
    element: <H1 textAlign='center'>Abdulrahman Alkhalaileh</H1>,
    path: "/",
  },
  {
    index: 1,
    name: "skills",
    element: <Skills />,
    path: "/skills",
  },
  {
    index: 2,
    name: "experience",
    element: <Experience />,
    path: "/experience",
  },
  { index: 3, name: "projects", element: <Projects />, path: "/projects" },
];

