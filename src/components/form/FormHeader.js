import styles from '../../styles/Form.module.css';

const FormHeader = ({ title, description }) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default FormHeader;
