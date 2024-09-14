import React from 'react'
import H1 from 'components/Typography/H1';
import DraggableElement from 'components/Animations/DraggableIndecator';

export interface HomeProps {
  
}

const Home: React.FC<HomeProps> = ({ ...props }) => {
  return (
    <>
      <H1>Abdulrahman Alkhalaileh</H1>
      <H1>Still In Progress...</H1>
      <DraggableElement direction='vertical' />
    </>
  )
}

export default Home;