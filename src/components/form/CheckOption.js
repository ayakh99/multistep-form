import { useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { selectBillingFrequency, selectChosenAddons } from '../../redux/formSlice';
import styles from '../../styles/Form.module.css';

const CheckOption = ({ addon }) => {
  const { register } = useFormContext();
  const frequency = useSelector(selectBillingFrequency);
  const chosenAddons = useSelector(selectChosenAddons);

  return (
    <div className={styles.checkbox_group}>
      <input
        type="checkbox"
        id={addon.id}
        value={addon.id}
        className={styles.checkitem_input}
        defaultChecked={chosenAddons.addon && chosenAddons.addon.includes(addon.id)}
        {...register('addon')}
      />
      <label htmlFor={addon.id} className={styles.checkitem}>
        <span className={styles.checkitem_checkbox}></span>
        <div>
          <h2 className={styles.checkitem_main}>{addon.name}</h2>
          <p className={styles.checkitem_sub}>{addon.description}</p>
        </div>
        <span className={styles.checkitem_aside}>
          +${addon.price}/{frequency}
        </span>
      </label>
    </div>
  );
};

export default CheckOption;
