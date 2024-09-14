import Experience from "Sections/Experience/Experience";
import Home from "Sections/Home/Home";
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
    element: <Home />,
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
