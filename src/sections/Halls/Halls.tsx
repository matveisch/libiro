import React from 'react';
import styles from './Halls.module.scss';
import shortid from 'shortid';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import radish from '@public/radish.png';
export default function Halls() {
  const [hover, setHover] = React.useState(0);
  const { t } = useTranslation();
  const { locale } = useRouter();

  function getRandomKey() {
    return shortid.generate();
  }

  const hallsInfo = [
    {
      index: 0,
      name: t('mainHall'),
      number: `${t('hall')} #1`,
      seating: `150 ${t('seats')}`,
      squarage: `250 ${t('sqm')}`,
      description: t('hallDescription'),
    },

    {
      index: 1,
      name: t('privateRoom'),
      number: `${t('hall')} #2`,
      seating: `50 ${t('seats')}`,
      squarage: `70 ${t('sqm')}`,
      description: t('roomDescription'),
    },

    {
      index: 2,
      name: t('eventsGallery'),
      number: `${t('hall')} #3`,
      seating: `35 ${t('seats')}`,
      squarage: `50 ${t('sqm')}`,
      description: t('galleryDescription'),
    },
  ];

  return (
    <section className={styles.halls}>
      <Image className={styles.radish} src={radish} alt="radish image" />
      <div className={styles.halls__container}>
        {/* <div className={styles.halls__typesWrapper}> */}
        <div className={styles.halls__types}>
          {hallsInfo.map((hall, index) => {
            return (
              <div
                key={`${hall.name}_${index}`}
                className={`${
                  locale === 'he' ? styles.halls__itemRtl : styles.halls__item
                } ${hover === index ? styles.active : ''}`}
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
        </div>
        <div className={`${styles.halls__infoScreen}`}>
          <div className={styles.halls__infoScreenWrap}>
            <div
              className={
                locale === 'he'
                  ? styles.halls__infoScreenItemRtl
                  : styles.halls__infoScreenItem
              }
              key={getRandomKey()}
            >
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
