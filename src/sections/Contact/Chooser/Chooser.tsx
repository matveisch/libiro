import styles from './Chooser.module.scss';

const options = ['Event/Party', 'Menu', 'Beer', 'Other'];

export default function Chooser() {
  return (
    <div className={styles.chooser}>
      <div className={styles.active}>Pls choose subject</div>
      <div className={styles.options}>
        {options.map((option) => (
          <div className={styles.option} key={option}>
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}
