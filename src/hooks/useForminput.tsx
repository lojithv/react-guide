import { useState } from 'react';

function useFormInput(initialValue:any) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e:any) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
}

export default useFormInput;
