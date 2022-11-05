import React from 'react';
import { VscMenu } from 'react-icons/vsc';

export const MenuButton: React.FC = () => {
  return (
    <div className="flex h-10 w-10 self-center justify-center items-center cursor-pointer rounded-3xl hover:bg-white/10">
      <VscMenu className="w-6 h-6" />
    </div>
  );
};
