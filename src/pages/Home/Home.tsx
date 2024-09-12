import { BoxProps, Stack } from '@mui/material';
import React from 'react'
import Experience from './Sections/Experience/Experience';
import Projects from './Sections/Projects/Projects';
import Skills from './Sections/Skills/Skills';
import ThemeSelect from 'components/theme/ThemeSelect';

export interface HomePageProps extends BoxProps{
  
}

const HomePage: React.FC<HomePageProps> = ({ ...props }) => {
  return (
    <Stack mx={{ xs: 1,md:1, lg: 3, xl: 7 }} pb={10} gap={12}>
      <ThemeSelect />
      <Skills />
      <Experience/>
      <Projects />
    </Stack>
  )
}

export default HomePage;