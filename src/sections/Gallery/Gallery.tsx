import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType, Navigation } from 'swiper';
import { useRouter } from 'next/router';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './Gallery.module.scss';
import radish from '@public/radish.png';
import image2 from '@public/Event-gallery-1.jpg';
import steak from '@public/gallerypicsall/1220667.jpg';
import pavlovaCake from '@public/gallerypicsall/Pavlova cake.png';
import vipTable from '@public/vip-table-880_1000.jpg';
import image5 from '@public/Private-Hall-1.jpg';
import bgImage1 from '@public/fither-img3.jpg';
import bgImage2 from '@public/events-img2-mobile.jpg';
import bgImage3 from '@public/fither-img5.jpg';
import bgImage4 from '@public/fither-img4.jpg';
import bgImage5 from '@public/rest-screen-img4.jpg';

export default function Gallery() {
  const [rotateY, setRotateY] = useState(0);
  const [imageLoad, setImageLoad] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const { locale } = useRouter();
  const swiperRef = useRef<SwiperType>();
  const bgImagesArr = [bgImage1, bgImage2, bgImage3, bgImage4, bgImage5];
  const swiperImages = [image2, steak, pavlovaCake, vipTable, image5];

  useEffect(() => {
    function setWidth() {
      setScreenWidth(window.innerWidth);
    }
    setWidth();

    window.addEventListener('resize', setWidth);
    return () => {
      window.removeEventListener('resize', setWidth);
    };
  }, []);

  useEffect(() => {
    setImageLoad(true);
  }, []);

  return (
    <motion.section
      animate="animate"
      className={locale === 'he' ? styles.galleryRtl : styles.gallery}
    >
      {screenWidth > 1200 &&
        bgImagesArr.map((item, index) => {
          return (
            <motion.div
              animate={{
                x: [
                  null,
                  Math.random() * 40 - 20,
                  Math.random() * 40 - 20,
                  Math.random() * 40 - 20,
                ],
                y: [
                  null,
                  Math.random() * 40 - 20,
                  Math.random() * 40 - 20,
                  Math.random() * 40 - 20,
                ],
                rotateY: rotateY,
              }}
              transition={{
                default: {
                  duration: 8,
                  ease: 'easeInOut',
                  times: [0, 0.3, 0.7, 1],
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: 0.2 * index,
                },
                rotateY: {
                  duration: 0.3,
                },
              }}
              key={index}
              className={styles[`bgImage${index + 1}`]}
            >
              <Image src={item} alt="" />
            </motion.div>
          );
        })}
      <div className={styles.radish}>
        <Image src={radish} alt="Radish" />
      </div>

      <div className={styles.swiperWrapper}>
        <div
          className={styles.buttonPrev}
          onClick={() => {
            swiperRef.current?.slidePrev();
          }}
        >
          <svg
            width="54"
            height="19"
            viewBox="0 0 54 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.48542 0.999094L16.9707 9.48438L8.48542 17.9697"
              stroke="white"
              strokeWidth="2"
            ></path>
            <path d="M53.9707 9.48438H22.9707" stroke="white"></path>
          </svg>
        </div>
        <div
          className={styles.buttonNext}
          onClick={() => {
            swiperRef.current?.slideNext();
          }}
        >
          <svg
            width="54"
            height="19"
            viewBox="0 0 54 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.48542 0.999094L16.9707 9.48438L8.48542 17.9697"
              stroke="white"
              strokeWidth="2"
            ></path>
            <path d="M53.9707 9.48438H22.9707" stroke="white"></path>
          </svg>
        </div>
        <Swiper
          spaceBetween={50}
          modules={[Navigation]}
          slidesPerView={1}
          loop={true}
          className={styles.mySwiper}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={() => {
            setRotateY(20);
            setTimeout(() => {
              setRotateY(0);
              clearTimeout;
            }, 300);
          }}
        >
          {swiperImages.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image}
                loading={imageLoad ? 'eager' : 'lazy'}
                alt="gallery image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
}
