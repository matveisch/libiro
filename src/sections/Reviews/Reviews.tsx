import { useRouter } from 'next/router';
import Image from 'next/image';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Reviews.module.scss';
import sharon from '@public/sharon.jpeg';
import galit from '@public/galit.jpg';
import thila from '@public/thila.jpeg';
import linoi from '@public/linoi.jpeg';
import ravital from '@public/ravital.jpeg';
import edo from '@public/edan.jpeg';
import { useEffect, useState } from 'react';

export default function Reviews() {
  const { locale } = useRouter();
  const [screenWidth, setScreenWidth] = useState(0);

  const reviews = [
    {
      name: 'שרון עונה',
      img: sharon,
      text: 'אולם ברמה גבוהה , שירות יוצא מהכלל , האורחים מאוד נהנו מהאוכל ומהבירות המיוחדות והשירות האדיב . אולם מומלץ מאוד',
    },
    {
      name: 'גלית כלו',
      img: galit,
      text:
        'מקום מיוחד אוכל מדהים טעים ברמה מאוד גבוהה ובירות מיוחדות וטעימות' +
        'כל המנות מיוחדות יפות וטעימות שרות מצויין, היינו בשני ארועים מאוד נהנינו והתרשמנו לטובה מחכים לארוע הבא',
    },
    {
      name: 'תהילה ערסי',
      img: thila,
      text: 'תודה לצוות על האירוע המושלם האורחים נהנו מכל רגע, המשפחה שלי לא ראו כזה אוכל מושלם עיצוב האולם היחס, והשירות מעל המצופה וכל מה שביקשו קיבלו ממולץ בחום',
    },
    {
      name: 'לינוי רווח',
      img: linoi,
      text:
        'מקום מדהים!!!! מכל הבחינות, הן מבחינת השירות ועד לרמת המקצועיות.' +
        'אוכל ברמה הכי הכי גבוהה שפגשתי, ועל הבירות בכלל- ליגה אחרת!' +
        'לסיכום ממליצה בחום!!',
    },
    {
      name: 'רוויטל קודמן',
      img: ravital,
      text: 'הייתי באירוע והיה פשוט מושלם והאוכל טעים והבירות המיוחדות !',
    },
    {
      name: 'עדן דהן',
      img: edo,
      text:
        'מקום מהמם נקי ומסודר בטוב טעם' +
        'אוכל טעים בטירוף יחס חם' +
        'בואו ולא תתחרטו',
    },
  ];

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.reviews}>
      <h2>מבקרים מספרים</h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination
        initialSlide={locale === 'he' ? 9 : 0}
        slidesPerView={screenWidth > 1024 ? 3 : 1}
        loop={true}
        className={styles.mySwiper}
        autoplay={{ delay: 5000, reverseDirection: locale === 'he' }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.name} className={styles.mySlide}>
            <Image src={review.img} alt={'photo'} />
            <p>{review.text}</p>
            <div>{review.name}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
