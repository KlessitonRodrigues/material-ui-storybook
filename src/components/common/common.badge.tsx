interface BadgeProps {
  content: string | number;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'info' | 'error' | 'success' | 'warning' | 'neutral';
  children?: React.ReactNode;
}

export const Badge = (props: BadgeProps) => {
  const { content, size = 'xs', color = 'error', children } = props;

  if (!content) return <>{children}</>;

  return (
    <div className="indicator">
      <span
        className={`indicator-item badge badge-${size} badge-${color} border-none shadow-xs font-medium`}
      >
        {content}
      </span>
      {children && <div className="badge-children">{children}</div>}
    </div>
  );
};

/* tailwind include
   badge-primary badge-secondary badge-info badge-error badge-success badge-warning badge-neutral
   badge-xs badge-sm badge-md badge-lg
*/
