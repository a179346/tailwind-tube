import React from 'react';

import { Tooltip } from './Tooltip';

interface IUserActionProps extends React.PropsWithChildren {
  tooltip: string;
  onClick?: () => void;
}

export const UserAction: React.FC<IUserActionProps> = ({ children, tooltip, onClick }) => {
  return (
    <Tooltip title={tooltip}>
      <button
        className="w-10 h-10 flex justify-center items-center rounded-3xl hover:bg-white/10 cursor-pointer"
        onClick={onClick}
      >
        {children}
      </button>
    </Tooltip>
  );
};
