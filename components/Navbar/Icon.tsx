import Image from 'next/image';
import Link from 'next/link';

import { Tooltip } from './Tooltip';

export const Icon: React.FC = () => {
  return (
    <Link href="/" className="w-32 flex items-center justify-center cursor-pointer">
      <Tooltip title="Twtube Home">
        <Image src="/Twtube.svg" alt="Twtube Logo" width={97} height={20} />
      </Tooltip>
    </Link>
  );
};
