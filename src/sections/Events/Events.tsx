import styles from './Events.module.scss';
import { motion } from 'framer-motion';

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
  return (
    <section className={styles.events}>
      <div className={styles.events__container}>
        <div className={styles.events__buttonFrame}>
          <span>Events</span>
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
              transition={{ delay: 1.4 }}
              custom={0}
            ></motion.path>
            <motion.path
              className={styles.events__frameLeft}
              d="M179.5 4 H1V100H179.5"
              variants={draw}
              animate={{ y: -2.5 }}
              transition={{ delay: 1.4 }}
              custom={1}
            ></motion.path>
          </motion.svg>
        </div>
        <div className={styles.events__description}>
          Let us handle all the delicious details: whether your party is large
          or small - we have got you covered!
        </div>
      </div>
    </section>
  );
}
