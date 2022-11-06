import Link from 'next/link';
import React from 'react';

interface IIconLinkProps extends React.PropsWithChildren {
  title: string;
  href: string;
}
export const IconLink: React.FC<IIconLinkProps> = ({ title, href, children }) => {
  return (
    <Link href={href} title={title}>
      <span className="pt-4 pb-3.5 flex flex-col items-center hover:bg-white/10 rounded-xl">
        <span className="mb-1.5">{children}</span>
        <span className="max-h-3.5 text-xs text-ellipsis max-w-full overflow-hidden whitespace-nowrap">
          {title}
        </span>
      </span>
    </Link>
  );
};
