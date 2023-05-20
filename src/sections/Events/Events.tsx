import styles from './Events.module.scss';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import modernLogo from '@public/logo.png';
import phone from '@public/phone-call.png';
import star from '@public/star.png';
import whatsapp from '@public/whatsapp.png';
import ActionButton from '@/components/ActionButton/ActionButton';
import backPhoto from '@public/Фон2.jpg';
import firstPhoto from '@public/ליבריה.gif';
import secondPhoto from '@public/ליבריה (1).gif';
import thirdPhoto from '@public/ליבריה (2).gif';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = i * 0.7;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'tween', duration: 0.7, ease: 'linear' },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};
export default function Events() {
  const { t } = useTranslation();
  const buttons = [
    {
      title: 'וואטסאפ',
      img: whatsapp,
      link: '',
    },
    {
      title: 'לקוחות מספרים',
      img: star,
      link: '',
    },
    {
      title: 'חייג/י אלינו',
      img: phone,
      link: '',
    },
  ];

  return (
    <section className={styles.events}>
      <div className={styles.backPhoto}>
        <Swiper slidesPerView={1} loop={true} className={styles.mySwiper}>
          <SwiperSlide className={styles.mySwiperSlide}>
            <Image src={firstPhoto} alt="gallery image" />
          </SwiperSlide>
          <SwiperSlide className={styles.mySwiperSlide}>
            <Image src={secondPhoto} alt="gallery image" />
          </SwiperSlide>
          <SwiperSlide className={styles.mySwiperSlide}>
            <Image src={thirdPhoto} alt="gallery image" />
          </SwiperSlide>
        </Swiper>
      </div>
      <Image src={modernLogo} alt={'logo'} className={styles.logo} />
      <div className={styles.events__container}>
        <div className={styles.events__buttonFrame}>
          <span>{t('events')}</span>
          <motion.svg
            preserveAspectRatio="none"
            width="100%"
            height="100%"
            viewBox="0 0 359 105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial="hidden"
            animate="visible"
          >
            <motion.path
              className={styles.events__frameRight}
              d="M179.5 100 H358V4H179.5"
              variants={draw}
              animate={{ y: 2.5 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              custom={0}
            ></motion.path>
            <motion.path
              className={styles.events__frameLeft}
              d="M179.5 4 H1V100H179.5"
              variants={draw}
              animate={{ y: -2.5 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              custom={1}
            ></motion.path>
          </motion.svg>
        </div>
        <div className={styles.events__description}>{t('eventsDesc')}</div>
        <div className={styles.buttons}>
          {buttons.map((button) => (
            <div className={styles.buttonWrapper} key={button.title}>
              <a href={button.link}>
                <Image src={button.img} alt={'icon'} />
              </a>
              <h2>{button.title}</h2>
            </div>
          ))}
        </div>
        <ActionButton
          title={'להשארת פרטים לחץ/י כאן'}
          onclick={() => {}}
          style={{ margin: '20px 0' }}
          buttonStyle={{ fontSize: '20px' }}
        />
      </div>
    </section>
  );
}
