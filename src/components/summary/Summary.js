import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectBillingFrequency,
  selectChosenAddons,
  selectChosenPlan,
  setStep,
} from '../../redux/formSlice';
import { selectPlanById } from '../../redux/planSlice';
import { selectAddons } from '../../redux/addonSlice';
import Button from '../form/Button';
import styles from '../../styles/Summary.module.css';

const Summary = () => {
  const dispatch = useDispatch();
  const frequency = useSelector(selectBillingFrequency);
  const { plan: planId } = useSelector(selectChosenPlan);
  const selectedPlan = useSelector((state) => selectPlanById(state, planId));
  const selectedAddonIds = useSelector(selectChosenAddons);
  const addons = useSelector((state) => selectAddons(state, frequency));

  let total = selectedPlan.price[frequency];
  let selectedAddons;
  if (selectedAddonIds.addon)
    selectedAddons = selectedAddonIds.addon.map((id) => {
      const a = addons.find((a) => a.id === id);
      total += a.price;
      return a;
    });

  return (
    <Fragment>
      <div className={styles.summary}>
        <div className={styles.summary_main}>
          <div>
            <h2 className={styles.plan}>
              {selectedPlan.name[0].toUpperCase() + selectedPlan.name.slice(1)} (
              {frequency === 'mo' ? 'Monthly' : 'Yearly'})
            </h2>
            <Button variant="small" onClick={() => dispatch(setStep(2))}>
              Change
            </Button>
          </div>
          <span className={styles.price}>
            ${selectedPlan.price[frequency]}/{frequency}
          </span>
        </div>

        {selectedAddons && selectedAddons.length !== 0 && (
          <Fragment>
            <span className={styles.divider}></span>
            {selectedAddons.map((addon) => (
              <div key={addon.id} className={styles.addon}>
                <h2 className={styles.addon_name}>{addon.name}</h2>
                <span className={styles.addon_price}>
                  +${addon.price}/{frequency}
                </span>
              </div>
            ))}
          </Fragment>
        )}
      </div>
      <div className={styles.caption}>
        <h2 className={styles.total}>Total (per {frequency === 'mo' ? 'month' : 'year'})</h2>
        <span className={styles.amount}>
          ${total}/{frequency}
        </span>
      </div>
    </Fragment>
  );
};

export default Summary;
