import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import { materialColors } from '../../utils/utils.colors';

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  severity?: 'success' | 'info' | 'warning' | 'error';
  message?: string;
}

const severityMap = {
  success: {
    bg: materialColors.green[50],
    fg: materialColors.green[800],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    ),
  },
  info: {
    bg: materialColors.blue[50],
    fg: materialColors.blue[800],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  warning: {
    bg: materialColors.amber[50],
    fg: materialColors.orange[900],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
      />
    ),
  },
  error: {
    bg: materialColors.red[50],
    fg: materialColors.red[800],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 9v3.75m0 3.75h.007v.008H12v-.008ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    ),
  },
};

export const Alert = (props: AlertProps) => {
  const { className, children, severity = 'success', message, ...alertProps } = props;
  const { bg, fg, icon } = severityMap[severity];

  return (
    <div
      role="alert"
      className={twMerge('alert items-start rounded-sm border-none py-2.5 px-4', className)}
      style={{ backgroundColor: bg, color: fg }}
      {...alertProps}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="stroke-current h-6 w-6 shrink-0"
      >
        {icon}
      </svg>
      <span className="text-sm">{message || children || '12 unread messages. Tap to see.'}</span>
    </div>
  );
};
