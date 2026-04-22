import { useState } from 'react';

/**
 * Custom hook para validación de formularios.
 */
export function useFormValidation<T>(initialValues: T, validate: (values: T) => Partial<Record<keyof T, string>>) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = () => {
    setErrors(validate(values));
  };

  return { values, errors, handleChange, handleBlur };
}
