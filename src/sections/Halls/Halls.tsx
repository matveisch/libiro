import styles from './Halls.module.scss';

export default function Halls() {
  return (
    <section className={styles.halls}>
      <div className={styles.halls__container}>
        <div className={styles.halls__types}>
          <div className={styles.halls__item}>
            <h2 className={styles.halls__itemTitle}></h2>
          </div>
          <div className={styles.halls__item}>
            <h2 className={styles.halls__itemTitle}></h2>
          </div>
          <div className={styles.halls__item}>
            <h2 className={styles.halls__itemTitle}></h2>
          </div>

        {/* create a separate file with all of the hall descriptions and pass it there? */}

          <div className={styles.halls__infoScreen}>
            <div className={styles.halls__infoScreenWrap}>
              <div className={styles.halls__infoScreenItem}>
                <h5 className={styles.halls__number}>

                </h5>
                <div className={styles.halls__capacity}>
                  <h4 className={styles.halls__capacityText}></h4>
                  <h4 className={styles.halls__capacityText}></h4>
                </div>
                <div className={styles.halls__descriptionWrap}>
                  <p className={styles.halls__description}></p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}
