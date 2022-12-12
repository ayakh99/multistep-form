import styles from '../../styles/Form.module.css';
import Advanced from '../../assets/icon-advanced.svg';
import Arcade from '../../assets/icon-arcade.svg';
import Pro from '../../assets/icon-pro.svg';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectBillingFrequency } from '../../redux/formSlice';

const RadioOption = ({ option }) => {
  const frequency = useSelector(selectBillingFrequency);

  const Icon = () => {
    switch (option.name) {
      case 'arcade':
        return <Image src={Arcade} alt={option} fill />;
      case 'advanced':
        return <Image src={Advanced} alt={option} fill />;
      case 'pro':
        return <Image src={Pro} alt={option} fill />;
      default:
        return '404';
    }
  };

  return (
    <div className={styles.radio_option}>
      <div className={styles.radio_icon}>{Icon()}</div>

      <div>
        <h2 className={styles.radio_main}>{option.name[0].toUpperCase() + option.name.slice(1)}</h2>
        <span className={styles.radio_sub}>
          ${option.price}/{frequency}
        </span>
        {frequency === 'yr' && <span className={styles.radio_caption}>2 months free</span>}
      </div>
    </div>
  );
};

export default RadioOption;
