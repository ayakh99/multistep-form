import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { nextStep, selectPersonalInfo, updateInfo } from '../../../redux/formSlice';
import FormHeader from '../FormHeader';
import Button from '../Button';
import styles from '../../../styles/Form.module.css';

const StepOne = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const personalInfo = useSelector(selectPersonalInfo);

  const formSubmit = (data, e) => {
    e.preventDefault();
    dispatch(nextStep());
    dispatch(updateInfo(data));
  };

  return (
    <div className={styles.wrapper}>
      <FormHeader
        title="Personal info"
        description="Please provide your name, email address, and phone number."
      />
      <form className={styles.form} onSubmit={handleSubmit(formSubmit)} autoComplete="off">
        <div className={styles.input_group}>
          <div className={styles.desc}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            {errors.name && <span className={styles.error}>{errors.name.message}</span>}
          </div>
          <input
            type="text"
            id="name"
            className={styles.input}
            placeholder="e.g. Stephen King"
            defaultValue={personalInfo.name}
            {...register('name', {
              required: 'This field is required',
              minLength: {
                value: 2,
                message: 'Your name should be at least 2 characters long',
              },
            })}
          />
        </div>
        <div className={styles.input_group}>
          <div className={styles.desc}>
            <label htmlFor="email" className={styles.label}>
              Email Address
            </label>
            {errors.email && <span className={styles.error}>{errors.email.message}</span>}
          </div>
          <input
            type="email"
            id="email"
            className={styles.input}
            placeholder="e.g. stephenking@lorem.com"
            defaultValue={personalInfo.email}
            {...register('email', {
              required: 'This field is required',
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Please enter a valid email',
              },
            })}
          />
        </div>
        <div className={styles.input_group}>
          <div className={styles.desc}>
            <label htmlFor="phone" className={styles.label}>
              Phone Number
            </label>
            {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}
          </div>
          <input
            type="tel"
            id="phone"
            name="phone"
            className={styles.input}
            placeholder="e.g. +1 234 567 890"
            defaultValue={personalInfo.phone}
            {...register('phone', {
              required: 'This field is required',
              minLength: {
                value: 10,
                message: 'Please enter a valid phone number',
              },
              maxLength: {
                value: 15,
                message: 'Please enter a valid phone number',
              },
              pattern: {
                value: /^[0-9]+$/,
                message: 'Please enter a valid phone number',
              },
            })}
          />
        </div>

        <div className={styles.buttons}>
          <Button color="dark" variant="contained">
            Next Step
          </Button>
        </div>
      </form>
    </div>
  );
};

export default StepOne;
