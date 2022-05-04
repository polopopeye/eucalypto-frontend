// Due limitations of lib this component is an empty step and not a real one.
import React from 'react';
import { Animator, FadeIn, ScrollPage } from 'react-scroll-motion';

interface EmptyStepProps {
  page: number;
}

const EmptyStep = (props: EmptyStepProps) => {
  const { page } = props;
  return (
    <>
      <ScrollPage page={page}>
        <Animator animation={FadeIn()}>
          <div></div>
        </Animator>
      </ScrollPage>
    </>
  );
};

export default EmptyStep;
