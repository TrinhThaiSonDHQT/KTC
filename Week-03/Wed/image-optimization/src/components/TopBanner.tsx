import Link from 'next/link';
import Image from 'next/image';

import topBanner from '@/assests/images/top-banner.png';

const TopBanner = () => {
  return (
    <div className="bg-[#85E3FF] px-7">
      <Link href="/">
        {/* <img src={topBanner.src} alt="top banner" /> */}
        <Image
          src={topBanner.src}
          width={topBanner.width}
          height={topBanner.height}
          alt="top banner"
          priority={true}
          quality={75}
          placeholder="empty"
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className='object-fill'
        />
      </Link>
    </div>
  );
};

export default TopBanner;
