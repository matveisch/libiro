import styles from './Description.module.scss';
import { useTranslation } from 'next-i18next';

export default function Description() {
  return (
    <section className={styles.description}>
      <div className={styles.description__headerBlock}>
        <h2 className={styles.description__header}>קצת עלינו</h2>
      </div>
      <div className={styles.description__textContainer}>
        <div className={styles.description__textBlock}>
          <p className={styles.description__text}>
            ליבירה היא מקום אידיאלי לחגיגות, אירועים ומסיבות: פרטיים, משפחתיים
            ועסקיים. תחגגו איתנו באווירה הקסומה והמרגשת של המבשלה, בחיק המשפחה
            ועם החברים, את האירועים הפרטיים החשובים שלכם: ימי הולדת, בת או בר
            מצווה, ברית מילה או בריתה, מסיבות רווקים, אירוסים, ימי נישואין, וכן
            חתונות קטנות. אנו מציעים מגוון תפריטים מובנים לאירוע שלכם: תפריטים
            שלוקחים בחשבון מגמות קולינריות, צורות הגשה, העדפות תזונתיות שונות.
            אוכל ושתייה נהדרים יישארו בזיכרונם של האורחים שלכם לעוד הרבה זמן!
          </p>
        </div>
        <div className={styles.description__textBlock}>
          <p className={styles.description__text}>
            עם שנים של ניסיון והמוניטין שנצבר, נשמח להפיק אירוע עסקי שיתאים
            לסגנון ודרישות שלכם: ערב צוות, ערב גיבוש, ישיבה, הרצאה, כנס או
            סמינר, סדנא, מסיבת פרישה או פרידה, אירוע מכירה. אנו נדאג לכל פרט של
            אירוע פרטי או עסקי שלכם: בחירת תפריט, עיצוב, מוסיקה, לכדי שיתאים
            לטעמכם האישי. יש לנו ציוד אודיו-וידאו ו-Wi-Fi בכל החללים ללא תוספת
            תשלום. יש שפע של חניונים ציבוריים בקרבת מקום. אחרון חביב, את פניכם
            יקבל צוות מיומן ומכניס אורחים שיודע מהו שירות לקוחות יוצא מן הכלל!
          </p>
        </div>
      </div>
    </section>
  );
}
