import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { nextStep, previousStep, updateAddons } from '../../../redux/formSlice';
import FormHeader from '../FormHeader';
import CheckList from '../CheckList';
import Button from '../Button';
import styles from '../../../styles/Form.module.css';

const StepThree = () => {
  const methods = useForm();
  const dispatch = useDispatch();

  const formSubmit = (data, e) => {
    e.preventDefault();
    dispatch(nextStep());
    dispatch(updateAddons(data));
  };

  return (
    <div className={styles.wrapper}>
      <FormHeader title="Pick add-ons" description="Add-ons help enhance your gaming experience." />
      <FormProvider {...methods}>
        <form
          className={`${styles.form} ${styles.form_checklist}`}
          onSubmit={methods.handleSubmit(formSubmit)}
          autoComplete="off"
        >
          <CheckList />

          <div className={styles.buttons}>
            <Button color="grey" variant="text" onClick={() => dispatch(previousStep())}>
              Go Back
            </Button>
            <Button color="dark" variant="contained">
              Next Step
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default StepThree;
