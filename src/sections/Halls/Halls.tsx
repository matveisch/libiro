import styles from './Halls.module.scss';

import { hallsInfo } from './HallsInfo';

export default function Halls() {
  return (
    <section className={styles.halls}>
      <div className={styles.halls__container}>
        <div className={styles.halls__types}>
          <div className={styles.halls__item}>
            <h2 className={styles.halls__itemTitle}>Main restaurant hall</h2>
          </div>
          <div className={styles.halls__item}>
            <h2 className={styles.halls__itemTitle}>Private room</h2>
          </div>
          <div className={styles.halls__item}>
            <h2 className={styles.halls__itemTitle}>Events gallery</h2>
          </div>

          {hallsInfo.map((hall) => (
            <div className={styles.halls__infoScreen}>
            <div className={styles.halls__infoScreenWrap}>
              <div className={styles.halls__infoScreenItem}>
                <h5 className={styles.halls__number}>
                    {hall.number}
                </h5>
                <div className={styles.halls__capacity}>
                  <h4 className={styles.halls__capacityText}>{hall.seating}</h4>
                  <h4 className={styles.halls__capacityText}>{hall.squarage}</h4>
                </div>
                <div className={styles.halls__descriptionWrap}>
                  <p className={styles.halls__description}>{hall.description}</p>
                </div>
                
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
    );
}
