import styles from '../../styles/Form.module.css';

const Switch = ({ choices }) => {
  const { first, second } = choices;

  return (
    <div className={styles.checkbox_option}>
      <span className={styles.active}>{first}</span>
      <span className={styles.switch}>
        <span className={styles.toggle}></span>
      </span>
      <span className={styles.inactive}>{second}</span>
    </div>
  );
};

export default Switch;
