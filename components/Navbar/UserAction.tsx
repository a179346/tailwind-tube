import React from 'react';

import { Tooltip } from './Tooltip';

interface IUserActionProps extends React.PropsWithChildren {
  tooltip: string;
}
export const UserAction: React.FC<IUserActionProps> = ({ children, tooltip }) => {
  return (
    <div className="w-10 h-10 flex justify-center items-center rounded-3xl hover:bg-white/10 cursor-pointer">
      <Tooltip title={tooltip}>{children}</Tooltip>
    </div>
  );
};
