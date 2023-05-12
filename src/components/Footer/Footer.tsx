import styles from './Footer.module.scss';
import Image from 'next/image';
import logo from '@public/logo.png';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Footer() {
  // const links = [
  //   {
  //     title: t('restaurant'),
  //     path: `https://libira.co.il/${locale}/restaurant/`,
  //   },
  //   { title: t('menu'), path: `https://libira.co.il/${locale}/menu/` },
  //   {
  //     title: t('eventsFooter'),
  //     path: `https://libira.co.il/${locale}/events/`,
  //   },
  //   { title: t('brewery'), path: `https://libira.co.il/${locale}/brewery/` },
  //   { title: t('beers'), path: `https://libira.co.il/${locale}/beers/` },
  //   { title: t('contacts'), path: `https://libira.co.il/${locale}/contacts/` },
  // ];

  // const offers = [
  //   t('offerOne'),
  //   t('offerTwo'),
  //   t('offerThree'),
  //   t('offerFour'),
  //   t('offerFive'),
  //   t('offerSix'),
  //   t('offerSeven'),
  //   t('offerEight'),
  //   t('offerNine'),
  //   t('offerTen'),
  // ];

  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <div className={styles.innerWrapper}>
          <Image src={logo} alt="logo" />
        </div>
      </div>
      <div className={styles.content}>
        {/*<div className={styles.links}>*/}
        {/*  <ul>*/}
        {/*    {links.map((link) => (*/}
        {/*      <li key={link.title}>*/}
        {/*        <a href={link.path}>{link.title}</a>*/}
        {/*      </li>*/}
        {/*    ))}*/}
        {/*  </ul>*/}
        {/*  <div className={styles.address}>*/}
        {/*    <div>{t('address')}</div>*/}
        {/*    <a href="https://g.page/libira-haifa?share">{t('haNamal')}</a>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div className={styles.offers}>*/}
        {/*  <svg*/}
        {/*    preserveAspectRatio="none"*/}
        {/*    width="100%"*/}
        {/*    height="100%"*/}
        {/*    viewBox="0 0 414 187"*/}
        {/*    fill="none"*/}
        {/*    xmlns="http://www.w3.org/2000/svg"*/}
        {/*  >*/}
        {/*    <path*/}
        {/*      className="libira__button-frame-left"*/}
        {/*      d="M207.5 12H413V99V186H310.25H207.5"*/}
        {/*      stroke="white"*/}
        {/*      strokeWidth="2"*/}
        {/*      transform="matrix(1,0,0,1,0,0)"*/}
        {/*    ></path>*/}
        {/*    <path*/}
        {/*      className="libira__button-frame-right"*/}
        {/*      d="M207.5 1H1V88V175H118.25H162.875H207.5"*/}
        {/*      stroke="white"*/}
        {/*      strokeWidth="2"*/}
        {/*      transform="matrix(1,0,0,1,0,0)"*/}
        {/*    ></path>*/}
        {/*  </svg>*/}
        {/*  <div className={styles.benefit}>{t('benefit')}</div>*/}
        {/*  <h4>{t('offers')}</h4>*/}
        {/*  <Swiper*/}
        {/*    modules={[Autoplay, Pagination]}*/}
        {/*    pagination*/}
        {/*    initialSlide={locale === 'he' ? 9 : 0}*/}
        {/*    slidesPerView={1}*/}
        {/*    loop={true}*/}
        {/*    className={styles.mySwiper}*/}
        {/*    autoplay={{ delay: 5000, reverseDirection: locale === 'he' }}*/}
        {/*  >*/}
        {/*    {offers.map((offer, index) => (*/}
        {/*      <SwiperSlide key={index} className={styles.mySlide}>*/}
        {/*        <div>{offer}</div>*/}
        {/*      </SwiperSlide>*/}
        {/*    ))}*/}
        {/*  </Swiper>*/}
        {/*</div>*/}
        <div className={styles.statements}>
          {/*<div className={styles.policies}>*/}
          {/*  <a href={`https://libira.co.il/${locale}/privacy-policy/`}>*/}
          {/*    {t('privacy')}*/}
          {/*  </a>*/}
          {/*  <a href={`https://libira.co.il/${locale}/terms-and-conditions/`}>*/}
          {/*    {t('terms')}*/}
          {/*  </a>*/}
          {/*</div>*/}
          <div className={styles.rights}>
            © 2019-2021 Libira. All Rights Reserved
          </div>
        </div>
        <div className={styles.mobileBlock}>
          {/*<div className={styles.address}>*/}
          {/*  <div>{t('address')}</div>*/}
          {/*  <a href="https://g.page/libira-haifa?share">{t('haNamal')}</a>*/}
          {/*</div>*/}
          {/*<div className={styles.policies}>*/}
          {/*  <a href={`https://libira.co.il/${locale}/privacy-policy/`}>*/}
          {/*    {t('privacy')}*/}
          {/*  </a>*/}
          {/*  <a href={`https://libira.co.il/${locale}/terms-and-conditions/`}>*/}
          {/*    {t('terms')}*/}
          {/*  </a>*/}
          {/*</div>*/}
          <div className={styles.rights}>
            © 2019-2021 Libira. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
