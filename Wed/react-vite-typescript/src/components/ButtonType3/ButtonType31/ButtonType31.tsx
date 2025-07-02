import styles from './ButtonType31.module.css';
import DefaultButton from '../../DefaultButton/DefaultButton';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

const ButtonType31 = () => {
  return (
    <DefaultButton background="bg-light">
      <div className={styles.buttonType3}>
        <div className={styles.row1}>
          <span className={styles.currentTime}>7'</span>
          <span>
            <HiOutlineDotsHorizontal />
          </span>
        </div>
        <div className={styles.row2}>
          {/* Country */}
          <div className={styles.country}>
            <span>Spain</span>
            <img src="images/spain-flag.png" alt="Spain" />
          </div>
          {/* Score */}
          <span className={styles.score}>0 : 0</span>
          {/* Country */}
          <div className={styles.country}>
            <img src="images/france-flag.png" alt="France" />
            <span>France</span>
          </div>
        </div>
      </div>
    </DefaultButton>
  );
};

export default ButtonType31;
