/* eslint @next/next/no-img-element: off */
import React from 'react';

export const Avatar: React.FC<{ src: string }> = ({ src }) => {
  return <img alt="avatar" src={src} className="w-8 h-8 rounded-full" />;
};
