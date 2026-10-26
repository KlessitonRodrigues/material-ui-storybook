import { useMemo } from 'react';

import { toCss } from '../../utils/utils.string';

interface StepsProps {
  className?: string;
  direction?: 'horizontal' | 'vertical';
  steps: { label?: string; active?: boolean }[];
}

export const Steps = (props: StepsProps) => {
  const { className = '', steps, direction = 'horizontal' } = props;

  const StepList = useMemo(() => {
    return steps.map(({ label, active }, index) => (
      <li key={index} className={`step text-xs ${toCss(active, 'step-primary')}`}>
        {label || ''}
      </li>
    ));
  }, [steps]);

  return <ul className={`steps steps-${direction} ${className}`}>{StepList}</ul>;
};

/* tailwind include 
   steps-horizontal steps-vertical
*/
