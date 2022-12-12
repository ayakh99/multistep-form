import { useDispatch } from 'react-redux';
import { nextStep, previousStep } from '../../../redux/formSlice';
import styles from '../../../styles/Form.module.css';
import Summary from '../../summary/Summary';
import Button from '../Button';
import FormHeader from '../FormHeader';

const StepThree = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(nextStep());
  };

  return (
    <div className={styles.wrapper}>
      <FormHeader
        title="Finishing up"
        description="Double-check everything looks OK before confirming."
      />
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <Summary />
        <div className={styles.buttons}>
          <Button color="grey" variant="text" onClick={() => dispatch(previousStep())}>
            Go Back
          </Button>
          <Button color="blue" variant="contained">
            Confirm
          </Button>
        </div>
      </form>
    </div>
  );
};

export default StepThree;
