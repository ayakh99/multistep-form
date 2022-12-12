import styles from '../../styles/Button.module.css';

const Button = ({ variant, color, onClick, children }) => {
  return (
    <button className={`${styles.button} ${styles[color]} ${styles[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
