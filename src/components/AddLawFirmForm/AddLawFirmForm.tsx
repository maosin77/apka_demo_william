import Button from 'components/Button/Button';
import Form from 'components/Form/Form';
import Input from 'components/Input/Input';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AddLawFirmForm.module.css';
import { Field, inputs } from './inputs';
import { db } from '../../db';

const AddLawFirmForm = () => {
  const initialFormState = {
    [Field.name]: '',
    [Field.location]: '',
    [Field.description]: '',
  };

  const [form, setForm] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState({
    [Field.name]: false,
    [Field.location]: false,
    [Field.description]: false,
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isFieldEmpty = (field: Field): boolean => {
    if (form[field].length === 0) {
      return true;
    }
    return false;
  };

  const validate = () =>
    new Promise((resolve, reject) => {
      const errors = {
        [Field.name]: false,
        [Field.location]: false,
        [Field.description]: false,
      };

      if (isFieldEmpty(Field.name)) {
        errors[Field.name] = true;
      }
      if (isFieldEmpty(Field.location)) {
        errors[Field.location] = true;
      }
      if (isFieldEmpty(Field.description)) {
        errors[Field.description] = true;
      }

      setFormErrors(errors);
      const hasError = Object.values(errors).some(item => item);
      if (hasError) {
        reject();
      } else {
        resolve(true);
      }
    });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await validate();
      await db.addLawFirm(form);

      navigate('/lawFirmAdded', { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <Form onSubmit={handleSubmit} header="Dodaj kancelarię">
        {inputs.map(({ placeholder, name, key }) => (
          <Input
            key={key}
            error={formErrors[name]}
            placeholder={placeholder}
            name={name}
            onChange={handleChange}
          />
        ))}
        <Button text="Dodaj" type="submit" />
      </Form>
    </div>
  );
};

export default AddLawFirmForm;
