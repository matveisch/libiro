import styles from './Events.module.scss';

export default function Events() {
  return (
  <section className={styles.events}>
    <div className={styles.events__container}>
     <div className={styles.events__buttonFrame}>
     <span>Events</span>
        <svg preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 359 103" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className={styles.events__frameLeft} d="M179.5 6.64844H358V101.001H179.5"></path>
          <path className={styles.events__frameRight} d="M179.5 1H1V95.3529H179.5"></path>
         </svg>
      </div>
      <div className={styles.events__description}>
            Let us handle all the delicious details: whether your party is large or small - we have got you covered!
        </div> 
    </div>
  </section>);
}
