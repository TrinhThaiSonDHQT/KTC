import DefaultButton from '../../DefaultButton/DefaultButton';
import styles from './ButtonType32.module.css';

type propsButtonType32 = {
  title: string;
  background: string;
  image: string;
  imageSize?: string;
  endIcon?: React.ReactNode;
  subtitle?: string;
  alignItems?: string;
  title2?: string;
  subtitle2?: string;
};

const ButtonType32 = ({
  title,
  background,
  endIcon,
  image,
  imageSize = 'small-image',
  subtitle,
  alignItems = 'center',
  title2,
  subtitle2,
}: propsButtonType32) => {
  return (
    <>
      <DefaultButton background={background}>
        <div className={`${styles.buttonType32} `}>
          <div className={styles.left}>
            {image && (
              <img
                src={image}
                alt="icon"
                className={`${styles.image} ${styles[imageSize]}`}
              />
            )}
          </div>
          <div className={`${styles[alignItems]} ${styles.right} `}>
            <div className={styles.title}>
              <p className={styles.title}>{title}</p>
              {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            </div>
            {endIcon ? (
              <span className={styles.endIcon}>{endIcon}</span>
            ) : (
              <div className={styles.title2}>
                {title2 && <p className={styles.title2}>{title2}</p>}
                {subtitle2 && <p className={styles.subtitle2}>{subtitle2}</p>}
              </div>
            )}
          </div>
        </div>
      </DefaultButton>
    </>
  );
};

export default ButtonType32;
