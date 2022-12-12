import Image from 'next/image';
import Checkmark from '../../assets/icon-thank-you.svg';
import styles from '../../styles/Message.module.css';
import formstyles from '../../styles/Form.module.css';

const Message = () => {
  return (
    <div className={formstyles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.icon}>
            <Image src={Checkmark} alt="checkmark" fill />
          </div>
          <h2 className={styles.title}>Thank you!</h2>
          <p className={styles.message}>
            Thanks for confirming your subscription! We hope you have fun using our platform. If you
            ever need support, please feel free to email us at support@loremgaming.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Message;
