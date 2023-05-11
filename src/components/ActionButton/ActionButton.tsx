import styles from './ActionButton.module.scss';
import { CSSProperties } from 'react';

interface Props {
  title: string;
  onclick: () => void;
  style?: CSSProperties;
  buttonStyle?: CSSProperties;
}
export default function ActionButton(props: Props) {
  const { title, onclick, style, buttonStyle } = props;

  return (
    <div className={styles.actionButton} style={style}>
      <button
        type="button"
        className="link"
        onClick={onclick}
        style={buttonStyle}
      >
        {title}
      </button>
      <div className={styles.square} />
    </div>
  );
}
