import Image from 'next/image';
import Link from 'next/link';

export const Icon: React.FC = () => {
  return (
    <Link
      href="/"
      title="Twtube Home"
      className="w-32 flex items-center justify-center cursor-pointer"
    >
      <Image src="/Twtube.svg" alt="Twtube Logo" width={97} height={20} />
    </Link>
  );
};
