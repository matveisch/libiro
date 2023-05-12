import styles from './Images.module.scss';
import image1 from '@public/vip-table-880_1000.jpg';
import image2 from '@public/Event-gallery-1.jpg';
import image3 from '@public/Beer-bar-in-private-hall.jpg';
import image4 from '@public/Candelabra-in-the-Private-room.jpg';
import image5 from '@public/Private-Hall-1.jpg';
import bgImage1 from '@public/fither-img3.jpg';
import bgImage2 from '@public/events-img2-mobile.jpg';
import bgImage3 from '@public/fither-img5.jpg';
import bgImage4 from '@public/fither-img4.jpg';
import bgImage5 from '@public/rest-screen-img4.jpg';
import Image from 'next/image';

export default function Images() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    bgImage1,
    bgImage2,
    bgImage3,
    bgImage4,
    bgImage5,
  ];

  return (
    <div className={styles.images}>
      {images.map((image, index) => (
        <Image src={image} alt={'image'} key={index} />
      ))}
    </div>
  );
}
