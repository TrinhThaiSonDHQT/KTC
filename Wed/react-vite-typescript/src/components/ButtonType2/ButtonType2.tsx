import styles from './ButtonType2.module.css';
import DefaultButton from '../DefaultButton/DefaultButton';

type propsButtonType2 = {
  content: string;
  placeholder?: string;
  background: string;
  startIcon: React.ReactNode;
  endIcon: React.ReactNode;
};

const ButtonType2 = (props: propsButtonType2) => {
  return (
    <DefaultButton background={props.background}>
      <div className={styles.buttonType2}>
        <div className={styles.left}>
          {props.startIcon && <span className={styles.icon}>{props.startIcon}</span>}
          <input
            type="text"
            placeholder={props.placeholder ? props.placeholder : ''}
            value={props.content}
            className={styles.input}
          />
        </div>
        {props.endIcon && <div className={styles.right}>{props.endIcon}</div>}
      </div>
    </DefaultButton>
  );
};

export default ButtonType2;
