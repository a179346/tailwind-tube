import React, { useState } from 'react';

import { Icon } from './Icon';
import { MenuButton } from './MenuButton';
import { SearchBox } from './SearchBox';
import { UserActions } from './UserActions';

export const Navbar: React.FC = () => {
  const [isSearchBoxFocus, setIsSearchBoxFocuse] = useState<boolean>(false);

  return (
    <div className="top-0 left-0 fixed h-14 w-screen px-4 flex justify-between items-center">
      <div className={`${isSearchBoxFocus ? 'hidden ' : 'flex'} sm:flex`}>
        <MenuButton />
        <Icon />
      </div>
      <SearchBox isFocus={isSearchBoxFocus} setIsFocus={setIsSearchBoxFocuse} />
      <div className={`${isSearchBoxFocus ? 'hidden ' : 'flex'} sm:flex items-center h-10`}>
        <UserActions />
      </div>
    </div>
  );
};
