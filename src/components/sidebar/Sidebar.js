import styles from '../../styles/Sidebar.module.css';
import Stepper from './Stepper';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Stepper />
    </div>
  );
};

export default Sidebar;
