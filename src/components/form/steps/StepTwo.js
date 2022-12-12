import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  previousStep,
  nextStep,
  selectBillingFrequency,
  updateFrequency,
  updatePlan,
} from '../../../redux/formSlice';
import { selectPlans } from '../../../redux/planSlice';
import FormHeader from '../FormHeader';
import RadioGroup from '../RadioGroup';
import Switch from '../Switch';
import Button from '../Button';
import styles from '../../../styles/Form.module.css';

const StepTwo = () => {
  const methods = useForm();
  const {
    formState: { errors },
  } = methods;

  const frequency = useSelector(selectBillingFrequency);
  const plans = useSelector((state) => selectPlans(state, frequency));
  const dispatch = useDispatch();

  const formSubmit = (data, e) => {
    e.preventDefault();
    dispatch(nextStep());
    dispatch(updatePlan(data));
  };

  return (
    <div className={styles.wrapper}>
      <FormHeader
        title="Select your plan"
        description="You have the option of monthly or yearly billing."
      />
      <FormProvider {...methods}>
        <form
          className={styles.form}
          onSubmit={methods.handleSubmit(formSubmit)}
          autoComplete="off"
        >
          {errors.plan && <span className={styles.error}>{errors.plan.message}</span>}
          <div className={styles.form_radio}>
            {plans.map((plan) => (
              <RadioGroup key={plan.name} option={plan} />
            ))}
          </div>

          <div className={styles.form_checkbox}>
            <input
              type="checkbox"
              id="yearly"
              name="frequency"
              className={styles.checkbox}
              checked={frequency === 'yr'}
              onChange={() => dispatch(updateFrequency())}
            />
            <label htmlFor="yearly">
              <Switch choices={{ first: 'Monthly', second: 'Yearly' }} />
            </label>
          </div>

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

export default StepTwo;
