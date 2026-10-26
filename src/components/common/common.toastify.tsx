import { ToastContainer, toast } from 'react-toastify';

import { materialColors } from '../../utils/utils.colors';
import { Icons } from './common.icon';

export const Toastify = () => {
  return (
    <ToastContainer position="top-right" theme="colored" autoClose={6000} pauseOnHover stacked />
  );
};

export const successToast = (message: string) => {
  toast.success(message, {
    hideProgressBar: true,
    style: { backgroundColor: materialColors.green[800] },
    icon: () => <Icons iconType="checkMark" iconSize="2rem" />,
  });
};

export const errorToast = (message: string) => {
  toast.error(message, {
    hideProgressBar: true,
    style: { backgroundColor: materialColors.red[800] },
    icon: () => <Icons iconType="warning" iconSize="2rem" />,
  });
};

export const infoToast = (message: string) => {
  toast.info(message, {
    hideProgressBar: true,
    style: { backgroundColor: materialColors.blue[800] },
    icon: () => <Icons iconType="questionMark" iconSize="2rem" />,
  });
};
