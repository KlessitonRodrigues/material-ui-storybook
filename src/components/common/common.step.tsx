import { Step, StepLabel, Stepper } from '@mui/material';
import { useMemo } from 'react';

interface StepsProps {
  className?: string;
  direction?: 'horizontal' | 'vertical';
  steps: { label?: string; active?: boolean }[];
}

export const Steps = (props: StepsProps) => {
  const { className = '', steps, direction = 'horizontal' } = props;

  const activeStep = useMemo(() => {
    return steps.reduce((acc, step, index) => (step.active ? index : acc), -1);
  }, [steps]);

  return (
    <Stepper
      className={className}
      orientation={direction === 'vertical' ? 'vertical' : 'horizontal'}
      activeStep={activeStep}
      alternativeLabel={direction === 'horizontal'}
    >
      {steps.map(({ label }, index) => (
        <Step key={index}>
          <StepLabel>{label || ''}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
