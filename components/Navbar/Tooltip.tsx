import React, { useRef } from 'react';

interface ITooltipProps extends React.PropsWithChildren {
  title: string;
}

export const Tooltip: React.FC<ITooltipProps> = ({ children, title }) => {
  const container = useRef<HTMLSpanElement>(null);
  const tipRef = useRef<HTMLSpanElement>(null);

  const handleMouseEnter = () => {
    if (!container?.current || !tipRef?.current) return;
    const { left } = container.current.getBoundingClientRect();
    const containerWidth = container.current.offsetWidth;
    const tipWidth = tipRef.current.offsetWidth;
    tipRef.current.style.left = left + 0.5 * containerWidth - 0.5 * tipWidth + 'px';
  };

  return (
    <span className="group" ref={container} onMouseEnter={handleMouseEnter}>
      {children}
      <span
        ref={tipRef}
        className="w-auto rounded-md bg-gray-500 absolute p-2 mt-2 top-full text-xs invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-100"
      >
        {title}
      </span>
    </span>
  );
};
