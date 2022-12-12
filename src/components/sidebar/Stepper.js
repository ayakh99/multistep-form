import Step from './Step';
import styles from '../../styles/Sidebar.module.css';

const Stepper = () => {
  return (
    <ol className={styles.stepper}>
      <Step step={1} text="Your info" />
      <Step step={2} text="Select plan" />
      <Step step={3} text="Add-ons" />
      <Step step={4} text="Summary" />
    </ol>
  );
};

export default Stepper;
