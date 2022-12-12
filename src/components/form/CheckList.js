import styles from '../../styles/Form.module.css';
import { useSelector } from 'react-redux';
import { selectBillingFrequency } from '../../redux/formSlice';
import { selectAddons } from '../../redux/addonSlice';
import { Fragment } from 'react';
import CheckOption from './CheckOption';

const CheckList = () => {
  const frequency = useSelector(selectBillingFrequency);
  const addons = useSelector((state) => selectAddons(state, frequency));

  return (
    <Fragment>
      {addons.map((addon) => (
        <CheckOption key={addon.id} addon={addon} />
      ))}
    </Fragment>
  );
};

export default CheckList;
