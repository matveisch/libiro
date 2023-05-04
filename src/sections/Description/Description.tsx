import styles from './Description.module.scss';

export default function Description() {
  return (
  <section className={styles.description}>
    <div className={styles.description__headerBlock}>
      <h2 className={styles.description__header}>
      Libira invites you to celebrate family reunion, private party or enjoy a business event, in the heart of Haifa's vibrant downtown, in the atmosphere of a brewery, to make your gathering special and unforgettable: a culinary experience that pairs a fine and varied cousine with home-made craft beers
      </h2>
    </div>
    <div className={styles.description__textContainer}>
      <div className={styles.description__textBlock}>
        <p className={styles.description__text}>
          Libira is a go-to venue for a plethora of events and parties for leisure as well as business. Celebrate with us in the magical and exciting atmosphere of the brewery, in the bosom of your family and with your friends, your important private events: birthdays, bat or bar mitzvah, brit milah, or brita, bachelor parties, engagements, anniversaries, and wedding parties. We offer a range of pre-set menus for your occasion that take into consideration different trends, food presentations, and dietary preferences. Great food and drinks will stay in the minds of your guests!
        </p>
      </div>
      <div className={styles.description__textBlock}>
        <p className={styles.description__text}>
          With years of experience and the reputation gained, we will be happy to tailor a business event that will conform to your style and needs: corporate party, staff meeting, team-building party, lecture, conference, seminar, workshop, retirement, or farewell party, sales meeting. We will work out your private or business event in all its aspects: choosing the menu, the design, and the music so that it accommodates your personal taste and needs. On-premise there are AV equipment and Wi-Fi capabilities at no extra cost. Nearby are plenty of public parking lots. The last but not least: a fully trained staff that knows what exceptional customer service is, welcomes you!
        </p>
      </div>
    </div>
  </section>
  );
}
