import { useState } from 'react';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/plugins/counter.css';

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

export default function Images() {
  const [index, setIndex] = useState(-1);
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
      <PhotoAlbum
        photos={images}
        layout={'columns'}
        onClick={({ index }) => setIndex(index)}
        columns={(containerWidth) => {
          if (containerWidth < 768) return 1;
          return 4;
        }}
      />
      <Lightbox
        counter={{
          style: { top: 0, right: 0, bottom: 'unset', left: 'unset' },
        }}
        slides={images}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Thumbnails, Zoom, Counter]}
      />
    </div>
  );
}
