import React from 'react';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { AiOutlineVideoCameraAdd } from 'react-icons/ai';

import { Avatar } from '../Avatar';

import { UserAction } from './UserAction';

export const UserActions: React.FC = () => {
  return (
    <div className="flex justify-end items-center">
      <div className="mr-2">
        <UserAction tooltip="Create">
          <AiOutlineVideoCameraAdd className="w-6 h-6" />
        </UserAction>
      </div>
      <div className="mr-2">
        <UserAction tooltip="Notifications">
          <IoIosNotificationsOutline className="w-6 h-6" />
        </UserAction>
      </div>
      <div className="w-16 flex items-center justify-center">
        <button>
          <Avatar src="/sunglasses6.png" />
        </button>
      </div>
    </div>
  );
};
