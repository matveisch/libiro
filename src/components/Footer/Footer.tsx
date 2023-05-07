import styles from './Footer.module.scss';
import Image from 'next/image';
import logo from '@public/logo.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper';

export default function Footer() {
  const links = [
    { title: 'Restaurant', path: 'https://libira.co.il/en/restaurant/' },
    { title: 'Menu', path: 'https://libira.co.il/en/menu/' },
    { title: 'Events', path: 'https://libira.co.il/en/events/' },
    { title: 'Brewery', path: 'https://libira.co.il/en/brewery/' },
    { title: 'Beers', path: 'https://libira.co.il/en/beers/' },
    { title: 'Contacts', path: 'https://libira.co.il/en/contacts/' },
  ];

  const offers = [
    'on wedding anniversary, loyalty club members celebrate with two glasses of beer on us!',
    'lunch deals: benefit from free starter and glass of beer with a main dish! SUN-FR 12-6 PM',
    'SUN-MO Happy Hour: order main dish and enjoy 1+1 on beers',
    'benefit from 10% bonus coupons',
    'join the loyalty club: get 30 NIS on the spot!',
    'loyalty club members benefit from 5% rebate',
    'loyalty club members enjoy every 10th beer free',
    'on birthday loyalty club members enjoy a dessert and  a glass of Libira!',
    'on wedding anniversary, loyalty club members celebrate with two glasses of beer on us!',
    'lunch deals: benefit from free starter and glass of beer with a main dish! SUN-FR 12-6 PM',
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <div className={styles.innerWrapper}>
          <Image src={logo} alt="logo" />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.links}>
          <ul>
            {links.map((link) => (
              <li key={link.title}>
                <a href={link.path}>{link.title}</a>
              </li>
            ))}
          </ul>
          <div className={styles.address}>
            <div>address</div>
            <a href="https://g.page/libira-haifa?share">{`Ha'Namal St 26 Haifa, Israel 3303126`}</a>
          </div>
        </div>
        <div className={styles.offers}>
          <svg
            preserveAspectRatio="none"
            width="100%"
            height="100%"
            viewBox="0 0 414 187"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="libira__button-frame-left"
              d="M207.5 12H413V99V186H310.25H207.5"
              stroke="white"
              strokeWidth="2"
              transform="matrix(1,0,0,1,0,0)"
            ></path>
            <path
              className="libira__button-frame-right"
              d="M207.5 1H1V88V175H118.25H162.875H207.5"
              stroke="white"
              strokeWidth="2"
              transform="matrix(1,0,0,1,0,0)"
            ></path>
          </svg>
          <div className={styles.benefit}>benefit and enjoy</div>
          <h4>from our offers</h4>
          <Swiper
            modules={[Autoplay, Pagination]}
            pagination
            slidesPerView={1}
            loop={true}
            className={styles.mySwiper}
            autoplay={{ delay: 5000 }}
          >
            {offers.map((offer) => (
              <SwiperSlide key={offer} className={styles.mySlide}>
                <div>{offer}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.statements}>
          <div className={styles.policies}>
            <a href="https://libira.co.il/en/privacy-policy/">
              Privacy Statement
            </a>
            <a href="https://libira.co.il/en/terms-and-conditions/">
              Terms of Use
            </a>
          </div>
          <div className={styles.rights}>
            © 2019-2021 Libira. All Rights Reserved
          </div>
        </div>
        <div className={styles.mobileBlock}>
          <div className={styles.address}>
            <div>address</div>
            <a href="https://g.page/libira-haifa?share">{`Ha'Namal St 26 Haifa, Israel 3303126`}</a>
          </div>
          <div className={styles.policies}>
            <a href="https://libira.co.il/en/privacy-policy/">
              Privacy Statement
            </a>
            <a href="https://libira.co.il/en/terms-and-conditions/">
              Terms of Use
            </a>
          </div>
          <div className={styles.rights}>
            © 2019-2021 Libira. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
