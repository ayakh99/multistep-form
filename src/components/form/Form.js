import StepOne from './steps/StepOne';
import styles from '../../styles/Form.module.css';
import StepTwo from './steps/StepTwo';
import StepThree from './steps/StepThree';
import StepFour from './steps/StepFour';
import Message from '../summary/Message';
import { useSelector } from 'react-redux';
import { selectFormStep } from '../../redux/formSlice';

const Form = () => {
  const step = useSelector(selectFormStep);

  let content;
  switch (step) {
    case 1:
      content = <StepOne />;
      break;
    case 2:
      content = <StepTwo />;
      break;
    case 3:
      content = <StepThree />;
      break;
    case 4:
      content = <StepFour />;
      break;
    case 5:
    default:
      content = <Message />;
  }
  return <div className={styles.container}>{content}</div>;
};

export default Form;
