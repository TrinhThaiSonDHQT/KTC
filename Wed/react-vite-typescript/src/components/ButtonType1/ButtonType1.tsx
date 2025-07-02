import DefaultButton from '../DefaultButton/DefaultButton';
import styles from './ButtonType1.module.css';

type propsButtonType1 = {
  content: string;
  background: string;
  outline?: boolean;
  startIcon: React.ReactNode;
  endIcon: React.ReactNode;
};

const ButtonType1 = ({
  content,
  background,
  outline = false,
  startIcon,
  endIcon,
}: propsButtonType1) => {
  return (
    <>
      <DefaultButton background={background} outline={outline}>
        <div
          className={`${styles.buttonType1} ${
            endIcon ? styles.hasEndIcon : ''
          }`}
        >
          <span className={styles.left}>
            {startIcon && <span className={styles.icon}>{startIcon}</span>}
            {content}
          </span>
          {endIcon && <span className={styles.right}>{endIcon}</span>}
        </div>
      </DefaultButton>
    </>
  );
};

export default ButtonType1;
