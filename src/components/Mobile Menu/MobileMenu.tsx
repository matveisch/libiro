import styles from './MobileMenu.module.scss';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Links from '@/components/Links/Links';

interface Props {
  isOpen: boolean;
  setIsOpen: Function;
}

export default function MobileMenu({ isOpen, setIsOpen }: Props) {
  const { t } = useTranslation();
  const { locale } = useRouter();

  return (
    <motion.div
      initial={{ y: 'calc( -100% - 80px )' }}
      animate={{ y: isOpen ? 0 : 'calc( -100% - 80px )', display: 'flex' }}
      transition={{ ease: 'easeOut' }}
      className={styles.menuBg}
      onClick={() => setIsOpen(false)}
    >
      {/*<Langs />*/}
      <ul className={styles.menuLinks}>
        <li>
          <a
            href={'https://libira.co.il/' + locale + '/menu/'}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {t('menu')}
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            href={'https://libira.co.il/' + locale + '/restaurant/'}
          >
            {t('restaurant')}
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            href={'https://libira.co.il/' + locale + '/brewery/'}
          >
            {t('brewery')}
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            href={'https://libira.co.il/' + locale + '/beers/'}
          >
            {t('beers')}
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            href=""
          >
            {t('eventsFooter')}
          </a>
        </li>

        <li>
          <a
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            href={'https://libira.co.il/' + locale + '/contacts/'}
          >
            {t('contacts')}
          </a>
        </li>
      </ul>
      <a className={styles.secLink} href="tel:+97243740251">
        04-374-0251
      </a>
      <Links />
    </motion.div>
  );
}
