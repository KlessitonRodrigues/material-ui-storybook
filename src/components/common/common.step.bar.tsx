import { toBooleanStr } from '../../utils/utils.string';

interface StepBarProps {
  className?: string;
  direction?: 'horizontal' | 'vertical';
  stepItems: { active: boolean; onClick?: () => void }[];
}

const styleMap = {
  horizontal: {
    stepStyle: 'flex gap-2 p-2',
    stepItem: 'w-10 h-1',
  },
  vertical: {
    stepStyle: 'flex flex-col gap-2 p-2',
    stepItem: 'h-10 w-1',
  },
  activeItem: {
    true: 'bg-bg1',
    false: 'bg-bg1 opacity-50',
  },
};

export const StepBar = (props: StepBarProps) => {
  const { className, direction = 'horizontal', stepItems } = props;

  return (
    <div className={`${styleMap[direction].stepStyle} ${className || ''}`}>
      {stepItems.map(({ active, onClick }, i) => (
        <div
          key={i}
          className={`${styleMap[direction].stepItem} ${styleMap.activeItem[toBooleanStr(active)]}`}
          onClick={onClick}
        />
      ))}
    </div>
  );
};
