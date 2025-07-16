import Image from 'next/image';

import banner from '@/assests/images/banner.png';

const Banner = () => {
  return (
    <div className="mb-8">
      <Image
        src={banner.src}
        width={banner.width}
        height={banner.height}
        alt="top banner"
        priority={true}
        quality={75}
        placeholder="empty"
        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="rounded-xl object-fill"
      />
    </div>
  );
};

export default Banner;
