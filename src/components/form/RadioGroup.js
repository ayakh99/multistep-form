import RadioOption from './RadioOption';
import styles from '../../styles/Form.module.css';
import { useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { selectChosenPlan } from '../../redux/formSlice';

const RadioGroup = ({ option }) => {
  const { register } = useFormContext();
  const chosenPlan = useSelector(selectChosenPlan);

  return (
    <div className={styles.radio_group}>
      <input
        type="radio"
        id={option.name}
        name="plan"
        className={styles.radio}
        value={option.name}
        defaultChecked={chosenPlan.plan === option.name}
        {...register('plan', {
          required: 'Please select a payment plan',
        })}
      />
      <label className={styles.radio_label} htmlFor={option.name}>
        <RadioOption option={option} />
      </label>
    </div>
  );
};

export default RadioGroup;
