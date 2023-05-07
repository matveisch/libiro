import { useState } from 'react';

import styles from './Header.module.scss';
import Image from 'next/image';
import logo from '@public/logo.png';
import MobileMenu from '../Mobile Menu/MobileMenu';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
export default function Header() {
  const { t } = useTranslation();
  const { locale } = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className={styles.header}>
      <div className={styles.innerWrapper}>
        <div className={styles.headerLeft}>
          <div className={styles.innerLeft}>
            <a className={styles.secLink} href="tel:+97243740251">
              04-374-0251
            </a>
          </div>
          <div className={styles.innerRight}>
            <ul className={styles.headerUl}>
              <li>
                <a href={'https://libira.co.il/' + locale + '/menu/'}>
                  {t('menu')}
                </a>
              </li>
              <li>
                <a href={'https://libira.co.il/' + locale + '/restaurant/'}>
                  {t('restaurant')}
                </a>
              </li>
              <li>
                <a href={'https://libira.co.il/' + locale + '/brewery/'}>
                  {t('brewery')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.headerCenter}>
          <Image src={logo} alt="logo" />
        </div>
        <div className={styles.headerRight}>
          <div className={styles.innerLeft}>
            <ul className={styles.headerUl}>
              <li>
                <a href={'https://libira.co.il/' + locale + '/beers/'}>
                  {t('beers')}
                </a>
              </li>
              <li>
                <a href="">{t('eventsFooter')}</a>
              </li>
              <li>
                <a href={'https://libira.co.il/' + locale + '/contacts/'}>
                  {t('contacts')}
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.innerRight}>
            <div className={styles.loyaltyCoupons}>
              <a className={styles.secLink} href="">
                Loyalty club
              </a>
              <div className={styles.br}></div>
              <a className={styles.secLink} href="">
                Coupons
              </a>
            </div>
          </div>
        </div>
        <div className={styles.mobileBurger} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.485352"
                y="18.163"
                width="25"
                height="1"
                transform="rotate(-45 0.485352 18.163)"
              ></rect>
              <rect
                x="18.1631"
                y="18.8701"
                width="25"
                height="1"
                transform="rotate(-135 18.1631 18.8701)"
              ></rect>
            </svg>
          ) : (
            <svg
              width="64"
              height="22"
              viewBox="0 0 64 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="1" width="22" height="2" fill="white"></rect>
              <rect y="10" width="14" height="2" fill="white"></rect>
              <rect x="8" y="19" width="14" height="2" fill="white"></rect>
              <path
                d="M40.1323 0.496582L42.5977 3.45605L45.063 0.496582H46.3574V8H44.9072V2.73096H44.8643L42.6943 5.37354H42.4902L40.3203 2.73096H40.2773V8H38.8271V0.496582H40.1323ZM57.8618 0.496582V1.62988H54.4619V3.60107H57.7168V4.73438H54.4619V6.8667H57.937V8H53.0117V0.496582H57.8618ZM40.1001 13.4966L44.5581 18.7334V13.4966H45.9761V21H44.73L40.2451 15.6772V21H38.8271V13.4966H40.1001ZM53.0215 13.4966V17.8633C53.0215 18.3109 53.0877 18.6672 53.2202 18.9321C53.3563 19.1971 53.5765 19.4155 53.8809 19.5874C54.1852 19.7593 54.5397 19.8452 54.9443 19.8452C55.3883 19.8452 55.7643 19.7646 56.0723 19.6035C56.3838 19.4388 56.6112 19.2168 56.7544 18.9375C56.8976 18.6546 56.9692 18.2643 56.9692 17.7666V13.4966H58.4194V17.9546C58.4194 18.9644 58.1169 19.7414 57.5117 20.2856C56.9066 20.8263 56.0508 21.0967 54.9443 21.0967C54.2497 21.0967 53.6463 20.9731 53.1343 20.7261C52.6258 20.479 52.2373 20.1227 51.9688 19.6572C51.7002 19.1882 51.5659 18.6385 51.5659 18.0083V13.4966H53.0215Z"
                fill="white"
              ></path>
            </svg>
          )}
        </div>
      </div>
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}
