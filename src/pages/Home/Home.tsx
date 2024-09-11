import { Box, BoxProps } from '@mui/material';
import React from 'react'
import Experience from './Sections/Experience/Experience';
import Projects from './Sections/Projects/Projects';

export interface HomePageProps extends BoxProps{
  
}

const HomePage: React.FC<HomePageProps> = ({ ...props }) => {
  return (
    <Box mx={{ xs: 0, lg: 3, xl: 7 }} pb={10}>
      <Experience/>
      <Projects />
    </Box>
  )
}

export default HomePage;