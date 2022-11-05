import React from 'react';

import { Icon } from './Icon';
import { MenuButton } from './MenuButton';
import { SearchBox } from './SearchBox';
import { UserActions } from './UserActions';

export const Navbar: React.FC = () => {
  return (
    <div className="top-0 left-0 fixed h-14 w-screen pl-4 flex justify-between items-center">
      <div className="flex">
        <MenuButton />
        <Icon />
      </div>
      <div className="justify-center flex sm:ml-8 lg:items-center grow shrink mr-3">
        <SearchBox />
      </div>
      <div className="pr-4 flex items-center h-10">
        <UserActions />
      </div>
    </div>
  );
};
