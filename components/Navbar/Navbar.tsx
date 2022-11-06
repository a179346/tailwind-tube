import clsx from 'clsx';
import React, { useState } from 'react';

import { Icon } from './Icon';
import { MenuButton } from './MenuButton';
import { SearchBox } from './SearchBox';
import { UserActions } from './UserActions';

export const Navbar: React.FC = () => {
  const [isSearchBoxFocus, setIsSearchBoxFocuse] = useState<boolean>(false);

  return (
    <div className="top-0 left-0 fixed h-14 w-screen px-4 flex justify-between items-center">
      <div
        className={clsx('sm:flex', {
          hidden: isSearchBoxFocus,
          flex: !isSearchBoxFocus,
        })}
      >
        <MenuButton />
        <Icon />
      </div>
      <SearchBox isFocus={isSearchBoxFocus} setIsFocus={setIsSearchBoxFocuse} />
      <div
        className={clsx('sm:flex items-center h-10', {
          hidden: isSearchBoxFocus,
          flex: !isSearchBoxFocus,
        })}
      >
        <UserActions />
      </div>
    </div>
  );
};
