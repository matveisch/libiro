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
import data from '../../imgImports';
import styles from './Images.module.scss';
import NextJsImage from '@/components/NextJsImage';

function getImages() {
  return data.map((img) => img.img);
}

export default function Images() {
  const [index, setIndex] = useState(-1);

  return (
    <div className={styles.images}>
      <PhotoAlbum
        photos={getImages()}
        layout={'columns'}
        renderPhoto={NextJsImage}
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
        slides={getImages()}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Thumbnails, Zoom, Counter]}
      />
    </div>
  );
}
