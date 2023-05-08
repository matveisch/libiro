import React from 'react';
import styles from './Halls.module.scss';
import { hallsInfo } from './HallsInfo';
import shortid from 'shortid';

export default function Halls() {
  const [hover, setHover] = React.useState(0);
  const [active, setActive] = React.useState(0);
  const [test, setTest] = React.useState(2);

  function getRandomKey() {
    return shortid.generate();
  }

  return (
    <section className={styles.halls}>
      <div className={styles.halls__container}>
        {/* <div className={styles.halls__typesWrapper}> */}
        <div className={styles.halls__types}>
          {hallsInfo.map((hall, index) => {
            return (
              <div
                className={`${styles.halls__item} ${
                  hover === index ? styles.active : ''
                }`}
              >
                <h2
                  className={`${styles.halls__itemTitle} ${
                    hover === index ? styles.active : ''
                  }`}
                  onMouseOver={() => setHover(index)}
                  onClick={() => setHover(index)}
                >
                  {hall.name}
                </h2>
              </div>
            );
          })}
          {/* <div
            className={`${styles.halls__item} ${
              active === 0 || (hover === 0 && active === -1)
                ? styles.active
                : ''
            }`}
          >
            <h2
              className={styles.halls__itemTitle}
              onMouseOver={() => setHover(0)}
              onMouseLeave={() => setHover(-1)}
              onClick={() => setActive(active === 0 ? -1 : 0)}
            >
              Main restaurant hall
            </h2>
          </div>
          <div
            className={`${styles.halls__item} ${
              active === 1 || (hover === 1 && active === -1)
                ? styles.active
                : ''
            }`}
          >
            <h2
              className={styles.halls__itemTitle}
              onMouseOver={() => setHover(1)}
              onMouseLeave={() => setHover(-1)}
              onClick={() => setActive(active === 0 ? -1 : 0)}
            >
              Private room
            </h2>
          </div>
          <div
            className={`${styles.halls__item} ${
              active === 2 || (hover === 2 && active === -1)
                ? styles.active
                : ''
            }`}
          >
            <h2
              className={styles.halls__itemTitle}
              onMouseOver={() => setHover(2)}
              onMouseLeave={() => setHover(-1)}
              onClick={() => setActive(active === 0 ? -1 : 0)}
            >
              Events gallery
            </h2>
          </div> */}
        </div>
        <div className={`${styles.halls__infoScreen}`}>
          <div className={styles.halls__infoScreenWrap}>
            <div className={styles.halls__infoScreenItem} key={getRandomKey()}>
              <h5 className={styles.halls__number}>
                {hallsInfo[hover].number}
              </h5>
              <div className={styles.halls__capacity}>
                <h4 className={styles.halls__capacityText}>
                  {hallsInfo[hover].seating}
                </h4>
                <h4 className={styles.halls__capacityText}>
                  {hallsInfo[hover].squarage}
                </h4>
              </div>

              <p className={styles.halls__description}>
                {hallsInfo[hover].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
