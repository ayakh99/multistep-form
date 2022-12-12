import { useSelector } from 'react-redux';
import { selectFormStep } from '../../redux/formSlice';
import styles from '../../styles/Sidebar.module.css';

const Step = ({ step, text }) => {
  const activeStep = useSelector(selectFormStep);

  return (
    <li className={styles.step}>
      <span
        className={`${styles.marker} ${
          activeStep === step || (activeStep === 5 && step === 4) ? styles.active : ''
        }`}
      >
        {step}
      </span>
      <div>
        <span className={styles.number}>Step {step}</span>
        <span className={styles.description}>{text}</span>
      </div>
    </li>
  );
};

export default Step;
